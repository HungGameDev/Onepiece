import G1009GameController from "../../base/controller/aka-g1009-game-controller";
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import G1009FeatureContentActivationActor from "../feature/aka-g1009-feature-content-activation-actor";
const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009FreespinsContentActivationActor extends G1009FeatureContentActivationActor {
	protected onLoad(): void {
		G1009EventManager.GetInstance().register("resume", this.showContent.bind(this));
	}
	protected checkRuleTrigger(): boolean {
		return G1009GameController.GetInstance().CheckFreespinTrigger();
	}
}