"use strict";
cc._RF.push(module, '2ab1arjlBZHgYTzvM+H93Iq', 'aka-g1009-sound-controller');
// Script/base/sound/aka-g1009-sound-controller.ts

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
var aka_g1009_event_manager_1 = require("../events/aka-g1009-event-manager");
var ak_g1009_sfs_player_1 = require("./ak-g1009-sfs-player");
var aka_g1009_music_player_1 = require("./aka-g1009-music-player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009SoundControllerActor = /** @class */ (function (_super) {
    __extends(G1009SoundControllerActor, _super);
    function G1009SoundControllerActor() {
        var _this = _super.call(this) || this;
        _this.localStorage = null;
        _this.musicPlayer = null;
        _this.sfxPlayer = null;
        _this.isMuteSfx = false;
        _this.isMuteMusic = false;
        _this.isMuteAll = false;
        G1009SoundControllerActor_1.Instance = _this;
        return _this;
    }
    G1009SoundControllerActor_1 = G1009SoundControllerActor;
    G1009SoundControllerActor.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("Music-on", this.UnmuteMusic.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("Music-off", this.MuteMusic.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("Sound-on", this.UnmuteSfx.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("Sound-off", this.MuteSfx.bind(this));
        cc.sys.localStorage.getItem('enableSFXKey') == "false" ? this.MuteSfx() : this.UnmuteSfx();
        cc.sys.localStorage.getItem('enableBGMKey') == "false" ? this.MuteMusic() : this.UnmuteMusic();
    };
    G1009SoundControllerActor.prototype.MuteSfx = function () {
        this.isMuteSfx = true;
        this.sfxPlayer.Mute();
        cc.sys.localStorage.setItem('enableSFXKey', "false");
    };
    G1009SoundControllerActor.prototype.UnmuteSfx = function () {
        this.isMuteSfx = false;
        this.sfxPlayer.Unmute();
        cc.sys.localStorage.setItem('enableSFXKey', "true");
    };
    G1009SoundControllerActor.prototype.MuteMusic = function () {
        this.isMuteMusic = true;
        this.musicPlayer.Mute();
        cc.sys.localStorage.setItem('enableBGMKey', "false");
    };
    G1009SoundControllerActor.prototype.UnmuteMusic = function () {
        this.isMuteMusic = false;
        this.musicPlayer.Unmute();
        cc.sys.localStorage.setItem('enableBGMKey', "true");
    };
    G1009SoundControllerActor.prototype.AddSfx = function (name) {
        this.sfxPlayer.AddAudio(name);
    };
    G1009SoundControllerActor.prototype.AddMusic = function (name) {
        this.musicPlayer.AddAudio(name);
    };
    G1009SoundControllerActor.prototype.PlaySfx = function (name, isLoop) {
        this.sfxPlayer.Play(name, isLoop);
    };
    G1009SoundControllerActor.prototype.StopSfx = function (name) {
        this.sfxPlayer.Stop(name);
    };
    G1009SoundControllerActor.prototype.StopSfxWithFadeOut = function (name, duration) {
        this.sfxPlayer.StopWithFadeOut(name, duration);
    };
    G1009SoundControllerActor.prototype.StopAllSfx = function () {
        this.sfxPlayer.StopAll();
    };
    G1009SoundControllerActor.prototype.StopAllNonLoopingSfx = function () {
        this.sfxPlayer.StopAllNonLoopingSfx();
    };
    G1009SoundControllerActor.prototype.StopAllSfxWithFadeOut = function (duration) {
        this.sfxPlayer.StopAllWithFadeOut(duration);
    };
    G1009SoundControllerActor.prototype.StopAllNonLoopingSfxWithFadeOut = function (duration) {
        this.sfxPlayer.StopAllNonLoopingSfxWithFadeOut(duration);
    };
    G1009SoundControllerActor.prototype.HasSfx = function (name) {
        return this.sfxPlayer.HasAudio(name);
    };
    G1009SoundControllerActor.prototype.PlayMusic = function (name) {
        this.musicPlayer.Play(name, true);
    };
    G1009SoundControllerActor.prototype.StopMusic = function (name) {
        this.musicPlayer.Stop(name);
    };
    G1009SoundControllerActor.prototype.StopMusicWithFadeOut = function (name, duration) {
        this.musicPlayer.StopWithFadeOut(name, duration);
    };
    G1009SoundControllerActor.prototype.HasMusic = function (name) {
        return this.musicPlayer.HasAudio(name);
    };
    G1009SoundControllerActor.prototype.ToggleMuteMusic = function () {
        if (this.isMuteMusic) {
            this.UnmuteMusic();
        }
        else {
            this.MuteMusic();
        }
    };
    G1009SoundControllerActor.prototype.IsMuteMusic = function () {
        return this.isMuteMusic;
    };
    G1009SoundControllerActor.prototype.ToggleMuteSfx = function () {
        if (this.isMuteSfx) {
            this.UnmuteSfx();
        }
        else {
            this.MuteSfx();
        }
    };
    G1009SoundControllerActor.prototype.IsMuteSfx = function () {
        return this.isMuteSfx;
    };
    G1009SoundControllerActor.prototype.IsMuteSound = function () {
        return this.isMuteAll;
    };
    G1009SoundControllerActor.prototype.SetMusicVolume = function (volume) {
        this.musicPlayer.SetVolume(volume);
    };
    G1009SoundControllerActor.prototype.GetMusicVolume = function () {
        return this.musicPlayer.GetVolume();
    };
    G1009SoundControllerActor.prototype.SetSfxVolume = function (volume) {
        this.sfxPlayer.SetVolume(volume);
    };
    G1009SoundControllerActor.prototype.GetSfxVolume = function () {
        return this.sfxPlayer.GetVolume();
    };
    G1009SoundControllerActor.prototype.GetMusicDuration = function (name) {
        return this.musicPlayer.GetAudioDuration(name);
    };
    G1009SoundControllerActor.prototype.GetSfxDuration = function (name) {
        return this.sfxPlayer.GetAudioDuration(name);
    };
    G1009SoundControllerActor.prototype.GetCurrentMusic = function () {
        return this.musicPlayer.GetAudioPlaying();
    };
    var G1009SoundControllerActor_1;
    __decorate([
        property(aka_g1009_music_player_1.default)
    ], G1009SoundControllerActor.prototype, "musicPlayer", void 0);
    __decorate([
        property(ak_g1009_sfs_player_1.default)
    ], G1009SoundControllerActor.prototype, "sfxPlayer", void 0);
    G1009SoundControllerActor = G1009SoundControllerActor_1 = __decorate([
        ccclass
    ], G1009SoundControllerActor);
    return G1009SoundControllerActor;
}(cc.Component));
exports.default = G1009SoundControllerActor;

cc._RF.pop();