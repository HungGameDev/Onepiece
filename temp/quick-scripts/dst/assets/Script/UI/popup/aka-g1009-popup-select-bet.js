
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-popup-select-bet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LXBvcHVwLXNlbGVjdC1iZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQThFO0FBQzlFLGdGQUF5RTtBQUN6RSx3RUFBaUU7QUFFM0QsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0QsNENBQVk7SUFBbEU7UUFBQSxxRUE2R0M7UUF6R0csYUFBTyxHQUFZLElBQUksQ0FBQzs7SUF5RzVCLENBQUM7SUFuR2Esd0NBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDUyx5Q0FBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sMkNBQVEsR0FBaEI7UUFDSSwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRiwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFFTyx3Q0FBSyxHQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxvREFBaUIsR0FBeEI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFDdkI7WUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ3JCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVB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QUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFDTSx3Q0FBSyxHQUFaLFVBQWEsS0FBYTtRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDL0IsQ0FBQztJQUVPLDhDQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRU8sK0NBQVksR0FBcEI7UUFDRixPQUFPLG1DQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsa0NBQWtDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwSixDQUFDO0lBeEdFO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ007SUFKUCx3QkFBd0I7UUFENUMsT0FBTztPQUNhLHdCQUF3QixDQTZHNUM7SUFBRCwrQkFBQztDQTdHRCxBQTZHQyxDQTdHcUQsRUFBRSxDQUFDLFNBQVMsR0E2R2pFO2tCQTdHb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCB7IEcxMDA5QmFsYW5jZU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ha2EtZzEwMDktYmFsYW5jZS1tb2RlbFwiO1xuaW1wb3J0IHsgRzEwMDlCZXRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYWthLWcxMDA5LWJldC1tb2RlbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5UG9wVXBTZWxlY3RCZXRBY3RvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcblxuICBcbiAgICBzZWxlY3RlZEJldExpbmU6IG51bWJlcltdO1xuXG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzZXRTZWxlY3RCZXRMaW5lKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU2hvd0JldExpbmVQYW5lbFwiLCB0aGlzLm9uU2hvd0NsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU2VsZWN0QmV0TGluZUNsaWNrXCIsIHRoaXMub25TZWxlY3RCZXRMaW5lQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgb25DbG9zZVBvcHVwQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvckJldCgpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNvbnRlbnQpXG4gICAgICAgICAgICAudG8oMC4yLCB7IG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KClcbiAgICAgICAgICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIlVwZGF0ZUJldExpbmVcIiwgdGhpcy5zZWxlY3RlZEJldExpbmUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJQb3B1cEluZm9NZXNzYWdlXCIsIHsgbWVzc2FnZTogXCJraG9uZyBkdSB0aWVuXCIsIHR5cGU6IFwiaW5mb1wiIH0pOyAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNlbGVjdEJldExpbmVDbGljayhkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKGRhdGEuaXNDaGVjaylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkQmV0TGluZS5pbmNsdWRlcyhkYXRhLmlkKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQmV0TGluZS5wdXNoKGRhdGEuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRCZXRMaW5lLmluY2x1ZGVzKGRhdGEuaWQpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc2VsZWN0ZWRCZXRMaW5lLmluZGV4T2YoZGF0YS5pZCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRCZXRMaW5lW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkQmV0TGluZSA9IHRoaXMuc2VsZWN0ZWRCZXRMaW5lLmZpbHRlcihmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG4gXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRMaW5lLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVGFrZUV2ZW5MaW5lKCkgeyAgICAgICAgXG4gICAgICAgIHRoaXMucmVzZXRTZWxlY3RCZXRMaW5lKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRMaW5lID0gdGhpcy5zZWxlY3RlZEJldExpbmUuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudCAlIDIgPT0gMDtcbiAgICAgICAgfSk7ICBcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJDaGFuZ2VUb2dnbGVTdGF0ZVwiLCB0aGlzLnNlbGVjdGVkQmV0TGluZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRha0FsbExpbmUoKSB7XG4gICAgICAgIHRoaXMucmVzZXRTZWxlY3RCZXRMaW5lKCk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiQ2hhbmdlVG9nZ2xlU3RhdGVcIiwgdGhpcy5zZWxlY3RlZEJldExpbmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25UYWtOb0xpbmUoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRMaW5lID0gW107XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiQ2hhbmdlVG9nZ2xlU3RhdGVcIiwgdGhpcy5zZWxlY3RlZEJldExpbmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25UYWtlT2RkTGluZSgpIHtcbiAgICAgICAgdGhpcy5yZXNldFNlbGVjdEJldExpbmUoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEJldExpbmUgPSB0aGlzLnNlbGVjdGVkQmV0TGluZS5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50ICUgMiAhPT0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiQ2hhbmdlVG9nZ2xlU3RhdGVcIiwgdGhpcy5zZWxlY3RlZEJldExpbmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRTZWxlY3RCZXRMaW5lKClcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRMaW5lID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMF07XG4gICAgfVxuICAgIHB1YmxpYyBjaGVjayhwYXJhbTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGVudC5vcGFjaXR5ID0gMjU1O1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIG9uU2hvd0NsaWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRlbnQub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3JCZXQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIEcxMDA5QmV0TW9kZWwuR2V0SW5zdGFuY2UoKS5UcnlHZXRUb3RhbEJldFBvaW50QnlCZXRNdWx0aXBsaWVyKHRoaXMuc2VsZWN0ZWRCZXRMaW5lLmxlbmd0aCkgPD0gRzEwMDlCYWxhbmNlTW9kZWwuR2V0SW5zdGFuY2UoKS5HZXRCYWxhbmNlKCk7XG5cdH1cbn1cbiJdfQ==