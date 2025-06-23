import { Slot45EventManager } from "../../events/Slot45-event-manager";
import { State } from "../abstract/Slot45-state";
import Slot45BonusState from "./Slot45-bonus-state";
import { Slot45FeatureWinState as Slot45FeatureCompleteState } from "./Slot45-feature-win-state";
import { Slot45SpinState } from "./Slot45-spin-state";

export class Slot45FeatureTriggerState extends State {
	constructor() {
		super();
		console.log("Feature Trigger state");
		setTimeout(() => {
			Slot45EventManager.GetInstance().notify("featuretriggerstarted");
		}, 500);
	}

	EnterFreespins(): State {
		return new Slot45SpinState();
	}

	FeatureComplete(): State {
		return new Slot45FeatureCompleteState();
	}
	EnterBonus(): State {
		return new Slot45BonusState();
	}
}