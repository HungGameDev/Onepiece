"use strict";
cc._RF.push(module, '91481uc6nVDEIXSZYtvhixA', 'aka-g1009-popup-select-bet');
// Script/UI/popup/aka-g1009-popup-select-bet.ts

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
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_balance_model_1 = require("../../models/aka-g1009-balance-model");
var aka_g1009_bet_model_1 = require("../../models/aka-g1009-bet-model");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009PopUpSelectBetActor = /** @class */ (function (_super) {
    __extends(G1009PopUpSelectBetActor, _super);
    function G1009PopUpSelectBetActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        return _this;
    }
    G1009PopUpSelectBetActor.prototype.start = function () {
        this.resetSelectBetLine();
    };
    G1009PopUpSelectBetActor.prototype.onLoad = function () {
        this.register();
    };
    G1009PopUpSelectBetActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ShowBetLinePanel", this.onShowClick.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SelectBetLineClick", this.onSelectBetLineClick.bind(this));
    };
    G1009PopUpSelectBetActor.prototype.reset = function () {
        this.content.active = false;
    };
    G1009PopUpSelectBetActor.prototype.onClosePopupClick = function () {
        var _this = this;
        if (this.validatorBet()) {
            cc.tween(this.content)
                .to(0.2, { opacity: 0 })
                .call(function () {
                _this.reset();
                aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("UpdateBetLine", _this.selectedBetLine);
            })
                .start();
        }
        else {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("PopupInfoMessage", { message: "khong du tien", type: "info" });
        }
    };
    G1009PopUpSelectBetActor.prototype.onSelectBetLineClick = function (data) {
        if (data.isCheck) {
            if (!this.selectedBetLine.includes(data.id)) {
                this.selectedBetLine.push(data.id);
            }
        }
        else {
            if (this.selectedBetLine.includes(data.id)) {
                var index = this.selectedBetLine.indexOf(data.id);
                delete this.selectedBetLine[index];
            }
        }
        this.selectedBetLine = this.selectedBetLine.filter(function (element) {
            return element !== undefined;
        });
        this.selectedBetLine.sort(function (a, b) { return a - b; });
    };
    G1009PopUpSelectBetActor.prototype.onTakeEvenLine = function () {
        this.resetSelectBetLine();
        this.selectedBetLine = this.selectedBetLine.filter(function (element) {
            return element % 2 == 0;
        });
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    };
    G1009PopUpSelectBetActor.prototype.onTakAllLine = function () {
        this.resetSelectBetLine();
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    };
    G1009PopUpSelectBetActor.prototype.onTakNoLine = function () {
        this.selectedBetLine = [];
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    };
    G1009PopUpSelectBetActor.prototype.onTakeOddLine = function () {
        this.resetSelectBetLine();
        this.selectedBetLine = this.selectedBetLine.filter(function (element) {
            return element % 2 !== 0;
        });
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    };
    G1009PopUpSelectBetActor.prototype.resetSelectBetLine = function () {
        this.selectedBetLine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    };
    G1009PopUpSelectBetActor.prototype.check = function (param) {
        this.content.opacity = 255;
    };
    G1009PopUpSelectBetActor.prototype.onShowClick = function () {
        this.content.opacity = 255;
        this.content.active = true;
    };
    G1009PopUpSelectBetActor.prototype.validatorBet = function () {
        return aka_g1009_bet_model_1.G1009BetModel.GetInstance().TryGetTotalBetPointByBetMultiplier(this.selectedBetLine.length) <= aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().GetBalance();
    };
    __decorate([
        property(cc.Node)
    ], G1009PopUpSelectBetActor.prototype, "content", void 0);
    G1009PopUpSelectBetActor = __decorate([
        ccclass
    ], G1009PopUpSelectBetActor);
    return G1009PopUpSelectBetActor;
}(cc.Component));
exports.default = G1009PopUpSelectBetActor;

cc._RF.pop();