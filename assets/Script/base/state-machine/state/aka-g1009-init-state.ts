import { State } from "../abstract/aka-g1009-state";
import { G1009BetState } from "./aka-g1009-bet-state";
import G1009BonusState from "./aka-g1009-bonus-state";
import { G1009SpinState } from "./aka-g1009-spin-state";

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
