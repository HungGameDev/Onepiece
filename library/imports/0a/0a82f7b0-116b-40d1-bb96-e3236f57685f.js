"use strict";
cc._RF.push(module, '0a82fewEWtA0buW4yNvV2hf', 'Slot45-sound-handler');
// Script/base/sound/Slot45-sound-handler.ts

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
var Slot45_event_manager_1 = require("../events/Slot45-event-manager");
var Slot45_sound_controller_1 = require("./Slot45-sound-controller");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45SoundHandlerActor = /** @class */ (function (_super) {
    __extends(Slot45SoundHandlerActor, _super);
    function Slot45SoundHandlerActor() {
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
    Slot45SoundHandlerActor.prototype.start = function () {
        this.currentBGMMusicPlaying = this.SoundConfig.SoundNameConfig.BGMChooseBet;
        this.onPlayBGM(this.SoundConfig.SoundNameConfig.BGMChooseBet);
        this.spinItemCount = 0;
        this.landingCount = {};
        this.isFreeSpin = false;
        this.isStopImmediately = false;
        this.isPlayedSoundLandingImmediately = false;
        this.tweenVolume = cc.tween({});
    };
    Slot45SoundHandlerActor.prototype.onLoad = function () {
        this.soundController = Slot45_sound_controller_1.default.Instance;
        this.register();
    };
    Slot45SoundHandlerActor.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("PlaySFX", this.onPlaySFX.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("StopSFX", this.onStopSFX.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("PlayBGM", this.onPlayBGM.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("StopBGM", this.onStopBGM.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ShowPopupChangeBet", this.onPlayChooseBetBGMusic.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ChangeBet", this.onPlayMainGameBGMusic.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("FeatureTrigger", this.onFeatureTrigger.bind(this));
    };
    Slot45SoundHandlerActor.prototype.onFeatureTrigger = function () {
        // this.onPlaySFX({ sfxName: "sfx_featurewin", isLoop: false });
    };
    Slot45SoundHandlerActor.prototype.onPlayChooseBetBGMusic = function () {
        if (this.currentBGMMusicPlaying != this.SoundConfig.SoundNameConfig.BGMChooseBet) {
            this.onPlayBGM(this.SoundConfig.SoundNameConfig.BGMChooseBet);
        }
    };
    Slot45SoundHandlerActor.prototype.onPlayMainGameBGMusic = function () {
        if (this.currentBGMMusicPlaying != this.SoundConfig.SoundNameConfig.BGMMainGame) {
            this.onPlayBGM(this.SoundConfig.SoundNameConfig.BGMMainGame);
        }
    };
    Slot45SoundHandlerActor.prototype.onPlayBGM = function (bgmName) {
        this.onStopBGM(this.currentBGMMusicPlaying);
        if (this.SoundConfig.SoundVolume.hasOwnProperty(bgmName))
            this.soundController.SetMusicVolume(this.SoundConfig.SoundVolume[bgmName]);
        this.currentBGMMusicPlaying = bgmName;
        this.soundController.PlayMusic(bgmName);
    };
    Slot45SoundHandlerActor.prototype.onStopBGM = function (bgmName) {
        this.soundController.StopMusic(bgmName);
    };
    Slot45SoundHandlerActor.prototype.onPlaySFX = function (data) {
        this.handleEventPlaySfx(data.sfxName, data.isLoop === true);
    };
    Slot45SoundHandlerActor.prototype.onStopSFX = function (data) {
        this.handleEventStopSfx(data.sfxName, data.fadingTime);
        ;
    };
    Slot45SoundHandlerActor.prototype.reduceVolume = function () {
        this.tweenVolume.stop();
        this.tweenVolume = cc.tween({});
        var vol = this.getMusicVolume() - this.SoundConfig.SoundVolumeReduction;
        this.soundController.SetMusicVolume(vol);
    };
    Slot45SoundHandlerActor.prototype.restoreVolume = function () {
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
    Slot45SoundHandlerActor.prototype.getMusicVolume = function () {
        return this.SoundConfig.SoundVolume[this.currentBGMMusicPlaying];
    };
    Slot45SoundHandlerActor.prototype.handleEventPlaySfx = function (soundName, isLoop) {
        this.soundController.PlaySfx(soundName, isLoop === true);
    };
    Slot45SoundHandlerActor.prototype.handleEventStopSfx = function (soundName, fadingTime) {
        if (fadingTime > 0) {
            this.soundController.StopSfxWithFadeOut(soundName, fadingTime);
        }
        else {
            this.soundController.StopSfx(soundName);
        }
    };
    Slot45SoundHandlerActor = __decorate([
        ccclass
    ], Slot45SoundHandlerActor);
    return Slot45SoundHandlerActor;
}(cc.Component));
exports.default = Slot45SoundHandlerActor;

cc._RF.pop();