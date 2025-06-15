
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/controller/aka-g1009-game-controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9jb250cm9sbGVyL2FrYS1nMTAwOS1nYW1lLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0dBQXNGO0FBQ3RGLDZFQUFzRTtBQUVoRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQStRQztRQTVRUSxVQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ2pCLGtCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsWUFBTSxHQUFRLElBQUksQ0FBQztRQUNuQiwyQkFBcUIsR0FBVyxDQUFDLENBQUM7UUFDbEMsMEJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBQ2pDLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7O0lBa1FoQyxDQUFDOzRCQS9Rb0IsbUJBQW1CO0lBZXpCLCtCQUFXLEdBQXpCO1FBQ0MsSUFBSSxDQUFDLHFCQUFtQixDQUFDLFFBQVE7WUFDaEMscUJBQW1CLENBQUMsUUFBUSxHQUFHLElBQUkscUJBQW1CLEVBQUUsQ0FBQztRQUMxRCxPQUFPLHFCQUFtQixDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRU8sc0NBQVEsR0FBaEI7UUFDQywyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckYsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFB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ZXN1bHQgfSBmcm9tIFwiLi4vLi4vVUkvcHJlc2VudC13aW4vYWthLWcxMDA5LXByZXNlbnQtd2luLXBhbmVsXCI7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5R2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRzEwMDlHYW1lQ29udHJvbGxlcjtcblxuXHRwcml2YXRlIGRhdGE6IGFueSA9IG51bGw7XG5cdHByaXZhdGUgZmVhdHVyZURhdGFzOiBhbnlbXSA9IFtdO1xuXHRwcml2YXRlIGlzVHVyYm86IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBvbGRhdGE6IGFueSA9IG51bGw7XG5cdHByaXZhdGUgZnJlZXNwaW5Ub3RhbFdpblBvaW50OiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIGphY2twb3RUb3RhbFdpblBvaW50OiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHRvdGFsV2luUG9pbnQ6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgaXNGcmVlc3BpbnM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBpc0F1dG86IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIGNvbWJvQ291bnQ6IG51bWJlciA9IDA7XG5cblx0cHVibGljIHN0YXRpYyBHZXRJbnN0YW5jZSgpIHtcblx0XHRpZiAoIUcxMDA5R2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UpXG5cdFx0XHRHMTAwOUdhbWVDb250cm9sbGVyLmluc3RhbmNlID0gbmV3IEcxMDA5R2FtZUNvbnRyb2xsZXIoKTtcblx0XHRyZXR1cm4gRzEwMDlHYW1lQ29udHJvbGxlci5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXIoKTogdm9pZCB7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkFjdGl2ZUF1dG9cIiwgdGhpcy5vbkFjdGl2ZUF1dG8uYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlN0b3BBdXRvXCIsIHRoaXMub25TdG9wQXV0by5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiVHVyYm9cIiwgdGhpcy5vblR1cmJvLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTcGluU3RhcnRlZFwiLCB0aGlzLm9uU3BpblN0YXJ0ZWQuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIk5leHRTY3JvbGxEYXRhXCIsIHRoaXMub25OZXh0U2Nyb2xsRGF0YS5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiZmVhdHVyZVdpbkNvbXBsZXRlZFwiLCB0aGlzLm9uZmVhdHVyZVdpbkNvbXBsZXRlZC5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiZmVhdHVyZVdpbnN0YXJ0ZWRcIiwgdGhpcy5vbmZlYXR1cmVXaW5zdGFydGVkLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJCb251c1dpblN0YXJ0ZWRcIiwgdGhpcy5vbkJvbnVzV2luU3RhcnRlZC5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiQm9udXNXaW5Db21wbGV0ZVwiLCB0aGlzLm9uQm9udXNXaW5Db21wbGV0ZS5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwicmVzdW1lXCIsIHRoaXMub25SZXN1bWUuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcInJlc3VtZUJvbnVzXCIsIHRoaXMub25SZXN1bWVCb251cy5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiRW50ZXJGcmVlc3BpbnNcIiwgdGhpcy5vbkVudGVyRnJlZXNwaW5zLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJFbmRSb3VuZFwiLCB0aGlzLm9uRW5yb3VuZC5iaW5kKHRoaXMpKTtcblxuXG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlN0YXJ0UHJlc2VudFdpbkNvbWJvXCIsIHRoaXMub25TdGFydFByZXNlbnRXaW5Db21iby5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHByaXZhdGUgb25TdGFydFByZXNlbnRXaW5Db21ibygpIHtcblx0XHR0aGlzLmNvbWJvQ291bnQrKztcblx0fVxuXG5cdHByaXZhdGUgb25BY3RpdmVBdXRvKCk6IHZvaWQge1xuXHRcdHRoaXMuaXNBdXRvID0gdHJ1ZTtcblx0fVxuXG5cdHByaXZhdGUgb25TdG9wQXV0bygpOiB2b2lkIHtcblx0XHR0aGlzLmlzQXV0byA9IGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSBvbkVucm91bmQoKTogdm9pZCB7XG5cdFx0Y29uc29sZS53YXJuKFwib25FbnJvdW5kOiBcIix0aGlzLmNvbWJvQ291bnQpO1xuXHRcdHRoaXMuY29tYm9Db3VudCA9IDA7XG5cdH1cblxuXHRwdWJsaWMgSXNBY3RpdmVBdXRvKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzQXV0bztcblx0fVxuXG5cdHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG5cdFx0aWYgKEcxMDA5R2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkVycm9yOiBJbnN0YW50aWF0aW9uIGZhaWxlZDogVXNlIEdhbWVDb250cm9sbGVyLmdldEluc3RhbmNlKCkgaW5zdGVhZCBvZiBuZXcuXCIpO1xuXHRcdH1cblx0XHRHMTAwOUdhbWVDb250cm9sbGVyLmluc3RhbmNlID0gdGhpcztcblx0XHR0aGlzLnJlZ2lzdGVyKCk7XG5cdH1cblxuXHRwcml2YXRlIG9uUmVzdW1lKGRhdGE6IGFueSkge1xuXHRcdC8vIHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0Ly8gdGhpcy5vbGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKTtcblx0XHQvLyB0aGlzLmZlYXR1cmVEYXRhcyA9IGRhdGEuZmVhdHVyZURhdGFzO1xuXHR9XG5cblx0cHJpdmF0ZSBvblJlc3VtZUJvbnVzKGRhdGE6IGFueSkge1xuXHRcdC8vdGhpcy5vbGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKTtcblx0fVxuXG5cdHByaXZhdGUgb25Cb251c1dpblN0YXJ0ZWQoKTogdm9pZCB7XG5cdH1cblxuXHRwcml2YXRlIG9uQm9udXNXaW5Db21wbGV0ZSgpOiB2b2lkIHtcblx0XHR2YXIgZmlsdGVyRmVhdHVyZURhdGFzID0gdGhpcy5kYXRhLmZlYXR1cmVEYXRhcy5maWx0ZXIoeCA9PiAheC5oaXRSdWxlLmluY2x1ZGVzKFwiYm9udXNcIikpXG5cdFx0dGhpcy5mZWF0dXJlRGF0YXMgPSBmaWx0ZXJGZWF0dXJlRGF0YXM7XG5cdFx0dGhpcy5kYXRhLmZlYXR1cmVEYXRhcyA9IGZpbHRlckZlYXR1cmVEYXRhcztcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcImZlYXR1cmVXaW5Db21wbGV0ZWRcIiwgeyBoaXRSdWxlOiBcImJvbnVzXCIgfSk7XG5cdH1cblxuXHRwcml2YXRlIG9uU3BpblN0YXJ0ZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5jb21ib0NvdW50ID0gMDtcblx0XHR2YXIgcmVxdWVzdERhdGEgPSB7IGlzRnJlZXNwaW46IHRoaXMuQ2hlY2tJc0ZyZWVzcGluKCkgfVxuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiU3BpblJlcXVlc3RcIiwgcmVxdWVzdERhdGEpO1xuXHR9XG5cblx0cHJpdmF0ZSBvblR1cmJvKGlzVHVyYm86IGJvb2xlYW4pIHtcblx0XHR0aGlzLmlzVHVyYm8gPSBpc1R1cmJvO1xuXHR9XG5cblx0cHJpdmF0ZSBvbk5leHRTY3JvbGxEYXRhKGRhdGE6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuZGF0YSA9IHRoaXMucHJvY2Vzc1NwaW5EYXRhKGRhdGEpO1xuXHRcdGlmIChkYXRhLmZlYXR1cmVEYXRhcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLmZlYXR1cmVEYXRhcyA9IE9iamVjdC5hc3NpZ24oW10sIGRhdGEuZmVhdHVyZURhdGFzKTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJmcmVlc3BpbnRvdGFsV2luUG9pbnRcIikpIHtcblx0XHRcdHRoaXMuZnJlZXNwaW5Ub3RhbFdpblBvaW50ID0gZGF0YS5mcmVlc3BpbnRvdGFsV2luUG9pbnQ7XG5cdFx0fVxuXHRcdGlmIChkYXRhLmhhc093blByb3BlcnR5KFwidG90YWxXaW5Qb2ludFwiKSkge1xuXHRcdFx0dGhpcy50b3RhbFdpblBvaW50ID0gZGF0YS50b3RhbFdpblBvaW50O1xuXHRcdH1cblx0XHRpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImZyZWVzcGludG90YWxXaW5Qb2ludFwiKSkge1xuXHRcdFx0dGhpcy5mcmVlc3BpblRvdGFsV2luUG9pbnQgPSBkYXRhLmZyZWVzcGludG90YWxXaW5Qb2ludDtcblx0XHR9XG5cdFx0aWYgKCEhdGhpcy5kYXRhLmJvbnVzR2FtZURhdGFzKSB7XG5cdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIlBpY2tVcGRhdGFcIiwgdGhpcy5kYXRhLmJvbnVzR2FtZURhdGFzKTtcblx0XHR9XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJEYXRhUmVzcG9uZFwiLCBkYXRhLkNlbGxzKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIldpbkRhdGFSZXNwb25kXCIsIHRoaXMuZGF0YSk7XG5cdH1cblxuXHRwcml2YXRlIG9uZmVhdHVyZVdpbkNvbXBsZXRlZCgpOiB2b2lkIHtcblx0XHR0aGlzLm9uRW5yb3VuZCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbmZlYXR1cmVXaW5zdGFydGVkKCk6IHZvaWQge1xuXHRcdHRoaXMuaXNGcmVlc3BpbnMgPSBmYWxzZTtcblx0XHQvLyBpZiAodGhpcy5vbGRhdGEgPT0gbnVsbCkgeyB0aGlzLm9sZGF0YSA9IHRoaXMuZGF0YTsgfVxuXHRcdC8vIGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XG5cdFx0Ly8gXHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIlNldE9sZEl0ZW1zXCIsIHRoaXMub2xkYXRhKTtcblxuXHRcdC8vIFx0dGhpcy5vbGRhdGEuZmVhdHVyZURhdGFzID0gW107XG5cdFx0Ly8gfSkuc3RhcnQoKTtcblx0fVxuXG5cdHB1YmxpYyBDaGVja0V4cGFuZFdpbGQoZGF0YTogYW55ID0gbnVsbCk6IGJvb2xlYW4ge1xuXHRcdGlmIChkYXRhID09IG51bGwpIHsgZGF0YSA9IHRoaXMuZGF0YTsgfVxuXHRcdHJldHVybiBkYXRhICE9IG51bGwgJiYgZGF0YS5pc0V4cGFuZFdpbGQ7XG5cdH1cblxuXHRwdWJsaWMgQ2hlY2tXaW5MaW5lRGF0YShkYXRhOiBhbnkgPSBudWxsKTogYm9vbGVhbiB7XG5cdFx0aWYgKGRhdGEgPT0gbnVsbCkgeyBkYXRhID0gdGhpcy5kYXRhOyB9XG5cdFx0cmV0dXJuIGRhdGEgIT0gbnVsbCAmJiAoZGF0YS5hbGxXaW5MaW5lIHx8IGRhdGEuV2luU2NhdHRlcnMubGVuZ3RoID4gMCB8fCBkYXRhLldpbkJvbnVzLmxlbmd0aCA+IDApO1xuXHR9XG5cblx0cHVibGljIENoZWNrQm9udXNGZWF0dXJlVHJpZ2dlcihkYXRhOiBhbnkgPSBudWxsKTogYm9vbGVhbiB7XG5cdFx0aWYgKGRhdGEgPT0gbnVsbCkgeyBkYXRhID0gdGhpcy5kYXRhOyB9XG5cdFx0cmV0dXJuIGRhdGEgIT0gbnVsbCAmJiBkYXRhLmZlYXR1cmVEYXRhcy5sZW5ndGggPiAwO1xuXHR9XG5cblx0cHVibGljIENoZWNrRnJlZXNwaW5FbmQoZGF0YTogYW55ID0gbnVsbCk6IGJvb2xlYW4ge1xuXHRcdGlmIChkYXRhID09IG51bGwpIHsgZGF0YSA9IHRoaXMuZGF0YTsgfVxuXHRcdHJldHVybiBkYXRhICE9IG51bGwgJiYgZGF0YS5pc0ZyZWVzcGlucyAmJiBkYXRhLmZyZWVzcGluTGVmdCA9PSAwO1xuXHR9XG5cblx0cHVibGljIENoZWNrRnJlZXNwaW5Db250aW51ZShkYXRhOiBhbnkgPSBudWxsKTogYm9vbGVhbiB7XG5cdFx0aWYgKGRhdGEgPT0gbnVsbCkgeyBkYXRhID0gdGhpcy5kYXRhOyB9XG5cdFx0cmV0dXJuIGRhdGEgIT0gbnVsbCAmJiBkYXRhLmZyZWVzcGluTGVmdCA+IDA7XG5cdH1cblxuXHRwdWJsaWMgQ2hlY2tGcmVlc3BpblRyaWdnZXIoZmVhdHVyZURhdGFzOiBhbnkgPSBudWxsKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuQ2hlY2tCb251c1BvaW50VHJpZ2dlcihmZWF0dXJlRGF0YXMpKVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdGlmIChmZWF0dXJlRGF0YXMgPT0gbnVsbCkgeyBmZWF0dXJlRGF0YXMgPSB0aGlzLmZlYXR1cmVEYXRhczsgfVxuXG5cdFx0dmFyIGZlYXR1cmVEYXRhID0gZmVhdHVyZURhdGFzLmZpbmQoeCA9PiB4LmhpdFJ1bGUuaW5jbHVkZXMoXCJmcmVlc3BpbnNcIikpO1xuXHRcdHJldHVybiBmZWF0dXJlRGF0YXMgJiYgZmVhdHVyZURhdGFzLmxlbmd0aCA+IDAgJiYgZmVhdHVyZURhdGEgIT0gbnVsbCAmJiAhZmVhdHVyZURhdGEuaXNSZXRyaWdnZXI7XG5cdH1cblxuXHRwdWJsaWMgQ2hlY2tCb251c1BvaW50VHJpZ2dlcihmZWF0dXJlRGF0YXM6IGFueSA9IG51bGwpOiBib29sZWFuIHtcblx0XHRpZiAoZmVhdHVyZURhdGFzID09IG51bGwpIHsgZmVhdHVyZURhdGFzID0gdGhpcy5mZWF0dXJlRGF0YXM7IH1cblx0XHR2YXIgZmVhdHVyZURhdGEgPSBmZWF0dXJlRGF0YXMuZmluZCh4ID0+IHguaGl0UnVsZS5pbmNsdWRlcyhcImJvbnVzXCIpKTtcblx0XHRyZXR1cm4gZmVhdHVyZURhdGFzICE9IG51bGwgJiYgZmVhdHVyZURhdGFzLmxlbmd0aCA+IDAgJiYgZmVhdHVyZURhdGEgIT0gbnVsbDtcblx0fVxuXG5cdHB1YmxpYyBDaGVja0ZyZWVzcGluUmV0cmlnZ2VyKGZlYXR1cmVEYXRhczogYW55ID0gbnVsbCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLkNoZWNrQm9udXNQb2ludFRyaWdnZXIoZmVhdHVyZURhdGFzKSlcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRpZiAoZmVhdHVyZURhdGFzID09IG51bGwpIHsgZmVhdHVyZURhdGFzID0gdGhpcy5mZWF0dXJlRGF0YXM7IH1cblx0XHR2YXIgZmVhdHVyZURhdGEgPSBmZWF0dXJlRGF0YXMuZmluZCh4ID0+IHguaGl0UnVsZS5pbmNsdWRlcyhcImZyZWVzcGluc1wiKSk7XG5cdFx0cmV0dXJuIGZlYXR1cmVEYXRhcyAhPSBudWxsICYmIGZlYXR1cmVEYXRhcy5sZW5ndGggPiAwICYmIGZlYXR1cmVEYXRhICE9IG51bGwgJiYgZmVhdHVyZURhdGEuaXNSZXRyaWdnZXI7XG5cdH1cblxuXHRwdWJsaWMgQ2hlY2tDb21ib1dpblByZXNlbnRhdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb21ib0NvdW50IDwgdGhpcy5kYXRhLmNvbWJvRGF0YS5sZW5ndGg7XG5cdH1cblxuXHRwdWJsaWMgR2V0RmVhdHVyZVdpbkRhdGEoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5mZWF0dXJlRGF0YXNbMF0gfHwgbnVsbDtcblx0fVxuXG5cdHB1YmxpYyBHZXRGcmVlc3BpblRvdGFsV2luUG9pbnQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5mcmVlc3BpblRvdGFsV2luUG9pbnQ7XG5cdH1cblxuXHRwdWJsaWMgR2V0VG90YWxXaW5Qb2ludCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnRvdGFsV2luUG9pbnQ7XG5cdH1cblxuXHRwdWJsaWMgR2V0RXhwYW5kV2lsZEluZGljZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhLmV4cGFuZFdpbGRJbmRpY2VzO1xuXHR9XG5cblx0cHVibGljIEdldENvbWJvRGF0YSgpOiBhbnkge1xuXHRcdHZhciBjb21ib0RhdGEgPSB0aGlzLmRhdGEuY29tYm9EYXRhW3RoaXMuY29tYm9Db3VudF07XG5cdFx0dGhpcy5wcm9jZXNzQWxsV2luTGluZXNDb21ib0RhdGEoY29tYm9EYXRhKTtcblx0XHRyZXR1cm4gY29tYm9EYXRhO1xuXHR9XG5cblx0cHJpdmF0ZSBwcm9jZXNzQWxsV2luTGluZXNDb21ib0RhdGEoaW5wdXREYXRhOiBhbnkpOiBhbnkge1xuXHRcdGxldCB3aW5MaW5lID0gaW5wdXREYXRhLldpbkxpbmVzO1xuXHRcdGxldCBhbGxXaW5SZXNvdXJjZSA9IHRoaXMuZ2VuZXJhdGVXaW5BbGxSZXNvdXJjZSh3aW5MaW5lKTtcblx0XHRpZiAoYWxsV2luUmVzb3VyY2UuR2V0V2luUG9pbnQoKSA+IDApIHtcblx0XHRcdGlucHV0RGF0YS5hbGxXaW5MaW5lID0gYWxsV2luUmVzb3VyY2U7XG5cdFx0fVxuXHRcdHdpbkxpbmUuc29ydChmdW5jdGlvbiAoYTogeyB3aW5Qb2ludDogbnVtYmVyOyB9LCBiOiB7IHdpblBvaW50OiBudW1iZXI7IH0pIHsgcmV0dXJuIGIud2luUG9pbnQgLSBhLndpblBvaW50IH0pO1xuXHRcdGlucHV0RGF0YS5XaW5MaW5lcyA9IHdpbkxpbmU7XG5cdH1cblxuXHRwcml2YXRlIHByb2Nlc3NTcGluRGF0YShpbnB1dERhdGE6IGFueSk6IGFueSB7XG5cdFx0bGV0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBpbnB1dERhdGEpO1xuXHRcdGxldCB3aW5MaW5lID0gZGF0YS5XaW5MaW5lcztcblx0XHRsZXQgYWxsV2luUmVzb3VyY2UgPSB0aGlzLmdlbmVyYXRlV2luQWxsUmVzb3VyY2Uod2luTGluZSk7XG5cdFx0bGV0IHdpblNjYXR0ZXJzID0gZGF0YS5XaW5TY2F0dGVycztcblx0XHRsZXQgd2luQm9udXMgPSBkYXRhLldpbkJvbnVzO1xuXHRcdGlmICgodGhpcy5DaGVja0ZyZWVzcGluQ29udGludWUoaW5wdXREYXRhKSAmJiB0aGlzLkNoZWNrRnJlZXNwaW5SZXRyaWdnZXIoZGF0YS5mZWF0dXJlRGF0YXMpKSB8fCB0aGlzLkNoZWNrQm9udXNGZWF0dXJlVHJpZ2dlcihpbnB1dERhdGEpKSB7XG5cdFx0XHR3aW5MaW5lID0gW107XG5cdFx0XHR3aW5Cb251cy5mb3JFYWNoKChsaW5lQm9udXM6IGFueSkgPT4gd2luTGluZS5wdXNoKGxpbmVCb251cykpO1xuXHRcdFx0d2luU2NhdHRlcnMuZm9yRWFjaCgobGluZVNjYXR0ZXI6IGFueSkgPT4gd2luTGluZS5wdXNoKGxpbmVTY2F0dGVyKSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHRoaXMuQ2hlY2tGcmVlc3BpbkNvbnRpbnVlKCkpIHtcblx0XHRcdHdpbkxpbmUgPSBbXTtcblx0XHR9XG5cdFx0aWYgKGFsbFdpblJlc291cmNlLkdldFdpblBvaW50KCkgPiAwKSB7XG5cdFx0XHQvLyB3aW5MaW5lLnB1c2goYWxsV2luUmVzb3VyY2UpO1xuXHRcdFx0ZGF0YS5hbGxXaW5MaW5lID0gYWxsV2luUmVzb3VyY2U7XG5cdFx0fVxuXHRcdHdpbkxpbmUuc29ydChmdW5jdGlvbiAoYTogeyB3aW5Qb2ludDogbnVtYmVyOyB9LCBiOiB7IHdpblBvaW50OiBudW1iZXI7IH0pIHsgcmV0dXJuIGIud2luUG9pbnQgLSBhLndpblBvaW50IH0pO1xuXHRcdGRhdGEuV2luTGluZXMgPSB3aW5MaW5lO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZVdpbkFsbFJlc291cmNlKHdpbkxpbmVzOiBHMTAwOVdpbkxpbmVSZXN1bHRbXSk6IGFueSB7XG5cdFx0bGV0IHdpbkFsbFN5bWJvbHM6IGFueVtdID0gW107XG5cdFx0bGV0IHdpblBvaW50ID0gMDtcblx0XHRsZXQgd2luTnVtYmVyOiBudW1iZXJbXSA9IFtdO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB3aW5MaW5lcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGxldCB3aW5saW5lID0gd2luTGluZXNbaW5kZXhdLkdldFdpbkxpbmUoKTtcblx0XHRcdHdpbmxpbmUuZm9yRWFjaChpdGVtID0+IHsgd2luQWxsU3ltYm9scy5wdXNoKGl0ZW0pIH0pO1xuXHRcdFx0d2luUG9pbnQgPSB3aW5Qb2ludCArIHdpbkxpbmVzW2luZGV4XS5HZXRXaW5Qb2ludCgpO1xuXHRcdFx0d2luTGluZXNbaW5kZXhdLkdldFdpbk51bWJlcigpLmZvckVhY2gobnVtYmVyID0+IHdpbk51bWJlci5wdXNoKG51bWJlcikpO1xuXG5cdFx0fVxuXHRcdHdpbkFsbFN5bWJvbHMgPSBBcnJheS5mcm9tKG5ldyBTZXQod2luQWxsU3ltYm9scykpO1xuXHRcdHJldHVybiBuZXcgRzEwMDlXaW5MaW5lUmVzdWx0KHdpbkFsbFN5bWJvbHMsIHdpblBvaW50LCB3aW5OdW1iZXIsICcnLCB0cnVlKTtcblx0fVxuXG5cdHB1YmxpYyBDaGVja1R1cmJvKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzVHVyYm87XG5cdH1cblxuXHRwcml2YXRlIG9uRW50ZXJGcmVlc3BpbnMoKTogdm9pZCB7XG5cdFx0dGhpcy5pc0ZyZWVzcGlucyA9IHRydWU7XG5cdH1cblxuXHRwdWJsaWMgQ2hlY2tJc0ZyZWVzcGluKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzRnJlZXNwaW5zO1xuXHR9XG5cblx0cHVibGljIEdldFdpbkJvbnVzKCk6RzEwMDlXaW5MaW5lUmVzdWx0e1xuXHRcdHJldHVybiB0aGlzLmRhdGEuV2luQm9udXM7XG5cdH1cbn1cbiJdfQ==