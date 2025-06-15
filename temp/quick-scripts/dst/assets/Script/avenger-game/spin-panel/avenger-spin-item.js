
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
var aka_g1009_spin_item_1 = require("../../UI/spin-panel/aka-g1009-spin-item");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var avenger_spin_panel_config_1 = require("./avenger-spin-panel-config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AvengerSpinItem = /** @class */ (function (_super) {
    __extends(AvengerSpinItem, _super);
    function AvengerSpinItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
        this.state = aka_g1009_spin_item_1.ESpinningState.Scroll;
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
        this.state = aka_g1009_spin_item_1.ESpinningState.StopScroll;
        var _loop_2 = function (cellIndex) {
            var cellItem = this_2.cellItems[cellIndex];
            var endYPosition = this_2.arrStartYPosCellItem[cellIndex];
            var count = cellIndex;
            tweenDropDown = cc.tween(cellItem.node)
                .to(avenger_spin_panel_config_1.SpinPanelConfig.DropDownDuration, { y: endYPosition }, { easing: avenger_spin_panel_config_1.SpinPanelConfig.EasingDropDown })
                .call(function () { aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('CellDropCompleted', cellItem.GetCellIndex()); })
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
        var tweenExplode;
        for (var index = 0; index < arrNodeExplodedCell.length; index++) {
            _loop_3(index);
        }
    };
    AvengerSpinItem.prototype.stopExplodeCells = function (arrNodeExplodedCell) {
        var _this = this;
        var _loop_4 = function (index) {
            var cellItem = this_3.cellItems[index];
            var count = index;
            var desYPostion = this_3.arrStartYPosCellItem[index];
            if (desYPostion != cellItem.node.y) {
                tweenDropDown = cc.tween(cellItem.node)
                    .to(avenger_spin_panel_config_1.SpinPanelConfig.DropDownDuration, { y: desYPostion }, { easing: avenger_spin_panel_config_1.SpinPanelConfig.EasingDropDown })
                    .call(function () { aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('CellDropCompleted', cellItem.GetCellIndex()); })
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
        var this_3 = this, tweenDropDown;
        for (var index = 0; index < this.cellItems.length; index++) {
            _loop_4(index);
        }
    };
    AvengerSpinItem = __decorate([
        ccclass
    ], AvengerSpinItem);
    return AvengerSpinItem;
}(aka_g1009_spin_item_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYXZlbmdlci1nYW1lL3NwaW4tcGFuZWwvYXZlbmdlci1zcGluLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0VBQTZGO0FBRTdGLHFGQUE4RTtBQUM5RSx5RUFBOEQ7QUFFeEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBNkMsbUNBQWtCO0lBQS9EO1FBQUEscUVBb0lDO1FBbElRLDBCQUFvQixHQUFHLEVBQUUsQ0FBQztRQUMzQix3QkFBa0IsR0FBYSxjQUFRLENBQUMsQ0FBQzs7SUFpSWpELENBQUM7SUEvSEEsb0NBQVUsR0FBVixVQUFXLEVBQVU7SUFDckIsQ0FBQztJQUNTLG1DQUFTLEdBQW5CO0lBQ0EsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFBQSxpQkFJQztRQUhBLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUMxQixLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUFBLGlCQW1CQztRQWxCQSxJQUFJLENBQUMsS0FBSyxHQUFHLG9DQUFjLENBQUMsTUFBTSxDQUFDO2dDQUMxQixTQUFTO1lBQ2pCLElBQU0sUUFBUSxHQUFHLE9BQUssU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTNDLElBQUksY0FBYyxHQUFHLE9BQUssb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUQsSUFBSSxZQUFZLEdBQUcsY0FBYyxHQUFHLE9BQUssSUFBSSxDQUFDLE1BQU0sR0FBRywyQ0FBZSxDQUFDLG1CQUFtQixDQUFDO1lBQzNGLElBQUksZ0JBQWdCLEdBQUcsY0FB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b0luQztJQUFELHNCQUFDO0NBcElELEFBb0lDLENBcEk0Qyw2QkFBa0IsR0FvSTlEO2tCQXBJb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHMTAwOUNlbGxJdGVtQWN0b3IgZnJvbSBcIi4uLy4uL1VJL3NwaW4tcGFuZWwvYWthLWcxMDA5LWNlbGwtaXRlbVwiO1xuaW1wb3J0IEcxMDA5U3Bpbkl0ZW1BY3RvciwgeyBFU3Bpbm5pbmdTdGF0ZSB9IGZyb20gXCIuLi8uLi9VSS9zcGluLXBhbmVsL2FrYS1nMTAwOS1zcGluLWl0ZW1cIjtcbmltcG9ydCB7IEcxMDA5U3Bpbkl0ZW1EYXRhIH0gZnJvbSBcIi4uLy4uL1VJL3NwaW4tcGFuZWwvYWthLWcxMDA5LXNwaW4taXRlbS1kYXRhXCI7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IHsgU3BpblBhbmVsQ29uZmlnIH0gZnJvbSBcIi4vYXZlbmdlci1zcGluLXBhbmVsLWNvbmZpZ1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2ZW5nZXJTcGluSXRlbSBleHRlbmRzIEcxMDA5U3Bpbkl0ZW1BY3RvciB7XG5cblx0cHJpdmF0ZSBhcnJTdGFydFlQb3NDZWxsSXRlbSA9IFtdO1xuXHRwdWJsaWMgb25FeHBsb2RlQ29tcGxldGVkOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcblxuXHRsYXRlVXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcblx0fVxuXHRwcm90ZWN0ZWQgZml4VXBkYXRlKCk6IHZvaWQge1xuXHR9XG5cblx0b25Mb2FkKCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEl0ZW1zLmZvckVhY2goY2VsbCA9PiB7XG5cdFx0XHR0aGlzLmFyclN0YXJ0WVBvc0NlbGxJdGVtLnB1c2goY2VsbC5ub2RlLnkpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2Nyb2xsKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUgPSBFU3Bpbm5pbmdTdGF0ZS5TY3JvbGw7XG5cdFx0Zm9yIChsZXQgY2VsbEluZGV4ID0gMDsgY2VsbEluZGV4IDwgdGhpcy5jZWxsSXRlbXMubGVuZ3RoOyBjZWxsSW5kZXgrKykge1xuXHRcdFx0Y29uc3QgY2VsbEl0ZW0gPSB0aGlzLmNlbGxJdGVtc1tjZWxsSW5kZXhdO1xuXG5cdFx0XHRsZXQgc3RhcnRZUG9zaXRpb24gPSB0aGlzLmFyclN0YXJ0WVBvc0NlbGxJdGVtW2NlbGxJbmRleF07XG5cdFx0XHRsZXQgZW5kWVBvc2l0aW9uID0gc3RhcnRZUG9zaXRpb24gLSB0aGlzLm5vZGUuaGVpZ2h0IC0gU3BpblBhbmVsQ29uZmlnLlNwYXduZWRPZmZzZXRIZWlnaHQ7XG5cdFx0XHRsZXQgc3Bhd25lZFlQb3NpdGlvbiA9IHN0YXJ0WVBvc2l0aW9uICsgdGhpcy5ub2RlLmhlaWdodCArIFNwaW5QYW5lbENvbmZpZy5TcGF3bmVkT2Zmc2V0SGVpZ2h0O1xuXHRcdFx0bGV0IGNvdW50ID0gY2VsbEluZGV4O1xuXG5cdFx0XHR2YXIgdHdlZW5Ecm9wRG93biA9IGNjLnR3ZWVuKGNlbGxJdGVtLm5vZGUpXG5cdFx0XHRcdC50byhTcGluUGFuZWxDb25maWcuRHJvcERvd25EdXJhdGlvbiwgeyB5OiBlbmRZUG9zaXRpb24gfSwgeyBlYXNpbmc6IFNwaW5QYW5lbENvbmZpZy5FYXNpbmdEcm9wRG93biB9KVxuXHRcdFx0XHQuY2FsbCgoKSA9PiB7XG5cdFx0XHRcdFx0Y2VsbEl0ZW0ubm9kZS55ID0gc3Bhd25lZFlQb3NpdGlvbjtcblx0XHRcdFx0XHRpZiAoY291bnQgPT0gdGhpcy5jZWxsSXRlbXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vblJlYWR5VG9TdG9wKHRoaXMuY2VsbEluZGljZXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkuc3RhcnQoKTtcblx0XHR9XG5cdH1cblxuXHRzdG9wU2Nyb2xsKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUgPSBFU3Bpbm5pbmdTdGF0ZS5TdG9wU2Nyb2xsO1xuXHRcdGZvciAobGV0IGNlbGxJbmRleCA9IDA7IGNlbGxJbmRleCA8IHRoaXMuY2VsbEl0ZW1zLmxlbmd0aDsgY2VsbEluZGV4KyspIHtcblx0XHRcdGNvbnN0IGNlbGxJdGVtID0gdGhpcy5jZWxsSXRlbXNbY2VsbEluZGV4XTtcblx0XHRcdGxldCBlbmRZUG9zaXRpb24gPSB0aGlzLmFyclN0YXJ0WVBvc0NlbGxJdGVtW2NlbGxJbmRleF07XG5cdFx0XHRsZXQgY291bnQgPSBjZWxsSW5kZXg7XG5cdFx0XHR2YXIgdHdlZW5Ecm9wRG93biA9IGNjLnR3ZWVuKGNlbGxJdGVtLm5vZGUpXG5cdFx0XHRcdC50byhTcGluUGFuZWxDb25maWcuRHJvcERvd25EdXJhdGlvbiwgeyB5OiBlbmRZUG9zaXRpb24gfSwgeyBlYXNpbmc6IFNwaW5QYW5lbENvbmZpZy5FYXNpbmdEcm9wRG93biB9KVxuXHRcdFx0XHQuY2FsbCgoKT0+e0cxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KCdDZWxsRHJvcENvbXBsZXRlZCcsIGNlbGxJdGVtLkdldENlbGxJbmRleCgpKTt9KVxuXHRcdFx0XHQudG8oU3BpblBhbmVsQ29uZmlnLlJvdGF0aW9uRHVyYXRpb24sIHsgYW5nbGU6IFNwaW5QYW5lbENvbmZpZy5TaGFrZVJvdGF0aW9uIH0sIHsgZWFzaW5nOiBTcGluUGFuZWxDb25maWcuRWFzaW5nRHJvcERvd24gfSlcblx0XHRcdFx0LnRvKFNwaW5QYW5lbENvbmZpZy5Cb3VuY2VEdXJhdGlvbiwgeyB5OiBlbmRZUG9zaXRpb24gKyBTcGluUGFuZWxDb25maWcuQm91bmNlZE9mZnNldEhlaWdodCwgYW5nbGU6IC1TcGluUGFuZWxDb25maWcuU2hha2VSb3RhdGlvbiAvIDIgfSwgeyBlYXNpbmc6IFNwaW5QYW5lbENvbmZpZy5FYXNpbmdEcm9wRG93biB9KVxuXHRcdFx0XHQudG8oU3BpblBhbmVsQ29uZmlnLkJvdW5jZUR1cmF0aW9uLCB7IHk6IGVuZFlQb3NpdGlvbiAtIFNwaW5QYW5lbENvbmZpZy5Cb3VuY2VkT2Zmc2V0SGVpZ2h0IC8gMiwgYW5nbGU6IDAgfSwgeyBlYXNpbmc6IFNwaW5QYW5lbENvbmZpZy5FYXNpbmdEcm9wRG93biB9KVxuXHRcdFx0XHQudG8oU3BpblBhbmVsQ29uZmlnLkJvdW5jZUR1cmF0aW9uLCB7IHk6IGVuZFlQb3NpdGlvbiB9LCB7IGVhc2luZzogU3BpblBhbmVsQ29uZmlnLkVhc2luZ0Ryb3BEb3duIH0pXG5cdFx0XHRcdC5jYWxsKCgpID0+IHtcblx0XHRcdFx0XHRpZiAoY291bnQgPT0gdGhpcy5jZWxsSXRlbXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vblJlYWR5Qm91bmNlVXAoKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcENvbXBsZXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS5zdGFydCgpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBzZXRGaW5hbFJlc3VsdHMoKTogdm9pZCB7XG5cdFx0bGV0IHJlc3VsdEluZGV4ID0gMDtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jZWxsSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRsZXQgY2VsbEl0ZW0gPSB0aGlzLmNlbGxJdGVtc1tpbmRleF07XG5cdFx0XHRsZXQgY2VsbEluZGV4ID0gdGhpcy5vcmlnaW5JbmRpY2VzW2luZGV4XTtcblx0XHRcdGNlbGxJdGVtLlNldENlbGxJbmRleChjZWxsSW5kZXgpO1xuXHRcdFx0aWYgKGNlbGxJbmRleCA+PSAwKSB7XG5cdFx0XHRcdGNlbGxJdGVtLlNldEl0ZW0odGhpcy5yYXdSZXN1bHRJdGVtc1tyZXN1bHRJbmRleCsrXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIFN0YXJ0RXhwbG9kZUNlbGxzKGV4cGxvZGVkQ2VsbHMsIGFyck5ld0l0ZW0pIHtcblx0XHR2YXIgYXJyTm9kZUV4cGxvZGVkQ2VsbCA9IFtdO1xuXHRcdGV4cGxvZGVkQ2VsbHMuZm9yRWFjaChpZCA9PiB7XG5cdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jZWxsSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRcdGNvbnN0IGNlbGxJdGVtID0gdGhpcy5jZWxsSXRlbXNbaW5kZXhdO1xuXHRcdFx0XHRpZiAoY2VsbEl0ZW0uR2V0Q2VsbEluZGV4KCkgPT0gaWQpIHtcblx0XHRcdFx0XHR0aGlzLmNlbGxJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdHRoaXMuY2VsbEl0ZW1zLnVuc2hpZnQoY2VsbEl0ZW0pO1xuXHRcdFx0XHRcdGFyck5vZGVFeHBsb2RlZENlbGwudW5zaGlmdChjZWxsSXRlbS5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFyck5vZGVFeHBsb2RlZENlbGwubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRjb25zdCBub2RlID0gYXJyTm9kZUV4cGxvZGVkQ2VsbFtpbmRleF07XG5cdFx0XHRsZXQgY291bnQgPSBpbmRleDtcblx0XHRcdHZhciB0d2VlbkV4cGxvZGUgPSBjYy50d2Vlbihub2RlKVxuXHRcdFx0XHQudG8oU3BpblBhbmVsQ29uZmlnLkZhZGVDZWxsRHVyYXRpb24sIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogJ2xpbmVhcicgfSlcblx0XHRcdFx0LmRlbGF5KFNwaW5QYW5lbENvbmZpZy5FeHBsb2RlRHVyYXRpb24gLSBTcGluUGFuZWxDb25maWcuRmFkZUNlbGxEdXJhdGlvbilcblx0XHRcdFx0LmNhbGwoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBzdGFydFlQb3NpdGlvbiA9IHRoaXMuYXJyU3RhcnRZUG9zQ2VsbEl0ZW1bY291bnRdO1xuXHRcdFx0XHRcdG5vZGUueSA9IHN0YXJ0WVBvc2l0aW9uICsgdGhpcy5ub2RlLmhlaWdodDtcblx0XHRcdFx0XHRub2RlLm9wYWNpdHkgPSAyNTU7XG5cblx0XHRcdFx0XHRpZiAoY291bnQgPT0gYXJyTm9kZUV4cGxvZGVkQ2VsbC5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jZWxsSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY2VsbEl0ZW1zW2luZGV4XS5TZXRDZWxsSW5kZXgodGhpcy5jZWxsSW5kaWNlc1tpbmRleF0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5yYXdSZXN1bHRJdGVtcz0gW107XG5cdFx0XHRcdFx0XHR0aGlzLnJlc3VsdEl0ZW1zID0gW107XG5cdFx0XHRcdFx0XHR0aGlzLnNldFJlc3VsdEl0ZW1zKGFyck5ld0l0ZW0pO1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRGaW5hbFJlc3VsdHMoKTtcblxuXHRcdFx0XHRcdFx0dGhpcy5zdG9wRXhwbG9kZUNlbGxzKGFyck5vZGVFeHBsb2RlZENlbGwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkuc3RhcnQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN0b3BFeHBsb2RlQ2VsbHMoYXJyTm9kZUV4cGxvZGVkQ2VsbCkge1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNlbGxJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGNvbnN0IGNlbGxJdGVtID0gdGhpcy5jZWxsSXRlbXNbaW5kZXhdO1xuXHRcdFx0bGV0IGNvdW50ID0gaW5kZXg7XG5cdFx0XHRsZXQgZGVzWVBvc3Rpb24gPSB0aGlzLmFyclN0YXJ0WVBvc0NlbGxJdGVtW2luZGV4XTtcblx0XHRcdGlmIChkZXNZUG9zdGlvbiAhPSBjZWxsSXRlbS5ub2RlLnkpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciB0d2VlbkRyb3BEb3duID0gY2MudHdlZW4oY2VsbEl0ZW0ubm9kZSlcblx0XHRcdFx0XHQudG8oU3BpblBhbmVsQ29uZmlnLkRyb3BEb3duRHVyYXRpb24sIHsgeTogZGVzWVBvc3Rpb24gfSwgeyBlYXNpbmc6IFNwaW5QYW5lbENvbmZpZy5FYXNpbmdEcm9wRG93biB9KVxuXHRcdFx0XHRcdC5jYWxsKCgpPT57RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoJ0NlbGxEcm9wQ29tcGxldGVkJywgY2VsbEl0ZW0uR2V0Q2VsbEluZGV4KCkpO30pXG5cdFx0XHRcdFx0LnRvKFNwaW5QYW5lbENvbmZpZy5Sb3RhdGlvbkR1cmF0aW9uLCB7IGFuZ2xlOiBTcGluUGFuZWxDb25maWcuU2hha2VSb3RhdGlvbiB9LCB7IGVhc2luZzogU3BpblBhbmVsQ29uZmlnLkVhc2luZ0Ryb3BEb3duIH0pXG5cdFx0XHRcdFx0LnRvKFNwaW5QYW5lbENvbmZpZy5Cb3VuY2VEdXJhdGlvbiwgeyB5OiBkZXNZUG9zdGlvbiArIFNwaW5QYW5lbENvbmZpZy5Cb3VuY2VkT2Zmc2V0SGVpZ2h0LCBhbmdsZTogLVNwaW5QYW5lbENvbmZpZy5TaGFrZVJvdGF0aW9uIC8gMiB9LCB7IGVhc2luZzogU3BpblBhbmVsQ29uZmlnLkVhc2luZ0Ryb3BEb3duIH0pXG5cdFx0XHRcdFx0LnRvKFNwaW5QYW5lbENvbmZpZy5Cb3VuY2VEdXJhdGlvbiwgeyB5OiBkZXNZUG9zdGlvbiAtIFNwaW5QYW5lbENvbmZpZy5Cb3VuY2VkT2Zmc2V0SGVpZ2h0IC8gMiwgYW5nbGU6IDAgfSwgeyBlYXNpbmc6IFNwaW5QYW5lbENvbmZpZy5FYXNpbmdEcm9wRG93biB9KVxuXHRcdFx0XHRcdC50byhTcGluUGFuZWxDb25maWcuQm91bmNlRHVyYXRpb24sIHsgeTogZGVzWVBvc3Rpb24gfSwgeyBlYXNpbmc6IFNwaW5QYW5lbENvbmZpZy5FYXNpbmdEcm9wRG93biB9KVxuXHRcdFx0XHRcdC5jYWxsKCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChjb3VudCA9PSBhcnJOb2RlRXhwbG9kZWRDZWxsLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5vbkV4cGxvZGVDb21wbGV0ZWQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KS5zdGFydCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19