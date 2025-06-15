import { SlottyParameter } from "../../aka-g1009-game-config";
import G1009Util from "../../base/Util/aka-g1009-number-converter";
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import G1009SpinItemActor, { ESpinningState } from "./aka-g1009-spin-item";
import { G1009SpinItemData } from "./aka-g1009-spin-item-data";
const { ccclass, property } = cc._decorator;
@ccclass
export default class G1009SpinPanelActor extends cc.Component {

	@property(G1009SpinItemActor)
	spinItems: G1009SpinItemActor[] = [];

	private spinItemData: G1009SpinItemData = new G1009SpinItemData();
	private spinningItems: G1009SpinItemActor[] = [];
	private isTurbo: boolean = false;
	private isStopImmediately: boolean = false;
	private spinItemScrollCount: number = 0;
	private spinItemStopCount: number = 0;
	private spinItemReadyBounceUpCount: number = 0;
	private isReadyToStop: boolean = false;
	private landingCount: number = 0;
	private tensions: number[] = [];
	private dataResponded: string[] = [];
	private expandWildIndices: number[] = [];
	private tweenHideItem: cc.Tween = null;

	private register(): void {
		G1009EventManager.GetInstance().register("Turbo", this.OnTurbo.bind(this));
		G1009EventManager.GetInstance().register("SpinStarted", this.OnSpinStarted.bind(this));
		G1009EventManager.GetInstance().register("DataRespond", this.onDataRespond.bind(this));
		G1009EventManager.GetInstance().register("StopImmediately", this.stopImmediately.bind(this));
		G1009EventManager.GetInstance().register("SetItems", this.SetItems.bind(this));
		G1009EventManager.GetInstance().register("SetOldItems", this.SetOldItems.bind(this));
		G1009EventManager.GetInstance().register("TensionStarted", this.onTensionStarted.bind(this));
		G1009EventManager.GetInstance().register("TensionGenerated", this.onTensionGenerated.bind(this));
		//G1009EventManager.GetInstance().register("PresentWinStart", this.onHideItems.bind(this));
		G1009EventManager.GetInstance().register("ResetAllLine", this.onResetAllLine.bind(this));
		// G1009EventManager.GetInstance().register("JackpotStarted", this.onHideItems.bind(this));
		G1009EventManager.GetInstance().register("PresentAllWinComplete", this.onPresentAllWinComplete.bind(this));
		G1009EventManager.GetInstance().register("ExpandWildStarted", this.onExpandWildStarted.bind(this));
		G1009EventManager.GetInstance().register("ExpandWildHide", this.onExpandWildHide.bind(this));
	}

	protected onLoad(): void {
		this.register();
		let initData = Object.assign({}, this.spinItemData);
		for (let index = 0; index < this.spinItems.length; index++) {
			const spinItem = this.spinItems[index];
			spinItem.Init(initData);
			spinItem.onStopSpinCompleted = this.spinItemStopCompleted.bind(this);
			spinItem.onReadyToStop = this.readyToStop.bind(this);
			spinItem.onReadyBounceUp = this.spinItemReadyBounceUp.bind(this);
		}
		this.reset();
		this.spinItems.forEach(spinItem => spinItem.Enable());
	}

	private onTensionGenerated(indices: number[]): void {
		this.tensions = indices;
	}

	private onTensionStarted(id: number): void {
		this.spinItems[id].TensionStarted();
	}

	private readyToStop(): void {
		this.spinItemScrollCount++;
	}

	private OnTurbo(isTurbo: boolean) {
		this.isTurbo = isTurbo;
	}

	private onDataRespond(spinResult: string[]) {
		this.dataResponded = spinResult;
		if (this.isStopImmediately && this.checkReadyToStop()) {
			this.stopSpin(spinResult);
		}
		else {
			G1009Util.Instance().WaitUntil(this.checkReadyToStop.bind(this)).then(() => {
				this.stopSpin(spinResult);
			});
		}
	}

	public OnSpinStarted() {
		this.reset();
		this.resetExpandWild();
		this.spinItems.forEach(spinItem => spinItem.Enable());
		this.spin(this.isTurbo);
		if (this.isTurbo === true) {
			this.stopImmediately();
		}
	}

	public spin(isTurbo: boolean) {
		this.spinningItems = this.spinItems;
		let delayTime = isTurbo ? 0 : this.spinItemData.DelayTimeSpinBetweenItems;
		for (let index = 0; index < this.spinItems.length; index++) {
			const spinItem = this.spinItems[index];
			let seq = cc.sequence(
				cc.delayTime(delayTime * index)
				, cc.callFunc(() => {
					spinItem.Spin();
					if (index == this.spinItems.length - 1) {
						this.isReadyToStop = true;
					}
				}, this, spinItem));
			this.node.runAction(seq);
		}
	}

	private stopImmediately() {
		this.landingCount = 0;
		this.isStopImmediately = true;

		if (this.checkDataResponde() && this.checkReadyToStop()) {
			this.node.stopAllActions();
			for (var index = this.spinItemStopCount; index < this.spinningItems.length; index++) {
				if (this.spinningItems[index].state == ESpinningState.Idle) {
					this.spinningItems[index].Spin();
				}
			}
			this.spinningItems.forEach(i => i.StopImmediately(this.isTurbo));
			this.spinningItems.forEach(i => i.Stop(this.dataResponded));

			if (this.spinItemStopCount >= this.spinningItems.length) {
				this.checkSpinEnd();
			}
		}
	}

