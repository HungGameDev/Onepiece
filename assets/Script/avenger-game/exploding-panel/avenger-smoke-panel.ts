
import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SmokePanel extends cc.Component {
    @property(cc.ParticleSystem)
    particleSmoke: cc.ParticleSystem[] = [];

    private register(): void {
        G1009EventManager.GetInstance().register("CellDropCompleted", this.onCellDropCompleted.bind(this));
    }

    onLoad() {
        this.register();
    }


    onCellDropCompleted(cellIndex){
        this.particleSmoke[cellIndex].resetSystem();
    }

    
}
