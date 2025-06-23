"use strict";
cc._RF.push(module, '337d1TZTWpK8Zmgg9fqVzix', 'Slot45-music-player');
// Script/base/sound/Slot45-music-player.ts

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
var Slot45_sound_player_1 = require("./Slot45-sound-player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45MusicPlayerActor = /** @class */ (function (_super) {
    __extends(Slot45MusicPlayerActor, _super);
    function Slot45MusicPlayerActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMute = false;
        _this.muteVolume = 1;
        _this.audioPlayingName = "";
        _this.audioPlayingID = -1;
        _this.tweenFadeOut = cc.tween();
        return _this;
    }
    Slot45MusicPlayerActor.prototype.handleAudioClipLoaded = function (audioID, audioName, isLoop) {
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
    Slot45MusicPlayerActor.prototype.Play = function (audioName, isLoop) {
        if (this.audioClips[audioName] != null) {
            var audioID = cc.audioEngine.playMusic(this.audioClips[audioName], isLoop);
            this.audioPlayingName = audioName;
            this.audioPlayingID = audioID;
            if (!this.audioClips[audioName].loaded) {
                this.handleAudioClipLoaded(audioID, audioName, isLoop);
            }
        }
    };
    Slot45MusicPlayerActor.prototype.Stop = function (audioName) {
        audioName = audioName || this.audioPlayingName;
        if (audioName != this.audioPlayingName) {
            return;
        }
        this.tweenFadeOut.stop();
        cc.audioEngine.stopMusic();
        this.audioPlayingName = "";
    };
    Slot45MusicPlayerActor.prototype.StopWithFadeOut = function (audioName, duration) {
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
    Slot45MusicPlayerActor.prototype.Mute = function () {
        if (this.isMute == false) {
            this.isMute = true;
            this.muteVolume = cc.audioEngine.getMusicVolume();
            cc.audioEngine.setMusicVolume(0);
        }
    };
    Slot45MusicPlayerActor.prototype.Unmute = function () {
        if (this.isMute) {
            this.isMute = false;
            cc.audioEngine.setMusicVolume(this.muteVolume);
        }
    };
    Slot45MusicPlayerActor.prototype.IsMute = function () {
        return this.isMute;
    };
    Slot45MusicPlayerActor.prototype.SetVolume = function (volume) {
        if (this.isMute) {
            this.muteVolume = volume;
        }
        else {
            cc.audioEngine.setMusicVolume(volume);
        }
    };
    Slot45MusicPlayerActor.prototype.GetVolume = function () {
        if (this.isMute) {
            return this.muteVolume;
        }
        else {
            return cc.audioEngine.getMusicVolume();
        }
    };
    Slot45MusicPlayerActor.prototype.GetAudioDuration = function (audioName) {
        if (this.audioClips[audioName] != null) {
            return this.audioClips[audioName]._audio ? this.audioClips[audioName]._audio.duration : 0;
        }
    };
    Slot45MusicPlayerActor.prototype.GetAudioPlaying = function () {
        return this.audioPlayingName;
    };
    Slot45MusicPlayerActor = __decorate([
        ccclass
    ], Slot45MusicPlayerActor);
    return Slot45MusicPlayerActor;
}(Slot45_sound_player_1.default));
exports.default = Slot45MusicPlayerActor;

cc._RF.pop();