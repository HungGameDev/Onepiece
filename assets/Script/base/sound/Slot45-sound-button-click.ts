import { G1009EventManager } from "../events/Slot45-event-manager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009SoundButtonClick extends cc.Component {

    @property
    SFXName: string = 'sfx_uiclick';

    @property
    IsLoop: boolean = false;
    protected onLoad(): void {
	
		this.node.on("click", this.onButtonClick.bind(this));
    }
    
    private onButtonClick():void
    {
        G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: this.SFXName, isLoop: this.IsLoop });
    }
}
