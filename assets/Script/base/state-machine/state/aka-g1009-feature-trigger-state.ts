import { G1009EventManager } from "../../events/aka-g1009-event-manager";
import { State } from "../abstract/aka-g1009-state";
import G1009BonusState from "./aka-g1009-bonus-state";
import { G1009FeatureWinState as G1009FeatureCompleteState } from "./aka-g1009-feature-win-state";
import { G1009SpinState } from "./aka-g1009-spin-state";

export class G1009FeatureTriggerState extends State {
	constructor() {
		super();
		console.log("Feature Trigger state");
		setTimeout(() => {
			G1009EventManager.GetInstance().notify("featuretriggerstarted");
		}, 500);
	}

	EnterFreespins(): State {
		return new G1009SpinState();
	}

	FeatureComplete(): State {
		return new G1009FeatureCompleteState();
	}
	EnterBonus(): State {
		return new G1009BonusState();
	}
}