import G1009Util from "../../base/Util/aka-g1009-number-converter";
import G1009GameController from "../../base/controller/aka-g1009-game-controller";
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import { G1009BalanceModel } from "../../models/aka-g1009-balance-model";

const { ccclass, property } = cc._decorator;

const COUNT_POINT_DURATION = 3;
@ccclass
export default class G1009FeatureWinActor extends cc.Component {

	@property(cc.Node)
	content: cc.Node = null;
	@property(cc.Label)
	lblTotalWinPoint: cc.Label = null;

	protected onLoad(): void {
		this.reset();
		this.register();
	}

	private register(): void {
		G1009EventManager.GetInstance().register("featureWinstarted", this.onFeatureWinstarted.bind(this));
	}

	onFeatureWinstarted(): void {
		if (this.content != null) {
			this.showTotalWin();
		}
		else {
			let newBalance = G1009BalanceModel.GetInstance().GetBalance() + G1009GameController.GetInstance().GetTotalWinPoint();
			G1009BalanceModel.GetInstance().SetBalance(newBalance);
			G1009EventManager.GetInstance().notify("BalanceChange", newBalance);
			G1009EventManager.GetInstance().notify("featureWinCompleted");
		}
	}

	private showTotalWin(): void {
		let totalWin = G1009GameController.GetInstance().GetTotalWinPoint();
		this.content.active = true;
		cc.tween(this.content)
			.to(1, { opacity: 255 })
			.delay(COUNT_POINT_DURATION + 2)
			.call(() => {
				cc.tween(this.content)
					.to(1, { opacity: 0 }).call(() => {
						this.reset();
						G1009EventManager.GetInstance().notify("featureWinCompleted");
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
					this.lblTotalWinPoint.string = G1009Util.Instance().NumberFormatWithoutCharacter(Math.round(current));
					return start + (end - start) * ratio;
				}
			})
			.call(() => {
				this.lblTotalWinPoint.string = G1009Util.Instance().NumberFormatWithoutCharacter(totalWin);
				let newBalance = G1009BalanceModel.GetInstance().GetBalance() + G1009GameController.GetInstance().GetTotalWinPoint();
				G1009BalanceModel.GetInstance().SetBalance(newBalance);
				G1009EventManager.GetInstance().notify("BalanceChange", newBalance);
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
