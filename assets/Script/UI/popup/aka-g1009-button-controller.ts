import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
import G1009ButtonActor from "./aka-g1009-button";

const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009ButtonControllerActor extends cc.Component {

	@property(G1009ButtonActor)
	spinButton: G1009ButtonActor = null;

	@property(G1009ButtonActor)
	stopSpinButton: G1009ButtonActor = null;

	@property(cc.Toggle)
	turboButton: cc.Toggle = null;

	freespinLeft: number = 0;

	isToggleMoving: boolean = false;
	private isAuto: boolean = false;
	
	protected start(): void {
		this.register();
	}

	private register(): void {	
		G1009EventManager.GetInstance().register("StopAuto", this.onStopAuto.bind(this));
		G1009EventManager.GetInstance().register("Spin", this.OnSpinClicked.bind(this));
		G1009EventManager.GetInstance().register("StopImmediately", this.OnStopSpinClicked.bind(this));
		G1009EventManager.GetInstance().register("ShowBetPanel", this.OnResetSpin.bind(this));
		G1009EventManager.GetInstance().register("SpinStarted", this.activeStopButton.bind(this));
		G1009EventManager.GetInstance().register("NextScrollData", this.onNextScrollData.bind(this));
		G1009EventManager.GetInstance().register("FeatureTrigger", this.checkToActiveSpinLeft.bind(this));
		G1009EventManager.GetInstance().register("resume", this.onResume.bind(this));
		G1009EventManager.GetInstance().register("BigWinPresentationStarted", this.onBigWinStarted.bind(this));
		G1009EventManager.GetInstance().register("JackpotPresentationStarted", this.onBigWinStarted.bind(this));
		G1009EventManager.GetInstance().register("SpinComplete",this.onSpinComplete.bind(this));

	}

	private onNextScrollData(data: any): void {
		this.freespinLeft = data.freespinLeft;
	}

	public onResume(): void {
		this.spinButton.Disable();
		this.stopSpinButton.Enable();
		this.checkToActiveSpinLeft();
	}

	public onBigWinStarted(): void {
		this.spinButton.Disable();
		this.stopSpinButton.Enable();
		this.stopSpinButton.Interactable(true);
	
	}

	public onActiveAuto(): void {
		this.isAuto = true;
		this.stopSpinButton.Enable();
		this.spinButton.Disable();
		
	}

	private onStopAuto(): void {
		this.isAuto = false;
	}

	public OnSpinClicked(): void {
		if (this.isAuto == false)
		{
			this.spinButton.Disable();
			this.stopSpinButton.Enable();
		}		
	}

	public OnStopSpinClicked(): void {

		this.stopSpinButton.Interactable(false);
	}

	public onSpinComplete():void{
		this.stopSpinButton.Interactable(false);
	}

	private activeStopButton(): void {
		this.freespinLeft -= 1;
		this.checkToActiveSpinLeft();

		this.stopSpinButton.Interactable(true);
	}

	private checkToActiveSpinLeft() {
		this.onStopAuto();
	}

	private OnResetSpin(): void {
		if (this.isAuto == false)
		{
			this.stopSpinButton.Disable();
			this.spinButton.Enable();
	
		}
	}

	public OnTurboClicked(action: cc.Toggle): void {
		G1009EventManager.GetInstance().notify("Turbo", action.isChecked);
	}

	public OnAutoClicked(action: cc.Toggle): void {
		if (action.isChecked)
		{
			this.onActiveAuto();
			G1009EventManager.GetInstance().notify("ActiveAuto");
			
		}
		else
		{
			this.onStopAuto();
			G1009EventManager.GetInstance().notify("StopAuto");
			G1009EventManager.GetInstance().notify("StopImmediately");
		}
	}

}
