import G1009Util from "../../base/Util/aka-g1009-number-converter";
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import { G1009BalanceModel } from "../../models/aka-g1009-balance-model";
import { G1009BetModel } from "../../models/aka-g1009-bet-model";

const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009ChangeBetActor extends cc.Component {
	@property(cc.Label)
	private lblBetPerLine: cc.Label = null;
	@property(cc.Label)
	private lblTotalBetPoint: cc.Label = null;
	@property(cc.Label)
	private lblBalance: cc.Label = null;
	@property(cc.Button)
	private buttonShowBet: cc.Button = null;


	protected start(): void {
		G1009EventManager.GetInstance().register("resume", this.onShowBetPanel.bind(this));
		G1009EventManager.GetInstance().register("ShowBetPanel", this.onShowBetPanel.bind(this));
		G1009EventManager.GetInstance().register("BalanceChange", this.onBalanceChange.bind(this));
		G1009EventManager.GetInstance().register("Spin", this.onLockButton.bind(this));
		G1009EventManager.GetInstance().register("ActiveAuto", this.onLockButton.bind(this));
		G1009EventManager.GetInstance().register("SetBet", this.SetBetValues.bind(this));
	}

	private onLockButton(): void {
		this.buttonShowBet.interactable = false;
	
	}

	private onSpinComplete(): void {
		this.buttonShowBet.interactable = this.validatorButtonIncreaseBet();
		
	}

	private onBalanceChange(point): void {
		this.lblBalance.string = G1009Util.Instance().NumberFormat(point);
	}

	private onShowBetPanel(): void {
		this.lblBetPerLine.string = G1009Util.Instance().NumberFormat(G1009BetModel.GetInstance().GetCurrentBetPerLine());
		this.lblBalance.string = G1009Util.Instance().NumberFormat(G1009BalanceModel.GetInstance().GetBalance());
		this.lblTotalBetPoint.string = G1009Util.Instance().NumberFormat(G1009BetModel.GetInstance().GetTotalBetPoint());
		this.buttonShowBet.interactable = this.validatorButtonIncreaseBet();
		
	}

	private validatorButtonIncreaseBet(): boolean {
		return G1009BetModel.GetInstance().GetNextTotalBetPoint() <= G1009BalanceModel.GetInstance().GetBalance() && G1009BetModel.GetInstance().GetNextBetPerLine() != G1009BetModel.GetInstance().GetCurrentBetPerLine();
	}

	private validatorButtonDecreaseBet(): boolean {
		return G1009BetModel.GetInstance().GetPreviousBetPerLine() <= G1009BalanceModel.GetInstance().GetBalance() && G1009BetModel.GetInstance().GetPreviousBetPerLine() != G1009BetModel.GetInstance().GetCurrentBetPerLine();
	}

	public IncreaseBetPerLine() {
		if (this.validatorButtonIncreaseBet())
		{
			G1009EventManager.GetInstance().notify("SetBetIncrease",G1009BetModel.GetInstance().GetNextBetPerLineIndex());
			G1009BetModel.GetInstance().IncreaseBetPerLine();					
		}
		else
		{
			G1009BetModel.GetInstance().SetBetToMin();		
			G1009EventManager.GetInstance().notify("SetBetIncrease",0);
		}
		this.changeBet();
	}

	public DecreaseBetPerLine() {
		if (this.validatorButtonDecreaseBet())
		{
			G1009BetModel.GetInstance().DecreaseBetPerLine();
			this.changeBet();
		}
	}

	public SetBetValues(betIndex: number) {
		G1009BetModel.GetInstance().SetBetbyIndex(betIndex);
		this.changeBet();	
	}

	private changeBet(): void {

		this.lblBetPerLine.string = G1009Util.Instance().NumberFormat(G1009BetModel.GetInstance().GetCurrentBetPerLine());
		this.lblTotalBetPoint.string = G1009Util.Instance().NumberFormat(G1009BetModel.GetInstance().GetTotalBetPoint());
		G1009EventManager.GetInstance().notify("ChangeBet");
	}

	public ShowBetClick():void
	{
		this.node.active = !this.node.active;
	}
}