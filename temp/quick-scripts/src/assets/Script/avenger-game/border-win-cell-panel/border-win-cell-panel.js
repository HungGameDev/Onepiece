"use strict";
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