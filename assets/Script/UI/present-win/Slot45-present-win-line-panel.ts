import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import Slot45WinLineActor from "./Slot45-win-line";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45WinLinePanelActor extends cc.Component {

    lines: Slot45WinLineActor[]=[];

    protected onLoad(): void {
        this.register();
        this.lines = this.node.getComponentsInChildren(Slot45WinLineActor);
    }
    private register()
    {
        Slot45EventManager.GetInstance().register("ShowLine", this.OnShowLine.bind(this));
        Slot45EventManager.GetInstance().register("ResetAllLine", this.hideAllLine.bind(this));
    }

    private OnShowLine(line: number[]) {
        this.hideAllLine();
		Slot45EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_show_line', isLoop: false });
        for (let index = 0; index < line.length; index++)
        {
            if (line[index] >= 0 && line[index] < this.lines.length)
                this.lines[line[index]].Show()
        }
        
    }

    private hideAllLine()
    {
        this.lines.forEach(line => line.Hide());
    }
}
