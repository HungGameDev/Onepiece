import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
const {ccclass, property} = cc._decorator;
const TOGGLE_SPACE = -60;
@ccclass
export default class G1009InfoTogglePanelActor extends cc.Component {

    currenttoggleID: number = 0;
    container: cc.ToggleContainer = null;
    protected onLoad(): void {
        this.register();
        this.container = this.node.getComponent(cc.ToggleContainer);
       
       
    }
    private register(): void {
        G1009EventManager.GetInstance().register("ChangeInfoPage", this.onChangeInfoPage.bind(this));
    
    }
    
    private onChangeInfoPage(toggleId: number): void {
        if (this.currenttoggleID != toggleId)
        {
            this.container.toggleItems[toggleId].isChecked = true;
            this.currenttoggleID = toggleId;
           // cc.tween(this.node).to(0.3, { position: new cc.Vec3(TOGGLE_SPACE * this.currenttoggleID, this.node.position.y, this.node.position.z) }).start();
        }
    }
}
