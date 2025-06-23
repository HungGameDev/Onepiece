import G1009Util from "../../base/Util/Slot45-number-converter";
import { G1009EventManager } from "../../base/events/Slot45-event-manager";


const { ccclass, property } = cc._decorator;

@ccclass
export default class ComboWinPoint extends cc.Component {

    @property(cc.Label)
    totalWinPoint: cc.Label = null;

    private tweenCountPoint: cc.Tween;
    private currentPoint: number = 0;

    protected onLoad(): void {
        this.register();
        this.reset();
    }

    private register(): void {
        G1009EventManager.GetInstance().register("SpinStarted", this.reset.bind(this));
        G1009EventManager.GetInstance().register("SetTotalWin", this.onSetTotalWin.bind(this));
        G1009EventManager.GetInstance().register("IncreaseTotalWin", this.onIncreaseTotalWin.bind(this));
		G1009EventManager.GetInstance().register("StartPresentWinCombo", this.onStartPresentWinCombo.bind(this));
		G1009EventManager.GetInstance().register("BonusWinComplete", this.reset.bind(this));

    }

    private onSetTotalWin(point: number): void {
        this.currentPoint = point;
        this.totalWinPoint.string = G1009Util.Instance().NumberFormatWithoutCharacter(this.currentPoint);
    }

    private onIncreaseTotalWin(point: number): void {
        let objTween = {
            value: this.currentPoint
        };
        this.totalWinPoint.node.active = true;
        this.countPoint(objTween, this.currentPoint + point, 0.25);
    }

    private onStartPresentWinCombo():void{
        this.reset();
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


    private reset(): void {
        this.totalWinPoint.node.active = false;
        this.currentPoint = 0;
        this.totalWinPoint.string = G1009Util.Instance().NumberFormatWithoutCharacter(this.currentPoint);
    }
}