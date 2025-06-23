"use strict";
cc._RF.push(module, 'dba97+8X7RFkr372xCtdozN', 'Slot45-feature-win-actor');
// Script/UI/feature/Slot45-feature-win-actor.ts

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
var Slot45_game_controller_1 = require("../../base/controller/Slot45-game-controller");
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var Slot45_balance_model_1 = require("../../models/Slot45-balance-model");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var COUNT_POINT_DURATION = 3;
var Slot45FeatureWinActor = /** @class */ (function (_super) {
    __extends(Slot45FeatureWinActor, _super);
    function Slot45FeatureWinActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.lblTotalWinPoint = null;
        return _this;
    }
    Slot45FeatureWinActor.prototype.onLoad = function () {
        this.reset();
        this.register();
    };
    Slot45FeatureWinActor.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("featureWinstarted", this.onFeatureWinstarted.bind(this));
    };
    Slot45FeatureWinActor.prototype.onFeatureWinstarted = function () {
        if (this.content != null) {
            this.showTotalWin();
        }
        else {
            var newBalance = Slot45_balance_model_1.Slot45BalanceModel.GetInstance().GetBalance() + Slot45_game_controller_1.default.GetInstance().GetTotalWinPoint();
            Slot45_balance_model_1.Slot45BalanceModel.GetInstance().SetBalance(newBalance);
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("BalanceChange", newBalance);
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("featureWinCompleted");
        }
    };
    Slot45FeatureWinActor.prototype.showTotalWin = function () {
        var _this = this;
        var totalWin = Slot45_game_controller_1.default.GetInstance().GetTotalWinPoint();
        this.content.active = true;
        cc.tween(this.content)
            .to(1, { opacity: 255 })
            .delay(COUNT_POINT_DURATION + 2)
            .call(function () {
            cc.tween(_this.content)
                .to(1, { opacity: 0 }).call(function () {
                _this.reset();
                Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("featureWinCompleted");
            })
                .start();
        }).start();
        var objTween = {
            value: 0
        };
        cc.tween(objTween)
            .delay(1)
            .to(COUNT_POINT_DURATION, { value: totalWin }, {
            progress: function (start, end, current, ratio) {
                _this.lblTotalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(Math.round(current));
                return start + (end - start) * ratio;
            }
        })
            .call(function () {
            _this.lblTotalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(totalWin);
            var newBalance = Slot45_balance_model_1.Slot45BalanceModel.GetInstance().GetBalance() + Slot45_game_controller_1.default.GetInstance().GetTotalWinPoint();
            Slot45_balance_model_1.Slot45BalanceModel.GetInstance().SetBalance(newBalance);
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("BalanceChange", newBalance);
        })
            .start();
    };
    Slot45FeatureWinActor.prototype.reset = function () {
        if (this.content != null) {
            this.lblTotalWinPoint.string = "";
            this.content.active = false;
            this.content.opacity = 0;
        }
    };
    __decorate([
        property(cc.Node)
    ], Slot45FeatureWinActor.prototype, "content", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45FeatureWinActor.prototype, "lblTotalWinPoint", void 0);
    Slot45FeatureWinActor = __decorate([
        ccclass
    ], Slot45FeatureWinActor);
    return Slot45FeatureWinActor;
}(cc.Component));
exports.default = Slot45FeatureWinActor;

cc._RF.pop();