import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import G1009ToggleSimulatorActor from "./aka-g1009-toggle-simulator";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009SystemPanel extends cc.Component {

    @property(cc.Node)
    private content: cc.Node = null;

    @property(G1009ToggleSimulatorActor)
    private soundButton: G1009ToggleSimulatorActor = null;

    @property(G1009ToggleSimulatorActor)
    private musicButton: G1009ToggleSimulatorActor = null;

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
        G1009EventManager.GetInstance().register("HideSysTemPanel", this.onHideClick.bind(this));
        G1009EventManager.GetInstance().register("ShowSysTemPanel", this.onShowClick.bind(this));
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
