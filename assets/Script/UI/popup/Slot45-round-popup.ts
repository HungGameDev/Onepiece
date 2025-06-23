import { G1009EventManager } from "../../base/events/Slot45-event-manager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009RoundPopupActor extends cc.Component {

    @property(cc.Label)
    rounnd: cc.Label = null;

    start () {
        this.register();
    }

    private register(): void {
        G1009EventManager.GetInstance().register("ShowRound", this.OnShowRound.bind(this));
    }

    private OnShowRound(round:string): void{
        this.rounnd.string = round;
    }
}
