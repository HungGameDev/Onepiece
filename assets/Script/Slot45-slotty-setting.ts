import { Slot45EventManager } from "./base/events/Slot45-event-manager";
import { State } from "./base/state-machine/abstract/Slot45-state";
import { Slot45InitState } from "./base/state-machine/state/Slot45-init-state";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45SlottySetting extends cc.Component {
	private state: State = new Slot45InitState();

	protected start(): void {
		this.showCurrentState();
		this.register();
	}

	private showCurrentState(): void {
		console.log(this.state);
	}

	private register(): void {
		Slot45EventManager.GetInstance().register("Init", this.onInit.bind(this));
		Slot45EventManager.GetInstance().register("Bet", this.onBet.bind(this));
		Slot45EventManager.GetInstance().register("ActiveAuto", this.onSpin.bind(this));
		Slot45EventManager.GetInstance().register("spin", this.onSpin.bind(this));
		Slot45EventManager.GetInstance().register("SpinComplete", this.onSpinComplete.bind(this));
		Slot45EventManager.GetInstance().register("FeatureTrigger", this.onFeatureTrigger.bind(this));
		Slot45EventManager.GetInstance().register("FeatureComplete", this.onFeatureComplete.bind(this));
		Slot45EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
		Slot45EventManager.GetInstance().register("EnterBonus", this.onEnterBonus.bind(this));
		Slot45EventManager.GetInstance().register("resumeBonus", this.onEnterBonus.bind(this));
		Slot45EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
		Slot45EventManager.GetInstance().register("ExpandWildCompleted", this.onExpandWildCompleted.bind(this));
		Slot45EventManager.GetInstance().register("EndRound", this.onEndRound.bind(this));
		Slot45EventManager.GetInstance().register("JackpotTriggered", this.onJackpotTriggered.bind(this));
		
	}

	private onInit(): void {
		this.state = this.state.Init();
		this.showCurrentState();
	}

	private onBet(): void {
		this.state = this.state.Spin();
		this.showCurrentState();
	}

	private onSpin(): void {
		this.state = this.state.Spin();
		this.showCurrentState();
	}

	private onSpinComplete(): void {
		this.state = this.state.SpinComplete();
		this.showCurrentState();
	}

	private onFeatureTrigger(): void {
		this.state = this.state.FeatureTrigger();
		this.showCurrentState();
	}

	private onEnterFreespins(): void {
		this.state = this.state.EnterFreespins();
		this.showCurrentState();
	}

	private onEnterBonus(): void {
		this.state = this.state.EnterBonus();
		this.showCurrentState();
	}

	private onFeatureComplete(): void {
		this.state = this.state.FeatureComplete();
		this.showCurrentState();
	}

	private onFeatureWinCompleted(): void {
		this.state = this.state.FeatureWinCompleted();
		this.showCurrentState();
	}

	private onExpandWildCompleted(): void {
		this.state = this.state.ExpandWildCompleted();
		this.showCurrentState();
	}

	private onEndRound(): void {
		this.state = this.state.EndRound();
		this.showCurrentState();
	}

	private onJackpotTriggered(): void {
		this.state = this.state.JackpotTriggered();
		this.showCurrentState();
	}
}