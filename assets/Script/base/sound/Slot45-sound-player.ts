const {ccclass, property} = cc._decorator;

@ccclass
export default class Slot45SoundPlayerActor extends cc.Component {

    @property(cc.AudioClip)
    protected   audioClips: cc.AudioClip[] = [];

    protected onLoad(): void {
        this.initAudioClip();
    }
    
    protected initAudioClip(): void {
        this.audioClips = this.audioClips.filter(function (element) {
            return element != null;
        });
        for (let index = 0, length = this.audioClips.length; index < length; index++)
        {
            let clip = this.audioClips[index];
            this.audioClips[clip.name] = clip;
        }
    }

    public AddAudio(audioClip): void {
        if (audioClip instanceof cc.AudioClip && this.audioClips[audioClip.name] == null)
        {
            this.audioClips[audioClip.name] = audioClip;
            this.audioClips.push(audioClip);
        }
    }

    public HasAudio(name: string): boolean {
        return this.audioClips[name] != null;
    }
}
