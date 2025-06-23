import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import Slot45ToggleSimulatorActor from "./Slot45-toggle-simulator";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45SystemPanel extends cc.Component {

    @property(cc.Node)
    private content: cc.Node = null;

    @property(Slot45ToggleSimulatorActor)
    private soundButton: Slot45ToggleSimulatorActor = null;

    @property(Slot45ToggleSimulatorActor)
    private musicButton: Slot45ToggleSimulatorActor = null;

    private enableBGMKey: string = "";
    private enableSFXKey: string = "";
    private isActive: boolean = false;
    protected onLoad(): void {
        this.enableBGMKey = cc.sys.localStorage.getItem('enableBGMKey');
        this.enableSFXKey = cc.sys.localStorage.getItem('enableSFXKey');
        this.setSound();
        this.register();
    }
    private register(): void {
        Slot45EventManager.GetInstance().register("HideSysTemPanel", this.onHideClick.bind(this));
        Slot45EventManager.GetInstance().register("ShowSysTemPanel", this.onShowClick.bind(this));
    }

    private setSound(): void {
        this.soundButton.changeToggleState(this.enableSFXKey);
        this.musicButton.changeToggleState(this.enableBGMKey);
    }
    
    private onHideClick(): void {
        this.content.active = false;
    }

    private onShowClick(): void {

        if (this.isActive)
        {
            this.isActive = false;
            this.onHideClick();
            return;
        }
        this.isActive = true;
        this.content.active = true;
    }
}
