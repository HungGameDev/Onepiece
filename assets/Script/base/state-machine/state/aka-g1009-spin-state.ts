import G1009GameController from "../../controller/aka-g1009-game-controller";
import { G1009EventManager } from "../../events/aka-g1009-event-manager";
import { State } from "../abstract/aka-g1009-state";
import { G1009BetState } from "./aka-g1009-bet-state";
import { G1009ExpandwildState } from "./aka-g1009-expand-wild-state";
import { G1009FeatureTriggerState } from "./aka-g1009-feature-trigger-state";
import { G1009FeatureWinState } from "./aka-g1009-feature-win-state";
import { G1009WinState } from "./aka-g1009-win-state";

export class G1009SpinState extends State {
	constructor() {
		super();
		console.log("spin state");
		setTimeout(() => {
			G1009EventManager.GetInstance().notify("SpinStarted");
		}, 100);
	}

	SpinComplete(): State {
		if (G1009GameController.GetInstance().CheckExpandWild())
		{
			return new G1009ExpandwildState();
		}
		if (G1009GameController.GetInstance().CheckWinLineData())
		{
			return new G1009WinState();
		}
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
		if (G1009GameController.GetInstance().IsActiveAuto())
		{
			return new G1009SpinState();
		}
		return new G1009BetState();
	}
}