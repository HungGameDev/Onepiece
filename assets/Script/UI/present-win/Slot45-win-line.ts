const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45WinLineActor extends cc.Component {

    @property
    lineIndex: number = -1;
    @property(sp.Skeleton)
	private spineShowLine: sp.Skeleton = null;
    
    image: cc.Sprite = null;

    protected onLoad(): void {
        this.image = this.node.getComponent(cc.Sprite);
    }

    public Show(): void{
        this.node.active = true;
        let track = this.spineShowLine.setAnimation(0, this.lineIndex.toString(), true);
    }

    public Hide(): void{
        this.node.active = false;
    }
}
