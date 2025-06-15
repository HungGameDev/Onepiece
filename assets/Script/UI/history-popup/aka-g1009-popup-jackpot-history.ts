import { formatDDMMHHmmSS } from "../../base/Util/aka_date-util";
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import G1009PopupHistory from "./aka-g1009-popup-history";
import G1009PopupJackpotHistoryItem from "./aka-g1009-popup-jackpot-history-item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009PopupLeaderBoard extends G1009PopupHistory {

	private allData: any[] = null;
	private jackpotData: any[] = null;

	override start(): void {
		this.Init();
		G1009EventManager.GetInstance().register("OpenJackpotH", this.Show.bind(this));

	}
	override  Init(): void {
		this.gameManager1009.getJPHistory(this.pageIndex * 6, 20).then((data) => {
			console.log('getJPHistory', data);
			this.allData = data.data;
			this.jackpotData = this.allData.filter(x => x.type == 'Jackpot');
			this.processData(data.data);
		});
	}

	protected processData(historyData: any[]) {

		for (let index = 0; index < historyData.length; index++) {
			const data = historyData[index];
			let item = cc.instantiate(this.prefabItem);
			let itemComponent = item.getComponent(G1009PopupJackpotHistoryItem);		
			let time: string = formatDDMMHHmmSS(data.time);
			itemComponent.SetInfoItem(data.session, time, data.wonUser,data.win, data.type);
			item.setParent(this.contentView);
			
		}	
	}

	public OnAllClick()
	{
		
		this.contentView.destroyAllChildren();
		this.processData(this.allData);
	}

	public OnJackPotClick() {
		
		this.contentView.destroyAllChildren();
		this.processData(this.jackpotData);
	}

}
