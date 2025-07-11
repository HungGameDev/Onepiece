import Slot45SpineAnimationActor, { Slot45SpineAnimationData, Slot45SpineData } from "./Slot45-spine-animation";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45SpineAnimationHandler {

    animation: Slot45SpineAnimationActor = null;
    target: cc.Node = null;
    skeletonData: sp.SkeletonData = null;
    defaultDuration: number = 0;
    animationData: Slot45SpineAnimationData[] = null;
    spineData: Slot45SpineData = null;

    public constructor(context: Slot45SpineAnimationActor, targetNode: cc.Node) {
        this.animation = context;
        this.target = targetNode;
        this.skeletonData = this.animation.skeletonData;
        this.defaultDuration = this.animation.defaultDuration;
        this.animationData = this.animation.animationData;
        this.spineData = this.animation.spineData;
    }

    public Play(targetNode: cc.Node, events: Function[], callback: Function): void {
        this.animation.trackEntry = this.handleAnimation(this.spineData, targetNode);
        this.handleCallback(callback);
        this.handleSpineEvent(events);
    }

    public Stop(isCallComplete: boolean): void {
        if (!this.animation.spineSkeleton || !this.animation.spineSkeleton.node || !this.animation.trackEntry) { return; }
        this.animation.spineSkeleton.clearTracks();
        this.animation.trackEntry = null;
        this.animation.spineSkeleton.enabled = false;
    }

    public Destroy(): void {
        this.animation = null;
        this.target = null;
        this.skeletonData = null;
        this.defaultDuration = null;
        this.animationData = null;
        this.spineData = null;
    }

    private handleAnimation(spineData: Slot45SpineData, targetNode: cc.Node): any {

        this.animation.spineSkeleton = targetNode.getComponent(sp.Skeleton) || targetNode.addComponent(sp.Skeleton);
        this.animation.spineSkeleton.timeScale = spineData.TimeScale;
        this.animation.spineSkeleton.enabled = true;
        this.animation.spineSkeleton.skeletonData = this.skeletonData;
        return this.animation.spineSkeleton.setAnimation(spineData.TrackIndex || 0, spineData.Name, spineData.IsLoop || false);
    }

    private handleCallback(callback: Function): void {
        this.animation.spineSkeleton.setTrackCompleteListener(this.animation.trackEntry, callback);
    }

    private handleSpineEvent(events: Function[]): void {
        this.animation.spineSkeleton.setEventListener((trackEntry, event) => {
            events ? events[event.data.name]() : (() => { });
        });
    }
}
