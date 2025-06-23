import { SlottyParameter } from "../../Slot45-game-config";
import Slot45GameController from "../../base/controller/Slot45-game-controller";
import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import { Slot45BalanceModel } from "../../models/Slot45-balance-model";
import { Slot45BetModel } from "../../models/Slot45-bet-model";
import Slot45WinCellItemActor from "./Slot45-win-cell-item";

const { ccclass, property } = cc._decorator;
const BIG_WIN_TRIGGER_POINT = 5;
@ccclass
export default class Slot45WinPanelActor extends cc.Component {

	Items: Slot45WinCellItemActor[] = [];
	cellsResult: string[];
	winLine: Slot45WinLineResult[];
	private jackpotWinLine: Slot45WinLineResult;
	private triggerWinLine: Slot45WinLineResult[];
	private allWinLine: Slot45WinLineResult = null;
	winScatters: Slot45WinLineResult[];
	featureDatas: [];
	winNumber: number;
	count: number = 0;
	delayTime: number = 1;
	delayTransitionTime: number = 0.1;
	delayedCount: number = 0;
	showAllCount: number = 0;
	isFreespins: boolean = false;
	totalFreeSpin: number = 0;
	isAlreadyChangeState: boolean = false;
	private winPoint: number = 0;
	private totalWinPoint: number = 0;
	private jackpotWinPoint: number = 0;
	private isBigwinTriggered: boolean = false;
	private expandWildIndices: number[] = [];
	private tweenPresentation: cc.Tween = null;
	private tweenPresentationWinLine: cc.Tween = null;

	private isCompleteOneLoop: boolean = false;

	private comboData = null;

	protected onLoad(): void {
		this.register();
		this.Items = this.node.getComponentsInChildren(Slot45WinCellItemActor);
		this.Items.sort(function (a, b) { return a.cellIndex - b.cellIndex });
		this.Items.forEach(item => item.Hide());
	}

	private register(): void {
		Slot45EventManager.GetInstance().register("WinDataRespond", this.onSetFinalReSource.bind(this));
		Slot45EventManager.GetInstance().register("PresentWinStart", this.onPresentWinStart.bind(this));
		Slot45EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
		Slot45EventManager.GetInstance().register("ExpandWildStarted", this.onExpandWildStarted.bind(this));
		Slot45EventManager.GetInstance().register("ExpandWildHide", this.onExpandWildHide.bind(this));
		Slot45EventManager.GetInstance().register("BigWinCompleted", this.onBigWinCompleted.bind(this));
		Slot45EventManager.GetInstance().register("JackpotCompleted", this.onJackpotCompleted.bind(this));
		Slot45EventManager.GetInstance().register("JackpotStarted", this.onJackpotStarted.bind(this));
		Slot45EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
		Slot45EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
		Slot45EventManager.GetInstance().register("resume", this.onResume.bind(this));
		Slot45EventManager.GetInstance().register("PresentAllWinComplete", this.onPresentAllWinComplete.bind(this));
		Slot45EventManager.GetInstance().register("BonusWinComplete", this.reset.bind(this));
		Slot45EventManager.GetInstance().register("EnterBonus", this.onEnterBonus.bind(this));
		Slot45EventManager.GetInstance().register("ExplodeCellsComplete", this.onExplodeCellsComplete.bind(this));

	}

	private onResume(data: any) {
		if (data.isFreespins) {
			this.isFreespins = true;
			this.totalWinPoint = data.totalWinPoint;
		}
	}

	private onEnterFreespins(): void {
		this.isFreespins = true;
	}

	private onFeatureWinCompleted(data): void {

		if (data && data.hitRule == "bonus") {
			return;
		}
		this.isFreespins = false;
	}

	private onSpinStarted(): void {
		this.isCompleteOneLoop = false;
		this.expandWildIndices = [];
		this.reset();
	}

	private onPresentWinStart(): void {
		setTimeout(() => {
			this.Items.forEach(item => item.Show());
			this.isAlreadyChangeState = false;
			if (this.checkJackpotTriggered()) {
				Slot45EventManager.GetInstance().notify("JackpotTriggered");
			}
			else {
				this.presentAllWin();
			}
		}, 100);
	}

