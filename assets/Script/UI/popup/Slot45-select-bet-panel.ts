import { Slot45EventManager } from "../../base/events/Slot45-event-manager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45SelectBetActor extends cc.Component {

    @property(cc.Node)
    private content: cc.Node = null;

    public start(): void {
        Slot45EventManager.GetInstance().register('SetBet', this.Hide.bind(this));
    }
    public Hide(): void{
        this.content.active = false;
    }

    public Show(): void{
        this.content.active = true;
		Slot45EventManager.GetInstance().notify("ShowPopupChangeBet");
    } 

    public OnButtonBackClick(): void{
        cc.director.loadScene('Lobby');
    }
    
}
