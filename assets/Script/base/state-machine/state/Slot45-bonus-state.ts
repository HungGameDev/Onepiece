import G1009GameController from "../../controller/Slot45-game-controller";
import { G1009EventManager } from "../../events/Slot45-event-manager";
import { State } from "../abstract/Slot45-state";
import { G1009BetState } from "./Slot45-bet-state";
import { G1009FeatureTriggerState } from "./Slot45-feature-trigger-state";
import { G1009SpinState } from "./Slot45-spin-state";

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
