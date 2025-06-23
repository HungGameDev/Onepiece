"use strict";
cc._RF.push(module, 'd6647rtVqBKmIJzvrHS+dKH', 'Slot45-simulator-server');
// Script/base/Slot45-simulator-server.ts

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
var Slot45_present_win_panel_1 = require("../UI/present-win/Slot45-present-win-panel");
var Slot45_balance_model_1 = require("../models/Slot45-balance-model");
var Slot45_bet_model_1 = require("../models/Slot45-bet-model");
var Slot45_event_manager_1 = require("./events/Slot45-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TOTAL_FREESPINS = 5;
var Slot45SimulatorServer = /** @class */ (function (_super) {
    __extends(Slot45SimulatorServer, _super);
    function Slot45SimulatorServer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.result = null;
        _this.isFreespins = false;
        _this.freespinLeft = 0;
        _this.totalFreespins = 0;
        _this.isRetrigger = false;
        _this.totalWinPoint = 0;
        return _this;
    }
    Slot45SimulatorServer.prototype.onLoad = function () {
        this.register();
        this.WinLines = [
            new Slot45_present_win_panel_1.Slot45WinLineResult([0, 1, 2, 3, 4], 25000, [1]),
            new Slot45_present_win_panel_1.Slot45WinLineResult([5, 6, 7, 8, 9], 25000, [0]),
            new Slot45_present_win_panel_1.Slot45WinLineResult([10, 11, 12, 13, 14], 25000, [2])
        ];
        this.winLineAndScatter = [
            new Slot45_present_win_panel_1.Slot45WinLineResult([0, 1, 2, 3, 4], 40000, [1], "A"),
            new Slot45_present_win_panel_1.Slot45WinLineResult([5, 6, 7, 8, 9], 40000, [0], "Q"),
        ];
        this.winScatters = [
            new Slot45_present_win_panel_1.Slot45WinLineResult([10, 12, 14], 0, [-1], "Scatter")
        ];
        this.winBonus = [
            new Slot45_present_win_panel_1.Slot45WinLineResult([1, 2, 3], 0, [-1], "Bonus")
        ];
        this.winlineContent = [[5, 6, 7, 8, 9], [0, 1, 2, 3, 4], [10, 11, 12, 13, 14]];
        //, [0, 6, 12, 8, 4], [10, 6, 3, 8, 14]
        Slot45_bet_model_1.Slot45BetModel.GetInstance().SetBetPerLines([100, 250, 1000, 2500, 10000, 25000, 50000]);
        Slot45_bet_model_1.Slot45BetModel.GetInstance().SetBetMultiplier(20);
        Slot45_balance_model_1.Slot45BalanceModel.GetInstance().SetBalance(1000);
    };
    Slot45SimulatorServer.prototype.start = function () {
        setTimeout(function () {
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("init");
        }, 0.1);
    };
    Slot45SimulatorServer.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SpinRequest", this.onSpinRequest.bind(this));
    };
    Slot45SimulatorServer.prototype.fakeBalanceSpin = function () {
        if (!this.isFreespins) {
            var newBalance = Slot45_balance_model_1.Slot45BalanceModel.GetInstance().GetBalance() - Slot45_bet_model_1.Slot45BetModel.GetInstance().GetTotalBetPoint();
            Slot45_balance_model_1.Slot45BalanceModel.GetInstance().SetBalance(newBalance);
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("BalanceChange");
        }
    };
    Slot45SimulatorServer.prototype.onSpinRequest = function () {
        var _a;
        var isEndround = false;
        var isRetrigger = false;
        var isExpandWild = false;
        var winPoint = 0;
        var featureData = {};
        var featureDatas = [];
        var winBonus = [];
        var jackpotWinPoint = 0;
        var expandWildIndices = 0;
        featureData = {
            hitRule: "freespins",
            totalFreespins: TOTAL_FREESPINS,
            isRetrigger: false,
        };
        this.fakeBalanceSpin();
        var cellsResult = this.generateDemoResult();
        //fake winline
        var WinLines = [];
        var winScatters = [];
        // //fake freespin Win and bonus win
        (_a = this.fakeFreespinWin(featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround), featureData = _a.featureData, cellsResult = _a.cellsResult, WinLines = _a.WinLines, winScatters = _a.winScatters, winBonus = _a.winBonus, isExpandWild = _a.isExpandWild, expandWildIndices = _a.expandWildIndices, isEndround = _a.isEndround);
        // //fake freespin Win short with bigwin
        // ({ featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices,  isEndround } = this.fakeBigWinInShortFreespins(featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround));
        //fake jackpot
        // ({ featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround, jackpotWinPoint } = this.fakeJackpot(featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround, jackpotWinPoint));
        //check bug
        // ({ featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround, jackpotWinPoint } = this.fakebug(featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround, jackpotWinPoint));
        WinLines.forEach(function (winLine) { return winPoint += winLine.GetWinPoint(); });
        this.result = {
            Cells: cellsResult,
            WinLines: WinLines,
            WinScatters: winScatters,
            WinBonus: winBonus,
            featureDatas: featureDatas,
            freespinLeft: this.freespinLeft,
            totalFreespins: this.totalFreespins,
            isFreespins: this.isFreespins,
            isEndround: isEndround,
            isExpandWild: isExpandWild,
            expandWildIndices: expandWildIndices,
            winPoint: winPoint,
            totalWinPoint: this.totalWinPoint,
            jackpotWinPoint: jackpotWinPoint,
        };
        if (this.freespinLeft == 0) {
            this.isFreespins = false;
        }
        this.simulatorServer();
    };
    Slot45SimulatorServer.prototype.fakebug = function (featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround, jackpotWinPoint) {
        cellsResult = [
            "K",
            "Core",
            "Core",
            "Q",
            "Scatter",
            "Wrench",
            "Wrench",
            "Core",
            "Scatter",
            "K",
            "Scatter",
            "A",
            "Core",
            "Q",
            "Helmet"
        ];
        // WinLines = Object.assign([], this.WinLines);
        // WinLines[0].SetWinSymbol(cellsResult[0]);
        // WinLines[1].SetWinSymbol(cellsResult[5]);
        // WinLines[2].SetWinSymbol(cellsResult[10]);
        // isExpandWild = true;
        // expandWildIndices = 12;
        // jackpotWinPoint = 1000000;
        return { featureData: featureData, cellsResult: cellsResult, WinLines: WinLines, winScatters: winScatters, winBonus: winBonus, isExpandWild: isExpandWild, expandWildIndices: expandWildIndices, isEndround: isEndround, jackpotWinPoint: jackpotWinPoint };
    };
    Slot45SimulatorServer.prototype.fakeJackpot = function (featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround, jackpotWinPoint) {
        cellsResult[0] = "Core";
        cellsResult[1] = "Core";
        cellsResult[12] = "Reactor";
        cellsResult[3] = "Core";
        cellsResult[4] = "Core";
        WinLines = Object.assign([], this.WinLines);
        WinLines[0].SetWinSymbol(cellsResult[0]);
        WinLines[1].SetWinSymbol(cellsResult[5]);
        WinLines[2].SetWinSymbol(cellsResult[10]);
        isExpandWild = true;
        expandWildIndices = 12;
        jackpotWinPoint = 1000000;
        return { featureData: featureData, cellsResult: cellsResult, WinLines: WinLines, winScatters: winScatters, winBonus: winBonus, isExpandWild: isExpandWild, expandWildIndices: expandWildIndices, isEndround: isEndround, jackpotWinPoint: jackpotWinPoint };
    };
    Slot45SimulatorServer.prototype.fakeBigWinInShortFreespins = function (featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround) {
        if (!this.isFreespins) {
            this.totalWinPoint = 0;
            this.isFreespins = true;
            featureDatas.push(featureData);
            this.freespinLeft = 2;
            this.totalFreespins = 2;
            cellsResult = ["A", "A", "A", "A", "A", "Q", "Q", "Q", "Q", "Q", "Scatter", "K", "Scatter", "Core", "Scatter"];
            WinLines = this.winLineAndScatter;
            winScatters = this.winScatters;
        }
        else {
            this.freespinLeft--;
            //fake winline
            WinLines = Object.assign([], this.WinLines);
            WinLines[0].SetWinSymbol(cellsResult[0]);
            WinLines[1].SetWinSymbol(cellsResult[5]);
            WinLines[2].SetWinSymbol(cellsResult[10]);
            //fake expand wild
            cellsResult[7] = "Reactor";
            isExpandWild = true;
            if (this.freespinLeft == 0) {
                isEndround = true;
            }
        }
        return { featureData: featureData, cellsResult: cellsResult, WinLines: WinLines, winScatters: winScatters, winBonus: winBonus, isExpandWild: isExpandWild, expandWildIndices: expandWildIndices, isEndround: isEndround };
    };
    Slot45SimulatorServer.prototype.fakeFreespinWin = function (featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround) {
        if (!this.isFreespins) {
            this.totalWinPoint = 0;
            this.isFreespins = true;
            featureDatas.push(featureData);
            this.freespinLeft = TOTAL_FREESPINS;
            this.totalFreespins = TOTAL_FREESPINS;
            cellsResult = ["A", "A", "A", "A", "A", "Q", "Q", "Q", "Q", "Q", "Scatter", "K", "Scatter", "Core", "Scatter"];
            WinLines = this.winLineAndScatter;
            winScatters = this.winScatters;
        }
        else {
            this.freespinLeft--;
            if (this.freespinLeft == TOTAL_FREESPINS - 1) {
                featureData = {
                    hitRule: "bonus",
                    totalFreespins: 0,
                    isRetrigger: false,
                };
                featureDatas.push(featureData);
                cellsResult[1] = "Bonus";
                cellsResult[2] = "Bonus";
                cellsResult[3] = "Bonus";
                winBonus = this.winBonus;
            }
            else {
                //fake winline
                WinLines = Object.assign([], this.WinLines);
                WinLines[0].SetWinSymbol(cellsResult[0]);
                WinLines[1].SetWinSymbol(cellsResult[5]);
                WinLines[2].SetWinSymbol(cellsResult[10]);
                //fake expand wild
                cellsResult[7] = "Reactor";
                isExpandWild = true;
            }
            if (this.freespinLeft == 0) {
                isEndround = true;
            }
        }
        return { featureData: featureData, cellsResult: cellsResult, WinLines: WinLines, winScatters: winScatters, winBonus: winBonus, isExpandWild: isExpandWild, expandWildIndices: expandWildIndices, isEndround: isEndround };
    };
    Slot45SimulatorServer.prototype.generateDemoResult = function () {
        var demoArray = [
            "A", "K", "Q", "J", "Bonus", "Communicator", "Helmet", "Mechanic",
            "Pilot", "Wrench", "Core"
        ];
        var templateResult = [];
        for (var index = 0; index < 15; index++) {
            var randomIndex = Math.floor(Math.random() * (demoArray.length - 1));
            templateResult[index] = demoArray[randomIndex];
        }
        this.WinLines.forEach(function (line) {
            var randomIndex = Math.floor(Math.random() * (demoArray.length - 1));
            line.GetWinLine().forEach(function (winlineContentIndex) {
                templateResult[winlineContentIndex] = demoArray[randomIndex];
            });
        });
        return templateResult;
    };
    Slot45SimulatorServer.prototype.simulatorServer = function () {
        var _this = this;
        var delaytime = Math.floor(Math.random() * 2);
        var sep = cc.sequence(cc.delayTime(delaytime), cc.callFunc(function () {
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("NextScrollData", _this.result);
        }, this));
        this.node.runAction(sep);
    };
    Slot45SimulatorServer = __decorate([
        ccclass
    ], Slot45SimulatorServer);
    return Slot45SimulatorServer;
}(cc.Component));
exports.default = Slot45SimulatorServer;

cc._RF.pop();