	private checkReadyToStop() {
		return this.isReadyToStop && this.spinItemScrollCount == this.spinItems.length;
	}

	private spinItemStopCompleted(cellIndices: number[]): void {
		G1009EventManager.GetInstance().notify("SpinItemStopCompleted", {
			cellIndices: cellIndices,
		});
		this.spinItemStopCount++;
		this.checkSpinEnd();
	}

	private spinItemReadyBounceUp(): void {
		this.spinItemReadyBounceUpCount++;
		if (this.isStopImmediately && this.spinItemReadyBounceUpCount == this.spinningItems.length) {
			this.spinItems.forEach(spinItem => spinItem.AllowBounceUp());
		}
	}

	private checkSpinEnd(): void {
		let isSpinEnd = this.spinItemStopCount >= this.spinningItems.length && this.landingCount == 0;

		if (isSpinEnd) {
			this.spinEnd();
		}
	}

	private spinEnd(): void {
		this.reset();
		G1009EventManager.GetInstance().notify("SpinComplete");
	}

	private stopSpin(items: string[]) {
		if (this.isStopImmediately) {
			this.stopImmediately();
			return;
		}

		for (let index = 0; index < this.spinningItems.length; index++) {
			const spinItem = this.spinningItems[index];
			let tensionDuration = 0;
			if (this.tensions.indexOf(index) != -1) {
				tensionDuration = this.spinItemData.TensionDuration * (this.tensions.indexOf(index) + 1);
			}

			let seq = cc.sequence(
				cc.delayTime(this.spinItemData.DelayTimeStopBetweenItems * index + tensionDuration)
				, cc.callFunc(() => {
					spinItem.Stop(items);
				}, this, spinItem));
			this.node.runAction(seq);
		}
	}

	onExpandWildStarted(expandWildIndices: number[]): void {
		this.expandWildIndices = Object.assign([], expandWildIndices);
		expandWildIndices.forEach(cellIndex => {
			let reelIndex = SlottyParameter.GetReelIndex(cellIndex);
			cc.tween(this.spinItems[reelIndex].node)
				.to(0.1, { opacity: 0 })
				.start();
		});
	}

	onExpandWildHide(): void {
		this.spinItems.forEach(spinItem => {
			spinItem.node.y = 0;
			spinItem.node.opacity = 255;
		});
	}

	onLandingGenerated(data: number[]): void {
		this.landingCount = data.length;
	}

	onLandingStarted(): void {
	}

	onLandingCompleted(): void {
		this.landingCount--;
		this.checkSpinEnd();
	}

	private SetItems(reelData: string[]) {
		this.spinItems.forEach(spinItem => spinItem.SetItems(reelData));
	}

	private SetOldItems(data: any) {
		let indices = data.expandWildIndices.map((index: number) => SlottyParameter.GetReelIndex(index));
		this.spinItems.forEach((spinItem, index) => {
			if (!indices.includes(SlottyParameter.GetReelIndex(index))) {
				spinItem.node.opacity = 255;
			} else {
				spinItem.node.opacity = 0;
			}
		});
		this.spinItems.forEach(spinItem => spinItem.SetOldItems(data.Cells));
		if (data.WinLines.length > 0) {
			this.onHideItems();
		}
	}

	private onHideItems(): void {
		// this.spinItems.forEach(spinItem => spinItem.node.opacity = 0)
		this.tweenHideItem = cc.tween(this.node).delay(0.1).call(() => {
			this.spinItems.forEach(spinItem => spinItem.node.opacity = 0)
		}).start();
	}

	private onResetAllLine(): void {
		this.resetItemNotExpandWild();
	}

	private checkDataResponde(): boolean {
		return this.dataResponded.length > 0;
	}

	private reset() {
		this.isReadyToStop = false;
		this.spinItemReadyBounceUpCount = 0;
		this.isStopImmediately = false;
		this.spinItemStopCount = 0;
		this.spinItemScrollCount = 0;
		this.spinningItems = [];
		this.tensions = [];
		this.spinItems.forEach(spinItem => spinItem.Reset());
		this.resetItemNotExpandWild();
		this.dataResponded = [];
	}

	private resetItemNotExpandWild(): void {
		this.tweenHideItem && this.tweenHideItem.stop();
		let indices = this.expandWildIndices.map(index => SlottyParameter.GetReelIndex(index));
		this.spinItems.forEach((spinItem, index) => {
			if (!indices.includes(SlottyParameter.GetReelIndex(index))) {
				spinItem.node.opacity = 255;
			} else {
				spinItem.node.opacity = 0;
			}
		});
	}

	private resetExpandWild(): void {
		this.expandWildIndices = [];
		this.spinItems.forEach(spinItem => spinItem.node.opacity = 255);
	}

	private onPresentAllWinComplete(): void {
		this.spinItems.forEach(spinItem => spinItem.Reset());
		this.resetItemNotExpandWild();
	}
}
