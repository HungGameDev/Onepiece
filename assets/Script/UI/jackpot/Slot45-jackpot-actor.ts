import G1009Util from "../../base/Util/Slot45-number-converter";
import G1009GameController from "../../base/controller/Slot45-game-controller";
import { G1009EventManager } from "../../base/events/Slot45-event-manager";
const { ccclass, property } = cc._decorator;

const FADE_DURATION = 0.25;
const COUNT_POINT_DURATION = 2;
const IDLE_DURATION = 1;
@ccclass
export default class G1009JackpotActor extends cc.Component {

	@property(cc.Node)
	content: cc.Node = null;
	@property(sp.Skeleton)
	private spine: sp.Skeleton = null;
	@property(cc.Label)
	lblTotalWinPoint: cc.Label = null;

	private tweenShowPopup: cc.Tween;
	private tweenCountPoint: cc.Tween;
	private currentWinPoint: number = 0;
	private jackpotWinPoint: number = 0;
	private isStopImmediately: boolean = false;

	protected onLoad(): void {
		this.reset();
		this.register();
	}

	private register(): void {
		G1009EventManager.GetInstance().register("JackpotStarted", this.onJackpotStarted.bind(this));
		G1009EventManager.GetInstance().register("WinDataRespond", this.onSetFinalReSource.bind(this));
		G1009EventManager.GetInstance().register("StopImmediately", this.onStopImmediately.bind(this));
		G1009EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
	}

	private onSetFinalReSource(finalResult: any): void {
		this.jackpotWinPoint = finalResult.jackpotWinPoint;
	}

	private onJackpotStarted(): void {
		// if (this.isStopImmediately)
		// {
		// 	this.speedUpAnimation();
		// 	return;
		// }
		G1009EventManager.GetInstance().notify("JackpotPresentationStarted");
		let objTween = {
			value: 0
		};
		this.tweenShowPopup = cc.tween(this.spine.node)
			// .delay(4.6)
			.to(FADE_DURATION, { scale: 1 })
			.call(() => {
				G1009EventManager.GetInstance().notify("JackpotShow");
				this.content.active = true;
				let track = this.spine.setAnimation(0, "NH", true);
				// this.spine.setTrackCompleteListener(track, () => {
				// 	this.spine.setAnimation(0, "Loop", true);
				// });
				cc.tween(this.content)
					.to(FADE_DURATION, { opacity: 255 })
					.call(() => {
						this.countPoint(objTween, this.jackpotWinPoint, COUNT_POINT_DURATION);
					})
					.start();
			}).start();

	}

	private countPoint(objTween: { value: number; }, point1: number, duration: number, delay: number = 0) {
		this.tweenCountPoint = cc.tween(objTween)
			.delay(delay)
			.to(duration, { value: point1 }, {
				progress: (start: any, end: any, current: any, ratio: any) => {
					this.currentWinPoint = Math.round(current);
					this.lblTotalWinPoint.string = G1009Util.Instance().NumberFormatWithoutCharacter(this.currentWinPoint);
					return start + (end - start) * ratio;
				}
			})
			.call(() => {
				this.lblTotalWinPoint.string = G1009Util.Instance().NumberFormatWithoutCharacter(point1);
			})
			.delay(IDLE_DURATION)
			.call(() => {
				cc.tween(this.content)
					.to(FADE_DURATION, { opacity: 0 }).call(() => {
						G1009EventManager.GetInstance().notify("JackpotCompleted", this.jackpotWinPoint);
						//this.transitionNextState();
						this.reset();
					})
					.start();
			});
		this.tweenCountPoint.start();
	}

	private transitionNextState(): void {

		// if (G1009GameController.GetInstance().CheckBonusFeatureTrigger())
		// {
		// 	G1009EventManager.GetInstance().notify("FeatureTrigger");
		// 	return;
		// }
		// if (G1009GameController.GetInstance().CheckFreespinContinue())
		// {
		// 	G1009EventManager.GetInstance().notify("Spin");
		// 	return;
		// }
		// if (G1009GameController.GetInstance().CheckFreespinEnd())
		// {
		// 	G1009EventManager.GetInstance().notify("FeatureComplete");
		// 	return;
		// }
		// G1009EventManager.GetInstance().notify("EndRound");
	}

	private reset(): void {
		this.lblTotalWinPoint.string = "";
		this.content.active = false;
		this.content.opacity = 0;
	}

	public speedUpAnimation() {
			this.tweenCountPoint && this.tweenCountPoint.stop();
			G1009EventManager.GetInstance().notify("JackpotCompleted", this.jackpotWinPoint);
			this.transitionNextState();
			this.reset();
	}

	private onSpinStarted(): void {
		this.isStopImmediately = false;
	}

	private onStopImmediately(): void {
		this.isStopImmediately = true;
	}
}
