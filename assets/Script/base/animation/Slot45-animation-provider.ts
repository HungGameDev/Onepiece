const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45AnimationProviderActor extends cc.Component {

    @property(sp.SkeletonData)
    listAnimation: sp.SkeletonData[] = [];

    protected onLoad(): void {
        Slot45AnimationProviderManager.Instance().SetAniamtion(this.listAnimation);
    }

}

export class Slot45AnimationProviderManager{
    private static instance: Slot45AnimationProviderManager;
    dictSpriteFrame: cc.SpriteFrame[] = [];

    public static Instance() {
        if (!Slot45AnimationProviderManager.instance)
        Slot45AnimationProviderManager.instance = new Slot45AnimationProviderManager();
        return Slot45AnimationProviderManager.instance;
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
