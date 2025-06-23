import Slot45Util from "../../base/Util/Slot45-number-converter";
import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import { Slot45BetModel } from "../../models/Slot45-bet-model";
const { ccclass, property } = cc._decorator;

const FADE_DURATION = 0.25;
const COUNT_POINT_DURATION1 = 1.75;
const COUNT_POINT_DURATION2 = 0.75;
const COUNT_POINT_DURATION3 = 0.75;
const IDLE_DURATION = 2.5;
const SUPER_WIN_TRIGGER_POINT = 10;

@ccclass
export default class Slot45BigwinActor extends cc.Component {

	@property(cc.Node)
	content: cc.Node = null;
	@property(sp.Skeleton)
	private spine: sp.Skeleton = null;
	@property(sp.SkeletonData)
	private skeletonDataTL: sp.SkeletonData = null;
	@property(sp.SkeletonData)
	private skeletonDataTSL: sp.SkeletonData = null;
	@property(cc.Label)
	lblTotalWinPoint: cc.Label = null;

	private tweenShowPopup: cc.Tween;
	private tweenCountPoint: cc.Tween;
	private currentWinPoint: number = 0;
	private totalWin: number = 0;
	private isStopImmediately: boolean = false;
	private duration: number = 4;

	protected onLoad(): void {
		this.reset();
		this.register();
	}

	private register(): void {
		Slot45EventManager.GetInstance().register("BigWinStarted", this.onBigWinStarted.bind(this));
		Slot45EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
		Slot45EventManager.GetInstance().register("StopImmediately", this.onStopImmediately.bind(this));
	}

	private onBigWinStarted(point: number): void {
		// if (this.isStopImmediately)
		// {
		// 	this.speedUpAnimation();
		// 	return;
		// }
		Slot45EventManager.GetInstance().notify("BigWinPresentationStarted");

		let objTween = {
			value: 0
		};

		this.totalWin = point;
		var multi = point / Slot45BetModel.GetInstance().GetTotalBetPoint();
		this.spine.node.y = multi >= SUPER_WIN_TRIGGER_POINT ? 56 : -90;
		this.tweenShowPopup = cc.tween(this.spine.node)
			.to(FADE_DURATION, { scale: 1 })
			.call(() => {
				this.content.active = true;
				this.spine.skeletonData = this.getAnimation(multi);
				let track : sp.spine.TrackEntry = this.spine.setAnimation(0, "animation", false);
				cc.tween(this.content)
					.to(FADE_DURATION, { opacity: 255 })
					.call(() => {
						this.countPoint(objTween, this.totalWin, this.duration - FADE_DURATION - IDLE_DURATION);
					})
					.start();
			})
		this.tweenShowPopup.start();
	}

	private getAnimation(multi: number): sp.SkeletonData {
		var skeletonData =  multi >= SUPER_WIN_TRIGGER_POINT ? this.skeletonDataTSL : this.skeletonDataTL;
		return skeletonData;
	}

	private countPoint(objTween: { value: number; }, point1: number, duration: number, delay: number = 0, callback = () => { }) {
		this.tweenCountPoint = cc.tween(objTween)
			.delay(delay)
			.to(duration, { value: point1 }, {
				progress: (start: any, end: any, current: any, ratio: any) => {
					this.currentWinPoint = Math.round(current);
					this.lblTotalWinPoint.string = Slot45Util.Instance().NumberFormatWithoutCharacter(this.currentWinPoint);
					return start + (end - start) * ratio;
				}
			})
			.call(() => {
				this.lblTotalWinPoint.string = Slot45Util.Instance().NumberFormatWithoutCharacter(point1);
			})
			.delay(IDLE_DURATION)
			.call(() => {
				cc.tween(this.content)
					.to(FADE_DURATION, { opacity: 0 }).call(() => {
						Slot45EventManager.GetInstance().notify("BigWinCompleted");
						this.reset();
					})
					.start();
			});
		this.tweenCountPoint.start();
	}

	private reset(): void {
		this.spine.skeletonData = null;
		this.lblTotalWinPoint.string = "";
		this.content.active = false;
		this.content.opacity = 0;
	}

	public speedUpAnimation() {
		this.tweenCountPoint && this.tweenCountPoint.stop();
		this.tweenShowPopup && this.tweenShowPopup.stop();
		let objTween = {
			value: this.currentWinPoint
		};
		this.countPoint(objTween, this.totalWin, 0);
	}

	private onSpinStarted(): void {
		// this.duration =4;
		// this.isStopImmediately = false;
	}

	private onStopImmediately(): void {
		// this.duration = 0;
	}
}
