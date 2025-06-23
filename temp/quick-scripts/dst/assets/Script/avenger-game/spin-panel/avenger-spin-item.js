
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/avenger-game/spin-panel/avenger-spin-item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdmVuZ2VyLWdhbWVcXHNwaW4tcGFuZWxcXGF2ZW5nZXItc3Bpbi1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlFQUEyRjtBQUUzRiwrRUFBNEU7QUFDNUUseUVBQThEO0FBRXhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTZDLG1DQUFtQjtJQUFoRTtRQUFBLHFFQTZJQztRQTFJQSxlQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDZiwwQkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDM0Isd0JBQWtCLEdBQWEsY0FBUSxDQUFDLENBQUM7O0lBd0lqRCxDQUFDO0lBdElBLG9DQUFVLEdBQVYsVUFBVyxFQUFVO0lBQ3JCLENBQUM7SUFDUyxtQ0FBUyxHQUFuQjtJQUNBLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQUEsaUJBSUM7UUFIQSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDMUIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGdDQUFNLEdBQU47UUFBQSxpQkFtQkM7UUFsQkEsSUFBSSxDQUFDLEtBQUssR0FBRyxpQ0FBYyxDQUFDLE1BQU0sQ0FBQztnQ0FDMUIsU0FBUztZQUNqQixJQUFNLFFBQVEsR0FBRyxPQUFLLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUUzQyxJQUFJLGNBQWMsR0FBRyxPQUFLLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFELElBQUksWUFBWSxHQUFHLGNBQWMsR0FBRyxPQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsMkNBQWUsQ0FBQyxtQkFB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LENBQUM7b0JBQ0wsSUFBSSxLQUFLLElBQUksbUJBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDNUMsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7cUJBQzFCO2dCQUNGLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ1o7OzJCQWZJLGFBQWE7UUFObkIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRTtvQkFBakQsS0FBSztTQXNCYjtJQUNGLENBQUM7SUF6SUQ7UUFEQyxRQUFRLEVBQUU7c0RBQ1k7SUFISCxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBNkluQztJQUFELHNCQUFDO0NBN0lELEFBNklDLENBN0k0QywwQkFBbUIsR0E2SS9EO2tCQTdJb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbG90NDVDZWxsSXRlbUFjdG9yIGZyb20gXCIuLi8uLi9VSS9zcGluLXBhbmVsL1Nsb3Q0NS1jZWxsLWl0ZW1cIjtcclxuaW1wb3J0IFNsb3Q0NVNwaW5JdGVtQWN0b3IsIHsgRVNwaW5uaW5nU3RhdGUgfSBmcm9tIFwiLi4vLi4vVUkvc3Bpbi1wYW5lbC9TbG90NDUtc3Bpbi1pdGVtXCI7XHJcbmltcG9ydCB7IFNsb3Q0NVNwaW5JdGVtRGF0YSB9IGZyb20gXCIuLi8uLi9VSS9zcGluLXBhbmVsL1Nsb3Q0NS1zcGluLWl0ZW0tZGF0YVwiO1xyXG5pbXBvcnQgeyBTbG90NDVFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvU2xvdDQ1LWV2ZW50LW1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU3BpblBhbmVsQ29uZmlnIH0gZnJvbSBcIi4vYXZlbmdlci1zcGluLXBhbmVsLWNvbmZpZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZlbmdlclNwaW5JdGVtIGV4dGVuZHMgU2xvdDQ1U3Bpbkl0ZW1BY3RvciB7XHJcblxyXG5cdEBwcm9wZXJ0eSgpXHJcblx0cmVlbEluZGV4OiBudW1iZXIgPSAtMTtcclxuXHRwcml2YXRlIGFyclN0YXJ0WVBvc0NlbGxJdGVtID0gW107XHJcblx0cHVibGljIG9uRXhwbG9kZUNvbXBsZXRlZDogRnVuY3Rpb24gPSAoKSA9PiB7IH07XHJcblxyXG5cdGxhdGVVcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cdH1cclxuXHRwcm90ZWN0ZWQgZml4VXBkYXRlKCk6IHZvaWQge1xyXG5cdH1cclxuXHJcblx0b25Mb2FkKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jZWxsSXRlbXMuZm9yRWFjaChjZWxsID0+IHtcclxuXHRcdFx0dGhpcy5hcnJTdGFydFlQb3NDZWxsSXRlbS5wdXNoKGNlbGwubm9kZS55KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2Nyb2xsKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zdGF0ZSA9IEVTcGlubmluZ1N0YXRlLlNjcm9sbDtcclxuXHRcdGZvciAobGV0IGNlbGxJbmRleCA9IDA7IGNlbGxJbmRleCA8IHRoaXMuY2VsbEl0ZW1zLmxlbmd0aDsgY2VsbEluZGV4KyspIHtcclxuXHRcdFx0Y29uc3QgY2VsbEl0ZW0gPSB0aGlzLmNlbGxJdGVtc1tjZWxsSW5kZXhdO1xyXG5cclxuXHRcdFx0bGV0IHN0YXJ0WVBvc2l0aW9uID0gdGhpcy5hcnJTdGFydFlQb3NDZWxsSXRlbVtjZWxsSW5kZXhdO1xyXG5cdFx0XHRsZXQgZW5kWVBvc2l0aW9uID0gc3RhcnRZUG9zaXRpb24gLSB0aGlzLm5vZGUuaGVpZ2h0IC0gU3BpblBhbmVsQ29uZmlnLlNwYXduZWRPZmZzZXRIZWlnaHQ7XHJcblx0XHRcdGxldCBzcGF3bmVkWVBvc2l0aW9uID0gc3RhcnRZUG9zaXRpb24gKyB0aGlzLm5vZGUuaGVpZ2h0ICsgU3BpblBhbmVsQ29uZmlnLlNwYXduZWRPZmZzZXRIZWlnaHQ7XHJcblx0XHRcdGxldCBjb3VudCA9IGNlbGxJbmRleDtcclxuXHJcblx0XHRcdHZhciB0d2VlbkRyb3BEb3duID0gY2MudHdlZW4oY2VsbEl0ZW0ubm9kZSlcclxuXHRcdFx0XHQudG8oU3BpblBhbmVsQ29uZmlnLkRyb3BEb3duRHVyYXRpb24sIHsgeTogZW5kWVBvc2l0aW9uIH0sIHsgZWFzaW5nOiBTcGluUGFuZWxDb25maWcuRWFzaW5nRHJvcERvd24gfSlcclxuXHRcdFx0XHQuY2FsbCgoKSA9PiB7XHJcblx0XHRcdFx0XHRjZWxsSXRlbS5ub2RlLnkgPSBzcGF3bmVkWVBvc2l0aW9uO1xyXG5cdFx0XHRcdFx0aWYgKGNvdW50ID09IHRoaXMuY2VsbEl0ZW1zLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5vblJlYWR5VG9TdG9wKHRoaXMuY2VsbEluZGljZXMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pLnN0YXJ0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdG9wU2Nyb2xsKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zdGF0ZSA9IEVTcGlubmluZ1N0YXRlLlN0b3BTY3JvbGw7XHJcblx0XHRmb3IgKGxldCBjZWxsSW5kZXggPSAwOyBjZWxsSW5kZXggPCB0aGlzLmNlbGxJdGVtcy5sZW5ndGg7IGNlbGxJbmRleCsrKSB7XHJcblx0XHRcdGNvbnN0IGNlbGxJdGVtID0gdGhpcy5jZWxsSXRlbXNbY2VsbEluZGV4XTtcclxuXHRcdFx0bGV0IGVuZFlQb3NpdGlvbiA9IHRoaXMuYXJyU3RhcnRZUG9zQ2VsbEl0ZW1bY2VsbEluZGV4XTtcclxuXHRcdFx0bGV0IGNvdW50ID0gY2VsbEluZGV4O1xyXG5cdFx0XHR2YXIgdHdlZW5Ecm9wRG93biA9IGNjLnR3ZWVuKGNlbGxJdGVtLm5vZGUpXHJcblx0XHRcdFx0LnRvKFNwaW5QYW5lbENvbmZpZy5Ecm9wRG93bkR1cmF0aW9uLCB7IHk6IGVuZFlQb3NpdGlvbiB9LCB7IGVhc2luZzogU3BpblBhbmVsQ29uZmlnLkVhc2luZ0Ryb3BEb3duIH0pXHJcblx0XHRcdFx0LmNhbGwoKCk9PntcclxuXHRcdFx0XHRcdFNsb3Q0NUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeSgnUGxheVNGWCcsIHsgc2Z4TmFtZTogJ3NmeF9jZWxsX2Ryb3BfZG93bicsIGlzTG9vcDogZmFsc2UgfSk7XHJcblx0XHRcdFx0XHRTbG90NDVFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoJ0NlbGxEcm9wQ29tcGxldGVkJywgY2VsbEl0ZW0uR2V0Q2VsbEluZGV4KCkpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRvKFNwaW5QYW5lbENvbmZpZy5Sb3RhdGlvbkR1cmF0aW9uLCB7IGFuZ2xlOiBTcGluUGFuZWxDb25maWcuU2hha2VSb3RhdGlvbiB9LCB7IGVhc2luZzogU3BpblBhbmVsQ29uZmlnLkVhc2luZ0Ryb3BEb3duIH0pXHJcblx0XHRcdFx0LnRvKFNwaW5QYW5lbENvbmZpZy5Cb3VuY2VEdXJhdGlvbiwgeyB5OiBlbmRZUG9zaXRpb24gKyBTcGluUGFuZWxDb25maWcuQm91bmNlZE9mZnNldEhlaWdodCwgYW5nbGU6IC1TcGluUGFuZWxDb25maWcuU2hha2VSb3RhdGlvbiAvIDIgfSwgeyBlYXNpbmc6IFNwaW5QYW5lbENvbmZpZy5FYXNpbmdEcm9wRG93biB9KVxyXG5cdFx0XHRcdC50byhTcGluUGFuZWxDb25maWcuQm91bmNlRHVyYXRpb24sIHsgeTogZW5kWVBvc2l0aW9uIC0gU3BpblBhbmVsQ29uZmlnLkJvdW5jZWRPZmZzZXRIZWlnaHQgLyAyLCBhbmdsZTogMCB9LCB7IGVhc2luZzogU3BpblBhbmVsQ29uZmlnLkVhc2luZ0Ryb3BEb3duIH0pXHJcblx0XHRcdFx0LnRvKFNwaW5QYW5lbENvbmZpZy5Cb3VuY2VEdXJhdGlvbiwgeyB5OiBlbmRZUG9zaXRpb24gfSwgeyBlYXNpbmc6IFNwaW5QYW5lbENvbmZpZy5FYXNpbmdEcm9wRG93biB9KVxyXG5cdFx0XHRcdC5jYWxsKCgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChjb3VudCA9PSB0aGlzLmNlbGxJdGVtcy5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMub25SZWFkeUJvdW5jZVVwKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcENvbXBsZXRlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSkuc3RhcnQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBzZXRGaW5hbFJlc3VsdHMoKTogdm9pZCB7XHJcblx0XHRsZXQgcmVzdWx0SW5kZXggPSAwO1xyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY2VsbEl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdFx0XHRsZXQgY2VsbEl0ZW0gPSB0aGlzLmNlbGxJdGVtc1tpbmRleF07XHJcblx0XHRcdGxldCBjZWxsSW5kZXggPSB0aGlzLm9yaWdpbkluZGljZXNbaW5kZXhdO1xyXG5cdFx0XHRjZWxsSXRlbS5TZXRDZWxsSW5kZXgoY2VsbEluZGV4KTtcclxuXHRcdFx0aWYgKGNlbGxJbmRleCA+PSAwKSB7XHJcblx0XHRcdFx0Y2VsbEl0ZW0uU2V0SXRlbSh0aGlzLnJhd1Jlc3VsdEl0ZW1zW3Jlc3VsdEluZGV4KytdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIFN0YXJ0RXhwbG9kZUNlbGxzKGV4cGxvZGVkQ2VsbHMsIGFyck5ld0l0ZW0pIHtcclxuXHRcdHZhciBhcnJOb2RlRXhwbG9kZWRDZWxsID0gW107XHJcblx0XHRleHBsb2RlZENlbGxzLmZvckVhY2goaWQgPT4ge1xyXG5cdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jZWxsSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdFx0Y29uc3QgY2VsbEl0ZW0gPSB0aGlzLmNlbGxJdGVtc1tpbmRleF07XHJcblx0XHRcdFx0aWYgKGNlbGxJdGVtLkdldENlbGxJbmRleCgpID09IGlkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNlbGxJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0dGhpcy5jZWxsSXRlbXMudW5zaGlmdChjZWxsSXRlbSk7XHJcblx0XHRcdFx0XHRhcnJOb2RlRXhwbG9kZWRDZWxsLnVuc2hpZnQoY2VsbEl0ZW0ubm9kZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyTm9kZUV4cGxvZGVkQ2VsbC5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3Qgbm9kZSA9IGFyck5vZGVFeHBsb2RlZENlbGxbaW5kZXhdO1xyXG5cdFx0XHRsZXQgY291bnQgPSBpbmRleDtcclxuXHRcdFx0dmFyIHR3ZWVuRXhwbG9kZSA9IGNjLnR3ZWVuKG5vZGUpXHJcblx0XHRcdFx0LmRlbGF5KHRoaXMucmVlbEluZGV4ICogMC4xKVxyXG5cdFx0XHRcdC50byhTcGluUGFuZWxDb25maWcuRmFkZUNlbGxEdXJhdGlvbiwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiAnbGluZWFyJyB9KVxyXG5cdFx0XHRcdC5kZWxheShTcGluUGFuZWxDb25maWcuRXhwbG9kZUR1cmF0aW9uIC0gU3BpblBhbmVsQ29uZmlnLkZhZGVDZWxsRHVyYXRpb24pXHJcblx0XHRcdFx0LmNhbGwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHN0YXJ0WVBvc2l0aW9uID0gdGhpcy5hcnJTdGFydFlQb3NDZWxsSXRlbVtjb3VudF07XHJcblx0XHRcdFx0XHRub2RlLnkgPSBzdGFydFlQb3NpdGlvbiArIHRoaXMubm9kZS5oZWlnaHQ7XHJcblx0XHRcdFx0XHRub2RlLm9wYWNpdHkgPSAyNTU7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGNvdW50ID09IGFyck5vZGVFeHBsb2RlZENlbGwubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jZWxsSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jZWxsSXRlbXNbaW5kZXhdLlNldENlbGxJbmRleCh0aGlzLmNlbGxJbmRpY2VzW2luZGV4XSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5yYXdSZXN1bHRJdGVtcz0gW107XHJcblx0XHRcdFx0XHRcdHRoaXMucmVzdWx0SXRlbXMgPSBbXTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRSZXN1bHRJdGVtcyhhcnJOZXdJdGVtKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRGaW5hbFJlc3VsdHMoKTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcEV4cGxvZGVDZWxscyhhcnJOb2RlRXhwbG9kZWRDZWxsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KS5zdGFydCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdG9wRXhwbG9kZUNlbGxzKGFyck5vZGVFeHBsb2RlZENlbGwpIHtcclxuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNlbGxJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3QgY2VsbEl0ZW0gPSB0aGlzLmNlbGxJdGVtc1tpbmRleF07XHJcblx0XHRcdGxldCBjb3VudCA9IGluZGV4O1xyXG5cdFx0XHRsZXQgZGVzWVBvc3Rpb24gPSB0aGlzLmFyclN0YXJ0WVBvc0NlbGxJdGVtW2luZGV4XTtcclxuXHRcdFx0aWYgKGRlc1lQb3N0aW9uICE9IGNlbGxJdGVtLm5vZGUueSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZhciB0d2VlbkRyb3BEb3duID0gY2MudHdlZW4oY2VsbEl0ZW0ubm9kZSlcclxuXHRcdFx0XHRcdC50byhTcGluUGFuZWxDb25maWcuRHJvcERvd25EdXJhdGlvbiwgeyB5OiBkZXNZUG9zdGlvbiB9LCB7IGVhc2luZzogU3BpblBhbmVsQ29uZmlnLkVhc2luZ0Ryb3BEb3duIH0pXHJcblx0XHRcdFx0XHQuY2FsbCgoKT0+e1xyXG5cdFx0XHRcdFx0XHRTbG90NDVFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoJ1BsYXlTRlgnLCB7IHNmeE5hbWU6ICdzZnhfY2VsbF9kcm9wX2Rvd24nLCBpc0xvb3A6IGZhbHNlIH0pO1xyXG5cdFx0XHRcdFx0XHRTbG90NDVFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoJ0NlbGxEcm9wQ29tcGxldGVkJywgY2VsbEl0ZW0uR2V0Q2VsbEluZGV4KCkpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC50byhTcGluUGFuZWxDb25maWcuUm90YXRpb25EdXJhdGlvbiwgeyBhbmdsZTogU3BpblBhbmVsQ29uZmlnLlNoYWtlUm90YXRpb24gfSwgeyBlYXNpbmc6IFNwaW5QYW5lbENvbmZpZy5FYXNpbmdEcm9wRG93biB9KVxyXG5cdFx0XHRcdFx0LnRvKFNwaW5QYW5lbENvbmZpZy5Cb3VuY2VEdXJhdGlvbiwgeyB5OiBkZXNZUG9zdGlvbiArIFNwaW5QYW5lbENvbmZpZy5Cb3VuY2VkT2Zmc2V0SGVpZ2h0LCBhbmdsZTogLVNwaW5QYW5lbENvbmZpZy5TaGFrZVJvdGF0aW9uIC8gMiB9LCB7IGVhc2luZzogU3BpblBhbmVsQ29uZmlnLkVhc2luZ0Ryb3BEb3duIH0pXHJcblx0XHRcdFx0XHQudG8oU3BpblBhbmVsQ29uZmlnLkJvdW5jZUR1cmF0aW9uLCB7IHk6IGRlc1lQb3N0aW9uIC0gU3BpblBhbmVsQ29uZmlnLkJvdW5jZWRPZmZzZXRIZWlnaHQgLyAyLCBhbmdsZTogMCB9LCB7IGVhc2luZzogU3BpblBhbmVsQ29uZmlnLkVhc2luZ0Ryb3BEb3duIH0pXHJcblx0XHRcdFx0XHQudG8oU3BpblBhbmVsQ29uZmlnLkJvdW5jZUR1cmF0aW9uLCB7IHk6IGRlc1lQb3N0aW9uIH0sIHsgZWFzaW5nOiBTcGluUGFuZWxDb25maWcuRWFzaW5nRHJvcERvd24gfSlcclxuXHRcdFx0XHRcdC5jYWxsKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGNvdW50ID09IGFyck5vZGVFeHBsb2RlZENlbGwubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMub25FeHBsb2RlQ29tcGxldGVkKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pLnN0YXJ0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19