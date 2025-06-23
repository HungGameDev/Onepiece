import Slot45GameController from "../../base/controller/Slot45-game-controller";
import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import Slot45FeatureContentActivationActor from "../feature/Slot45-feature-content-activation-actor";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45FreespinsContentActivationActor extends Slot45FeatureContentActivationActor {
	protected onLoad(): void {
		Slot45EventManager.GetInstance().register("resume", this.showContent.bind(this));
	}
	protected checkRuleTrigger(): boolean {
		return Slot45GameController.GetInstance().CheckFreespinTrigger();
	}
}