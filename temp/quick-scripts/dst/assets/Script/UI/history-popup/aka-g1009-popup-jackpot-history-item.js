
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/history-popup/aka-g1009-popup-jackpot-history-item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc0a99kI4tCaZpre2q2GriP', 'aka-g1009-popup-jackpot-history-item');
// Script/UI/history-popup/aka-g1009-popup-jackpot-history-item.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009PopupJackpotHistoryItem = /** @class */ (function (_super) {
    __extends(G1009PopupJackpotHistoryItem, _super);
    function G1009PopupJackpotHistoryItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblSesion = null;
        _this.lblTime = null;
        _this.lblUserName = null;
        _this.lblTotalWin = null;
        _this.lblWinType = null;
        return _this;
    }
    G1009PopupJackpotHistoryItem.prototype.SetInfoItem = function (session, time, userName, totalWin, winType) {
        this.lblSesion.string = session;
        this.lblTime.string = time;
        this.lblUserName.string = userName;
        this.lblTotalWin.string = aka_g1009_number_converter_1.default.Instance().NumberFormat(totalWin);
        this.lblWinType.string = winType;
        this.node.active = true;
    };
    G1009PopupJackpotHistoryItem.prototype.Hide = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], G1009PopupJackpotHistoryItem.prototype, "lblSesion", void 0);
    __decorate([
        property(cc.Label)
    ], G1009PopupJackpotHistoryItem.prototype, "lblTime", void 0);
    __decorate([
        property(cc.Label)
    ], G1009PopupJackpotHistoryItem.prototype, "lblUserName", void 0);
    __decorate([
        property(cc.Label)
    ], G1009PopupJackpotHistoryItem.prototype, "lblTotalWin", void 0);
    __decorate([
        property(cc.Label)
    ], G1009PopupJackpotHistoryItem.prototype, "lblWinType", void 0);
    G1009PopupJackpotHistoryItem = __decorate([
        ccclass
    ], G1009PopupJackpotHistoryItem);
    return G1009PopupJackpotHistoryItem;
}(cc.Component));
exports.default = G1009PopupJackpotHistoryItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvaGlzdG9yeS1wb3B1cC9ha2EtZzEwMDktcG9wdXAtamFja3BvdC1oaXN0b3J5LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUZBQW1FO0FBRTdELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBELGdEQUFZO0lBQXRFO1FBQUEscUVBd0JDO1FBckJRLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFhLElBQUksQ0FBQzs7SUFhckMsQ0FBQztJQVpPLGtEQUFXLEdBQWxCLFVBQW1CLE9BQWUsRUFBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBQyxRQUFnQixFQUFDLE9BQWU7UUFDakcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsb0NBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRU0sMkNBQUksR0FBWDtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBcEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bUVBQ2dCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aUVBQ2M7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxRUFDa0I7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxRUFDa0I7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvRUFDaUI7SUFYaEIsNEJBQTRCO1FBRGhELE9BQU87T0FDYSw0QkFBNEIsQ0F3QmhEO0lBQUQsbUNBQUM7Q0F4QkQsQUF3QkMsQ0F4QnlELEVBQUUsQ0FBQyxTQUFTLEdBd0JyRTtrQkF4Qm9CLDRCQUE0QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHMTAwOVV0aWwgZnJvbSBcIi4uLy4uL2Jhc2UvVXRpbC9ha2EtZzEwMDktbnVtYmVyLWNvbnZlcnRlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlQb3B1cEphY2twb3RIaXN0b3J5SXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblx0QHByb3BlcnR5KGNjLkxhYmVsKVxuXHRwcml2YXRlIGxibFNlc2lvbjogY2MuTGFiZWwgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG5cdHByaXZhdGUgbGJsVGltZTogY2MuTGFiZWwgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG5cdHByaXZhdGUgbGJsVXNlck5hbWU6IGNjLkxhYmVsID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLkxhYmVsKVxuXHRwcml2YXRlIGxibFRvdGFsV2luOiBjYy5MYWJlbCA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHJpdmF0ZSBsYmxXaW5UeXBlOiBjYy5MYWJlbCA9IG51bGw7XG5cdHB1YmxpYyBTZXRJbmZvSXRlbShzZXNzaW9uOiBzdHJpbmcsdGltZTogc3RyaW5nLCB1c2VyTmFtZTogc3RyaW5nLHRvdGFsV2luOiBudW1iZXIsd2luVHlwZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5sYmxTZXNpb24uc3RyaW5nID0gc2Vzc2lvbjtcblx0XHR0aGlzLmxibFRpbWUuc3RyaW5nID0gdGltZTtcblx0XHR0aGlzLmxibFVzZXJOYW1lLnN0cmluZyA9IHVzZXJOYW1lO1xuXHRcdHRoaXMubGJsVG90YWxXaW4uc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0KHRvdGFsV2luKTtcblx0XHR0aGlzLmxibFdpblR5cGUuc3RyaW5nID0gd2luVHlwZTtcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblx0fVxuXG5cdHB1YmxpYyBIaWRlKCk6IHZvaWQge1xuXHRcdHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcblx0fVxufVxuIl19