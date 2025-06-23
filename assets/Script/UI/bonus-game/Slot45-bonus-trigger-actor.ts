import G1009GameController from "../../base/controller/Slot45-game-controller";
import { G1009EventManager } from "../../base/events/Slot45-event-manager";
import G1009FeatureTrigger from "../feature/Slot45-feature-trigger-actor";


const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009BonusTrigger extends G1009FeatureTrigger {
	@property(cc.Node)
	arrNodeSymbol: cc.Node[] = [];

    protected checkRuleTrigger(): boolean {
		return G1009GameController.GetInstance().CheckBonusPointTrigger();
	}

	protected notifyEnterFeature() {
		G1009EventManager.GetInstance().notify("EnterBonus", G1009GameController.GetInstance().GetWinBonus());
	}

	protected showContent(): void {
		G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_bonustransition", isLoop: false });
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
			G1009EventManager.GetInstance().notify("BonusWinComplete");
			this.reset();
		})
		.start();
		
	}

	protected reset(): void {
		this.content.opacity = 0;
		this.content.active = false;
	}
}
