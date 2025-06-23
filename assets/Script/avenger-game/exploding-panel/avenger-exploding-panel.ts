import { G1009AnimationProviderManager } from "../../base/animation/Slot45-animation-provider";
import { G1009EventManager } from "../../base/events/Slot45-event-manager";
import AvengerSpinItem from "../spin-panel/avenger-spin-item";
import ExplodingCell from "./avenger-exploding-cell";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ExplodingPanel extends cc.Component {

    @property(AvengerSpinItem)
    spinItems: AvengerSpinItem[] = [];

    @property(ExplodingCell)
    ExplodingCells: ExplodingCell[] = [];

    private isStartExplodeCells = false;
    private oldCells: string[] = null;

    private register(): void {
        G1009EventManager.GetInstance().register("StartPresentWinCombo", this.onStartPresentWinCombo.bind(this));
        G1009EventManager.GetInstance().register("DataRespond", this.onDataRespond.bind(this));

    }

    onLoad() {
        this.register();
        this.spinItems.forEach(spinItem => {
            spinItem.onExplodeCompleted = this.handleExplodeCompleted.bind(this);
        });
    }

    private onDataRespond(cells) {
        this.oldCells = cells;
    }

    private onStartPresentWinCombo(comboData) {
        this.isStartExplodeCells = true;
        this.spinItems.forEach(spinItem => {
            spinItem.StartExplodeCells(comboData.explodedCells, comboData.Cells);
        });

        this.playEffectExplodeCells(comboData);
    }

    private playEffectExplodeCells(comboData: any) {
        comboData.explodedCells.forEach(idExplodedCell => {
            var nameSymbol = this.oldCells[idExplodedCell];
            this.ExplodingCells[idExplodedCell].PlayEffectExplodeCells(nameSymbol);
        });
        this.oldCells = comboData.Cells;
    }

    private handleExplodeCompleted() {
        if (this.isStartExplodeCells) {
            this.isStartExplodeCells = false;
            G1009EventManager.GetInstance().notify("ExplodeCellsComplete");
        }
    }
}
