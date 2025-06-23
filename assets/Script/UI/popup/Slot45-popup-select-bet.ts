import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import { Slot45BalanceModel } from "../../models/Slot45-balance-model";
import { Slot45BetModel } from "../../models/Slot45-bet-model";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45PopUpSelectBetActor extends cc.Component {

    
    @property(cc.Node)
    content: cc.Node = null;

  
    selectedBetLine: number[];


    protected start(): void {
        this.resetSelectBetLine();
    }
    protected onLoad(): void {
        this.register();
    }

    private register(): void {
        Slot45EventManager.GetInstance().register("ShowBetLinePanel", this.onShowClick.bind(this));
        Slot45EventManager.GetInstance().register("SelectBetLineClick", this.onSelectBetLineClick.bind(this));
    }

    private reset(): void {
        this.content.active = false;
    }
    
    public onClosePopupClick(): void {
        if (this.validatorBet())
        {
            cc.tween(this.content)
            .to(0.2, { opacity: 0 })
            .call(() => {
                this.reset()
                Slot45EventManager.GetInstance().notify("UpdateBetLine", this.selectedBetLine);
            })
            .start();
        }
        else
        {
            Slot45EventManager.GetInstance().notify("PopupInfoMessage", { message: "khong du tien", type: "info" });         
        }
       
    }

    private onSelectBetLineClick(data: any): void {
        if (data.isCheck)
        {
            if (!this.selectedBetLine.includes(data.id))
            {
                this.selectedBetLine.push(data.id);
            }
        }
        else
        {
            if (this.selectedBetLine.includes(data.id))
            {
                var index = this.selectedBetLine.indexOf(data.id);
                delete this.selectedBetLine[index];
            }
        }
        this.selectedBetLine = this.selectedBetLine.filter(function (element) {
            return element !== undefined;
        });
 
        this.selectedBetLine.sort((a, b) => a - b);
    }

    private onTakeEvenLine() {        
        this.resetSelectBetLine();
        this.selectedBetLine = this.selectedBetLine.filter(function (element) {
            return element % 2 == 0;
        });  
        Slot45EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    }

    private onTakAllLine() {
        this.resetSelectBetLine();
        Slot45EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    }

    private onTakNoLine() {
        this.selectedBetLine = [];
        Slot45EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    }

    private onTakeOddLine() {
        this.resetSelectBetLine();
        this.selectedBetLine = this.selectedBetLine.filter(function (element) {
            return element % 2 !== 0;
        });
        Slot45EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    }

    private resetSelectBetLine()
    {
        this.selectedBetLine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    }
    public check(param: number): void {
        this.content.opacity = 255;
    }
    
    private onShowClick(): void {
        this.content.opacity = 255;
        this.content.active = true;
    }

    private validatorBet(): boolean {
		return Slot45BetModel.GetInstance().TryGetTotalBetPointByBetMultiplier(this.selectedBetLine.length) <= Slot45BalanceModel.GetInstance().GetBalance();
	}
}