	onExplodeCellsComplete() {
		this.updateDataWinPanelByComboData();
		// this.isBigwinTriggered = (this.checkBigWinTriggered() && !Slot45GameController.GetInstance().CheckBonusPointTrigger() && !this.checkJackpotTriggered());
		this.isBigwinTriggered = (this.checkBigWinTriggered() && !Slot45GameController.GetInstance().CheckBonusPointTrigger() && this.jackpotWinPoint <= 0);
		var hasCombo = Slot45GameController.GetInstance().CheckComboWinPresentation();
		if (hasCombo) {
			this.onPresentWinStart();
		}
		else if (this.isBigwinTriggered) {
			this.startBigWin();
		}
		else {
			this.transitionNextState();
		}
	}

	onEnterBonus(dataWinBonus) {
		var winPoint = 0;
		dataWinBonus.forEach(data => {
			winPoint += data.winPoint;
		});
		if (winPoint > 0) {
			this.totalWinPoint += winPoint;
			Slot45EventManager.GetInstance().notify("IncreaseTotalWin", winPoint);
		}
	}

	updateDataWinPanelByComboData() {
		this.cellsResult = this.comboData.Cells;
		this.winLine = this.comboData.WinLines;
		this.allWinLine = this.comboData.allWinLine;
		this.winPoint = this.comboData.winPoint;
		for (let index = 0; index < this.cellsResult.length; index++) {
			this.Items[index].Hide();
			this.Items[index].SetItem(this.cellsResult[index]);
		}
	}

	private checkBigWinTriggered(): boolean {
		return this.totalWinPoint / Slot45BetModel.GetInstance().GetTotalBetPoint() > BIG_WIN_TRIGGER_POINT;
	}

	private checkJackpotTriggered(): boolean {
		var haveWinLineJackpot = false;
		for (let index = 0; index < this.winLine.length; index++) {
			const winLineData = this.winLine[index];
			if (winLineData.GetWinSymbol() == "Jackpot" && winLineData.GetWinLine().length == 5) {
				haveWinLineJackpot = true;
				break;
			}
		}
		return this.jackpotWinPoint > 0 && haveWinLineJackpot;
	}

	protected presentAllWin(): void {
		const winData = this.allWinLine;
		this.playSoundSFX(winData.CheckIsAllWin());
		Slot45EventManager.GetInstance().notify("NotificationWinMessage", {
			isAllWin: winData.CheckIsAllWin(),
			WinPoint: winData.GetWinPoint(),
			WinSymbol: winData.GetWinSymbol(),
			WinNumber: winData.GetWinNumber()
		});

		if (this.winPoint > 0) {
			this.totalWinPoint += this.winPoint;
			Slot45EventManager.GetInstance().notify("IncreaseTotalWin", this.winPoint);
		}

		this.showWinSymbols(this.allWinLine.GetWinLine());
		this.OnShowLine(this.allWinLine.GetWinNumber());
		this.count = 0;
		this.tweenPresentation = cc.tween(this.node)
			.delay(this.delayTime)
			.call(() => {
				if (Slot45GameController.GetInstance().CheckComboWinPresentation()) {
					this.comboData = Slot45GameController.GetInstance().GetComboData();
					this.presentWinCombo();
				}
				else {
					this.sequenceWinPresentation();
					this.transitionNextState();
				}
			})
			.start();
	}

	private presentWinCombo() {
		this.reset();
		Slot45EventManager.GetInstance().notify("StartPresentWinCombo", this.comboData);
		Slot45EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_explosive", isLoop: false });
	}

	private startBigWin(): void {
		if (this.isBigwinTriggered) {
			this.Items.forEach(i => i.ShowStaticFrame());
			Slot45EventManager.GetInstance().notify("BigWinStarted", this.totalWinPoint);
		} else {
			this.onBigWinCompleted();
		}
	}

