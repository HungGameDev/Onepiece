"use strict";
cc._RF.push(module, '8edf39ShXZImLq8jNj5tJjz', 'Slot45-present-win-panel');
// Script/UI/present-win/Slot45-present-win-panel.ts

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
exports.Slot45WinLineResult = void 0;
var Slot45_game_config_1 = require("../../Slot45-game-config");
var Slot45_game_controller_1 = require("../../base/controller/Slot45-game-controller");
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var Slot45_bet_model_1 = require("../../models/Slot45-bet-model");
var Slot45_win_cell_item_1 = require("./Slot45-win-cell-item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BIG_WIN_TRIGGER_POINT = 5;
var Slot45WinPanelActor = /** @class */ (function (_super) {
    __extends(Slot45WinPanelActor, _super);
    function Slot45WinPanelActor() {
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
    Slot45WinPanelActor.prototype.onLoad = function () {
        this.register();
        this.Items = this.node.getComponentsInChildren(Slot45_win_cell_item_1.default);
        this.Items.sort(function (a, b) { return a.cellIndex - b.cellIndex; });
        this.Items.forEach(function (item) { return item.Hide(); });
    };
    Slot45WinPanelActor.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("WinDataRespond", this.onSetFinalReSource.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("PresentWinStart", this.onPresentWinStart.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ExpandWildStarted", this.onExpandWildStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ExpandWildHide", this.onExpandWildHide.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("BigWinCompleted", this.onBigWinCompleted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("JackpotCompleted", this.onJackpotCompleted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("JackpotStarted", this.onJackpotStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("resume", this.onResume.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("PresentAllWinComplete", this.onPresentAllWinComplete.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("BonusWinComplete", this.reset.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("EnterBonus", this.onEnterBonus.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ExplodeCellsComplete", this.onExplodeCellsComplete.bind(this));
    };
    Slot45WinPanelActor.prototype.onResume = function (data) {
        if (data.isFreespins) {
            this.isFreespins = true;
            this.totalWinPoint = data.totalWinPoint;
        }
    };
    Slot45WinPanelActor.prototype.onEnterFreespins = function () {
        this.isFreespins = true;
    };
    Slot45WinPanelActor.prototype.onFeatureWinCompleted = function (data) {
        if (data && data.hitRule == "bonus") {
            return;
        }
        this.isFreespins = false;
    };
    Slot45WinPanelActor.prototype.onSpinStarted = function () {
        this.isCompleteOneLoop = false;
        this.expandWildIndices = [];
        this.reset();
    };
    Slot45WinPanelActor.prototype.onPresentWinStart = function () {
        var _this = this;
        setTimeout(function () {
            _this.Items.forEach(function (item) { return item.Show(); });
            _this.isAlreadyChangeState = false;
            if (_this.checkJackpotTriggered()) {
                Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("JackpotTriggered");
            }
            else {
                _this.presentAllWin();
            }
        }, 100);
    };
    Slot45WinPanelActor.prototype.onExplodeCellsComplete = function () {
        this.updateDataWinPanelByComboData();
        // this.isBigwinTriggered = (this.checkBigWinTriggered() && !Slot45GameController.GetInstance().CheckBonusPointTrigger() && !this.checkJackpotTriggered());
        this.isBigwinTriggered = (this.checkBigWinTriggered() && !Slot45_game_controller_1.default.GetInstance().CheckBonusPointTrigger() && this.jackpotWinPoint <= 0);
        var hasCombo = Slot45_game_controller_1.default.GetInstance().CheckComboWinPresentation();
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
    Slot45WinPanelActor.prototype.onEnterBonus = function (dataWinBonus) {
        var winPoint = 0;
        dataWinBonus.forEach(function (data) {
            winPoint += data.winPoint;
        });
        if (winPoint > 0) {
            this.totalWinPoint += winPoint;
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("IncreaseTotalWin", winPoint);
        }
    };
    Slot45WinPanelActor.prototype.updateDataWinPanelByComboData = function () {
        this.cellsResult = this.comboData.Cells;
        this.winLine = this.comboData.WinLines;
        this.allWinLine = this.comboData.allWinLine;
        this.winPoint = this.comboData.winPoint;
        for (var index = 0; index < this.cellsResult.length; index++) {
            this.Items[index].Hide();
            this.Items[index].SetItem(this.cellsResult[index]);
        }
    };
    Slot45WinPanelActor.prototype.checkBigWinTriggered = function () {
        return this.totalWinPoint / Slot45_bet_model_1.Slot45BetModel.GetInstance().GetTotalBetPoint() > BIG_WIN_TRIGGER_POINT;
    };
    Slot45WinPanelActor.prototype.checkJackpotTriggered = function () {
        var haveWinLineJackpot = false;
        for (var index = 0; index < this.winLine.length; index++) {
            var winLineData = this.winLine[index];
            if (winLineData.GetWinSymbol() == "Jackpot" && winLineData.GetWinLine().length == 5) {
                haveWinLineJackpot = true;
                break;
            }
        }
        return this.jackpotWinPoint > 0 && haveWinLineJackpot;
    };
    Slot45WinPanelActor.prototype.presentAllWin = function () {
        var _this = this;
        var winData = this.allWinLine;
        this.playSoundSFX(winData.CheckIsAllWin());
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("NotificationWinMessage", {
            isAllWin: winData.CheckIsAllWin(),
            WinPoint: winData.GetWinPoint(),
            WinSymbol: winData.GetWinSymbol(),
            WinNumber: winData.GetWinNumber()
        });
        if (this.winPoint > 0) {
            this.totalWinPoint += this.winPoint;
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("IncreaseTotalWin", this.winPoint);
        }
        this.showWinSymbols(this.allWinLine.GetWinLine());
        this.OnShowLine(this.allWinLine.GetWinNumber());
        this.count = 0;
        this.tweenPresentation = cc.tween(this.node)
            .delay(this.delayTime)
            .call(function () {
            if (Slot45_game_controller_1.default.GetInstance().CheckComboWinPresentation()) {
                _this.comboData = Slot45_game_controller_1.default.GetInstance().GetComboData();
                _this.presentWinCombo();
            }
            else {
                _this.sequenceWinPresentation();
                _this.transitionNextState();
            }
        })
            .start();
    };
    Slot45WinPanelActor.prototype.presentWinCombo = function () {
        this.reset();
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("StartPresentWinCombo", this.comboData);
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_explosive", isLoop: false });
    };
    Slot45WinPanelActor.prototype.startBigWin = function () {
        if (this.isBigwinTriggered) {
            this.Items.forEach(function (i) { return i.ShowStaticFrame(); });
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("BigWinStarted", this.totalWinPoint);
        }
        else {
            this.onBigWinCompleted();
        }
    };
    Slot45WinPanelActor.prototype.onBigWinCompleted = function () {
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
                    Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("NotificationWinMessage", {
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
            else if (Slot45_game_controller_1.default.GetInstance().CheckBonusFeatureTrigger()) {
                var winData = _this.triggerWinLine[0];
                if (winData != undefined && winData != null) {
                    _this.playSoundSFX(false);
                    Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("NotificationWinMessage", {
                        isAllWin: winData.CheckIsAllWin(),
                        WinPoint: winData.GetWinPoint(),
                        WinSymbol: winData.GetWinSymbol(),
                        WinNumber: winData.GetWinNumber()
                    });
                    _this.showTriggerWinSymbols(winData.GetWinLine());
                    Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("showTriggerWinSymbols");
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
    Slot45WinPanelActor.prototype.sequenceWinPresentation = function () {
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
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("NotificationWinMessage", {
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
    Slot45WinPanelActor.prototype.onJackpotStarted = function () {
        this.showWinSymbols(this.jackpotWinLine.GetWinLine());
    };
    Slot45WinPanelActor.prototype.onJackpotCompleted = function () {
        this.presentAllWin();
    };
    Slot45WinPanelActor.prototype.onSetFinalReSource = function (finalResult) {
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
    Slot45WinPanelActor.prototype.playSoundSFX = function (isAllWin) {
        if (!isAllWin && !Slot45_game_controller_1.default.GetInstance().CheckBonusFeatureTrigger()) {
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_symbolwin', isLoop: false });
        }
    };
    Slot45WinPanelActor.prototype.transitionNextState = function () {
        this.totalWinPoint = Slot45_game_controller_1.default.GetInstance().GetTotalWinPoint();
        if (!this.isAlreadyChangeState) {
            this.isAlreadyChangeState = true;
            // if (this.checkJackpotTriggered()) {
            // 	Slot45EventManager.GetInstance().notify("JackpotTriggered");
            // 	return;
            // }
            if (Slot45_game_controller_1.default.GetInstance().CheckBonusFeatureTrigger()) {
                var dataFeature = Slot45_game_controller_1.default.GetInstance().GetFeatureWinData();
                Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("FeatureTrigger", dataFeature);
                return;
            }
            if (Slot45_game_controller_1.default.GetInstance().CheckFreespinContinue()) {
                this.reset();
                Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("Spin");
                return;
            }
            if (Slot45_game_controller_1.default.GetInstance().CheckFreespinEnd()) {
                this.reset();
                this.totalWinPoint = 0;
                Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("FeatureComplete");
                return;
            }
            this.totalWinPoint = 0;
            console.warn('transitionNextState:, ', this.totalWinPoint);
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("EndRound");
        }
    };
    Slot45WinPanelActor.prototype.OnShowLine = function (line) {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ShowLine", line);
    };
    Slot45WinPanelActor.prototype.OnHideAllLine = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ResetAllLine");
    };
    Slot45WinPanelActor.prototype.showWinSymbols = function (winLine) {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ShowWinCells", winLine);
        var _loop_1 = function (index) {
            this_1.Items.find(function (item) { return item.cellIndex == winLine[index]; }).PlayWinAnimation();
        };
        var this_1 = this;
        for (var index = 0; index < winLine.length; index++) {
            _loop_1(index);
        }
    };
    Slot45WinPanelActor.prototype.showTriggerWinSymbols = function (winLine) {
        var _loop_2 = function (index) {
            this_2.Items.find(function (item) { return item.cellIndex == winLine[index]; }).PlayWinTrigger();
        };
        var this_2 = this;
        for (var index = 0; index < winLine.length; index++) {
            _loop_2(index);
        }
    };
    Slot45WinPanelActor.prototype.onExpandWildStarted = function (expandWildIndices) {
        var _this = this;
        this.expandWildIndices = Object.assign([], expandWildIndices);
        this.expandWildIndices.forEach(function (index) {
            var reelIndex = Slot45_game_config_1.SlottyParameter.GetReelIndex(index);
            _this.Items[Slot45_game_config_1.SlottyParameter.GetCellIndex(reelIndex, 0)].node.active = false;
            _this.Items[Slot45_game_config_1.SlottyParameter.GetCellIndex(reelIndex, 1)].node.active = false;
            _this.Items[Slot45_game_config_1.SlottyParameter.GetCellIndex(reelIndex, 2)].node.active = false;
        });
    };
    Slot45WinPanelActor.prototype.onExpandWildHide = function () {
        this.Items.forEach(function (item) { return item.node.active = true; });
    };
    Slot45WinPanelActor.prototype.reset = function () {
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
    Slot45WinPanelActor.prototype.onPresentAllWinComplete = function () {
        // this.Items.forEach(item => {
        // 	item.node.active = false;
        // 	item.node.opacity = 0;
        // });
        // this.OnHideAllLine();
    };
    Slot45WinPanelActor = __decorate([
        ccclass
    ], Slot45WinPanelActor);
    return Slot45WinPanelActor;
}(cc.Component));
exports.default = Slot45WinPanelActor;
var Slot45WinLineResult = /** @class */ (function () {
    function Slot45WinLineResult(winline, winPoint, winNumber, winSymbol, isAllWin, isTriggerWinLine) {
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
    Slot45WinLineResult.prototype.GetWinLine = function () {
        return this.winLine;
    };
    Slot45WinLineResult.prototype.GetWinNumber = function () {
        return this.winNumber;
    };
    Slot45WinLineResult.prototype.GetWinSymbol = function () {
        return this.winSymbol;
    };
    Slot45WinLineResult.prototype.GetWinPoint = function () {
        return this.winPoint;
    };
    Slot45WinLineResult.prototype.CheckIsAllWin = function () {
        return this.isAllWin;
    };
    Slot45WinLineResult.prototype.CheckIsTriggerWinLine = function () {
        return this.isTriggerWinLine;
    };
    Slot45WinLineResult.prototype.SetWinSymbol = function (winSymbol) {
        this.winSymbol = winSymbol;
    };
    return Slot45WinLineResult;
}());
exports.Slot45WinLineResult = Slot45WinLineResult;

cc._RF.pop();