import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import { Slot45BetModel } from "../../models/Slot45-bet-model";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45JackpotInfoActor extends cc.Component {

    @property(cc.Label)
    labelsBet: cc.Label[] = [];

    @property(cc.Label)
    labelsDescription: cc.Label[] = [];

    @property(cc.Node)
    content: cc.Node = null;

    public start(): void{
        Slot45EventManager.GetInstance().register('JackpotShowMultiple', this.show.bind(this));
        Slot45EventManager.GetInstance().register('JackpotHideMultiple',this.hide.bind(this));
    }

    private show(datas: any): void{
        let arr = Object.entries(datas);
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index][1];
            this.labelsBet[index].string ="P"+Slot45BetModel.GetInstance().GetBetPointByIndex(index).toString();
            this.labelsDescription[index].string = element.message;
        }
        this.content.active = true;
        console.log(datas);
    }

    private hide(): void{
        this.content.active = false;
    }
}
