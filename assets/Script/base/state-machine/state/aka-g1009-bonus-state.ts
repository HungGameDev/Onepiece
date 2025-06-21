import G1009GameController from "../../controller/aka-g1009-game-controller";
import { G1009EventManager } from "../../events/aka-g1009-event-manager";
import { State } from "../abstract/aka-g1009-state";
import { G1009BetState } from "./aka-g1009-bet-state";
import { G1009FeatureTriggerState } from "./aka-g1009-feature-trigger-state";
import { G1009SpinState } from "./aka-g1009-spin-state";

const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009BonusState extends State {

	constructor() {
		super();
		console.log("bonus state");
		setTimeout(() => {
			G1009EventManager.GetInstance().notify("BonusWinStarted");
		}, 100);
	}

	FeatureComplete(): State {
		return new G1009SpinState();
	}

	FeatureWinCompleted(): State {
		if (G1009GameController.GetInstance().CheckBonusFeatureTrigger()) {
			return new G1009FeatureTriggerState();
		}
		else if (G1009GameController.GetInstance().IsActiveAuto())
			return new G1009SpinState();
		return new G1009BetState();
	}
}
