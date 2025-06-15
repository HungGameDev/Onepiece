import G1009GameController from "../../controller/aka-g1009-game-controller";
import { G1009EventManager } from "../../events/aka-g1009-event-manager";
import { State } from "../abstract/aka-g1009-state";
import { G1009BetState } from "./aka-g1009-bet-state";
import { G1009FeatureTriggerState } from "./aka-g1009-feature-trigger-state";

export class G1009FeatureWinState extends State {
	constructor() {
		super();
		console.log("Feature Win state");
		setTimeout(() => {
			G1009EventManager.GetInstance().notify("featureWinstarted");
		}, 100);
	}

	FeatureWinCompleted(): State {
		if (G1009GameController.GetInstance().CheckBonusFeatureTrigger())
		{
			return new G1009FeatureTriggerState();
		}
		return new G1009BetState();
	}
}