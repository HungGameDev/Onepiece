import G1009SoundPlayerActor from "./aka-g1009-sound-player";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009SFXPlayerActor extends G1009SoundPlayerActor {

    isMute: boolean = false;
    muteVolume: number = 1;
    audioPlayings: any = {};
    tweenFadeOuts: cc.Tween = cc.tween();

    protected start(): void {
        for (let index = 0, length = this.audioClips.length; index < length; index++)
        {
            let clip = this.audioClips[index];
            this.audioPlayings[clip.name] = [];
            this.tweenFadeOuts[clip.name] = cc.tween();
        }
    }
  
    private handleAudioClipLoaded(audioID: number, audioName: string, isLoop: boolean): void {

        let startLoadTime = Date.now();
        this.audioClips[audioName].once("load", function () {
            if (this.audioPlayings[audioName].indexOf(audioID) == -1)
            {
                cc.audioEngine.stopEffect(audioID);
                return;
            }

            let totalLoadTime = (Date.now() - startLoadTime) / 1000;
            if (totalLoadTime > this.GetAudioDuration(audioName) && isLoop == false)
            {
                this.Stop(audioName);
            } else
            {
                let audioCurrentTime = totalLoadTime % this.GetAudioDuration(audioName);
                cc.audioEngine.setCurrentTime(audioID, audioCurrentTime);
            }
        });
    }

    public AddAudio(audioClip: cc.AudioClip): void {
      
        if (audioClip instanceof cc.AudioClip && this.audioClips[audioClip.name] == null)
        {
            this.audioClips[audioClip.name] = audioClip;
            this.audioClips.push(audioClip);
            this.audioPlayings[audioClip.name] = [];
            this.tweenFadeOuts[audioClip.name] = cc.tween();
        }
    }

    public Play(audioName: string, isLoop: boolean): void {
      
        if (this.audioClips[audioName] != null)
        {
            let audioID = cc.audioEngine.playEffect(this.audioClips[audioName], isLoop);
            this.audioPlayings[audioName].push(audioID);

            cc.audioEngine.setFinishCallback(audioID, function (id) {
                return function () {
                    cc.js.array.fastRemove(this.audioPlayings[audioName], id);
                }
            }(audioID).bind(this));

            if (!this.audioClips[audioName].loaded)
            {
                this.handleAudioClipLoaded(audioID, audioName, isLoop);
            }
        }
    }

    public Stop(audioName: string): void {
      
        if (this.audioClips[audioName] != null && this.audioPlayings[audioName].length > 0)
        {
            for (let index = 0; index < this.audioPlayings[audioName].length; index++)
            {
                let audioID = this.audioPlayings[audioName][index];
                cc.audioEngine.stopEffect(audioID);
            }
            this.audioPlayings[audioName] = [];
            this.tweenFadeOuts[audioName].stop()
        }
    }

    public StopWithFadeOut(audioName: string, duration: number) {
       
        if (this.audioClips[audioName] != null && this.audioPlayings[audioName].length > 0)
        {
            let audioIDs = this.audioPlayings[audioName];
            let saveVolume = cc.audioEngine.getVolume(audioIDs[0]);
            let obj = {
                _volume: saveVolume,
                get volume() {
                    return this._volume
                },
                set volume(val) {
                    this._volume = val;
                    audioIDs.forEach(item => cc.audioEngine.setVolume(item, this._volume));
                }
            };

            let tweenFade = this.tweenFadeOuts[audioName];
            tweenFade.stop()
            tweenFade = cc.tween(obj);
            tweenFade.to(duration, {
                volume: 0
            });
            tweenFade.call(() => {
                audioIDs.forEach(item => cc.audioEngine.setVolume(item, saveVolume));
                this.Stop(audioName);
            });
            tweenFade.start();
        }
    }

    public StopAll(): void {
       
        for (let audioName in this.audioPlayings)
        {
            this.Stop(audioName);
        }
    }

    public StopAllNonLoopingSfx(): void {
        for (let audioName in this.audioPlayings)
        {
            if (!this.CheckAudioLoop(audioName))
            {
                this.Stop(audioName);
            }
        }
    }

    public StopAllWithFadeOut(duration: number): void {
 
        for (let audioName in this.audioPlayings)
        {
            this.StopWithFadeOut(audioName, duration);
        }
    }

    public StopAllNonLoopingSfxWithFadeOut(duration: number): void {
    
        for (let audioName in this.audioPlayings)
        {
            if (!this.CheckAudioLoop(audioName))
            {
                this.StopWithFadeOut(audioName, duration);
            }
        }
    }

    public Mute(): void {
       
        if (this.isMute == false)
        {
            this.isMute = true;
            this.muteVolume = cc.audioEngine.getEffectsVolume();
            cc.audioEngine.setEffectsVolume(0);
        }
    }

    public Unmute(): void {
        
        if (this.isMute)
        {
            this.isMute = false;
            cc.audioEngine.setEffectsVolume(this.muteVolume);
        }
    }

    public IsMute(): boolean {
   
        return this.isMute;
    }

    public SetVolume(volume): void {
        
        if (this.isMute)
        {
            this.muteVolume = volume;
        } else
        {
            cc.audioEngine.setEffectsVolume(volume);
        }
    }

    public GetVolume(): number {
      
        if (this.isMute)
        {
            return this.muteVolume;
        } else
        {
            return cc.audioEngine.getEffectsVolume();
        }
    }

    public GetAudioDuration(audioName): any {
        
        if (this.audioClips[audioName] != null)
        {
            return this.audioClips[audioName].duration;
        }
    }

    public CheckAudioLoop(audioName): boolean {
       
        let isAudioLoop = false;
        let audioPlaying = this.audioPlayings[audioName];
        audioPlaying.forEach(function (audioID) {
            if (cc.audioEngine.isLoop(audioID))
            {
                isAudioLoop = true;
            }
        });

        return isAudioLoop;
    }
}
