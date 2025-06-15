
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/avenger-game/border-win-cell-panel/border-win-cell-panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77ed3FV/hhDF5PiHZ8dxzNp', 'border-win-cell-panel');
// Script/avenger-game/border-win-cell-panel/border-win-cell-panel.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aka_g1009_game_config_1 = require("../../aka-g1009-game-config");
var aka_g1009_animation_provider_1 = require("../../base/animation/aka-g1009-animation-provider");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BorderWinCellPanel = /** @class */ (function (_super) {
    __extends(BorderWinCellPanel, _super);
    function BorderWinCellPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrSpineBorder = [];
        _this.nameSpineAnimation = "";
        return _this;
    }
    BorderWinCellPanel.prototype.onLoad = function () {
        this.register();
    };
    BorderWinCellPanel.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ShowWinCells", this.onShowWinCells.bind(this));
    };
    BorderWinCellPanel.prototype.onShowWinCells = function (arrWinCells) {
        var dataSequence = this.generateDataSequenceFollowReel(__spreadArrays(arrWinCells));
        this.playAnimationBorderWinCell(dataSequence);
    };
    BorderWinCellPanel.prototype.generateDataSequenceFollowReel = function (arrIndexWinCells) {
        var arrSequenceIndexCell = [];
        for (var reel = 0; reel < aka_g1009_game_config_1.SlottyParameter.GetReelCount(); reel++) {
            arrSequenceIndexCell.push([]);
        }
        arrIndexWinCells.forEach(function (indexCell) {
            var reelCell = aka_g1009_game_config_1.SlottyParameter.GetReelIndex(indexCell);
            arrSequenceIndexCell[reelCell].push(indexCell);
        });
        return arrSequenceIndexCell;
    };
    BorderWinCellPanel.prototype.playAnimationBorderWinCell = function (dataSequenceIndexCell) {
        var _this = this;
        var dataSpine = aka_g1009_animation_provider_1.G1009AnimationProviderManager.Instance().GetAnimation(this.nameSpineAnimation);
        var _loop_1 = function (index) {
            var countIndex = index;
            var arrIndex = dataSequenceIndexCell[countIndex];
            var seq = cc.sequence(cc.delayTime(0.1 * countIndex), cc.callFunc(function () {
                for (var index_1 = 0; index_1 < arrIndex.length; index_1++) {
                    var spineBorder = _this.arrSpineBorder[arrIndex[index_1]];
                    spineBorder.node.active = true;
                    spineBorder.skeletonData = (dataSpine);
                    spineBorder.setAnimation(0, "animation", false);
                }
            }, this_1, arrIndex));
            this_1.node.runAction(seq);
        };
        var this_1 = this;
        for (var index = 0; index < dataSequenceIndexCell.length; index++) {
            _loop_1(index);
        }
    };
    __decorate([
        property(sp.Skeleton)
    ], BorderWinCellPanel.prototype, "arrSpineBorder", void 0);
    __decorate([
        property(cc.String)
    ], BorderWinCellPanel.prototype, "nameSpineAnimation", void 0);
    BorderWinCellPanel = __decorate([
        ccclass
    ], BorderWinCellPanel);
    return BorderWinCellPanel;
}(cc.Component));
exports.default = BorderWinCellPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYXZlbmdlci1nYW1lL2JvcmRlci13aW4tY2VsbC1wYW5lbC9ib3JkZXItd2luLWNlbGwtcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUE4RDtBQUM5RCxrR0FBa0c7QUFDbEcscUZBQThFO0FBR3hFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBb0RDO1FBakRHLG9CQUFjLEdBQWtCLEVBQUUsQ0FBQztRQUduQyx3QkFBa0IsR0FBVyxFQUFFLENBQUM7O0lBOENwQyxDQUFDO0lBNUNhLG1DQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxxQ0FBUSxHQUFoQjtRQUNJLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRU8sMkNBQWMsR0FBdEIsVUFBdUIsV0FBZTtRQUNsQyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsOEJBQThCLGdCQUFLLFdBQVcsRUFBRSxDQUFDO1FBQ3pFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVsRCxDQUFDO0lBQ0QsMkRBQThCLEdBQTlCLFVBQStCLGdCQUEwQjtRQUNyRCxJQUFJLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUM5QixLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsdUNBQWUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUM5RCxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO1lBQzlCLElBQUksUUFBUSxHQUFHLHVDQUFlLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZELG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sb0JBQW9CLENBQUM7SUFDaEMsQ0FBQztJQUVELHVEQUEwQixHQUExQixVQUEyQixxQkFBcUI7UUFBaEQsaUJBaUJDO1FBaEJHLElBQUksU0FBUyxHQUFHLDREQUE2QixDQUFDLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQ0FDdEYsS0FBSztZQUNWLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqRCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUM3QixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsRUFDNUIsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDRSxLQUFLLElBQUksT0FBSyxHQUFHLENBQUMsRUFBRSxPQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFLLEVBQUUsRUFBRTtvQkFDbEQsSUFBSSxXQUFXLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDdkQsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUMvQixXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3ZDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDbkQ7WUFDakIsQ0FBQyxVQUFRLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDckIsT0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7UUFicEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUU7b0JBQXhELEtBQUs7U0FjYjtJQUNMLENBQUM7SUEvQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4REFDYTtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tFQUNZO0lBTmYsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FvRHRDO0lBQUQseUJBQUM7Q0FwREQsQUFvREMsQ0FwRCtDLEVBQUUsQ0FBQyxTQUFTLEdBb0QzRDtrQkFwRG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNsb3R0eVBhcmFtZXRlciB9IGZyb20gXCIuLi8uLi9ha2EtZzEwMDktZ2FtZS1jb25maWdcIjtcbmltcG9ydCB7IEcxMDA5QW5pbWF0aW9uUHJvdmlkZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvYW5pbWF0aW9uL2FrYS1nMTAwOS1hbmltYXRpb24tcHJvdmlkZXJcIjtcbmltcG9ydCB7IEcxMDA5RXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvcmRlcldpbkNlbGxQYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgYXJyU3BpbmVCb3JkZXI6IHNwLlNrZWxldG9uW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgbmFtZVNwaW5lQW5pbWF0aW9uOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTaG93V2luQ2VsbHNcIiwgdGhpcy5vblNob3dXaW5DZWxscy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2hvd1dpbkNlbGxzKGFycldpbkNlbGxzOiBbXSkge1xuICAgICAgICB2YXIgZGF0YVNlcXVlbmNlID0gdGhpcy5nZW5lcmF0ZURhdGFTZXF1ZW5jZUZvbGxvd1JlZWwoWy4uLmFycldpbkNlbGxzXSk7XG4gICAgICAgIHRoaXMucGxheUFuaW1hdGlvbkJvcmRlcldpbkNlbGwoZGF0YVNlcXVlbmNlKTtcblxuICAgIH1cbiAgICBnZW5lcmF0ZURhdGFTZXF1ZW5jZUZvbGxvd1JlZWwoYXJySW5kZXhXaW5DZWxsczogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIHZhciBhcnJTZXF1ZW5jZUluZGV4Q2VsbCA9IFtdO1xuICAgICAgICBmb3IgKGxldCByZWVsID0gMDsgcmVlbCA8IFNsb3R0eVBhcmFtZXRlci5HZXRSZWVsQ291bnQoKTsgcmVlbCsrKSB7XG4gICAgICAgICAgICBhcnJTZXF1ZW5jZUluZGV4Q2VsbC5wdXNoKFtdKTtcbiAgICAgICAgfVxuICAgICAgICBhcnJJbmRleFdpbkNlbGxzLmZvckVhY2goaW5kZXhDZWxsID0+IHtcbiAgICAgICAgICAgIGxldCByZWVsQ2VsbCA9IFNsb3R0eVBhcmFtZXRlci5HZXRSZWVsSW5kZXgoaW5kZXhDZWxsKTtcbiAgICAgICAgICAgIGFyclNlcXVlbmNlSW5kZXhDZWxsW3JlZWxDZWxsXS5wdXNoKGluZGV4Q2VsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXJyU2VxdWVuY2VJbmRleENlbGw7XG4gICAgfVxuXG4gICAgcGxheUFuaW1hdGlvbkJvcmRlcldpbkNlbGwoZGF0YVNlcXVlbmNlSW5kZXhDZWxsKSB7XG4gICAgICAgIHZhciBkYXRhU3BpbmUgPSBHMTAwOUFuaW1hdGlvblByb3ZpZGVyTWFuYWdlci5JbnN0YW5jZSgpLkdldEFuaW1hdGlvbih0aGlzLm5hbWVTcGluZUFuaW1hdGlvbik7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhU2VxdWVuY2VJbmRleENlbGwubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgY291bnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgbGV0IGFyckluZGV4ID0gZGF0YVNlcXVlbmNlSW5kZXhDZWxsW2NvdW50SW5kZXhdO1xuICAgICAgICAgICAgbGV0IHNlcSA9IGNjLnNlcXVlbmNlKFxuXHRcdFx0XHRjYy5kZWxheVRpbWUoMC4xICogY291bnRJbmRleClcblx0XHRcdFx0LCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJJbmRleC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGluZUJvcmRlciA9IHRoaXMuYXJyU3BpbmVCb3JkZXJbYXJySW5kZXhbaW5kZXhdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5lQm9yZGVyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5lQm9yZGVyLnNrZWxldG9uRGF0YSA9IChkYXRhU3BpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BpbmVCb3JkZXIuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHR9LCB0aGlzLCBhcnJJbmRleCkpO1xuXHRcdFx0dGhpcy5ub2RlLnJ1bkFjdGlvbihzZXEpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=