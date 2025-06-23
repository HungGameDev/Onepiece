"use strict";
cc._RF.push(module, '91481uc6nVDEIXSZYtvhixA', 'Slot45-popup-select-bet');
// Script/UI/popup/Slot45-popup-select-bet.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45PopUpSelectBetActor = /** @class */ (function (_super) {
    __extends(Slot45PopUpSelectBetActor, _super);
    function Slot45PopUpSelectBetActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        return _this;
    }
    Slot45PopUpSelectBetActor.prototype.start = function () {
        this.resetSelectBetLine();
    };
    Slot45PopUpSelectBetActor.prototype.onLoad = function () {
        this.register();
    };
    Slot45PopUpSelectBetActor.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ShowBetLinePanel", this.onShowClick.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SelectBetLineClick", this.onSelectBetLineClick.bind(this));
    };
    Slot45PopUpSelectBetActor.prototype.reset = function () {
        this.content.active = false;
    };
    Slot45PopUpSelectBetActor.prototype.onClosePopupClick = function () {
        var _this = this;
        if (this.validatorBet()) {
            cc.tween(this.content)
                .to(0.2, { opacity: 0 })
                .call(function () {
                _this.reset();
                Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("UpdateBetLine", _this.selectedBetLine);
            })
                .start();
        }
        else {
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("PopupInfoMessage", { message: "khong du tien", type: "info" });
        }
    };
    Slot45PopUpSelectBetActor.prototype.onSelectBetLineClick = function (data) {
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
    Slot45PopUpSelectBetActor.prototype.onTakeEvenLine = function () {
        this.resetSelectBetLine();
        this.selectedBetLine = this.selectedBetLine.filter(function (element) {
            return element % 2 == 0;
        });
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    };
    Slot45PopUpSelectBetActor.prototype.onTakAllLine = function () {
        this.resetSelectBetLine();
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    };
    Slot45PopUpSelectBetActor.prototype.onTakNoLine = function () {
        this.selectedBetLine = [];
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    };
    Slot45PopUpSelectBetActor.prototype.onTakeOddLine = function () {
        this.resetSelectBetLine();
        this.selectedBetLine = this.selectedBetLine.filter(function (element) {
            return element % 2 !== 0;
        });
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ChangeToggleState", this.selectedBetLine);
    };
    Slot45PopUpSelectBetActor.prototype.resetSelectBetLine = function () {
        this.selectedBetLine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    };
    Slot45PopUpSelectBetActor.prototype.check = function (param) {
        this.content.opacity = 255;
    };
    Slot45PopUpSelectBetActor.prototype.onShowClick = function () {
        this.content.opacity = 255;
        this.content.active = true;
    };
    Slot45PopUpSelectBetActor.prototype.validatorBet = function () {
        return Slot45_bet_model_1.Slot45BetModel.GetInstance().TryGetTotalBetPointByBetMultiplier(this.selectedBetLine.length) <= Slot45_balance_model_1.Slot45BalanceModel.GetInstance().GetBalance();
    };
    __decorate([
        property(cc.Node)
    ], Slot45PopUpSelectBetActor.prototype, "content", void 0);
    Slot45PopUpSelectBetActor = __decorate([
        ccclass
    ], Slot45PopUpSelectBetActor);
    return Slot45PopUpSelectBetActor;
}(cc.Component));
exports.default = Slot45PopUpSelectBetActor;

cc._RF.pop();