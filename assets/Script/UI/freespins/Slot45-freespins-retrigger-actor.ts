import G1009GameController from "../../base/controller/Slot45-game-controller";
import { G1009EventManager } from "../../base/events/Slot45-event-manager";
import G1009FeatureTrigger from "../feature/Slot45-feature-trigger-actor";
const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009FreespinsRetrigger extends G1009FeatureTrigger {
	@property(cc.Node)
	bannerCountFreespin: cc.Node = null;
	@property(cc.Node)
	bannerTriggerFreespin: cc.Node = null;

	protected checkRuleTrigger(): boolean {
		return G1009GameController.GetInstance().CheckFreespinRetrigger();
	}

	protected notifyEnterFeature() {
		G1009EventManager.GetInstance().notify("EnterFreespins");
	}

	protected showContent(): void {
		G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_freewin", isLoop: false });
		this.content.active = true;
		cc.tween(this.bannerTriggerFreespin)
		.to(0.2, { opacity: 255,scale : 1 })
		.to(0.1, { scale : 1.2})
		.to(0.1, { scale : 1})
		.to(0.1, { scale : 1.1})
		.to(0.1, { scale : 1})
		.delay(1)
		.call(()=>{
			this.resetBannerTrigger();
			G1009EventManager.GetInstance().notify("CountFreespinsLeft");
			this.bannerCountFreespin.active = true;
			cc.tween(this.node)
			.delay(0.5)
			.call(()=>{
				this.notifyEnterFeature();
			}).start();
		})
		.start();
	}

	protected hideContent(): void {
		this.bannerCountFreespin.active = false;
	}

	protected resetBannerTrigger(): void {
		this.content.active = false;
		this.bannerTriggerFreespin.scale = 3;
		this.bannerTriggerFreespin.opacity = 0;
	}
}