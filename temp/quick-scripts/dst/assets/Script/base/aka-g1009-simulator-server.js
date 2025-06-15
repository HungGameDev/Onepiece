
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/aka-g1009-simulator-server.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6647rtVqBKmIJzvrHS+dKH', 'aka-g1009-simulator-server');
// Script/base/aka-g1009-simulator-server.ts

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
var aka_g1009_present_win_panel_1 = require("../UI/present-win/aka-g1009-present-win-panel");
var aka_g1009_balance_model_1 = require("../models/aka-g1009-balance-model");
var aka_g1009_bet_model_1 = require("../models/aka-g1009-bet-model");
var aka_g1009_event_manager_1 = require("./events/aka-g1009-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TOTAL_FREESPINS = 5;
var G1009SimulatorServer = /** @class */ (function (_super) {
    __extends(G1009SimulatorServer, _super);
    function G1009SimulatorServer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.result = null;
        _this.isFreespins = false;
        _this.freespinLeft = 0;
        _this.totalFreespins = 0;
        _this.isRetrigger = false;
        _this.totalWinPoint = 0;
        return _this;
    }
    G1009SimulatorServer.prototype.onLoad = function () {
        this.register();
        this.WinLines = [
            new aka_g1009_present_win_panel_1.G1009WinLineResult([0, 1, 2, 3, 4], 25000, [1]),
            new aka_g1009_present_win_panel_1.G1009WinLineResult([5, 6, 7, 8, 9], 25000, [0]),
            new aka_g1009_present_win_panel_1.G1009WinLineResult([10, 11, 12, 13, 14], 25000, [2])
        ];
        this.winLineAndScatter = [
            new aka_g1009_present_win_panel_1.G1009WinLineResult([0, 1, 2, 3, 4], 40000, [1], "A"),
            new aka_g1009_present_win_panel_1.G1009WinLineResult([5, 6, 7, 8, 9], 40000, [0], "Q"),
        ];
        this.winScatters = [
            new aka_g1009_present_win_panel_1.G1009WinLineResult([10, 12, 14], 0, [-1], "Scatter")
        ];
        this.winBonus = [
            new aka_g1009_present_win_panel_1.G1009WinLineResult([1, 2, 3], 0, [-1], "Bonus")
        ];
        this.winlineContent = [[5, 6, 7, 8, 9], [0, 1, 2, 3, 4], [10, 11, 12, 13, 14]];
        //, [0, 6, 12, 8, 4], [10, 6, 3, 8, 14]
        aka_g1009_bet_model_1.G1009BetModel.GetInstance().SetBetPerLines([100, 250, 1000, 2500, 10000, 25000, 50000]);
        aka_g1009_bet_model_1.G1009BetModel.GetInstance().SetBetMultiplier(20);
        aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().SetBalance(1000);
    };
    G1009SimulatorServer.prototype.start = function () {
        setTimeout(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("init");
        }, 0.1);
    };
    G1009SimulatorServer.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinRequest", this.onSpinRequest.bind(this));
    };
    G1009SimulatorServer.prototype.fakeBalanceSpin = function () {
        if (!this.isFreespins) {
            var newBalance = aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().GetBalance() - aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetTotalBetPoint();
            aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().SetBalance(newBalance);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("BalanceChange");
        }
    };
    G1009SimulatorServer.prototype.onSpinRequest = function () {
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
    G1009SimulatorServer.prototype.fakebug = function (featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround, jackpotWinPoint) {
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
    G1009SimulatorServer.prototype.fakeJackpot = function (featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround, jackpotWinPoint) {
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
    G1009SimulatorServer.prototype.fakeBigWinInShortFreespins = function (featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround) {
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
    G1009SimulatorServer.prototype.fakeFreespinWin = function (featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround) {
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
    G1009SimulatorServer.prototype.generateDemoResult = function () {
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
    G1009SimulatorServer.prototype.simulatorServer = function () {
        var _this = this;
        var delaytime = Math.floor(Math.random() * 2);
        var sep = cc.sequence(cc.delayTime(delaytime), cc.callFunc(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("NextScrollData", _this.result);
        }, this));
        this.node.runAction(sep);
    };
    G1009SimulatorServer = __decorate([
        ccclass
    ], G1009SimulatorServer);
    return G1009SimulatorServer;
}(cc.Component));
exports.default = G1009SimulatorServer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9ha2EtZzEwMDktc2ltdWxhdG9yLXNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RkFBbUY7QUFDbkYsNkVBQXNFO0FBQ3RFLHFFQUE4RDtBQUM5RCw0RUFBcUU7QUFFL0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBRTFCO0lBQWtELHdDQUFZO0lBQTlEO1FBQUEscUVBa1JDO1FBaFJBLFlBQU0sR0FBUSxJQUFJLENBQUM7UUFNWCxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixtQkFBYSxHQUFXLENBQUMsQ0FBQzs7SUFzUW5DLENBQUM7SUFwUVUscUNBQU0sR0FBaEI7UUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNmLElBQUksZ0RBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxnREFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLGdEQUFrQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FB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Q0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQztJQUVPLDhDQUFlLEdBQXZCO1FBQUEsaUJBUUM7UUFQQSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUNwQixFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUNyQixFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ2IsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFqUm1CLG9CQUFvQjtRQUR4QyxPQUFPO09BQ2Esb0JBQW9CLENBa1J4QztJQUFELDJCQUFDO0NBbFJELEFBa1JDLENBbFJpRCxFQUFFLENBQUMsU0FBUyxHQWtSN0Q7a0JBbFJvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHMTAwOVdpbkxpbmVSZXN1bHQgfSBmcm9tIFwiLi4vVUkvcHJlc2VudC13aW4vYWthLWcxMDA5LXByZXNlbnQtd2luLXBhbmVsXCI7XG5pbXBvcnQgeyBHMTAwOUJhbGFuY2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvYWthLWcxMDA5LWJhbGFuY2UtbW9kZWxcIjtcbmltcG9ydCB7IEcxMDA5QmV0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2FrYS1nMTAwOS1iZXQtbW9kZWxcIjtcbmltcG9ydCB7IEcxMDA5RXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4vZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5jb25zdCBUT1RBTF9GUkVFU1BJTlMgPSA1O1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5U2ltdWxhdG9yU2VydmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXHRyZXN1bHQ6IGFueSA9IG51bGw7XG5cdHdpbmxpbmVDb250ZW50OiBudW1iZXJbXVtdO1xuXHRXaW5MaW5lczogRzEwMDlXaW5MaW5lUmVzdWx0W107XG5cdHdpbkxpbmVBbmRTY2F0dGVyOiBHMTAwOVdpbkxpbmVSZXN1bHRbXTtcblx0d2luU2NhdHRlcnM6IEcxMDA5V2luTGluZVJlc3VsdFtdO1xuXHR3aW5Cb251czogRzEwMDlXaW5MaW5lUmVzdWx0W107XG5cdHByaXZhdGUgaXNGcmVlc3BpbnM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBmcmVlc3BpbkxlZnQ6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgdG90YWxGcmVlc3BpbnM6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgaXNSZXRyaWdnZXI6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSB0b3RhbFdpblBvaW50OiBudW1iZXIgPSAwO1xuXG5cdHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG5cdFx0dGhpcy5yZWdpc3RlcigpO1xuXHRcdHRoaXMuV2luTGluZXMgPSBbXG5cdFx0XHRuZXcgRzEwMDlXaW5MaW5lUmVzdWx0KFswLCAxLCAyLCAzLCA0XSwgMjUwMDAsIFsxXSksXG5cdFx0XHRuZXcgRzEwMDlXaW5MaW5lUmVzdWx0KFs1LCA2LCA3LCA4LCA5XSwgMjUwMDAsIFswXSksXG5cdFx0XHRuZXcgRzEwMDlXaW5MaW5lUmVzdWx0KFsxMCwgMTEsIDEyLCAxMywgMTRdLCAyNTAwMCwgWzJdKVxuXHRcdF07XG5cdFx0dGhpcy53aW5MaW5lQW5kU2NhdHRlciA9IFtcblx0XHRcdG5ldyBHMTAwOVdpbkxpbmVSZXN1bHQoWzAsIDEsIDIsIDMsIDRdLCA0MDAwMCwgWzFdLCBcIkFcIiksXG5cdFx0XHRuZXcgRzEwMDlXaW5MaW5lUmVzdWx0KFs1LCA2LCA3LCA4LCA5XSwgNDAwMDAsIFswXSwgXCJRXCIpLFxuXHRcdF07XG5cdFx0dGhpcy53aW5TY2F0dGVycyA9IFtcblx0XHRcdG5ldyBHMTAwOVdpbkxpbmVSZXN1bHQoWzEwLCAxMiwgMTRdLCAwLCBbLTFdLCBcIlNjYXR0ZXJcIilcblx0XHRdO1xuXG5cdFx0dGhpcy53aW5Cb251cyA9IFtcblx0XHRcdG5ldyBHMTAwOVdpbkxpbmVSZXN1bHQoWzEsIDIsIDNdLCAwLCBbLTFdLCBcIkJvbnVzXCIpXG5cdFx0XTtcblxuXHRcdHRoaXMud2lubGluZUNvbnRlbnQgPSBbWzUsIDYsIDcsIDgsIDldLCBbMCwgMSwgMiwgMywgNF0sIFsxMCwgMTEsIDEyLCAxMywgMTRdXTtcblx0XHQvLywgWzAsIDYsIDEyLCA4LCA0XSwgWzEwLCA2LCAzLCA4LCAxNF1cblx0XHRHMTAwOUJldE1vZGVsLkdldEluc3RhbmNlKCkuU2V0QmV0UGVyTGluZXMoWzEwMCwgMjUwLCAxMDAwLCAyNTAwLCAxMDAwMCwgMjUwMDAsNTAwMDBdKTtcblx0XHRHMTAwOUJldE1vZGVsLkdldEluc3RhbmNlKCkuU2V0QmV0TXVsdGlwbGllcigyMCk7XG5cdFx0RzEwMDlCYWxhbmNlTW9kZWwuR2V0SW5zdGFuY2UoKS5TZXRCYWxhbmNlKDEwMDApO1xuXHR9XG5cblx0cHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJpbml0XCIpO1xuXHRcdH0sIDAuMSk7XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVyKCk6IHZvaWQge1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTcGluUmVxdWVzdFwiLCB0aGlzLm9uU3BpblJlcXVlc3QuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRwcml2YXRlIGZha2VCYWxhbmNlU3BpbigpIHtcblx0XHRpZiAoIXRoaXMuaXNGcmVlc3BpbnMpXG5cdFx0e1xuXHRcdFx0bGV0IG5ld0JhbGFuY2UgPSBHMTAwOUJhbGFuY2VNb2RlbC5HZXRJbnN0YW5jZSgpLkdldEJhbGFuY2UoKSAtIEcxMDA5QmV0TW9kZWwuR2V0SW5zdGFuY2UoKS5HZXRUb3RhbEJldFBvaW50KCk7XG5cdFx0XHRHMTAwOUJhbGFuY2VNb2RlbC5HZXRJbnN0YW5jZSgpLlNldEJhbGFuY2UobmV3QmFsYW5jZSk7XG5cdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIkJhbGFuY2VDaGFuZ2VcIik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvblNwaW5SZXF1ZXN0KCk6IHZvaWQge1xuXHRcdGxldCBpc0VuZHJvdW5kID0gZmFsc2U7XG5cdFx0bGV0IGlzUmV0cmlnZ2VyID0gZmFsc2U7XG5cdFx0bGV0IGlzRXhwYW5kV2lsZCA9IGZhbHNlO1xuXHRcdGxldCB3aW5Qb2ludCA9IDA7XG5cdFx0bGV0IGZlYXR1cmVEYXRhID0ge307XG5cdFx0bGV0IGZlYXR1cmVEYXRhcyA9IFtdO1xuXHRcdGxldCB3aW5Cb251cyA9IFtdO1xuXHRcdGxldCBqYWNrcG90V2luUG9pbnQgPSAwO1xuXHRcdGxldCBleHBhbmRXaWxkSW5kaWNlcyA9IDA7XG5cdFx0ZmVhdHVyZURhdGEgPSB7XG5cdFx0XHRoaXRSdWxlOiBcImZyZWVzcGluc1wiLFxuXHRcdFx0dG90YWxGcmVlc3BpbnM6IFRPVEFMX0ZSRUVTUElOUyxcblx0XHRcdGlzUmV0cmlnZ2VyOiBmYWxzZSxcblx0XHR9O1xuXHRcdHRoaXMuZmFrZUJhbGFuY2VTcGluKCk7XG5cdFx0bGV0IGNlbGxzUmVzdWx0ID0gdGhpcy5nZW5lcmF0ZURlbW9SZXN1bHQoKTtcblx0XHQvL2Zha2Ugd2lubGluZVxuXHRcdGxldCBXaW5MaW5lczogRzEwMDlXaW5MaW5lUmVzdWx0W10gPSBbXTtcblx0XHRsZXQgd2luU2NhdHRlcnMgPSBbXTtcblxuXHRcdC8vIC8vZmFrZSBmcmVlc3BpbiBXaW4gYW5kIGJvbnVzIHdpblxuXHRcdCh7IGZlYXR1cmVEYXRhLCBjZWxsc1Jlc3VsdCwgV2luTGluZXMsIHdpblNjYXR0ZXJzLCB3aW5Cb251cywgaXNFeHBhbmRXaWxkLCBleHBhbmRXaWxkSW5kaWNlcywgaXNFbmRyb3VuZCB9ID0gdGhpcy5mYWtlRnJlZXNwaW5XaW4oZmVhdHVyZURhdGFzLCBmZWF0dXJlRGF0YSwgY2VsbHNSZXN1bHQsIFdpbkxpbmVzLCB3aW5TY2F0dGVycywgd2luQm9udXMsIGlzRXhwYW5kV2lsZCwgZXhwYW5kV2lsZEluZGljZXMsIGlzRW5kcm91bmQpKTtcblxuXHRcdC8vIC8vZmFrZSBmcmVlc3BpbiBXaW4gc2hvcnQgd2l0aCBiaWd3aW5cblx0XHQvLyAoeyBmZWF0dXJlRGF0YSwgY2VsbHNSZXN1bHQsIFdpbkxpbmVzLCB3aW5TY2F0dGVycywgd2luQm9udXMsIGlzRXhwYW5kV2lsZCwgZXhwYW5kV2lsZEluZGljZXMsICBpc0VuZHJvdW5kIH0gPSB0aGlzLmZha2VCaWdXaW5JblNob3J0RnJlZXNwaW5zKGZlYXR1cmVEYXRhcywgZmVhdHVyZURhdGEsIGNlbGxzUmVzdWx0LCBXaW5MaW5lcywgd2luU2NhdHRlcnMsIHdpbkJvbnVzLCBpc0V4cGFuZFdpbGQsIGV4cGFuZFdpbGRJbmRpY2VzLCBpc0VuZHJvdW5kKSk7XG5cblx0XHQvL2Zha2UgamFja3BvdFxuXHRcdC8vICh7IGZlYXR1cmVEYXRhLCBjZWxsc1Jlc3VsdCwgV2luTGluZXMsIHdpblNjYXR0ZXJzLCB3aW5Cb251cywgaXNFeHBhbmRXaWxkLCBleHBhbmRXaWxkSW5kaWNlcywgaXNFbmRyb3VuZCwgamFja3BvdFdpblBvaW50IH0gPSB0aGlzLmZha2VKYWNrcG90KGZlYXR1cmVEYXRhcywgZmVhdHVyZURhdGEsIGNlbGxzUmVzdWx0LCBXaW5MaW5lcywgd2luU2NhdHRlcnMsIHdpbkJvbnVzLCBpc0V4cGFuZFdpbGQsIGV4cGFuZFdpbGRJbmRpY2VzLCBpc0VuZHJvdW5kLCBqYWNrcG90V2luUG9pbnQpKTtcblxuXHRcdC8vY2hlY2sgYnVnXG5cdFx0Ly8gKHsgZmVhdHVyZURhdGEsIGNlbGxzUmVzdWx0LCBXaW5MaW5lcywgd2luU2NhdHRlcnMsIHdpbkJvbnVzLCBpc0V4cGFuZFdpbGQsIGV4cGFuZFdpbGRJbmRpY2VzLCBpc0VuZHJvdW5kLCBqYWNrcG90V2luUG9pbnQgfSA9IHRoaXMuZmFrZWJ1ZyhmZWF0dXJlRGF0YXMsIGZlYXR1cmVEYXRhLCBjZWxsc1Jlc3VsdCwgV2luTGluZXMsIHdpblNjYXR0ZXJzLCB3aW5Cb251cywgaXNFeHBhbmRXaWxkLCBleHBhbmRXaWxkSW5kaWNlcywgaXNFbmRyb3VuZCwgamFja3BvdFdpblBvaW50KSk7XG5cblx0XHRXaW5MaW5lcy5mb3JFYWNoKHdpbkxpbmUgPT4gd2luUG9pbnQgKz0gd2luTGluZS5HZXRXaW5Qb2ludCgpKTtcblxuXHRcdHRoaXMucmVzdWx0ID0ge1xuXHRcdFx0Q2VsbHM6IGNlbGxzUmVzdWx0LFxuXHRcdFx0V2luTGluZXM6IFdpbkxpbmVzLFxuXHRcdFx0V2luU2NhdHRlcnM6IHdpblNjYXR0ZXJzLFxuXHRcdFx0V2luQm9udXM6IHdpbkJvbnVzLFxuXHRcdFx0ZmVhdHVyZURhdGFzOiBmZWF0dXJlRGF0YXMsXG5cdFx0XHRmcmVlc3BpbkxlZnQ6IHRoaXMuZnJlZXNwaW5MZWZ0LFxuXHRcdFx0dG90YWxGcmVlc3BpbnM6IHRoaXMudG90YWxGcmVlc3BpbnMsXG5cdFx0XHRpc0ZyZWVzcGluczogdGhpcy5pc0ZyZWVzcGlucyxcblx0XHRcdGlzRW5kcm91bmQ6IGlzRW5kcm91bmQsXG5cdFx0XHRpc0V4cGFuZFdpbGQ6IGlzRXhwYW5kV2lsZCxcblx0XHRcdGV4cGFuZFdpbGRJbmRpY2VzOiBleHBhbmRXaWxkSW5kaWNlcyxcblx0XHRcdHdpblBvaW50OiB3aW5Qb2ludCxcblx0XHRcdHRvdGFsV2luUG9pbnQ6IHRoaXMudG90YWxXaW5Qb2ludCxcblx0XHRcdGphY2twb3RXaW5Qb2ludDogamFja3BvdFdpblBvaW50LFxuXHRcdH1cblx0XHRpZiAodGhpcy5mcmVlc3BpbkxlZnQgPT0gMClcblx0XHR7XG5cdFx0XHR0aGlzLmlzRnJlZXNwaW5zID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5zaW11bGF0b3JTZXJ2ZXIoKTtcblx0fVxuXG5cdHByaXZhdGUgZmFrZWJ1ZyhmZWF0dXJlRGF0YXM6IGFueVtdLCBmZWF0dXJlRGF0YToge30sIGNlbGxzUmVzdWx0OiBzdHJpbmdbXSwgV2luTGluZXM6IEcxMDA5V2luTGluZVJlc3VsdFtdLCB3aW5TY2F0dGVyczogYW55W10sIHdpbkJvbnVzOiBhbnlbXSwgaXNFeHBhbmRXaWxkOiBib29sZWFuLCBleHBhbmRXaWxkSW5kaWNlczogbnVtYmVyLCBpc0VuZHJvdW5kOiBib29sZWFuLCBqYWNrcG90V2luUG9pbnQ6IG51bWJlcikge1xuXHRcdGNlbGxzUmVzdWx0ID0gW1xuXHRcdFx0XCJLXCIsXG5cdFx0XHRcIkNvcmVcIixcblx0XHRcdFwiQ29yZVwiLFxuXHRcdFx0XCJRXCIsXG5cdFx0XHRcIlNjYXR0ZXJcIixcblx0XHRcdFwiV3JlbmNoXCIsXG5cdFx0XHRcIldyZW5jaFwiLFxuXHRcdFx0XCJDb3JlXCIsXG5cdFx0XHRcIlNjYXR0ZXJcIixcblx0XHRcdFwiS1wiLFxuXHRcdFx0XCJTY2F0dGVyXCIsXG5cdFx0XHRcIkFcIixcblx0XHRcdFwiQ29yZVwiLFxuXHRcdFx0XCJRXCIsXG5cdFx0XHRcIkhlbG1ldFwiXG5cdFx0XVxuXHRcdC8vIFdpbkxpbmVzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5XaW5MaW5lcyk7XG5cdFx0Ly8gV2luTGluZXNbMF0uU2V0V2luU3ltYm9sKGNlbGxzUmVzdWx0WzBdKTtcblx0XHQvLyBXaW5MaW5lc1sxXS5TZXRXaW5TeW1ib2woY2VsbHNSZXN1bHRbNV0pO1xuXHRcdC8vIFdpbkxpbmVzWzJdLlNldFdpblN5bWJvbChjZWxsc1Jlc3VsdFsxMF0pO1xuXHRcdC8vIGlzRXhwYW5kV2lsZCA9IHRydWU7XG5cdFx0Ly8gZXhwYW5kV2lsZEluZGljZXMgPSAxMjtcblx0XHQvLyBqYWNrcG90V2luUG9pbnQgPSAxMDAwMDAwO1xuXHRcdHJldHVybiB7IGZlYXR1cmVEYXRhLCBjZWxsc1Jlc3VsdCwgV2luTGluZXMsIHdpblNjYXR0ZXJzLCB3aW5Cb251cywgaXNFeHBhbmRXaWxkLCBleHBhbmRXaWxkSW5kaWNlcywgaXNFbmRyb3VuZCwgamFja3BvdFdpblBvaW50IH07XG5cdH1cblxuXHRwcml2YXRlIGZha2VKYWNrcG90KGZlYXR1cmVEYXRhczogYW55W10sIGZlYXR1cmVEYXRhOiB7fSwgY2VsbHNSZXN1bHQ6IHN0cmluZ1tdLCBXaW5MaW5lczogRzEwMDlXaW5MaW5lUmVzdWx0W10sIHdpblNjYXR0ZXJzOiBhbnlbXSwgd2luQm9udXM6IGFueVtdLCBpc0V4cGFuZFdpbGQ6IGJvb2xlYW4sIGV4cGFuZFdpbGRJbmRpY2VzOiBudW1iZXIsIGlzRW5kcm91bmQ6IGJvb2xlYW4sIGphY2twb3RXaW5Qb2ludDogbnVtYmVyKSB7XG5cdFx0Y2VsbHNSZXN1bHRbMF0gPSBcIkNvcmVcIjtcblx0XHRjZWxsc1Jlc3VsdFsxXSA9IFwiQ29yZVwiO1xuXHRcdGNlbGxzUmVzdWx0WzEyXSA9IFwiUmVhY3RvclwiO1xuXHRcdGNlbGxzUmVzdWx0WzNdID0gXCJDb3JlXCI7XG5cdFx0Y2VsbHNSZXN1bHRbNF0gPSBcIkNvcmVcIjtcblx0XHRXaW5MaW5lcyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuV2luTGluZXMpO1xuXHRcdFdpbkxpbmVzWzBdLlNldFdpblN5bWJvbChjZWxsc1Jlc3VsdFswXSk7XG5cdFx0V2luTGluZXNbMV0uU2V0V2luU3ltYm9sKGNlbGxzUmVzdWx0WzVdKTtcblx0XHRXaW5MaW5lc1syXS5TZXRXaW5TeW1ib2woY2VsbHNSZXN1bHRbMTBdKTtcblx0XHRpc0V4cGFuZFdpbGQgPSB0cnVlO1xuXHRcdGV4cGFuZFdpbGRJbmRpY2VzID0gMTI7XG5cdFx0amFja3BvdFdpblBvaW50ID0gMTAwMDAwMDtcblx0XHRyZXR1cm4geyBmZWF0dXJlRGF0YSwgY2VsbHNSZXN1bHQsIFdpbkxpbmVzLCB3aW5TY2F0dGVycywgd2luQm9udXMsIGlzRXhwYW5kV2lsZCwgZXhwYW5kV2lsZEluZGljZXMsIGlzRW5kcm91bmQsIGphY2twb3RXaW5Qb2ludCB9O1xuXHR9XG5cblx0cHJpdmF0ZSBmYWtlQmlnV2luSW5TaG9ydEZyZWVzcGlucyhmZWF0dXJlRGF0YXM6IGFueVtdLCBmZWF0dXJlRGF0YToge30sIGNlbGxzUmVzdWx0OiBzdHJpbmdbXSwgV2luTGluZXM6IEcxMDA5V2luTGluZVJlc3VsdFtdLCB3aW5TY2F0dGVyczogYW55W10sIHdpbkJvbnVzOiBhbnlbXSwgaXNFeHBhbmRXaWxkOiBib29sZWFuLCBleHBhbmRXaWxkSW5kaWNlczogbnVtYmVyLCBpc0VuZHJvdW5kOiBib29sZWFuKSB7XG5cdFx0aWYgKCF0aGlzLmlzRnJlZXNwaW5zKVxuXHRcdHtcblx0XHRcdHRoaXMudG90YWxXaW5Qb2ludCA9IDA7XG5cdFx0XHR0aGlzLmlzRnJlZXNwaW5zID0gdHJ1ZTtcblx0XHRcdGZlYXR1cmVEYXRhcy5wdXNoKGZlYXR1cmVEYXRhKTtcblx0XHRcdHRoaXMuZnJlZXNwaW5MZWZ0ID0gMjtcblx0XHRcdHRoaXMudG90YWxGcmVlc3BpbnMgPSAyO1xuXHRcdFx0Y2VsbHNSZXN1bHQgPSBbXCJBXCIsIFwiQVwiLCBcIkFcIiwgXCJBXCIsIFwiQVwiLCBcIlFcIiwgXCJRXCIsIFwiUVwiLCBcIlFcIiwgXCJRXCIsIFwiU2NhdHRlclwiLCBcIktcIiwgXCJTY2F0dGVyXCIsIFwiQ29yZVwiLCBcIlNjYXR0ZXJcIl07XG5cdFx0XHRXaW5MaW5lcyA9IHRoaXMud2luTGluZUFuZFNjYXR0ZXI7XG5cdFx0XHR3aW5TY2F0dGVycyA9IHRoaXMud2luU2NhdHRlcnM7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHR0aGlzLmZyZWVzcGluTGVmdC0tO1xuXHRcdFx0Ly9mYWtlIHdpbmxpbmVcblx0XHRcdFdpbkxpbmVzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5XaW5MaW5lcyk7XG5cdFx0XHRXaW5MaW5lc1swXS5TZXRXaW5TeW1ib2woY2VsbHNSZXN1bHRbMF0pO1xuXHRcdFx0V2luTGluZXNbMV0uU2V0V2luU3ltYm9sKGNlbGxzUmVzdWx0WzVdKTtcblx0XHRcdFdpbkxpbmVzWzJdLlNldFdpblN5bWJvbChjZWxsc1Jlc3VsdFsxMF0pO1xuXG5cdFx0XHQvL2Zha2UgZXhwYW5kIHdpbGRcblx0XHRcdGNlbGxzUmVzdWx0WzddID0gXCJSZWFjdG9yXCI7XG5cdFx0XHRpc0V4cGFuZFdpbGQgPSB0cnVlO1xuXG5cdFx0XHRpZiAodGhpcy5mcmVlc3BpbkxlZnQgPT0gMClcblx0XHRcdHtcblx0XHRcdFx0aXNFbmRyb3VuZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7IGZlYXR1cmVEYXRhLCBjZWxsc1Jlc3VsdCwgV2luTGluZXMsIHdpblNjYXR0ZXJzLCB3aW5Cb251cywgaXNFeHBhbmRXaWxkLCBleHBhbmRXaWxkSW5kaWNlcywgaXNFbmRyb3VuZCB9O1xuXHR9XG5cblx0cHJpdmF0ZSBmYWtlRnJlZXNwaW5XaW4oZmVhdHVyZURhdGFzOiBhbnlbXSwgZmVhdHVyZURhdGE6IHt9LCBjZWxsc1Jlc3VsdDogc3RyaW5nW10sIFdpbkxpbmVzOiBHMTAwOVdpbkxpbmVSZXN1bHRbXSwgd2luU2NhdHRlcnM6IGFueVtdLCB3aW5Cb251czogYW55W10sIGlzRXhwYW5kV2lsZDogYm9vbGVhbiwgZXhwYW5kV2lsZEluZGljZXM6IG51bWJlciwgaXNFbmRyb3VuZDogYm9vbGVhbikge1xuXHRcdGlmICghdGhpcy5pc0ZyZWVzcGlucylcblx0XHR7XG5cdFx0XHR0aGlzLnRvdGFsV2luUG9pbnQgPSAwO1xuXHRcdFx0dGhpcy5pc0ZyZWVzcGlucyA9IHRydWU7XG5cdFx0XHRmZWF0dXJlRGF0YXMucHVzaChmZWF0dXJlRGF0YSk7XG5cdFx0XHR0aGlzLmZyZWVzcGluTGVmdCA9IFRPVEFMX0ZSRUVTUElOUztcblx0XHRcdHRoaXMudG90YWxGcmVlc3BpbnMgPSBUT1RBTF9GUkVFU1BJTlM7XG5cdFx0XHRjZWxsc1Jlc3VsdCA9IFtcIkFcIiwgXCJBXCIsIFwiQVwiLCBcIkFcIiwgXCJBXCIsIFwiUVwiLCBcIlFcIiwgXCJRXCIsIFwiUVwiLCBcIlFcIiwgXCJTY2F0dGVyXCIsIFwiS1wiLCBcIlNjYXR0ZXJcIiwgXCJDb3JlXCIsIFwiU2NhdHRlclwiXTtcblx0XHRcdFdpbkxpbmVzID0gdGhpcy53aW5MaW5lQW5kU2NhdHRlcjtcblx0XHRcdHdpblNjYXR0ZXJzID0gdGhpcy53aW5TY2F0dGVycztcblx0XHR9XG5cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0dGhpcy5mcmVlc3BpbkxlZnQtLTtcblx0XHRcdGlmICh0aGlzLmZyZWVzcGluTGVmdCA9PSBUT1RBTF9GUkVFU1BJTlMgLSAxKVxuXHRcdFx0e1xuXHRcdFx0XHRmZWF0dXJlRGF0YSA9IHtcblx0XHRcdFx0XHRoaXRSdWxlOiBcImJvbnVzXCIsXG5cdFx0XHRcdFx0dG90YWxGcmVlc3BpbnM6IDAsXG5cdFx0XHRcdFx0aXNSZXRyaWdnZXI6IGZhbHNlLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRmZWF0dXJlRGF0YXMucHVzaChmZWF0dXJlRGF0YSk7XG5cdFx0XHRcdGNlbGxzUmVzdWx0WzFdID0gXCJCb251c1wiO1xuXHRcdFx0XHRjZWxsc1Jlc3VsdFsyXSA9IFwiQm9udXNcIjtcblx0XHRcdFx0Y2VsbHNSZXN1bHRbM10gPSBcIkJvbnVzXCI7XG5cdFx0XHRcdHdpbkJvbnVzID0gdGhpcy53aW5Cb251cztcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0Ly9mYWtlIHdpbmxpbmVcblx0XHRcdFx0V2luTGluZXMgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLldpbkxpbmVzKTtcblx0XHRcdFx0V2luTGluZXNbMF0uU2V0V2luU3ltYm9sKGNlbGxzUmVzdWx0WzBdKTtcblx0XHRcdFx0V2luTGluZXNbMV0uU2V0V2luU3ltYm9sKGNlbGxzUmVzdWx0WzVdKTtcblx0XHRcdFx0V2luTGluZXNbMl0uU2V0V2luU3ltYm9sKGNlbGxzUmVzdWx0WzEwXSk7XG5cblxuXHRcdFx0XHQvL2Zha2UgZXhwYW5kIHdpbGRcblx0XHRcdFx0Y2VsbHNSZXN1bHRbN10gPSBcIlJlYWN0b3JcIjtcblx0XHRcdFx0aXNFeHBhbmRXaWxkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmZyZWVzcGluTGVmdCA9PSAwKVxuXHRcdFx0e1xuXHRcdFx0XHRpc0VuZHJvdW5kID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHsgZmVhdHVyZURhdGEsIGNlbGxzUmVzdWx0LCBXaW5MaW5lcywgd2luU2NhdHRlcnMsIHdpbkJvbnVzLCBpc0V4cGFuZFdpbGQsIGV4cGFuZFdpbGRJbmRpY2VzLCBpc0VuZHJvdW5kIH07XG5cdH1cblxuXHRwcml2YXRlIGdlbmVyYXRlRGVtb1Jlc3VsdCgpOiBzdHJpbmdbXSB7XG5cdFx0bGV0IGRlbW9BcnJheSA9IFtcblx0XHRcdFwiQVwiLCBcIktcIiwgXCJRXCIsIFwiSlwiLCBcIkJvbnVzXCIsIFwiQ29tbXVuaWNhdG9yXCIsIFwiSGVsbWV0XCIsIFwiTWVjaGFuaWNcIlxuXHRcdFx0LCBcIlBpbG90XCIsIFwiV3JlbmNoXCIsIFwiQ29yZVwiXTtcblxuXHRcdGxldCB0ZW1wbGF0ZVJlc3VsdCA9IFtdO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxNTsgaW5kZXgrKylcblx0XHR7XG5cdFx0XHRsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZGVtb0FycmF5Lmxlbmd0aCAtIDEpKTtcblx0XHRcdHRlbXBsYXRlUmVzdWx0W2luZGV4XSA9IGRlbW9BcnJheVtyYW5kb21JbmRleF07XG5cdFx0fVxuXHRcdHRoaXMuV2luTGluZXMuZm9yRWFjaChsaW5lID0+IHtcblx0XHRcdGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChkZW1vQXJyYXkubGVuZ3RoIC0gMSkpO1xuXHRcdFx0bGluZS5HZXRXaW5MaW5lKCkuZm9yRWFjaCh3aW5saW5lQ29udGVudEluZGV4ID0+IHtcblx0XHRcdFx0dGVtcGxhdGVSZXN1bHRbd2lubGluZUNvbnRlbnRJbmRleF0gPSBkZW1vQXJyYXlbcmFuZG9tSW5kZXhdO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRlbXBsYXRlUmVzdWx0O1xuXHR9XG5cblx0cHJpdmF0ZSBzaW11bGF0b3JTZXJ2ZXIoKSB7XG5cdFx0bGV0IGRlbGF5dGltZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXHRcdGxldCBzZXAgPSBjYy5zZXF1ZW5jZShcblx0XHRcdGNjLmRlbGF5VGltZShkZWxheXRpbWUpXG5cdFx0XHQsIGNjLmNhbGxGdW5jKCgpID0+IHtcblx0XHRcdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJOZXh0U2Nyb2xsRGF0YVwiLCB0aGlzLnJlc3VsdCk7XG5cdFx0XHR9LCB0aGlzKSk7XG5cdFx0dGhpcy5ub2RlLnJ1bkFjdGlvbihzZXApO1xuXHR9XG59Il19