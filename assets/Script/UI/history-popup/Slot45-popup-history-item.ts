import Slot45Util from "../../base/Util/Slot45-number-converter";
import { Slot45EventManager } from "../../base/events/Slot45-event-manager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45PopupHistoryItem extends cc.Component {

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
		this.lblTotalBetPoint.string = Slot45Util.Instance().NumberFormat(totalBetPoint);
		this.lblTotalWin.string = Slot45Util.Instance().NumberFormat(totalWin);
		this.node.active = true;
		this.spinResuilt = spinData;
		this.totalWin = Slot45Util.Instance().NumberFormat(totalWin);
		this.session = session;
	}

	public Hide(): void {
		this.node.active = false;
	}

	public onButtonClick(): void {
		Slot45EventManager.GetInstance().notify("ShowDetailHistory",{Session:this.session,TotalWin:this.totalWin,SpinResuilt:this.spinResuilt});
	}
}
