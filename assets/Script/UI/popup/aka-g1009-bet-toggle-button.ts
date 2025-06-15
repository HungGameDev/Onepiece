import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import G1009InfoToggleButtonActor from "./aka-g1009-info-toggle-button";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009BetToggleButtonActor extends G1009InfoToggleButtonActor {


    protected start(): void {
        G1009EventManager.GetInstance().register("ChangeToggleState", this.OnChangeToggleState.bind(this));
    }

    public OnToggleClicked(action: cc.Toggle): void {
        G1009EventManager.GetInstance().notify("SelectBetLineClick", {id:this.toggleId,isCheck:action.isChecked});
    }

    private OnChangeToggleState(toggleArray: number[])
    {
        this.toggle.isChecked = toggleArray.includes(this.toggleId);
    }
}
