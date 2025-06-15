"use strict";
cc._RF.push(module, '52e83XSd1xG561EJgD1gIxz', 'aka-g1009-change-bet-actor');
// Script/UI/change-bet/aka-g1009-change-bet-actor.ts

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
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_balance_model_1 = require("../../models/aka-g1009-balance-model");
var aka_g1009_bet_model_1 = require("../../models/aka-g1009-bet-model");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009ChangeBetActor = /** @class */ (function (_super) {
    __extends(G1009ChangeBetActor, _super);
    function G1009ChangeBetActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblBetPerLine = null;
        _this.lblTotalBetPoint = null;
        _this.lblBalance = null;
        _this.buttonShowBet = null;
        return _this;
    }
    G1009ChangeBetActor.prototype.start = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("resume", this.onShowBetPanel.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ShowBetPanel", this.onShowBetPanel.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("BalanceChange", this.onBalanceChange.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("Spin", this.onLockButton.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ActiveAuto", this.onLockButton.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SetBet", this.SetBetValues.bind(this));
    };
    G1009ChangeBetActor.prototype.onLockButton = function () {
        this.buttonShowBet.interactable = false;
    };
    G1009ChangeBetActor.prototype.onSpinComplete = function () {
        this.buttonShowBet.interactable = this.validatorButtonIncreaseBet();
    };
    G1009ChangeBetActor.prototype.onBalanceChange = function (point) {
        this.lblBalance.string = aka_g1009_number_converter_1.default.Instance().NumberFormat(point);
    };
    G1009ChangeBetActor.prototype.onShowBetPanel = function () {
        this.lblBetPerLine.string = aka_g1009_number_converter_1.default.Instance().NumberFormat(aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetCurrentBetPerLine());
        this.lblBalance.string = aka_g1009_number_converter_1.default.Instance().NumberFormat(aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().GetBalance());
        this.lblTotalBetPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormat(aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetTotalBetPoint());
        this.buttonShowBet.interactable = this.validatorButtonIncreaseBet();
    };
    G1009ChangeBetActor.prototype.validatorButtonIncreaseBet = function () {
        return aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetNextTotalBetPoint() <= aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().GetBalance() && aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetNextBetPerLine() != aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetCurrentBetPerLine();
    };
    G1009ChangeBetActor.prototype.validatorButtonDecreaseBet = function () {
        return aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetPreviousBetPerLine() <= aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().GetBalance() && aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetPreviousBetPerLine() != aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetCurrentBetPerLine();
    };
    G1009ChangeBetActor.prototype.IncreaseBetPerLine = function () {
        if (this.validatorButtonIncreaseBet()) {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("SetBetIncrease", aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetNextBetPerLineIndex());
            aka_g1009_bet_model_1.G1009BetModel.GetInstance().IncreaseBetPerLine();
        }
        else {
            aka_g1009_bet_model_1.G1009BetModel.GetInstance().SetBetToMin();
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("SetBetIncrease", 0);
        }
        this.changeBet();
    };
    G1009ChangeBetActor.prototype.DecreaseBetPerLine = function () {
        if (this.validatorButtonDecreaseBet()) {
            aka_g1009_bet_model_1.G1009BetModel.GetInstance().DecreaseBetPerLine();
            this.changeBet();
        }
    };
    G1009ChangeBetActor.prototype.SetBetValues = function (betIndex) {
        aka_g1009_bet_model_1.G1009BetModel.GetInstance().SetBetbyIndex(betIndex);
        this.changeBet();
    };
    G1009ChangeBetActor.prototype.changeBet = function () {
        this.lblBetPerLine.string = aka_g1009_number_converter_1.default.Instance().NumberFormat(aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetCurrentBetPerLine());
        this.lblTotalBetPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormat(aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetTotalBetPoint());
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ChangeBet");
    };
    G1009ChangeBetActor.prototype.ShowBetClick = function () {
        this.node.active = !this.node.active;
    };
    __decorate([
        property(cc.Label)
    ], G1009ChangeBetActor.prototype, "lblBetPerLine", void 0);
    __decorate([
        property(cc.Label)
    ], G1009ChangeBetActor.prototype, "lblTotalBetPoint", void 0);
    __decorate([
        property(cc.Label)
    ], G1009ChangeBetActor.prototype, "lblBalance", void 0);
    __decorate([
        property(cc.Button)
    ], G1009ChangeBetActor.prototype, "buttonShowBet", void 0);
    G1009ChangeBetActor = __decorate([
        ccclass
    ], G1009ChangeBetActor);
    return G1009ChangeBetActor;
}(cc.Component));
exports.default = G1009ChangeBetActor;

cc._RF.pop();