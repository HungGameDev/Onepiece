import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import { G1009BetModel } from "../../models/aka-g1009-bet-model";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009JackpotInfoActor extends cc.Component {

    @property(cc.Label)
    labelsBet: cc.Label[] = [];

    @property(cc.Label)
    labelsDescription: cc.Label[] = [];

    @property(cc.Node)
    content: cc.Node = null;

    public start(): void{
        G1009EventManager.GetInstance().register('JackpotShowMultiple', this.show.bind(this));
        G1009EventManager.GetInstance().register('JackpotHideMultiple',this.hide.bind(this));
    }

    private show(datas: any): void{
        let arr = Object.entries(datas);
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index][1];
            this.labelsBet[index].string ="P"+G1009BetModel.GetInstance().GetBetPointByIndex(index).toString();
            this.labelsDescription[index].string = element.message;
        }
        this.content.active = true;
        console.log(datas);
    }

    private hide(): void{
        this.content.active = false;
    }
}
