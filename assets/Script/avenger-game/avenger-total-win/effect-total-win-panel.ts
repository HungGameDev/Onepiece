import G1009Util from "../../base/Util/Slot45-number-converter";
import { G1009EventManager } from "../../base/events/Slot45-event-manager";


const { ccclass, property } = cc._decorator;

@ccclass
export default class TotalWinPanel extends cc.Component {

    @property(sp.Skeleton)
    private spineIdle: sp.Skeleton = null;
    @property(sp.Skeleton)
    private spineWinMerge: sp.Skeleton = null;
    private isFreespins: boolean = false;

    protected onLoad(): void {
        this.register();
    }

    private register(): void {
        G1009EventManager.GetInstance().register("SpinStarted", this.reset.bind(this));
        G1009EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
        G1009EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
        G1009EventManager.GetInstance().register("resume", this.onResume.bind(this));
        G1009EventManager.GetInstance().register("ShowBetPanel", this.onShowBetPanel.bind(this));
        G1009EventManager.GetInstance().register("IncreaseTotalWin", this.onIncreaseTotalWin.bind(this));
    }

    private onResume(data: any) {
        if (data.isFreespins) {
            this.isFreespins = true;
        }
    }

    private onEnterFreespins(): void {
        this.isFreespins = true;
    }

    private onFeatureWinCompleted(data): void {
        if (data && data.hitRule == "bonus") {
            return;
        }
        this.isFreespins = false;
    }

    private onShowBetPanel(): void {
        if (!this.isFreespins) {
            this.spineIdle.node.active = true;
            let track = this.spineIdle.setAnimation(0, "animation", true);
        }
    }

    private reset(): void {
        if (!this.isFreespins) {
            this.spineIdle.clearTrack(0);
            this.spineIdle.node.active = false;
        }
    }

    private onIncreaseTotalWin(): void {
        this.spineWinMerge.node.active = true;
        let track = this.spineWinMerge.setAnimation(0, "animation", false);
        var delayTime = track.animationEnd;
        cc.tween(this.spineWinMerge.node)
            .delay(delayTime)
            .call(() => {
                this.spineWinMerge.node.active = false;
            })
            .start();

    }
}