	private onBigWinCompleted(): void {
		this.Items.forEach(i => i.HideStaticFrame());
		var delay = 0;
		if (this.isBigwinTriggered) {
			delay = 0.5;
		}
		setTimeout(() => {
			if (this.checkJackpotTriggered()) {
				const winData = this.jackpotWinLine[0];
				if (winData != undefined && winData != null) {
					this.playSoundSFX(false);
					Slot45EventManager.GetInstance().notify("NotificationWinMessage", {
						isAllWin: winData.CheckIsAllWin(),
						WinPoint: winData.GetWinPoint(),
						WinSymbol: winData.GetWinSymbol(),
						WinNumber: winData.GetWinNumber()
					});
					this.showTriggerWinSymbols(winData.GetWinLine());
					this.OnShowLine(winData.GetWinNumber());
					this.tweenPresentation = cc.tween(this.node)
						.delay(this.delayTransitionTime)
						.call(() => {
							this.transitionNextState();
						})
						.start();
				}

				return;
			}
			else if (Slot45GameController.GetInstance().CheckBonusFeatureTrigger()) {
				const winData = this.triggerWinLine[0];
				if (winData != undefined && winData != null) {
					this.playSoundSFX(false);
					Slot45EventManager.GetInstance().notify("NotificationWinMessage", {
						isAllWin: winData.CheckIsAllWin(),
						WinPoint: winData.GetWinPoint(),
						WinSymbol: winData.GetWinSymbol(),
						WinNumber: winData.GetWinNumber()
					});
					this.showTriggerWinSymbols(winData.GetWinLine());
					Slot45EventManager.GetInstance().notify("showTriggerWinSymbols");
					this.OnShowLine(winData.GetWinNumber());
					this.tweenPresentation = cc.tween(this.node)
						.delay(this.delayTransitionTime)
						.call(() => {
							this.transitionNextState();
						})
						.start();
				}
				return;
			} else {
				this.count = 0;
				this.sequenceWinPresentation();
			}
			this.transitionNextState();
		}, delay);
	}

	private sequenceWinPresentation(): void {
		if (!(this.winLine.length > 0)) {
			return;
		}
		if (this.count >= this.winLine.length) {
			this.count = 0;
			this.isCompleteOneLoop = true;
		}
		const winIndex = this.count;
		const winData = this.winLine[this.count];
		if (!this.isCompleteOneLoop)
			this.playSoundSFX(winData.CheckIsAllWin());
		Slot45EventManager.GetInstance().notify("NotificationWinMessage", {
			isAllWin: winData.CheckIsAllWin(),
			WinPoint: winData.GetWinPoint(),
			WinSymbol: winData.GetWinSymbol(),
			WinNumber: winData.GetWinNumber()
		});
		this.showWinSymbols(this.winLine[winIndex].GetWinLine());
		this.OnShowLine(this.winLine[winIndex].GetWinNumber());
		this.count++;
		this.tweenPresentationWinLine = cc.tween(this.node)
			.delay(this.delayTime)
			.call(() => {
				this.sequenceWinPresentation();
			})
			.start();
	}

	private onJackpotStarted(): void {
		this.showWinSymbols(this.jackpotWinLine.GetWinLine());
	}

	private onJackpotCompleted(): void {
		this.presentAllWin()
	}

	private onSetFinalReSource(finalResult: any): void {
		let _finalResult = Object.assign({}, finalResult);
		this.cellsResult = _finalResult.Cells;
		this.winLine = _finalResult.WinLines;
		this.allWinLine = _finalResult.allWinLine;
		this.jackpotWinLine = _finalResult.jackpotWinLine;
		this.triggerWinLine = _finalResult.WinScatters.concat(_finalResult.WinBonus);
		this.featureDatas = _finalResult.featureDatas;
		this.winPoint = finalResult.winPoint;
		this.jackpotWinPoint = finalResult.jackpotWinPoint;
		for (let index = 0; index < this.cellsResult.length; index++) {
			this.Items[index].Hide();
			this.Items[index].SetItem(this.cellsResult[index]);
		}
	}

	private playSoundSFX(isAllWin: boolean): void {
		if (!isAllWin && !Slot45GameController.GetInstance().CheckBonusFeatureTrigger()) {
			Slot45EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_symbolwin', isLoop: false });
		}
	}

