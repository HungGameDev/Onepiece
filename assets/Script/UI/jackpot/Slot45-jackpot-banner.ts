import Slot45Util from "../../base/Util/Slot45-number-converter";
import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import { Slot45BetModel } from "../../models/Slot45-bet-model";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45JackpotBanner extends cc.Component {
	@property(cc.Label)
	private lblJackpotPoint: cc.Label = null;

	private betInfos: any;

	protected onLoad(): void {
		Slot45EventManager.GetInstance().register('BetInfos', this.onBetInfos.bind(this));
		Slot45EventManager.GetInstance().register('JackpotCompleted', this.onJackpotCompleted.bind(this));
		Slot45EventManager.GetInstance().register('JackpotUpdate', this.onJackpotUpdate.bind(this));
		Slot45EventManager.GetInstance().register('JackpotShow', this.onJackpotStarted.bind(this));
		Slot45EventManager.GetInstance().register('ChangeBet', this.updateLabel.bind(this));
	}

	private onBetInfos(data): void {
		this.betInfos = Object.assign([], data);
		this.updateLabel();
	}

	private onJackpotCompleted(): void {
		this.updateLabel();
	}

	private onJackpotUpdate(datas): void {
		let arr = Object.entries(datas);
		this.betInfos.forEach(betInfo => {
			let jackpotData: any = arr.find((data: any) => {
				return data[1].jackpotId == betInfo.jackpotInfos[0].jackpotId;
			})
			betInfo.jackpotInfos[0].jackpotAmount = jackpotData[1].jackpotAmount;
		});
		this.updateLabel();
	}

	private updateLabel(): void {
		let betDenom = Slot45BetModel.GetInstance().GetCurrentBetPerLine();
		let betInfo = this.betInfos.filter((betInfo) => betInfo.betDenom == betDenom)[0];
		this.lblJackpotPoint.string = Slot45Util.Instance().NumberFormatWithoutCharacter(betInfo.jackpotInfos[0].jackpotAmount);
	}

	private onJackpotStarted(): void {
		this.lblJackpotPoint.string = "0";
	}
}