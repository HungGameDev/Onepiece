import { formatDDMMHHmmSS } from "../../base/Util/Slot45_date-util";
import { G1009EventManager } from "../../base/events/Slot45-event-manager";
import G1009PopupHistory from "./Slot45-popup-history";
import G1009PopupRankingItem from "./Slot45-popup-ranking-item";

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
			this.jackpotData = this.allData.filter(x => x.type == 'Nổ Hũ');
			this.processData(data.data);
		});
	}

	protected processData(historyData: any[]) {
		var count = 0;
		for (let index = 0; index < historyData.length; index++) {
			const data = historyData[index];
			count++;
			let item = cc.instantiate(this.prefabItem);
			let itemComponent = item.getComponent(G1009PopupRankingItem);
			let time: string = formatDDMMHHmmSS(data.time);
			itemComponent.SetInfoItem(data.session, time, data.wonUser, data.win, data.type, count);
			item.setParent(this.contentView);

		}
	}

	public OnAllClick() {

		this.contentView.destroyAllChildren();
		this.processData(this.allData);
	}

	public OnJackPotClick() {

		this.contentView.destroyAllChildren();
		this.processData(this.jackpotData);
	}

}
