"use strict";
cc._RF.push(module, 'dba97+8X7RFkr372xCtdozN', 'aka-g1009-feature-win-actor');
// Script/UI/feature/aka-g1009-feature-win-actor.ts

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
var aka_g1009_number_converter_1 = require("../../base/Util/aka-g1009-number-converter");
var aka_g1009_game_controller_1 = require("../../base/controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_balance_model_1 = require("../../models/aka-g1009-balance-model");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var COUNT_POINT_DURATION = 3;
var G1009FeatureWinActor = /** @class */ (function (_super) {
    __extends(G1009FeatureWinActor, _super);
    function G1009FeatureWinActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.lblTotalWinPoint = null;
        return _this;
    }
    G1009FeatureWinActor.prototype.onLoad = function () {
        this.reset();
        this.register();
    };
    G1009FeatureWinActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("featureWinstarted", this.onFeatureWinstarted.bind(this));
    };
    G1009FeatureWinActor.prototype.onFeatureWinstarted = function () {
        if (this.content != null) {
            this.showTotalWin();
        }
        else {
            var newBalance = aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().GetBalance() + aka_g1009_game_controller_1.default.GetInstance().GetTotalWinPoint();
            aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().SetBalance(newBalance);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("BalanceChange", newBalance);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("featureWinCompleted");
        }
    };
    G1009FeatureWinActor.prototype.showTotalWin = function () {
        var _this = this;
        var totalWin = aka_g1009_game_controller_1.default.GetInstance().GetTotalWinPoint();
        this.content.active = true;
        cc.tween(this.content)
            .to(1, { opacity: 255 })
            .delay(COUNT_POINT_DURATION + 2)
            .call(function () {
            cc.tween(_this.content)
                .to(1, { opacity: 0 }).call(function () {
                _this.reset();
                aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("featureWinCompleted");
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
                _this.lblTotalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(Math.round(current));
                return start + (end - start) * ratio;
            }
        })
            .call(function () {
            _this.lblTotalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(totalWin);
            var newBalance = aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().GetBalance() + aka_g1009_game_controller_1.default.GetInstance().GetTotalWinPoint();
            aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().SetBalance(newBalance);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("BalanceChange", newBalance);
        })
            .start();
    };
    G1009FeatureWinActor.prototype.reset = function () {
        if (this.content != null) {
            this.lblTotalWinPoint.string = "";
            this.content.active = false;
            this.content.opacity = 0;
        }
    };
    __decorate([
        property(cc.Node)
    ], G1009FeatureWinActor.prototype, "content", void 0);
    __decorate([
        property(cc.Label)
    ], G1009FeatureWinActor.prototype, "lblTotalWinPoint", void 0);
    G1009FeatureWinActor = __decorate([
        ccclass
    ], G1009FeatureWinActor);
    return G1009FeatureWinActor;
}(cc.Component));
exports.default = G1009FeatureWinActor;

cc._RF.pop();