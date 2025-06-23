
import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import Slot45Util from "../../base/Util/Slot45-number-converter";
import { Slot45BetModel } from "../../models/Slot45-bet-model";
import Slot45BetButtonActor from "./Slot45-bet-button";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45BetButtonv2Actor extends Slot45BetButtonActor {

  @property(cc.Label)
  txtJackpotText: cc.Label = null;

  private betInfos: any;
  public start(): void {
    Slot45EventManager.GetInstance().register('BetInfos', this.onBetInfos.bind(this));
    Slot45EventManager.GetInstance().register('JackpotUpdate', this.onJackpotUpdate.bind(this));
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
    Slot45EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_choosen_bet", isLoop: false });

  }

  private updateLabel(): void {
    let betInfo = this.betInfos[this.betIndex];
    this.txtButtonText.string = Slot45BetModel.GetInstance().GetBetPointByIndex(this.betIndex).toString();
    this.txtJackpotText.string = Slot45Util.Instance().NumberFormatWithoutCharacter(betInfo.jackpotInfos[0].jackpotAmount);
  }
}
