import G1009Util from "../../base/Util/aka-g1009-number-converter";
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import { G1009BetModel } from "../../models/aka-g1009-bet-model";
const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009JackpotBanner extends cc.Component {
	@property(cc.Label)
	private lblJackpotPoint: cc.Label = null;

	private betInfos: any;

	protected onLoad(): void {
		G1009EventManager.GetInstance().register('BetInfos', this.onBetInfos.bind(this));
		G1009EventManager.GetInstance().register('JackpotCompleted', this.onJackpotCompleted.bind(this));
		G1009EventManager.GetInstance().register('JackpotUpdate', this.onJackpotUpdate.bind(this));
		G1009EventManager.GetInstance().register('JackpotShow', this.onJackpotStarted.bind(this));
		G1009EventManager.GetInstance().register('ChangeBet', this.updateLabel.bind(this));
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
		let betDenom = G1009BetModel.GetInstance().GetCurrentBetPerLine();
		let betInfo = this.betInfos.filter((betInfo) => betInfo.betDenom == betDenom)[0];
		this.lblJackpotPoint.string = G1009Util.Instance().NumberFormatWithoutCharacter(betInfo.jackpotInfos[0].jackpotAmount);
	}

	private onJackpotStarted(): void {
		this.lblJackpotPoint.string = "0";
	}
}