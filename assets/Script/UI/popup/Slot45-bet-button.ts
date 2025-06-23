import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import { Slot45BalanceModel } from "../../models/Slot45-balance-model";
import { Slot45BetModel } from "../../models/Slot45-bet-model";
import Slot45ButtonActor from "./Slot45-button";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45BetButtonActor extends Slot45ButtonActor {

    @property
    betIndex: number = -1;
    @property(cc.Label)
    txtButtonText: cc.Label = null;
    
    public start(): void {
        Slot45EventManager.GetInstance().register("ShowBetPanel", this.SetButtonTextValues.bind(this));
        Slot45EventManager.GetInstance().register("SetBetIncrease", this.SetTextColor.bind(this));
        Slot45EventManager.GetInstance().register(this.EventName, this.SetTextColor.bind(this));
        this.SetTextColor(0);
    }

    protected SetButtonTextValues(): void {

        this.txtButtonText.string = Slot45BetModel.GetInstance().GetBetPointByIndex(this.betIndex).toString();
        this.button.interactable = this.validatorButtonSetBet(this.betIndex);
    }

    override onButtonClick(): void {
        if (this.validatorButtonSetBet(this.betIndex) && Slot45BetModel.GetInstance().GetBetPerLinebyIndex(this.betIndex) != Slot45BetModel.GetInstance().GetCurrentBetPerLine())
        {
            Slot45EventManager.GetInstance().notify(this.EventName, this.betIndex);
        }
	
    }
    
    private validatorButtonSetBet(index: number): boolean {
        return Slot45BetModel.GetInstance().GetNextTotalBetPointbyIndex(index) <= Slot45BalanceModel.GetInstance().GetBalance();
    }

    private SetTextColor(index: number): void{      
            this.txtButtonText.node.color = this.betIndex != index ? cc.Color.GRAY : cc.Color.WHITE;
    }
}
