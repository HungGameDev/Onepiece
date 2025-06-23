import Slot45GameController from "../../controller/Slot45-game-controller";
import { Slot45EventManager } from "../../events/Slot45-event-manager";
import { State } from "../abstract/Slot45-state";
import { Slot45BetState } from "./Slot45-bet-state";
import { Slot45FeatureTriggerState } from "./Slot45-feature-trigger-state";
import { Slot45FeatureWinState } from "./Slot45-feature-win-state";
import { Slot45JackpotState } from "./Slot45-jackpot-state";
import { Slot45SpinState } from "./Slot45-spin-state";

export class Slot45WinState extends State {
	constructor() {
		super();
		console.log("Win state");
		setTimeout(() => {
			Slot45EventManager.GetInstance().notify("PresentWinStart");
		}, 100);
	}

	FeatureTrigger(): State {
		if (Slot45GameController.GetInstance().CheckBonusFeatureTrigger())
		{
			return new Slot45FeatureTriggerState();
		}
		if (Slot45GameController.GetInstance().CheckFreespinContinue())
		{
			return new Slot45SpinState();
		}
		if (Slot45GameController.GetInstance().CheckFreespinEnd())
		{
			return new Slot45FeatureWinState();
		}
		return new Slot45BetState();
	}

	FeatureComplete(): State {
		return new Slot45FeatureWinState();
	}

	Spin(): State {
		if (Slot45GameController.GetInstance().CheckFreespinContinue())
		{
			return new Slot45SpinState();
		}
		return new Slot45BetState();
	}

	EndRound(): State {
		if (Slot45GameController.GetInstance().IsActiveAuto())
			return new Slot45SpinState();
		return new Slot45BetState();
	}

	JackpotTriggered(): State {
		return new Slot45JackpotState();
	}
}