import { G1009EventManager } from "../../base/events/Slot45-event-manager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009ToggleSimulatorActor extends cc.Component {

    @property(cc.Node)
    normalButton: cc.Node = null;

    @property(cc.Node)
    activeButton: cc.Node = null;

    @property
    EventName: string = "Event-name";

    public changeToggleState(_isActive: string): void
    {
        let isActive = _isActive == "true" ? true : false;
        this.activeButton.active = isActive;
        this.normalButton.active = !isActive;
    }
  
    private onToggleOffClick(): void
    {
        this.activeButton.active = false;
        this.normalButton.active = true;
        G1009EventManager.GetInstance().notify(this.EventName+"-off");
    }
    private onToggleOnClick(): void
    {
        this.activeButton.active = true;
        this.normalButton.active = false;
        G1009EventManager.GetInstance().notify(this.EventName+"-on");
    }
}
