import { Slot45EventManager } from "../../base/events/Slot45-event-manager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

   @property(cc.Label)
	private lblFreespinLeft: cc.Label = null;

    freespinLeft: number = 0;
   
    protected start(): void {
		Slot45EventManager.GetInstance().register("NextScrollData", this.onNextScrollData.bind(this));
		Slot45EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
		Slot45EventManager.GetInstance().register("CountFreespinsLeft", this.onCountFreespinsLeft.bind(this));
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
