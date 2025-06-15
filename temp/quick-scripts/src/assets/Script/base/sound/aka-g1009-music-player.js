"use strict";
cc._RF.push(module, '337d1TZTWpK8Zmgg9fqVzix', 'aka-g1009-music-player');
// Script/base/sound/aka-g1009-music-player.ts

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
var aka_g1009_sound_player_1 = require("./aka-g1009-sound-player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009MusicPlayerActor = /** @class */ (function (_super) {
    __extends(G1009MusicPlayerActor, _super);
    function G1009MusicPlayerActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMute = false;
        _this.muteVolume = 1;
        _this.audioPlayingName = "";
        _this.audioPlayingID = -1;
        _this.tweenFadeOut = cc.tween();
        return _this;
    }
    G1009MusicPlayerActor.prototype.handleAudioClipLoaded = function (audioID, audioName, isLoop) {
        var startLoadTime = Date.now();
        this.audioClips[audioName].once("load", function () {
            if (this.audioPlayingName != audioName) {
                cc.audioEngine.stopEffect(audioID);
                return;
            }
            var totalLoadTime = (Date.now() - startLoadTime) / 1000;
            if (totalLoadTime > this.GetAudioDuration(audioName) && isLoop == false) {
                this.Stop(audioName);
            }
            else {
                var audioCurrentTime = totalLoadTime % this.GetAudioDuration(audioName);
                cc.audioEngine.setCurrentTime(audioID, audioCurrentTime);
            }
        });
    };
    G1009MusicPlayerActor.prototype.Play = function (audioName, isLoop) {
        if (this.audioClips[audioName] != null) {
            var audioID = cc.audioEngine.playMusic(this.audioClips[audioName], isLoop);
            this.audioPlayingName = audioName;
            this.audioPlayingID = audioID;
            if (!this.audioClips[audioName].loaded) {
                this.handleAudioClipLoaded(audioID, audioName, isLoop);
            }
        }
    };
    G1009MusicPlayerActor.prototype.Stop = function (audioName) {
        audioName = audioName || this.audioPlayingName;
        if (audioName != this.audioPlayingName) {
            return;
        }
        this.tweenFadeOut.stop();
        cc.audioEngine.stopMusic();
        this.audioPlayingName = "";
    };
    G1009MusicPlayerActor.prototype.StopWithFadeOut = function (audioName, duration) {
        var _this = this;
        if (arguments[1] == null) {
            duration = arguments[0];
            audioName = this.audioPlayingName;
        }
        else if (audioName !== this.audioPlayingName) {
            return;
        }
        var saveVolume = cc.audioEngine.getVolume(this.audioPlayingID);
        var obj = {
            _volume: saveVolume,
            get volume() {
                return this._volume;
            },
            set volume(val) {
                this._volume = val;
                cc.audioEngine.setVolume(this.audioPlayingID, this._volume);
            }
        };
        this.tweenFadeOut.stop();
        this.tweenFadeOut = cc.tween(obj);
        this.tweenFadeOut.to(duration, { volume: 0 });
        this.tweenFadeOut.call(function () {
            cc.audioEngine.setVolume(_this.audioPlayingID, saveVolume);
            _this.Stop(audioName);
        });
        this.tweenFadeOut.start();
    };
    G1009MusicPlayerActor.prototype.Mute = function () {
        if (this.isMute == false) {
            this.isMute = true;
            this.muteVolume = cc.audioEngine.getMusicVolume();
            cc.audioEngine.setMusicVolume(0);
        }
    };
    G1009MusicPlayerActor.prototype.Unmute = function () {
        if (this.isMute) {
            this.isMute = false;
            cc.audioEngine.setMusicVolume(this.muteVolume);
        }
    };
    G1009MusicPlayerActor.prototype.IsMute = function () {
        return this.isMute;
    };
    G1009MusicPlayerActor.prototype.SetVolume = function (volume) {
        if (this.isMute) {
            this.muteVolume = volume;
        }
        else {
            cc.audioEngine.setMusicVolume(volume);
        }
    };
    G1009MusicPlayerActor.prototype.GetVolume = function () {
        if (this.isMute) {
            return this.muteVolume;
        }
        else {
            return cc.audioEngine.getMusicVolume();
        }
    };
    G1009MusicPlayerActor.prototype.GetAudioDuration = function (audioName) {
        if (this.audioClips[audioName] != null) {
            return this.audioClips[audioName]._audio ? this.audioClips[audioName]._audio.duration : 0;
        }
    };
    G1009MusicPlayerActor.prototype.GetAudioPlaying = function () {
        return this.audioPlayingName;
    };
    G1009MusicPlayerActor = __decorate([
        ccclass
    ], G1009MusicPlayerActor);
    return G1009MusicPlayerActor;
}(aka_g1009_sound_player_1.default));
exports.default = G1009MusicPlayerActor;

cc._RF.pop();