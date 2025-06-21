import { SlottyParameter } from "../../aka-g1009-game-config";
import G1009GameController from "../../base/controller/aka-g1009-game-controller";
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import { G1009BalanceModel } from "../../models/aka-g1009-balance-model";
import { G1009BetModel } from "../../models/aka-g1009-bet-model";
import G1009WinCellItemActor from "./aka-g1009-win-cell-item";

const { ccclass, property } = cc._decorator;
const BIG_WIN_TRIGGER_POINT = 5;
@ccclass
export default class G1009WinPanelActor extends cc.Component {

	Items: G1009WinCellItemActor[] = [];
	cellsResult: string[];
	winLine: G1009WinLineResult[];
	private jackpotWinLine: G1009WinLineResult;
	private triggerWinLine: G1009WinLineResult[];
	private allWinLine: G1009WinLineResult = null;
	winScatters: G1009WinLineResult[];
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
		this.Items = this.node.getComponentsInChildren(G1009WinCellItemActor);
		this.Items.sort(function (a, b) { return a.cellIndex - b.cellIndex });
		this.Items.forEach(item => item.Hide());
	}

	private register(): void {
		G1009EventManager.GetInstance().register("WinDataRespond", this.onSetFinalReSource.bind(this));
		G1009EventManager.GetInstance().register("PresentWinStart", this.onPresentWinStart.bind(this));
		G1009EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
		G1009EventManager.GetInstance().register("ExpandWildStarted", this.onExpandWildStarted.bind(this));
		G1009EventManager.GetInstance().register("ExpandWildHide", this.onExpandWildHide.bind(this));
		G1009EventManager.GetInstance().register("BigWinCompleted", this.onBigWinCompleted.bind(this));
		G1009EventManager.GetInstance().register("JackpotCompleted", this.onJackpotCompleted.bind(this));
		G1009EventManager.GetInstance().register("JackpotStarted", this.onJackpotStarted.bind(this));
		G1009EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
		G1009EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
		G1009EventManager.GetInstance().register("resume", this.onResume.bind(this));
		G1009EventManager.GetInstance().register("PresentAllWinComplete", this.onPresentAllWinComplete.bind(this));
		G1009EventManager.GetInstance().register("BonusWinComplete", this.reset.bind(this));
		G1009EventManager.GetInstance().register("EnterBonus", this.onEnterBonus.bind(this));
		G1009EventManager.GetInstance().register("ExplodeCellsComplete", this.onExplodeCellsComplete.bind(this));

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
				G1009EventManager.GetInstance().notify("JackpotTriggered");
			}
			else {
				this.presentAllWin();
			}
		}, 100);
	}

	onExplodeCellsComplete() {
		this.updateDataWinPanelByComboData();
		// this.isBigwinTriggered = (this.checkBigWinTriggered() && !G1009GameController.GetInstance().CheckBonusPointTrigger() && !this.checkJackpotTriggered());
		this.isBigwinTriggered = (this.checkBigWinTriggered() && !G1009GameController.GetInstance().CheckBonusPointTrigger() && this.jackpotWinPoint <= 0);
		var hasCombo = G1009GameController.GetInstance().CheckComboWinPresentation();
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
			G1009EventManager.GetInstance().notify("IncreaseTotalWin", winPoint);
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
		return this.totalWinPoint / G1009BetModel.GetInstance().GetTotalBetPoint() > BIG_WIN_TRIGGER_POINT;
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
		G1009EventManager.GetInstance().notify("NotificationWinMessage", {
			isAllWin: winData.CheckIsAllWin(),
			WinPoint: winData.GetWinPoint(),
			WinSymbol: winData.GetWinSymbol(),
			WinNumber: winData.GetWinNumber()
		});

		if (this.winPoint > 0) {
			this.totalWinPoint += this.winPoint;
			G1009EventManager.GetInstance().notify("IncreaseTotalWin", this.winPoint);
		}

		this.showWinSymbols(this.allWinLine.GetWinLine());
		this.OnShowLine(this.allWinLine.GetWinNumber());
		this.count = 0;
		this.tweenPresentation = cc.tween(this.node)
			.delay(this.delayTime)
			.call(() => {
				if (G1009GameController.GetInstance().CheckComboWinPresentation()) {
					this.comboData = G1009GameController.GetInstance().GetComboData();
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
		G1009EventManager.GetInstance().notify("StartPresentWinCombo", this.comboData);
		G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_explosive", isLoop: false });
	}

	private startBigWin(): void {
		if (this.isBigwinTriggered) {
			this.Items.forEach(i => i.ShowStaticFrame());
			G1009EventManager.GetInstance().notify("BigWinStarted", this.totalWinPoint);
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
					G1009EventManager.GetInstance().notify("NotificationWinMessage", {
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
			else if (G1009GameController.GetInstance().CheckBonusFeatureTrigger()) {
				const winData = this.triggerWinLine[0];
				if (winData != undefined && winData != null) {
					this.playSoundSFX(false);
					G1009EventManager.GetInstance().notify("NotificationWinMessage", {
						isAllWin: winData.CheckIsAllWin(),
						WinPoint: winData.GetWinPoint(),
						WinSymbol: winData.GetWinSymbol(),
						WinNumber: winData.GetWinNumber()
					});
					this.showTriggerWinSymbols(winData.GetWinLine());
					G1009EventManager.GetInstance().notify("showTriggerWinSymbols");
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
		G1009EventManager.GetInstance().notify("NotificationWinMessage", {
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
		if (!isAllWin && !G1009GameController.GetInstance().CheckBonusFeatureTrigger()) {
			G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_symbolwin', isLoop: false });
		}
	}

	private transitionNextState(): void {
		this.totalWinPoint = G1009GameController.GetInstance().GetTotalWinPoint();
		if (!this.isAlreadyChangeState) {
			this.isAlreadyChangeState = true;
			// if (this.checkJackpotTriggered()) {
			// 	G1009EventManager.GetInstance().notify("JackpotTriggered");
			// 	return;
			// }
			if (G1009GameController.GetInstance().CheckBonusFeatureTrigger()) {
				var dataFeature = G1009GameController.GetInstance().GetFeatureWinData();
				G1009EventManager.GetInstance().notify("FeatureTrigger", dataFeature);
				return;
			}
			if (G1009GameController.GetInstance().CheckFreespinContinue()) {
				this.reset();
				G1009EventManager.GetInstance().notify("Spin");
				return;
			}
			if (G1009GameController.GetInstance().CheckFreespinEnd()) {
				this.reset();
				this.totalWinPoint = 0;
				G1009EventManager.GetInstance().notify("FeatureComplete");
				return;
			}
			this.totalWinPoint = 0;
			console.warn('transitionNextState:, ', this.totalWinPoint);
			G1009EventManager.GetInstance().notify("EndRound");
		}
	}

	private OnShowLine(line: number[]): void {
		G1009EventManager.GetInstance().notify("ShowLine", line);
	}

	private OnHideAllLine(): void {
		G1009EventManager.GetInstance().notify("ResetAllLine");
	}

	private showWinSymbols(winLine: number[]) {
		G1009EventManager.GetInstance().notify("ShowWinCells", winLine);
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
export class G1009WinLineResult {
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
