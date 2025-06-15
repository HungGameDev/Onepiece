const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009WinLineActor extends cc.Component {

    @property
    lineIndex: number = -1;
    
    image: cc.Sprite = null;

    protected onLoad(): void {
        this.image = this.node.getComponent(cc.Sprite);
    }

    public Show(): void{
        this.node.active = true;
    }

    public Hide(): void{
        this.node.active = false;
    }
}
