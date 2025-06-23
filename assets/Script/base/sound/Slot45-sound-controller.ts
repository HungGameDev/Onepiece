import { G1009EventManager } from "../events/Slot45-event-manager";
import G1009SFXPlayerActor from "./Slot45-sfs-player";
import G1009MusicPlayerActor from "./Slot45-music-player";

const {ccclass, property} = cc._decorator;

@ccclass
export default class G1009SoundControllerActor extends cc.Component {

    public static Instance: G1009SoundControllerActor;
    private localStorage: any = null;

    @property(G1009MusicPlayerActor)
    musicPlayer: G1009MusicPlayerActor = null;

    @property(G1009SFXPlayerActor)
    sfxPlayer: G1009SFXPlayerActor = null;

    isMuteSfx: boolean = false;
    isMuteMusic: boolean = false;
    isMuteAll: boolean = false;
    private constructor() {
        super();
        G1009SoundControllerActor.Instance = this; 
    }
    
    protected onLoad(): void {
        cc.game.addPersistRootNode(this.node);
        G1009EventManager.GetInstance().register("Music-on", this.UnmuteMusic.bind(this));
        G1009EventManager.GetInstance().register("Music-off", this.MuteMusic.bind(this));
        G1009EventManager.GetInstance().register("Sound-on", this.UnmuteSfx.bind(this));
        G1009EventManager.GetInstance().register("Sound-off", this.MuteSfx.bind(this));
        
        cc.sys.localStorage.getItem('enableSFXKey') == "false" ? this.MuteSfx() : this.UnmuteSfx();
        cc.sys.localStorage.getItem('enableBGMKey') == "false" ? this.MuteMusic() : this.UnmuteMusic();
    }

    public MuteSfx(): void {
        this.isMuteSfx = true;
        this.sfxPlayer.Mute();
        cc.sys.localStorage.setItem('enableSFXKey', "false");
    }

    public UnmuteSfx(): void {
        this.isMuteSfx = false;
        this.sfxPlayer.Unmute();
        cc.sys.localStorage.setItem('enableSFXKey',"true");
    }

    public MuteMusic(): void {
        this.isMuteMusic = true;
        this.musicPlayer.Mute();
        cc.sys.localStorage.setItem('enableBGMKey', "false");
    }

    public UnmuteMusic(): void {
        this.isMuteMusic = false;
        this.musicPlayer.Unmute();
        cc.sys.localStorage.setItem('enableBGMKey', "true");
    }

    public AddSfx(name: any) {
        this.sfxPlayer.AddAudio(name);
    }

    public AddMusic(name) {
        this.musicPlayer.AddAudio(name);
    }

    public PlaySfx(name: string, isLoop: boolean): void {
       
        this.sfxPlayer.Play(name, isLoop);
    }

    public StopSfx(name: string): void {
       
        this.sfxPlayer.Stop(name);
    }

    public StopSfxWithFadeOut(name: string, duration: number): void {
    
        this.sfxPlayer.StopWithFadeOut(name, duration);
    }

    public StopAllSfx(): void {
        this.sfxPlayer.StopAll();
    }

    public StopAllNonLoopingSfx(): void {
       

        this.sfxPlayer.StopAllNonLoopingSfx();
    }

    public StopAllSfxWithFadeOut(duration: number): void {
        this.sfxPlayer.StopAllWithFadeOut(duration);
    }

    public StopAllNonLoopingSfxWithFadeOut(duration: number): void {
     

        this.sfxPlayer.StopAllNonLoopingSfxWithFadeOut(duration);
    }

    public HasSfx(name: string): boolean {
       
        return this.sfxPlayer.HasAudio(name);
    }

    public PlayMusic(name: string): void {
       
        this.musicPlayer.Play(name, true);
    }

    public StopMusic(name: string): void {
    
        this.musicPlayer.Stop(name);
    }

    public StopMusicWithFadeOut(name: string, duration: number): void {
    
        this.musicPlayer.StopWithFadeOut(name, duration);
    }

    public HasMusic(name: string): boolean {
        
        return this.musicPlayer.HasAudio(name);
    }

    public ToggleMuteMusic(): void {
        
        if (this.isMuteMusic)
        {
            this.UnmuteMusic();
        }
        else
        {
            this.MuteMusic();
        }
    }

    public IsMuteMusic(): boolean {
      
        return this.isMuteMusic;
    }

    public ToggleMuteSfx(): void {
      
        if (this.isMuteSfx)
        {
            this.UnmuteSfx();
        }
        else
        {
            this.MuteSfx();
        }
    }
   
    public IsMuteSfx(): boolean {
     
        return this.isMuteSfx;
    }

    public IsMuteSound(): boolean {
       
        return this.isMuteAll;
    }

    public SetMusicVolume(volume: number): void {
      
        this.musicPlayer.SetVolume(volume);
    }

    public GetMusicVolume(): Number {
    
        return this.musicPlayer.GetVolume();
    }

    public SetSfxVolume(volume: number): void {
      
        this.sfxPlayer.SetVolume(volume);
    }

    public GetSfxVolume(): number {
    
        return this.sfxPlayer.GetVolume();
    }

    public GetMusicDuration(name: string): number {

        return this.musicPlayer.GetAudioDuration(name);
    }

    public GetSfxDuration(name: string): number {
      
        return this.sfxPlayer.GetAudioDuration(name);
    }

    public GetCurrentMusic(): any {   
        return this.musicPlayer.GetAudioPlaying();
    }
}
