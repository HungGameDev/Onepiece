"use strict";
cc._RF.push(module, '4f01fnifIBMko83WEJM7hoX', 'avenger-spin-item');
// Script/avenger-game/spin-panel/avenger-spin-item.ts

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
var Slot45_spin_item_1 = require("../../UI/spin-panel/Slot45-spin-item");
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var avenger_spin_panel_config_1 = require("./avenger-spin-panel-config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AvengerSpinItem = /** @class */ (function (_super) {
    __extends(AvengerSpinItem, _super);
    function AvengerSpinItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.reelIndex = -1;
        _this.arrStartYPosCellItem = [];
        _this.onExplodeCompleted = function () { };
        return _this;
    }
    AvengerSpinItem.prototype.lateUpdate = function (dt) {
    };
    AvengerSpinItem.prototype.fixUpdate = function () {
    };
    AvengerSpinItem.prototype.onLoad = function () {
        var _this = this;
        this.cellItems.forEach(function (cell) {
            _this.arrStartYPosCellItem.push(cell.node.y);
        });
    };
    AvengerSpinItem.prototype.scroll = function () {
        var _this = this;
        this.state = Slot45_spin_item_1.ESpinningState.Scroll;
        var _loop_1 = function (cellIndex) {
            var cellItem = this_1.cellItems[cellIndex];
            var startYPosition = this_1.arrStartYPosCellItem[cellIndex];
            var endYPosition = startYPosition - this_1.node.height - avenger_spin_panel_config_1.SpinPanelConfig.SpawnedOffsetHeight;
            var spawnedYPosition = startYPosition + this_1.node.height + avenger_spin_panel_config_1.SpinPanelConfig.SpawnedOffsetHeight;
            var count = cellIndex;
            tweenDropDown = cc.tween(cellItem.node)
                .to(avenger_spin_panel_config_1.SpinPanelConfig.DropDownDuration, { y: endYPosition }, { easing: avenger_spin_panel_config_1.SpinPanelConfig.EasingDropDown })
                .call(function () {
                cellItem.node.y = spawnedYPosition;
                if (count == _this.cellItems.length - 1) {
                    _this.onReadyToStop(_this.cellIndices);
                }
            }).start();
        };
        var this_1 = this, tweenDropDown;
        for (var cellIndex = 0; cellIndex < this.cellItems.length; cellIndex++) {
            _loop_1(cellIndex);
        }
    };
    AvengerSpinItem.prototype.stopScroll = function () {
        var _this = this;
        this.state = Slot45_spin_item_1.ESpinningState.StopScroll;
        var _loop_2 = function (cellIndex) {
            var cellItem = this_2.cellItems[cellIndex];
            var endYPosition = this_2.arrStartYPosCellItem[cellIndex];
            var count = cellIndex;
            tweenDropDown = cc.tween(cellItem.node)
                .to(avenger_spin_panel_config_1.SpinPanelConfig.DropDownDuration, { y: endYPosition }, { easing: avenger_spin_panel_config_1.SpinPanelConfig.EasingDropDown })
                .call(function () {
                Slot45_event_manager_1.Slot45EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_cell_drop_down', isLoop: false });
                Slot45_event_manager_1.Slot45EventManager.GetInstance().notify('CellDropCompleted', cellItem.GetCellIndex());
            })
                .to(avenger_spin_panel_config_1.SpinPanelConfig.RotationDuration, { angle: avenger_spin_panel_config_1.SpinPanelConfig.ShakeRotation }, { easing: avenger_spin_panel_config_1.SpinPanelConfig.EasingDropDown })
                .to(avenger_spin_panel_config_1.SpinPanelConfig.BounceDuration, { y: endYPosition + avenger_spin_panel_config_1.SpinPanelConfig.BouncedOffsetHeight, angle: -avenger_spin_panel_config_1.SpinPanelConfig.ShakeRotation / 2 }, { easing: avenger_spin_panel_config_1.SpinPanelConfig.EasingDropDown })
                .to(avenger_spin_panel_config_1.SpinPanelConfig.BounceDuration, { y: endYPosition - avenger_spin_panel_config_1.SpinPanelConfig.BouncedOffsetHeight / 2, angle: 0 }, { easing: avenger_spin_panel_config_1.SpinPanelConfig.EasingDropDown })
                .to(avenger_spin_panel_config_1.SpinPanelConfig.BounceDuration, { y: endYPosition }, { easing: avenger_spin_panel_config_1.SpinPanelConfig.EasingDropDown })
                .call(function () {
                if (count == _this.cellItems.length - 1) {
                    _this.onReadyBounceUp();
                    _this.stopComplete();
                }
            }).start();
        };
        var this_2 = this, tweenDropDown;
        for (var cellIndex = 0; cellIndex < this.cellItems.length; cellIndex++) {
            _loop_2(cellIndex);
        }
    };
    AvengerSpinItem.prototype.setFinalResults = function () {
        var resultIndex = 0;
        for (var index = 0; index < this.cellItems.length; index++) {
            var cellItem = this.cellItems[index];
            var cellIndex = this.originIndices[index];
            cellItem.SetCellIndex(cellIndex);
            if (cellIndex >= 0) {
                cellItem.SetItem(this.rawResultItems[resultIndex++]);
            }
        }
    };
    AvengerSpinItem.prototype.StartExplodeCells = function (explodedCells, arrNewItem) {
        var _this = this;
        var arrNodeExplodedCell = [];
        explodedCells.forEach(function (id) {
            for (var index = 0; index < _this.cellItems.length; index++) {
                var cellItem = _this.cellItems[index];
                if (cellItem.GetCellIndex() == id) {
                    _this.cellItems.splice(index, 1);
                    _this.cellItems.unshift(cellItem);
                    arrNodeExplodedCell.unshift(cellItem.node);
                }
            }
        });
        var _loop_3 = function (index) {
            var node = arrNodeExplodedCell[index];
            var count = index;
            tweenExplode = cc.tween(node)
                .delay(this_3.reelIndex * 0.1)
                .to(avenger_spin_panel_config_1.SpinPanelConfig.FadeCellDuration, { opacity: 0 }, { easing: 'linear' })
                .delay(avenger_spin_panel_config_1.SpinPanelConfig.ExplodeDuration - avenger_spin_panel_config_1.SpinPanelConfig.FadeCellDuration)
                .call(function () {
                var startYPosition = _this.arrStartYPosCellItem[count];
                node.y = startYPosition + _this.node.height;
                node.opacity = 255;
                if (count == arrNodeExplodedCell.length - 1) {
                    for (var index_1 = 0; index_1 < _this.cellItems.length; index_1++) {
                        _this.cellItems[index_1].SetCellIndex(_this.cellIndices[index_1]);
                    }
                    _this.rawResultItems = [];
                    _this.resultItems = [];
                    _this.setResultItems(arrNewItem);
                    _this.setFinalResults();
                    _this.stopExplodeCells(arrNodeExplodedCell);
                }
            }).start();
        };
        var this_3 = this, tweenExplode;
        for (var index = 0; index < arrNodeExplodedCell.length; index++) {
            _loop_3(index);
        }
    };
    AvengerSpinItem.prototype.stopExplodeCells = function (arrNodeExplodedCell) {
        var _this = this;
        var _loop_4 = function (index) {
            var cellItem = this_4.cellItems[index];
            var count = index;
            var desYPostion = this_4.arrStartYPosCellItem[index];
            if (desYPostion != cellItem.node.y) {
                tweenDropDown = cc.tween(cellItem.node)
                    .to(avenger_spin_panel_config_1.SpinPanelConfig.DropDownDuration, { y: desYPostion }, { easing: avenger_spin_panel_config_1.SpinPanelConfig.EasingDropDown })
                    .call(function () {
                    Slot45_event_manager_1.Slot45EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_cell_drop_down', isLoop: false });
                    Slot45_event_manager_1.Slot45EventManager.GetInstance().notify('CellDropCompleted', cellItem.GetCellIndex());
                })
                    .to(avenger_spin_panel_config_1.SpinPanelConfig.RotationDuration, { angle: avenger_spin_panel_config_1.SpinPanelConfig.ShakeRotation }, { easing: avenger_spin_panel_config_1.SpinPanelConfig.EasingDropDown })
                    .to(avenger_spin_panel_config_1.SpinPanelConfig.BounceDuration, { y: desYPostion + avenger_spin_panel_config_1.SpinPanelConfig.BouncedOffsetHeight, angle: -avenger_spin_panel_config_1.SpinPanelConfig.ShakeRotation / 2 }, { easing: avenger_spin_panel_config_1.SpinPanelConfig.EasingDropDown })
                    .to(avenger_spin_panel_config_1.SpinPanelConfig.BounceDuration, { y: desYPostion - avenger_spin_panel_config_1.SpinPanelConfig.BouncedOffsetHeight / 2, angle: 0 }, { easing: avenger_spin_panel_config_1.SpinPanelConfig.EasingDropDown })
                    .to(avenger_spin_panel_config_1.SpinPanelConfig.BounceDuration, { y: desYPostion }, { easing: avenger_spin_panel_config_1.SpinPanelConfig.EasingDropDown })
                    .call(function () {
                    if (count == arrNodeExplodedCell.length - 1) {
                        _this.onExplodeCompleted();
                    }
                }).start();
            }
        };
        var this_4 = this, tweenDropDown;
        for (var index = 0; index < this.cellItems.length; index++) {
            _loop_4(index);
        }
    };
    __decorate([
        property()
    ], AvengerSpinItem.prototype, "reelIndex", void 0);
    AvengerSpinItem = __decorate([
        ccclass
    ], AvengerSpinItem);
    return AvengerSpinItem;
}(Slot45_spin_item_1.default));
exports.default = AvengerSpinItem;

cc._RF.pop();