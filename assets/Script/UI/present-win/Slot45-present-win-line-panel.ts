import { G1009EventManager } from "../../base/events/Slot45-event-manager";
import G1009WinLineActor from "./Slot45-win-line";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009WinLinePanelActor extends cc.Component {

    lines: G1009WinLineActor[]=[];

    protected onLoad(): void {
        this.register();
        this.lines = this.node.getComponentsInChildren(G1009WinLineActor);
    }
    private register()
    {
        G1009EventManager.GetInstance().register("ShowLine", this.OnShowLine.bind(this));
        G1009EventManager.GetInstance().register("ResetAllLine", this.hideAllLine.bind(this));
    }

    private OnShowLine(line: number[]) {
        this.hideAllLine();
		G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_show_line', isLoop: false });
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
