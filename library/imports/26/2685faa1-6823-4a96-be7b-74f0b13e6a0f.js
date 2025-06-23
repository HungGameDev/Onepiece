"use strict";
cc._RF.push(module, '2685fqhaCNKlr57dPCxPmoP', 'Slot45-notification-message');
// Script/UI/Slot45-notification-message.ts

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
var Slot45_number_converter_1 = require("../base/Util/Slot45-number-converter");
var Slot45_event_manager_1 = require("../base/events/Slot45-event-manager");
var Slot45_sprite_frame_provider_1 = require("./provider/Slot45-sprite-frame-provider");
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
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SpinStarted", this.reset.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("NotificationWinMessage", this.onMessages.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SetTotalWin", this.onSetTotalWin.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("StopImmediately", this.onStopImmediately.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("resume", this.onResume.bind(this));
    };
    NewClass.prototype.onResume = function (data) {
        if (data.isFreespins) {
            this.isFreespins = true;
            this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(data.totalWinPoint);
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
                this.winPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(mesageData.WinPoint);
                this.winIcon.spriteFrame = Slot45_sprite_frame_provider_1.Slot45SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, mesageData.WinSymbol));
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
                _this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(Math.floor(current));
                return start + (end - start) * ratio;
            }
        })
            .call(function () {
            _this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(point);
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
                this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
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