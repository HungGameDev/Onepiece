"use strict";
cc._RF.push(module, '52e83XSd1xG561EJgD1gIxz', 'Slot45-change-bet-actor');
// Script/UI/change-bet/Slot45-change-bet-actor.ts

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
var Slot45_balance_model_1 = require("../../models/Slot45-balance-model");
var Slot45_bet_model_1 = require("../../models/Slot45-bet-model");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45ChangeBetActor = /** @class */ (function (_super) {
    __extends(Slot45ChangeBetActor, _super);
    function Slot45ChangeBetActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblBetPerLine = null;
        _this.lblTotalBetPoint = null;
        _this.lblBalance = null;
        _this.buttonDecreaseBet = null;
        _this.buttonIncreaseBet = null;
        return _this;
    }
    Slot45ChangeBetActor.prototype.start = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("resume", this.onShowBetPanel.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ShowBetPanel", this.onShowBetPanel.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("BalanceChange", this.onBalanceChange.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("Spin", this.onLockButton.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ActiveAuto", this.onLockButton.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SetBet", this.SetBetValues.bind(this));
    };
    Slot45ChangeBetActor.prototype.onLockButton = function () {
        this.buttonDecreaseBet.interactable = false;
        this.buttonIncreaseBet.interactable = false;
    };
    Slot45ChangeBetActor.prototype.onSpinComplete = function () {
        this.buttonDecreaseBet.interactable = this.validatorButtonIncreaseBet();
        this.buttonIncreaseBet.interactable = this.validatorButtonIncreaseBet();
    };
    Slot45ChangeBetActor.prototype.onBalanceChange = function (point) {
        this.lblBalance.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(point);
    };
    Slot45ChangeBetActor.prototype.onShowBetPanel = function () {
        this.lblBetPerLine.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(Slot45_bet_model_1.Slot45BetModel.GetInstance().GetCurrentBetPerLine());
        this.lblBalance.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(Slot45_balance_model_1.Slot45BalanceModel.GetInstance().GetBalance());
        this.lblTotalBetPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(Slot45_bet_model_1.Slot45BetModel.GetInstance().GetTotalBetPoint());
        this.buttonDecreaseBet.interactable = this.validatorButtonIncreaseBet();
        this.buttonIncreaseBet.interactable = this.validatorButtonIncreaseBet();
    };
    Slot45ChangeBetActor.prototype.validatorButtonIncreaseBet = function () {
        return Slot45_bet_model_1.Slot45BetModel.GetInstance().GetNextTotalBetPoint() <= Slot45_balance_model_1.Slot45BalanceModel.GetInstance().GetBalance() && Slot45_bet_model_1.Slot45BetModel.GetInstance().GetNextBetPerLine() != Slot45_bet_model_1.Slot45BetModel.GetInstance().GetCurrentBetPerLine();
    };
    Slot45ChangeBetActor.prototype.validatorButtonDecreaseBet = function () {
        return Slot45_bet_model_1.Slot45BetModel.GetInstance().GetPreviousBetPerLine() <= Slot45_balance_model_1.Slot45BalanceModel.GetInstance().GetBalance() && Slot45_bet_model_1.Slot45BetModel.GetInstance().GetPreviousBetPerLine() != Slot45_bet_model_1.Slot45BetModel.GetInstance().GetCurrentBetPerLine();
    };
    Slot45ChangeBetActor.prototype.IncreaseBetPerLine = function () {
        if (this.validatorButtonIncreaseBet()) {
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("SetBetIncrease", Slot45_bet_model_1.Slot45BetModel.GetInstance().GetNextBetPerLineIndex());
            Slot45_bet_model_1.Slot45BetModel.GetInstance().IncreaseBetPerLine();
        }
        this.changeBet();
    };
    Slot45ChangeBetActor.prototype.DecreaseBetPerLine = function () {
        if (this.validatorButtonDecreaseBet()) {
            Slot45_bet_model_1.Slot45BetModel.GetInstance().DecreaseBetPerLine();
            this.changeBet();
        }
    };
    Slot45ChangeBetActor.prototype.SetBetValues = function (betIndex) {
        Slot45_bet_model_1.Slot45BetModel.GetInstance().SetBetbyIndex(betIndex);
        this.changeBet();
    };
    Slot45ChangeBetActor.prototype.changeBet = function () {
        this.lblBetPerLine.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(Slot45_bet_model_1.Slot45BetModel.GetInstance().GetCurrentBetPerLine());
        this.lblTotalBetPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(Slot45_bet_model_1.Slot45BetModel.GetInstance().GetTotalBetPoint());
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ChangeBet");
    };
    Slot45ChangeBetActor.prototype.ShowBetClick = function () {
        this.node.active = !this.node.active;
    };
    __decorate([
        property(cc.Label)
    ], Slot45ChangeBetActor.prototype, "lblBetPerLine", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45ChangeBetActor.prototype, "lblTotalBetPoint", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45ChangeBetActor.prototype, "lblBalance", void 0);
    __decorate([
        property(cc.Button)
    ], Slot45ChangeBetActor.prototype, "buttonDecreaseBet", void 0);
    __decorate([
        property(cc.Button)
    ], Slot45ChangeBetActor.prototype, "buttonIncreaseBet", void 0);
    Slot45ChangeBetActor = __decorate([
        ccclass
    ], Slot45ChangeBetActor);
    return Slot45ChangeBetActor;
}(cc.Component));
exports.default = Slot45ChangeBetActor;

cc._RF.pop();