
const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45AnimationActor extends cc.Component {

    public Play(target: cc.Node, events: Function[], callback: Function) {
        if (events != null && events.length > 0) {
            for (let index = 0; index < events.length; index++) {
                let event = events[index];
                event();
            }
        }
        if (typeof callback == 'function') {
            callback();
        }
    }

    public Stop(isCallComplete: boolean): void {        
    }

    public Clone(): Animation {
        return new Animation();
    }

    public GetDuration(): number {
        return 0;
    }

    public GetIsPlaying(): boolean {
        return false;
    }
}
