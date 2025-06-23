import { Slot45EventManager } from "../../base/events/Slot45-event-manager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45ButtonActor extends cc.Component {

	@property
	EventName: string = "Event-name";

	@property(cc.Button)
	button: cc.Button = null;

	enableTween: cc.Tween;
	disableTween: cc.Tween;

	protected onLoad(): void {
		this.button = this.node.getComponent(cc.Button);
		this.node.on("click", this.onButtonClick.bind(this));
	}

	protected onButtonClick(): void {
		Slot45EventManager.GetInstance().notify(this.EventName);
	}

	public Interactable(isInteractable: boolean) {
		if (!!this.button)
			this.button = this.node.getComponent(cc.Button);
		this.button.interactable = isInteractable;
	}

	public Disable(): void {
		this.killAllTween();
		this.disableTween = cc.tween(this.node)
			.to(0.2, { opacity: 0 })
			.call(() => { this.node.active = false; })
			.start();
	}

	public Enable(): void {
		this.killAllTween();
		this.node.active = true;
		this.enableTween = cc.tween(this.node)
			.to(0.2, { opacity: 255 }).start();
	}

	private killAllTween(): void {
		this.enableTween?.stop();
		this.disableTween?.stop();
		this.enableTween = cc.tween({});
		this.disableTween = cc.tween({});
	}
}
