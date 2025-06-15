import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import { G1009BalanceModel } from "../../models/aka-g1009-balance-model";
import { G1009BetModel } from "../../models/aka-g1009-bet-model";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009PopUpSelectBetActor extends cc.Component {

    
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
        G1009EventManager.GetInstance().register("ShowBetLinePanel", this.onShowClick.bind(this));
        G1009EventManager.GetInstance().register("SelectBetLineClick", this.onSelectBetLineClick.bind(this));
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
                G1009EventManager.GetInstance().notify("UpdateBetLine", this.selectedBetLine);
            })
            .start();
        }
        else
        {
            G1009EventManager.GetInstance().notify("PopupInfoMessage", { message: "khong du tien", type: "info" });         
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
        G1009EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    }

    private onTakAllLine() {
        this.resetSelectBetLine();
        G1009EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    }

    private onTakNoLine() {
        this.selectedBetLine = [];
        G1009EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    }

    private onTakeOddLine() {
        this.resetSelectBetLine();
        this.selectedBetLine = this.selectedBetLine.filter(function (element) {
            return element % 2 !== 0;
        });
        G1009EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
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
		return G1009BetModel.GetInstance().TryGetTotalBetPointByBetMultiplier(this.selectedBetLine.length) <= G1009BalanceModel.GetInstance().GetBalance();
	}
}
