import { Slot45EventManager } from "../../base/events/Slot45-event-manager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45InfoToggleButtonActor extends cc.Component {

    @property
    protected toggleId: number = -1;
    protected toggle: cc.Toggle = null;
    protected onLoad(): void {
        this.toggle = this.node.getComponent(cc.Toggle);     
    }

    public OnToggleClicked(action: cc.Toggle): void {
            Slot45EventManager.GetInstance().notify("ChangeInfoPage", this.toggleId);
    }
}
