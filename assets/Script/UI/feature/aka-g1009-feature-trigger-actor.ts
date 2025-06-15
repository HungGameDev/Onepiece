import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009FeatureTrigger extends cc.Component {

	@property(cc.Node)
	private content: cc.Node = null;

	protected start(): void {
		G1009EventManager.GetInstance().register("featuretriggerstarted", this.onFeatureTrigger.bind(this));
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

	protected reset() {
		if (this.content != null)
		{
			this.content.opacity = 0;
			this.content.active = false;
		}
	}

	protected notifyEnterFeature() { }
}