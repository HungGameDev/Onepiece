import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import G1009ButtonActor from "./aka-g1009-button";
const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009ButtonSpinAnimationActor extends G1009ButtonActor {
	@property(sp.Skeleton)
	animationButton: sp.Skeleton = null;
	protected onLoad(): void {
		super.onLoad();
		this.playAnimIdle();
	}

	protected onButtonClick(): void {
		this.playAnimSpin();
		G1009EventManager.GetInstance().notify(this.EventName);
	}

	private playAnimIdle():void{
		this.animationButton.setAnimation(0, "idle", true);
	}

	private playAnimSpin():void{
		this.animationButton.clearTrack(0);
		var track: sp.spine.TrackEntry = this.animationButton.setAnimation(0, "active", false);
		var delayTime =  track.animationEnd;
		cc.tween(this.animationButton.node)
			.delay(delayTime)
			.call(() => {
				this.playAnimIdle();
			})
			.start();
	}
}
