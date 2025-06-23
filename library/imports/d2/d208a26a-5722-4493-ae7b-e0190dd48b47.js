"use strict";
cc._RF.push(module, 'd208aJqVyJEk6574BkN1ItH', 'Slot45-bet-button');
// Script/UI/popup/Slot45-bet-button.ts

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
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var Slot45_balance_model_1 = require("../../models/Slot45-balance-model");
var Slot45_bet_model_1 = require("../../models/Slot45-bet-model");
var Slot45_button_1 = require("./Slot45-button");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009BetButtonActor = /** @class */ (function (_super) {
    __extends(G1009BetButtonActor, _super);
    function G1009BetButtonActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.betIndex = -1;
        _this.txtButtonText = null;
        return _this;
    }
    G1009BetButtonActor.prototype.start = function () {
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("ShowBetPanel", this.SetButtonTextValues.bind(this));
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("SetBetIncrease", this.SetTextColor.bind(this));
        Slot45_event_manager_1.G1009EventManager.GetInstance().register(this.EventName, this.SetTextColor.bind(this));
        this.SetTextColor(0);
    };
    G1009BetButtonActor.prototype.SetButtonTextValues = function () {
        this.txtButtonText.string = Slot45_bet_model_1.G1009BetModel.GetInstance().GetBetPointByIndex(this.betIndex).toString();
        this.button.interactable = this.validatorButtonSetBet(this.betIndex);
    };
    G1009BetButtonActor.prototype.onButtonClick = function () {
        if (this.validatorButtonSetBet(this.betIndex) && Slot45_bet_model_1.G1009BetModel.GetInstance().GetBetPerLinebyIndex(this.betIndex) != Slot45_bet_model_1.G1009BetModel.GetInstance().GetCurrentBetPerLine()) {
            Slot45_event_manager_1.G1009EventManager.GetInstance().notify(this.EventName, this.betIndex);
        }
    };
    G1009BetButtonActor.prototype.validatorButtonSetBet = function (index) {
        return Slot45_bet_model_1.G1009BetModel.GetInstance().GetNextTotalBetPointbyIndex(index) <= Slot45_balance_model_1.G1009BalanceModel.GetInstance().GetBalance();
    };
    G1009BetButtonActor.prototype.SetTextColor = function (index) {
        this.txtButtonText.node.color = this.betIndex != index ? cc.Color.GRAY : cc.Color.WHITE;
    };
    __decorate([
        property
    ], G1009BetButtonActor.prototype, "betIndex", void 0);
    __decorate([
        property(cc.Label)
    ], G1009BetButtonActor.prototype, "txtButtonText", void 0);
    G1009BetButtonActor = __decorate([
        ccclass
    ], G1009BetButtonActor);
    return G1009BetButtonActor;
}(Slot45_button_1.default));
exports.default = G1009BetButtonActor;

cc._RF.pop();