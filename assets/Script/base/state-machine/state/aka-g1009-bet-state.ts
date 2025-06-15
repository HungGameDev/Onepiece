import { G1009EventManager } from "../../events/aka-g1009-event-manager";
import { State } from "../abstract/aka-g1009-state";
import { G1009SpinState } from "./aka-g1009-spin-state";

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
