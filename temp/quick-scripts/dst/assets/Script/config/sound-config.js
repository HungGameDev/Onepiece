
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/config/sound-config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb436ylYvBM/rSCqpK+jWug', 'sound-config');
// Script/config/sound-config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SoundNameConfig = {
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
};
var SoundVolume = {};
SoundVolume[SoundNameConfig.BGMMainGame] = 1;
SoundVolume[SoundNameConfig.BGMChooseBet] = 1;
SoundVolume[SoundNameConfig.BGMFreeGame] = 0.7;
SoundVolume[SoundNameConfig.BGMBonusGame] = 1;
var G1009SoundConfig = /** @class */ (function () {
    function G1009SoundConfig() {
        this.SoundNameConfig = SoundNameConfig;
        this.SoundVolume = SoundVolume;
        this.SoundVolumeReduction = 0.3;
    }
    return G1009SoundConfig;
}());
exports.default = G1009SoundConfig;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb25maWdcXHNvdW5kLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sZUFBZSxHQUFHO0lBQ3BCLFdBQVcsRUFBRSxpQkFBaUI7SUFDOUIsWUFBWSxFQUFFLGVBQWU7SUFDN0IsV0FBVyxFQUFFLGNBQWM7SUFDM0IsWUFBWSxFQUFFLGVBQWU7SUFDN0IsU0FBUyxFQUFFLFlBQVk7SUFDdkIsVUFBVSxFQUFFLGFBQWE7SUFDekIsV0FBVyxFQUFFLFlBQVk7SUFDekIsVUFBVSxFQUFFLGFBQWE7SUFDekIsVUFBVSxFQUFFLGFBQWE7SUFDekIsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixXQUFXLEVBQUUsY0FBYztJQUMzQixXQUFXLEVBQUUsY0FBYztJQUMzQixZQUFZLEVBQUUsZUFBZTtJQUM3QixlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLFlBQVksRUFBRSxlQUFlO0lBQzdCLFlBQVksRUFBRSxlQUFlO0lBQzdCLFdBQVcsRUFBRSxjQUFjO0lBQzNCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsYUFBYSxFQUFFLGtCQUFrQjtJQUNqQyxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGtCQUFrQixFQUFFLHFCQUFxQjtJQUN6QyxrQkFBa0IsRUFBRSxxQkFBcUI7Q0FHNUMsQ0FBQTtBQUNELElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN2QixXQUFXLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxXQUFXLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QyxXQUFXLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMvQyxXQUFXLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUU5QztJQUFBO1FBQ0ssb0JBQWUsR0FBUSxlQUFlLENBQUM7UUFDdkMsZ0JBQVcsR0FBUSxXQUFXLENBQUM7UUFDL0IseUJBQW9CLEdBQU8sR0FBRyxDQUFDO0lBQ3BDLENBQUM7SUFBRCx1QkFBQztBQUFELENBSkEsQUFJQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU291bmROYW1lQ29uZmlnID0ge1xyXG4gICAgQkdNTWFpbkdhbWU6ICdiZ21fbm9ybWFsX2dhbWUnLFxyXG4gICAgQkdNQ2hvb3NlQmV0OiAnYmdtX2Nob3NlX2JldCcsXHJcbiAgICBCR01GcmVlR2FtZTogJ2JnbV9mcmVlZ2FtZScsXHJcbiAgICBCR01Cb251c0dhbWU6ICdiZ21fYm9udXNnYW1lJyxcclxuICAgIEJHTUJpZ1dpbjogJ2JnbV9iaWd3aW4nLFxyXG4gICAgQkdNSmFja1BvdDogJ2JnbV9qYWNrcG90JyxcclxuICAgIEJHTVRvdGFsV2luOiAnYmdtX3N1bXdpbicsXHJcbiAgICBTRlhVSUNsaWNrOiAnc2Z4X3VpY2xpY2snLFxyXG4gICAgU0ZYVUlDbG9zZTogJ3NmeF91aWNsb3NlJyxcclxuICAgIFNGWFNwaW5BY3RpdmU6ICdzZnhfc3BpbmFjdGl2ZScsXHJcbiAgICBTRlhSZWVsc3BpbjogJ3NmeF9yZWVsc3BpbicsXHJcbiAgICBTRlhSZWVsc3RvcDogJ3NmeF9yZWVsc3RvcCcsXHJcbiAgICBTRlhTeW1ib2x3aW46ICdzZnhfc3ltYm9sd2luJyxcclxuICAgIFNGWFNwZWNpYWxsYW5kMTogJ3NmeF9zcGVjaWFsbGFuZDEnLFxyXG4gICAgU0ZYU3BlY2lhbGxhbmQyOiAnc2Z4X3NwZWNpYWxsYW5kMicsXHJcbiAgICBTRlhTcGVjaWFsbGFuZDM6ICdzZnhfc3BlY2lhbGxhbmQzJyxcclxuICAgIFNGWEJpZ3dpbnN0b3A6ICdzZnhfYmlnd2luc3RvcCcsXHJcbiAgICBTRlhXaWxkc3RvcDogJ3NmeF93aWxkc3RvcCcsXHJcbiAgICBTRlhOZWFyd2luOiAnc2Z4X25lYXJ3aW4nLFxyXG4gICAgU0ZYU3BhY2V3YXJwOiAnc2Z4X3NwYWNld2FycCcsXHJcbiAgICBTRlhCb251c3BpY2s6ICdzZnhfYm9udXNwaWNrJyxcclxuICAgIFNGWEJvbnVzd2luOiAnc2Z4X2JvbnVzd2luJyxcclxuICAgIFNGWEZlYXR1cmV3aW46ICdzZnhfZmVhdHVyZXdpbicsXHJcbiAgICBTRlhXaWxkZXhwYW5kOiAndm9pY2Vfd2lsZGV4cGFuZCcsXHJcbiAgICBTRlhNdWx0aXBsaWVyOiAnc2Z4X211bHRpcGxpZXInLFxyXG4gICAgU0ZYU21hbGxNdWx0aXBsaWVyOiAnc2Z4X3NtYWxsTXVsdGlwbGllcicsXHJcbiAgICBTRlhCb251c3RyYW5zaXRpb246ICdzZnhfYm9udXN0cmFuc2l0aW9uJyxcclxuXHJcbiAgICBcclxufVxyXG5jb25zdCBTb3VuZFZvbHVtZSA9IHt9O1xyXG5Tb3VuZFZvbHVtZVtTb3VuZE5hbWVDb25maWcuQkdNTWFpbkdhbWVdID0gMTtcclxuU291bmRWb2x1bWVbU291bmROYW1lQ29uZmlnLkJHTUNob29zZUJldF0gPSAxO1xyXG5Tb3VuZFZvbHVtZVtTb3VuZE5hbWVDb25maWcuQkdNRnJlZUdhbWVdID0gMC43O1xyXG5Tb3VuZFZvbHVtZVtTb3VuZE5hbWVDb25maWcuQkdNQm9udXNHYW1lXSA9IDE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOVNvdW5kQ29uZmlnIHtcclxuICAgICBTb3VuZE5hbWVDb25maWc6IGFueSA9IFNvdW5kTmFtZUNvbmZpZztcclxuICAgICBTb3VuZFZvbHVtZTogYW55ID0gU291bmRWb2x1bWU7XHJcbiAgICAgU291bmRWb2x1bWVSZWR1Y3Rpb246YW55ID0gMC4zO1xyXG59Il19