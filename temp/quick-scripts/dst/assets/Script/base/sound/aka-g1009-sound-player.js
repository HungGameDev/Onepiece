
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/sound/aka-g1009-sound-player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76a48WfRH5EWLqxuA1k8KXj', 'aka-g1009-sound-player');
// Script/base/sound/aka-g1009-sound-player.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zb3VuZC9ha2EtZzEwMDktc291bmQtcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBK0JDO1FBNUJlLGdCQUFVLEdBQW1CLEVBQUUsQ0FBQzs7SUE0QmhELENBQUM7SUExQmEsc0NBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVTLDZDQUFhLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLE9BQU87WUFDdEQsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQzVFO1lBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBRU0sd0NBQVEsR0FBZixVQUFnQixTQUFTO1FBQ3JCLElBQUksU0FBUyxZQUFZLEVBQUUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUNoRjtZQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztZQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUM7SUFFTSx3Q0FBUSxHQUFmLFVBQWdCLElBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztJQUN6QyxDQUFDO0lBM0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkRBQ3FCO0lBSDNCLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBK0J6QztJQUFELDRCQUFDO0NBL0JELEFBK0JDLENBL0JrRCxFQUFFLENBQUMsU0FBUyxHQStCOUQ7a0JBL0JvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5U291bmRQbGF5ZXJBY3RvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByb3RlY3RlZCAgIGF1ZGlvQ2xpcHM6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRBdWRpb0NsaXAoKTtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIGluaXRBdWRpb0NsaXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXVkaW9DbGlwcyA9IHRoaXMuYXVkaW9DbGlwcy5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50ICE9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDAsIGxlbmd0aCA9IHRoaXMuYXVkaW9DbGlwcy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY2xpcCA9IHRoaXMuYXVkaW9DbGlwc1tpbmRleF07XG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ2xpcHNbY2xpcC5uYW1lXSA9IGNsaXA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgQWRkQXVkaW8oYXVkaW9DbGlwKTogdm9pZCB7XG4gICAgICAgIGlmIChhdWRpb0NsaXAgaW5zdGFuY2VvZiBjYy5BdWRpb0NsaXAgJiYgdGhpcy5hdWRpb0NsaXBzW2F1ZGlvQ2xpcC5uYW1lXSA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ2xpcHNbYXVkaW9DbGlwLm5hbWVdID0gYXVkaW9DbGlwO1xuICAgICAgICAgICAgdGhpcy5hdWRpb0NsaXBzLnB1c2goYXVkaW9DbGlwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBIYXNBdWRpbyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXVkaW9DbGlwc1tuYW1lXSAhPSBudWxsO1xuICAgIH1cbn1cbiJdfQ==