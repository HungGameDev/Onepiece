import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009InfoToggleButtonActor extends cc.Component {

    @property
    protected toggleId: number = -1;
    protected toggle: cc.Toggle = null;
    protected onLoad(): void {
        this.toggle = this.node.getComponent(cc.Toggle);     
    }

    public OnToggleClicked(action: cc.Toggle): void {
            G1009EventManager.GetInstance().notify("ChangeInfoPage", this.toggleId);
    }
}
