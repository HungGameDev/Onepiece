

const { ccclass, property } = cc._decorator;
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import G1009CellItemActor from "./aka-g1009-cell-item";
import { G1009SpinItemData } from "./aka-g1009-spin-item-data";
const MAX_LOOP = 10;
enum EDirection {
	Down = 1,
	Up = -1,
}

export enum ESpinningState {
	Idle = 0,
	Momentum = 1,
	Scroll = 2,
	StopScroll = 3,
	Bounce = 4,
	WaitingBounce = 5,
}
@ccclass
export default class G1009SpinItemActor extends cc.Component {

	@property(G1009CellItemActor)
	cellItems: G1009CellItemActor[] = [];

	@property
	direction: EDirection = EDirection.Down;

	state: ESpinningState = ESpinningState.Idle;
	scrollSpeed: number = 0;
	originSpeed: number = 0;
	tensionSpeedMultiplier: number = 0;
	momentumRange: number = 0;
	momentumSpeed: number = 0;
	bounceRange: number = 0;
	bounceSpeed: number = 0;
	height: number = 0;
	cellHeight: number = 0;
	isStopImmediately: boolean = false;
	isTurbo: boolean = false;
	allowBounceUp: boolean = true;
	resultItems: string[] = [];
	rawResultItems: string[] = [];
	reelData: string[] = [];
	originYCoordinates: number[] = [];
	originIndices = [];
	cellIndices: number[] = [];
	despawnYCoordinate = null;
	tweenUpdate = new cc.Tween({});
	subMask = null;
	onReadyToStop: Function = () => { };
	onStopSpin: Function = () => { };
	onStopSpinCompleted: Function = () => { };
	onReadyBounceUp: Function = () => { };
	repeatCount: number = 0;

	public Init(initData: G1009SpinItemData): void {
		this.scrollSpeed = initData.ScrollSpeed;
		this.originSpeed = this.scrollSpeed;
		this.tensionSpeedMultiplier = initData.TensionSpeedMultiplier;
		this.momentumRange = initData.MomentumRange;
		this.bounceRange = initData.BounceRange;
		this.bounceSpeed = initData.BounceSpeed;
		this.momentumSpeed = initData.MomentumSpeed;
		this.originYCoordinates = this.cellItems.map(i => i.node.y);
		this.cellHeight = this.originYCoordinates[0] - this.originYCoordinates[1];
		let top = this.originYCoordinates[0]
		let bot = this.originYCoordinates[this.originYCoordinates.length - 1] - this.cellHeight;
		this.height = Math.abs(top - bot);
		this.despawnYCoordinate = this.direction == EDirection.Up ? top : bot;
		this.reelData = initData.ReelDefaultData;
		for (let index = 0; index < this.cellItems.length; index++) {
			let cellIndex = this.cellItems[index].GetCellIndex();
			this.originIndices.push(cellIndex);
			if (cellIndex >= 0) {
				this.cellIndices.push(cellIndex);
			}
			if (cellIndex == -1) {
				let randomIndex = Math.floor(Math.random() * 4);
				this.cellItems[index].SetItem(this.reelData[randomIndex]);
			}
			else { this.cellItems[index].SetItem(this.reelData[cellIndex]); }
		}
	}

	public SetItems(reelData: string[]) {
		for (let index = 0; index < this.cellItems.length; index++) {
			let cellIndex = this.cellItems[index].GetCellIndex();
			this.cellItems[index].SetItem(reelData[cellIndex]);
		}
	}

	public SetOldItems(reelData: string[]) {
		for (let index = 0; index < this.cellItems.length; index++) {
			let cellIndex = this.cellItems[index].GetCellIndex();
			this.cellItems[index].SetOldItem(reelData[cellIndex]);
		}
	}

	public Spin(): void {

		if (this.state == ESpinningState.Idle) {
			G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_reelspin', isLoop: false });
			this.momentum();
		}
	}

