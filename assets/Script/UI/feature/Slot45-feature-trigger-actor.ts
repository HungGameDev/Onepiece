import { Slot45EventManager } from "../../base/events/Slot45-event-manager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45FeatureTrigger extends cc.Component {

	@property(cc.Node)
	protected content: cc.Node = null;

	protected start(): void {
		Slot45EventManager.GetInstance().register("featuretriggerstarted", this.onFeatureTrigger.bind(this));
		Slot45EventManager.GetInstance().register("featureWinCompleted", this.onfeatureWinCompleted.bind(this));

	}

	protected checkRuleTrigger(): boolean {
		return false;
	}

	protected onFeatureTrigger(): void {
		if (this.checkRuleTrigger())
		{
			this.showContent();
		}
	}

	protected onfeatureWinCompleted(): void {
		if (this.checkRuleTrigger())
		{
			this.hideContent();
		}
	}

	protected showContent() {
		if (this.content != null)
		{
			cc.tween(this.content)
				.to(0.5, { opacity: 255 })
				.call(() => {
					this.notifyEnterFeature();
					cc.tween(this.content).to(0.5, { opacity: 0 }).call(() => {
						this.reset();
					}).start();
				}).start();
		}
		
	}

	protected hideContent() {
	}

	protected reset() {
		if (this.content != null)
		{
			this.content.opacity = 0;
			this.content.active = false;
		}
	}

	protected notifyEnterFeature() { }
}