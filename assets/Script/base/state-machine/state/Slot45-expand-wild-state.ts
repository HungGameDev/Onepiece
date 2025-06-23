import Slot45GameController from "../../controller/Slot45-game-controller";
import { Slot45EventManager } from "../../events/Slot45-event-manager";
import { State } from "../abstract/Slot45-state";
import { Slot45BetState } from "./Slot45-bet-state";
import { Slot45FeatureTriggerState } from "./Slot45-feature-trigger-state";
import { Slot45FeatureWinState } from "./Slot45-feature-win-state";
import { Slot45SpinState } from "./Slot45-spin-state";
import { Slot45WinState } from "./Slot45-win-state";

export class Slot45ExpandwildState extends State {
	constructor() {
		super();
		console.log("Expand wild state");
		setTimeout(() => {
			Slot45EventManager.GetInstance().notify("ExpandWildStarted", Slot45GameController.GetInstance().GetExpandWildIndices());
		}, 100);
	}

	ExpandWildCompleted(): State {
		if (Slot45GameController.GetInstance().CheckWinLineData())
		{
			return new Slot45WinState();
		}
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
}