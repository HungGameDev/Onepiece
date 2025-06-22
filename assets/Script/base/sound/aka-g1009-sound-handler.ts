import G1009SoundConfig from "../../config/sound-config";
import { G1009EventManager } from "../events/aka-g1009-event-manager";
import G1009SoundControllerActor from "../sound/aka-g1009-sound-controller";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009SoundHandlerActor extends cc.Component {
    
    public soundController: G1009SoundControllerActor = null;
    private spinItemCount: number = 0;
    private landingCount: any = {};
    private isFreeSpin: boolean = false;
    private isStopImmediately: boolean = false;
    private isPlayedSoundLandingImmediately: boolean = false;
    private currentBGMMusicPlaying: string = "";
    private tweenVolume: cc.Tween = cc.tween({});
    SoundConfig: G1009SoundConfig = new G1009SoundConfig();

    protected start(): void {
        this.currentBGMMusicPlaying = this.SoundConfig.SoundNameConfig.BGMChooseBet;
        this.onPlayBGM(this.SoundConfig.SoundNameConfig.BGMChooseBet);      
        this.spinItemCount = 0;
        this.landingCount = {};
        this.isFreeSpin = false;
        this.isStopImmediately = false;
        this.isPlayedSoundLandingImmediately = false;
        this.tweenVolume = cc.tween({});
    }
    
    protected onLoad(): void {
        this.soundController = G1009SoundControllerActor.Instance;
        this.register();
    }
    private register(): void {
        G1009EventManager.GetInstance().register("PlaySFX", this.onPlaySFX.bind(this));
        G1009EventManager.GetInstance().register("StopSFX", this.onStopSFX.bind(this));
        G1009EventManager.GetInstance().register("PlayBGM", this.onPlayBGM.bind(this));
        G1009EventManager.GetInstance().register("StopBGM", this.onStopBGM.bind(this));
        G1009EventManager.GetInstance().register("ShowPopupChangeBet", this.onPlayChooseBetBGMusic.bind(this));
        G1009EventManager.GetInstance().register("ChangeBet", this.onPlayMainGameBGMusic.bind(this));
        G1009EventManager.GetInstance().register("FeatureTrigger", this.onFeatureTrigger.bind(this));
	
    }

    private onFeatureTrigger(): void{
       // this.onPlaySFX({ sfxName: "sfx_featurewin", isLoop: false });
    }

    private onPlayChooseBetBGMusic(): void{
        if (this.currentBGMMusicPlaying != this.SoundConfig.SoundNameConfig.BGMChooseBet)
        {          
            this.onPlayBGM(this.SoundConfig.SoundNameConfig.BGMChooseBet);
        }
    }

    private onPlayMainGameBGMusic(): void{
        if (this.currentBGMMusicPlaying != this.SoundConfig.SoundNameConfig.BGMMainGame)
        {          
            this.onPlayBGM(this.SoundConfig.SoundNameConfig.BGMMainGame);
        }
    }
    
    private onPlayBGM(bgmName: string) {
        this.onStopBGM(this.currentBGMMusicPlaying);
        if (this.SoundConfig.SoundVolume.hasOwnProperty(bgmName))
            this.soundController.SetMusicVolume(this.SoundConfig.SoundVolume[bgmName]);
            this.currentBGMMusicPlaying = bgmName;
        this.soundController.PlayMusic(bgmName);
    }

    private onStopBGM(bgmName:string)
    {
        this.soundController.StopMusic(bgmName);
    }

    private onPlaySFX(data: { sfxName: string, isLoop: boolean })
    {
        this.handleEventPlaySfx(data.sfxName, data.isLoop === true);
    }

    private onStopSFX(data: { sfxName: string, fadingTime: number })
    {
        this.handleEventStopSfx(data.sfxName, data.fadingTime);;
    }

    public reduceVolume() {
    
        this.tweenVolume.stop();
        this.tweenVolume = cc.tween({});
        let vol = this.getMusicVolume() - this.SoundConfig.SoundVolumeReduction;
        this.soundController.SetMusicVolume(vol);
    }

    public restoreVolume() {
        
        this.tweenVolume.stop();
        this.tweenVolume = cc.tween({});
        let currValue = this.soundController.GetMusicVolume();
        let desValue = this.getMusicVolume();
        let objectValues = { value: currValue };
        cc.tween(objectValues).to(0.25, { value: desValue }, {
            progress: (start, end, current, ratio) => {
                this.soundController.SetMusicVolume(current);
            }
        }).start();
    }
       
    public getMusicVolume() {
       
        return this.SoundConfig.SoundVolume[  this.currentBGMMusicPlaying]
    }

    public  handleEventPlaySfx(soundName:string, isLoop:boolean) {
       
        this.soundController.PlaySfx(soundName, isLoop === true);
    }

    public  handleEventStopSfx(soundName:string, fadingTime:number) {
            
        if (fadingTime > 0) {
            this.soundController.StopSfxWithFadeOut(soundName, fadingTime);
        } else {
            this.soundController.StopSfx(soundName);
        }
    }

}
