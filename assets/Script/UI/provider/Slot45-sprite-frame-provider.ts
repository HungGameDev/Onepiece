const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009SpriteProviderActor extends cc.Component {

    @property(cc.SpriteFrame)
    spriteFrames: cc.SpriteFrame[] = [];

     public onLoad(): void {
         G1009SpriteProviderManagerActor.Instance().SetFrame(this.spriteFrames);
    }
  
}

export class G1009SpriteProviderManagerActor{

    private static instance: G1009SpriteProviderManagerActor;
    dictSpriteFrame: cc.SpriteFrame[] = [];

    public static Instance() {
        if (!G1009SpriteProviderManagerActor.instance)
            G1009SpriteProviderManagerActor.instance = new G1009SpriteProviderManagerActor();
        return G1009SpriteProviderManagerActor.instance;
    }

    public SetFrame(_spriteFrames: cc.SpriteFrame[]) {
        _spriteFrames.forEach(frame => { 
            this.dictSpriteFrame[this.getKey(frame.name)] = frame;
        });    
    }

    public GetFrame(key: string)
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
