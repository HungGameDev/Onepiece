import Slot45GameController from "../../base/controller/Slot45-game-controller";
import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import Slot45FeatureTrigger from "../feature/Slot45-feature-trigger-actor";


const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45BonusTrigger extends Slot45FeatureTrigger {
	@property(cc.Node)
	arrNodeSymbol: cc.Node[] = [];

    protected checkRuleTrigger(): boolean {
		return Slot45GameController.GetInstance().CheckBonusPointTrigger();
	}

	protected notifyEnterFeature() {
		Slot45EventManager.GetInstance().notify("EnterBonus", Slot45GameController.GetInstance().GetWinBonus());
	}

	protected showContent(): void {
		Slot45EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_bonustransition", isLoop: false });
		this.content.active = true;
		cc.tween(this.content)
				.to(0.5, { opacity: 255 })
				.call(() => {
					for (let index = 0; index < this.arrNodeSymbol.length; index++) {
						const count = index;
						const node = this.arrNodeSymbol[count];
						const delayTime = 0.1 * count;
						cc.tween(node)
							.delay(delayTime)
							.to(0.1, { opacity: 0 })
							.to(0.1, { opacity: 255 })
							.to(0.1, { opacity: 0 })
							.to(0.1, { opacity: 255 })
							.to(0.1, { opacity: 0 })
							.to(0.1, { opacity: 255 })
							.start();
					}
				}).start();

		cc.tween(this.node).delay(2).call(() => {
			this.notifyEnterFeature();	
		}).delay(2).call(() => {
			Slot45EventManager.GetInstance().notify("BonusWinComplete");
			this.reset();
		})
		.start();
		
	}

	protected reset(): void {
		this.content.opacity = 0;
		this.content.active = false;
	}
}
