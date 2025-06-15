
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/sound/ak-g1009-sfs-player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18531Kgo0RPV66laLYPkKce', 'ak-g1009-sfs-player');
// Script/base/sound/ak-g1009-sfs-player.ts

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
}(aka_g1009_sound_player_1.default));
exports.default = G1009SFXPlayerActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zb3VuZC9hay1nMTAwOS1zZnMtcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUE2RDtBQUV2RCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpRCx1Q0FBcUI7SUFBdEU7UUFBQSxxRUEwTkM7UUF4TkcsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixtQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixtQkFBYSxHQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7SUFxTnpDLENBQUM7SUFuTmEsbUNBQUssR0FBZjtRQUNJLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUM1RTtZQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFFTyxtREFBcUIsR0FBN0IsVUFBOEIsT0FBZSxFQUFFLFNBQWlCLEVBQUUsTUFBZTtRQUU3RSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3BDLElBQUksSUFBSSxDQUFD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LENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFTSw4Q0FBZ0IsR0FBdkIsVUFBd0IsU0FBUztRQUU3QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUN0QztZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDOUM7SUFDTCxDQUFDO0lBRU0sNENBQWMsR0FBckIsVUFBc0IsU0FBUztRQUUzQixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsT0FBTztZQUNsQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNsQztnQkFDSSxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBek5nQixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQTBOdkM7SUFBRCwwQkFBQztDQTFORCxBQTBOQyxDQTFOZ0QsZ0NBQXFCLEdBME5yRTtrQkExTm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHMTAwOVNvdW5kUGxheWVyQWN0b3IgZnJvbSBcIi4vYWthLWcxMDA5LXNvdW5kLXBsYXllclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5U0ZYUGxheWVyQWN0b3IgZXh0ZW5kcyBHMTAwOVNvdW5kUGxheWVyQWN0b3Ige1xuXG4gICAgaXNNdXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgbXV0ZVZvbHVtZTogbnVtYmVyID0gMTtcbiAgICBhdWRpb1BsYXlpbmdzOiBhbnkgPSB7fTtcbiAgICB0d2VlbkZhZGVPdXRzOiBjYy5Ud2VlbiA9IGNjLnR3ZWVuKCk7XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMCwgbGVuZ3RoID0gdGhpcy5hdWRpb0NsaXBzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjbGlwID0gdGhpcy5hdWRpb0NsaXBzW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9QbGF5aW5nc1tjbGlwLm5hbWVdID0gW107XG4gICAgICAgICAgICB0aGlzLnR3ZWVuRmFkZU91dHNbY2xpcC5uYW1lXSA9IGNjLnR3ZWVuKCk7XG4gICAgICAgIH1cbiAgICB9XG4gIFxuICAgIHByaXZhdGUgaGFuZGxlQXVkaW9DbGlwTG9hZGVkKGF1ZGlvSUQ6IG51bWJlciwgYXVkaW9OYW1lOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbik6IHZvaWQge1xuXG4gICAgICAgIGxldCBzdGFydExvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hdWRpb0NsaXBzW2F1ZGlvTmFtZV0ub25jZShcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXVkaW9QbGF5aW5nc1thdWRpb05hbWVdLmluZGV4T2YoYXVkaW9JRCkgPT0gLTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChhdWRpb0lEKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB0b3RhbExvYWRUaW1lID0gKERhdGUubm93KCkgLSBzdGFydExvYWRUaW1lKSAvIDEwMDA7XG4gICAgICAgICAgICBpZiAodG90YWxMb2FkVGltZSA+IHRoaXMuR2V0QXVkaW9EdXJhdGlvbihhdWRpb05hbWUpICYmIGlzTG9vcCA9PSBmYWxzZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLlN0b3AoYXVkaW9OYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBhdWRpb0N1cnJlbnRUaW1lID0gdG90YWxMb2FkVGltZSAlIHRoaXMuR2V0QXVkaW9EdXJhdGlvbihhdWRpb05hbWUpO1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEN1cnJlbnRUaW1lKGF1ZGlvSUQsIGF1ZGlvQ3VycmVudFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgQWRkQXVkaW8oYXVkaW9DbGlwOiBjYy5BdWRpb0NsaXApOiB2b2lkIHtcbiAgICAgIFxuICAgICAgICBpZiAoYXVkaW9DbGlwIGluc3RhbmNlb2YgY2MuQXVkaW9DbGlwICYmIHRoaXMuYXVkaW9DbGlwc1thdWRpb0NsaXAubmFtZV0gPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5hdWRpb0NsaXBzW2F1ZGlvQ2xpcC5uYW1lXSA9IGF1ZGlvQ2xpcDtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DbGlwcy5wdXNoKGF1ZGlvQ2xpcCk7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvUGxheWluZ3NbYXVkaW9DbGlwLm5hbWVdID0gW107XG4gICAgICAgICAgICB0aGlzLnR3ZWVuRmFkZU91dHNbYXVkaW9DbGlwLm5hbWVdID0gY2MudHdlZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBQbGF5KGF1ZGlvTmFtZTogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIFxuICAgICAgICBpZiAodGhpcy5hdWRpb0NsaXBzW2F1ZGlvTmFtZV0gIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW9DbGlwc1thdWRpb05hbWVdLCBpc0xvb3ApO1xuICAgICAgICAgICAgdGhpcy5hdWRpb1BsYXlpbmdzW2F1ZGlvTmFtZV0ucHVzaChhdWRpb0lEKTtcblxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JRCwgZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuanMuYXJyYXkuZmFzdFJlbW92ZSh0aGlzLmF1ZGlvUGxheWluZ3NbYXVkaW9OYW1lXSwgaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0oYXVkaW9JRCkuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5hdWRpb0NsaXBzW2F1ZGlvTmFtZV0ubG9hZGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXVkaW9DbGlwTG9hZGVkKGF1ZGlvSUQsIGF1ZGlvTmFtZSwgaXNMb29wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBTdG9wKGF1ZGlvTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICBcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9DbGlwc1thdWRpb05hbWVdICE9IG51bGwgJiYgdGhpcy5hdWRpb1BsYXlpbmdzW2F1ZGlvTmFtZV0ubGVuZ3RoID4gMClcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuYXVkaW9QbGF5aW5nc1thdWRpb05hbWVdLmxlbmd0aDsgaW5kZXgrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRCA9IHRoaXMuYXVkaW9QbGF5aW5nc1thdWRpb05hbWVdW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KGF1ZGlvSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hdWRpb1BsYXlpbmdzW2F1ZGlvTmFtZV0gPSBbXTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5GYWRlT3V0c1thdWRpb05hbWVdLnN0b3AoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFN0b3BXaXRoRmFkZU91dChhdWRpb05hbWU6IHN0cmluZywgZHVyYXRpb246IG51bWJlcikge1xuICAgICAgIFxuICAgICAgICBpZiAodGhpcy5hdWRpb0NsaXBzW2F1ZGlvTmFtZV0gIT0gbnVsbCAmJiB0aGlzLmF1ZGlvUGxheWluZ3NbYXVkaW9OYW1lXS5sZW5ndGggPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgYXVkaW9JRHMgPSB0aGlzLmF1ZGlvUGxheWluZ3NbYXVkaW9OYW1lXTtcbiAgICAgICAgICAgIGxldCBzYXZlVm9sdW1lID0gY2MuYXVkaW9FbmdpbmUuZ2V0Vm9sdW1lKGF1ZGlvSURzWzBdKTtcbiAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgX3ZvbHVtZTogc2F2ZVZvbHVtZSxcbiAgICAgICAgICAgICAgICBnZXQgdm9sdW1lKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdm9sdW1lXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQgdm9sdW1lKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92b2x1bWUgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvSURzLmZvckVhY2goaXRlbSA9PiBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaXRlbSwgdGhpcy5fdm9sdW1lKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IHR3ZWVuRmFkZSA9IHRoaXMudHdlZW5GYWRlT3V0c1thdWRpb05hbWVdO1xuICAgICAgICAgICAgdHdlZW5GYWRlLnN0b3AoKVxuICAgICAgICAgICAgdHdlZW5GYWRlID0gY2MudHdlZW4ob2JqKTtcbiAgICAgICAgICAgIHR3ZWVuRmFkZS50byhkdXJhdGlvbiwge1xuICAgICAgICAgICAgICAgIHZvbHVtZTogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0d2VlbkZhZGUuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYXVkaW9JRHMuZm9yRWFjaChpdGVtID0+IGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpdGVtLCBzYXZlVm9sdW1lKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5TdG9wKGF1ZGlvTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHR3ZWVuRmFkZS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFN0b3BBbGwoKTogdm9pZCB7XG4gICAgICAgXG4gICAgICAgIGZvciAobGV0IGF1ZGlvTmFtZSBpbiB0aGlzLmF1ZGlvUGxheWluZ3MpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuU3RvcChhdWRpb05hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFN0b3BBbGxOb25Mb29waW5nU2Z4KCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBhdWRpb05hbWUgaW4gdGhpcy5hdWRpb1BsYXlpbmdzKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuQ2hlY2tBdWRpb0xvb3AoYXVkaW9OYW1lKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLlN0b3AoYXVkaW9OYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBTdG9wQWxsV2l0aEZhZGVPdXQoZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xuIFxuICAgICAgICBmb3IgKGxldCBhdWRpb05hbWUgaW4gdGhpcy5hdWRpb1BsYXlpbmdzKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLlN0b3BXaXRoRmFkZU91dChhdWRpb05hbWUsIGR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBTdG9wQWxsTm9uTG9vcGluZ1NmeFdpdGhGYWRlT3V0KGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBcbiAgICAgICAgZm9yIChsZXQgYXVkaW9OYW1lIGluIHRoaXMuYXVkaW9QbGF5aW5ncylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCF0aGlzLkNoZWNrQXVkaW9Mb29wKGF1ZGlvTmFtZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5TdG9wV2l0aEZhZGVPdXQoYXVkaW9OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgTXV0ZSgpOiB2b2lkIHtcbiAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNNdXRlID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmlzTXV0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm11dGVWb2x1bWUgPSBjYy5hdWRpb0VuZ2luZS5nZXRFZmZlY3RzVm9sdW1lKCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFVubXV0ZSgpOiB2b2lkIHtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmlzTXV0ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5pc011dGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5tdXRlVm9sdW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBJc011dGUoKTogYm9vbGVhbiB7XG4gICBcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNNdXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRWb2x1bWUodm9sdW1lKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc011dGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubXV0ZVZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodm9sdW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBHZXRWb2x1bWUoKTogbnVtYmVyIHtcbiAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc011dGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm11dGVWb2x1bWU7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUuZ2V0RWZmZWN0c1ZvbHVtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIEdldEF1ZGlvRHVyYXRpb24oYXVkaW9OYW1lKTogYW55IHtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvQ2xpcHNbYXVkaW9OYW1lXSAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdWRpb0NsaXBzW2F1ZGlvTmFtZV0uZHVyYXRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgQ2hlY2tBdWRpb0xvb3AoYXVkaW9OYW1lKTogYm9vbGVhbiB7XG4gICAgICAgXG4gICAgICAgIGxldCBpc0F1ZGlvTG9vcCA9IGZhbHNlO1xuICAgICAgICBsZXQgYXVkaW9QbGF5aW5nID0gdGhpcy5hdWRpb1BsYXlpbmdzW2F1ZGlvTmFtZV07XG4gICAgICAgIGF1ZGlvUGxheWluZy5mb3JFYWNoKGZ1bmN0aW9uIChhdWRpb0lEKSB7XG4gICAgICAgICAgICBpZiAoY2MuYXVkaW9FbmdpbmUuaXNMb29wKGF1ZGlvSUQpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlzQXVkaW9Mb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGlzQXVkaW9Mb29wO1xuICAgIH1cbn1cbiJdfQ==