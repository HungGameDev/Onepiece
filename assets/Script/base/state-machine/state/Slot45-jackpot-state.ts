import G1009GameController from "../../controller/Slot45-game-controller";
import { G1009EventManager } from "../../events/Slot45-event-manager";
import { State } from "../abstract/Slot45-state";
import { G1009BetState } from "./Slot45-bet-state";
import { G1009FeatureTriggerState } from "./Slot45-feature-trigger-state";
import { G1009FeatureWinState } from "./Slot45-feature-win-state";
import { G1009SpinState } from "./Slot45-spin-state";

export class G1009JackpotState extends State {
	constructor() {
		super();
		console.log("Jackpot state");
		setTimeout(() => {
			G1009EventManager.GetInstance().notify("JackpotStarted");
		}, 100);
	}

	FeatureTrigger(): State {
		if (G1009GameController.GetInstance().CheckBonusFeatureTrigger())
		{
			return new G1009FeatureTriggerState();
		}
		if (G1009GameController.GetInstance().CheckFreespinContinue())
		{
			return new G1009SpinState();
		}
		if (G1009GameController.GetInstance().CheckFreespinEnd())
		{
			return new G1009FeatureWinState();
		}
		return new G1009BetState();
	}

	FeatureComplete(): State {
		return new G1009FeatureWinState();
	}

	Spin(): State {
		if (G1009GameController.GetInstance().CheckFreespinContinue())
		{
			return new G1009SpinState();
		}
		return new G1009BetState();
	}

	EndRound(): State {
		if (G1009GameController.GetInstance().IsActiveAuto())
			return new G1009SpinState();
		return new G1009BetState();
	}
}