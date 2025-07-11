import { PopupInfoMessage } from "../../GameManager/Slot45-GameManager";
import { Slot45EventManager } from "../../base/events/Slot45-event-manager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45PopupError extends cc.Component {

	@property(cc.Node)
	content: cc.Node = null;
	@property(cc.Label)
	lblMessage: cc.Label = null;
	@property(cc.Node)
	btnExit: cc.Node = null;
	@property(cc.Node)
	btnClosePopup: cc.Node = null;

	protected start(): void {
		Slot45EventManager.GetInstance().register("PopupInfoMessage", this.onPopupInfoMessage.bind(this));
		this.reset();
	}

	onPopupInfoMessage(data: PopupInfoMessage): void {
		this.lblMessage.string = data.message;
		this.btnExit.active = !(data.type == 'info');
		this.btnClosePopup.active = (data.type == 'info');
		this.content.active = true;
		this.content.opacity = 0;
		cc.tween(this.content)
			.to(0.2, { opacity: 255 })
			.start();
	}

	reset(): void {
		this.content.active = false;
	}

	onExitClick(): void {
		cc.director.loadScene('home-page');
	}

	onClosePopupClick(): void {
		cc.tween(this.content)
			.to(0.2, { opacity: 0 })
			.call(() => this.reset())
			.start();
	}
}
