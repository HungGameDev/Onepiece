
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
var Slot45_game_config_1 = require("../../Slot45-game-config");
var Slot45_animation_provider_1 = require("../../base/animation/Slot45-animation-provider");
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
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
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("ShowWinCells", this.onShowWinCells.bind(this));
    };
    BorderWinCellPanel.prototype.onShowWinCells = function (arrWinCells) {
        var dataSequence = this.generateDataSequenceFollowReel(__spreadArrays(arrWinCells));
        this.playAnimationBorderWinCell(dataSequence);
    };
    BorderWinCellPanel.prototype.generateDataSequenceFollowReel = function (arrIndexWinCells) {
        var arrSequenceIndexCell = [];
        for (var reel = 0; reel < Slot45_game_config_1.SlottyParameter.GetReelCount(); reel++) {
            arrSequenceIndexCell.push([]);
        }
        arrIndexWinCells.forEach(function (indexCell) {
            var reelCell = Slot45_game_config_1.SlottyParameter.GetReelIndex(indexCell);
            arrSequenceIndexCell[reelCell].push(indexCell);
        });
        return arrSequenceIndexCell;
    };
    BorderWinCellPanel.prototype.playAnimationBorderWinCell = function (dataSequenceIndexCell) {
        var _this = this;
        var dataSpine = Slot45_animation_provider_1.G1009AnimationProviderManager.Instance().GetAnimation(this.nameSpineAnimation);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdmVuZ2VyLWdhbWVcXGJvcmRlci13aW4tY2VsbC1wYW5lbFxcYm9yZGVyLXdpbi1jZWxsLXBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMkQ7QUFDM0QsNEZBQStGO0FBQy9GLCtFQUEyRTtBQUdyRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQW9EQztRQWpERyxvQkFBYyxHQUFrQixFQUFFLENBQUM7UUFHbkMsd0JBQWtCLEdBQVcsRUFBRSxDQUFDOztJQThDcEMsQ0FBQztJQTVDYSxtQ0FBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8scUNBQVEsR0FBaEI7UUFDSSx3Q0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVPLDJDQUFjLEdBQXRCLFVBQXVCLFdBQWU7UUFDbEMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixnQkFBSyxXQUFXLEVBQUUsQ0FBQztRQUN6RSxJQUFJLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFbEQsQ0FBQztJQUNELDJEQUE4QixHQUE5QixVQUErQixnQkFBMEI7UUFDckQsSUFBSSxvQkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDOUIsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLG9DQUFlLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDOUQsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUEsU0FBUztZQUM5QixJQUFJLFFBQVEsR0FBRyxvQ0FBZSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2RCxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLG9CQUFvQixDQUFDO0lBQ2hDLENBQUM7SUFFRCx1REFBMEIsR0FBMUIsVUFBMkIscUJBQXFCO1FBQWhELGlCQWlCQztRQWhCRyxJQUFJLFNBQVMsR0FBRyx5REFBNkIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0NBQ3RGLEtBQUs7WUFDVixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxRQUFRLEdBQUcscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FDN0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEVBQzVCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ0UsS0FBSyxJQUFJLE9BQUssR0FBRyxDQUFDLEVBQUUsT0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBSyxFQUFFLEVBQUU7b0JBQ2xELElBQUksV0FBVyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDL0IsV0FBVyxDQUFDLFlBQVksR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2QyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ25EO1lBQ2pCLENBQUMsVUFBUSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE9BQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O1FBYnBCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUF4RCxLQUFLO1NBY2I7SUFDTCxDQUFDO0lBL0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7OERBQ2E7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrRUFDWTtJQU5mLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBb0R0QztJQUFELHlCQUFDO0NBcERELEFBb0RDLENBcEQrQyxFQUFFLENBQUMsU0FBUyxHQW9EM0Q7a0JBcERvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbG90dHlQYXJhbWV0ZXIgfSBmcm9tIFwiLi4vLi4vU2xvdDQ1LWdhbWUtY29uZmlnXCI7XHJcbmltcG9ydCB7IEcxMDA5QW5pbWF0aW9uUHJvdmlkZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvYW5pbWF0aW9uL1Nsb3Q0NS1hbmltYXRpb24tcHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvU2xvdDQ1LWV2ZW50LW1hbmFnZXJcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9yZGVyV2luQ2VsbFBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBhcnJTcGluZUJvcmRlcjogc3AuU2tlbGV0b25bXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBuYW1lU3BpbmVBbmltYXRpb246IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlcigpOiB2b2lkIHtcclxuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU2hvd1dpbkNlbGxzXCIsIHRoaXMub25TaG93V2luQ2VsbHMuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNob3dXaW5DZWxscyhhcnJXaW5DZWxsczogW10pIHtcclxuICAgICAgICB2YXIgZGF0YVNlcXVlbmNlID0gdGhpcy5nZW5lcmF0ZURhdGFTZXF1ZW5jZUZvbGxvd1JlZWwoWy4uLmFycldpbkNlbGxzXSk7XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uQm9yZGVyV2luQ2VsbChkYXRhU2VxdWVuY2UpO1xyXG5cclxuICAgIH1cclxuICAgIGdlbmVyYXRlRGF0YVNlcXVlbmNlRm9sbG93UmVlbChhcnJJbmRleFdpbkNlbGxzOiBudW1iZXJbXSk6IG51bWJlcltdIHtcclxuICAgICAgICB2YXIgYXJyU2VxdWVuY2VJbmRleENlbGwgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCByZWVsID0gMDsgcmVlbCA8IFNsb3R0eVBhcmFtZXRlci5HZXRSZWVsQ291bnQoKTsgcmVlbCsrKSB7XHJcbiAgICAgICAgICAgIGFyclNlcXVlbmNlSW5kZXhDZWxsLnB1c2goW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcnJJbmRleFdpbkNlbGxzLmZvckVhY2goaW5kZXhDZWxsID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlZWxDZWxsID0gU2xvdHR5UGFyYW1ldGVyLkdldFJlZWxJbmRleChpbmRleENlbGwpO1xyXG4gICAgICAgICAgICBhcnJTZXF1ZW5jZUluZGV4Q2VsbFtyZWVsQ2VsbF0ucHVzaChpbmRleENlbGwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhcnJTZXF1ZW5jZUluZGV4Q2VsbDtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbWF0aW9uQm9yZGVyV2luQ2VsbChkYXRhU2VxdWVuY2VJbmRleENlbGwpIHtcclxuICAgICAgICB2YXIgZGF0YVNwaW5lID0gRzEwMDlBbmltYXRpb25Qcm92aWRlck1hbmFnZXIuSW5zdGFuY2UoKS5HZXRBbmltYXRpb24odGhpcy5uYW1lU3BpbmVBbmltYXRpb24pO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhU2VxdWVuY2VJbmRleENlbGwubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIGxldCBhcnJJbmRleCA9IGRhdGFTZXF1ZW5jZUluZGV4Q2VsbFtjb3VudEluZGV4XTtcclxuICAgICAgICAgICAgbGV0IHNlcSA9IGNjLnNlcXVlbmNlKFxyXG5cdFx0XHRcdGNjLmRlbGF5VGltZSgwLjEgKiBjb3VudEluZGV4KVxyXG5cdFx0XHRcdCwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJJbmRleC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwaW5lQm9yZGVyID0gdGhpcy5hcnJTcGluZUJvcmRlclthcnJJbmRleFtpbmRleF1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGluZUJvcmRlci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5lQm9yZGVyLnNrZWxldG9uRGF0YSA9IChkYXRhU3BpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGluZUJvcmRlci5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHR9LCB0aGlzLCBhcnJJbmRleCkpO1xyXG5cdFx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKHNlcSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=