import G1009Util from "../../base/Util/aka-g1009-number-converter";
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009PopupHistoryItem extends cc.Component {

	@property(cc.Label)
	private lblSession: cc.Label = null;
	@property(cc.Label)
	private lblTime: cc.Label = null;
	@property(cc.Label)
	private lblTotalBetPoint: cc.Label = null;
	@property(cc.Label)
	private lblTotalWin: cc.Label = null;

	@property(cc.Sprite)
	private sprBackround: cc.Sprite = null;

	private spinResuilt: string[] = [];

	private session: string = "";
	private totalWin: string = "";

	public SetInfoItem(session: string, time: string, totalBetPoint: number, totalWin: number, spinData: string[] = [], count) {
		this.sprBackround.node.active = count % 2 == 0;
		this.lblSession.string = session;
		this.lblTime.string = time;
		this.lblTotalBetPoint.string = G1009Util.Instance().NumberFormat(totalBetPoint);
		this.lblTotalWin.string = G1009Util.Instance().NumberFormat(totalWin);
		this.node.active = true;
		this.spinResuilt = spinData;
		this.totalWin = G1009Util.Instance().NumberFormat(totalWin);
		this.session = session;
	}

	public Hide(): void {
		this.node.active = false;
	}

	public onButtonClick(): void {
		G1009EventManager.GetInstance().notify("ShowDetailHistory",{Session:this.session,TotalWin:this.totalWin,SpinResuilt:this.spinResuilt});
	}
}
