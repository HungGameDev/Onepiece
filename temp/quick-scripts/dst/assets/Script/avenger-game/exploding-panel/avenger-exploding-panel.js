
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
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("StartPresentWinCombo", this.onStartPresentWinCombo.bind(this));
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("DataRespond", this.onDataRespond.bind(this));
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
            Slot45_event_manager_1.G1009EventManager.GetInstance().notify("ExplodeCellsComplete");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdmVuZ2VyLWdhbWVcXGV4cGxvZGluZy1wYW5lbFxcYXZlbmdlci1leHBsb2RpbmctcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0VBQTJFO0FBQzNFLHFFQUE4RDtBQUM5RCxtRUFBcUQ7QUFFL0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFtREM7UUFoREcsZUFBUyxHQUFzQixFQUFFLENBQUM7UUFHbEMsb0JBQWMsR0FBb0IsRUFBRSxDQUFDO1FBRTdCLHlCQUFtQixHQUFHLEtBQUssQ0FBQztRQUM1QixjQUFRLEdBQWEsSUFBSSxDQUFDOztJQTBDdEMsQ0FBQztJQXhDVyxpQ0FBUSxHQUFoQjtRQUNJLHdDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekcsd0NBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTNGLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO1lBQzNCLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxLQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHNDQUFhLEdBQXJCLFVBQXNCLEtBQUs7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVPLCtDQUFzQixHQUE5QixVQUErQixTQUFTO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO1lBQzNCLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU8sK0NBQXNCLEdBQTlCLFVBQStCLFNBQWM7UUFBN0MsaUJBTUM7UUFMRyxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLGNBQWM7WUFDMUMsSUFBSSxVQUFVLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFTywrQ0FBc0IsR0FBOUI7UUFDSSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUMxQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLHdDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0wsQ0FBQztJQS9DRDtRQURDLFFBQVEsQ0FBQywyQkFBZSxDQUFDO3FEQUNRO0lBR2xDO1FBREMsUUFBUSxDQUFDLGdDQUFhLENBQUM7MERBQ2E7SUFOcEIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQW1EbEM7SUFBRCxxQkFBQztDQW5ERCxBQW1EQyxDQW5EMkMsRUFBRSxDQUFDLFNBQVMsR0FtRHZEO2tCQW5Eb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcxMDA5QW5pbWF0aW9uUHJvdmlkZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvYW5pbWF0aW9uL1Nsb3Q0NS1hbmltYXRpb24tcHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvU2xvdDQ1LWV2ZW50LW1hbmFnZXJcIjtcclxuaW1wb3J0IEF2ZW5nZXJTcGluSXRlbSBmcm9tIFwiLi4vc3Bpbi1wYW5lbC9hdmVuZ2VyLXNwaW4taXRlbVwiO1xyXG5pbXBvcnQgRXhwbG9kaW5nQ2VsbCBmcm9tIFwiLi9hdmVuZ2VyLWV4cGxvZGluZy1jZWxsXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9kaW5nUGFuZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShBdmVuZ2VyU3Bpbkl0ZW0pXHJcbiAgICBzcGluSXRlbXM6IEF2ZW5nZXJTcGluSXRlbVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KEV4cGxvZGluZ0NlbGwpXHJcbiAgICBFeHBsb2RpbmdDZWxsczogRXhwbG9kaW5nQ2VsbFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBpc1N0YXJ0RXhwbG9kZUNlbGxzID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG9sZENlbGxzOiBzdHJpbmdbXSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlcigpOiB2b2lkIHtcclxuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU3RhcnRQcmVzZW50V2luQ29tYm9cIiwgdGhpcy5vblN0YXJ0UHJlc2VudFdpbkNvbWJvLmJpbmQodGhpcykpO1xyXG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJEYXRhUmVzcG9uZFwiLCB0aGlzLm9uRGF0YVJlc3BvbmQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgdGhpcy5zcGluSXRlbXMuZm9yRWFjaChzcGluSXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHNwaW5JdGVtLm9uRXhwbG9kZUNvbXBsZXRlZCA9IHRoaXMuaGFuZGxlRXhwbG9kZUNvbXBsZXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25EYXRhUmVzcG9uZChjZWxscykge1xyXG4gICAgICAgIHRoaXMub2xkQ2VsbHMgPSBjZWxscztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU3RhcnRQcmVzZW50V2luQ29tYm8oY29tYm9EYXRhKSB7XHJcbiAgICAgICAgdGhpcy5pc1N0YXJ0RXhwbG9kZUNlbGxzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNwaW5JdGVtcy5mb3JFYWNoKHNwaW5JdGVtID0+IHtcclxuICAgICAgICAgICAgc3Bpbkl0ZW0uU3RhcnRFeHBsb2RlQ2VsbHMoY29tYm9EYXRhLmV4cGxvZGVkQ2VsbHMsIGNvbWJvRGF0YS5DZWxscyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheUVmZmVjdEV4cGxvZGVDZWxscyhjb21ib0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGxheUVmZmVjdEV4cGxvZGVDZWxscyhjb21ib0RhdGE6IGFueSkge1xyXG4gICAgICAgIGNvbWJvRGF0YS5leHBsb2RlZENlbGxzLmZvckVhY2goaWRFeHBsb2RlZENlbGwgPT4ge1xyXG4gICAgICAgICAgICB2YXIgbmFtZVN5bWJvbCA9IHRoaXMub2xkQ2VsbHNbaWRFeHBsb2RlZENlbGxdO1xyXG4gICAgICAgICAgICB0aGlzLkV4cGxvZGluZ0NlbGxzW2lkRXhwbG9kZWRDZWxsXS5QbGF5RWZmZWN0RXhwbG9kZUNlbGxzKG5hbWVTeW1ib2wpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub2xkQ2VsbHMgPSBjb21ib0RhdGEuQ2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFeHBsb2RlQ29tcGxldGVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRFeHBsb2RlQ2VsbHMpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0RXhwbG9kZUNlbGxzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiRXhwbG9kZUNlbGxzQ29tcGxldGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==