import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import Slot45InfoToggleButtonActor from "./Slot45-info-toggle-button";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45BetToggleButtonActor extends Slot45InfoToggleButtonActor {


    protected start(): void {
        Slot45EventManager.GetInstance().register("ChangeToggleState", this.OnChangeToggleState.bind(this));
    }

    public OnToggleClicked(action: cc.Toggle): void {
        Slot45EventManager.GetInstance().notify("SelectBetLineClick", {id:this.toggleId,isCheck:action.isChecked});
    }

    private OnChangeToggleState(toggleArray: number[])
    {
        this.toggle.isChecked = toggleArray.includes(this.toggleId);
    }
}
