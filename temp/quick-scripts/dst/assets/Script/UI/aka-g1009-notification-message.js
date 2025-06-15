
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/aka-g1009-notification-message.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2685fqhaCNKlr57dPCxPmoP', 'aka-g1009-notification-message');
// Script/UI/aka-g1009-notification-message.ts

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
var aka_g1009_number_converter_1 = require("../base/Util/aka-g1009-number-converter");
var aka_g1009_event_manager_1 = require("../base/events/aka-g1009-event-manager");
var aka_g1009_sprite_frame_provider_1 = require("./provider/aka-g1009-sprite-frame-provider");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.lineMessage = null;
        _this.winNumber = null;
        _this.winPoint = null;
        _this.winIcon = null;
        _this.totalWinPoint = null;
        _this.SymbolFormat = 'symbol_%s';
        _this.isFreespins = false;
        _this.currentPoint = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.register();
    };
    NewClass.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinStarted", this.reset.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("NotificationWinMessage", this.onMessages.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SetTotalWin", this.onSetTotalWin.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("StopImmediately", this.onStopImmediately.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("resume", this.onResume.bind(this));
    };
    NewClass.prototype.onResume = function (data) {
        if (data.isFreespins) {
            this.isFreespins = true;
            this.totalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(data.totalWinPoint);
        }
    };
    NewClass.prototype.onMessages = function (mesageData) {
        if (mesageData.WinPoint == 0) {
            return;
        }
        this.lineMessage.active = false;
        this.label.node.active = false;
        if (!mesageData.isAllWin) {
            if (mesageData.WinSymbol != "Scatter" && mesageData.WinSymbol != "Bonus") {
                this.winNumber.string = mesageData.WinNumber[0] + 1;
                this.winPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(mesageData.WinPoint);
                this.winIcon.spriteFrame = aka_g1009_sprite_frame_provider_1.G1009SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, mesageData.WinSymbol));
                this.lineMessage.active = true;
            }
        }
    };
    NewClass.prototype.onSetTotalWin = function (point) {
        var objTween = {
            value: this.currentPoint
        };
        this.totalWinPoint.node.opacity = 255;
        this.countPoint(objTween, point, 0.25);
    };
    NewClass.prototype.countPoint = function (objTween, point, duration, delay, callback) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        if (callback === void 0) { callback = function () { }; }
        this.tweenCountPoint = cc.tween(objTween)
            .delay(delay)
            .to(duration, { value: point }, {
            progress: function (start, end, current, ratio) {
                _this.totalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(Math.floor(current));
                return start + (end - start) * ratio;
            }
        })
            .call(function () {
            _this.totalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(point);
            _this.currentPoint = point;
        });
        this.tweenCountPoint.start();
    };
    NewClass.prototype.onEnterFreespins = function () {
        this.isFreespins = true;
    };
    NewClass.prototype.onFeatureWinCompleted = function (data) {
        if (data && data.hitRule == "bonus") {
            return;
        }
        this.isFreespins = false;
        this.reset();
    };
    NewClass.prototype.reset = function () {
        var _this = this;
        if (!this.isFreespins) {
            cc.tween(this.totalWinPoint.node)
                .delay(0.25)
                .to(0.25, { opacity: 0 })
                .call(function () {
                _this.currentPoint = 0;
                _this.totalWinPoint.string = "";
            }).start();
        }
        this.lineMessage.active = false;
        this.label.node.active = false;
    };
    NewClass.prototype.onStopImmediately = function () {
        if (!this.isFreespins) {
            if (this.currentPoint > 0) {
                this.tweenCountPoint && this.tweenCountPoint.stop();
                this.totalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
                this.totalWinPoint.node.opacity = 255;
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "lineMessage", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "winNumber", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "winPoint", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "winIcon", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "totalWinPoint", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvYWthLWcxMDA5LW5vdGlmaWNhdGlvbi1tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNGQUFnRTtBQUNoRSxrRkFBMkU7QUFDM0UsOEZBQTZGO0FBRXZGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa0lDO1FBL0hBLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0Isa0JBQVksR0FBVyxXQUFXLENBQUM7UUFFM0IsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0Isa0JBQVksR0FBVyxDQUFDLENBQUM7O0lBMEdsQyxDQUFDO0lBeEdVLHlCQUFNLEdBQWhCO1FBQ0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTywyQkFBUSxHQUFoQjtRQUNDLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRSwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRiwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElB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QUFDLEtBQUssQ0FBQzttREFDWTtJQWxCWCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa0k1QjtJQUFELGVBQUM7Q0FsSUQsQUFrSUMsQ0FsSXFDLEVBQUUsQ0FBQyxTQUFTLEdBa0lqRDtrQkFsSW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRzEwMDlVdGlsIGZyb20gXCIuLi9iYXNlL1V0aWwvYWthLWcxMDA5LW51bWJlci1jb252ZXJ0ZXJcIjtcbmltcG9ydCB7IEcxMDA5RXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uL2Jhc2UvZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBHMTAwOVNwcml0ZVByb3ZpZGVyTWFuYWdlckFjdG9yIH0gZnJvbSBcIi4vcHJvdmlkZXIvYWthLWcxMDA5LXNwcml0ZS1mcmFtZS1wcm92aWRlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0bGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuXHRAcHJvcGVydHkoY2MuTm9kZSlcblx0bGluZU1lc3NhZ2U6IGNjLk5vZGUgPSBudWxsO1xuXG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0d2luTnVtYmVyOiBjYy5MYWJlbCA9IG51bGw7XG5cblx0QHByb3BlcnR5KGNjLkxhYmVsKVxuXHR3aW5Qb2ludDogY2MuTGFiZWwgPSBudWxsO1xuXG5cdEBwcm9wZXJ0eShjYy5TcHJpdGUpXG5cdHdpbkljb246IGNjLlNwcml0ZSA9IG51bGw7XG5cblx0QHByb3BlcnR5KGNjLkxhYmVsKVxuXHR0b3RhbFdpblBvaW50OiBjYy5MYWJlbCA9IG51bGw7XG5cblx0U3ltYm9sRm9ybWF0OiBzdHJpbmcgPSAnc3ltYm9sXyVzJztcblxuXHRwcml2YXRlIGlzRnJlZXNwaW5zOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgdHdlZW5Db3VudFBvaW50OiBjYy5Ud2Vlbjtcblx0cHJpdmF0ZSBjdXJyZW50UG9pbnQ6IG51bWJlciA9IDA7XG5cblx0cHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcblx0XHR0aGlzLnJlZ2lzdGVyKCk7XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVyKCk6IHZvaWQge1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTcGluU3RhcnRlZFwiLCB0aGlzLnJlc2V0LmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJOb3RpZmljYXRpb25XaW5NZXNzYWdlXCIsIHRoaXMub25NZXNzYWdlcy5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU2V0VG90YWxXaW5cIiwgdGhpcy5vblNldFRvdGFsV2luLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTdG9wSW1tZWRpYXRlbHlcIiwgdGhpcy5vblN0b3BJbW1lZGlhdGVseS5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiRW50ZXJGcmVlc3BpbnNcIiwgdGhpcy5vbkVudGVyRnJlZXNwaW5zLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJmZWF0dXJlV2luQ29tcGxldGVkXCIsIHRoaXMub25GZWF0dXJlV2luQ29tcGxldGVkLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJyZXN1bWVcIiwgdGhpcy5vblJlc3VtZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHByaXZhdGUgb25SZXN1bWUoZGF0YTogYW55KSB7XG5cdFx0aWYgKGRhdGEuaXNGcmVlc3BpbnMpXG5cdFx0e1xuXHRcdFx0dGhpcy5pc0ZyZWVzcGlucyA9IHRydWU7XG5cdFx0XHR0aGlzLnRvdGFsV2luUG9pbnQuc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0V2l0aG91dENoYXJhY3RlcihkYXRhLnRvdGFsV2luUG9pbnQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb25NZXNzYWdlcyhtZXNhZ2VEYXRhOiBhbnkpIHtcblx0XHRpZiAobWVzYWdlRGF0YS5XaW5Qb2ludCA9PSAwKVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5saW5lTWVzc2FnZS5hY3RpdmUgPSBmYWxzZTtcblx0XHR0aGlzLmxhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0aWYgKCFtZXNhZ2VEYXRhLmlzQWxsV2luKSAgICAgICBcblx0XHR7XG5cdFx0XHRpZiAobWVzYWdlRGF0YS5XaW5TeW1ib2wgIT0gXCJTY2F0dGVyXCIgJiYgbWVzYWdlRGF0YS5XaW5TeW1ib2wgIT0gXCJCb251c1wiKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLndpbk51bWJlci5zdHJpbmcgPSBtZXNhZ2VEYXRhLldpbk51bWJlclswXSArIDE7XG5cdFx0XHRcdHRoaXMud2luUG9pbnQuc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0V2l0aG91dENoYXJhY3RlcihtZXNhZ2VEYXRhLldpblBvaW50KTtcblx0XHRcdFx0dGhpcy53aW5JY29uLnNwcml0ZUZyYW1lID0gRzEwMDlTcHJpdGVQcm92aWRlck1hbmFnZXJBY3Rvci5JbnN0YW5jZSgpLkdldEZyYW1lKGNjLmpzLmZvcm1hdFN0cih0aGlzLlN5bWJvbEZvcm1hdCwgbWVzYWdlRGF0YS5XaW5TeW1ib2wpKTtcblx0XHRcdFx0dGhpcy5saW5lTWVzc2FnZS5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb25TZXRUb3RhbFdpbihwb2ludDogbnVtYmVyKTogdm9pZCB7XG5cdFx0bGV0IG9ialR3ZWVuID0ge1xuXHRcdFx0dmFsdWU6IHRoaXMuY3VycmVudFBvaW50XG5cdFx0fTtcblx0XHR0aGlzLnRvdGFsV2luUG9pbnQubm9kZS5vcGFjaXR5ID0gMjU1O1xuXHRcdHRoaXMuY291bnRQb2ludChvYmpUd2VlbiwgcG9pbnQsIDAuMjUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb3VudFBvaW50KG9ialR3ZWVuOiB7IHZhbHVlOiBudW1iZXI7IH0sIHBvaW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIGRlbGF5OiBudW1iZXIgPSAwLCBjYWxsYmFjayA9ICgpID0+IHsgfSkge1xuXHRcdHRoaXMudHdlZW5Db3VudFBvaW50ID0gY2MudHdlZW4ob2JqVHdlZW4pXG5cdFx0XHQuZGVsYXkoZGVsYXkpXG5cdFx0XHQudG8oZHVyYXRpb24sIHsgdmFsdWU6IHBvaW50IH0sIHtcblx0XHRcdFx0cHJvZ3Jlc3M6IChzdGFydDogYW55LCBlbmQ6IGFueSwgY3VycmVudDogYW55LCByYXRpbzogYW55KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy50b3RhbFdpblBvaW50LnN0cmluZyA9IEcxMDA5VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIoTWF0aC5mbG9vcihjdXJyZW50KSk7XG5cdFx0XHRcdFx0cmV0dXJuIHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHJhdGlvO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmNhbGwoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRvdGFsV2luUG9pbnQuc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0V2l0aG91dENoYXJhY3Rlcihwb2ludCk7XG5cdFx0XHRcdHRoaXMuY3VycmVudFBvaW50ID0gcG9pbnQ7XG5cdFx0XHR9KVxuXHRcdHRoaXMudHdlZW5Db3VudFBvaW50LnN0YXJ0KCk7XG5cdH1cblxuXHRwcml2YXRlIG9uRW50ZXJGcmVlc3BpbnMoKTogdm9pZCB7XG5cdFx0dGhpcy5pc0ZyZWVzcGlucyA9IHRydWU7XG5cdH1cblxuXHRwcml2YXRlIG9uRmVhdHVyZVdpbkNvbXBsZXRlZChkYXRhKTogdm9pZCB7XG5cdFx0aWYoZGF0YSAmJiBkYXRhLmhpdFJ1bGUgPT0gXCJib251c1wiKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblx0XHR0aGlzLmlzRnJlZXNwaW5zID0gZmFsc2U7XG5cdFx0dGhpcy5yZXNldCgpO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuaXNGcmVlc3BpbnMpXG5cdFx0e1xuXHRcdFx0Y2MudHdlZW4odGhpcy50b3RhbFdpblBvaW50Lm5vZGUpXG5cdFx0XHRcdC5kZWxheSgwLjI1KVxuXHRcdFx0XHQudG8oMC4yNSwgeyBvcGFjaXR5OiAwIH0pXG5cdFx0XHRcdC5jYWxsKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRQb2ludCA9IDA7XG5cdFx0XHRcdFx0dGhpcy50b3RhbFdpblBvaW50LnN0cmluZyA9IFwiXCI7XG5cdFx0XHRcdH0pLnN0YXJ0KCk7XG5cdFx0fVxuXHRcdHRoaXMubGluZU1lc3NhZ2UuYWN0aXZlID0gZmFsc2U7XG5cdFx0dGhpcy5sYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSBvblN0b3BJbW1lZGlhdGVseSgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuaXNGcmVlc3BpbnMpXG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMuY3VycmVudFBvaW50ID4gMClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy50d2VlbkNvdW50UG9pbnQgJiYgdGhpcy50d2VlbkNvdW50UG9pbnQuc3RvcCgpO1xuXHRcdFx0XHR0aGlzLnRvdGFsV2luUG9pbnQuc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0V2l0aG91dENoYXJhY3Rlcih0aGlzLmN1cnJlbnRQb2ludCk7XG5cdFx0XHRcdHRoaXMudG90YWxXaW5Qb2ludC5ub2RlLm9wYWNpdHkgPSAyNTU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59Il19