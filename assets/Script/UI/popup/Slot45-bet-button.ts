import { G1009EventManager } from "../../base/events/Slot45-event-manager";
import { G1009BalanceModel } from "../../models/Slot45-balance-model";
import { G1009BetModel } from "../../models/Slot45-bet-model";
import G1009ButtonActor from "./Slot45-button";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009BetButtonActor extends G1009ButtonActor {

    @property
    betIndex: number = -1;
    @property(cc.Label)
    txtButtonText: cc.Label = null;
    
    public start(): void {
        G1009EventManager.GetInstance().register("ShowBetPanel", this.SetButtonTextValues.bind(this));
        G1009EventManager.GetInstance().register("SetBetIncrease", this.SetTextColor.bind(this));
        G1009EventManager.GetInstance().register(this.EventName, this.SetTextColor.bind(this));
        this.SetTextColor(0);
    }

    protected SetButtonTextValues(): void {

        this.txtButtonText.string = G1009BetModel.GetInstance().GetBetPointByIndex(this.betIndex).toString();
        this.button.interactable = this.validatorButtonSetBet(this.betIndex);
    }

    override onButtonClick(): void {
        if (this.validatorButtonSetBet(this.betIndex) && G1009BetModel.GetInstance().GetBetPerLinebyIndex(this.betIndex) != G1009BetModel.GetInstance().GetCurrentBetPerLine())
        {
            G1009EventManager.GetInstance().notify(this.EventName, this.betIndex);
        }
	
    }
    
    private validatorButtonSetBet(index: number): boolean {
        return G1009BetModel.GetInstance().GetNextTotalBetPointbyIndex(index) <= G1009BalanceModel.GetInstance().GetBalance();
    }

    private SetTextColor(index: number): void{      
            this.txtButtonText.node.color = this.betIndex != index ? cc.Color.GRAY : cc.Color.WHITE;
    }
}
