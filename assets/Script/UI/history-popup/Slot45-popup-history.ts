import { GameManager1009 } from "../../GameManager/Slot45-GameManager";
import { formatDDMMHHmmSS } from "../../base/Util/Slot45_date-util";
import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import Slot45PopupHistoryItem from "./Slot45-popup-history-item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45PopupHistory extends cc.Component {

	
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
		Slot45EventManager.GetInstance().register("OpenLSC", this.Show.bind(this));
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
			let itemComponent = item.getComponent(Slot45PopupHistoryItem);		
			let time: string = formatDDMMHHmmSS(data.time);
			count++;
			itemComponent.SetInfoItem(data.session, time, data.totalBet, data.totalWin, data.spinData, count);
			item.setParent(this.contentView);
		});
	}

}
