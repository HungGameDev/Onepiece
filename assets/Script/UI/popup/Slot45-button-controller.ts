import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import Slot45ButtonActor from "./Slot45-button";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45ButtonControllerActor extends cc.Component {

	@property(Slot45ButtonActor)
	spinButton: Slot45ButtonActor = null;

	@property(Slot45ButtonActor)
	stopSpinButton: Slot45ButtonActor = null;

	@property(cc.Toggle)
	turboButton: cc.Toggle = null;

	freespinLeft: number = 0;

	isToggleMoving: boolean = false;
	private isAuto: boolean = false;
	
	protected start(): void {
		this.register();
	}

	private register(): void {	
		Slot45EventManager.GetInstance().register("StopAuto", this.onStopAuto.bind(this));
		Slot45EventManager.GetInstance().register("Spin", this.OnSpinClicked.bind(this));
		Slot45EventManager.GetInstance().register("StopImmediately", this.OnStopSpinClicked.bind(this));
		Slot45EventManager.GetInstance().register("ShowBetPanel", this.OnResetSpin.bind(this));
		Slot45EventManager.GetInstance().register("SpinStarted", this.activeStopButton.bind(this));
		Slot45EventManager.GetInstance().register("NextScrollData", this.onNextScrollData.bind(this));
		Slot45EventManager.GetInstance().register("FeatureTrigger", this.checkToActiveSpinLeft.bind(this));
		Slot45EventManager.GetInstance().register("resume", this.onResume.bind(this));
		Slot45EventManager.GetInstance().register("BigWinPresentationStarted", this.onBigWinStarted.bind(this));
		Slot45EventManager.GetInstance().register("JackpotPresentationStarted", this.onBigWinStarted.bind(this));
		Slot45EventManager.GetInstance().register("SpinComplete",this.onSpinComplete.bind(this));

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
		Slot45EventManager.GetInstance().notify("Turbo", action.isChecked);
	}

	public OnAutoClicked(action: cc.Toggle): void {
		if (action.isChecked)
		{
			this.onActiveAuto();
			Slot45EventManager.GetInstance().notify("ActiveAuto");
			
		}
		else
		{
			this.onStopAuto();
			Slot45EventManager.GetInstance().notify("StopAuto");
			Slot45EventManager.GetInstance().notify("StopImmediately");
		}
	}

}
