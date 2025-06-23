const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009PopupError extends cc.Component {

	onExitClick(): void {
		cc.director.loadScene('home-page');
	}
}