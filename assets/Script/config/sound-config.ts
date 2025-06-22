const SoundNameConfig = {
    BGMMainGame: 'bgm_normal_game',
    BGMChooseBet: 'bgm_chose_bet',
    BGMFreeGame: 'bgm_freegame',
    BGMBonusGame: 'bgm_bonusgame',
    BGMBigWin: 'bgm_bigwin',
    BGMJackPot: 'bgm_jackpot',
    BGMTotalWin: 'bgm_sumwin',
    SFXUIClick: 'sfx_uiclick',
    SFXUIClose: 'sfx_uiclose',
    SFXSpinActive: 'sfx_spinactive',
    SFXReelspin: 'sfx_reelspin',
    SFXReelstop: 'sfx_reelstop',
    SFXSymbolwin: 'sfx_symbolwin',
    SFXSpecialland1: 'sfx_specialland1',
    SFXSpecialland2: 'sfx_specialland2',
    SFXSpecialland3: 'sfx_specialland3',
    SFXBigwinstop: 'sfx_bigwinstop',
    SFXWildstop: 'sfx_wildstop',
    SFXNearwin: 'sfx_nearwin',
    SFXSpacewarp: 'sfx_spacewarp',
    SFXBonuspick: 'sfx_bonuspick',
    SFXBonuswin: 'sfx_bonuswin',
    SFXFeaturewin: 'sfx_featurewin',
    SFXWildexpand: 'voice_wildexpand',
    SFXMultiplier: 'sfx_multiplier',
    SFXSmallMultiplier: 'sfx_smallMultiplier',
    SFXBonustransition: 'sfx_bonustransition',

    
}
const SoundVolume = {};
SoundVolume[SoundNameConfig.BGMMainGame] = 1;
SoundVolume[SoundNameConfig.BGMChooseBet] = 1;
SoundVolume[SoundNameConfig.BGMFreeGame] = 0.7;
SoundVolume[SoundNameConfig.BGMBonusGame] = 1;

export default class G1009SoundConfig {
     SoundNameConfig: any = SoundNameConfig;
     SoundVolume: any = SoundVolume;
     SoundVolumeReduction:any = 0.3;
}