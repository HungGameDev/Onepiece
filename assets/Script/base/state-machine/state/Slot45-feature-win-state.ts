import Slot45GameController from "../../controller/Slot45-game-controller";
import { Slot45EventManager } from "../../events/Slot45-event-manager";
import { State } from "../abstract/Slot45-state";
import { Slot45BetState } from "./Slot45-bet-state";
import { Slot45FeatureTriggerState } from "./Slot45-feature-trigger-state";
import { Slot45SpinState } from "./Slot45-spin-state";

export class Slot45FeatureWinState extends State {
	constructor() {
		super();
		console.log("Feature Win state");
		setTimeout(() => {
			Slot45EventManager.GetInstance().notify("featureWinstarted");
		}, 100);
	}

	FeatureWinCompleted(): State {
		if (Slot45GameController.GetInstance().CheckBonusFeatureTrigger()) {
			return new Slot45FeatureTriggerState();
		}
		else if (Slot45GameController.GetInstance().IsActiveAuto())
			return new Slot45SpinState();
		return new Slot45BetState();
	}
}