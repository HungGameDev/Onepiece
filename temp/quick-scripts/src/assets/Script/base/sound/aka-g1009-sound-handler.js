"use strict";
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