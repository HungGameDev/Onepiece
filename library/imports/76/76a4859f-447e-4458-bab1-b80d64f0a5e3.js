"use strict";
cc._RF.push(module, '76a48WfRH5EWLqxuA1k8KXj', 'Slot45-sound-player');
// Script/base/sound/Slot45-sound-player.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009SoundPlayerActor = /** @class */ (function (_super) {
    __extends(G1009SoundPlayerActor, _super);
    function G1009SoundPlayerActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioClips = [];
        return _this;
    }
    G1009SoundPlayerActor.prototype.onLoad = function () {
        this.initAudioClip();
    };
    G1009SoundPlayerActor.prototype.initAudioClip = function () {
        this.audioClips = this.audioClips.filter(function (element) {
            return element != null;
        });
        for (var index = 0, length = this.audioClips.length; index < length; index++) {
            var clip = this.audioClips[index];
            this.audioClips[clip.name] = clip;
        }
    };
    G1009SoundPlayerActor.prototype.AddAudio = function (audioClip) {
        if (audioClip instanceof cc.AudioClip && this.audioClips[audioClip.name] == null) {
            this.audioClips[audioClip.name] = audioClip;
            this.audioClips.push(audioClip);
        }
    };
    G1009SoundPlayerActor.prototype.HasAudio = function (name) {
        return this.audioClips[name] != null;
    };
    __decorate([
        property(cc.AudioClip)
    ], G1009SoundPlayerActor.prototype, "audioClips", void 0);
    G1009SoundPlayerActor = __decorate([
        ccclass
    ], G1009SoundPlayerActor);
    return G1009SoundPlayerActor;
}(cc.Component));
exports.default = G1009SoundPlayerActor;

cc._RF.pop();