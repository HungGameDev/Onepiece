
const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009PeristRootNode extends cc.Component {

    protected onLoad(): void {
        cc.game.addPersistRootNode(this.node);
    }

}
