"use strict";
cc._RF.push(module, '18531Kgo0RPV66laLYPkKce', 'Slot45-sfs-player');
// Script/base/sound/Slot45-sfs-player.ts

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
var G1009SFXPlayerActor = /** @class */ (function (_super) {
    __extends(G1009SFXPlayerActor, _super);
    function G1009SFXPlayerActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMute = false;
        _this.muteVolume = 1;
        _this.audioPlayings = {};
        _this.tweenFadeOuts = cc.tween();
        return _this;
    }
    G1009SFXPlayerActor.prototype.start = function () {
        for (var index = 0, length = this.audioClips.length; index < length; index++) {
            var clip = this.audioClips[index];
            this.audioPlayings[clip.name] = [];
            this.tweenFadeOuts[clip.name] = cc.tween();
        }
    };
    G1009SFXPlayerActor.prototype.handleAudioClipLoaded = function (audioID, audioName, isLoop) {
        var startLoadTime = Date.now();
        this.audioClips[audioName].once("load", function () {
            if (this.audioPlayings[audioName].indexOf(audioID) == -1) {
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
    G1009SFXPlayerActor.prototype.AddAudio = function (audioClip) {
        if (audioClip instanceof cc.AudioClip && this.audioClips[audioClip.name] == null) {
            this.audioClips[audioClip.name] = audioClip;
            this.audioClips.push(audioClip);
            this.audioPlayings[audioClip.name] = [];
            this.tweenFadeOuts[audioClip.name] = cc.tween();
        }
    };
    G1009SFXPlayerActor.prototype.Play = function (audioName, isLoop) {
        if (this.audioClips[audioName] != null) {
            var audioID = cc.audioEngine.playEffect(this.audioClips[audioName], isLoop);
            this.audioPlayings[audioName].push(audioID);
            cc.audioEngine.setFinishCallback(audioID, function (id) {
                return function () {
                    cc.js.array.fastRemove(this.audioPlayings[audioName], id);
                };
            }(audioID).bind(this));
            if (!this.audioClips[audioName].loaded) {
                this.handleAudioClipLoaded(audioID, audioName, isLoop);
            }
        }
    };
    G1009SFXPlayerActor.prototype.Stop = function (audioName) {
        if (this.audioClips[audioName] != null && this.audioPlayings[audioName].length > 0) {
            for (var index = 0; index < this.audioPlayings[audioName].length; index++) {
                var audioID = this.audioPlayings[audioName][index];
                cc.audioEngine.stopEffect(audioID);
            }
            this.audioPlayings[audioName] = [];
            this.tweenFadeOuts[audioName].stop();
        }
    };
    G1009SFXPlayerActor.prototype.StopWithFadeOut = function (audioName, duration) {
        var _this = this;
        if (this.audioClips[audioName] != null && this.audioPlayings[audioName].length > 0) {
            var audioIDs_1 = this.audioPlayings[audioName];
            var saveVolume_1 = cc.audioEngine.getVolume(audioIDs_1[0]);
            var obj = {
                _volume: saveVolume_1,
                get volume() {
                    return this._volume;
                },
                set volume(val) {
                    var _this = this;
                    this._volume = val;
                    audioIDs_1.forEach(function (item) { return cc.audioEngine.setVolume(item, _this._volume); });
                }
            };
            var tweenFade = this.tweenFadeOuts[audioName];
            tweenFade.stop();
            tweenFade = cc.tween(obj);
            tweenFade.to(duration, {
                volume: 0
            });
            tweenFade.call(function () {
                audioIDs_1.forEach(function (item) { return cc.audioEngine.setVolume(item, saveVolume_1); });
                _this.Stop(audioName);
            });
            tweenFade.start();
        }
    };
    G1009SFXPlayerActor.prototype.StopAll = function () {
        for (var audioName in this.audioPlayings) {
            this.Stop(audioName);
        }
    };
    G1009SFXPlayerActor.prototype.StopAllNonLoopingSfx = function () {
        for (var audioName in this.audioPlayings) {
            if (!this.CheckAudioLoop(audioName)) {
                this.Stop(audioName);
            }
        }
    };
    G1009SFXPlayerActor.prototype.StopAllWithFadeOut = function (duration) {
        for (var audioName in this.audioPlayings) {
            this.StopWithFadeOut(audioName, duration);
        }
    };
    G1009SFXPlayerActor.prototype.StopAllNonLoopingSfxWithFadeOut = function (duration) {
        for (var audioName in this.audioPlayings) {
            if (!this.CheckAudioLoop(audioName)) {
                this.StopWithFadeOut(audioName, duration);
            }
        }
    };
    G1009SFXPlayerActor.prototype.Mute = function () {
        if (this.isMute == false) {
            this.isMute = true;
            this.muteVolume = cc.audioEngine.getEffectsVolume();
            cc.audioEngine.setEffectsVolume(0);
        }
    };
    G1009SFXPlayerActor.prototype.Unmute = function () {
        if (this.isMute) {
            this.isMute = false;
            cc.audioEngine.setEffectsVolume(this.muteVolume);
        }
    };
    G1009SFXPlayerActor.prototype.IsMute = function () {
        return this.isMute;
    };
    G1009SFXPlayerActor.prototype.SetVolume = function (volume) {
        if (this.isMute) {
            this.muteVolume = volume;
        }
        else {
            cc.audioEngine.setEffectsVolume(volume);
        }
    };
    G1009SFXPlayerActor.prototype.GetVolume = function () {
        if (this.isMute) {
            return this.muteVolume;
        }
        else {
            return cc.audioEngine.getEffectsVolume();
        }
    };
    G1009SFXPlayerActor.prototype.GetAudioDuration = function (audioName) {
        if (this.audioClips[audioName] != null) {
            return this.audioClips[audioName].duration;
        }
    };
    G1009SFXPlayerActor.prototype.CheckAudioLoop = function (audioName) {
        var isAudioLoop = false;
        var audioPlaying = this.audioPlayings[audioName];
        audioPlaying.forEach(function (audioID) {
            if (cc.audioEngine.isLoop(audioID)) {
                isAudioLoop = true;
            }
        });
        return isAudioLoop;
    };
    G1009SFXPlayerActor = __decorate([
        ccclass
    ], G1009SFXPlayerActor);
    return G1009SFXPlayerActor;
}(Slot45_sound_player_1.default));
exports.default = G1009SFXPlayerActor;

cc._RF.pop();