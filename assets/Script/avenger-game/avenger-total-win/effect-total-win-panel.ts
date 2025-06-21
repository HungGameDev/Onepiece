import G1009Util from "../../base/Util/aka-g1009-number-converter";
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";


const { ccclass, property } = cc._decorator;

@ccclass
export default class TotalWinPanel extends cc.Component {

	@property(sp.Skeleton)
	private spine: sp.Skeleton = null;

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
        if(data && data.hitRule == "bonus")
        {
            return;
        }
        this.isFreespins = false;
    }

    private onShowBetPanel(): void {
        if (!this.isFreespins) {
            let track = this.spine.setAnimation(0, "animation", true);
            this.spine.node.active = true;
        }
    }

    private reset(): void {
        if (!this.isFreespins) {
            this.spine.clearTrack(0);
            this.spine.node.active = false;
        }
    }
}