	private transitionNextState(): void {
		this.totalWinPoint = Slot45GameController.GetInstance().GetTotalWinPoint();
		if (!this.isAlreadyChangeState) {
			this.isAlreadyChangeState = true;
			// if (this.checkJackpotTriggered()) {
			// 	Slot45EventManager.GetInstance().notify("JackpotTriggered");
			// 	return;
			// }
			if (Slot45GameController.GetInstance().CheckBonusFeatureTrigger()) {
				var dataFeature = Slot45GameController.GetInstance().GetFeatureWinData();
				Slot45EventManager.GetInstance().notify("FeatureTrigger", dataFeature);
				return;
			}
			if (Slot45GameController.GetInstance().CheckFreespinContinue()) {
				this.reset();
				Slot45EventManager.GetInstance().notify("Spin");
				return;
			}
			if (Slot45GameController.GetInstance().CheckFreespinEnd()) {
				this.reset();
				this.totalWinPoint = 0;
				Slot45EventManager.GetInstance().notify("FeatureComplete");
				return;
			}
			this.totalWinPoint = 0;
			console.warn('transitionNextState:, ', this.totalWinPoint);
			Slot45EventManager.GetInstance().notify("EndRound");
		}
	}

	private OnShowLine(line: number[]): void {
		Slot45EventManager.GetInstance().notify("ShowLine", line);
	}

	private OnHideAllLine(): void {
		Slot45EventManager.GetInstance().notify("ResetAllLine");
	}

	private showWinSymbols(winLine: number[]) {
		Slot45EventManager.GetInstance().notify("ShowWinCells", winLine);
		for (let index = 0; index < winLine.length; index++) {
			this.Items.find(item => item.cellIndex == winLine[index]).PlayWinAnimation();
		}
	}

	private showTriggerWinSymbols(winLine: number[]) {
		for (let index = 0; index < winLine.length; index++) {
			this.Items.find(item => item.cellIndex == winLine[index]).PlayWinTrigger();
		}
	}

	private onExpandWildStarted(expandWildIndices: any) {
		this.expandWildIndices = Object.assign([], expandWildIndices);
		this.expandWildIndices.forEach(index => {
			let reelIndex = SlottyParameter.GetReelIndex(index);
			this.Items[SlottyParameter.GetCellIndex(reelIndex, 0)].node.active = false;
			this.Items[SlottyParameter.GetCellIndex(reelIndex, 1)].node.active = false;
			this.Items[SlottyParameter.GetCellIndex(reelIndex, 2)].node.active = false;
		})
	}

	private onExpandWildHide() {
		this.Items.forEach(item => item.node.active = true);
	}

	private reset(): void {
		this.tweenPresentation && this.tweenPresentation.stop();
		this.tweenPresentationWinLine && this.tweenPresentationWinLine.stop();
		this.isBigwinTriggered = false;
		this.cellsResult = [];
		this.Items.forEach(item => {
			item.Hide();
			item.Reset();
			item.node.active = true;
		});
		this.delayedCount = 0;
		this.count = 0;
		this.OnHideAllLine();
	}

	private onPresentAllWinComplete(): void {
		// this.Items.forEach(item => {
		// 	item.node.active = false;
		// 	item.node.opacity = 0;
		// });
		// this.OnHideAllLine();
	}
}
export class Slot45WinLineResult {
	private winLine: number[];
	private winPoint: number;
	private winNumber: number[];
	private winSymbol: string;
	private isAllWin: boolean;
	private isTriggerWinLine: boolean;

	public constructor(winline: number[], winPoint: number, winNumber: number[], winSymbol: string = "", isAllWin: boolean = false, isTriggerWinLine: boolean = false) {
		this.winLine = winline;
		this.winPoint = winPoint;
		this.winNumber = winNumber;
		this.winSymbol = winSymbol;
		this.isAllWin = isAllWin;
		this.isTriggerWinLine = isTriggerWinLine;
	}

	public GetWinLine(): number[] {
		return this.winLine;
	}

	public GetWinNumber(): number[] {
		return this.winNumber;
	}

	public GetWinSymbol(): string {
		return this.winSymbol;
	}

	public GetWinPoint(): number {
		return this.winPoint;
	}

	public CheckIsAllWin(): boolean {
		return this.isAllWin;
	}

	public CheckIsTriggerWinLine(): boolean {
		return this.isTriggerWinLine;
	}

	public SetWinSymbol(winSymbol: string): void {
		this.winSymbol = winSymbol;
	}
}
