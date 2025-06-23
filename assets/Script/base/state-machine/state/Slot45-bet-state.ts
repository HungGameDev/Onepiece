import { G1009EventManager } from "../../events/Slot45-event-manager";
import { State } from "../abstract/Slot45-state";
import { G1009SpinState } from "./Slot45-spin-state";

export class G1009BetState extends State {
	constructor() {
		super();
		console.log("bet state");
		setTimeout(() => {
			G1009EventManager.GetInstance().notify("ShowBetPanel");
		}, 100);
	}

	Spin(): State {
		G1009EventManager.GetInstance().notify("HideBetPanel");
		return new G1009SpinState();
	}

	EndRound(): State {
		return new G1009BetState();
	}
}
