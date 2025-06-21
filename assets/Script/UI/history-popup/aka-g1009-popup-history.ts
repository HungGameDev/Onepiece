import { GameManager1009 } from "../../GameManager/aka_1009-GameManager";
import { formatDDMMHHmmSS } from "../../base/Util/aka_date-util";
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import G1009PopupHistoryItem from "./aka-g1009-popup-history-item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009PopupHistory extends cc.Component {

	
	@property(cc.Prefab)
	protected prefabItem: cc.Prefab = null;
	@property(cc.Node)
	protected content: cc.Node = null;
	@property(cc.Node)
	protected contentView: cc.Node = null;
	
	protected gameManager1009: GameManager1009;

	protected pageIndex: number = 0;

	constructor() {
		super();

		this.gameManager1009 = new GameManager1009();
	}

	protected start(): void {
		this.Init();
		G1009EventManager.GetInstance().register("OpenLSC", this.Show.bind(this));
	}
	
	protected  Init(): void
	{
		this.gameManager1009.getBetHistory(this.pageIndex * 6, 20).then((data) => {
				console.log('getBetHistory', data);
				this.processData(data);
		});
	
	}

	public Show() {
			this.content.active = true;	
	}

	public Hide() {
		this.content.active = false;
	}

	protected processData(historyData: any) {
		var count= 0;
		historyData.data.forEach((data) => {
			let item = cc.instantiate(this.prefabItem);
			let itemComponent = item.getComponent(G1009PopupHistoryItem);		
			let time: string = formatDDMMHHmmSS(data.time);
			count++;
			itemComponent.SetInfoItem(data.session, time, data.totalBet, data.totalWin, data.spinData, count);
			item.setParent(this.contentView);
		});
	}

}
