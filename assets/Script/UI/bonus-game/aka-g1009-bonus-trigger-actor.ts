import G1009GameController from "../../base/controller/aka-g1009-game-controller";
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import G1009FeatureTrigger from "../feature/aka-g1009-feature-trigger-actor";


const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009BonusTrigger extends G1009FeatureTrigger {

	@property(sp.Skeleton)
	spineTransition: sp.Skeleton = null;

    protected checkRuleTrigger(): boolean {
		return G1009GameController.GetInstance().CheckBonusPointTrigger();
	}

	protected notifyEnterFeature() {
		G1009EventManager.GetInstance().notify("EnterBonus", G1009GameController.GetInstance().GetWinBonus());
	}

	protected showContent(): void {
		this.notifyEnterFeature();	
		G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_bonustransition", isLoop: false });
		this.spineTransition.node.active = true;
		this.spineTransition.setAnimation(0, "animation", false);		
		cc.tween(this.node).delay(2).call(() => {
			G1009EventManager.GetInstance().notify("BonusWinComplete");
			this.reset();
		}).start();
	}

	protected reset(): void {
		this.spineTransition.node.active = false;
	}
}
