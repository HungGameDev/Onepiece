
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/present-win/aka-g1009-present-win-panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8edf39ShXZImLq8jNj5tJjz', 'aka-g1009-present-win-panel');
// Script/UI/present-win/aka-g1009-present-win-panel.ts

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
exports.G1009WinLineResult = void 0;
var aka_g1009_game_config_1 = require("../../aka-g1009-game-config");
var aka_g1009_game_controller_1 = require("../../base/controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_bet_model_1 = require("../../models/aka-g1009-bet-model");
var aka_g1009_win_cell_item_1 = require("./aka-g1009-win-cell-item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BIG_WIN_TRIGGER_POINT = 5;
var G1009WinPanelActor = /** @class */ (function (_super) {
    __extends(G1009WinPanelActor, _super);
    function G1009WinPanelActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Items = [];
        _this.allWinLine = null;
        _this.count = 0;
        _this.delayTime = 1;
        _this.delayTransitionTime = 0.1;
        _this.delayedCount = 0;
        _this.showAllCount = 0;
        _this.isFreespins = false;
        _this.totalFreeSpin = 0;
        _this.isAlreadyChangeState = false;
        _this.winPoint = 0;
        _this.totalWinPoint = 0;
        _this.jackpotWinPoint = 0;
        _this.isBigwinTriggered = false;
        _this.expandWildIndices = [];
        _this.tweenPresentation = null;
        _this.tweenPresentationWinLine = null;
        _this.isCompleteOneLoop = false;
        _this.comboData = null;
        return _this;
    }
    G1009WinPanelActor.prototype.onLoad = function () {
        this.register();
        this.Items = this.node.getComponentsInChildren(aka_g1009_win_cell_item_1.default);
        this.Items.sort(function (a, b) { return a.cellIndex - b.cellIndex; });
        this.Items.forEach(function (item) { return item.Hide(); });
    };
    G1009WinPanelActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("WinDataRespond", this.onSetFinalReSource.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("PresentWinStart", this.onPresentWinStart.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ExpandWildStarted", this.onExpandWildStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ExpandWildHide", this.onExpandWildHide.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("BigWinCompleted", this.onBigWinCompleted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("JackpotCompleted", this.onJackpotCompleted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("JackpotStarted", this.onJackpotStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("resume", this.onResume.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("PresentAllWinComplete", this.onPresentAllWinComplete.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("BonusWinComplete", this.reset.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("EnterBonus", this.onEnterBonus.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ExplodeCellsComplete", this.onExplodeCellsComplete.bind(this));
    };
    G1009WinPanelActor.prototype.onResume = function (data) {
        if (data.isFreespins) {
            this.isFreespins = true;
            this.totalWinPoint = data.totalWinPoint;
        }
    };
    G1009WinPanelActor.prototype.onEnterFreespins = function () {
        this.isFreespins = true;
    };
    G1009WinPanelActor.prototype.onFeatureWinCompleted = function (data) {
        if (data && data.hitRule == "bonus") {
            return;
        }
        this.isFreespins = false;
    };
    G1009WinPanelActor.prototype.onSpinStarted = function () {
        this.isCompleteOneLoop = false;
        this.expandWildIndices = [];
        this.reset();
    };
    G1009WinPanelActor.prototype.onPresentWinStart = function () {
        var _this = this;
        setTimeout(function () {
            _this.Items.forEach(function (item) { return item.Show(); });
            _this.isAlreadyChangeState = false;
            if (_this.checkJackpotTriggered()) {
                aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("JackpotTriggered");
            }
            else {
                _this.presentAllWin();
            }
        }, 100);
    };
    G1009WinPanelActor.prototype.onExplodeCellsComplete = function () {
        this.updateDataWinPanelByComboData();
        // this.isBigwinTriggered = (this.checkBigWinTriggered() && !G1009GameController.GetInstance().CheckBonusPointTrigger() && !this.checkJackpotTriggered());
        this.isBigwinTriggered = (this.checkBigWinTriggered() && !aka_g1009_game_controller_1.default.GetInstance().CheckBonusPointTrigger() && this.jackpotWinPoint <= 0);
        var hasCombo = aka_g1009_game_controller_1.default.GetInstance().CheckComboWinPresentation();
        if (hasCombo) {
            this.onPresentWinStart();
        }
        else if (this.isBigwinTriggered) {
            this.startBigWin();
        }
        else {
            this.transitionNextState();
        }
    };
    G1009WinPanelActor.prototype.onEnterBonus = function (dataWinBonus) {
        var winPoint = 0;
        dataWinBonus.forEach(function (data) {
            winPoint += data.winPoint;
        });
        if (winPoint > 0) {
            this.totalWinPoint += winPoint;
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("IncreaseTotalWin", winPoint);
        }
    };
    G1009WinPanelActor.prototype.updateDataWinPanelByComboData = function () {
        this.cellsResult = this.comboData.Cells;
        this.winLine = this.comboData.WinLines;
        this.allWinLine = this.comboData.allWinLine;
        this.winPoint = this.comboData.winPoint;
        for (var index = 0; index < this.cellsResult.length; index++) {
            this.Items[index].Hide();
            this.Items[index].SetItem(this.cellsResult[index]);
        }
    };
    G1009WinPanelActor.prototype.checkBigWinTriggered = function () {
        return this.totalWinPoint / aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetTotalBetPoint() > BIG_WIN_TRIGGER_POINT;
    };
    G1009WinPanelActor.prototype.checkJackpotTriggered = function () {
        var haveWinLineJackpot = false;
        for (var index = 0; index < this.winLine.length; index++) {
            var winLineData = this.winLine[index];
            if (winLineData.GetWinSymbol() == "Wild" && winLineData.GetWinLine().length == 5) {
                haveWinLineJackpot = true;
                break;
            }
        }
        return this.jackpotWinPoint > 0 && haveWinLineJackpot;
    };
    G1009WinPanelActor.prototype.presentAllWin = function () {
        var _this = this;
        var winData = this.allWinLine;
        this.playSoundSFX(winData.CheckIsAllWin());
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("NotificationWinMessage", {
            isAllWin: winData.CheckIsAllWin(),
            WinPoint: winData.GetWinPoint(),
            WinSymbol: winData.GetWinSymbol(),
            WinNumber: winData.GetWinNumber()
        });
        if (this.winPoint > 0) {
            this.totalWinPoint += this.winPoint;
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("IncreaseTotalWin", this.winPoint);
        }
        this.showWinSymbols(this.allWinLine.GetWinLine());
        this.OnShowLine(this.allWinLine.GetWinNumber());
        this.count = 0;
        this.tweenPresentation = cc.tween(this.node)
            .delay(this.delayTime)
            .call(function () {
            if (aka_g1009_game_controller_1.default.GetInstance().CheckComboWinPresentation()) {
                _this.comboData = aka_g1009_game_controller_1.default.GetInstance().GetComboData();
                _this.presentWinCombo();
            }
            else {
                _this.sequenceWinPresentation();
                _this.transitionNextState();
            }
        })
            .start();
    };
    G1009WinPanelActor.prototype.presentWinCombo = function () {
        this.reset();
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("StartPresentWinCombo", this.comboData);
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_explosive", isLoop: false });
    };
    G1009WinPanelActor.prototype.startBigWin = function () {
        if (this.isBigwinTriggered) {
            this.Items.forEach(function (i) { return i.ShowStaticFrame(); });
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("BigWinStarted", this.totalWinPoint);
        }
        else {
            this.onBigWinCompleted();
        }
    };
    G1009WinPanelActor.prototype.onBigWinCompleted = function () {
        var _this = this;
        this.Items.forEach(function (i) { return i.HideStaticFrame(); });
        var delay = 0;
        if (this.isBigwinTriggered) {
            delay = 0.5;
        }
        setTimeout(function () {
            if (_this.checkJackpotTriggered()) {
                var winData = _this.jackpotWinLine[0];
                if (winData != undefined && winData != null) {
                    _this.playSoundSFX(false);
                    aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("NotificationWinMessage", {
                        isAllWin: winData.CheckIsAllWin(),
                        WinPoint: winData.GetWinPoint(),
                        WinSymbol: winData.GetWinSymbol(),
                        WinNumber: winData.GetWinNumber()
                    });
                    _this.showTriggerWinSymbols(winData.GetWinLine());
                    _this.OnShowLine(winData.GetWinNumber());
                    _this.tweenPresentation = cc.tween(_this.node)
                        .delay(_this.delayTransitionTime)
                        .call(function () {
                        _this.transitionNextState();
                    })
                        .start();
                }
                return;
            }
            else if (aka_g1009_game_controller_1.default.GetInstance().CheckBonusFeatureTrigger()) {
                var winData = _this.triggerWinLine[0];
                if (winData != undefined && winData != null) {
                    _this.playSoundSFX(false);
                    aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("NotificationWinMessage", {
                        isAllWin: winData.CheckIsAllWin(),
                        WinPoint: winData.GetWinPoint(),
                        WinSymbol: winData.GetWinSymbol(),
                        WinNumber: winData.GetWinNumber()
                    });
                    _this.showTriggerWinSymbols(winData.GetWinLine());
                    aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("showTriggerWinSymbols");
                    _this.OnShowLine(winData.GetWinNumber());
                    _this.tweenPresentation = cc.tween(_this.node)
                        .delay(_this.delayTransitionTime)
                        .call(function () {
                        _this.transitionNextState();
                    })
                        .start();
                }
                return;
            }
            else {
                _this.count = 0;
                _this.sequenceWinPresentation();
            }
            _this.transitionNextState();
        }, delay);
    };
    G1009WinPanelActor.prototype.sequenceWinPresentation = function () {
        var _this = this;
        if (!(this.winLine.length > 0)) {
            return;
        }
        if (this.count >= this.winLine.length) {
            this.count = 0;
            this.isCompleteOneLoop = true;
        }
        var winIndex = this.count;
        var winData = this.winLine[this.count];
        if (!this.isCompleteOneLoop)
            this.playSoundSFX(winData.CheckIsAllWin());
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("NotificationWinMessage", {
            isAllWin: winData.CheckIsAllWin(),
            WinPoint: winData.GetWinPoint(),
            WinSymbol: winData.GetWinSymbol(),
            WinNumber: winData.GetWinNumber()
        });
        this.showWinSymbols(this.winLine[winIndex].GetWinLine());
        this.OnShowLine(this.winLine[winIndex].GetWinNumber());
        this.count++;
        this.tweenPresentationWinLine = cc.tween(this.node)
            .delay(this.delayTime)
            .call(function () {
            _this.sequenceWinPresentation();
        })
            .start();
    };
    G1009WinPanelActor.prototype.onJackpotStarted = function () {
        this.showWinSymbols(this.jackpotWinLine.GetWinLine());
    };
    G1009WinPanelActor.prototype.onJackpotCompleted = function () {
        this.presentAllWin();
    };
    G1009WinPanelActor.prototype.onSetFinalReSource = function (finalResult) {
        var _finalResult = Object.assign({}, finalResult);
        this.cellsResult = _finalResult.Cells;
        this.winLine = _finalResult.WinLines;
        this.allWinLine = _finalResult.allWinLine;
        this.jackpotWinLine = _finalResult.jackpotWinLine;
        this.triggerWinLine = _finalResult.WinScatters.concat(_finalResult.WinBonus);
        this.featureDatas = _finalResult.featureDatas;
        this.winPoint = finalResult.winPoint;
        this.jackpotWinPoint = finalResult.jackpotWinPoint;
        for (var index = 0; index < this.cellsResult.length; index++) {
            this.Items[index].Hide();
            this.Items[index].SetItem(this.cellsResult[index]);
        }
    };
    G1009WinPanelActor.prototype.playSoundSFX = function (isAllWin) {
        if (!isAllWin && !aka_g1009_game_controller_1.default.GetInstance().CheckBonusFeatureTrigger()) {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_symbolwin', isLoop: false });
        }
    };
    G1009WinPanelActor.prototype.transitionNextState = function () {
        this.totalWinPoint = aka_g1009_game_controller_1.default.GetInstance().GetTotalWinPoint();
        if (!this.isAlreadyChangeState) {
            this.isAlreadyChangeState = true;
            // if (this.checkJackpotTriggered()) {
            // 	G1009EventManager.GetInstance().notify("JackpotTriggered");
            // 	return;
            // }
            if (aka_g1009_game_controller_1.default.GetInstance().CheckBonusFeatureTrigger()) {
                var dataFeature = aka_g1009_game_controller_1.default.GetInstance().GetFeatureWinData();
                aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("FeatureTrigger", dataFeature);
                return;
            }
            if (aka_g1009_game_controller_1.default.GetInstance().CheckFreespinContinue()) {
                this.reset();
                aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("Spin");
                return;
            }
            if (aka_g1009_game_controller_1.default.GetInstance().CheckFreespinEnd()) {
                this.reset();
                this.totalWinPoint = 0;
                aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("FeatureComplete");
                return;
            }
            this.totalWinPoint = 0;
            console.warn('transitionNextState:, ', this.totalWinPoint);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("EndRound");
        }
    };
    G1009WinPanelActor.prototype.OnShowLine = function (line) {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ShowLine", line);
    };
    G1009WinPanelActor.prototype.OnHideAllLine = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ResetAllLine");
    };
    G1009WinPanelActor.prototype.showWinSymbols = function (winLine) {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ShowWinCells", winLine);
        var _loop_1 = function (index) {
            this_1.Items.find(function (item) { return item.cellIndex == winLine[index]; }).PlayWinAnimation();
        };
        var this_1 = this;
        for (var index = 0; index < winLine.length; index++) {
            _loop_1(index);
        }
    };
    G1009WinPanelActor.prototype.showTriggerWinSymbols = function (winLine) {
        var _loop_2 = function (index) {
            this_2.Items.find(function (item) { return item.cellIndex == winLine[index]; }).PlayWinTrigger();
        };
        var this_2 = this;
        for (var index = 0; index < winLine.length; index++) {
            _loop_2(index);
        }
    };
    G1009WinPanelActor.prototype.onExpandWildStarted = function (expandWildIndices) {
        var _this = this;
        this.expandWildIndices = Object.assign([], expandWildIndices);
        this.expandWildIndices.forEach(function (index) {
            var reelIndex = aka_g1009_game_config_1.SlottyParameter.GetReelIndex(index);
            _this.Items[aka_g1009_game_config_1.SlottyParameter.GetCellIndex(reelIndex, 0)].node.active = false;
            _this.Items[aka_g1009_game_config_1.SlottyParameter.GetCellIndex(reelIndex, 1)].node.active = false;
            _this.Items[aka_g1009_game_config_1.SlottyParameter.GetCellIndex(reelIndex, 2)].node.active = false;
        });
    };
    G1009WinPanelActor.prototype.onExpandWildHide = function () {
        this.Items.forEach(function (item) { return item.node.active = true; });
    };
    G1009WinPanelActor.prototype.reset = function () {
        this.tweenPresentation && this.tweenPresentation.stop();
        this.tweenPresentationWinLine && this.tweenPresentationWinLine.stop();
        this.isBigwinTriggered = false;
        this.cellsResult = [];
        this.Items.forEach(function (item) {
            item.Hide();
            item.Reset();
            item.node.active = true;
        });
        this.delayedCount = 0;
        this.count = 0;
        this.OnHideAllLine();
    };
    G1009WinPanelActor.prototype.onPresentAllWinComplete = function () {
        // this.Items.forEach(item => {
        // 	item.node.active = false;
        // 	item.node.opacity = 0;
        // });
        // this.OnHideAllLine();
    };
    G1009WinPanelActor = __decorate([
        ccclass
    ], G1009WinPanelActor);
    return G1009WinPanelActor;
}(cc.Component));
exports.default = G1009WinPanelActor;
var G1009WinLineResult = /** @class */ (function () {
    function G1009WinLineResult(winline, winPoint, winNumber, winSymbol, isAllWin, isTriggerWinLine) {
        if (winSymbol === void 0) { winSymbol = ""; }
        if (isAllWin === void 0) { isAllWin = false; }
        if (isTriggerWinLine === void 0) { isTriggerWinLine = false; }
        this.winLine = winline;
        this.winPoint = winPoint;
        this.winNumber = winNumber;
        this.winSymbol = winSymbol;
        this.isAllWin = isAllWin;
        this.isTriggerWinLine = isTriggerWinLine;
    }
    G1009WinLineResult.prototype.GetWinLine = function () {
        return this.winLine;
    };
    G1009WinLineResult.prototype.GetWinNumber = function () {
        return this.winNumber;
    };
    G1009WinLineResult.prototype.GetWinSymbol = function () {
        return this.winSymbol;
    };
    G1009WinLineResult.prototype.GetWinPoint = function () {
        return this.winPoint;
    };
    G1009WinLineResult.prototype.CheckIsAllWin = function () {
        return this.isAllWin;
    };
    G1009WinLineResult.prototype.CheckIsTriggerWinLine = function () {
        return this.isTriggerWinLine;
    };
    G1009WinLineResult.prototype.SetWinSymbol = function (winSymbol) {
        this.winSymbol = winSymbol;
    };
    return G1009WinLineResult;
}());
exports.G1009WinLineResult = G1009WinLineResult;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcHJlc2VudC13aW4vYWthLWcxMDA5LXByZXNlbnQtd2luLXBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBOEQ7QUFDOUQsNkZBQWtGO0FBQ2xGLHFGQUE4RTtBQUU5RSx3RUFBaUU7QUFDakUscUVBQThEO0FBRXhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQU0scUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0FBRWhDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBaVpDO1FBL1lBLFdBQUssR0FBNEIsRUFBRSxDQUFDO1FBSzVCLGdCQUFVLEdBQXVCLElBQUksQ0FBQztRQUk5QyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIseUJBQW1CLEdBQVcsR0FBRyxDQUFDO1FBQ2xDLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLDBCQUFvQixHQUFZLEtBQUssQ0FBQztRQUM5QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLHVCQUFpQixHQUFZLEtBQUssQ0FBQztRQUNuQyx1QkFBaUIsR0FBYSxFQUFFLENBQUM7UUFDakMsdUJBQWlCLEdBQWEsSUFBSSxDQUFDO1FBQ25DLDhCQUF3QixHQUFhLElBQUksQ0FBQztRQUUxQyx1QkFBaUIsR0FBWSxLQUFLLENBQUM7UUFFbkMsZUFBUyxHQUFHLElBQUksQ0FBQzs7SUFvWDFCLENBQUM7SUFsWFUsbUNBQU0sR0FBaEI7UUFD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c0NvbnRlbnQiOlsiaW1wb3J0IHsgU2xvdHR5UGFyYW1ldGVyIH0gZnJvbSBcIi4uLy4uL2FrYS1nMTAwOS1nYW1lLWNvbmZpZ1wiO1xuaW1wb3J0IEcxMDA5R2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2Jhc2UvY29udHJvbGxlci9ha2EtZzEwMDktZ2FtZS1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IHsgRzEwMDlCYWxhbmNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2FrYS1nMTAwOS1iYWxhbmNlLW1vZGVsXCI7XG5pbXBvcnQgeyBHMTAwOUJldE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ha2EtZzEwMDktYmV0LW1vZGVsXCI7XG5pbXBvcnQgRzEwMDlXaW5DZWxsSXRlbUFjdG9yIGZyb20gXCIuL2FrYS1nMTAwOS13aW4tY2VsbC1pdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5jb25zdCBCSUdfV0lOX1RSSUdHRVJfUE9JTlQgPSA1O1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5V2luUGFuZWxBY3RvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblx0SXRlbXM6IEcxMDA5V2luQ2VsbEl0ZW1BY3RvcltdID0gW107XG5cdGNlbGxzUmVzdWx0OiBzdHJpbmdbXTtcblx0d2luTGluZTogRzEwMDlXaW5MaW5lUmVzdWx0W107XG5cdHByaXZhdGUgamFja3BvdFdpbkxpbmU6IEcxMDA5V2luTGluZVJlc3VsdDtcblx0cHJpdmF0ZSB0cmlnZ2VyV2luTGluZTogRzEwMDlXaW5MaW5lUmVzdWx0W107XG5cdHByaXZhdGUgYWxsV2luTGluZTogRzEwMDlXaW5MaW5lUmVzdWx0ID0gbnVsbDtcblx0d2luU2NhdHRlcnM6IEcxMDA5V2luTGluZVJlc3VsdFtdO1xuXHRmZWF0dXJlRGF0YXM6IFtdO1xuXHR3aW5OdW1iZXI6IG51bWJlcjtcblx0Y291bnQ6IG51bWJlciA9IDA7XG5cdGRlbGF5VGltZTogbnVtYmVyID0gMTtcblx0ZGVsYXlUcmFuc2l0aW9uVGltZTogbnVtYmVyID0gMC4xO1xuXHRkZWxheWVkQ291bnQ6IG51bWJlciA9IDA7XG5cdHNob3dBbGxDb3VudDogbnVtYmVyID0gMDtcblx0aXNGcmVlc3BpbnM6IGJvb2xlYW4gPSBmYWxzZTtcblx0dG90YWxGcmVlU3BpbjogbnVtYmVyID0gMDtcblx0aXNBbHJlYWR5Q2hhbmdlU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSB3aW5Qb2ludDogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSB0b3RhbFdpblBvaW50OiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIGphY2twb3RXaW5Qb2ludDogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBpc0JpZ3dpblRyaWdnZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIGV4cGFuZFdpbGRJbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xuXHRwcml2YXRlIHR3ZWVuUHJlc2VudGF0aW9uOiBjYy5Ud2VlbiA9IG51bGw7XG5cdHByaXZhdGUgdHdlZW5QcmVzZW50YXRpb25XaW5MaW5lOiBjYy5Ud2VlbiA9IG51bGw7XG5cblx0cHJpdmF0ZSBpc0NvbXBsZXRlT25lTG9vcDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgY29tYm9EYXRhID0gbnVsbDtcblxuXHRwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuXHRcdHRoaXMucmVnaXN0ZXIoKTtcblx0XHR0aGlzLkl0ZW1zID0gdGhpcy5ub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKEcxMDA5V2luQ2VsbEl0ZW1BY3Rvcik7XG5cdFx0dGhpcy5JdGVtcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmNlbGxJbmRleCAtIGIuY2VsbEluZGV4IH0pO1xuXHRcdHRoaXMuSXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uSGlkZSgpKTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXIoKTogdm9pZCB7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIldpbkRhdGFSZXNwb25kXCIsIHRoaXMub25TZXRGaW5hbFJlU291cmNlLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJQcmVzZW50V2luU3RhcnRcIiwgdGhpcy5vblByZXNlbnRXaW5TdGFydC5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU3BpblN0YXJ0ZWRcIiwgdGhpcy5vblNwaW5TdGFydGVkLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJFeHBhbmRXaWxkU3RhcnRlZFwiLCB0aGlzLm9uRXhwYW5kV2lsZFN0YXJ0ZWQuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkV4cGFuZFdpbGRIaWRlXCIsIHRoaXMub25FeHBhbmRXaWxkSGlkZS5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiQmlnV2luQ29tcGxldGVkXCIsIHRoaXMub25CaWdXaW5Db21wbGV0ZWQuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkphY2twb3RDb21wbGV0ZWRcIiwgdGhpcy5vbkphY2twb3RDb21wbGV0ZWQuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkphY2twb3RTdGFydGVkXCIsIHRoaXMub25KYWNrcG90U3RhcnRlZC5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiRW50ZXJGcmVlc3BpbnNcIiwgdGhpcy5vbkVudGVyRnJlZXNwaW5zLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJmZWF0dXJlV2luQ29tcGxldGVkXCIsIHRoaXMub25GZWF0dXJlV2luQ29tcGxldGVkLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJyZXN1bWVcIiwgdGhpcy5vblJlc3VtZS5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiUHJlc2VudEFsbFdpbkNvbXBsZXRlXCIsIHRoaXMub25QcmVzZW50QWxsV2luQ29tcGxldGUuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkJvbnVzV2luQ29tcGxldGVcIiwgdGhpcy5yZXNldC5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiRW50ZXJCb251c1wiLCB0aGlzLm9uRW50ZXJCb251cy5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiRXhwbG9kZUNlbGxzQ29tcGxldGVcIiwgdGhpcy5vbkV4cGxvZGVDZWxsc0NvbXBsZXRlLmJpbmQodGhpcykpO1xuXG5cdH1cblxuXHRwcml2YXRlIG9uUmVzdW1lKGRhdGE6IGFueSkge1xuXHRcdGlmIChkYXRhLmlzRnJlZXNwaW5zKSB7XG5cdFx0XHR0aGlzLmlzRnJlZXNwaW5zID0gdHJ1ZTtcblx0XHRcdHRoaXMudG90YWxXaW5Qb2ludCA9IGRhdGEudG90YWxXaW5Qb2ludDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9uRW50ZXJGcmVlc3BpbnMoKTogdm9pZCB7XG5cdFx0dGhpcy5pc0ZyZWVzcGlucyA9IHRydWU7XG5cdH1cblxuXHRwcml2YXRlIG9uRmVhdHVyZVdpbkNvbXBsZXRlZChkYXRhKTogdm9pZCB7XG5cblx0XHRpZiAoZGF0YSAmJiBkYXRhLmhpdFJ1bGUgPT0gXCJib251c1wiKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuaXNGcmVlc3BpbnMgPSBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgb25TcGluU3RhcnRlZCgpOiB2b2lkIHtcblx0XHR0aGlzLmlzQ29tcGxldGVPbmVMb29wID0gZmFsc2U7XG5cdFx0dGhpcy5leHBhbmRXaWxkSW5kaWNlcyA9IFtdO1xuXHRcdHRoaXMucmVzZXQoKTtcblx0fVxuXG5cdHByaXZhdGUgb25QcmVzZW50V2luU3RhcnQoKTogdm9pZCB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLkl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLlNob3coKSk7XG5cdFx0XHR0aGlzLmlzQWxyZWFkeUNoYW5nZVN0YXRlID0gZmFsc2U7XG5cdFx0XHRpZiAodGhpcy5jaGVja0phY2twb3RUcmlnZ2VyZWQoKSkge1xuXHRcdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIkphY2twb3RUcmlnZ2VyZWRcIik7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5wcmVzZW50QWxsV2luKCk7XG5cdFx0XHR9XG5cdFx0fSwgMTAwKTtcblx0fVxuXG5cdG9uRXhwbG9kZUNlbGxzQ29tcGxldGUoKSB7XG5cdFx0dGhpcy51cGRhdGVEYXRhV2luUGFuZWxCeUNvbWJvRGF0YSgpO1xuXHRcdC8vIHRoaXMuaXNCaWd3aW5UcmlnZ2VyZWQgPSAodGhpcy5jaGVja0JpZ1dpblRyaWdnZXJlZCgpICYmICFHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuQ2hlY2tCb251c1BvaW50VHJpZ2dlcigpICYmICF0aGlzLmNoZWNrSmFja3BvdFRyaWdnZXJlZCgpKTtcblx0XHR0aGlzLmlzQmlnd2luVHJpZ2dlcmVkID0gKHRoaXMuY2hlY2tCaWdXaW5UcmlnZ2VyZWQoKSAmJiAhRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkNoZWNrQm9udXNQb2ludFRyaWdnZXIoKSAmJiB0aGlzLmphY2twb3RXaW5Qb2ludCA8PSAwKTtcblx0XHR2YXIgaGFzQ29tYm8gPSBHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuQ2hlY2tDb21ib1dpblByZXNlbnRhdGlvbigpO1xuXHRcdGlmIChoYXNDb21ibykge1xuXHRcdFx0dGhpcy5vblByZXNlbnRXaW5TdGFydCgpO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0aGlzLmlzQmlnd2luVHJpZ2dlcmVkKSB7XG5cdFx0XHR0aGlzLnN0YXJ0QmlnV2luKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy50cmFuc2l0aW9uTmV4dFN0YXRlKCk7XG5cdFx0fVxuXHR9XG5cblx0b25FbnRlckJvbnVzKGRhdGFXaW5Cb251cykge1xuXHRcdHZhciB3aW5Qb2ludCA9IDA7XG5cdFx0ZGF0YVdpbkJvbnVzLmZvckVhY2goZGF0YSA9PiB7XG5cdFx0XHR3aW5Qb2ludCArPSBkYXRhLndpblBvaW50O1xuXHRcdH0pO1xuXHRcdGlmICh3aW5Qb2ludCA+IDApIHtcblx0XHRcdHRoaXMudG90YWxXaW5Qb2ludCArPSB3aW5Qb2ludDtcblx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiSW5jcmVhc2VUb3RhbFdpblwiLCB3aW5Qb2ludCk7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlRGF0YVdpblBhbmVsQnlDb21ib0RhdGEoKSB7XG5cdFx0dGhpcy5jZWxsc1Jlc3VsdCA9IHRoaXMuY29tYm9EYXRhLkNlbGxzO1xuXHRcdHRoaXMud2luTGluZSA9IHRoaXMuY29tYm9EYXRhLldpbkxpbmVzO1xuXHRcdHRoaXMuYWxsV2luTGluZSA9IHRoaXMuY29tYm9EYXRhLmFsbFdpbkxpbmU7XG5cdFx0dGhpcy53aW5Qb2ludCA9IHRoaXMuY29tYm9EYXRhLndpblBvaW50O1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNlbGxzUmVzdWx0Lmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0dGhpcy5JdGVtc1tpbmRleF0uSGlkZSgpO1xuXHRcdFx0dGhpcy5JdGVtc1tpbmRleF0uU2V0SXRlbSh0aGlzLmNlbGxzUmVzdWx0W2luZGV4XSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0JpZ1dpblRyaWdnZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50b3RhbFdpblBvaW50IC8gRzEwMDlCZXRNb2RlbC5HZXRJbnN0YW5jZSgpLkdldFRvdGFsQmV0UG9pbnQoKSA+IEJJR19XSU5fVFJJR0dFUl9QT0lOVDtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tKYWNrcG90VHJpZ2dlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHZhciBoYXZlV2luTGluZUphY2twb3QgPSBmYWxzZTtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy53aW5MaW5lLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0Y29uc3Qgd2luTGluZURhdGEgPSB0aGlzLndpbkxpbmVbaW5kZXhdO1xuXHRcdFx0aWYgKHdpbkxpbmVEYXRhLkdldFdpblN5bWJvbCgpID09IFwiV2lsZFwiICYmIHdpbkxpbmVEYXRhLkdldFdpbkxpbmUoKS5sZW5ndGggPT0gNSkge1xuXHRcdFx0XHRoYXZlV2luTGluZUphY2twb3QgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuamFja3BvdFdpblBvaW50ID4gMCAmJiBoYXZlV2luTGluZUphY2twb3Q7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcHJlc2VudEFsbFdpbigpOiB2b2lkIHtcblx0XHRjb25zdCB3aW5EYXRhID0gdGhpcy5hbGxXaW5MaW5lO1xuXHRcdHRoaXMucGxheVNvdW5kU0ZYKHdpbkRhdGEuQ2hlY2tJc0FsbFdpbigpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIk5vdGlmaWNhdGlvbldpbk1lc3NhZ2VcIiwge1xuXHRcdFx0aXNBbGxXaW46IHdpbkRhdGEuQ2hlY2tJc0FsbFdpbigpLFxuXHRcdFx0V2luUG9pbnQ6IHdpbkRhdGEuR2V0V2luUG9pbnQoKSxcblx0XHRcdFdpblN5bWJvbDogd2luRGF0YS5HZXRXaW5TeW1ib2woKSxcblx0XHRcdFdpbk51bWJlcjogd2luRGF0YS5HZXRXaW5OdW1iZXIoKVxuXHRcdH0pO1xuXG5cdFx0aWYgKHRoaXMud2luUG9pbnQgPiAwKSB7XG5cdFx0XHR0aGlzLnRvdGFsV2luUG9pbnQgKz0gdGhpcy53aW5Qb2ludDtcblx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiSW5jcmVhc2VUb3RhbFdpblwiLCB0aGlzLndpblBvaW50KTtcblx0XHR9XG5cblx0XHR0aGlzLnNob3dXaW5TeW1ib2xzKHRoaXMuYWxsV2luTGluZS5HZXRXaW5MaW5lKCkpO1xuXHRcdHRoaXMuT25TaG93TGluZSh0aGlzLmFsbFdpbkxpbmUuR2V0V2luTnVtYmVyKCkpO1xuXHRcdHRoaXMuY291bnQgPSAwO1xuXHRcdHRoaXMudHdlZW5QcmVzZW50YXRpb24gPSBjYy50d2Vlbih0aGlzLm5vZGUpXG5cdFx0XHQuZGVsYXkodGhpcy5kZWxheVRpbWUpXG5cdFx0XHQuY2FsbCgoKSA9PiB7XG5cdFx0XHRcdGlmIChHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuQ2hlY2tDb21ib1dpblByZXNlbnRhdGlvbigpKSB7XG5cdFx0XHRcdFx0dGhpcy5jb21ib0RhdGEgPSBHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuR2V0Q29tYm9EYXRhKCk7XG5cdFx0XHRcdFx0dGhpcy5wcmVzZW50V2luQ29tYm8oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNlcXVlbmNlV2luUHJlc2VudGF0aW9uKCk7XG5cdFx0XHRcdFx0dGhpcy50cmFuc2l0aW9uTmV4dFN0YXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuc3RhcnQoKTtcblx0fVxuXG5cdHByaXZhdGUgcHJlc2VudFdpbkNvbWJvKCkge1xuXHRcdHRoaXMucmVzZXQoKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIlN0YXJ0UHJlc2VudFdpbkNvbWJvXCIsIHRoaXMuY29tYm9EYXRhKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeSgnUGxheVNGWCcsIHsgc2Z4TmFtZTogXCJzZnhfZXhwbG9zaXZlXCIsIGlzTG9vcDogZmFsc2UgfSk7XG5cdH1cblxuXHRwcml2YXRlIHN0YXJ0QmlnV2luKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQmlnd2luVHJpZ2dlcmVkKSB7XG5cdFx0XHR0aGlzLkl0ZW1zLmZvckVhY2goaSA9PiBpLlNob3dTdGF0aWNGcmFtZSgpKTtcblx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiQmlnV2luU3RhcnRlZFwiLCB0aGlzLnRvdGFsV2luUG9pbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9uQmlnV2luQ29tcGxldGVkKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvbkJpZ1dpbkNvbXBsZXRlZCgpOiB2b2lkIHtcblx0XHR0aGlzLkl0ZW1zLmZvckVhY2goaSA9PiBpLkhpZGVTdGF0aWNGcmFtZSgpKTtcblx0XHR2YXIgZGVsYXkgPSAwO1xuXHRcdGlmICh0aGlzLmlzQmlnd2luVHJpZ2dlcmVkKSB7XG5cdFx0XHRkZWxheSA9IDAuNTtcblx0XHR9XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5jaGVja0phY2twb3RUcmlnZ2VyZWQoKSkge1xuXHRcdFx0XHRjb25zdCB3aW5EYXRhID0gdGhpcy5qYWNrcG90V2luTGluZVswXTtcblx0XHRcdFx0aWYgKHdpbkRhdGEgIT0gdW5kZWZpbmVkICYmIHdpbkRhdGEgIT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMucGxheVNvdW5kU0ZYKGZhbHNlKTtcblx0XHRcdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIk5vdGlmaWNhdGlvbldpbk1lc3NhZ2VcIiwge1xuXHRcdFx0XHRcdFx0aXNBbGxXaW46IHdpbkRhdGEuQ2hlY2tJc0FsbFdpbigpLFxuXHRcdFx0XHRcdFx0V2luUG9pbnQ6IHdpbkRhdGEuR2V0V2luUG9pbnQoKSxcblx0XHRcdFx0XHRcdFdpblN5bWJvbDogd2luRGF0YS5HZXRXaW5TeW1ib2woKSxcblx0XHRcdFx0XHRcdFdpbk51bWJlcjogd2luRGF0YS5HZXRXaW5OdW1iZXIoKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuc2hvd1RyaWdnZXJXaW5TeW1ib2xzKHdpbkRhdGEuR2V0V2luTGluZSgpKTtcblx0XHRcdFx0XHR0aGlzLk9uU2hvd0xpbmUod2luRGF0YS5HZXRXaW5OdW1iZXIoKSk7XG5cdFx0XHRcdFx0dGhpcy50d2VlblByZXNlbnRhdGlvbiA9IGNjLnR3ZWVuKHRoaXMubm9kZSlcblx0XHRcdFx0XHRcdC5kZWxheSh0aGlzLmRlbGF5VHJhbnNpdGlvblRpbWUpXG5cdFx0XHRcdFx0XHQuY2FsbCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudHJhbnNpdGlvbk5leHRTdGF0ZSgpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkNoZWNrQm9udXNGZWF0dXJlVHJpZ2dlcigpKSB7XG5cdFx0XHRcdGNvbnN0IHdpbkRhdGEgPSB0aGlzLnRyaWdnZXJXaW5MaW5lWzBdO1xuXHRcdFx0XHRpZiAod2luRGF0YSAhPSB1bmRlZmluZWQgJiYgd2luRGF0YSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5U291bmRTRlgoZmFsc2UpO1xuXHRcdFx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiTm90aWZpY2F0aW9uV2luTWVzc2FnZVwiLCB7XG5cdFx0XHRcdFx0XHRpc0FsbFdpbjogd2luRGF0YS5DaGVja0lzQWxsV2luKCksXG5cdFx0XHRcdFx0XHRXaW5Qb2ludDogd2luRGF0YS5HZXRXaW5Qb2ludCgpLFxuXHRcdFx0XHRcdFx0V2luU3ltYm9sOiB3aW5EYXRhLkdldFdpblN5bWJvbCgpLFxuXHRcdFx0XHRcdFx0V2luTnVtYmVyOiB3aW5EYXRhLkdldFdpbk51bWJlcigpXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5zaG93VHJpZ2dlcldpblN5bWJvbHMod2luRGF0YS5HZXRXaW5MaW5lKCkpO1xuXHRcdFx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwic2hvd1RyaWdnZXJXaW5TeW1ib2xzXCIpO1xuXHRcdFx0XHRcdHRoaXMuT25TaG93TGluZSh3aW5EYXRhLkdldFdpbk51bWJlcigpKTtcblx0XHRcdFx0XHR0aGlzLnR3ZWVuUHJlc2VudGF0aW9uID0gY2MudHdlZW4odGhpcy5ub2RlKVxuXHRcdFx0XHRcdFx0LmRlbGF5KHRoaXMuZGVsYXlUcmFuc2l0aW9uVGltZSlcblx0XHRcdFx0XHRcdC5jYWxsKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0dGhpcy50cmFuc2l0aW9uTmV4dFN0YXRlKCk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnN0YXJ0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jb3VudCA9IDA7XG5cdFx0XHRcdHRoaXMuc2VxdWVuY2VXaW5QcmVzZW50YXRpb24oKTtcblx0XHRcdH1cblx0XHRcdHRoaXMudHJhbnNpdGlvbk5leHRTdGF0ZSgpO1xuXHRcdH0sIGRlbGF5KTtcblx0fVxuXG5cdHByaXZhdGUgc2VxdWVuY2VXaW5QcmVzZW50YXRpb24oKTogdm9pZCB7XG5cdFx0aWYgKCEodGhpcy53aW5MaW5lLmxlbmd0aCA+IDApKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNvdW50ID49IHRoaXMud2luTGluZS5sZW5ndGgpIHtcblx0XHRcdHRoaXMuY291bnQgPSAwO1xuXHRcdFx0dGhpcy5pc0NvbXBsZXRlT25lTG9vcCA9IHRydWU7XG5cdFx0fVxuXHRcdGNvbnN0IHdpbkluZGV4ID0gdGhpcy5jb3VudDtcblx0XHRjb25zdCB3aW5EYXRhID0gdGhpcy53aW5MaW5lW3RoaXMuY291bnRdO1xuXHRcdGlmICghdGhpcy5pc0NvbXBsZXRlT25lTG9vcClcblx0XHRcdHRoaXMucGxheVNvdW5kU0ZYKHdpbkRhdGEuQ2hlY2tJc0FsbFdpbigpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIk5vdGlmaWNhdGlvbldpbk1lc3NhZ2VcIiwge1xuXHRcdFx0aXNBbGxXaW46IHdpbkRhdGEuQ2hlY2tJc0FsbFdpbigpLFxuXHRcdFx0V2luUG9pbnQ6IHdpbkRhdGEuR2V0V2luUG9pbnQoKSxcblx0XHRcdFdpblN5bWJvbDogd2luRGF0YS5HZXRXaW5TeW1ib2woKSxcblx0XHRcdFdpbk51bWJlcjogd2luRGF0YS5HZXRXaW5OdW1iZXIoKVxuXHRcdH0pO1xuXHRcdHRoaXMuc2hvd1dpblN5bWJvbHModGhpcy53aW5MaW5lW3dpbkluZGV4XS5HZXRXaW5MaW5lKCkpO1xuXHRcdHRoaXMuT25TaG93TGluZSh0aGlzLndpbkxpbmVbd2luSW5kZXhdLkdldFdpbk51bWJlcigpKTtcblx0XHR0aGlzLmNvdW50Kys7XG5cdFx0dGhpcy50d2VlblByZXNlbnRhdGlvbldpbkxpbmUgPSBjYy50d2Vlbih0aGlzLm5vZGUpXG5cdFx0XHQuZGVsYXkodGhpcy5kZWxheVRpbWUpXG5cdFx0XHQuY2FsbCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VxdWVuY2VXaW5QcmVzZW50YXRpb24oKTtcblx0XHRcdH0pXG5cdFx0XHQuc3RhcnQoKTtcblx0fVxuXG5cdHByaXZhdGUgb25KYWNrcG90U3RhcnRlZCgpOiB2b2lkIHtcblx0XHR0aGlzLnNob3dXaW5TeW1ib2xzKHRoaXMuamFja3BvdFdpbkxpbmUuR2V0V2luTGluZSgpKTtcblx0fVxuXG5cdHByaXZhdGUgb25KYWNrcG90Q29tcGxldGVkKCk6IHZvaWQge1xuXHRcdHRoaXMucHJlc2VudEFsbFdpbigpXG5cdH1cblxuXHRwcml2YXRlIG9uU2V0RmluYWxSZVNvdXJjZShmaW5hbFJlc3VsdDogYW55KTogdm9pZCB7XG5cdFx0bGV0IF9maW5hbFJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIGZpbmFsUmVzdWx0KTtcblx0XHR0aGlzLmNlbGxzUmVzdWx0ID0gX2ZpbmFsUmVzdWx0LkNlbGxzO1xuXHRcdHRoaXMud2luTGluZSA9IF9maW5hbFJlc3VsdC5XaW5MaW5lcztcblx0XHR0aGlzLmFsbFdpbkxpbmUgPSBfZmluYWxSZXN1bHQuYWxsV2luTGluZTtcblx0XHR0aGlzLmphY2twb3RXaW5MaW5lID0gX2ZpbmFsUmVzdWx0LmphY2twb3RXaW5MaW5lO1xuXHRcdHRoaXMudHJpZ2dlcldpbkxpbmUgPSBfZmluYWxSZXN1bHQuV2luU2NhdHRlcnMuY29uY2F0KF9maW5hbFJlc3VsdC5XaW5Cb251cyk7XG5cdFx0dGhpcy5mZWF0dXJlRGF0YXMgPSBfZmluYWxSZXN1bHQuZmVhdHVyZURhdGFzO1xuXHRcdHRoaXMud2luUG9pbnQgPSBmaW5hbFJlc3VsdC53aW5Qb2ludDtcblx0XHR0aGlzLmphY2twb3RXaW5Qb2ludCA9IGZpbmFsUmVzdWx0LmphY2twb3RXaW5Qb2ludDtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jZWxsc1Jlc3VsdC5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdHRoaXMuSXRlbXNbaW5kZXhdLkhpZGUoKTtcblx0XHRcdHRoaXMuSXRlbXNbaW5kZXhdLlNldEl0ZW0odGhpcy5jZWxsc1Jlc3VsdFtpbmRleF0pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcGxheVNvdW5kU0ZYKGlzQWxsV2luOiBib29sZWFuKTogdm9pZCB7XG5cdFx0aWYgKCFpc0FsbFdpbiAmJiAhRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkNoZWNrQm9udXNGZWF0dXJlVHJpZ2dlcigpKSB7XG5cdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeSgnUGxheVNGWCcsIHsgc2Z4TmFtZTogJ3NmeF9zeW1ib2x3aW4nLCBpc0xvb3A6IGZhbHNlIH0pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdHJhbnNpdGlvbk5leHRTdGF0ZSgpOiB2b2lkIHtcblx0XHR0aGlzLnRvdGFsV2luUG9pbnQgPSBHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuR2V0VG90YWxXaW5Qb2ludCgpO1xuXHRcdGlmICghdGhpcy5pc0FscmVhZHlDaGFuZ2VTdGF0ZSkge1xuXHRcdFx0dGhpcy5pc0FscmVhZHlDaGFuZ2VTdGF0ZSA9IHRydWU7XG5cdFx0XHQvLyBpZiAodGhpcy5jaGVja0phY2twb3RUcmlnZ2VyZWQoKSkge1xuXHRcdFx0Ly8gXHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIkphY2twb3RUcmlnZ2VyZWRcIik7XG5cdFx0XHQvLyBcdHJldHVybjtcblx0XHRcdC8vIH1cblx0XHRcdGlmIChHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuQ2hlY2tCb251c0ZlYXR1cmVUcmlnZ2VyKCkpIHtcblx0XHRcdFx0dmFyIGRhdGFGZWF0dXJlID0gRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkdldEZlYXR1cmVXaW5EYXRhKCk7XG5cdFx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiRmVhdHVyZVRyaWdnZXJcIiwgZGF0YUZlYXR1cmUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkNoZWNrRnJlZXNwaW5Db250aW51ZSgpKSB7XG5cdFx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHRcdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJTcGluXCIpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkNoZWNrRnJlZXNwaW5FbmQoKSkge1xuXHRcdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0XHRcdHRoaXMudG90YWxXaW5Qb2ludCA9IDA7XG5cdFx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiRmVhdHVyZUNvbXBsZXRlXCIpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRvdGFsV2luUG9pbnQgPSAwO1xuXHRcdFx0Y29uc29sZS53YXJuKCd0cmFuc2l0aW9uTmV4dFN0YXRlOiwgJywgdGhpcy50b3RhbFdpblBvaW50KTtcblx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiRW5kUm91bmRcIik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBPblNob3dMaW5lKGxpbmU6IG51bWJlcltdKTogdm9pZCB7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJTaG93TGluZVwiLCBsaW5lKTtcblx0fVxuXG5cdHByaXZhdGUgT25IaWRlQWxsTGluZSgpOiB2b2lkIHtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIlJlc2V0QWxsTGluZVwiKTtcblx0fVxuXG5cdHByaXZhdGUgc2hvd1dpblN5bWJvbHMod2luTGluZTogbnVtYmVyW10pIHtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIlNob3dXaW5DZWxsc1wiLCB3aW5MaW5lKTtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgd2luTGluZS5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdHRoaXMuSXRlbXMuZmluZChpdGVtID0+IGl0ZW0uY2VsbEluZGV4ID09IHdpbkxpbmVbaW5kZXhdKS5QbGF5V2luQW5pbWF0aW9uKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzaG93VHJpZ2dlcldpblN5bWJvbHMod2luTGluZTogbnVtYmVyW10pIHtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgd2luTGluZS5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdHRoaXMuSXRlbXMuZmluZChpdGVtID0+IGl0ZW0uY2VsbEluZGV4ID09IHdpbkxpbmVbaW5kZXhdKS5QbGF5V2luVHJpZ2dlcigpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb25FeHBhbmRXaWxkU3RhcnRlZChleHBhbmRXaWxkSW5kaWNlczogYW55KSB7XG5cdFx0dGhpcy5leHBhbmRXaWxkSW5kaWNlcyA9IE9iamVjdC5hc3NpZ24oW10sIGV4cGFuZFdpbGRJbmRpY2VzKTtcblx0XHR0aGlzLmV4cGFuZFdpbGRJbmRpY2VzLmZvckVhY2goaW5kZXggPT4ge1xuXHRcdFx0bGV0IHJlZWxJbmRleCA9IFNsb3R0eVBhcmFtZXRlci5HZXRSZWVsSW5kZXgoaW5kZXgpO1xuXHRcdFx0dGhpcy5JdGVtc1tTbG90dHlQYXJhbWV0ZXIuR2V0Q2VsbEluZGV4KHJlZWxJbmRleCwgMCldLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHR0aGlzLkl0ZW1zW1Nsb3R0eVBhcmFtZXRlci5HZXRDZWxsSW5kZXgocmVlbEluZGV4LCAxKV0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdHRoaXMuSXRlbXNbU2xvdHR5UGFyYW1ldGVyLkdldENlbGxJbmRleChyZWVsSW5kZXgsIDIpXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdH0pXG5cdH1cblxuXHRwcml2YXRlIG9uRXhwYW5kV2lsZEhpZGUoKSB7XG5cdFx0dGhpcy5JdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5ub2RlLmFjdGl2ZSA9IHRydWUpO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcblx0XHR0aGlzLnR3ZWVuUHJlc2VudGF0aW9uICYmIHRoaXMudHdlZW5QcmVzZW50YXRpb24uc3RvcCgpO1xuXHRcdHRoaXMudHdlZW5QcmVzZW50YXRpb25XaW5MaW5lICYmIHRoaXMudHdlZW5QcmVzZW50YXRpb25XaW5MaW5lLnN0b3AoKTtcblx0XHR0aGlzLmlzQmlnd2luVHJpZ2dlcmVkID0gZmFsc2U7XG5cdFx0dGhpcy5jZWxsc1Jlc3VsdCA9IFtdO1xuXHRcdHRoaXMuSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGl0ZW0uSGlkZSgpO1xuXHRcdFx0aXRlbS5SZXNldCgpO1xuXHRcdFx0aXRlbS5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cdFx0fSk7XG5cdFx0dGhpcy5kZWxheWVkQ291bnQgPSAwO1xuXHRcdHRoaXMuY291bnQgPSAwO1xuXHRcdHRoaXMuT25IaWRlQWxsTGluZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvblByZXNlbnRBbGxXaW5Db21wbGV0ZSgpOiB2b2lkIHtcblx0XHQvLyB0aGlzLkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0Ly8gXHRpdGVtLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0Ly8gXHRpdGVtLm5vZGUub3BhY2l0eSA9IDA7XG5cdFx0Ly8gfSk7XG5cdFx0Ly8gdGhpcy5PbkhpZGVBbGxMaW5lKCk7XG5cdH1cbn1cbmV4cG9ydCBjbGFzcyBHMTAwOVdpbkxpbmVSZXN1bHQge1xuXHRwcml2YXRlIHdpbkxpbmU6IG51bWJlcltdO1xuXHRwcml2YXRlIHdpblBvaW50OiBudW1iZXI7XG5cdHByaXZhdGUgd2luTnVtYmVyOiBudW1iZXJbXTtcblx0cHJpdmF0ZSB3aW5TeW1ib2w6IHN0cmluZztcblx0cHJpdmF0ZSBpc0FsbFdpbjogYm9vbGVhbjtcblx0cHJpdmF0ZSBpc1RyaWdnZXJXaW5MaW5lOiBib29sZWFuO1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih3aW5saW5lOiBudW1iZXJbXSwgd2luUG9pbnQ6IG51bWJlciwgd2luTnVtYmVyOiBudW1iZXJbXSwgd2luU3ltYm9sOiBzdHJpbmcgPSBcIlwiLCBpc0FsbFdpbjogYm9vbGVhbiA9IGZhbHNlLCBpc1RyaWdnZXJXaW5MaW5lOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHR0aGlzLndpbkxpbmUgPSB3aW5saW5lO1xuXHRcdHRoaXMud2luUG9pbnQgPSB3aW5Qb2ludDtcblx0XHR0aGlzLndpbk51bWJlciA9IHdpbk51bWJlcjtcblx0XHR0aGlzLndpblN5bWJvbCA9IHdpblN5bWJvbDtcblx0XHR0aGlzLmlzQWxsV2luID0gaXNBbGxXaW47XG5cdFx0dGhpcy5pc1RyaWdnZXJXaW5MaW5lID0gaXNUcmlnZ2VyV2luTGluZTtcblx0fVxuXG5cdHB1YmxpYyBHZXRXaW5MaW5lKCk6IG51bWJlcltdIHtcblx0XHRyZXR1cm4gdGhpcy53aW5MaW5lO1xuXHR9XG5cblx0cHVibGljIEdldFdpbk51bWJlcigpOiBudW1iZXJbXSB7XG5cdFx0cmV0dXJuIHRoaXMud2luTnVtYmVyO1xuXHR9XG5cblx0cHVibGljIEdldFdpblN5bWJvbCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLndpblN5bWJvbDtcblx0fVxuXG5cdHB1YmxpYyBHZXRXaW5Qb2ludCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpblBvaW50O1xuXHR9XG5cblx0cHVibGljIENoZWNrSXNBbGxXaW4oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNBbGxXaW47XG5cdH1cblxuXHRwdWJsaWMgQ2hlY2tJc1RyaWdnZXJXaW5MaW5lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzVHJpZ2dlcldpbkxpbmU7XG5cdH1cblxuXHRwdWJsaWMgU2V0V2luU3ltYm9sKHdpblN5bWJvbDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy53aW5TeW1ib2wgPSB3aW5TeW1ib2w7XG5cdH1cbn1cbiJdfQ==