import G1009Util from "../base/Util/Slot45-number-converter";
import { G1009EventManager } from "../base/events/Slot45-event-manager";
import { G1009SpriteProviderManagerActor } from "./provider/Slot45-sprite-frame-provider";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

	@property(cc.Label)
	label: cc.Label = null;

	@property(cc.Node)
	lineMessage: cc.Node = null;

	@property(cc.Label)
	winNumber: cc.Label = null;

	@property(cc.Label)
	winPoint: cc.Label = null;

	@property(cc.Sprite)
	winIcon: cc.Sprite = null;

	@property(cc.Label)
	totalWinPoint: cc.Label = null;

	SymbolFormat: string = 'symbol_%s';

	private isFreespins: boolean = false;
	private tweenCountPoint: cc.Tween;
	private currentPoint: number = 0;

	protected onLoad(): void {
		this.register();
	}

	private register(): void {
		G1009EventManager.GetInstance().register("SpinStarted", this.reset.bind(this));
		G1009EventManager.GetInstance().register("NotificationWinMessage", this.onMessages.bind(this));
		G1009EventManager.GetInstance().register("SetTotalWin", this.onSetTotalWin.bind(this));
		G1009EventManager.GetInstance().register("StopImmediately", this.onStopImmediately.bind(this));
		G1009EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
		G1009EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
		G1009EventManager.GetInstance().register("resume", this.onResume.bind(this));
	}

	private onResume(data: any) {
		if (data.isFreespins)
		{
			this.isFreespins = true;
			this.totalWinPoint.string = G1009Util.Instance().NumberFormatWithoutCharacter(data.totalWinPoint);
		}
	}

	private onMessages(mesageData: any) {
		if (mesageData.WinPoint == 0)
		{
			return;
		}
		this.lineMessage.active = false;
		this.label.node.active = false;
		if (!mesageData.isAllWin)       
		{
			if (mesageData.WinSymbol != "Scatter" && mesageData.WinSymbol != "Bonus")
			{
				this.winNumber.string = mesageData.WinNumber[0] + 1;
				this.winPoint.string = G1009Util.Instance().NumberFormatWithoutCharacter(mesageData.WinPoint);
				this.winIcon.spriteFrame = G1009SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, mesageData.WinSymbol));
				this.lineMessage.active = true;
			}
		}
	}

	private onSetTotalWin(point: number): void {
		let objTween = {
			value: this.currentPoint
		};
		this.totalWinPoint.node.opacity = 255;
		this.countPoint(objTween, point, 0.25);
	}

	private countPoint(objTween: { value: number; }, point: number, duration: number, delay: number = 0, callback = () => { }) {
		this.tweenCountPoint = cc.tween(objTween)
			.delay(delay)
			.to(duration, { value: point }, {
				progress: (start: any, end: any, current: any, ratio: any) => {
					this.totalWinPoint.string = G1009Util.Instance().NumberFormatWithoutCharacter(Math.floor(current));
					return start + (end - start) * ratio;
				}
			})
			.call(() => {
				this.totalWinPoint.string = G1009Util.Instance().NumberFormatWithoutCharacter(point);
				this.currentPoint = point;
			})
		this.tweenCountPoint.start();
	}

	private onEnterFreespins(): void {
		this.isFreespins = true;
	}

	private onFeatureWinCompleted(data): void {
		if(data && data.hitRule == "bonus")
        {
            return;
        }
		this.isFreespins = false;
		this.reset();
	}

	private reset(): void {
		if (!this.isFreespins)
		{
			cc.tween(this.totalWinPoint.node)
				.delay(0.25)
				.to(0.25, { opacity: 0 })
				.call(() => {
					this.currentPoint = 0;
					this.totalWinPoint.string = "";
				}).start();
		}
		this.lineMessage.active = false;
		this.label.node.active = false;
	}

	private onStopImmediately(): void {
		if (!this.isFreespins)
		{
			if (this.currentPoint > 0)
			{
				this.tweenCountPoint && this.tweenCountPoint.stop();
				this.totalWinPoint.string = G1009Util.Instance().NumberFormatWithoutCharacter(this.currentPoint);
				this.totalWinPoint.node.opacity = 255;
			}
		}
	}
}