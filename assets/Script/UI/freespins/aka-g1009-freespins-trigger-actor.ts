import G1009GameController from "../../base/controller/aka-g1009-game-controller";
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import G1009FeatureTrigger from "../feature/aka-g1009-feature-trigger-actor";
const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009FreespinsTrigger extends G1009FeatureTrigger {

	@property(sp.Skeleton)
	spine: sp.Skeleton = null;

	@property(cc.Node)
	bannerCountFreespin: cc.Node = null;

	protected start(): void {
		G1009EventManager.GetInstance().register("featuretriggerstarted", this.onFeatureTrigger.bind(this));
		G1009EventManager.GetInstance().register("resume", this.showContent.bind(this));
	}

	protected checkRuleTrigger(): boolean {
		return G1009GameController.GetInstance().CheckFreespinTrigger();
	}

	protected notifyEnterFeature() {
		G1009EventManager.GetInstance().notify("EnterFreespins");
	}
	protected showContent(): void {
		if (this.spine == null)
			return;
		this.bannerCountFreespin.active = true;
		G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_freewin", isLoop: false });
		this.spine.node.active = true;
		this.spine.setAnimation(0, "animation", false);
		cc.tween(this.bannerCountFreespin).delay(4).to(0.2, { scale: 0.9 }).to(0.2, { scale: 1 }).start();
		cc.tween(this.node).delay(5).call(() => {
			this.notifyEnterFeature();
		}).delay(1).call(() => {
			this.reset();
		}).start();
	}

	protected reset(): void {
		this.spine.node.active = false;
	}
}