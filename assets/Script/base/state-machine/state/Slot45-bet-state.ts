import { Slot45EventManager } from "../../events/Slot45-event-manager";
import { State } from "../abstract/Slot45-state";
import { Slot45SpinState } from "./Slot45-spin-state";

export class Slot45BetState extends State {
	constructor() {
		super();
		console.log("bet state");
		setTimeout(() => {
			Slot45EventManager.GetInstance().notify("ShowBetPanel");
		}, 100);
	}

	Spin(): State {
		Slot45EventManager.GetInstance().notify("HideBetPanel");
		return new Slot45SpinState();
	}

	EndRound(): State {
		return new Slot45BetState();
	}
}
