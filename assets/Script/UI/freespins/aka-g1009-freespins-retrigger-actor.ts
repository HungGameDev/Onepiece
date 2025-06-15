import G1009GameController from "../../base/controller/aka-g1009-game-controller";
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import G1009FeatureTrigger from "../feature/aka-g1009-feature-trigger-actor";
const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009FreespinsRetrigger extends G1009FeatureTrigger {
	@property(sp.Skeleton)
	spine: sp.Skeleton = null;
	protected checkRuleTrigger(): boolean {
		return G1009GameController.GetInstance().CheckFreespinRetrigger();
	}

	protected notifyEnterFeature() {
		G1009EventManager.GetInstance().notify("EnterFreespins");
	}

	protected showContent(): void {
		this.spine.node.active = true;
		this.spine.setAnimation(0, "Transition", false);		
		cc.tween(this.node).delay(5).call(() => {
			this.notifyEnterFeature();	
		}).delay(3).call(() => {	
			this.reset();
		}).start();
	}

	protected reset(): void {
		this.spine.node.active = false;
	}
}