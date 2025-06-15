import { G1009AnimationProviderManager } from "../../base/animation/aka-g1009-animation-provider";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ExplodingCell extends cc.Component {

    @property(sp.Skeleton)
    spineSkeleton: sp.Skeleton = null;

    private animEffectExplosion = null;
    private nameSkinFormat: string = 'symbol_%s';


    onLoad() {
        this.animEffectExplosion = G1009AnimationProviderManager.Instance().GetAnimation('eff_explosion');
    }

    public PlayEffectExplodeCells(nameSymbol: string) {
        var nameSkin = cc.js.formatStr(this.nameSkinFormat, nameSymbol);
        this.spineSkeleton.node.active = true;
        this.spineSkeleton.skeletonData = this.animEffectExplosion;
        this.spineSkeleton.setSkin(nameSkin);
        this.spineSkeleton.setEndListener(
            function () {
                this.spineSkeleton.node.active = false;
                this.spineSkeleton.clearTrack(0);
            }.bind(this));
        this.spineSkeleton.setAnimation(0, "animation", false);
    }
}
