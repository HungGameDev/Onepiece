import Slot45Util from "../../base/Util/Slot45-number-converter";
import Slot45GameController from "../../base/controller/Slot45-game-controller";
import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import { Slot45BalanceModel } from "../../models/Slot45-balance-model";

const { ccclass, property } = cc._decorator;

const COUNT_POINT_DURATION = 3;
@ccclass
export default class Slot45FeatureWinActor extends cc.Component {

	@property(cc.Node)
	content: cc.Node = null;
	@property(cc.Label)
	lblTotalWinPoint: cc.Label = null;

	protected onLoad(): void {
		this.reset();
		this.register();
	}

	private register(): void {
		Slot45EventManager.GetInstance().register("featureWinstarted", this.onFeatureWinstarted.bind(this));
	}

	onFeatureWinstarted(): void {
		if (this.content != null) {
			this.showTotalWin();
		}
		else {
			let newBalance = Slot45BalanceModel.GetInstance().GetBalance() + Slot45GameController.GetInstance().GetTotalWinPoint();
			Slot45BalanceModel.GetInstance().SetBalance(newBalance);
			Slot45EventManager.GetInstance().notify("BalanceChange", newBalance);
			Slot45EventManager.GetInstance().notify("featureWinCompleted");
		}
	}

	private showTotalWin(): void {
		let totalWin = Slot45GameController.GetInstance().GetTotalWinPoint();
		this.content.active = true;
		cc.tween(this.content)
			.to(1, { opacity: 255 })
			.delay(COUNT_POINT_DURATION + 2)
			.call(() => {
				cc.tween(this.content)
					.to(1, { opacity: 0 }).call(() => {
						this.reset();
						Slot45EventManager.GetInstance().notify("featureWinCompleted");
					})
					.start();
			}).start();

		let objTween = {
			value: 0
		};
		cc.tween(objTween)
			.delay(1)
			.to(COUNT_POINT_DURATION, { value: totalWin }, {
				progress: (start, end, current, ratio) => {
					this.lblTotalWinPoint.string = Slot45Util.Instance().NumberFormatWithoutCharacter(Math.round(current));
					return start + (end - start) * ratio;
				}
			})
			.call(() => {
				this.lblTotalWinPoint.string = Slot45Util.Instance().NumberFormatWithoutCharacter(totalWin);
				let newBalance = Slot45BalanceModel.GetInstance().GetBalance() + Slot45GameController.GetInstance().GetTotalWinPoint();
				Slot45BalanceModel.GetInstance().SetBalance(newBalance);
				Slot45EventManager.GetInstance().notify("BalanceChange", newBalance);
			})
			.start();
	}

	private reset(): void {
		if(this.content!=null)
		{
			this.lblTotalWinPoint.string = "";
			this.content.active = false;
			this.content.opacity = 0;
		}
	}
}
