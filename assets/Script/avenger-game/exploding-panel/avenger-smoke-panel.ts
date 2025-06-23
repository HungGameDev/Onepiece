
import { G1009EventManager } from "../../base/events/Slot45-event-manager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SmokePanel extends cc.Component {

    @property(sp.Skeleton)
	private particleSmoke: sp.Skeleton [] = [];

    private register(): void {
        G1009EventManager.GetInstance().register("CellDropCompleted", this.onCellDropCompleted.bind(this));
    }

    onLoad() {
        this.register();
    }


    onCellDropCompleted(cellIndex){
        this.particleSmoke[cellIndex].setAnimation(0, "animation", false);
    }

    
}
