"use strict";
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