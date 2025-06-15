
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/change-bet/aka-g1009-change-bet-actor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvY2hhbmdlLWJldC9ha2EtZzEwMDktY2hhbmdlLWJldC1hY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RkFBbUU7QUFDbkUscUZBQThFO0FBQzlFLGdGQUF5RTtBQUN6RSx3RUFBaUU7QUFFM0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUF3RkM7UUF0RlEsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0Isc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBRWxDLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLG1CQUFhLEdBQWMsSUFBSSxDQUFDOztJQWdGekMsQ0FBQztJQTdFVSxtQ0FBSyxHQUFmO1FBQ0MsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25GLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RiwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0YsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9FLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVB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QkF4Rm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHMTAwOVV0aWwgZnJvbSBcIi4uLy4uL2Jhc2UvVXRpbC9ha2EtZzEwMDktbnVtYmVyLWNvbnZlcnRlclwiO1xuaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCB7IEcxMDA5QmFsYW5jZU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ha2EtZzEwMDktYmFsYW5jZS1tb2RlbFwiO1xuaW1wb3J0IHsgRzEwMDlCZXRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYWthLWcxMDA5LWJldC1tb2RlbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlDaGFuZ2VCZXRBY3RvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHJpdmF0ZSBsYmxCZXRQZXJMaW5lOiBjYy5MYWJlbCA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHJpdmF0ZSBsYmxUb3RhbEJldFBvaW50OiBjYy5MYWJlbCA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHJpdmF0ZSBsYmxCYWxhbmNlOiBjYy5MYWJlbCA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5CdXR0b24pXG5cdHByaXZhdGUgYnV0dG9uU2hvd0JldDogY2MuQnV0dG9uID0gbnVsbDtcblxuXG5cdHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwicmVzdW1lXCIsIHRoaXMub25TaG93QmV0UGFuZWwuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlNob3dCZXRQYW5lbFwiLCB0aGlzLm9uU2hvd0JldFBhbmVsLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJCYWxhbmNlQ2hhbmdlXCIsIHRoaXMub25CYWxhbmNlQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTcGluXCIsIHRoaXMub25Mb2NrQnV0dG9uLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJBY3RpdmVBdXRvXCIsIHRoaXMub25Mb2NrQnV0dG9uLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTZXRCZXRcIiwgdGhpcy5TZXRCZXRWYWx1ZXMuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRwcml2YXRlIG9uTG9ja0J1dHRvbigpOiB2b2lkIHtcblx0XHR0aGlzLmJ1dHRvblNob3dCZXQuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG5cdFxuXHR9XG5cblx0cHJpdmF0ZSBvblNwaW5Db21wbGV0ZSgpOiB2b2lkIHtcblx0XHR0aGlzLmJ1dHRvblNob3dCZXQuaW50ZXJhY3RhYmxlID0gdGhpcy52YWxpZGF0b3JCdXR0b25JbmNyZWFzZUJldCgpO1xuXHRcdFxuXHR9XG5cblx0cHJpdmF0ZSBvbkJhbGFuY2VDaGFuZ2UocG9pbnQpOiB2b2lkIHtcblx0XHR0aGlzLmxibEJhbGFuY2Uuc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0KHBvaW50KTtcblx0fVxuXG5cdHByaXZhdGUgb25TaG93QmV0UGFuZWwoKTogdm9pZCB7XG5cdFx0dGhpcy5sYmxCZXRQZXJMaW5lLnN0cmluZyA9IEcxMDA5VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdChHMTAwOUJldE1vZGVsLkdldEluc3RhbmNlKCkuR2V0Q3VycmVudEJldFBlckxpbmUoKSk7XG5cdFx0dGhpcy5sYmxCYWxhbmNlLnN0cmluZyA9IEcxMDA5VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdChHMTAwOUJhbGFuY2VNb2RlbC5HZXRJbnN0YW5jZSgpLkdldEJhbGFuY2UoKSk7XG5cdFx0dGhpcy5sYmxUb3RhbEJldFBvaW50LnN0cmluZyA9IEcxMDA5VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdChHMTAwOUJldE1vZGVsLkdldEluc3RhbmNlKCkuR2V0VG90YWxCZXRQb2ludCgpKTtcblx0XHR0aGlzLmJ1dHRvblNob3dCZXQuaW50ZXJhY3RhYmxlID0gdGhpcy52YWxpZGF0b3JCdXR0b25JbmNyZWFzZUJldCgpO1xuXHRcdFxuXHR9XG5cblx0cHJpdmF0ZSB2YWxpZGF0b3JCdXR0b25JbmNyZWFzZUJldCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gRzEwMDlCZXRNb2RlbC5HZXRJbnN0YW5jZSgpLkdldE5leHRUb3RhbEJldFBvaW50KCkgPD0gRzEwMDlCYWxhbmNlTW9kZWwuR2V0SW5zdGFuY2UoKS5HZXRCYWxhbmNlKCkgJiYgRzEwMDlCZXRNb2RlbC5HZXRJbnN0YW5jZSgpLkdldE5leHRCZXRQZXJMaW5lKCkgIT0gRzEwMDlCZXRNb2RlbC5HZXRJbnN0YW5jZSgpLkdldEN1cnJlbnRCZXRQZXJMaW5lKCk7XG5cdH1cblxuXHRwcml2YXRlIHZhbGlkYXRvckJ1dHRvbkRlY3JlYXNlQmV0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBHMTAwOUJldE1vZGVsLkdldEluc3RhbmNlKCkuR2V0UHJldmlvdXNCZXRQZXJMaW5lKCkgPD0gRzEwMDlCYWxhbmNlTW9kZWwuR2V0SW5zdGFuY2UoKS5HZXRCYWxhbmNlKCkgJiYgRzEwMDlCZXRNb2RlbC5HZXRJbnN0YW5jZSgpLkdldFByZXZpb3VzQmV0UGVyTGluZSgpICE9IEcxMDA5QmV0TW9kZWwuR2V0SW5zdGFuY2UoKS5HZXRDdXJyZW50QmV0UGVyTGluZSgpO1xuXHR9XG5cblx0cHVibGljIEluY3JlYXNlQmV0UGVyTGluZSgpIHtcblx0XHRpZiAodGhpcy52YWxpZGF0b3JCdXR0b25JbmNyZWFzZUJldCgpKVxuXHRcdHtcblx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiU2V0QmV0SW5jcmVhc2VcIixHMTAwOUJldE1vZGVsLkdldEluc3RhbmNlKCkuR2V0TmV4dEJldFBlckxpbmVJbmRleCgpKTtcblx0XHRcdEcxMDA5QmV0TW9kZWwuR2V0SW5zdGFuY2UoKS5JbmNyZWFzZUJldFBlckxpbmUoKTtcdFx0XHRcdFx0XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRHMTAwOUJldE1vZGVsLkdldEluc3RhbmNlKCkuU2V0QmV0VG9NaW4oKTtcdFx0XG5cdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIlNldEJldEluY3JlYXNlXCIsMCk7XG5cdFx0fVxuXHRcdHRoaXMuY2hhbmdlQmV0KCk7XG5cdH1cblxuXHRwdWJsaWMgRGVjcmVhc2VCZXRQZXJMaW5lKCkge1xuXHRcdGlmICh0aGlzLnZhbGlkYXRvckJ1dHRvbkRlY3JlYXNlQmV0KCkpXG5cdFx0e1xuXHRcdFx0RzEwMDlCZXRNb2RlbC5HZXRJbnN0YW5jZSgpLkRlY3JlYXNlQmV0UGVyTGluZSgpO1xuXHRcdFx0dGhpcy5jaGFuZ2VCZXQoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgU2V0QmV0VmFsdWVzKGJldEluZGV4OiBudW1iZXIpIHtcblx0XHRHMTAwOUJldE1vZGVsLkdldEluc3RhbmNlKCkuU2V0QmV0YnlJbmRleChiZXRJbmRleCk7XG5cdFx0dGhpcy5jaGFuZ2VCZXQoKTtcdFxuXHR9XG5cblx0cHJpdmF0ZSBjaGFuZ2VCZXQoKTogdm9pZCB7XG5cblx0XHR0aGlzLmxibEJldFBlckxpbmUuc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0KEcxMDA5QmV0TW9kZWwuR2V0SW5zdGFuY2UoKS5HZXRDdXJyZW50QmV0UGVyTGluZSgpKTtcblx0XHR0aGlzLmxibFRvdGFsQmV0UG9pbnQuc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0KEcxMDA5QmV0TW9kZWwuR2V0SW5zdGFuY2UoKS5HZXRUb3RhbEJldFBvaW50KCkpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiQ2hhbmdlQmV0XCIpO1xuXHR9XG5cblx0cHVibGljIFNob3dCZXRDbGljaygpOnZvaWRcblx0e1xuXHRcdHRoaXMubm9kZS5hY3RpdmUgPSAhdGhpcy5ub2RlLmFjdGl2ZTtcblx0fVxufSJdfQ==