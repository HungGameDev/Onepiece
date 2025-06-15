
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/history-popup/aka-g1009-popup-history-item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b98c8893uJI6KkdEC//6ruz', 'aka-g1009-popup-history-item');
// Script/UI/history-popup/aka-g1009-popup-history-item.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009PopupHistoryItem = /** @class */ (function (_super) {
    __extends(G1009PopupHistoryItem, _super);
    function G1009PopupHistoryItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblSession = null;
        _this.lblTime = null;
        _this.lblTotalBetPoint = null;
        _this.lblTotalWin = null;
        _this.spinResuilt = [];
        _this.session = "";
        _this.totalWin = "";
        return _this;
    }
    G1009PopupHistoryItem.prototype.SetInfoItem = function (session, time, totalBetPoint, totalWin, spinData) {
        if (spinData === void 0) { spinData = []; }
        this.lblSession.string = session;
        this.lblTime.string = time;
        this.lblTotalBetPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormat(totalBetPoint);
        this.lblTotalWin.string = aka_g1009_number_converter_1.default.Instance().NumberFormat(totalWin);
        this.node.active = true;
        this.spinResuilt = spinData;
        this.totalWin = aka_g1009_number_converter_1.default.Instance().NumberFormat(totalWin);
        this.session = session;
    };
    G1009PopupHistoryItem.prototype.Hide = function () {
        this.node.active = false;
    };
    G1009PopupHistoryItem.prototype.onButtonClick = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ShowDetailHistory", { Session: this.session, TotalWin: this.totalWin, SpinResuilt: this.spinResuilt });
    };
    __decorate([
        property(cc.Label)
    ], G1009PopupHistoryItem.prototype, "lblSession", void 0);
    __decorate([
        property(cc.Label)
    ], G1009PopupHistoryItem.prototype, "lblTime", void 0);
    __decorate([
        property(cc.Label)
    ], G1009PopupHistoryItem.prototype, "lblTotalBetPoint", void 0);
    __decorate([
        property(cc.Label)
    ], G1009PopupHistoryItem.prototype, "lblTotalWin", void 0);
    G1009PopupHistoryItem = __decorate([
        ccclass
    ], G1009PopupHistoryItem);
    return G1009PopupHistoryItem;
}(cc.Component));
exports.default = G1009PopupHistoryItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvaGlzdG9yeS1wb3B1cC9ha2EtZzEwMDktcG9wdXAtaGlzdG9yeS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlGQUFtRTtBQUNuRSxxRkFBOEU7QUFFeEUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUQseUNBQVk7SUFBL0Q7UUFBQSxxRUFrQ0M7UUEvQlEsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFFbEMsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFFM0IsYUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixjQUFRLEdBQVcsRUFBRSxDQUFDOztJQW9CL0IsQ0FBQztJQWxCTywyQ0FBVyxHQUFsQixVQUFtQixPQUFlLEVBQUUsSUFBWSxFQUFFLGFBQXFCLEVBQUUsUUFBZ0IsRUFBRSxRQUFxQjtRQUFyQix5QkFBQSxFQUFBLGFBQXFCO1FBQy9HLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxvQ0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxvQ0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQ0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU0sb0NBQUksR0FBWDtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRU0sNkNBQWEsR0FBcEI7UUFDQywyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUMsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDeEksQ0FBQztJQTlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZEQUNpQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBEQUNjO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bUVBQ3VCO0lBRTFDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OERBQ2tCO0lBVGpCLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBa0N6QztJQUFELDRCQUFDO0NBbENELEFBa0NDLENBbENrRCxFQUFFLENBQUMsU0FBUyxHQWtDOUQ7a0JBbENvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRzEwMDlVdGlsIGZyb20gXCIuLi8uLi9iYXNlL1V0aWwvYWthLWcxMDA5LW51bWJlci1jb252ZXJ0ZXJcIjtcbmltcG9ydCB7IEcxMDA5RXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOVBvcHVwSGlzdG9yeUl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHJpdmF0ZSBsYmxTZXNzaW9uOiBjYy5MYWJlbCA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHJpdmF0ZSBsYmxUaW1lOiBjYy5MYWJlbCA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHJpdmF0ZSBsYmxUb3RhbEJldFBvaW50OiBjYy5MYWJlbCA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHJpdmF0ZSBsYmxUb3RhbFdpbjogY2MuTGFiZWwgPSBudWxsO1xuXG5cdHByaXZhdGUgc3BpblJlc3VpbHQ6IHN0cmluZ1tdID0gW107XG5cblx0cHJpdmF0ZSBzZXNzaW9uOiBzdHJpbmcgPSBcIlwiO1xuXHRwcml2YXRlIHRvdGFsV2luOiBzdHJpbmcgPSBcIlwiO1xuXG5cdHB1YmxpYyBTZXRJbmZvSXRlbShzZXNzaW9uOiBzdHJpbmcsIHRpbWU6IHN0cmluZywgdG90YWxCZXRQb2ludDogbnVtYmVyLCB0b3RhbFdpbjogbnVtYmVyLCBzcGluRGF0YTogc3RyaW5nW109W10pIHtcblx0XHR0aGlzLmxibFNlc3Npb24uc3RyaW5nID0gc2Vzc2lvbjtcblx0XHR0aGlzLmxibFRpbWUuc3RyaW5nID0gdGltZTtcblx0XHR0aGlzLmxibFRvdGFsQmV0UG9pbnQuc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0KHRvdGFsQmV0UG9pbnQpO1xuXHRcdHRoaXMubGJsVG90YWxXaW4uc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0KHRvdGFsV2luKTtcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLnNwaW5SZXN1aWx0ID0gc3BpbkRhdGE7XG5cdFx0dGhpcy50b3RhbFdpbiA9IEcxMDA5VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdCh0b3RhbFdpbik7XG5cdFx0dGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcblx0fVxuXG5cdHB1YmxpYyBIaWRlKCk6IHZvaWQge1xuXHRcdHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcblx0fVxuXG5cdHB1YmxpYyBvbkJ1dHRvbkNsaWNrKCk6IHZvaWQge1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiU2hvd0RldGFpbEhpc3RvcnlcIix7U2Vzc2lvbjp0aGlzLnNlc3Npb24sVG90YWxXaW46dGhpcy50b3RhbFdpbixTcGluUmVzdWlsdDp0aGlzLnNwaW5SZXN1aWx0fSk7XG5cdH1cbn1cbiJdfQ==