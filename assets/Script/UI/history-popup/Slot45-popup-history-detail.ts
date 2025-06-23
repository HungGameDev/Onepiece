import { G1009EventManager } from "../../base/events/Slot45-event-manager";
import { G1009SpriteProviderManagerActor } from "../provider/Slot45-sprite-frame-provider";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009PopupHistoryDetail extends cc.Component {

    @property(cc.Node)
    private content: cc.Node = null;

    @property(cc.Node)
    private contentSpinResuilt: cc.Node = null;
  
    @property(cc.Label)
    private lblSession: cc.Label = null;
    
    @property(cc.Label)
    private lblTotalWin: cc.Label = null;

    private spinResuilt: cc.Sprite[] = [];
    SymbolFormat: string = 'Symbol_%s';
    protected start(): void {
        G1009EventManager.GetInstance().register("ShowDetailHistory", this.onShowDetailHistory.bind(this));

        for (let index = 0; index < this.contentSpinResuilt.childrenCount; index++) {
            const itemComponent = this.contentSpinResuilt.children[index].getComponent(cc.Sprite);
            this.spinResuilt.push(itemComponent);
        }
    }
    private onShowDetailHistory(data: any): void {

        for (let index = 0; index < data.SpinResuilt.length; index++)
        {
            const Id = data.SpinResuilt[index];
            let frame = G1009SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat,Id));
            this.spinResuilt[index].spriteFrame = frame;  
        }
        this.lblSession.string = data.Session;
        this.lblTotalWin.string = data.TotalWin;
        this.Show();
    }
    public Show(): void {
        this.content.active = true;
    }

    public Hide(): void {
        this.content.active = false;
    }
  
}
