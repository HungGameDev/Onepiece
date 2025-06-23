const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45SpriteProviderActor extends cc.Component {

    @property(cc.SpriteFrame)
    spriteFrames: cc.SpriteFrame[] = [];

     public onLoad(): void {
         Slot45SpriteProviderManagerActor.Instance().SetFrame(this.spriteFrames);
    }
  
}

export class Slot45SpriteProviderManagerActor{

    private static instance: Slot45SpriteProviderManagerActor;
    dictSpriteFrame: cc.SpriteFrame[] = [];

    public static Instance() {
        if (!Slot45SpriteProviderManagerActor.instance)
            Slot45SpriteProviderManagerActor.instance = new Slot45SpriteProviderManagerActor();
        return Slot45SpriteProviderManagerActor.instance;
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
