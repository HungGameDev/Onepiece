"use strict";
cc._RF.push(module, '67c0duyhspCGa6fCQ6IlHBc', 'Slot45-game-controller');
// Script/base/controller/Slot45-game-controller.ts

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
var Slot45_present_win_panel_1 = require("../../UI/present-win/Slot45-present-win-panel");
var Slot45_event_manager_1 = require("../events/Slot45-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45GameController = /** @class */ (function (_super) {
    __extends(Slot45GameController, _super);
    function Slot45GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = null;
        _this.featureDatas = [];
        _this.isTurbo = false;
        _this.oldata = null;
        _this.freespinTotalWinPoint = 0;
        _this.jackpotTotalWinPoint = 0;
        _this.totalWinPoint = 0;
        _this.isFreespins = false;
        _this.isAuto = false;
        _this.comboCount = 0;
        return _this;
    }
    Slot45GameController_1 = Slot45GameController;
    Slot45GameController.GetInstance = function () {
        if (!Slot45GameController_1.instance)
            Slot45GameController_1.instance = new Slot45GameController_1();
        return Slot45GameController_1.instance;
    };
    Slot45GameController.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ActiveAuto", this.onActiveAuto.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("StopAuto", this.onStopAuto.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("Turbo", this.onTurbo.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("NextScrollData", this.onNextScrollData.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("featureWinCompleted", this.onfeatureWinCompleted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("featureWinstarted", this.onfeatureWinstarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("BonusWinStarted", this.onBonusWinStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("BonusWinComplete", this.onBonusWinComplete.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("resume", this.onResume.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("resumeBonus", this.onResumeBonus.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("EndRound", this.onEndRound.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("StartPresentWinCombo", this.onStartPresentWinCombo.bind(this));
    };
    Slot45GameController.prototype.onStartPresentWinCombo = function () {
        this.comboCount++;
    };
    Slot45GameController.prototype.onActiveAuto = function () {
        this.isAuto = true;
    };
    Slot45GameController.prototype.onStopAuto = function () {
        this.isAuto = false;
    };
    Slot45GameController.prototype.onEndRound = function () {
        console.warn("onEndRound: ", this.comboCount);
        this.comboCount = 0;
    };
    Slot45GameController.prototype.IsActiveAuto = function () {
        return this.isAuto;
    };
    Slot45GameController.prototype.onLoad = function () {
        if (Slot45GameController_1.instance) {
            throw new Error("Error: Instantiation failed: Use GameController.getInstance() instead of new.");
        }
        Slot45GameController_1.instance = this;
        this.register();
    };
    Slot45GameController.prototype.onResume = function (data) {
        // this.data = data;
        // this.oldata = Object.assign({}, data);
        // this.featureDatas = data.featureDatas;
    };
    Slot45GameController.prototype.onResumeBonus = function (data) {
        //this.oldata = Object.assign({}, data);
    };
    Slot45GameController.prototype.onBonusWinStarted = function () {
    };
    Slot45GameController.prototype.onBonusWinComplete = function () {
        var filterFeatureDatas = this.data.featureDatas.filter(function (x) { return !x.hitRule.includes("bonus"); });
        this.featureDatas = filterFeatureDatas;
        this.data.featureDatas = filterFeatureDatas;
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("featureWinCompleted", { hitRule: "bonus" });
    };
    Slot45GameController.prototype.onSpinStarted = function () {
        this.comboCount = 0;
        var requestData = { isFreespin: this.CheckIsFreespin() };
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("SpinRequest", requestData);
    };
    Slot45GameController.prototype.onTurbo = function (isTurbo) {
        this.isTurbo = isTurbo;
    };
    Slot45GameController.prototype.onNextScrollData = function (data) {
        this.data = this.processSpinData(data);
        if (data.featureDatas.length > 0) {
            this.featureDatas = Object.assign([], data.featureDatas);
        }
        if (data.hasOwnProperty("freespintotalWinPoint")) {
            this.freespinTotalWinPoint = data.freespintotalWinPoint;
        }
        if (data.hasOwnProperty("totalWinPoint")) {
            this.totalWinPoint = data.totalWinPoint;
        }
        if (data.hasOwnProperty("freespintotalWinPoint")) {
            this.freespinTotalWinPoint = data.freespintotalWinPoint;
        }
        if (!!this.data.bonusGameDatas) {
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("PickUpdata", this.data.bonusGameDatas);
        }
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("DataRespond", data.Cells);
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("WinDataRespond", this.data);
    };
    Slot45GameController.prototype.onfeatureWinCompleted = function () {
        this.onEndRound();
    };
    Slot45GameController.prototype.onfeatureWinstarted = function () {
        this.isFreespins = false;
        // if (this.oldata == null) { this.oldata = this.data; }
        // cc.tween(this.node).delay(1).call(() => {
        // 	Slot45EventManager.GetInstance().notify("SetOldItems", this.oldata);
        // 	this.oldata.featureDatas = [];
        // }).start();
    };
    Slot45GameController.prototype.CheckExpandWild = function (data) {
        if (data === void 0) { data = null; }
        if (data == null) {
            data = this.data;
        }
        return data != null && data.isExpandWild;
    };
    Slot45GameController.prototype.CheckWinLineData = function (data) {
        if (data === void 0) { data = null; }
        if (data == null) {
            data = this.data;
        }
        return data != null && (data.allWinLine || data.WinScatters.length > 0 || data.WinBonus.length > 0);
    };
    Slot45GameController.prototype.CheckBonusFeatureTrigger = function (data) {
        if (data === void 0) { data = null; }
        if (data == null) {
            data = this.data;
        }
        return data != null && data.featureDatas.length > 0;
    };
    Slot45GameController.prototype.CheckFreespinEnd = function (data) {
        if (data === void 0) { data = null; }
        if (data == null) {
            data = this.data;
        }
        return data != null && data.isFreespins && data.freespinLeft == 0;
    };
    Slot45GameController.prototype.CheckFreespinContinue = function (data) {
        if (data === void 0) { data = null; }
        if (data == null) {
            data = this.data;
        }
        return data != null && data.freespinLeft > 0;
    };
    Slot45GameController.prototype.CheckFreespinTrigger = function (featureDatas) {
        if (featureDatas === void 0) { featureDatas = null; }
        if (this.CheckBonusPointTrigger(featureDatas))
            return false;
        if (featureDatas == null) {
            featureDatas = this.featureDatas;
        }
        var featureData = featureDatas.find(function (x) { return x.hitRule.includes("freespins"); });
        return featureDatas && featureDatas.length > 0 && featureData != null && !featureData.isRetrigger;
    };
    Slot45GameController.prototype.CheckBonusPointTrigger = function (featureDatas) {
        if (featureDatas === void 0) { featureDatas = null; }
        if (featureDatas == null) {
            featureDatas = this.featureDatas;
        }
        var featureData = featureDatas.find(function (x) { return x.hitRule.includes("bonus"); });
        return featureDatas != null && featureDatas.length > 0 && featureData != null;
    };
    Slot45GameController.prototype.CheckFreespinRetrigger = function (featureDatas) {
        if (featureDatas === void 0) { featureDatas = null; }
        if (this.CheckBonusPointTrigger(featureDatas))
            return false;
        if (featureDatas == null) {
            featureDatas = this.featureDatas;
        }
        var featureData = featureDatas.find(function (x) { return x.hitRule.includes("freespins"); });
        return featureDatas != null && featureDatas.length > 0 && featureData != null && featureData.isRetrigger;
    };
    Slot45GameController.prototype.CheckComboWinPresentation = function () {
        return this.comboCount < this.data.comboData.length;
    };
    Slot45GameController.prototype.GetFeatureWinData = function () {
        return this.featureDatas[0] || null;
    };
    Slot45GameController.prototype.GetFreespinTotalWinPoint = function () {
        return this.freespinTotalWinPoint;
    };
    Slot45GameController.prototype.GetTotalWinPoint = function () {
        return this.totalWinPoint;
    };
    Slot45GameController.prototype.GetExpandWildIndices = function () {
        return this.data.expandWildIndices;
    };
    Slot45GameController.prototype.GetComboData = function () {
        var comboData = this.data.comboData[this.comboCount];
        this.processAllWinLinesComboData(comboData);
        return comboData;
    };
    Slot45GameController.prototype.processAllWinLinesComboData = function (inputData) {
        var winLine = inputData.WinLines;
        var allWinResource = this.generateWinAllResource(winLine);
        if (allWinResource.GetWinPoint() > 0) {
            inputData.allWinLine = allWinResource;
        }
        winLine.sort(function (a, b) { return b.winPoint - a.winPoint; });
        inputData.WinLines = winLine;
    };
    Slot45GameController.prototype.processSpinData = function (inputData) {
        var data = Object.assign({}, inputData);
        var winLine = data.WinLines;
        var allWinResource = this.generateWinAllResource(winLine);
        var winScatters = data.WinScatters;
        var winBonus = data.WinBonus;
        if ((this.CheckFreespinContinue(inputData) && this.CheckFreespinRetrigger(data.featureDatas)) || this.CheckBonusFeatureTrigger(inputData)) {
            winLine = [];
            winBonus.forEach(function (lineBonus) { return winLine.push(lineBonus); });
            winScatters.forEach(function (lineScatter) { return winLine.push(lineScatter); });
        }
        else if (this.CheckFreespinContinue()) {
            winLine = [];
        }
        if (allWinResource.GetWinPoint() > 0) {
            // winLine.push(allWinResource);
            data.allWinLine = allWinResource;
        }
        winLine.sort(function (a, b) { return b.winPoint - a.winPoint; });
        data.WinLines = winLine;
        return data;
    };
    Slot45GameController.prototype.generateWinAllResource = function (winLines) {
        var winAllSymbols = [];
        var winPoint = 0;
        var winNumber = [];
        for (var index = 0; index < winLines.length; index++) {
            var winline = winLines[index].GetWinLine();
            winline.forEach(function (item) { winAllSymbols.push(item); });
            winPoint = winPoint + winLines[index].GetWinPoint();
            winLines[index].GetWinNumber().forEach(function (number) { return winNumber.push(number); });
        }
        winAllSymbols = Array.from(new Set(winAllSymbols));
        return new Slot45_present_win_panel_1.Slot45WinLineResult(winAllSymbols, winPoint, winNumber, '', true);
    };
    Slot45GameController.prototype.CheckTurbo = function () {
        return this.isTurbo;
    };
    Slot45GameController.prototype.onEnterFreespins = function () {
        this.isFreespins = true;
    };
    Slot45GameController.prototype.CheckIsFreespin = function () {
        return this.isFreespins;
    };
    Slot45GameController.prototype.GetWinBonus = function () {
        return this.data.WinBonus;
    };
    var Slot45GameController_1;
    Slot45GameController = Slot45GameController_1 = __decorate([
        ccclass
    ], Slot45GameController);
    return Slot45GameController;
}(cc.Component));
exports.default = Slot45GameController;

cc._RF.pop();