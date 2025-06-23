
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
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
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
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("StartPresentWinCombo", this.onStartPresentWinCombo.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("DataRespond", this.onDataRespond.bind(this));
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
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ExplodeCellsComplete");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdmVuZ2VyLWdhbWVcXGV4cGxvZGluZy1wYW5lbFxcYXZlbmdlci1leHBsb2RpbmctcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0VBQTRFO0FBQzVFLHFFQUE4RDtBQUM5RCxtRUFBcUQ7QUFFL0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFtREM7UUFoREcsZUFBUyxHQUFzQixFQUFFLENBQUM7UUFHbEMsb0JBQWMsR0FBb0IsRUFBRSxDQUFDO1FBRTdCLHlCQUFtQixHQUFHLEtBQUssQ0FBQztRQUM1QixjQUFRLEdBQWEsSUFBSSxDQUFDOztJQTBDdEMsQ0FBQztJQXhDVyxpQ0FBUSxHQUFoQjtRQUNJLHlDQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUcseUNBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTVGLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO1lBQzNCLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxLQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHNDQUFhLEdBQXJCLFVBQXNCLEtBQUs7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVPLCtDQUFzQixHQUE5QixVQUErQixTQUFTO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO1lBQzNCLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU8sK0NBQXNCLEdBQTlCLFVBQStCLFNBQWM7UUFBN0MsaUJBTUM7UUFMRyxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLGNBQWM7WUFDMUMsSUFBSSxVQUFVLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFTywrQ0FBc0IsR0FBOUI7UUFDSSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUMxQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLHlDQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ25FO0lBQ0wsQ0FBQztJQS9DRDtRQURDLFFBQVEsQ0FBQywyQkFBZSxDQUFDO3FEQUNRO0lBR2xDO1FBREMsUUFBUSxDQUFDLGdDQUFhLENBQUM7MERBQ2E7SUFOcEIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQW1EbEM7SUFBRCxxQkFBQztDQW5ERCxBQW1EQyxDQW5EMkMsRUFBRSxDQUFDLFNBQVMsR0FtRHZEO2tCQW5Eb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNsb3Q0NUFuaW1hdGlvblByb3ZpZGVyTWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2FuaW1hdGlvbi9TbG90NDUtYW5pbWF0aW9uLXByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IFNsb3Q0NUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9TbG90NDUtZXZlbnQtbWFuYWdlclwiO1xyXG5pbXBvcnQgQXZlbmdlclNwaW5JdGVtIGZyb20gXCIuLi9zcGluLXBhbmVsL2F2ZW5nZXItc3Bpbi1pdGVtXCI7XHJcbmltcG9ydCBFeHBsb2RpbmdDZWxsIGZyb20gXCIuL2F2ZW5nZXItZXhwbG9kaW5nLWNlbGxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBsb2RpbmdQYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEF2ZW5nZXJTcGluSXRlbSlcclxuICAgIHNwaW5JdGVtczogQXZlbmdlclNwaW5JdGVtW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoRXhwbG9kaW5nQ2VsbClcclxuICAgIEV4cGxvZGluZ0NlbGxzOiBFeHBsb2RpbmdDZWxsW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGlzU3RhcnRFeHBsb2RlQ2VsbHMgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgb2xkQ2VsbHM6IHN0cmluZ1tdID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyKCk6IHZvaWQge1xyXG4gICAgICAgIFNsb3Q0NUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU3RhcnRQcmVzZW50V2luQ29tYm9cIiwgdGhpcy5vblN0YXJ0UHJlc2VudFdpbkNvbWJvLmJpbmQodGhpcykpO1xyXG4gICAgICAgIFNsb3Q0NUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiRGF0YVJlc3BvbmRcIiwgdGhpcy5vbkRhdGFSZXNwb25kLmJpbmQodGhpcykpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMuc3Bpbkl0ZW1zLmZvckVhY2goc3Bpbkl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBzcGluSXRlbS5vbkV4cGxvZGVDb21wbGV0ZWQgPSB0aGlzLmhhbmRsZUV4cGxvZGVDb21wbGV0ZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRGF0YVJlc3BvbmQoY2VsbHMpIHtcclxuICAgICAgICB0aGlzLm9sZENlbGxzID0gY2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblN0YXJ0UHJlc2VudFdpbkNvbWJvKGNvbWJvRGF0YSkge1xyXG4gICAgICAgIHRoaXMuaXNTdGFydEV4cGxvZGVDZWxscyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGluSXRlbXMuZm9yRWFjaChzcGluSXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHNwaW5JdGVtLlN0YXJ0RXhwbG9kZUNlbGxzKGNvbWJvRGF0YS5leHBsb2RlZENlbGxzLCBjb21ib0RhdGEuQ2VsbHMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXlFZmZlY3RFeHBsb2RlQ2VsbHMoY29tYm9EYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBsYXlFZmZlY3RFeHBsb2RlQ2VsbHMoY29tYm9EYXRhOiBhbnkpIHtcclxuICAgICAgICBjb21ib0RhdGEuZXhwbG9kZWRDZWxscy5mb3JFYWNoKGlkRXhwbG9kZWRDZWxsID0+IHtcclxuICAgICAgICAgICAgdmFyIG5hbWVTeW1ib2wgPSB0aGlzLm9sZENlbGxzW2lkRXhwbG9kZWRDZWxsXTtcclxuICAgICAgICAgICAgdGhpcy5FeHBsb2RpbmdDZWxsc1tpZEV4cGxvZGVkQ2VsbF0uUGxheUVmZmVjdEV4cGxvZGVDZWxscyhuYW1lU3ltYm9sKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9sZENlbGxzID0gY29tYm9EYXRhLkNlbGxzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXhwbG9kZUNvbXBsZXRlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0RXhwbG9kZUNlbGxzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydEV4cGxvZGVDZWxscyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBTbG90NDVFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJFeHBsb2RlQ2VsbHNDb21wbGV0ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19