import { State } from "../abstract/Slot45-state";
import { G1009BetState } from "./Slot45-bet-state";
import G1009BonusState from "./Slot45-bonus-state";
import { G1009SpinState } from "./Slot45-spin-state";

export class G1009InitState extends State {
	Init(): State {
		return new G1009BetState();
	}

	EnterFreespins(): State {
		return new G1009SpinState();
	}

	EnterBonus(): State {
		return new G1009BonusState();
	}
}
