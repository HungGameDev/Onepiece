import G1009GameController from "../../controller/aka-g1009-game-controller";
import { G1009EventManager } from "../../events/aka-g1009-event-manager";
import { State } from "../abstract/aka-g1009-state";
import { G1009BetState } from "./aka-g1009-bet-state";
import { G1009FeatureTriggerState } from "./aka-g1009-feature-trigger-state";
import { G1009FeatureWinState } from "./aka-g1009-feature-win-state";
import { G1009JackpotState } from "./aka-g1009-jackpot-state";
import { G1009SpinState } from "./aka-g1009-spin-state";

export class G1009WinState extends State {
	constructor() {
		super();
		console.log("Win state");
		setTimeout(() => {
			G1009EventManager.GetInstance().notify("PresentWinStart");
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

	JackpotTriggered(): State {
		return new G1009JackpotState();
	}
}