
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
    BGMMainGame: 'bgm_normalgame',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvY29uZmlnL3NvdW5kLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sZUFBZSxHQUFHO0lBQ3BCLFdBQVcsRUFBRSxnQkFBZ0I7SUFDN0IsV0FBVyxFQUFFLGNBQWM7SUFDM0IsWUFBWSxFQUFFLGVBQWU7SUFDN0IsU0FBUyxFQUFFLFlBQVk7SUFDdkIsVUFBVSxFQUFFLGFBQWE7SUFDekIsV0FBVyxFQUFFLFlBQVk7SUFDekIsVUFBVSxFQUFFLGFBQWE7SUFDekIsVUFBVSxFQUFFLGFBQWE7SUFDekIsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixXQUFXLEVBQUUsY0FBYztJQUMzQixXQUFXLEVBQUUsY0FBYztJQUMzQixZQUFZLEVBQUUsZUFBZTtJQUM3QixlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLFlBQVksRUFBRSxlQUFlO0lBQzdCLFlBQVksRUFBRSxlQUFlO0lBQzdCLFdBQVcsRUFBRSxjQUFjO0lBQzNCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsYUFBYSxFQUFFLGtCQUFrQjtJQUNqQyxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGtCQUFrQixFQUFFLHFCQUFxQjtJQUN6QyxrQkFBa0IsRUFBRSxxQkFBcUI7Q0FHNUMsQ0FBQTtBQUNELElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN2QixXQUFXLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxXQUFXLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMvQyxXQUFXLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUU5QztJQUFBO1FBQ0ssb0JBQWUsR0FBUSxlQUFlLENBQUM7UUFDdkMsZ0JBQVcsR0FBUSxXQUFXLENBQUM7UUFDL0IseUJBQW9CLEdBQU8sR0FBRyxDQUFDO0lBQ3BDLENBQUM7SUFBRCx1QkFBQztBQUFELENBSkEsQUFJQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU291bmROYW1lQ29uZmlnID0ge1xuICAgIEJHTU1haW5HYW1lOiAnYmdtX25vcm1hbGdhbWUnLFxuICAgIEJHTUZyZWVHYW1lOiAnYmdtX2ZyZWVnYW1lJyxcbiAgICBCR01Cb251c0dhbWU6ICdiZ21fYm9udXNnYW1lJyxcbiAgICBCR01CaWdXaW46ICdiZ21fYmlnd2luJyxcbiAgICBCR01KYWNrUG90OiAnYmdtX2phY2twb3QnLFxuICAgIEJHTVRvdGFsV2luOiAnYmdtX3N1bXdpbicsXG4gICAgU0ZYVUlDbGljazogJ3NmeF91aWNsaWNrJyxcbiAgICBTRlhVSUNsb3NlOiAnc2Z4X3VpY2xvc2UnLFxuICAgIFNGWFNwaW5BY3RpdmU6ICdzZnhfc3BpbmFjdGl2ZScsXG4gICAgU0ZYUmVlbHNwaW46ICdzZnhfcmVlbHNwaW4nLFxuICAgIFNGWFJlZWxzdG9wOiAnc2Z4X3JlZWxzdG9wJyxcbiAgICBTRlhTeW1ib2x3aW46ICdzZnhfc3ltYm9sd2luJyxcbiAgICBTRlhTcGVjaWFsbGFuZDE6ICdzZnhfc3BlY2lhbGxhbmQxJyxcbiAgICBTRlhTcGVjaWFsbGFuZDI6ICdzZnhfc3BlY2lhbGxhbmQyJyxcbiAgICBTRlhTcGVjaWFsbGFuZDM6ICdzZnhfc3BlY2lhbGxhbmQzJyxcbiAgICBTRlhCaWd3aW5zdG9wOiAnc2Z4X2JpZ3dpbnN0b3AnLFxuICAgIFNGWFdpbGRzdG9wOiAnc2Z4X3dpbGRzdG9wJyxcbiAgICBTRlhOZWFyd2luOiAnc2Z4X25lYXJ3aW4nLFxuICAgIFNGWFNwYWNld2FycDogJ3NmeF9zcGFjZXdhcnAnLFxuICAgIFNGWEJvbnVzcGljazogJ3NmeF9ib251c3BpY2snLFxuICAgIFNGWEJvbnVzd2luOiAnc2Z4X2JvbnVzd2luJyxcbiAgICBTRlhGZWF0dXJld2luOiAnc2Z4X2ZlYXR1cmV3aW4nLFxuICAgIFNGWFdpbGRleHBhbmQ6ICd2b2ljZV93aWxkZXhwYW5kJyxcbiAgICBTRlhNdWx0aXBsaWVyOiAnc2Z4X211bHRpcGxpZXInLFxuICAgIFNGWFNtYWxsTXVsdGlwbGllcjogJ3NmeF9zbWFsbE11bHRpcGxpZXInLFxuICAgIFNGWEJvbnVzdHJhbnNpdGlvbjogJ3NmeF9ib251c3RyYW5zaXRpb24nLFxuXG4gICAgXG59XG5jb25zdCBTb3VuZFZvbHVtZSA9IHt9O1xuU291bmRWb2x1bWVbU291bmROYW1lQ29uZmlnLkJHTU1haW5HYW1lXSA9IDE7XG5Tb3VuZFZvbHVtZVtTb3VuZE5hbWVDb25maWcuQkdNRnJlZUdhbWVdID0gMC43O1xuU291bmRWb2x1bWVbU291bmROYW1lQ29uZmlnLkJHTUJvbnVzR2FtZV0gPSAxO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOVNvdW5kQ29uZmlnIHtcbiAgICAgU291bmROYW1lQ29uZmlnOiBhbnkgPSBTb3VuZE5hbWVDb25maWc7XG4gICAgIFNvdW5kVm9sdW1lOiBhbnkgPSBTb3VuZFZvbHVtZTtcbiAgICAgU291bmRWb2x1bWVSZWR1Y3Rpb246YW55ID0gMC4zO1xufSJdfQ==