	private momentum(): void {
		if (this.isTurbo || this.momentumRange == 0) {
			this.startScroll();
			return;
		}
		this.state = ESpinningState.Momentum;
		let isMomentumComplete = false;
		for (let index = 0; index < this.cellItems.length; index++) {
			let cellItem = this.cellItems[index];
			cellItem.node.y += this.momentumSpeed * this.direction;
			isMomentumComplete = cellItem.node.y >= (this.originYCoordinates[index] + this.momentumRange) * this.direction;
		}

		if (isMomentumComplete) {
			this.startScroll();
		}
	}

	private startScroll(): void {
		this.cellItems.forEach(i => i.StartSpin());
		this.scroll();
	}

	protected lateUpdate(dt: number): void {
		if (this.repeatCount >= 0.02) {
			this.fixUpdate();
			this.repeatCount = 0;
		}
		this.repeatCount += dt;
	}

	protected scroll(): void {

		this.state = ESpinningState.Idle;
		let isScrollComplete = false;
		for (let index = 0; index < this.cellItems.length; index++) {
			let cellItem = this.cellItems[index];
			cellItem.node.y -= this.scrollSpeed * this.direction;
			let isRespawn = false;
			let loopCount = 0;
			while (cellItem.node.y <= this.despawnYCoordinate && loopCount++ < MAX_LOOP) {
				cellItem.node.y += this.height * this.direction;
				isRespawn = true;
			}

			if (isRespawn) {
				if (this.rawResultItems.length > 0) {
					if (this.checkReadyToStop() === true) {
						this.onReadyToStop(this.cellIndices);
						this.fixCellIndex(index);
					}
					isScrollComplete = this.resultItems.length == 0;
				}
				this.setSpinningItem(cellItem, cellItem.cellIndex);
			}

			if (isScrollComplete) {
				this.cellItems.sort(function (a, b) {
					return b.node.y - a.node.y;
				});
				this.setFinalResults();
				this.stopScroll();
				return;
			}
		}

		this.state = ESpinningState.Scroll;
	}

	private fixCellIndex(firstIndex: number): void {
		let index = this.cellItems.length;
		let cellIndices = Object.assign([], this.cellIndices);
		do {
			let cellIndex = cellIndices.pop();
			if (cellIndex == null) {
				cellIndex = -1;
			}
			this.cellItems[(firstIndex + index) % this.cellItems.length].SetCellIndex(cellIndex);
		} while (--index > 0);
	}

	protected setFinalResults(): void {
		let resultIndex = 0;
		for (let index = 0; index < this.cellItems.length; index++) {
			let cellItem = this.cellItems[index];
			let cellIndex = this.originIndices[index];
			cellItem.node.y = this.originYCoordinates[index];
			cellItem.SetCellIndex(cellIndex);
			if (cellIndex >= 0) {
				cellItem.SetItem(this.rawResultItems[resultIndex++]);
			} else {
				let randomIndex = Math.floor(Math.random() * 4);
				cellItem.SetItem(this.reelData[randomIndex]);
			}
		}
	}

	private setSpinningItem(cellItem: G1009CellItemActor, index: number) {
		if (this.rawResultItems.length > 0) {
			let item = this.resultItems.pop();
			cellItem.SetScrollItem(item);
		} else {
			let loopCount = 0;
			do {
				cellItem.SetScrollItem(this.reelData[index]);
			} while (cellItem.CheckValid() == false && loopCount++ < MAX_LOOP);
		}
	}

	protected stopScroll(): void {
		this.state = ESpinningState.StopScroll;
		let isStopScrollComplete = false;
		for (let index = 0; index < this.cellItems.length; index++) {
			let cellItem = this.cellItems[index];
			let bounceDestination = (this.originYCoordinates[index] - this.bounceRange) * this.direction;
			let loopCount = 0;
			cellItem.node.y -= this.scrollSpeed * this.direction;
			while (cellItem.node.y < bounceDestination && loopCount++ < MAX_LOOP) {
				cellItem.node.y = bounceDestination;
				isStopScrollComplete = true;
			}
		}

		if (isStopScrollComplete) {
			this.onStopSpin(this.cellIndices);
			this.onReadyBounceUp();
			this.bounce();
		}
	}

