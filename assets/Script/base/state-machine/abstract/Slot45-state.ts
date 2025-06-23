import { TransitionInterface } from "./Slot45-transition-Interface";

export abstract class State implements TransitionInterface {
	transitionNextState(): State {
		throw new Error("Invalid Operation: Cannot perform task in current state");
	}

	Init(): State {
		throw new Error("Invalid Operation: Cannot perform task in current state");
	}

	Resume(): State {
		throw new Error("Invalid Operation: Cannot perform task in current state");
	}

	Bet(): State {
		throw new Error("Invalid Operation: Cannot perform task in current state");
	}

	Spin(): State {
		throw new Error("Invalid Operation: Cannot perform task in current state");
	}

	SpinComplete(): State {
		throw new Error("Invalid Operation: Cannot perform task in current state");
	}

	FeatureTrigger(): State {
		throw new Error("Invalid Operation: Cannot perform task in current state");
	}

	EnterFreespins(): State {
		throw new Error("Invalid Operation: Cannot perform task in current state");
	}

	EnterBonus(): State {
		throw new Error("Invalid Operation: Cannot perform task in current state");
	}

	FeatureComplete(): State {
		throw new Error("Invalid Operation: Cannot perform task in current state");
	}

	FeatureWinCompleted(): State {
		throw new Error("Invalid Operation: Cannot perform task in current state");
	}

	ExpandWildCompleted(): State {
		throw new Error("Invalid Operation: Cannot perform task in current state");
	}

	EndRound(): State {
		throw new Error("Invalid Operation: Cannot perform task in current state");
	}

	JackpotTriggered(): State {
		throw new Error("Invalid Operation: Cannot perform task in current state");
	}
}
