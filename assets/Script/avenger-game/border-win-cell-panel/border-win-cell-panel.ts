import { SlottyParameter } from "../../aka-g1009-game-config";
import { G1009AnimationProviderManager } from "../../base/animation/aka-g1009-animation-provider";
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";


const { ccclass, property } = cc._decorator;

@ccclass
export default class BorderWinCellPanel extends cc.Component {

    @property(sp.Skeleton)
    arrSpineBorder: sp.Skeleton[] = [];

    @property(cc.String)
    nameSpineAnimation: string = "";

    protected onLoad(): void {
        this.register();
    }

    private register(): void {
        G1009EventManager.GetInstance().register("ShowWinCells", this.onShowWinCells.bind(this));
    }

    private onShowWinCells(arrWinCells: []) {
        var dataSequence = this.generateDataSequenceFollowReel([...arrWinCells]);
        this.playAnimationBorderWinCell(dataSequence);

    }
    generateDataSequenceFollowReel(arrIndexWinCells: number[]): number[] {
        var arrSequenceIndexCell = [];
        for (let reel = 0; reel < SlottyParameter.GetReelCount(); reel++) {
            arrSequenceIndexCell.push([]);
        }
        arrIndexWinCells.forEach(indexCell => {
            let reelCell = SlottyParameter.GetReelIndex(indexCell);
            arrSequenceIndexCell[reelCell].push(indexCell);
        });
        return arrSequenceIndexCell;
    }

    playAnimationBorderWinCell(dataSequenceIndexCell) {
        var dataSpine = G1009AnimationProviderManager.Instance().GetAnimation(this.nameSpineAnimation);
        for (let index = 0; index < dataSequenceIndexCell.length; index++) {
            let countIndex = index;
            let arrIndex = dataSequenceIndexCell[countIndex];
            let seq = cc.sequence(
				cc.delayTime(0.1 * countIndex)
				, cc.callFunc(() => {
                    for (let index = 0; index < arrIndex.length; index++) {
                        var spineBorder = this.arrSpineBorder[arrIndex[index]];
                        spineBorder.node.active = true;
                        spineBorder.skeletonData = (dataSpine);
                        spineBorder.setAnimation(0, "animation", false);
                    }
				}, this, arrIndex));
			this.node.runAction(seq);
        }
    }

}
