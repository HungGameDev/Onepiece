import { Slot45EventManager } from "../../base/events/Slot45-event-manager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45ButtonSpin extends cc.Component {

    @property
    EventName: string = "Event-name";

    private  button: cc.Button = null;

    protected onLoad(): void {
        this.button = this.node.getComponent(cc.Button);
        this.node.on("click", this.onButtonClick.bind(this));
    }

    
    protected onButtonClick(): void {
        Slot45EventManager.GetInstance().notify(this.EventName); 
    }

    public Disable(): void {
        this.node.active = false;	
	}

	public Enable(): void {
		this.node.active = true;	
    }
    
    public Interactable(isInteractable: boolean) {
		if (!!this.button)
			this.button = this.node.getComponent(cc.Button);
		this.button.interactable = isInteractable;
	}
}
