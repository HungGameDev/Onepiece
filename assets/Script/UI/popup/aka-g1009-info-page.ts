import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";


const {ccclass, property} = cc._decorator;
@ccclass
export default class G1009InfoPageActor extends cc.Component {

    @property(cc.Node)
    private content: cc.Node = null;

    protected onLoad(): void {
        this.register();
    }
    private register(): void {

        G1009EventManager.GetInstance().register("HideInfoPanel", this.onHideClick.bind(this));
        G1009EventManager.GetInstance().register("ShowInfoPanel", this.onShowClick.bind(this));
    }

    private onHideClick(): void {
        this.content.active = false;
    }

    private onShowClick(): void {
        this.content.active = true;
    }
}
