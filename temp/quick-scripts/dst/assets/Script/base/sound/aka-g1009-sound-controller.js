
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/sound/aka-g1009-sound-controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zb3VuZC9ha2EtZzEwMDktc291bmQtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBc0U7QUFDdEUsNkRBQXdEO0FBQ3hELG1FQUE2RDtBQUV2RCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1RCw2Q0FBWTtJQWMvRDtRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQWRPLGtCQUFZLEdBQVEsSUFBSSxDQUFDO1FBR2pDLGlCQUFXLEdBQTBCLElBQUksQ0FBQztRQUcxQyxlQUFTLEdBQXdCLElBQUksQ0FBQztRQUV0QyxlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFHdkIsMkJBQXlCLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQzs7SUFDOUMsQ0FBQztrQ0FqQmdCLHlCQUF5QjtJQW1CaEMsMENBQU0sR0FBaEI7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QywyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEYsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENB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QUFDLFNBQVMsR0FrTWxFO2tCQWxNb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5pbXBvcnQgRzEwMDlTRlhQbGF5ZXJBY3RvciBmcm9tIFwiLi9hay1nMTAwOS1zZnMtcGxheWVyXCI7XG5pbXBvcnQgRzEwMDlNdXNpY1BsYXllckFjdG9yIGZyb20gXCIuL2FrYS1nMTAwOS1tdXNpYy1wbGF5ZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOVNvdW5kQ29udHJvbGxlckFjdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IEcxMDA5U291bmRDb250cm9sbGVyQWN0b3I7XG4gICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IGFueSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoRzEwMDlNdXNpY1BsYXllckFjdG9yKVxuICAgIG11c2ljUGxheWVyOiBHMTAwOU11c2ljUGxheWVyQWN0b3IgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KEcxMDA5U0ZYUGxheWVyQWN0b3IpXG4gICAgc2Z4UGxheWVyOiBHMTAwOVNGWFBsYXllckFjdG9yID0gbnVsbDtcblxuICAgIGlzTXV0ZVNmeDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzTXV0ZU11c2ljOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNNdXRlQWxsOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgRzEwMDlTb3VuZENvbnRyb2xsZXJBY3Rvci5JbnN0YW5jZSA9IHRoaXM7IFxuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiTXVzaWMtb25cIiwgdGhpcy5Vbm11dGVNdXNpYy5iaW5kKHRoaXMpKTtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIk11c2ljLW9mZlwiLCB0aGlzLk11dGVNdXNpYy5iaW5kKHRoaXMpKTtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlNvdW5kLW9uXCIsIHRoaXMuVW5tdXRlU2Z4LmJpbmQodGhpcykpO1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU291bmQtb2ZmXCIsIHRoaXMuTXV0ZVNmeC5iaW5kKHRoaXMpKTtcbiAgICAgICAgXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5hYmxlU0ZYS2V5JykgPT0gXCJmYWxzZVwiID8gdGhpcy5NdXRlU2Z4KCkgOiB0aGlzLlVubXV0ZVNmeCgpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuYWJsZUJHTUtleScpID09IFwiZmFsc2VcIiA/IHRoaXMuTXV0ZU11c2ljKCkgOiB0aGlzLlVubXV0ZU11c2ljKCk7XG4gICAgfVxuXG4gICAgcHVibGljIE11dGVTZngoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNNdXRlU2Z4ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZnhQbGF5ZXIuTXV0ZSgpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VuYWJsZVNGWEtleScsIFwiZmFsc2VcIik7XG4gICAgfVxuXG4gICAgcHVibGljIFVubXV0ZVNmeCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc011dGVTZnggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZnhQbGF5ZXIuVW5tdXRlKCk7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW5hYmxlU0ZYS2V5JyxcInRydWVcIik7XG4gICAgfVxuXG4gICAgcHVibGljIE11dGVNdXNpYygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc011dGVNdXNpYyA9IHRydWU7XG4gICAgICAgIHRoaXMubXVzaWNQbGF5ZXIuTXV0ZSgpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VuYWJsZUJHTUtleScsIFwiZmFsc2VcIik7XG4gICAgfVxuXG4gICAgcHVibGljIFVubXV0ZU11c2ljKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzTXV0ZU11c2ljID0gZmFsc2U7XG4gICAgICAgIHRoaXMubXVzaWNQbGF5ZXIuVW5tdXRlKCk7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW5hYmxlQkdNS2V5JywgXCJ0cnVlXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBBZGRTZngobmFtZTogYW55KSB7XG4gICAgICAgIHRoaXMuc2Z4UGxheWVyLkFkZEF1ZGlvKG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBBZGRNdXNpYyhuYW1lKSB7XG4gICAgICAgIHRoaXMubXVzaWNQbGF5ZXIuQWRkQXVkaW8obmFtZSk7XG4gICAgfVxuXG4gICAgcHVibGljIFBsYXlTZngobmFtZTogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICBcbiAgICAgICAgdGhpcy5zZnhQbGF5ZXIuUGxheShuYW1lLCBpc0xvb3ApO1xuICAgIH1cblxuICAgIHB1YmxpYyBTdG9wU2Z4KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgIFxuICAgICAgICB0aGlzLnNmeFBsYXllci5TdG9wKG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTdG9wU2Z4V2l0aEZhZGVPdXQobmFtZTogc3RyaW5nLCBkdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgXG4gICAgICAgIHRoaXMuc2Z4UGxheWVyLlN0b3BXaXRoRmFkZU91dChuYW1lLCBkdXJhdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIFN0b3BBbGxTZngoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Z4UGxheWVyLlN0b3BBbGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU3RvcEFsbE5vbkxvb3BpbmdTZngoKTogdm9pZCB7XG4gICAgICAgXG5cbiAgICAgICAgdGhpcy5zZnhQbGF5ZXIuU3RvcEFsbE5vbkxvb3BpbmdTZngoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU3RvcEFsbFNmeFdpdGhGYWRlT3V0KGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZnhQbGF5ZXIuU3RvcEFsbFdpdGhGYWRlT3V0KGR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU3RvcEFsbE5vbkxvb3BpbmdTZnhXaXRoRmFkZU91dChkdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgIFxuXG4gICAgICAgIHRoaXMuc2Z4UGxheWVyLlN0b3BBbGxOb25Mb29waW5nU2Z4V2l0aEZhZGVPdXQoZHVyYXRpb24pO1xuICAgIH1cblxuICAgIHB1YmxpYyBIYXNTZngobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLnNmeFBsYXllci5IYXNBdWRpbyhuYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgUGxheU11c2ljKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgIFxuICAgICAgICB0aGlzLm11c2ljUGxheWVyLlBsYXkobmFtZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIFN0b3BNdXNpYyhuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBcbiAgICAgICAgdGhpcy5tdXNpY1BsYXllci5TdG9wKG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTdG9wTXVzaWNXaXRoRmFkZU91dChuYW1lOiBzdHJpbmcsIGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBcbiAgICAgICAgdGhpcy5tdXNpY1BsYXllci5TdG9wV2l0aEZhZGVPdXQobmFtZSwgZHVyYXRpb24pO1xuICAgIH1cblxuICAgIHB1YmxpYyBIYXNNdXNpYyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLm11c2ljUGxheWVyLkhhc0F1ZGlvKG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBUb2dnbGVNdXRlTXVzaWMoKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc011dGVNdXNpYylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5Vbm11dGVNdXNpYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5NdXRlTXVzaWMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBJc011dGVNdXNpYygpOiBib29sZWFuIHtcbiAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5pc011dGVNdXNpYztcbiAgICB9XG5cbiAgICBwdWJsaWMgVG9nZ2xlTXV0ZVNmeCgpOiB2b2lkIHtcbiAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc011dGVTZngpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuVW5tdXRlU2Z4KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLk11dGVTZngoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgIFxuICAgIHB1YmxpYyBJc011dGVTZngoKTogYm9vbGVhbiB7XG4gICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5pc011dGVTZng7XG4gICAgfVxuXG4gICAgcHVibGljIElzTXV0ZVNvdW5kKCk6IGJvb2xlYW4ge1xuICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5pc011dGVBbGw7XG4gICAgfVxuXG4gICAgcHVibGljIFNldE11c2ljVm9sdW1lKHZvbHVtZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICBcbiAgICAgICAgdGhpcy5tdXNpY1BsYXllci5TZXRWb2x1bWUodm9sdW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0TXVzaWNWb2x1bWUoKTogTnVtYmVyIHtcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMubXVzaWNQbGF5ZXIuR2V0Vm9sdW1lKCk7XG4gICAgfVxuXG4gICAgcHVibGljIFNldFNmeFZvbHVtZSh2b2x1bWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgXG4gICAgICAgIHRoaXMuc2Z4UGxheWVyLlNldFZvbHVtZSh2b2x1bWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRTZnhWb2x1bWUoKTogbnVtYmVyIHtcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Z4UGxheWVyLkdldFZvbHVtZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRNdXNpY0R1cmF0aW9uKG5hbWU6IHN0cmluZyk6IG51bWJlciB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubXVzaWNQbGF5ZXIuR2V0QXVkaW9EdXJhdGlvbihuYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0U2Z4RHVyYXRpb24obmFtZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5zZnhQbGF5ZXIuR2V0QXVkaW9EdXJhdGlvbihuYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0Q3VycmVudE11c2ljKCk6IGFueSB7ICAgXG4gICAgICAgIHJldHVybiB0aGlzLm11c2ljUGxheWVyLkdldEF1ZGlvUGxheWluZygpO1xuICAgIH1cbn1cbiJdfQ==