	protected bounce(): void {

		this.state = ESpinningState.Bounce;

		if (this.allowBounceUp == false && this.isStopImmediately == true) {
			this.state = ESpinningState.WaitingBounce;
			return;
		}

		let isBounceComplete = false;
		for (let index = 0; index < this.cellItems.length; index++) {
			let cellItem = this.cellItems[index];
			cellItem.node.y += this.bounceSpeed * this.direction;
			isBounceComplete = cellItem.node.y >= (this.originYCoordinates[index]) * this.direction;
		}

		if (isBounceComplete) {
			this.stopComplete();
		}
	}

	protected stopComplete(): void {
		G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_reelstop', isLoop: false });
		this.cellItems.forEach(cellItem => cellItem.StopSpin());
		this.state = ESpinningState.Idle;
		this.onStopSpinCompleted(this.cellIndices);
		this.setDefaultPosition();
	}

	public StopImmediately(isTurbo: boolean) {

		this.isStopImmediately = true;
		this.isTurbo = isTurbo === true;
	}

	public TensionStarted(): void {

		this.scrollSpeed *= this.tensionSpeedMultiplier;
	}

	public Reset(): void {

		this.state = ESpinningState.Idle;
		this.allowBounceUp == true;
		this.isStopImmediately = false;
		this.isTurbo = false;
		this.scrollSpeed = this.originSpeed;
		this.rawResultItems= [];
		this.resultItems = [];

		for (let index = 0; index < this.cellItems.length; index++) {
			let cellItem = this.cellItems[index];
			cellItem.node.y = this.originYCoordinates[index];
			cellItem.SetCellIndex(this.originIndices[index]);
			cellItem.Reset();
		}
	}

	private setDefaultPosition(): void {
		for (let index = 0; index < this.cellItems.length; index++) {
			let cellItem = this.cellItems[index];
			cellItem.node.y = this.originYCoordinates[index];
			cellItem.SetCellIndex(this.originIndices[index]);
			cellItem.Reset();
		}
	}
	public Enable(): void {

		this.cellItems.forEach(cell => cell.Enable());
	}
	public Disable(): void {
		this.cellItems.forEach(cell => cell.Disable());
	}

	public AllowBounceUp() {
		this.allowBounceUp == true;
		if (this.state == ESpinningState.WaitingBounce) {
			this.bounce();
		}
	}

	protected setResultItems(items: string[]): void {
		this.resultItems = [];
		for (let index = 0; index < this.cellItems.length; index++) {
			let cellItem = this.cellItems[index];
			let item = items[cellItem.GetCellIndex()];
			if (item) {
				this.resultItems.push(item);
				this.rawResultItems.push(item);
			}
		}
	}

	public Stop(items: string[]): void {
		this.setResultItems(items);
		if (this.direction == EDirection.Up) {
			this.resultItems.reverse();
			this.rawResultItems.reverse();
		}

		if (this.state != ESpinningState.Idle) {
			if (this.state == ESpinningState.Bounce || this.state == ESpinningState.StopScroll) {
				return;
			}
			this.state = ESpinningState.Idle;
			this.resultItems.length = 0;
			this.setFinalResults();
			this.stopScroll();
		}
	}

	public checkReadyToStop(): boolean {
		let isReady = this.rawResultItems.length > 0 && this.resultItems.length === this.rawResultItems.length;
		return isReady;
	}


	protected fixUpdate(): void {

		switch (this.state) {
			case ESpinningState.Idle:
			case ESpinningState.WaitingBounce:
				return;
			case ESpinningState.Momentum:
				this.momentum();
				return;
			case ESpinningState.Scroll:
				this.scroll();
				return;
			case ESpinningState.StopScroll:
				this.stopScroll();
				return;
			case ESpinningState.Bounce:
				this.bounce();
				return;
		}
	}
}