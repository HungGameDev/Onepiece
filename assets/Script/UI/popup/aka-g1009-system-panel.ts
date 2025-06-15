import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import G1009ToggleSimulatorActor from "./aka-g1009-toggle-simulator";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009SystemPanel extends cc.Component {

    @property(cc.Node)
    private content: cc.Node = null;

    @property(cc.Node)
    private btnMusic: cc.Node = null;

    @property(cc.Node)
    private btnSound: cc.Node = null;

    @property(cc.Node)
    private btnHistory: cc.Node = null;

    @property(cc.Vec3)
    private activePosition: cc.Vec3[] = [];

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
        this.PlayShowAnimation(this.btnHistory, this.activePosition[0]);
        this.PlayShowAnimation(this.btnMusic, this.activePosition[0]);
        this.PlayShowAnimation(this.btnSound, this.activePosition[0]);
        cc.tween({}).delay(0.3).call(() => { this.content.active = false; }).start();
       
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
        this.PlayShowAnimation(this.btnHistory, this.activePosition[1]);
        this.PlayShowAnimation(this.btnMusic, this.activePosition[2]);
        this.PlayShowAnimation(this.btnSound, this.activePosition[3]);
    }

    private PlayShowAnimation(targetNode: cc.Node, targetPosition: cc.Vec3) {
        var action = cc.tween(targetNode)
            .to(0.3, { position: targetPosition }).call(() => { action.stop() }).start();
        
    }
}
