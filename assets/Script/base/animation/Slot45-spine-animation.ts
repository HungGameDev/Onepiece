import Slot45AnimationActor from "./Slot45-animation";
import Slot45SpineAnimationHandler from "./Slot45-spine-animation-handler";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45SpineAnimationActor extends Slot45AnimationActor {

    @property
    skeletonData: sp.SkeletonData = new sp.SkeletonData;


    @property
    defaultDuration: number = 1;

    @property
    animationData: Slot45SpineAnimationData[] = [];
 
    isLoadCompleted: boolean = false;
    spineSkeleton = null;
    animationHandler= null;
    trackEntry = null;
    spineData:Slot45SpineData = null;
    
    public constructor()
    {
        super();
        this.isLoadCompleted= false;
        this.spineSkeleton = null;
        this.animationHandler= null;
        this.trackEntry = null;
        this.spineData = null;
    }
    public Play(target: cc.Node, events: Function[], callback: Function): void {
        this.animationHandler = new Slot45SpineAnimationHandler(this, target);
        this.animationHandler.Play(target, events, callback);
    }

    public Stop(isCallComplete: boolean): void {
        if (this.animationHandler) {
            this.animationHandler.Stop(isCallComplete);
            this.animationHandler.Destroy();
            this.animationHandler = null;
        }
        this.reset();
    }

    public Clone(): any {
        let animation = new Slot45SpineAnimationActor;
        animation.skeletonData = this.skeletonData;
        animation.defaultDuration = this.defaultDuration;
        animation.animationData = this.animationData;    
        return animation;
    }

    public GetDuration(): number {
        let duration = this.defaultDuration;
        if (this.trackEntry) {
            duration = this.trackEntry.animationEnd;
        }
        return duration;
    }

    public GetIsPlaying(): any{
        return this.trackEntry && ( this.trackEntry.trackTime <= this.trackEntry.animationEnd);
     }

    private reset(): void {
        this.isLoadCompleted = null;
        this.spineSkeleton = null;
        this.trackEntry = null;
    }
}


export  class Slot45SpineAnimationData {
    public AnimationName: string;
    public constructor(){};
}


export class Slot45SpineData {

    public Name: string ;
    public IsLoop: boolean = false;
    public TrackIndex: number = 0;
    public TimeScale: number = 0;
    public IsCallComplete: boolean = false;
    public Events: Slot45SpineEventData[] = [];
    public StaticSpriteFrame: cc.SpriteFrame = null;
    public constructor() {
        
        this.Name = "animation";
        this.IsLoop = false;
        this.TrackIndex = 0;
        this.TimeScale = 0;
        this.IsCallComplete = false;
        this.Events = [];
        this.StaticSpriteFrame =new cc.SpriteFrame;
    };
}


export class Slot45SpineEventData {
    public Name: string = '';
    public Time: number = 0;
    public constructor(){};
}