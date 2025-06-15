
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/avenger-game/exploding-panel/avenger-exploding-panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18769duQexMRrwsx78P301C', 'avenger-exploding-panel');
// Script/avenger-game/exploding-panel/avenger-exploding-panel.ts

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
var avenger_spin_item_1 = require("../spin-panel/avenger-spin-item");
var avenger_exploding_cell_1 = require("./avenger-exploding-cell");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ExplodingPanel = /** @class */ (function (_super) {
    __extends(ExplodingPanel, _super);
    function ExplodingPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spinItems = [];
        _this.ExplodingCells = [];
        _this.isStartExplodeCells = false;
        _this.oldCells = null;
        return _this;
    }
    ExplodingPanel.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("StartPresentWinCombo", this.onStartPresentWinCombo.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("DataRespond", this.onDataRespond.bind(this));
    };
    ExplodingPanel.prototype.onLoad = function () {
        var _this = this;
        this.register();
        this.spinItems.forEach(function (spinItem) {
            spinItem.onExplodeCompleted = _this.handleExplodeCompleted.bind(_this);
        });
    };
    ExplodingPanel.prototype.onDataRespond = function (cells) {
        this.oldCells = cells;
    };
    ExplodingPanel.prototype.onStartPresentWinCombo = function (comboData) {
        this.isStartExplodeCells = true;
        this.spinItems.forEach(function (spinItem) {
            spinItem.StartExplodeCells(comboData.explodedCells, comboData.Cells);
        });
        this.playEffectExplodeCells(comboData);
    };
    ExplodingPanel.prototype.playEffectExplodeCells = function (comboData) {
        var _this = this;
        comboData.explodedCells.forEach(function (idExplodedCell) {
            var nameSymbol = _this.oldCells[idExplodedCell];
            _this.ExplodingCells[idExplodedCell].PlayEffectExplodeCells(nameSymbol);
        });
        this.oldCells = comboData.Cells;
    };
    ExplodingPanel.prototype.handleExplodeCompleted = function () {
        if (this.isStartExplodeCells) {
            this.isStartExplodeCells = false;
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ExplodeCellsComplete");
        }
    };
    __decorate([
        property(avenger_spin_item_1.default)
    ], ExplodingPanel.prototype, "spinItems", void 0);
    __decorate([
        property(avenger_exploding_cell_1.default)
    ], ExplodingPanel.prototype, "ExplodingCells", void 0);
    ExplodingPanel = __decorate([
        ccclass
    ], ExplodingPanel);
    return ExplodingPanel;
}(cc.Component));
exports.default = ExplodingPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYXZlbmdlci1nYW1lL2V4cGxvZGluZy1wYW5lbC9hdmVuZ2VyLWV4cGxvZGluZy1wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxRkFBOEU7QUFDOUUscUVBQThEO0FBQzlELG1FQUFxRDtBQUUvQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW1EQztRQWhERyxlQUFTLEdBQXNCLEVBQUUsQ0FBQztRQUdsQyxvQkFBYyxHQUFvQixFQUFFLENBQUM7UUFFN0IseUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQzVCLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBMEN0QyxDQUFDO0lBeENXLGlDQUFRLEdBQWhCO1FBQ0ksMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RywyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFM0YsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7WUFDM0IsUUFBUSxDQUFDLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sc0NBQWEsR0FBckIsVUFBc0IsS0FBSztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRU8sK0NBQXNCLEdBQTlCLFVBQStCLFNBQVM7UUFDcEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7WUFDM0IsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTywrQ0FBc0IsR0FBOUIsVUFBK0IsU0FBYztRQUE3QyxpQkFNQztRQUxHLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsY0FBYztZQUMxQyxJQUFJLFVBQVUsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQy9DLEtBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVPLCtDQUFzQixHQUE5QjtRQUNJLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzFCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7WUFDakMsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDbEU7SUFDTCxDQUFDO0lBL0NEO1FBREMsUUFBUSxDQUFDLDJCQUFlLENBQUM7cURBQ1E7SUFHbEM7UUFEQyxRQUFRLENBQUMsZ0NBQWEsQ0FBQzswREFDYTtJQU5wQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBbURsQztJQUFELHFCQUFDO0NBbkRELEFBbURDLENBbkQyQyxFQUFFLENBQUMsU0FBUyxHQW1EdkQ7a0JBbkRvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRzEwMDlBbmltYXRpb25Qcm92aWRlck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9hbmltYXRpb24vYWthLWcxMDA5LWFuaW1hdGlvbi1wcm92aWRlclwiO1xuaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCBBdmVuZ2VyU3Bpbkl0ZW0gZnJvbSBcIi4uL3NwaW4tcGFuZWwvYXZlbmdlci1zcGluLWl0ZW1cIjtcbmltcG9ydCBFeHBsb2RpbmdDZWxsIGZyb20gXCIuL2F2ZW5nZXItZXhwbG9kaW5nLWNlbGxcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvZGluZ1BhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShBdmVuZ2VyU3Bpbkl0ZW0pXG4gICAgc3Bpbkl0ZW1zOiBBdmVuZ2VyU3Bpbkl0ZW1bXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KEV4cGxvZGluZ0NlbGwpXG4gICAgRXhwbG9kaW5nQ2VsbHM6IEV4cGxvZGluZ0NlbGxbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBpc1N0YXJ0RXhwbG9kZUNlbGxzID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBvbGRDZWxsczogc3RyaW5nW10gPSBudWxsO1xuXG4gICAgcHJpdmF0ZSByZWdpc3RlcigpOiB2b2lkIHtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlN0YXJ0UHJlc2VudFdpbkNvbWJvXCIsIHRoaXMub25TdGFydFByZXNlbnRXaW5Db21iby5iaW5kKHRoaXMpKTtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkRhdGFSZXNwb25kXCIsIHRoaXMub25EYXRhUmVzcG9uZC5iaW5kKHRoaXMpKTtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgICAgICB0aGlzLnNwaW5JdGVtcy5mb3JFYWNoKHNwaW5JdGVtID0+IHtcbiAgICAgICAgICAgIHNwaW5JdGVtLm9uRXhwbG9kZUNvbXBsZXRlZCA9IHRoaXMuaGFuZGxlRXhwbG9kZUNvbXBsZXRlZC5iaW5kKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRGF0YVJlc3BvbmQoY2VsbHMpIHtcbiAgICAgICAgdGhpcy5vbGRDZWxscyA9IGNlbGxzO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdGFydFByZXNlbnRXaW5Db21ibyhjb21ib0RhdGEpIHtcbiAgICAgICAgdGhpcy5pc1N0YXJ0RXhwbG9kZUNlbGxzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcGluSXRlbXMuZm9yRWFjaChzcGluSXRlbSA9PiB7XG4gICAgICAgICAgICBzcGluSXRlbS5TdGFydEV4cGxvZGVDZWxscyhjb21ib0RhdGEuZXhwbG9kZWRDZWxscywgY29tYm9EYXRhLkNlbGxzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wbGF5RWZmZWN0RXhwbG9kZUNlbGxzKGNvbWJvRGF0YSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF5RWZmZWN0RXhwbG9kZUNlbGxzKGNvbWJvRGF0YTogYW55KSB7XG4gICAgICAgIGNvbWJvRGF0YS5leHBsb2RlZENlbGxzLmZvckVhY2goaWRFeHBsb2RlZENlbGwgPT4ge1xuICAgICAgICAgICAgdmFyIG5hbWVTeW1ib2wgPSB0aGlzLm9sZENlbGxzW2lkRXhwbG9kZWRDZWxsXTtcbiAgICAgICAgICAgIHRoaXMuRXhwbG9kaW5nQ2VsbHNbaWRFeHBsb2RlZENlbGxdLlBsYXlFZmZlY3RFeHBsb2RlQ2VsbHMobmFtZVN5bWJvbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9sZENlbGxzID0gY29tYm9EYXRhLkNlbGxzO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRXhwbG9kZUNvbXBsZXRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydEV4cGxvZGVDZWxscykge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0RXhwbG9kZUNlbGxzID0gZmFsc2U7XG4gICAgICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIkV4cGxvZGVDZWxsc0NvbXBsZXRlXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19