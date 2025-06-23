const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45PopupError extends cc.Component {

	onExitClick(): void {
		cc.director.loadScene('home-page');
	}
}