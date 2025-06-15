const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009AnimationProviderActor extends cc.Component {

    @property(sp.SkeletonData)
    listAnimation: sp.SkeletonData[] = [];

    protected onLoad(): void {
        G1009AnimationProviderManager.Instance().SetAniamtion(this.listAnimation);
    }

}

export class G1009AnimationProviderManager{
    private static instance: G1009AnimationProviderManager;
    dictSpriteFrame: cc.SpriteFrame[] = [];

    public static Instance() {
        if (!G1009AnimationProviderManager.instance)
        G1009AnimationProviderManager.instance = new G1009AnimationProviderManager();
        return G1009AnimationProviderManager.instance;
    }

    public SetAniamtion(_animationDatas: sp.SkeletonData[]) {
        _animationDatas.forEach(anim => { 
            this.dictSpriteFrame[this.getKey(anim.name)] = anim;
        });    
    }

    public GetAnimation(key: string)
    {
        if (key == null) {
            cc.warn('Get sprite frame with invalid key:', key);
            return null;
        }
        return  this.dictSpriteFrame[this.getKey(key)];
    }


    private getKey(name: string)
    {
        return name.toLowerCase().replace(new RegExp('-', 'g'), '');
    }
}
