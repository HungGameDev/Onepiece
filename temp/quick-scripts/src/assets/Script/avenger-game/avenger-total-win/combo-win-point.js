"use strict";
cc._RF.push(module, 'abfddP5rDZDort/7Czlh82f', 'combo-win-point');
// Script/avenger-game/avenger-total-win/combo-win-point.ts

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
var Slot45_number_converter_1 = require("../../base/Util/Slot45-number-converter");
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ComboWinPoint = /** @class */ (function (_super) {
    __extends(ComboWinPoint, _super);
    function ComboWinPoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.totalWinPoint = null;
        _this.currentPoint = 0;
        return _this;
    }
    ComboWinPoint.prototype.onLoad = function () {
        this.register();
        this.reset();
    };
    ComboWinPoint.prototype.register = function () {
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("SpinStarted", this.reset.bind(this));
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("SetTotalWin", this.onSetTotalWin.bind(this));
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("IncreaseTotalWin", this.onIncreaseTotalWin.bind(this));
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("StartPresentWinCombo", this.onStartPresentWinCombo.bind(this));
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("BonusWinComplete", this.reset.bind(this));
    };
    ComboWinPoint.prototype.onSetTotalWin = function (point) {
        this.currentPoint = point;
        this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
    };
    ComboWinPoint.prototype.onIncreaseTotalWin = function (point) {
        var objTween = {
            value: this.currentPoint
        };
        this.totalWinPoint.node.active = true;
        this.countPoint(objTween, this.currentPoint + point, 0.25);
    };
    ComboWinPoint.prototype.onStartPresentWinCombo = function () {
        this.reset();
    };
    ComboWinPoint.prototype.countPoint = function (objTween, point, duration, delay, callback) {
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
    ComboWinPoint.prototype.reset = function () {
        this.totalWinPoint.node.active = false;
        this.currentPoint = 0;
        this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
    };
    __decorate([
        property(cc.Label)
    ], ComboWinPoint.prototype, "totalWinPoint", void 0);
    ComboWinPoint = __decorate([
        ccclass
    ], ComboWinPoint);
    return ComboWinPoint;
}(cc.Component));
exports.default = ComboWinPoint;

cc._RF.pop();