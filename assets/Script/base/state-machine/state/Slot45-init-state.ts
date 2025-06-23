import { State } from "../abstract/Slot45-state";
import { Slot45BetState } from "./Slot45-bet-state";
import Slot45BonusState from "./Slot45-bonus-state";
import { Slot45SpinState } from "./Slot45-spin-state";

export class Slot45InitState extends State {
	Init(): State {
		return new Slot45BetState();
	}

	EnterFreespins(): State {
		return new Slot45SpinState();
	}

	EnterBonus(): State {
		return new Slot45BonusState();
	}
}
