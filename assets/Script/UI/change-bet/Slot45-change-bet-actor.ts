import Slot45Util from "../../base/Util/Slot45-number-converter";
import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import { Slot45BalanceModel } from "../../models/Slot45-balance-model";
import { Slot45BetModel } from "../../models/Slot45-bet-model";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45ChangeBetActor extends cc.Component {
	@property(cc.Label)
	private lblBetPerLine: cc.Label = null;
	@property(cc.Label)
	private lblTotalBetPoint: cc.Label = null;
	@property(cc.Label)
	private lblBalance: cc.Label = null;
	@property(cc.Button)
	private buttonDecreaseBet: cc.Button = null;
	@property(cc.Button)
	private buttonIncreaseBet: cc.Button = null;


	protected start(): void {
		Slot45EventManager.GetInstance().register("resume", this.onShowBetPanel.bind(this));
		Slot45EventManager.GetInstance().register("ShowBetPanel", this.onShowBetPanel.bind(this));
		Slot45EventManager.GetInstance().register("BalanceChange", this.onBalanceChange.bind(this));
		Slot45EventManager.GetInstance().register("Spin", this.onLockButton.bind(this));
		Slot45EventManager.GetInstance().register("ActiveAuto", this.onLockButton.bind(this));
		Slot45EventManager.GetInstance().register("SetBet", this.SetBetValues.bind(this));
	}

	private onLockButton(): void {
		this.buttonDecreaseBet.interactable = false;
		this.buttonIncreaseBet.interactable = false;
	
	}

	private onSpinComplete(): void {
		this.buttonDecreaseBet.interactable = this.validatorButtonIncreaseBet();
		this.buttonIncreaseBet.interactable = this.validatorButtonIncreaseBet();
		
	}

	private onBalanceChange(point): void {
		this.lblBalance.string = Slot45Util.Instance().NumberFormatWithoutCharacter(point);
	}

	private onShowBetPanel(): void {
		this.lblBetPerLine.string = Slot45Util.Instance().NumberFormatWithoutCharacter(Slot45BetModel.GetInstance().GetCurrentBetPerLine());
		this.lblBalance.string = Slot45Util.Instance().NumberFormatWithoutCharacter(Slot45BalanceModel.GetInstance().GetBalance());
		this.lblTotalBetPoint.string = Slot45Util.Instance().NumberFormatWithoutCharacter(Slot45BetModel.GetInstance().GetTotalBetPoint());
		this.buttonDecreaseBet.interactable = this.validatorButtonIncreaseBet();
		this.buttonIncreaseBet.interactable = this.validatorButtonIncreaseBet();
		
	}

	private validatorButtonIncreaseBet(): boolean {
		return Slot45BetModel.GetInstance().GetNextTotalBetPoint() <= Slot45BalanceModel.GetInstance().GetBalance() && Slot45BetModel.GetInstance().GetNextBetPerLine() != Slot45BetModel.GetInstance().GetCurrentBetPerLine();
	}

	private validatorButtonDecreaseBet(): boolean {
		return Slot45BetModel.GetInstance().GetPreviousBetPerLine() <= Slot45BalanceModel.GetInstance().GetBalance() && Slot45BetModel.GetInstance().GetPreviousBetPerLine() != Slot45BetModel.GetInstance().GetCurrentBetPerLine();
	}

	public IncreaseBetPerLine() {
		if (this.validatorButtonIncreaseBet())
		{
			Slot45EventManager.GetInstance().notify("SetBetIncrease",Slot45BetModel.GetInstance().GetNextBetPerLineIndex());
			Slot45BetModel.GetInstance().IncreaseBetPerLine();					
		}
		this.changeBet();
	}

	public DecreaseBetPerLine() {
		if (this.validatorButtonDecreaseBet())
		{
			Slot45BetModel.GetInstance().DecreaseBetPerLine();
			this.changeBet();
		}
	}

	public SetBetValues(betIndex: number) {
		Slot45BetModel.GetInstance().SetBetbyIndex(betIndex);
		this.changeBet();	
	}

	private changeBet(): void {

		this.lblBetPerLine.string = Slot45Util.Instance().NumberFormatWithoutCharacter(Slot45BetModel.GetInstance().GetCurrentBetPerLine());
		this.lblTotalBetPoint.string = Slot45Util.Instance().NumberFormatWithoutCharacter(Slot45BetModel.GetInstance().GetTotalBetPoint());
		Slot45EventManager.GetInstance().notify("ChangeBet");
	}

	public ShowBetClick():void
	{
		this.node.active = !this.node.active;
	}
}