import Slot45Util from "../../base/Util/Slot45-number-converter";
import { Slot45EventManager } from "../../base/events/Slot45-event-manager";


const { ccclass, property } = cc._decorator;

@ccclass
export default class TotalWinPanel extends cc.Component {

    @property(cc.Label)
    totalWinPoint: cc.Label = null;

    private isFreespins: boolean = false;
    private tweenCountPoint: cc.Tween;
    private currentPoint: number = 0;

    protected onLoad(): void {
        this.register();
        this.currentPoint = 0;
        this.totalWinPoint.string = Slot45Util.Instance().NumberFormatWithoutCharacter(this.currentPoint);
    }

    private register(): void {
        Slot45EventManager.GetInstance().register("SpinStarted", this.reset.bind(this));
        Slot45EventManager.GetInstance().register("SetTotalWin", this.onSetTotalWin.bind(this));
        Slot45EventManager.GetInstance().register("IncreaseTotalWin", this.onIncreaseTotalWin.bind(this));
        Slot45EventManager.GetInstance().register("StopImmediately", this.onStopImmediately.bind(this));
        Slot45EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
        Slot45EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
        Slot45EventManager.GetInstance().register("resume", this.onResume.bind(this));
    }

    private onResume(data: any) {
        if (data.isFreespins) {
            this.isFreespins = true;
            this.totalWinPoint.string = Slot45Util.Instance().NumberFormatWithoutCharacter(data.totalWinPoint);
        }
    }

    private onSetTotalWin(point: number): void {
        this.currentPoint = point;
        this.totalWinPoint.string = Slot45Util.Instance().NumberFormatWithoutCharacter(this.currentPoint);
    }

    private onIncreaseTotalWin(point: number): void {
        let objTween = {
            value: this.currentPoint
        };
        // this.totalWinPoint.node.opacity = 255;
        this.countPoint(objTween, this.currentPoint + point, 0.25);
    }

    private countPoint(objTween: { value: number; }, point: number, duration: number, delay: number = 0, callback = () => { }) {
        this.tweenCountPoint = cc.tween(objTween)
            .delay(delay)
            .to(duration, { value: point }, {
                progress: (start: any, end: any, current: any, ratio: any) => {
                    this.totalWinPoint.string = Slot45Util.Instance().NumberFormatWithoutCharacter(Math.floor(current));
                    return start + (end - start) * ratio;
                }
            })
            .call(() => {
                this.totalWinPoint.string = Slot45Util.Instance().NumberFormatWithoutCharacter(point);
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
        if (!this.isFreespins) {
            // cc.tween(this.totalWinPoint.node)
            //     .delay(0.25)
            //     .to(0.25, { opacity: 0 })
            //     .call(() => {
            //         this.currentPoint = 0;
            //         this.totalWinPoint.string = "";
            //     }).start();
            this.currentPoint = 0;
            this.totalWinPoint.string = Slot45Util.Instance().NumberFormatWithoutCharacter(this.currentPoint);
        }
    }

    private onStopImmediately(): void {
        if (!this.isFreespins) {
            if (this.currentPoint > 0) {
                this.tweenCountPoint && this.tweenCountPoint.stop();
                this.totalWinPoint.string = Slot45Util.Instance().NumberFormatWithoutCharacter(this.currentPoint);
                // this.totalWinPoint.node.opacity = 255;
            }
        }
    }
}