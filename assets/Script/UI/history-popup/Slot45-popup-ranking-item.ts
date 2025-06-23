import G1009Util from "../../base/Util/Slot45-number-converter";

const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009PopupRankingItem extends cc.Component {

	@property(cc.Label)
	private lblSesion: cc.Label = null;
	@property(cc.Label)
	private lblTime: cc.Label = null;
	@property(cc.Label)
	private lblUserName: cc.Label = null;
	@property(cc.Label)
	private lblTotalWin: cc.Label = null;
	@property(cc.Label)
	private lblWinType: cc.Label = null;
	@property(cc.Sprite)
	private sprBackround: cc.Sprite = null;

	public SetInfoItem(session: string, time: string, userName: string, totalWin: number, winType: string, count) {
		this.sprBackround.node.active = count % 2 == 0;
		this.lblSesion.string = session;
		this.lblTime.string = time;
		this.lblUserName.string = userName;
		this.lblTotalWin.string = G1009Util.Instance().NumberFormat(totalWin);
		this.lblWinType.string = winType;
		this.node.active = true;
	}

	public Hide(): void {
		this.node.active = false;
	}
}
