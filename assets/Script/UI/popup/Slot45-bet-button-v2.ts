
import { G1009EventManager } from "../../base/events/Slot45-event-manager";
import G1009Util from "../../base/Util/Slot45-number-converter";
import { G1009BetModel } from "../../models/Slot45-bet-model";
import G1009BetButtonActor from "./Slot45-bet-button";

const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009BetButtonv2Actor extends G1009BetButtonActor {

  @property(cc.Label)
  txtJackpotText: cc.Label = null;

  private betInfos: any;
  public start(): void {
    G1009EventManager.GetInstance().register('BetInfos', this.onBetInfos.bind(this));
    G1009EventManager.GetInstance().register('JackpotUpdate', this.onJackpotUpdate.bind(this));
  }

  private onJackpotUpdate(datas): void {
    let arr = Object.entries(datas);
    this.betInfos.forEach(betInfo => {
      let jackpotData: any = arr.find((data: any) => {
        return data[1].jackpotId == betInfo.jackpotInfos[0].jackpotId;
      })
      betInfo.jackpotInfos[0].jackpotAmount = jackpotData[1].jackpotAmount;
    });
    this.updateLabel();
  }

  private onBetInfos(data): void {
    this.betInfos = Object.assign([], data);
    this.updateLabel();
  }

  override onButtonClick(): void {
    super.onButtonClick();
    G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_choosen_bet", isLoop: false });

  }

  private updateLabel(): void {
    let betInfo = this.betInfos[this.betIndex];
    this.txtButtonText.string = G1009BetModel.GetInstance().GetBetPointByIndex(this.betIndex).toString();
    this.txtJackpotText.string = G1009Util.Instance().NumberFormatWithoutCharacter(betInfo.jackpotInfos[0].jackpotAmount);
  }
}
