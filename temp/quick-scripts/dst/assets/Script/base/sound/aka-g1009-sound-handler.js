
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/sound/aka-g1009-sound-handler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a82fewEWtA0buW4yNvV2hf', 'aka-g1009-sound-handler');
// Script/base/sound/aka-g1009-sound-handler.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sound_config_1 = require("../../config/sound-config");
var aka_g1009_event_manager_1 = require("../events/aka-g1009-event-manager");
var aka_g1009_sound_controller_1 = require("../sound/aka-g1009-sound-controller");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009SoundHandlerActor = /** @class */ (function (_super) {
    __extends(G1009SoundHandlerActor, _super);
    function G1009SoundHandlerActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundController = null;
        _this.spinItemCount = 0;
        _this.landingCount = {};
        _this.isFreeSpin = false;
        _this.isStopImmediately = false;
        _this.isPlayedSoundLandingImmediately = false;
        _this.currentBGMMusicPlaying = "";
        _this.tweenVolume = cc.tween({});
        _this.SoundConfig = new sound_config_1.default();
        return _this;
    }
    G1009SoundHandlerActor.prototype.start = function () {
        this.currentBGMMusicPlaying = this.SoundConfig.SoundNameConfig.BGMMainGame;
        this.onPlayBGM(this.SoundConfig.SoundNameConfig.BGMMainGame);
        this.spinItemCount = 0;
        this.landingCount = {};
        this.isFreeSpin = false;
        this.isStopImmediately = false;
        this.isPlayedSoundLandingImmediately = false;
        this.tweenVolume = cc.tween({});
    };
    G1009SoundHandlerActor.prototype.onLoad = function () {
        this.soundController = aka_g1009_sound_controller_1.default.Instance;
        this.register();
    };
    G1009SoundHandlerActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("PlaySFX", this.onPlaySFX.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("StopSFX", this.onStopSFX.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("PlayBGM", this.onPlayBGM.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("StopBGM", this.onStopBGM.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ShowBetPanel", this.onPlayMainGameBGMusic.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("BonusWinStarted", this.onPlayBonusGameBGMusic.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("EnterFreespins", this.onPlayFreeGameBGMusic.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("JackpotStarted", this.onPlayJackPotBGMusic.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("BigWinStarted", this.onPlayBigWinBGMusic.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("FeatureTrigger", this.onFeatureTrigger.bind(this));
    };
    G1009SoundHandlerActor.prototype.onFeatureTrigger = function () {
        // this.onPlaySFX({ sfxName: "sfx_featurewin", isLoop: false });
    };
    G1009SoundHandlerActor.prototype.onPlayMainGameBGMusic = function () {
        if (this.currentBGMMusicPlaying != this.SoundConfig.SoundNameConfig.BGMMainGame) {
            this.onPlayBGM(this.SoundConfig.SoundNameConfig.BGMMainGame);
        }
    };
    G1009SoundHandlerActor.prototype.onPlayFreeGameBGMusic = function () {
        if (this.currentBGMMusicPlaying != this.SoundConfig.SoundNameConfig.BGMFreeGame) {
            this.onPlayBGM(this.SoundConfig.SoundNameConfig.BGMFreeGame);
        }
    };
    G1009SoundHandlerActor.prototype.onPlayBonusGameBGMusic = function () {
        if (this.currentBGMMusicPlaying != this.SoundConfig.SoundNameConfig.BGMBonusGame) {
            this.onPlayBGM(this.SoundConfig.SoundNameConfig.BGMBonusGame);
        }
    };
    G1009SoundHandlerActor.prototype.onPlayJackPotBGMusic = function () {
        if (this.currentBGMMusicPlaying != this.SoundConfig.SoundNameConfig.BGMJackPot) {
            this.onPlayBGM(this.SoundConfig.SoundNameConfig.BGMJackPot);
        }
    };
    G1009SoundHandlerActor.prototype.onPlayBigWinBGMusic = function () {
        if (this.currentBGMMusicPlaying != this.SoundConfig.SoundNameConfig.BGMBigWin) {
            this.onPlayBGM(this.SoundConfig.SoundNameConfig.BGMBigWin);
        }
    };
    G1009SoundHandlerActor.prototype.onPlayBGM = function (bgmName) {
        this.onStopBGM(this.currentBGMMusicPlaying);
        if (this.SoundConfig.SoundVolume.hasOwnProperty(bgmName))
            this.soundController.SetMusicVolume(this.SoundConfig.SoundVolume[bgmName]);
        this.currentBGMMusicPlaying = bgmName;
        this.soundController.PlayMusic(bgmName);
    };
    G1009SoundHandlerActor.prototype.onStopBGM = function (bgmName) {
        this.soundController.StopMusic(bgmName);
    };
    G1009SoundHandlerActor.prototype.onPlaySFX = function (data) {
        this.handleEventPlaySfx(data.sfxName, data.isLoop === true);
    };
    G1009SoundHandlerActor.prototype.onStopSFX = function (data) {
        this.handleEventStopSfx(data.sfxName, data.fadingTime);
        ;
    };
    G1009SoundHandlerActor.prototype.reduceVolume = function () {
        this.tweenVolume.stop();
        this.tweenVolume = cc.tween({});
        var vol = this.getMusicVolume() - this.SoundConfig.SoundVolumeReduction;
        this.soundController.SetMusicVolume(vol);
    };
    G1009SoundHandlerActor.prototype.restoreVolume = function () {
        var _this = this;
        this.tweenVolume.stop();
        this.tweenVolume = cc.tween({});
        var currValue = this.soundController.GetMusicVolume();
        var desValue = this.getMusicVolume();
        var objectValues = { value: currValue };
        cc.tween(objectValues).to(0.25, { value: desValue }, {
            progress: function (start, end, current, ratio) {
                _this.soundController.SetMusicVolume(current);
            }
        }).start();
    };
    G1009SoundHandlerActor.prototype.getMusicVolume = function () {
        return this.SoundConfig.SoundVolume[this.currentBGMMusicPlaying];
    };
    G1009SoundHandlerActor.prototype.handleEventPlaySfx = function (soundName, isLoop) {
        this.soundController.PlaySfx(soundName, isLoop === true);
    };
    G1009SoundHandlerActor.prototype.handleEventStopSfx = function (soundName, fadingTime) {
        if (fadingTime > 0) {
            this.soundController.StopSfxWithFadeOut(soundName, fadingTime);
        }
        else {
            this.soundController.StopSfx(soundName);
        }
    };
    G1009SoundHandlerActor = __decorate([
        ccclass
    ], G1009SoundHandlerActor);
    return G1009SoundHandlerActor;
}(cc.Component));
exports.default = G1009SoundHandlerActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zb3VuZC9ha2EtZzEwMDktc291bmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBeUQ7QUFDekQsNkVBQXNFO0FBQ3RFLGtGQUE0RTtBQUV0RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvRCwwQ0FBWTtJQUFoRTtRQUFBLHFFQWlKQztRQS9JVSxxQkFBZSxHQUE4QixJQUFJLENBQUM7UUFDakQsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsa0JBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsdUJBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLHFDQUErQixHQUFZLEtBQUssQ0FBQztRQUNqRCw0QkFBc0IsR0FBVyxFQUFFLENBQUM7UUFDcEMsaUJBQVcsR0FBYSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLGlCQUFXLEdBQXFCLElBQUksc0JBQWdCLEVBQUUsQ0FBQzs7SUF1STNELENBQUM7SUFySWEsc0NBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7UUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQywrQkFB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QztZQUNqRCxDQUFDO1NBQ0osQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVNLCtDQUFjLEdBQXJCO1FBRUksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtJQUN0RSxDQUFDO0lBRU8sbURBQWtCLEdBQTFCLFVBQTJCLFNBQWdCLEVBQUUsTUFBYztRQUV2RCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTyxtREFBa0IsR0FBMUIsVUFBMkIsU0FBZ0IsRUFBRSxVQUFpQjtRQUUxRCxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDbEU7YUFBTTtZQUNILElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNDO0lBQ0wsQ0FBQztJQS9JZ0Isc0JBQXNCO1FBRDFDLE9BQU87T0FDYSxzQkFBc0IsQ0FpSjFDO0lBQUQsNkJBQUM7Q0FqSkQsQUFpSkMsQ0FqSm1ELEVBQUUsQ0FBQyxTQUFTLEdBaUovRDtrQkFqSm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHMTAwOVNvdW5kQ29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcvc291bmQtY29uZmlnXCI7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCBHMTAwOVNvdW5kQ29udHJvbGxlckFjdG9yIGZyb20gXCIuLi9zb3VuZC9ha2EtZzEwMDktc291bmQtY29udHJvbGxlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5U291bmRIYW5kbGVyQWN0b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIFxuICAgIHB1YmxpYyBzb3VuZENvbnRyb2xsZXI6IEcxMDA5U291bmRDb250cm9sbGVyQWN0b3IgPSBudWxsO1xuICAgIHByaXZhdGUgc3Bpbkl0ZW1Db3VudDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGxhbmRpbmdDb3VudDogYW55ID0ge307XG4gICAgcHJpdmF0ZSBpc0ZyZWVTcGluOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc1N0b3BJbW1lZGlhdGVseTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNQbGF5ZWRTb3VuZExhbmRpbmdJbW1lZGlhdGVseTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY3VycmVudEJHTU11c2ljUGxheWluZzogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHR3ZWVuVm9sdW1lOiBjYy5Ud2VlbiA9IGNjLnR3ZWVuKHt9KTtcbiAgICBTb3VuZENvbmZpZzogRzEwMDlTb3VuZENvbmZpZyA9IG5ldyBHMTAwOVNvdW5kQ29uZmlnKCk7XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudEJHTU11c2ljUGxheWluZyA9IHRoaXMuU291bmRDb25maWcuU291bmROYW1lQ29uZmlnLkJHTU1haW5HYW1lO1xuICAgICAgICB0aGlzLm9uUGxheUJHTSh0aGlzLlNvdW5kQ29uZmlnLlNvdW5kTmFtZUNvbmZpZy5CR01NYWluR2FtZSk7ICAgICAgXG4gICAgICAgIHRoaXMuc3Bpbkl0ZW1Db3VudCA9IDA7XG4gICAgICAgIHRoaXMubGFuZGluZ0NvdW50ID0ge307XG4gICAgICAgIHRoaXMuaXNGcmVlU3BpbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RvcEltbWVkaWF0ZWx5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNQbGF5ZWRTb3VuZExhbmRpbmdJbW1lZGlhdGVseSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR3ZWVuVm9sdW1lID0gY2MudHdlZW4oe30pO1xuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNvdW5kQ29udHJvbGxlciA9IEcxMDA5U291bmRDb250cm9sbGVyQWN0b3IuSW5zdGFuY2U7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSByZWdpc3RlcigpOiB2b2lkIHtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlBsYXlTRlhcIiwgdGhpcy5vblBsYXlTRlguYmluZCh0aGlzKSk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTdG9wU0ZYXCIsIHRoaXMub25TdG9wU0ZYLmJpbmQodGhpcykpO1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiUGxheUJHTVwiLCB0aGlzLm9uUGxheUJHTS5iaW5kKHRoaXMpKTtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlN0b3BCR01cIiwgdGhpcy5vblN0b3BCR00uYmluZCh0aGlzKSk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTaG93QmV0UGFuZWxcIiwgdGhpcy5vblBsYXlNYWluR2FtZUJHTXVzaWMuYmluZCh0aGlzKSk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJCb251c1dpblN0YXJ0ZWRcIiwgdGhpcy5vblBsYXlCb251c0dhbWVCR011c2ljLmJpbmQodGhpcykpO1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiRW50ZXJGcmVlc3BpbnNcIiwgdGhpcy5vblBsYXlGcmVlR2FtZUJHTXVzaWMuYmluZCh0aGlzKSk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJKYWNrcG90U3RhcnRlZFwiLCB0aGlzLm9uUGxheUphY2tQb3RCR011c2ljLmJpbmQodGhpcykpO1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiQmlnV2luU3RhcnRlZFwiLCB0aGlzLm9uUGxheUJpZ1dpbkJHTXVzaWMuYmluZCh0aGlzKSk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJGZWF0dXJlVHJpZ2dlclwiLCB0aGlzLm9uRmVhdHVyZVRyaWdnZXIuYmluZCh0aGlzKSk7XG5cdFxuICAgIH1cblxuICAgIHByaXZhdGUgb25GZWF0dXJlVHJpZ2dlcigpOiB2b2lke1xuICAgICAgIC8vIHRoaXMub25QbGF5U0ZYKHsgc2Z4TmFtZTogXCJzZnhfZmVhdHVyZXdpblwiLCBpc0xvb3A6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25QbGF5TWFpbkdhbWVCR011c2ljKCk6IHZvaWR7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRCR01NdXNpY1BsYXlpbmcgIT0gdGhpcy5Tb3VuZENvbmZpZy5Tb3VuZE5hbWVDb25maWcuQkdNTWFpbkdhbWUpXG4gICAgICAgIHsgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm9uUGxheUJHTSh0aGlzLlNvdW5kQ29uZmlnLlNvdW5kTmFtZUNvbmZpZy5CR01NYWluR2FtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUGxheUZyZWVHYW1lQkdNdXNpYygpOiB2b2lke1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50QkdNTXVzaWNQbGF5aW5nICE9IHRoaXMuU291bmRDb25maWcuU291bmROYW1lQ29uZmlnLkJHTUZyZWVHYW1lKVxuICAgICAgICB7IFxuICAgICAgICAgICAgdGhpcy5vblBsYXlCR00odGhpcy5Tb3VuZENvbmZpZy5Tb3VuZE5hbWVDb25maWcuQkdNRnJlZUdhbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblBsYXlCb251c0dhbWVCR011c2ljKCk6IHZvaWR7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRCR01NdXNpY1BsYXlpbmcgIT0gdGhpcy5Tb3VuZENvbmZpZy5Tb3VuZE5hbWVDb25maWcuQkdNQm9udXNHYW1lKVxuICAgICAgICB7ICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5vblBsYXlCR00odGhpcy5Tb3VuZENvbmZpZy5Tb3VuZE5hbWVDb25maWcuQkdNQm9udXNHYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25QbGF5SmFja1BvdEJHTXVzaWMoKTogdm9pZHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEJHTU11c2ljUGxheWluZyAhPSB0aGlzLlNvdW5kQ29uZmlnLlNvdW5kTmFtZUNvbmZpZy5CR01KYWNrUG90KVxuICAgICAgICB7ICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMub25QbGF5QkdNKHRoaXMuU291bmRDb25maWcuU291bmROYW1lQ29uZmlnLkJHTUphY2tQb3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblBsYXlCaWdXaW5CR011c2ljKCk6IHZvaWR7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRCR01NdXNpY1BsYXlpbmcgIT0gdGhpcy5Tb3VuZENvbmZpZy5Tb3VuZE5hbWVDb25maWcuQkdNQmlnV2luKVxuICAgICAgICB7XG4gICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm9uUGxheUJHTSh0aGlzLlNvdW5kQ29uZmlnLlNvdW5kTmFtZUNvbmZpZy5CR01CaWdXaW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgb25QbGF5QkdNKGJnbU5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm9uU3RvcEJHTSh0aGlzLmN1cnJlbnRCR01NdXNpY1BsYXlpbmcpO1xuICAgICAgICBpZiAodGhpcy5Tb3VuZENvbmZpZy5Tb3VuZFZvbHVtZS5oYXNPd25Qcm9wZXJ0eShiZ21OYW1lKSlcbiAgICAgICAgICAgIHRoaXMuc291bmRDb250cm9sbGVyLlNldE11c2ljVm9sdW1lKHRoaXMuU291bmRDb25maWcuU291bmRWb2x1bWVbYmdtTmFtZV0pO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QkdNTXVzaWNQbGF5aW5nID0gYmdtTmFtZTtcbiAgICAgICAgdGhpcy5zb3VuZENvbnRyb2xsZXIuUGxheU11c2ljKGJnbU5hbWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdG9wQkdNKGJnbU5hbWU6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5zb3VuZENvbnRyb2xsZXIuU3RvcE11c2ljKGJnbU5hbWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25QbGF5U0ZYKGRhdGE6IHsgc2Z4TmFtZTogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4gfSlcbiAgICB7XG4gICAgICAgIHRoaXMuaGFuZGxlRXZlbnRQbGF5U2Z4KGRhdGEuc2Z4TmFtZSwgZGF0YS5pc0xvb3AgPT09IHRydWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdG9wU0ZYKGRhdGE6IHsgc2Z4TmFtZTogc3RyaW5nLCBmYWRpbmdUaW1lOiBudW1iZXIgfSlcbiAgICB7XG4gICAgICAgIHRoaXMuaGFuZGxlRXZlbnRTdG9wU2Z4KGRhdGEuc2Z4TmFtZSwgZGF0YS5mYWRpbmdUaW1lKTs7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZHVjZVZvbHVtZSgpIHtcbiAgICBcbiAgICAgICAgdGhpcy50d2VlblZvbHVtZS5zdG9wKCk7XG4gICAgICAgIHRoaXMudHdlZW5Wb2x1bWUgPSBjYy50d2Vlbih7fSk7XG4gICAgICAgIGxldCB2b2wgPSB0aGlzLmdldE11c2ljVm9sdW1lKCkgLSB0aGlzLlNvdW5kQ29uZmlnLlNvdW5kVm9sdW1lUmVkdWN0aW9uO1xuICAgICAgICB0aGlzLnNvdW5kQ29udHJvbGxlci5TZXRNdXNpY1ZvbHVtZSh2b2wpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXN0b3JlVm9sdW1lKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy50d2VlblZvbHVtZS5zdG9wKCk7XG4gICAgICAgIHRoaXMudHdlZW5Wb2x1bWUgPSBjYy50d2Vlbih7fSk7XG4gICAgICAgIGxldCBjdXJyVmFsdWUgPSB0aGlzLnNvdW5kQ29udHJvbGxlci5HZXRNdXNpY1ZvbHVtZSgpO1xuICAgICAgICBsZXQgZGVzVmFsdWUgPSB0aGlzLmdldE11c2ljVm9sdW1lKCk7XG4gICAgICAgIGxldCBvYmplY3RWYWx1ZXMgPSB7IHZhbHVlOiBjdXJyVmFsdWUgfTtcbiAgICAgICAgY2MudHdlZW4ob2JqZWN0VmFsdWVzKS50bygwLjI1LCB7IHZhbHVlOiBkZXNWYWx1ZSB9LCB7XG4gICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZENvbnRyb2xsZXIuU2V0TXVzaWNWb2x1bWUoY3VycmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgICAgIFxuICAgIHB1YmxpYyBnZXRNdXNpY1ZvbHVtZSgpIHtcbiAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuU291bmRDb25maWcuU291bmRWb2x1bWVbICB0aGlzLmN1cnJlbnRCR01NdXNpY1BsYXlpbmddXG4gICAgfVxuXG4gICAgcHVibGljICBoYW5kbGVFdmVudFBsYXlTZngoc291bmROYW1lOnN0cmluZywgaXNMb29wOmJvb2xlYW4pIHtcbiAgICAgICBcbiAgICAgICAgdGhpcy5zb3VuZENvbnRyb2xsZXIuUGxheVNmeChzb3VuZE5hbWUsIGlzTG9vcCA9PT0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljICBoYW5kbGVFdmVudFN0b3BTZngoc291bmROYW1lOnN0cmluZywgZmFkaW5nVGltZTpudW1iZXIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAoZmFkaW5nVGltZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRDb250cm9sbGVyLlN0b3BTZnhXaXRoRmFkZU91dChzb3VuZE5hbWUsIGZhZGluZ1RpbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3VuZENvbnRyb2xsZXIuU3RvcFNmeChzb3VuZE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=