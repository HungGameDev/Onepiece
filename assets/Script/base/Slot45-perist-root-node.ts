
const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45PeristRootNode extends cc.Component {

    protected onLoad(): void {
        cc.game.addPersistRootNode(this.node);
    }

}
