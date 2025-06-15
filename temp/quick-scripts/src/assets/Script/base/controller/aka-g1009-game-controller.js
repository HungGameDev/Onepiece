"use strict";
cc._RF.push(module, '67c0duyhspCGa6fCQ6IlHBc', 'aka-g1009-game-controller');
// Script/base/controller/aka-g1009-game-controller.ts

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
var aka_g1009_present_win_panel_1 = require("../../UI/present-win/aka-g1009-present-win-panel");
var aka_g1009_event_manager_1 = require("../events/aka-g1009-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009GameController = /** @class */ (function (_super) {
    __extends(G1009GameController, _super);
    function G1009GameController() {
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
    G1009GameController_1 = G1009GameController;
    G1009GameController.GetInstance = function () {
        if (!G1009GameController_1.instance)
            G1009GameController_1.instance = new G1009GameController_1();
        return G1009GameController_1.instance;
    };
    G1009GameController.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ActiveAuto", this.onActiveAuto.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("StopAuto", this.onStopAuto.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("Turbo", this.onTurbo.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("NextScrollData", this.onNextScrollData.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("featureWinCompleted", this.onfeatureWinCompleted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("featureWinstarted", this.onfeatureWinstarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("BonusWinStarted", this.onBonusWinStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("BonusWinComplete", this.onBonusWinComplete.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("resume", this.onResume.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("resumeBonus", this.onResumeBonus.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("EndRound", this.onEnround.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("StartPresentWinCombo", this.onStartPresentWinCombo.bind(this));
    };
    G1009GameController.prototype.onStartPresentWinCombo = function () {
        this.comboCount++;
    };
    G1009GameController.prototype.onActiveAuto = function () {
        this.isAuto = true;
    };
    G1009GameController.prototype.onStopAuto = function () {
        this.isAuto = false;
    };
    G1009GameController.prototype.onEnround = function () {
        console.warn("onEnround: ", this.comboCount);
        this.comboCount = 0;
    };
    G1009GameController.prototype.IsActiveAuto = function () {
        return this.isAuto;
    };
    G1009GameController.prototype.onLoad = function () {
        if (G1009GameController_1.instance) {
            throw new Error("Error: Instantiation failed: Use GameController.getInstance() instead of new.");
        }
        G1009GameController_1.instance = this;
        this.register();
    };
    G1009GameController.prototype.onResume = function (data) {
        // this.data = data;
        // this.oldata = Object.assign({}, data);
        // this.featureDatas = data.featureDatas;
    };
    G1009GameController.prototype.onResumeBonus = function (data) {
        //this.oldata = Object.assign({}, data);
    };
    G1009GameController.prototype.onBonusWinStarted = function () {
    };
    G1009GameController.prototype.onBonusWinComplete = function () {
        var filterFeatureDatas = this.data.featureDatas.filter(function (x) { return !x.hitRule.includes("bonus"); });
        this.featureDatas = filterFeatureDatas;
        this.data.featureDatas = filterFeatureDatas;
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("featureWinCompleted", { hitRule: "bonus" });
    };
    G1009GameController.prototype.onSpinStarted = function () {
        this.comboCount = 0;
        var requestData = { isFreespin: this.CheckIsFreespin() };
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("SpinRequest", requestData);
    };
    G1009GameController.prototype.onTurbo = function (isTurbo) {
        this.isTurbo = isTurbo;
    };
    G1009GameController.prototype.onNextScrollData = function (data) {
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
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("PickUpdata", this.data.bonusGameDatas);
        }
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("DataRespond", data.Cells);
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("WinDataRespond", this.data);
    };
    G1009GameController.prototype.onfeatureWinCompleted = function () {
        this.onEnround();
    };
    G1009GameController.prototype.onfeatureWinstarted = function () {
        this.isFreespins = false;
        // if (this.oldata == null) { this.oldata = this.data; }
        // cc.tween(this.node).delay(1).call(() => {
        // 	G1009EventManager.GetInstance().notify("SetOldItems", this.oldata);
        // 	this.oldata.featureDatas = [];
        // }).start();
    };
    G1009GameController.prototype.CheckExpandWild = function (data) {
        if (data === void 0) { data = null; }
        if (data == null) {
            data = this.data;
        }
        return data != null && data.isExpandWild;
    };
    G1009GameController.prototype.CheckWinLineData = function (data) {
        if (data === void 0) { data = null; }
        if (data == null) {
            data = this.data;
        }
        return data != null && (data.allWinLine || data.WinScatters.length > 0 || data.WinBonus.length > 0);
    };
    G1009GameController.prototype.CheckBonusFeatureTrigger = function (data) {
        if (data === void 0) { data = null; }
        if (data == null) {
            data = this.data;
        }
        return data != null && data.featureDatas.length > 0;
    };
    G1009GameController.prototype.CheckFreespinEnd = function (data) {
        if (data === void 0) { data = null; }
        if (data == null) {
            data = this.data;
        }
        return data != null && data.isFreespins && data.freespinLeft == 0;
    };
    G1009GameController.prototype.CheckFreespinContinue = function (data) {
        if (data === void 0) { data = null; }
        if (data == null) {
            data = this.data;
        }
        return data != null && data.freespinLeft > 0;
    };
    G1009GameController.prototype.CheckFreespinTrigger = function (featureDatas) {
        if (featureDatas === void 0) { featureDatas = null; }
        if (this.CheckBonusPointTrigger(featureDatas))
            return false;
        if (featureDatas == null) {
            featureDatas = this.featureDatas;
        }
        var featureData = featureDatas.find(function (x) { return x.hitRule.includes("freespins"); });
        return featureDatas && featureDatas.length > 0 && featureData != null && !featureData.isRetrigger;
    };
    G1009GameController.prototype.CheckBonusPointTrigger = function (featureDatas) {
        if (featureDatas === void 0) { featureDatas = null; }
        if (featureDatas == null) {
            featureDatas = this.featureDatas;
        }
        var featureData = featureDatas.find(function (x) { return x.hitRule.includes("bonus"); });
        return featureDatas != null && featureDatas.length > 0 && featureData != null;
    };
    G1009GameController.prototype.CheckFreespinRetrigger = function (featureDatas) {
        if (featureDatas === void 0) { featureDatas = null; }
        if (this.CheckBonusPointTrigger(featureDatas))
            return false;
        if (featureDatas == null) {
            featureDatas = this.featureDatas;
        }
        var featureData = featureDatas.find(function (x) { return x.hitRule.includes("freespins"); });
        return featureDatas != null && featureDatas.length > 0 && featureData != null && featureData.isRetrigger;
    };
    G1009GameController.prototype.CheckComboWinPresentation = function () {
        return this.comboCount < this.data.comboData.length;
    };
    G1009GameController.prototype.GetFeatureWinData = function () {
        return this.featureDatas[0] || null;
    };
    G1009GameController.prototype.GetFreespinTotalWinPoint = function () {
        return this.freespinTotalWinPoint;
    };
    G1009GameController.prototype.GetTotalWinPoint = function () {
        return this.totalWinPoint;
    };
    G1009GameController.prototype.GetExpandWildIndices = function () {
        return this.data.expandWildIndices;
    };
    G1009GameController.prototype.GetComboData = function () {
        var comboData = this.data.comboData[this.comboCount];
        this.processAllWinLinesComboData(comboData);
        return comboData;
    };
    G1009GameController.prototype.processAllWinLinesComboData = function (inputData) {
        var winLine = inputData.WinLines;
        var allWinResource = this.generateWinAllResource(winLine);
        if (allWinResource.GetWinPoint() > 0) {
            inputData.allWinLine = allWinResource;
        }
        winLine.sort(function (a, b) { return b.winPoint - a.winPoint; });
        inputData.WinLines = winLine;
    };
    G1009GameController.prototype.processSpinData = function (inputData) {
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
    G1009GameController.prototype.generateWinAllResource = function (winLines) {
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
        return new aka_g1009_present_win_panel_1.G1009WinLineResult(winAllSymbols, winPoint, winNumber, '', true);
    };
    G1009GameController.prototype.CheckTurbo = function () {
        return this.isTurbo;
    };
    G1009GameController.prototype.onEnterFreespins = function () {
        this.isFreespins = true;
    };
    G1009GameController.prototype.CheckIsFreespin = function () {
        return this.isFreespins;
    };
    G1009GameController.prototype.GetWinBonus = function () {
        return this.data.WinBonus;
    };
    var G1009GameController_1;
    G1009GameController = G1009GameController_1 = __decorate([
        ccclass
    ], G1009GameController);
    return G1009GameController;
}(cc.Component));
exports.default = G1009GameController;

cc._RF.pop();