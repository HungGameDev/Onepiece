import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import Slot45ButtonActor from "./Slot45-button";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45ButtonSpinAnimationActor extends Slot45ButtonActor {
	@property(sp.Skeleton)
	animationButton: sp.Skeleton = null;
	protected onLoad(): void {
		super.onLoad();
		this.playAnimIdle();
	}

	protected onButtonClick(): void {
		this.playAnimSpin();
		Slot45EventManager.GetInstance().notify(this.EventName);
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
