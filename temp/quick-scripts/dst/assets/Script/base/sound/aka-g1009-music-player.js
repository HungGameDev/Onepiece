
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/sound/aka-g1009-music-player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zb3VuZC9ha2EtZzEwMDktbXVzaWMtcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUE2RDtBQUV2RCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtRCx5Q0FBcUI7SUFBeEU7UUFBQSxxRUFzSkM7UUFwSkcsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixzQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFDOUIsb0JBQWMsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUM1QixrQkFBWSxHQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7SUFnSnhDLENBQUM7SUE5SVcscURBQXFCLEdBQTdCLFVBQThCLE9BQWUsRUFBRSxTQUFpQixFQUFFLE1BQWU7UUFFN0UsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNwQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQ3RDO2dCQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuQyxPQUFPO2FBQ1Y7WUFFRCxJQUFJLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDeEQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLEVBQ3ZFO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDeEI7aUJBRUQ7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QyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdGO0lBQ0wsQ0FBQztJQUVNLCtDQUFlLEdBQXRCO1FBRUksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQztJQXJKZ0IscUJBQXFCO1FBRHpDLE9BQU87T0FDYSxxQkFBcUIsQ0FzSnpDO0lBQUQsNEJBQUM7Q0F0SkQsQUFzSkMsQ0F0SmtELGdDQUFxQixHQXNKdkU7a0JBdEpvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRzEwMDlTb3VuZFBsYXllckFjdG9yIGZyb20gXCIuL2FrYS1nMTAwOS1zb3VuZC1wbGF5ZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOU11c2ljUGxheWVyQWN0b3IgZXh0ZW5kcyBHMTAwOVNvdW5kUGxheWVyQWN0b3Ige1xuXG4gICAgaXNNdXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgbXV0ZVZvbHVtZTogbnVtYmVyID0gMTtcbiAgICBhdWRpb1BsYXlpbmdOYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIGF1ZGlvUGxheWluZ0lEOiBudW1iZXIgPSAtMTtcbiAgICB0d2VlbkZhZGVPdXQ6IGNjLlR3ZWVuID0gY2MudHdlZW4oKTtcbiAgIFxuICAgIHByaXZhdGUgaGFuZGxlQXVkaW9DbGlwTG9hZGVkKGF1ZGlvSUQ6IG51bWJlciwgYXVkaW9OYW1lOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbikge1xuICAgICAgICBcbiAgICAgICAgbGV0IHN0YXJ0TG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmF1ZGlvQ2xpcHNbYXVkaW9OYW1lXS5vbmNlKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdWRpb1BsYXlpbmdOYW1lICE9IGF1ZGlvTmFtZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KGF1ZGlvSUQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRvdGFsTG9hZFRpbWUgPSAoRGF0ZS5ub3coKSAtIHN0YXJ0TG9hZFRpbWUpIC8gMTAwMDtcbiAgICAgICAgICAgIGlmICh0b3RhbExvYWRUaW1lID4gdGhpcy5HZXRBdWRpb0R1cmF0aW9uKGF1ZGlvTmFtZSkgJiYgaXNMb29wID09IGZhbHNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuU3RvcChhdWRpb05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBhdWRpb0N1cnJlbnRUaW1lID0gdG90YWxMb2FkVGltZSAlIHRoaXMuR2V0QXVkaW9EdXJhdGlvbihhdWRpb05hbWUpO1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEN1cnJlbnRUaW1lKGF1ZGlvSUQsIGF1ZGlvQ3VycmVudFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIFBsYXkoYXVkaW9OYW1lOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbikge1xuICAgICAgIFxuICAgICAgICBpZiAodGhpcy5hdWRpb0NsaXBzW2F1ZGlvTmFtZV0gIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5hdWRpb0NsaXBzW2F1ZGlvTmFtZV0sIGlzTG9vcCk7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvUGxheWluZ05hbWUgPSBhdWRpb05hbWU7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvUGxheWluZ0lEID0gYXVkaW9JRDtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmF1ZGlvQ2xpcHNbYXVkaW9OYW1lXS5sb2FkZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdWRpb0NsaXBMb2FkZWQoYXVkaW9JRCwgYXVkaW9OYW1lLCBpc0xvb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFN0b3AoYXVkaW9OYW1lOiBzdHJpbmcpIHtcblxuICAgICAgICBhdWRpb05hbWUgPSBhdWRpb05hbWUgfHwgdGhpcy5hdWRpb1BsYXlpbmdOYW1lO1xuICAgICAgICBpZiAoYXVkaW9OYW1lICE9IHRoaXMuYXVkaW9QbGF5aW5nTmFtZSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHdlZW5GYWRlT3V0LnN0b3AoKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgICAgIHRoaXMuYXVkaW9QbGF5aW5nTmFtZSA9IFwiXCI7XG4gICAgfVxuICAgIHB1YmxpYyBTdG9wV2l0aEZhZGVPdXQoYXVkaW9OYW1lOiBzdHJpbmcsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgIFxuICAgICAgICBpZiAoYXJndW1lbnRzWzFdID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgYXVkaW9OYW1lID0gdGhpcy5hdWRpb1BsYXlpbmdOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF1ZGlvTmFtZSAhPT0gdGhpcy5hdWRpb1BsYXlpbmdOYW1lKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2F2ZVZvbHVtZSA9IGNjLmF1ZGlvRW5naW5lLmdldFZvbHVtZSh0aGlzLmF1ZGlvUGxheWluZ0lEKTtcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgIF92b2x1bWU6IHNhdmVWb2x1bWUsXG4gICAgICAgICAgICBnZXQgdm9sdW1lKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl92b2x1bWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgdm9sdW1lKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZvbHVtZSA9IHZhbDtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUodGhpcy5hdWRpb1BsYXlpbmdJRCwgdGhpcy5fdm9sdW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50d2VlbkZhZGVPdXQuc3RvcCgpXG4gICAgICAgIHRoaXMudHdlZW5GYWRlT3V0ID0gY2MudHdlZW4ob2JqKTtcbiAgICAgICAgdGhpcy50d2VlbkZhZGVPdXQudG8oZHVyYXRpb24sIHsgdm9sdW1lOiAwIH0pO1xuICAgICAgICB0aGlzLnR3ZWVuRmFkZU91dC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmF1ZGlvUGxheWluZ0lELCBzYXZlVm9sdW1lKTtcbiAgICAgICAgICAgIHRoaXMuU3RvcChhdWRpb05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50d2VlbkZhZGVPdXQuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgTXV0ZSgpIHtcbiAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNNdXRlID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmlzTXV0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm11dGVWb2x1bWUgPSBjYy5hdWRpb0VuZ2luZS5nZXRNdXNpY1ZvbHVtZSgpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgVW5tdXRlKCkge1xuICAgIFxuICAgICAgICBpZiAodGhpcy5pc011dGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaXNNdXRlID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh0aGlzLm11dGVWb2x1bWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIElzTXV0ZSgpIHtcbiAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmlzTXV0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0Vm9sdW1lKHZvbHVtZTogbnVtYmVyKSB7XG4gICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNNdXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm11dGVWb2x1bWUgPSB2b2x1bWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh2b2x1bWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIEdldFZvbHVtZSgpIHtcbiAgIFxuICAgICAgICBpZiAodGhpcy5pc011dGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm11dGVWb2x1bWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUuZ2V0TXVzaWNWb2x1bWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBHZXRBdWRpb0R1cmF0aW9uKGF1ZGlvTmFtZTogc3RyaW5nKSB7XG4gICAgIFxuICAgICAgICBpZiAodGhpcy5hdWRpb0NsaXBzW2F1ZGlvTmFtZV0gIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXVkaW9DbGlwc1thdWRpb05hbWVdLl9hdWRpbyA/IHRoaXMuYXVkaW9DbGlwc1thdWRpb05hbWVdLl9hdWRpby5kdXJhdGlvbiA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0QXVkaW9QbGF5aW5nKCkge1xuICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmF1ZGlvUGxheWluZ05hbWU7XG4gICAgfVxufVxuIl19