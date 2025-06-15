import G1009SoundPlayerActor from "./aka-g1009-sound-player";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009MusicPlayerActor extends G1009SoundPlayerActor {

    isMute: boolean = false;
    muteVolume: number = 1;
    audioPlayingName: string = "";
    audioPlayingID: number = -1;
    tweenFadeOut: cc.Tween = cc.tween();
   
    private handleAudioClipLoaded(audioID: number, audioName: string, isLoop: boolean) {
        
        let startLoadTime = Date.now();
        this.audioClips[audioName].once("load", function () {
            if (this.audioPlayingName != audioName)
            {
                cc.audioEngine.stopEffect(audioID);
                return;
            }

            let totalLoadTime = (Date.now() - startLoadTime) / 1000;
            if (totalLoadTime > this.GetAudioDuration(audioName) && isLoop == false)
            {
                this.Stop(audioName);
            }
            else
            {
                let audioCurrentTime = totalLoadTime % this.GetAudioDuration(audioName);
                cc.audioEngine.setCurrentTime(audioID, audioCurrentTime);
            }
        });
    }
    
    public Play(audioName: string, isLoop: boolean) {
       
        if (this.audioClips[audioName] != null)
        {
            let audioID = cc.audioEngine.playMusic(this.audioClips[audioName], isLoop);
            this.audioPlayingName = audioName;
            this.audioPlayingID = audioID;

            if (!this.audioClips[audioName].loaded)
            {
                this.handleAudioClipLoaded(audioID, audioName, isLoop);
            }
        }
    }

    public Stop(audioName: string) {

        audioName = audioName || this.audioPlayingName;
        if (audioName != this.audioPlayingName)
        {
            return;
        }
        this.tweenFadeOut.stop();
        cc.audioEngine.stopMusic();
        this.audioPlayingName = "";
    }
    public StopWithFadeOut(audioName: string, duration: number) {
   
        if (arguments[1] == null)
        {
            duration = arguments[0];
            audioName = this.audioPlayingName;
        }
        else if (audioName !== this.audioPlayingName)
        {
            return;
        }

        let saveVolume = cc.audioEngine.getVolume(this.audioPlayingID);
        let obj = {
            _volume: saveVolume,
            get volume() {
                return this._volume
            },
            set volume(val) {
                this._volume = val;
                cc.audioEngine.setVolume(this.audioPlayingID, this._volume);
            }
        };
        this.tweenFadeOut.stop()
        this.tweenFadeOut = cc.tween(obj);
        this.tweenFadeOut.to(duration, { volume: 0 });
        this.tweenFadeOut.call(() => {
            cc.audioEngine.setVolume(this.audioPlayingID, saveVolume);
            this.Stop(audioName);
        });
        this.tweenFadeOut.start();
    }

    public Mute() {
    
        if (this.isMute == false)
        {
            this.isMute = true;
            this.muteVolume = cc.audioEngine.getMusicVolume();
            cc.audioEngine.setMusicVolume(0);
        }
    }

    public Unmute() {
    
        if (this.isMute)
        {
            this.isMute = false;
            cc.audioEngine.setMusicVolume(this.muteVolume);
        }
    }

    public IsMute() {
     
        return this.isMute;
    }

    public SetVolume(volume: number) {
      
        if (this.isMute)
        {
            this.muteVolume = volume;
        }
        else
        {
            cc.audioEngine.setMusicVolume(volume);
        }
    }

    public GetVolume() {
   
        if (this.isMute)
        {
            return this.muteVolume;
        }
        else
        {
            return cc.audioEngine.getMusicVolume();
        }
    }

    public GetAudioDuration(audioName: string) {
     
        if (this.audioClips[audioName] != null)
        {
            return this.audioClips[audioName]._audio ? this.audioClips[audioName]._audio.duration : 0;
        }
    }

    public GetAudioPlaying() {
      
        return this.audioPlayingName;
    }
}
