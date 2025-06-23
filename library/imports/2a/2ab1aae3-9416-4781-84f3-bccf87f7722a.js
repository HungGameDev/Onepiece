"use strict";
cc._RF.push(module, '2ab1arjlBZHgYTzvM+H93Iq', 'Slot45-sound-controller');
// Script/base/sound/Slot45-sound-controller.ts

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
var Slot45_event_manager_1 = require("../events/Slot45-event-manager");
var Slot45_sfs_player_1 = require("./Slot45-sfs-player");
var Slot45_music_player_1 = require("./Slot45-music-player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45SoundControllerActor = /** @class */ (function (_super) {
    __extends(Slot45SoundControllerActor, _super);
    function Slot45SoundControllerActor() {
        var _this = _super.call(this) || this;
        _this.localStorage = null;
        _this.musicPlayer = null;
        _this.sfxPlayer = null;
        _this.isMuteSfx = false;
        _this.isMuteMusic = false;
        _this.isMuteAll = false;
        Slot45SoundControllerActor_1.Instance = _this;
        return _this;
    }
    Slot45SoundControllerActor_1 = Slot45SoundControllerActor;
    Slot45SoundControllerActor.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("Music-on", this.UnmuteMusic.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("Music-off", this.MuteMusic.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("Sound-on", this.UnmuteSfx.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("Sound-off", this.MuteSfx.bind(this));
        cc.sys.localStorage.getItem('enableSFXKey') == "false" ? this.MuteSfx() : this.UnmuteSfx();
        cc.sys.localStorage.getItem('enableBGMKey') == "false" ? this.MuteMusic() : this.UnmuteMusic();
    };
    Slot45SoundControllerActor.prototype.MuteSfx = function () {
        this.isMuteSfx = true;
        this.sfxPlayer.Mute();
        cc.sys.localStorage.setItem('enableSFXKey', "false");
    };
    Slot45SoundControllerActor.prototype.UnmuteSfx = function () {
        this.isMuteSfx = false;
        this.sfxPlayer.Unmute();
        cc.sys.localStorage.setItem('enableSFXKey', "true");
    };
    Slot45SoundControllerActor.prototype.MuteMusic = function () {
        this.isMuteMusic = true;
        this.musicPlayer.Mute();
        cc.sys.localStorage.setItem('enableBGMKey', "false");
    };
    Slot45SoundControllerActor.prototype.UnmuteMusic = function () {
        this.isMuteMusic = false;
        this.musicPlayer.Unmute();
        cc.sys.localStorage.setItem('enableBGMKey', "true");
    };
    Slot45SoundControllerActor.prototype.AddSfx = function (name) {
        this.sfxPlayer.AddAudio(name);
    };
    Slot45SoundControllerActor.prototype.AddMusic = function (name) {
        this.musicPlayer.AddAudio(name);
    };
    Slot45SoundControllerActor.prototype.PlaySfx = function (name, isLoop) {
        this.sfxPlayer.Play(name, isLoop);
    };
    Slot45SoundControllerActor.prototype.StopSfx = function (name) {
        this.sfxPlayer.Stop(name);
    };
    Slot45SoundControllerActor.prototype.StopSfxWithFadeOut = function (name, duration) {
        this.sfxPlayer.StopWithFadeOut(name, duration);
    };
    Slot45SoundControllerActor.prototype.StopAllSfx = function () {
        this.sfxPlayer.StopAll();
    };
    Slot45SoundControllerActor.prototype.StopAllNonLoopingSfx = function () {
        this.sfxPlayer.StopAllNonLoopingSfx();
    };
    Slot45SoundControllerActor.prototype.StopAllSfxWithFadeOut = function (duration) {
        this.sfxPlayer.StopAllWithFadeOut(duration);
    };
    Slot45SoundControllerActor.prototype.StopAllNonLoopingSfxWithFadeOut = function (duration) {
        this.sfxPlayer.StopAllNonLoopingSfxWithFadeOut(duration);
    };
    Slot45SoundControllerActor.prototype.HasSfx = function (name) {
        return this.sfxPlayer.HasAudio(name);
    };
    Slot45SoundControllerActor.prototype.PlayMusic = function (name) {
        this.musicPlayer.Play(name, true);
    };
    Slot45SoundControllerActor.prototype.StopMusic = function (name) {
        this.musicPlayer.Stop(name);
    };
    Slot45SoundControllerActor.prototype.StopMusicWithFadeOut = function (name, duration) {
        this.musicPlayer.StopWithFadeOut(name, duration);
    };
    Slot45SoundControllerActor.prototype.HasMusic = function (name) {
        return this.musicPlayer.HasAudio(name);
    };
    Slot45SoundControllerActor.prototype.ToggleMuteMusic = function () {
        if (this.isMuteMusic) {
            this.UnmuteMusic();
        }
        else {
            this.MuteMusic();
        }
    };
    Slot45SoundControllerActor.prototype.IsMuteMusic = function () {
        return this.isMuteMusic;
    };
    Slot45SoundControllerActor.prototype.ToggleMuteSfx = function () {
        if (this.isMuteSfx) {
            this.UnmuteSfx();
        }
        else {
            this.MuteSfx();
        }
    };
    Slot45SoundControllerActor.prototype.IsMuteSfx = function () {
        return this.isMuteSfx;
    };
    Slot45SoundControllerActor.prototype.IsMuteSound = function () {
        return this.isMuteAll;
    };
    Slot45SoundControllerActor.prototype.SetMusicVolume = function (volume) {
        this.musicPlayer.SetVolume(volume);
    };
    Slot45SoundControllerActor.prototype.GetMusicVolume = function () {
        return this.musicPlayer.GetVolume();
    };
    Slot45SoundControllerActor.prototype.SetSfxVolume = function (volume) {
        this.sfxPlayer.SetVolume(volume);
    };
    Slot45SoundControllerActor.prototype.GetSfxVolume = function () {
        return this.sfxPlayer.GetVolume();
    };
    Slot45SoundControllerActor.prototype.GetMusicDuration = function (name) {
        return this.musicPlayer.GetAudioDuration(name);
    };
    Slot45SoundControllerActor.prototype.GetSfxDuration = function (name) {
        return this.sfxPlayer.GetAudioDuration(name);
    };
    Slot45SoundControllerActor.prototype.GetCurrentMusic = function () {
        return this.musicPlayer.GetAudioPlaying();
    };
    var Slot45SoundControllerActor_1;
    __decorate([
        property(Slot45_music_player_1.default)
    ], Slot45SoundControllerActor.prototype, "musicPlayer", void 0);
    __decorate([
        property(Slot45_sfs_player_1.default)
    ], Slot45SoundControllerActor.prototype, "sfxPlayer", void 0);
    Slot45SoundControllerActor = Slot45SoundControllerActor_1 = __decorate([
        ccclass
    ], Slot45SoundControllerActor);
    return Slot45SoundControllerActor;
}(cc.Component));
exports.default = Slot45SoundControllerActor;

cc._RF.pop();