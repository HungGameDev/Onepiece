import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

   @property(cc.Label)
	private lblFreespinLeft: cc.Label = null;

    freespinLeft: number = 0;
   
    protected start(): void {
		G1009EventManager.GetInstance().register("NextScrollData", this.onNextScrollData.bind(this));
		G1009EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
		G1009EventManager.GetInstance().register("CountFreespinsLeft", this.onCountFreespinsLeft.bind(this));
    }

    protected onSpinStarted(data: any): void {
        if(this.freespinLeft > 0)
        {
            this.freespinLeft = this.freespinLeft - 1;
            this.lblFreespinLeft.string = this.freespinLeft.toString();
        }
	}

    protected onCountFreespinsLeft(data: any): void {
        if(this.freespinLeft > 0)
        {
            this.lblFreespinLeft.string = this.freespinLeft.toString();
        }
	}

    private onNextScrollData(data: any): void {
		this.freespinLeft = data.freespinLeft;
	}
}
