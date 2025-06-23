import { Slot45EventManager } from "../../base/events/Slot45-event-manager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45FeatureContentActivationActor extends cc.Component {

	@property(cc.Node)
	private content: cc.Node = null;

	@property
	private startDuration:number = 0;

	@property
	private endDuration:number = 0;
	protected start(): void {
		this.reset();
		Slot45EventManager.GetInstance().register("featuretriggerstarted", this.onFeatureTriggerStarted.bind(this));
		Slot45EventManager.GetInstance().register("featureWinCompleted", this.onfeatureWinCompleted.bind(this));
	}

	protected checkRuleTrigger(): boolean {
		return false;
	}

	private onFeatureTriggerStarted(): void {
		if (this.checkRuleTrigger())
		{
			this.showContent();
		}
	}

	private onfeatureWinCompleted(): void {
		this.hideContent();
	}

	protected showContent() {
		this.content.active = true;
		cc.tween(this.content).delay(this.startDuration).to(0.5, { opacity: 255 }).start();
	}

	private hideContent() {
		this.reset();
		// cc.tween(this.content).delay(this.endDuration).to(0.5, { opacity: 0 }).call(() => {
		// }).start();
	}

	private reset() {
		this.content.opacity = 0;
		this.content.active = false;
	}
}