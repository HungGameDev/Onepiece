import { G1009EventManager } from "../../base/events/Slot45-event-manager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009SelectBetActor extends cc.Component {

    @property(cc.Node)
    private content: cc.Node = null;

    public start(): void {
        G1009EventManager.GetInstance().register('SetBet', this.Hide.bind(this));
    }
    public Hide(): void{
        this.content.active = false;
    }

    public Show(): void{
        this.content.active = true;
		G1009EventManager.GetInstance().notify("ShowPopupChangeBet");
    } 

    public OnButtonBackClick(): void{
        cc.director.loadScene('Lobby');
    }
    
}
