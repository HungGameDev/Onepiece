
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/aka-g1009-connect-server.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b73bCinV1JOJQz4r5I9OTH', 'aka-g1009-connect-server');
// Script/base/aka-g1009-connect-server.ts

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
exports.WIN_LINE_MAPPING = exports.SLOTTY_ITEM = void 0;
var aka_1009_GameManager_1 = require("../GameManager/aka_1009-GameManager");
var aka_g1009_present_win_panel_1 = require("../UI/present-win/aka-g1009-present-win-panel");
var aka_g1009_game_config_1 = require("../aka-g1009-game-config");
var combo_data_1 = require("../avenger-game/model/combo-data");
var aka_g1009_balance_model_1 = require("../models/aka-g1009-balance-model");
var aka_g1009_bet_model_1 = require("../models/aka-g1009-bet-model");
var aka_g1009_event_manager_1 = require("./events/aka-g1009-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.SLOTTY_ITEM = {
    'Bonus': 'Bonus',
    'Scatter': 'Scatter',
    'Wild': 'Wild',
    'Ace': 'Ace',
    'King': 'King',
    'Queen': 'Queen',
    'Jack': 'Jack',
};
exports.WIN_LINE_MAPPING = [
    [5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [5, 6, 2, 8, 9],
    [5, 6, 12, 8, 9],
    [0, 1, 7, 13, 14],
    [10, 11, 7, 3, 4],
    [0, 11, 2, 13, 4],
    [10, 1, 12, 3, 14],
    [5, 1, 12, 3, 9],
    [10, 6, 2, 8, 14],
    [1, 6, 12, 8, 4],
    [5, 11, 7, 3, 9],
    [5, 1, 7, 13, 9],
    [10, 6, 7, 8, 14],
    [0, 6, 7, 8, 4],
    [5, 11, 12, 13, 9],
    [5, 1, 2, 3, 9],
    [10, 11, 7, 3, 4],
    [0, 1, 7, 13, 14]
];
var ConnectServer = /** @class */ (function (_super) {
    __extends(ConnectServer, _super);
    function ConnectServer() {
        var _this = _super.call(this) || this;
        _this.isFreespins = false;
        _this.totalFreespins = 0;
        _this.gameManager1009 = aka_1009_GameManager_1.GameManager1009.getInstance();
        return _this;
    }
    ConnectServer.prototype.onLoad = function () {
        this.register();
    };
    ConnectServer.prototype.start = function () {
        var _this = this;
        //hard set bet multipliser = 9
        aka_g1009_bet_model_1.G1009BetModel.GetInstance().SetBetMultiplier(exports.WIN_LINE_MAPPING.length);
        this.gameManager1009.startGame();
        // this.gameManager1009.getJPHistory(0, 8).then((data) => {
        // 	console.log('getJPHistory', data);
        // })
        // this.gameManager1009.getBetHistory(0, 8).then((data) => {
        // 	console.log('getBetHistory', data);
        // })
        if (this.dataJackpot) {
            setTimeout(function () {
                aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('JackpotUpdate', _this.dataJackpot);
            }, 100);
        }
    };
    ConnectServer.prototype.register = function () {
        var _this = this;
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.START_GAME_SUCCESS, function (data) {
            console.log('START_GAME_SUCCESS', data);
            _this.currentSession = data.playerState;
            _this.betInfos = data.betInfos;
            var betPerLines = data.betInfos.map(function (betInfo) { return betInfo.betDenom; });
            aka_g1009_bet_model_1.G1009BetModel.GetInstance().SetBetPerLines(betPerLines);
            aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().SetBalance(_this.gameManager1009.getPlayerMoney());
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("BetInfos", _this.betInfos);
            if (data.hasOwnProperty("playerState") && data.playerState) {
                // G1009BetModel.GetInstance().SetCurrentBetPerLine(data.playerState.datas[0].content.bet);
                aka_g1009_bet_model_1.G1009BetModel.GetInstance().SetCurrentBetPerLine(100);
            }
            if (data.hasOwnProperty("allJackpotInfos")) {
                _this.dataJackpot = data.allJackpotInfos;
            }
            if (_this.currentSession && _this.currentSession.hasOwnProperty("freeGameRemain") && _this.currentSession.freeGameRemain > 0) {
                _this.isFreespins = true;
                setTimeout(function () {
                    var resuilt = _this.processNormalData();
                    resuilt.featureDatas.push({
                        hitRule: "freespins",
                        totalFreespins: _this.currentSession.freeGameRemain,
                        isRetrigger: false,
                    });
                    aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("resume", resuilt);
                }, 100);
            }
            else {
                if (_this.currentSession && _this.currentSession.hasOwnProperty("bonusGameRemain") && _this.currentSession.bonusGameRemain > 0) {
                    setTimeout(function () {
                        var resuilt = _this.processNormalData();
                        resuilt.featureDatas = [];
                        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("resumeBonus", resuilt);
                    }, 100);
                }
                else {
                    aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("init");
                }
            }
        });
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.NORMAL_GAME_RESULT, function (data) {
            console.log('NORMAL_GAME_RESULT', data);
            _this.currentSession = data;
            _this.nextScrollData();
        });
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.FREE_GAME_RESULT, function (data) {
            console.log('FREE_GAME_RESULT', data);
            _this.currentSession = data;
            _this.nextScrollData();
        });
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.BONUS_GAME_RESULT, function (data) {
            console.log('BONUS_GAME_RESULT', data);
            _this.currentSession = data;
            _this.nextScrollData();
        });
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.PLAYER_MONEY_UPDATE, function (data) {
            console.log('PLAYER_MONEY_UPDATE', data);
            // G1009BalanceModel.GetInstance().SetBalance(data);
            // G1009EventManager.GetInstance().notify("BalanceChange", data);
        });
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.JACKPOT_UPDATE, function (data) {
            console.log('JACKPOT_UPDATE', data);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('JackpotUpdate', data);
        });
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.JACKPOT_SHOW_MULTIPLE, function (data) {
            console.log('JACKPOT_SHOW_MULTIPLE', data);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('JackpotShowMultiple', data);
        });
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.JACKPOT_HIDE_MULTIPLE, function (data) {
            console.log('JACKPOT_SHOW_MULTIPLE', data);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('JackpotHideMultiple');
        });
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.POPUP_INFO_MESSAGE, function (data) {
            console.log('POPUP_INFO_MESSAGE', data);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('PopupInfoMessage', data);
        });
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinRequest", this.onSpinRequest.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("PickUpRequest", this.onPickUpRequest.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("EndRound", this.onEndRound.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ShowBetPanel", this.onEndRound.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("UpdateBetLine", this.onUpdateBetLine.bind(this));
    };
    ConnectServer.prototype.onUpdateBetLine = function (betLines) {
        aka_g1009_bet_model_1.G1009BetModel.GetInstance().SetBetMultiplier(betLines.length);
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ShowBetPanel");
    };
    ConnectServer.prototype.onPickUpRequest = function (item) {
        this.gameManager1009.bonusPlay(item);
    };
    ConnectServer.prototype.onSpinRequest = function (requestData) {
        if (requestData.isFreespin) {
            this.gameManager1009.freeSpin();
        }
        else {
            var betDenom_1 = aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetCurrentBetPerLine();
            var betInfo = this.betInfos.filter(function (betInfo) { return betInfo.betDenom == betDenom_1; })[0];
            this.gameManager1009.normalSpin(betInfo.betId);
        }
    };
    ConnectServer.prototype.processNormalData = function () {
        var _this = this;
        this.fakeBalanceSpin();
        var isEndround = false;
        var isRetrigger = false;
        var isExpandWild = false;
        var winPoint = 0;
        var featureData = {};
        featureData = {
            hitRule: "freespins",
            totalFreespins: this.currentSession.freeGameTotal,
            isRetrigger: false,
        };
        var featureDatas = [];
        var winBonus = [];
        var cellsResult = [];
        var WinLines = [];
        var winScatters = [];
        var freespintotalWinPoint = 0;
        var jackpotWinPoint = 0;
        var jackpotWinLine = null;
        var totalWinPoint = 0;
        var freespinLeft = 0;
        var bonusGameDatas = null;
        var comboData = [];
        var countCombo = 0;
        this.currentSession.datas.forEach(function (element) {
            switch (element.data) {
                case "playedSpin":
                    if (countCombo == 0) {
                        cellsResult = _this.createCellsResult(element.content);
                    }
                    else {
                        comboData[countCombo - 1].SetCells(_this.createCellsResult(element.content));
                    }
                    break;
                case "winLine":
                    var content = element.content;
                    var arrNumber = [];
                    arrNumber.push(content.hitSetID);
                    var winLineData = new aka_g1009_present_win_panel_1.G1009WinLineResult(content.hitSet, content.pay, arrNumber, content.what);
                    if (countCombo == 0) {
                        WinLines.push(winLineData);
                        winPoint += winLineData.GetWinPoint();
                    }
                    else {
                        comboData[countCombo - 1].GetWinLines().push(winLineData);
                        comboData[countCombo - 1].AddWinPoint(winLineData.GetWinPoint());
                    }
                    break;
                case "explodedCells":
                    countCombo++;
                    comboData.push(new combo_data_1.ComboData(element.content));
                    break;
                case "spinTrigger":
                    if (element.content.bonus == "freespins") {
                        featureDatas.push({
                            hitRule: "freespins",
                            totalFreespins: element.content.spins,
                            isRetrigger: _this.isFreespins,
                        });
                        _this.isFreespins = true;
                        freespinLeft = element.content.spins || 0;
                        // var scatters = [];
                        // let cells = countCombo > 0 ? comboData[countCombo - 1].GetCells() : cellsResult;
                        // for (let index = 0; index < cells.length; index++) {
                        // 	let cell = cells[index];
                        // 	if (cell == "Scatter") {
                        // 		scatters.push(index);
                        // 	}
                        // }
                        winScatters.push(new aka_g1009_present_win_panel_1.G1009WinLineResult(element.content.trigger.hitSet, 0, [-1], "Scatter", false, true));
                    }
                    break;
                case "spinTriggerBonus":
                    featureDatas.push({
                        hitRule: "bonus",
                        totalFreespins: 0,
                        isRetrigger: false,
                    });
                    // let bonus = [];
                    // let cells = countCombo > 0 ? comboData[countCombo - 1].GetCells() : cellsResult;
                    // for (let index = 0; index < cells.length; index++) {
                    // 	let cell = cells[index];
                    // 	if (cell == "Bonus") {
                    // 		bonus.push(index);
                    // 	}
                    // }
                    winBonus.push(new aka_g1009_present_win_panel_1.G1009WinLineResult(element.content.trigger.hitSet, element.content.pay, [-1], "Bonus", false, true));
                    break;
                case "jackpotWin":
                    var content = element.content;
                    var arrNumber = [];
                    arrNumber.push(content.hitSetID);
                    var winLineData = new aka_g1009_present_win_panel_1.G1009WinLineResult(content.hitSet, content.pay, arrNumber, content.what);
                    if (countCombo == 0) {
                        WinLines.push(winLineData);
                        winPoint += winLineData.GetWinPoint();
                    }
                    else {
                        comboData[countCombo - 1].GetWinLines().push(winLineData);
                        comboData[countCombo - 1].AddWinPoint(winLineData.GetWinPoint());
                    }
                    jackpotWinPoint = content.pay;
                    jackpotWinLine = winLineData;
                    break;
                case "gameEnd":
                    isEndround = true;
                    totalWinPoint = element.content.win || 0;
                    break;
                default:
                    break;
            }
        });
        return {
            Cells: cellsResult,
            WinLines: WinLines,
            allWinLine: null,
            ScatterSpin: [],
            WinScatters: winScatters,
            WinBonus: winBonus,
            featureDatas: featureDatas,
            freespinLeft: freespinLeft,
            totalFreespins: this.totalFreespins,
            isFreespins: this.isFreespins,
            isEndround: isEndround,
            winPoint: winPoint,
            totalWinPoint: totalWinPoint,
            freespintotalWinPoint: freespintotalWinPoint,
            jackpotWinPoint: jackpotWinPoint,
            jackpotWinLine: jackpotWinLine,
            bonusGameDatas: bonusGameDatas,
            comboData: comboData
        };
    };
    ConnectServer.prototype.processNormalData1 = function () {
        this.fakeBalanceSpin();
        if (this.currentSession.hasOwnProperty("freeGameMatrix")) {
            this.currentSession.normalGameMatrix = this.currentSession.freeGameMatrix;
        }
        if (this.currentSession.hasOwnProperty("freeGamePaylines")) {
            this.currentSession.normalPayLines = this.currentSession.freeGamePaylines;
        }
        if (this.currentSession.data.hasOwnProperty("freeMatrixOrigin")) {
            this.currentSession.data.normalMatrixOrigin = this.currentSession.data.freeMatrixOrigin;
        }
        var isEndround = false;
        var isRetrigger = false;
        var isExpandWild = false;
        var winPoint = 0;
        var featureData = {};
        var featureDatas = [];
        var winBonus = [];
        var expandWildIndices = [];
        var cellsResult = [];
        var WinLines = [];
        var winScatters = [];
        var freespintotalWinPoint = 0;
        var jackpotWinPoint = 0;
        var jackpotWinLine = [];
        var totalWinPoint = 0;
        var freespinLeft = 0;
        var bonusGameDatas = null;
        featureData = {
            hitRule: "freespins",
            totalFreespins: this.currentSession.freeGameTotal,
            isRetrigger: false,
        };
        //parse items
        // let items = []
        // this.currentSession.normalGameMatrix.forEach(item => items.push(SLOTTY_ITEM[item]));
        // console.warn('itemsitems: ', items);
        // let count = 0;
        // for (let reelIndex = 0; reelIndex < reelCount; reelIndex++) {
        // 	for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        // 		let cellIndex = SlottyParameter.GetCellIndex(reelIndex, rowIndex);
        // 		cellsResult[cellIndex] = items[count++];
        // 	}
        // }
        cellsResult = this.createCellsResult(this.currentSession.normalGameMatrix);
        // get winScatter
        //parse winline
        if (this.currentSession.hasOwnProperty("normalPayLines")) {
            this.currentSession.normalPayLines.forEach(function (normalPayLine) {
                WinLines.push(new aka_g1009_present_win_panel_1.G1009WinLineResult(exports.WIN_LINE_MAPPING[normalPayLine.pwl - 1].slice(0, normalPayLine.pwrc), normalPayLine.pwa, [normalPayLine.pwl - 1], exports.SLOTTY_ITEM[normalPayLine.psc], false, aka_g1009_game_config_1.NEAR_WIN_SYMBOL.includes((exports.SLOTTY_ITEM[normalPayLine.psc]))));
            });
        }
        WinLines.forEach(function (winLine) { return winPoint += winLine.GetWinPoint(); });
        isRetrigger = this.isFreespins;
        //parse freespins
        if (this.currentSession.hasOwnProperty("freeGameTotal") && this.currentSession.hasOwnProperty("freeGameRemain") && this.currentSession.freeGameTotal == this.currentSession.freeGameRemain) {
            this.isFreespins = true;
            featureDatas.push({
                hitRule: "freespins",
                totalFreespins: this.currentSession.freeGameTotal,
                isRetrigger: false,
            });
            if (this.currentSession.state == 1) {
                var scatters = [];
                for (var index = 0; index < cellsResult.length; index++) {
                    var cell = cellsResult[index];
                    if (cell == "Scatter") {
                        scatters.push(index);
                    }
                }
                winScatters.push(new aka_g1009_present_win_panel_1.G1009WinLineResult(scatters, 0, [-1], "Scatter", false, true));
            }
        }
        freespinLeft = this.currentSession.freeGameRemain || 0;
        //parse bonus
        if (this.currentSession.hasOwnProperty("bonusGameRemain") && this.currentSession.bonusGameRemain > 0) {
            featureDatas.push({
                hitRule: "bonus",
                totalFreespins: 0,
                isRetrigger: false,
            });
            if (this.currentSession.bonusGameTotal == this.currentSession.bonusGameRemain) {
                var bonus = [];
                for (var index = 0; index < cellsResult.length; index++) {
                    var cell = cellsResult[index];
                    if (cell == "Bonus") {
                        bonus.push(index);
                    }
                }
                winBonus.push(new aka_g1009_present_win_panel_1.G1009WinLineResult(bonus, 0, [-1], "Bonus", false, true));
            }
        }
        if (this.currentSession.hasOwnProperty("bonusMatrix")) {
            var bonusTotalMultiple = 0;
            var bonusCurrentMultiple = 0;
            var currentIndex = this.currentSession.bonusMatrix.length;
            for (var index = 0; index < this.currentSession.bonusMatrix.length; index++) {
                var resuilt = this.currentSession.bonusMatrix[index];
                var pickupDatas = resuilt.split(";");
                bonusTotalMultiple += Number(pickupDatas[0]);
                if (currentIndex > index) {
                    bonusCurrentMultiple += Number(pickupDatas[0]);
                }
            }
            bonusGameDatas = {
                bonusTotalWinPoint: this.currentSession.bonusGameWinAmount || 0,
                bonusMultiple: Number(this.currentSession.data.lastOpenSymbolBonus) || 0,
                bonusTotalMultiple: bonusTotalMultiple,
                bonusCurrentStateIndex: currentIndex,
                bonusCurrentMultiple: bonusCurrentMultiple
            };
        }
        //expanding wild
        //parse jackpot
        if (this.currentSession.hasOwnProperty("jackpotPayLine") && this.currentSession.jackpotPayLine.length > 0) {
            var jackpotTotalWin = 0;
            // this.currentSession.jackpotPayLine.forEach(result => {
            var jackpotLine = this.currentSession.jackpotPayLine[0].split(";");
            jackpotTotalWin += Number(jackpotLine[1]);
            var winLineNumber = jackpotLine[2] - 1;
            var coreWinLine_1 = [];
            var hitSet = exports.WIN_LINE_MAPPING[winLineNumber];
            hitSet.forEach(function (index) {
                var cell = cellsResult[index];
                if (cell == "Core") {
                    coreWinLine_1.push(index);
                }
            });
            jackpotWinLine.push(new aka_g1009_present_win_panel_1.G1009WinLineResult(coreWinLine_1, 0, [winLineNumber], "Core", false, true));
            // });
            jackpotWinPoint = jackpotTotalWin;
        }
        if (this.currentSession.hasOwnProperty("data")) {
            if (this.currentSession.data.hasOwnProperty("normalMatrixOrigin") || this.currentSession.data.hasOwnProperty("freeMatrixOrigin")) {
                //convert  matrix origin to cellresult
                var items_1 = [];
                var newCellsResult = [];
                this.currentSession.data.normalMatrixOrigin.forEach(function (item) { return items_1.push(exports.SLOTTY_ITEM[item]); });
                var count = 0;
                for (var reelIndex = 0; reelIndex < aka_g1009_game_config_1.reelCount; reelIndex++) {
                    for (var rowIndex = 0; rowIndex < aka_g1009_game_config_1.rowCount; rowIndex++) {
                        var cellIndex = aka_g1009_game_config_1.SlottyParameter.GetCellIndex(reelIndex, rowIndex);
                        newCellsResult[cellIndex] = items_1[count++];
                    }
                }
                for (var reelIndex = 0; reelIndex < aka_g1009_game_config_1.reelCount; reelIndex++) {
                    var count_1 = 0;
                    for (var rowIndex = 0; rowIndex < aka_g1009_game_config_1.rowCount; rowIndex++) {
                        var cellIndex = aka_g1009_game_config_1.SlottyParameter.GetCellIndex(reelIndex, rowIndex);
                        if (cellsResult[cellIndex] == "Core") {
                            count_1++;
                            if (count_1 == 3) {
                                isExpandWild = true;
                                var indices = [];
                                for (var newRowIndex = 0; newRowIndex < aka_g1009_game_config_1.rowCount; newRowIndex++) {
                                    var newCellIndex = aka_g1009_game_config_1.SlottyParameter.GetCellIndex(reelIndex, newRowIndex);
                                    if (newCellsResult[newCellIndex] == "Core") {
                                        newCellsResult[newCellIndex] = "Reactor";
                                        indices.push(newCellIndex);
                                    }
                                }
                                if (indices.length > 2) {
                                    expandWildIndices.push(indices[1]);
                                }
                                else {
                                    expandWildIndices.push(indices[0]);
                                }
                            }
                        }
                    }
                }
                cellsResult = Object.assign([], newCellsResult);
            }
        }
        if (this.currentSession.hasOwnProperty("isFinish") && freespinLeft == 0) {
            isEndround = true;
        }
        freespintotalWinPoint = this.currentSession.freeWinAmount || 0;
        totalWinPoint = this.currentSession.totalWinAmount || 0;
        //parse combo win
        var comboData = [];
        if (this.currentSession.hasOwnProperty("comboData")) {
            comboData = this.getComboData(this.currentSession.comboData);
        }
        return {
            Cells: cellsResult,
            WinLines: WinLines,
            allWinLine: null,
            WinScatters: winScatters,
            WinBonus: winBonus,
            featureDatas: featureDatas,
            freespinLeft: freespinLeft,
            totalFreespins: this.totalFreespins,
            isFreespins: this.isFreespins,
            isEndround: isEndround,
            isExpandWild: isExpandWild,
            expandWildIndices: expandWildIndices,
            winPoint: winPoint,
            totalWinPoint: totalWinPoint,
            freespintotalWinPoint: freespintotalWinPoint,
            jackpotWinPoint: jackpotWinPoint,
            jackpotWinLine: jackpotWinLine,
            bonusGameDatas: bonusGameDatas,
            comboData: comboData
        };
    };
    ConnectServer.prototype.getComboData = function (rawcomboData) {
        var _this = this;
        var comboData = [];
        rawcomboData.forEach(function (rawData) {
            var data = {
                explodedCells: [],
                Cells: [],
                WinLines: [],
                allWinLine: null,
                winPoint: 0
            };
            data.explodedCells = rawData.explodedCells;
            data.Cells = _this.createCellsResult(rawData.normalGameMatrix);
            if (_this.currentSession.hasOwnProperty("normalPayLines")) {
                _this.currentSession.normalPayLines.forEach(function (normalPayLine) {
                    data.WinLines.push(new aka_g1009_present_win_panel_1.G1009WinLineResult(exports.WIN_LINE_MAPPING[normalPayLine.pwl - 1].slice(0, normalPayLine.pwrc), normalPayLine.pwa, [normalPayLine.pwl - 1], exports.SLOTTY_ITEM[normalPayLine.psc], false, aka_g1009_game_config_1.NEAR_WIN_SYMBOL.includes((exports.SLOTTY_ITEM[normalPayLine.psc]))));
                });
            }
            data.WinLines.forEach(function (winLine) { return data.winPoint += winLine.GetWinPoint(); });
            comboData.push(data);
        });
        return comboData;
    };
    ConnectServer.prototype.createCellsResult = function (arrItem) {
        var cellsResult = [];
        for (var rowIndex = 0; rowIndex < aka_g1009_game_config_1.rowCount; rowIndex++) {
            for (var reelIndex = 0; reelIndex < aka_g1009_game_config_1.reelCount; reelIndex++) {
                var item = arrItem[reelIndex][rowIndex];
                var cellIndex = aka_g1009_game_config_1.SlottyParameter.GetCellIndex(reelIndex, rowIndex);
                cellsResult.push(exports.SLOTTY_ITEM[item]);
            }
        }
        return cellsResult;
    };
    ConnectServer.prototype.nextScrollData = function () {
        var _this = this;
        var result = this.processNormalData();
        setTimeout(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("NextScrollData", result);
            if (result.freespinLeft == 0) {
                _this.isFreespins = false;
            }
        }, 100);
    };
    ConnectServer.prototype.fakeBalanceSpin = function () {
        if (!this.isFreespins) {
            var newBalance = aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().GetBalance() - aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetTotalBetPoint();
            aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().SetBalance(newBalance);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("BalanceChange", newBalance);
        }
    };
    ConnectServer.prototype.onEndRound = function () {
        var newBalance = this.gameManager1009.getPlayerMoney();
        aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().SetBalance(newBalance);
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("BalanceChange", newBalance);
    };
    ConnectServer = __decorate([
        ccclass
    ], ConnectServer);
    return ConnectServer;
}(cc.Component));
exports.default = ConnectServer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9ha2EtZzEwMDktY29ubmVjdC1zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUE0SztBQUM1Syw2RkFBbUY7QUFDbkYsa0VBQWlHO0FBQ2pHLCtEQUE2RDtBQUM3RCw2RUFBc0U7QUFDdEUscUVBQThEO0FBQzlELDRFQUFxRTtBQUUvRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUUvQixRQUFBLFdBQVcsR0FBRztJQUMxQixPQUFPLEVBQUUsT0FBTztJQUNoQixTQUFTLEVBQUUsU0FBUztJQUNwQixNQUFNLEVBQUUsTUFBTTtJQUNkLEtBQUssRUFBRSxLQUFLO0lBQ1osTUFBTSxFQUFFLE1BQU07SUFDZCxPQUFPLEVBQUUsT0FBTztJQUNoQixNQUFNLEVBQUUsTUFBTTtDQUNkLENBQUE7QUFFWSxRQUFBLGdCQUFnQixHQUFHO0lBQy9CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNmLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNwQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2pCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxF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LENBQUM7SUFwa0JtQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBcWtCakM7SUFBRCxvQkFBQztDQXJrQkQsQUFxa0JDLENBcmtCMEMsRUFBRSxDQUFDLFNBQVMsR0Fxa0J0RDtrQkFya0JvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0FNRV9NQU5BR0VSX0VWRU5ULCBHYW1lTWFuYWdlcjEwMDksIEphY2twb3RJbmZvLCBKYWNrcG90TWVzc2FnZSwgUGxheWVyRGF0YTEwMDksIFBvcHVwSW5mb01lc3NhZ2UsIFN0YXJ0R2FtZURhdGExMDA5IH0gZnJvbSBcIi4uL0dhbWVNYW5hZ2VyL2FrYV8xMDA5LUdhbWVNYW5hZ2VyXCI7XG5pbXBvcnQgeyBHMTAwOVdpbkxpbmVSZXN1bHQgfSBmcm9tIFwiLi4vVUkvcHJlc2VudC13aW4vYWthLWcxMDA5LXByZXNlbnQtd2luLXBhbmVsXCI7XG5pbXBvcnQgeyBORUFSX1dJTl9TWU1CT0wsIFNsb3R0eVBhcmFtZXRlciwgcmVlbENvdW50LCByb3dDb3VudCB9IGZyb20gXCIuLi9ha2EtZzEwMDktZ2FtZS1jb25maWdcIjtcbmltcG9ydCB7IENvbWJvRGF0YSB9IGZyb20gXCIuLi9hdmVuZ2VyLWdhbWUvbW9kZWwvY29tYm8tZGF0YVwiO1xuaW1wb3J0IHsgRzEwMDlCYWxhbmNlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2FrYS1nMTAwOS1iYWxhbmNlLW1vZGVsXCI7XG5pbXBvcnQgeyBHMTAwOUJldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9ha2EtZzEwMDktYmV0LW1vZGVsXCI7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgY29uc3QgU0xPVFRZX0lURU0gPSB7XG5cdCdCb251cyc6ICdCb251cycsXG5cdCdTY2F0dGVyJzogJ1NjYXR0ZXInLFxuXHQnV2lsZCc6ICdXaWxkJyxcblx0J0FjZSc6ICdBY2UnLFxuXHQnS2luZyc6ICdLaW5nJyxcblx0J1F1ZWVuJzogJ1F1ZWVuJyxcblx0J0phY2snOiAnSmFjaycsXG59XG5cbmV4cG9ydCBjb25zdCBXSU5fTElORV9NQVBQSU5HID0gW1xuXHRbNSwgNiwgNywgOCwgOV0sXG5cdFswLCAxLCAyLCAzLCA0XSxcblx0WzEwLCAxMSwgMTIsIDEzLCAxNF0sXG5cdFs1LCA2LCAyLCA4LCA5XSxcblx0WzUsIDYsIDEyLCA4LCA5XSxcblx0WzAsIDEsIDcsIDEzLCAxNF0sXG5cdFsxMCwgMTEsIDcsIDMsIDRdLFxuXHRbMCwgMTEsIDIsIDEzLCA0XSxcblx0WzEwLCAxLCAxMiwgMywgMTRdLFxuXHRbNSwgMSwgMTIsIDMsIDldLFxuXHRbMTAsIDYsIDIsIDgsIDE0XSxcblx0WzEsIDYsIDEyLCA4LCA0XSxcblx0WzUsIDExLCA3LCAzLCA5XSxcblx0WzUsIDEsIDcsIDEzLCA5XSxcblx0WzEwLCA2LCA3LCA4LCAxNF0sXG5cdFswLCA2LCA3LCA4LCA0XSxcblx0WzUsIDExLCAxMiwgMTMsIDldLFxuXHRbNSwgMSwgMiwgMywgOV0sXG5cdFsxMCwgMTEsIDcsIDMsIDRdLFxuXHRbMCwgMSwgNywgMTMsIDE0XVxuXTtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbm5lY3RTZXJ2ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cdHByaXZhdGUgZ2FtZU1hbmFnZXIxMDA5OiBHYW1lTWFuYWdlcjEwMDk7XG5cblx0cHJpdmF0ZSBjdXJyZW50U2Vzc2lvbjogYW55O1xuXHRwcml2YXRlIGJldEluZm9zOiBhbnk7XG5cdHByaXZhdGUgaXNGcmVlc3BpbnM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSB0b3RhbEZyZWVzcGluczogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBkYXRhSmFja3BvdDogYW55O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmdhbWVNYW5hZ2VyMTAwOSA9IEdhbWVNYW5hZ2VyMTAwOS5nZXRJbnN0YW5jZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcblx0XHR0aGlzLnJlZ2lzdGVyKCk7XG5cdH1cblxuXHRzdGFydCgpIHtcblx0XHQvL2hhcmQgc2V0IGJldCBtdWx0aXBsaXNlciA9IDlcblx0XHRHMTAwOUJldE1vZGVsLkdldEluc3RhbmNlKCkuU2V0QmV0TXVsdGlwbGllcihXSU5fTElORV9NQVBQSU5HLmxlbmd0aCk7XG5cdFx0dGhpcy5nYW1lTWFuYWdlcjEwMDkuc3RhcnRHYW1lKCk7XG5cblx0XHQvLyB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5nZXRKUEhpc3RvcnkoMCwgOCkudGhlbigoZGF0YSkgPT4ge1xuXHRcdC8vIFx0Y29uc29sZS5sb2coJ2dldEpQSGlzdG9yeScsIGRhdGEpO1xuXHRcdC8vIH0pXG5cblx0XHQvLyB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5nZXRCZXRIaXN0b3J5KDAsIDgpLnRoZW4oKGRhdGEpID0+IHtcblx0XHQvLyBcdGNvbnNvbGUubG9nKCdnZXRCZXRIaXN0b3J5JywgZGF0YSk7XG5cdFx0Ly8gfSlcblxuXHRcdGlmICh0aGlzLmRhdGFKYWNrcG90KSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoJ0phY2twb3RVcGRhdGUnLCB0aGlzLmRhdGFKYWNrcG90KTtcblx0XHRcdH0sIDEwMCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlcigpOiB2b2lkIHtcblxuXHRcdHRoaXMuZ2FtZU1hbmFnZXIxMDA5LnJlZ2lzdGVyRXZlbnQoR0FNRV9NQU5BR0VSX0VWRU5ULlNUQVJUX0dBTUVfU1VDQ0VTUywgKGRhdGE6IFN0YXJ0R2FtZURhdGExMDA5KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnU1RBUlRfR0FNRV9TVUNDRVNTJywgZGF0YSk7XG5cblx0XHRcdHRoaXMuY3VycmVudFNlc3Npb24gPSBkYXRhLnBsYXllclN0YXRlO1xuXHRcdFx0dGhpcy5iZXRJbmZvcyA9IGRhdGEuYmV0SW5mb3M7XG5cdFx0XHRsZXQgYmV0UGVyTGluZXMgPSBkYXRhLmJldEluZm9zLm1hcChiZXRJbmZvID0+IGJldEluZm8uYmV0RGVub20pO1xuXHRcdFx0RzEwMDlCZXRNb2RlbC5HZXRJbnN0YW5jZSgpLlNldEJldFBlckxpbmVzKGJldFBlckxpbmVzKTtcblxuXHRcdFx0RzEwMDlCYWxhbmNlTW9kZWwuR2V0SW5zdGFuY2UoKS5TZXRCYWxhbmNlKHRoaXMuZ2FtZU1hbmFnZXIxMDA5LmdldFBsYXllck1vbmV5KCkpO1xuXG5cdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIkJldEluZm9zXCIsIHRoaXMuYmV0SW5mb3MpO1xuXHRcdFx0aWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJwbGF5ZXJTdGF0ZVwiKSAmJiBkYXRhLnBsYXllclN0YXRlKSB7XG5cdFx0XHRcdC8vIEcxMDA5QmV0TW9kZWwuR2V0SW5zdGFuY2UoKS5TZXRDdXJyZW50QmV0UGVyTGluZShkYXRhLnBsYXllclN0YXRlLmRhdGFzWzBdLmNvbnRlbnQuYmV0KTtcblx0XHRcdFx0RzEwMDlCZXRNb2RlbC5HZXRJbnN0YW5jZSgpLlNldEN1cnJlbnRCZXRQZXJMaW5lKDEwMCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImFsbEphY2twb3RJbmZvc1wiKSkge1xuXHRcdFx0XHR0aGlzLmRhdGFKYWNrcG90ID0gZGF0YS5hbGxKYWNrcG90SW5mb3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5jdXJyZW50U2Vzc2lvbiAmJiB0aGlzLmN1cnJlbnRTZXNzaW9uLmhhc093blByb3BlcnR5KFwiZnJlZUdhbWVSZW1haW5cIikgJiYgdGhpcy5jdXJyZW50U2Vzc2lvbi5mcmVlR2FtZVJlbWFpbiA+IDApIHtcblx0XHRcdFx0dGhpcy5pc0ZyZWVzcGlucyA9IHRydWU7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCByZXN1aWx0ID0gdGhpcy5wcm9jZXNzTm9ybWFsRGF0YSgpO1xuXG5cdFx0XHRcdFx0cmVzdWlsdC5mZWF0dXJlRGF0YXMucHVzaCh7XG5cdFx0XHRcdFx0XHRoaXRSdWxlOiBcImZyZWVzcGluc1wiLFxuXHRcdFx0XHRcdFx0dG90YWxGcmVlc3BpbnM6IHRoaXMuY3VycmVudFNlc3Npb24uZnJlZUdhbWVSZW1haW4sXG5cdFx0XHRcdFx0XHRpc1JldHJpZ2dlcjogZmFsc2UsXG5cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcInJlc3VtZVwiLCByZXN1aWx0KTtcblx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5jdXJyZW50U2Vzc2lvbiAmJiB0aGlzLmN1cnJlbnRTZXNzaW9uLmhhc093blByb3BlcnR5KFwiYm9udXNHYW1lUmVtYWluXCIpICYmIHRoaXMuY3VycmVudFNlc3Npb24uYm9udXNHYW1lUmVtYWluID4gMCkge1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgcmVzdWlsdCA9IHRoaXMucHJvY2Vzc05vcm1hbERhdGEoKTtcblx0XHRcdFx0XHRcdHJlc3VpbHQuZmVhdHVyZURhdGFzID0gW107XG5cdFx0XHRcdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcInJlc3VtZUJvbnVzXCIsIHJlc3VpbHQpO1xuXHRcdFx0XHRcdH0sIDEwMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJpbml0XCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHRoaXMuZ2FtZU1hbmFnZXIxMDA5LnJlZ2lzdGVyRXZlbnQoR0FNRV9NQU5BR0VSX0VWRU5ULk5PUk1BTF9HQU1FX1JFU1VMVCwgKGRhdGE6IFBsYXllckRhdGExMDA5KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnTk9STUFMX0dBTUVfUkVTVUxUJywgZGF0YSk7XG5cdFx0XHR0aGlzLmN1cnJlbnRTZXNzaW9uID0gZGF0YTtcblx0XHRcdHRoaXMubmV4dFNjcm9sbERhdGEoKTtcblx0XHR9KVxuXG5cdFx0dGhpcy5nYW1lTWFuYWdlcjEwMDkucmVnaXN0ZXJFdmVudChHQU1FX01BTkFHRVJfRVZFTlQuRlJFRV9HQU1FX1JFU1VMVCwgKGRhdGE6IFBsYXllckRhdGExMDA5KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnRlJFRV9HQU1FX1JFU1VMVCcsIGRhdGEpO1xuXHRcdFx0dGhpcy5jdXJyZW50U2Vzc2lvbiA9IGRhdGE7XG5cdFx0XHR0aGlzLm5leHRTY3JvbGxEYXRhKCk7XG5cdFx0fSlcblxuXHRcdHRoaXMuZ2FtZU1hbmFnZXIxMDA5LnJlZ2lzdGVyRXZlbnQoR0FNRV9NQU5BR0VSX0VWRU5ULkJPTlVTX0dBTUVfUkVTVUxULCAoZGF0YTogUGxheWVyRGF0YTEwMDkpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdCT05VU19HQU1FX1JFU1VMVCcsIGRhdGEpO1xuXHRcdFx0dGhpcy5jdXJyZW50U2Vzc2lvbiA9IGRhdGE7XG5cdFx0XHR0aGlzLm5leHRTY3JvbGxEYXRhKCk7XG5cdFx0fSlcblxuXHRcdHRoaXMuZ2FtZU1hbmFnZXIxMDA5LnJlZ2lzdGVyRXZlbnQoR0FNRV9NQU5BR0VSX0VWRU5ULlBMQVlFUl9NT05FWV9VUERBVEUsIChkYXRhOiBudW1iZXIpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdQTEFZRVJfTU9ORVlfVVBEQVRFJywgZGF0YSk7XG5cdFx0XHQvLyBHMTAwOUJhbGFuY2VNb2RlbC5HZXRJbnN0YW5jZSgpLlNldEJhbGFuY2UoZGF0YSk7XG5cdFx0XHQvLyBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIkJhbGFuY2VDaGFuZ2VcIiwgZGF0YSk7XG5cdFx0fSlcblxuXHRcdHRoaXMuZ2FtZU1hbmFnZXIxMDA5LnJlZ2lzdGVyRXZlbnQoR0FNRV9NQU5BR0VSX0VWRU5ULkpBQ0tQT1RfVVBEQVRFLCAoZGF0YTogeyBba2V5OiBzdHJpbmddOiBKYWNrcG90SW5mbyB9KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnSkFDS1BPVF9VUERBVEUnLCBkYXRhKTtcblx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KCdKYWNrcG90VXBkYXRlJywgZGF0YSk7XG5cdFx0fSlcblxuXHRcdHRoaXMuZ2FtZU1hbmFnZXIxMDA5LnJlZ2lzdGVyRXZlbnQoR0FNRV9NQU5BR0VSX0VWRU5ULkpBQ0tQT1RfU0hPV19NVUxUSVBMRSwgKGRhdGE6IHsgW2tleTogc3RyaW5nXTogSmFja3BvdE1lc3NhZ2UgfSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ0pBQ0tQT1RfU0hPV19NVUxUSVBMRScsIGRhdGEpO1xuXHRcdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoJ0phY2twb3RTaG93TXVsdGlwbGUnLCBkYXRhKTtcblx0XHR9KVxuXG5cdFx0dGhpcy5nYW1lTWFuYWdlcjEwMDkucmVnaXN0ZXJFdmVudChHQU1FX01BTkFHRVJfRVZFTlQuSkFDS1BPVF9ISURFX01VTFRJUExFLCAoZGF0YTogeyBba2V5OiBzdHJpbmddOiBKYWNrcG90TWVzc2FnZSB9KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnSkFDS1BPVF9TSE9XX01VTFRJUExFJywgZGF0YSk7XG5cdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeSgnSmFja3BvdEhpZGVNdWx0aXBsZScpO1xuXHRcdH0pXG5cblx0XHR0aGlzLmdhbWVNYW5hZ2VyMTAwOS5yZWdpc3RlckV2ZW50KEdBTUVfTUFOQUdFUl9FVkVOVC5QT1BVUF9JTkZPX01FU1NBR0UsIChkYXRhOiBQb3B1cEluZm9NZXNzYWdlKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnUE9QVVBfSU5GT19NRVNTQUdFJywgZGF0YSk7XG5cdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeSgnUG9wdXBJbmZvTWVzc2FnZScsIGRhdGEpO1xuXHRcdH0pXG5cblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU3BpblJlcXVlc3RcIiwgdGhpcy5vblNwaW5SZXF1ZXN0LmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJQaWNrVXBSZXF1ZXN0XCIsIHRoaXMub25QaWNrVXBSZXF1ZXN0LmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJFbmRSb3VuZFwiLCB0aGlzLm9uRW5kUm91bmQuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlNob3dCZXRQYW5lbFwiLCB0aGlzLm9uRW5kUm91bmQuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlVwZGF0ZUJldExpbmVcIiwgdGhpcy5vblVwZGF0ZUJldExpbmUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRwcml2YXRlIG9uVXBkYXRlQmV0TGluZShiZXRMaW5lczogbnVtYmVyW10pIHtcblx0XHRHMTAwOUJldE1vZGVsLkdldEluc3RhbmNlKCkuU2V0QmV0TXVsdGlwbGllcihiZXRMaW5lcy5sZW5ndGgpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiU2hvd0JldFBhbmVsXCIpO1xuXHR9XG5cblx0cHJpdmF0ZSBvblBpY2tVcFJlcXVlc3QoaXRlbTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5nYW1lTWFuYWdlcjEwMDkuYm9udXNQbGF5KGl0ZW0pO1xuXHR9XG5cblx0cHJpdmF0ZSBvblNwaW5SZXF1ZXN0KHJlcXVlc3REYXRhKTogdm9pZCB7XG5cdFx0aWYgKHJlcXVlc3REYXRhLmlzRnJlZXNwaW4pIHtcblx0XHRcdHRoaXMuZ2FtZU1hbmFnZXIxMDA5LmZyZWVTcGluKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IGJldERlbm9tID0gRzEwMDlCZXRNb2RlbC5HZXRJbnN0YW5jZSgpLkdldEN1cnJlbnRCZXRQZXJMaW5lKCk7XG5cdFx0XHRsZXQgYmV0SW5mbyA9IHRoaXMuYmV0SW5mb3MuZmlsdGVyKChiZXRJbmZvKSA9PiBiZXRJbmZvLmJldERlbm9tID09IGJldERlbm9tKVswXTtcblx0XHRcdHRoaXMuZ2FtZU1hbmFnZXIxMDA5Lm5vcm1hbFNwaW4oYmV0SW5mby5iZXRJZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwcm9jZXNzTm9ybWFsRGF0YSgpOiBhbnkge1xuXHRcdHRoaXMuZmFrZUJhbGFuY2VTcGluKCk7XG5cdFx0bGV0IGlzRW5kcm91bmQgPSBmYWxzZTtcblx0XHRsZXQgaXNSZXRyaWdnZXIgPSBmYWxzZTtcblx0XHRsZXQgaXNFeHBhbmRXaWxkID0gZmFsc2U7XG5cdFx0bGV0IHdpblBvaW50ID0gMDtcblx0XHRsZXQgZmVhdHVyZURhdGEgPSB7fTtcblx0XHRmZWF0dXJlRGF0YSA9IHtcblx0XHRcdGhpdFJ1bGU6IFwiZnJlZXNwaW5zXCIsXG5cdFx0XHR0b3RhbEZyZWVzcGluczogdGhpcy5jdXJyZW50U2Vzc2lvbi5mcmVlR2FtZVRvdGFsLFxuXHRcdFx0aXNSZXRyaWdnZXI6IGZhbHNlLFxuXHRcdH07XG5cdFx0bGV0IGZlYXR1cmVEYXRhcyA9IFtdO1xuXHRcdGxldCB3aW5Cb251cyA9IFtdO1xuXHRcdHZhciBjZWxsc1Jlc3VsdCA9IFtdO1xuXHRcdGxldCBXaW5MaW5lczogRzEwMDlXaW5MaW5lUmVzdWx0W10gPSBbXTtcblx0XHRsZXQgd2luU2NhdHRlcnMgPSBbXTtcblx0XHRsZXQgZnJlZXNwaW50b3RhbFdpblBvaW50ID0gMDtcblx0XHRsZXQgamFja3BvdFdpblBvaW50ID0gMDtcblx0XHRsZXQgamFja3BvdFdpbkxpbmUgOiBHMTAwOVdpbkxpbmVSZXN1bHQgPSBudWxsO1xuXHRcdGxldCB0b3RhbFdpblBvaW50ID0gMDtcblx0XHRsZXQgZnJlZXNwaW5MZWZ0ID0gMDtcblx0XHRsZXQgYm9udXNHYW1lRGF0YXMgPSBudWxsO1xuXHRcdGxldCBjb21ib0RhdGE6IENvbWJvRGF0YVtdID0gW107XG5cblx0XHR2YXIgY291bnRDb21ibyA9IDA7XG5cdFx0dGhpcy5jdXJyZW50U2Vzc2lvbi5kYXRhcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdFx0c3dpdGNoIChlbGVtZW50LmRhdGEpIHtcblx0XHRcdFx0Y2FzZSBcInBsYXllZFNwaW5cIjpcblx0XHRcdFx0XHRpZiAoY291bnRDb21ibyA9PSAwKSB7XG5cdFx0XHRcdFx0XHRjZWxsc1Jlc3VsdCA9IHRoaXMuY3JlYXRlQ2VsbHNSZXN1bHQoZWxlbWVudC5jb250ZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRjb21ib0RhdGFbY291bnRDb21ibyAtIDFdLlNldENlbGxzKHRoaXMuY3JlYXRlQ2VsbHNSZXN1bHQoZWxlbWVudC5jb250ZW50KSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwid2luTGluZVwiOlxuXHRcdFx0XHRcdHZhciBjb250ZW50ID0gZWxlbWVudC5jb250ZW50O1xuXHRcdFx0XHRcdHZhciBhcnJOdW1iZXIgPSBbXTtcblx0XHRcdFx0XHRhcnJOdW1iZXIucHVzaChjb250ZW50LmhpdFNldElEKTtcblx0XHRcdFx0XHR2YXIgd2luTGluZURhdGEgPSBuZXcgRzEwMDlXaW5MaW5lUmVzdWx0KGNvbnRlbnQuaGl0U2V0LCBjb250ZW50LnBheSwgYXJyTnVtYmVyLCBjb250ZW50LndoYXQpO1xuXHRcdFx0XHRcdGlmIChjb3VudENvbWJvID09IDApIHtcblx0XHRcdFx0XHRcdFdpbkxpbmVzLnB1c2god2luTGluZURhdGEpO1xuXHRcdFx0XHRcdFx0d2luUG9pbnQgKz0gd2luTGluZURhdGEuR2V0V2luUG9pbnQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRjb21ib0RhdGFbY291bnRDb21ibyAtIDFdLkdldFdpbkxpbmVzKCkucHVzaCh3aW5MaW5lRGF0YSk7XG5cdFx0XHRcdFx0XHRjb21ib0RhdGFbY291bnRDb21ibyAtIDFdLkFkZFdpblBvaW50KHdpbkxpbmVEYXRhLkdldFdpblBvaW50KCkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImV4cGxvZGVkQ2VsbHNcIjpcblx0XHRcdFx0XHRjb3VudENvbWJvKys7XG5cdFx0XHRcdFx0Y29tYm9EYXRhLnB1c2gobmV3IENvbWJvRGF0YShlbGVtZW50LmNvbnRlbnQpKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwic3BpblRyaWdnZXJcIjpcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5jb250ZW50LmJvbnVzID09IFwiZnJlZXNwaW5zXCIpIHtcblx0XHRcdFx0XHRcdGZlYXR1cmVEYXRhcy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0aGl0UnVsZTogXCJmcmVlc3BpbnNcIixcblx0XHRcdFx0XHRcdFx0dG90YWxGcmVlc3BpbnM6IGVsZW1lbnQuY29udGVudC5zcGlucyxcblx0XHRcdFx0XHRcdFx0aXNSZXRyaWdnZXI6IHRoaXMuaXNGcmVlc3BpbnMsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHRoaXMuaXNGcmVlc3BpbnMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0ZnJlZXNwaW5MZWZ0ID0gZWxlbWVudC5jb250ZW50LnNwaW5zIHx8IDA7XG5cdFx0XHRcdFx0XHQvLyB2YXIgc2NhdHRlcnMgPSBbXTtcblx0XHRcdFx0XHRcdC8vIGxldCBjZWxscyA9IGNvdW50Q29tYm8gPiAwID8gY29tYm9EYXRhW2NvdW50Q29tYm8gLSAxXS5HZXRDZWxscygpIDogY2VsbHNSZXN1bHQ7XG5cdFx0XHRcdFx0XHQvLyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2VsbHMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRcdFx0XHQvLyBcdGxldCBjZWxsID0gY2VsbHNbaW5kZXhdO1xuXHRcdFx0XHRcdFx0Ly8gXHRpZiAoY2VsbCA9PSBcIlNjYXR0ZXJcIikge1xuXHRcdFx0XHRcdFx0Ly8gXHRcdHNjYXR0ZXJzLnB1c2goaW5kZXgpO1xuXHRcdFx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0XHR3aW5TY2F0dGVycy5wdXNoKG5ldyBHMTAwOVdpbkxpbmVSZXN1bHQoZWxlbWVudC5jb250ZW50LnRyaWdnZXIuaGl0U2V0LCAwLCBbLTFdLCBcIlNjYXR0ZXJcIiwgZmFsc2UsIHRydWUpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJzcGluVHJpZ2dlckJvbnVzXCI6XG5cdFx0XHRcdFx0ZmVhdHVyZURhdGFzLnB1c2goe1xuXHRcdFx0XHRcdFx0aGl0UnVsZTogXCJib251c1wiLFxuXHRcdFx0XHRcdFx0dG90YWxGcmVlc3BpbnM6IDAsXG5cdFx0XHRcdFx0XHRpc1JldHJpZ2dlcjogZmFsc2UsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gbGV0IGJvbnVzID0gW107XG5cdFx0XHRcdFx0Ly8gbGV0IGNlbGxzID0gY291bnRDb21ibyA+IDAgPyBjb21ib0RhdGFbY291bnRDb21ibyAtIDFdLkdldENlbGxzKCkgOiBjZWxsc1Jlc3VsdDtcblx0XHRcdFx0XHQvLyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2VsbHMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRcdFx0Ly8gXHRsZXQgY2VsbCA9IGNlbGxzW2luZGV4XTtcblxuXHRcdFx0XHRcdC8vIFx0aWYgKGNlbGwgPT0gXCJCb251c1wiKSB7XG5cdFx0XHRcdFx0Ly8gXHRcdGJvbnVzLnB1c2goaW5kZXgpO1xuXHRcdFx0XHRcdC8vIFx0fVxuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHR3aW5Cb251cy5wdXNoKG5ldyBHMTAwOVdpbkxpbmVSZXN1bHQoZWxlbWVudC5jb250ZW50LnRyaWdnZXIuaGl0U2V0LCBlbGVtZW50LmNvbnRlbnQucGF5LCBbLTFdLCBcIkJvbnVzXCIsIGZhbHNlLCB0cnVlKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJqYWNrcG90V2luXCI6XG5cdFx0XHRcdFx0dmFyIGNvbnRlbnQgPSBlbGVtZW50LmNvbnRlbnQ7XG5cdFx0XHRcdFx0dmFyIGFyck51bWJlciA9IFtdO1xuXHRcdFx0XHRcdGFyck51bWJlci5wdXNoKGNvbnRlbnQuaGl0U2V0SUQpO1xuXHRcdFx0XHRcdHZhciB3aW5MaW5lRGF0YSA9IG5ldyBHMTAwOVdpbkxpbmVSZXN1bHQoY29udGVudC5oaXRTZXQsIGNvbnRlbnQucGF5LCBhcnJOdW1iZXIsIGNvbnRlbnQud2hhdCk7XG5cdFx0XHRcdFx0aWYgKGNvdW50Q29tYm8gPT0gMCkge1xuXHRcdFx0XHRcdFx0V2luTGluZXMucHVzaCh3aW5MaW5lRGF0YSk7XG5cdFx0XHRcdFx0XHR3aW5Qb2ludCArPSB3aW5MaW5lRGF0YS5HZXRXaW5Qb2ludCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdGNvbWJvRGF0YVtjb3VudENvbWJvIC0gMV0uR2V0V2luTGluZXMoKS5wdXNoKHdpbkxpbmVEYXRhKTtcblx0XHRcdFx0XHRcdGNvbWJvRGF0YVtjb3VudENvbWJvIC0gMV0uQWRkV2luUG9pbnQod2luTGluZURhdGEuR2V0V2luUG9pbnQoKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0amFja3BvdFdpblBvaW50ID0gY29udGVudC5wYXk7XG5cdFx0XHRcdFx0amFja3BvdFdpbkxpbmUgPSB3aW5MaW5lRGF0YTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImdhbWVFbmRcIjpcblx0XHRcdFx0XHRpc0VuZHJvdW5kID0gdHJ1ZTtcblx0XHRcdFx0XHR0b3RhbFdpblBvaW50ID0gZWxlbWVudC5jb250ZW50LndpbiB8fCAwO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiB7XG5cdFx0XHRDZWxsczogY2VsbHNSZXN1bHQsXG5cdFx0XHRXaW5MaW5lczogV2luTGluZXMsXG5cdFx0XHRhbGxXaW5MaW5lOiBudWxsLFxuXHRcdFx0U2NhdHRlclNwaW46IFtdLFxuXHRcdFx0V2luU2NhdHRlcnM6IHdpblNjYXR0ZXJzLFxuXHRcdFx0V2luQm9udXM6IHdpbkJvbnVzLFxuXHRcdFx0ZmVhdHVyZURhdGFzOiBmZWF0dXJlRGF0YXMsXG5cdFx0XHRmcmVlc3BpbkxlZnQ6IGZyZWVzcGluTGVmdCxcblx0XHRcdHRvdGFsRnJlZXNwaW5zOiB0aGlzLnRvdGFsRnJlZXNwaW5zLFxuXHRcdFx0aXNGcmVlc3BpbnM6IHRoaXMuaXNGcmVlc3BpbnMsXG5cdFx0XHRpc0VuZHJvdW5kOiBpc0VuZHJvdW5kLFxuXHRcdFx0d2luUG9pbnQ6IHdpblBvaW50LFxuXHRcdFx0dG90YWxXaW5Qb2ludDogdG90YWxXaW5Qb2ludCxcblx0XHRcdGZyZWVzcGludG90YWxXaW5Qb2ludDogZnJlZXNwaW50b3RhbFdpblBvaW50LFxuXHRcdFx0amFja3BvdFdpblBvaW50OiBqYWNrcG90V2luUG9pbnQsXG5cdFx0XHRqYWNrcG90V2luTGluZTogamFja3BvdFdpbkxpbmUsXG5cdFx0XHRib251c0dhbWVEYXRhczogYm9udXNHYW1lRGF0YXMsXG5cdFx0XHRjb21ib0RhdGE6IGNvbWJvRGF0YVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcHJvY2Vzc05vcm1hbERhdGExKCk6IGFueSB7XG5cdFx0dGhpcy5mYWtlQmFsYW5jZVNwaW4oKTtcblx0XHRpZiAodGhpcy5jdXJyZW50U2Vzc2lvbi5oYXNPd25Qcm9wZXJ0eShcImZyZWVHYW1lTWF0cml4XCIpKSB7XG5cdFx0XHR0aGlzLmN1cnJlbnRTZXNzaW9uLm5vcm1hbEdhbWVNYXRyaXggPSB0aGlzLmN1cnJlbnRTZXNzaW9uLmZyZWVHYW1lTWF0cml4O1xuXHRcdH1cblx0XHRpZiAodGhpcy5jdXJyZW50U2Vzc2lvbi5oYXNPd25Qcm9wZXJ0eShcImZyZWVHYW1lUGF5bGluZXNcIikpIHtcblx0XHRcdHRoaXMuY3VycmVudFNlc3Npb24ubm9ybWFsUGF5TGluZXMgPSB0aGlzLmN1cnJlbnRTZXNzaW9uLmZyZWVHYW1lUGF5bGluZXM7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmN1cnJlbnRTZXNzaW9uLmRhdGEuaGFzT3duUHJvcGVydHkoXCJmcmVlTWF0cml4T3JpZ2luXCIpKSB7XG5cdFx0XHR0aGlzLmN1cnJlbnRTZXNzaW9uLmRhdGEubm9ybWFsTWF0cml4T3JpZ2luID0gdGhpcy5jdXJyZW50U2Vzc2lvbi5kYXRhLmZyZWVNYXRyaXhPcmlnaW47XG5cdFx0fVxuXG5cdFx0bGV0IGlzRW5kcm91bmQgPSBmYWxzZTtcblx0XHRsZXQgaXNSZXRyaWdnZXIgPSBmYWxzZTtcblx0XHRsZXQgaXNFeHBhbmRXaWxkID0gZmFsc2U7XG5cdFx0bGV0IHdpblBvaW50ID0gMDtcblx0XHRsZXQgZmVhdHVyZURhdGEgPSB7fTtcblx0XHRsZXQgZmVhdHVyZURhdGFzID0gW107XG5cdFx0bGV0IHdpbkJvbnVzID0gW107XG5cdFx0bGV0IGV4cGFuZFdpbGRJbmRpY2VzID0gW107XG5cdFx0bGV0IGNlbGxzUmVzdWx0ID0gW107XG5cdFx0bGV0IFdpbkxpbmVzOiBHMTAwOVdpbkxpbmVSZXN1bHRbXSA9IFtdO1xuXHRcdGxldCB3aW5TY2F0dGVycyA9IFtdO1xuXHRcdGxldCBmcmVlc3BpbnRvdGFsV2luUG9pbnQgPSAwO1xuXHRcdGxldCBqYWNrcG90V2luUG9pbnQgPSAwO1xuXHRcdGxldCBqYWNrcG90V2luTGluZSA9IFtdO1xuXHRcdGxldCB0b3RhbFdpblBvaW50ID0gMDtcblx0XHRsZXQgZnJlZXNwaW5MZWZ0ID0gMDtcblx0XHRsZXQgYm9udXNHYW1lRGF0YXMgPSBudWxsO1xuXHRcdGZlYXR1cmVEYXRhID0ge1xuXHRcdFx0aGl0UnVsZTogXCJmcmVlc3BpbnNcIixcblx0XHRcdHRvdGFsRnJlZXNwaW5zOiB0aGlzLmN1cnJlbnRTZXNzaW9uLmZyZWVHYW1lVG90YWwsXG5cdFx0XHRpc1JldHJpZ2dlcjogZmFsc2UsXG5cdFx0fTtcblx0XHQvL3BhcnNlIGl0ZW1zXG5cdFx0Ly8gbGV0IGl0ZW1zID0gW11cblx0XHQvLyB0aGlzLmN1cnJlbnRTZXNzaW9uLm5vcm1hbEdhbWVNYXRyaXguZm9yRWFjaChpdGVtID0+IGl0ZW1zLnB1c2goU0xPVFRZX0lURU1baXRlbV0pKTtcblx0XHQvLyBjb25zb2xlLndhcm4oJ2l0ZW1zaXRlbXM6ICcsIGl0ZW1zKTtcblx0XHQvLyBsZXQgY291bnQgPSAwO1xuXHRcdC8vIGZvciAobGV0IHJlZWxJbmRleCA9IDA7IHJlZWxJbmRleCA8IHJlZWxDb3VudDsgcmVlbEluZGV4KyspIHtcblx0XHQvLyBcdGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCByb3dDb3VudDsgcm93SW5kZXgrKykge1xuXHRcdC8vIFx0XHRsZXQgY2VsbEluZGV4ID0gU2xvdHR5UGFyYW1ldGVyLkdldENlbGxJbmRleChyZWVsSW5kZXgsIHJvd0luZGV4KTtcblx0XHQvLyBcdFx0Y2VsbHNSZXN1bHRbY2VsbEluZGV4XSA9IGl0ZW1zW2NvdW50KytdO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblx0XHRjZWxsc1Jlc3VsdCA9IHRoaXMuY3JlYXRlQ2VsbHNSZXN1bHQodGhpcy5jdXJyZW50U2Vzc2lvbi5ub3JtYWxHYW1lTWF0cml4KTtcblx0XHQvLyBnZXQgd2luU2NhdHRlclxuXG5cdFx0Ly9wYXJzZSB3aW5saW5lXG5cdFx0aWYgKHRoaXMuY3VycmVudFNlc3Npb24uaGFzT3duUHJvcGVydHkoXCJub3JtYWxQYXlMaW5lc1wiKSkge1xuXHRcdFx0dGhpcy5jdXJyZW50U2Vzc2lvbi5ub3JtYWxQYXlMaW5lcy5mb3JFYWNoKG5vcm1hbFBheUxpbmUgPT4ge1xuXHRcdFx0XHRXaW5MaW5lcy5wdXNoKFxuXHRcdFx0XHRcdG5ldyBHMTAwOVdpbkxpbmVSZXN1bHQoV0lOX0xJTkVfTUFQUElOR1tub3JtYWxQYXlMaW5lLnB3bCAtIDFdLnNsaWNlKDAsIG5vcm1hbFBheUxpbmUucHdyYyksIG5vcm1hbFBheUxpbmUucHdhLCBbbm9ybWFsUGF5TGluZS5wd2wgLSAxXSwgU0xPVFRZX0lURU1bbm9ybWFsUGF5TGluZS5wc2NdLCBmYWxzZSwgTkVBUl9XSU5fU1lNQk9MLmluY2x1ZGVzKChTTE9UVFlfSVRFTVtub3JtYWxQYXlMaW5lLnBzY10pKSkpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFdpbkxpbmVzLmZvckVhY2god2luTGluZSA9PiB3aW5Qb2ludCArPSB3aW5MaW5lLkdldFdpblBvaW50KCkpO1xuXG5cdFx0aXNSZXRyaWdnZXIgPSB0aGlzLmlzRnJlZXNwaW5zO1xuXHRcdC8vcGFyc2UgZnJlZXNwaW5zXG5cdFx0aWYgKHRoaXMuY3VycmVudFNlc3Npb24uaGFzT3duUHJvcGVydHkoXCJmcmVlR2FtZVRvdGFsXCIpICYmIHRoaXMuY3VycmVudFNlc3Npb24uaGFzT3duUHJvcGVydHkoXCJmcmVlR2FtZVJlbWFpblwiKSAmJiB0aGlzLmN1cnJlbnRTZXNzaW9uLmZyZWVHYW1lVG90YWwgPT0gdGhpcy5jdXJyZW50U2Vzc2lvbi5mcmVlR2FtZVJlbWFpbikge1xuXHRcdFx0dGhpcy5pc0ZyZWVzcGlucyA9IHRydWU7XG5cdFx0XHRmZWF0dXJlRGF0YXMucHVzaCh7XG5cdFx0XHRcdGhpdFJ1bGU6IFwiZnJlZXNwaW5zXCIsXG5cdFx0XHRcdHRvdGFsRnJlZXNwaW5zOiB0aGlzLmN1cnJlbnRTZXNzaW9uLmZyZWVHYW1lVG90YWwsXG5cdFx0XHRcdGlzUmV0cmlnZ2VyOiBmYWxzZSxcblxuXHRcdFx0fSk7XG5cblx0XHRcdGlmICh0aGlzLmN1cnJlbnRTZXNzaW9uLnN0YXRlID09IDEpIHtcblx0XHRcdFx0bGV0IHNjYXR0ZXJzID0gW107XG5cdFx0XHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjZWxsc1Jlc3VsdC5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0XHRsZXQgY2VsbCA9IGNlbGxzUmVzdWx0W2luZGV4XTtcblxuXHRcdFx0XHRcdGlmIChjZWxsID09IFwiU2NhdHRlclwiKSB7XG5cdFx0XHRcdFx0XHRzY2F0dGVycy5wdXNoKGluZGV4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0d2luU2NhdHRlcnMucHVzaChuZXcgRzEwMDlXaW5MaW5lUmVzdWx0KHNjYXR0ZXJzLCAwLCBbLTFdLCBcIlNjYXR0ZXJcIiwgZmFsc2UsIHRydWUpKTtcblxuXHRcdFx0fVxuXHRcdH1cblx0XHRmcmVlc3BpbkxlZnQgPSB0aGlzLmN1cnJlbnRTZXNzaW9uLmZyZWVHYW1lUmVtYWluIHx8IDA7XG5cdFx0Ly9wYXJzZSBib251c1xuXHRcdGlmICh0aGlzLmN1cnJlbnRTZXNzaW9uLmhhc093blByb3BlcnR5KFwiYm9udXNHYW1lUmVtYWluXCIpICYmIHRoaXMuY3VycmVudFNlc3Npb24uYm9udXNHYW1lUmVtYWluID4gMCkge1xuXHRcdFx0ZmVhdHVyZURhdGFzLnB1c2goe1xuXHRcdFx0XHRoaXRSdWxlOiBcImJvbnVzXCIsXG5cdFx0XHRcdHRvdGFsRnJlZXNwaW5zOiAwLFxuXHRcdFx0XHRpc1JldHJpZ2dlcjogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRTZXNzaW9uLmJvbnVzR2FtZVRvdGFsID09IHRoaXMuY3VycmVudFNlc3Npb24uYm9udXNHYW1lUmVtYWluKSB7XG5cdFx0XHRcdGxldCBib251cyA9IFtdO1xuXHRcdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2VsbHNSZXN1bHQubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRcdFx0bGV0IGNlbGwgPSBjZWxsc1Jlc3VsdFtpbmRleF07XG5cblx0XHRcdFx0XHRpZiAoY2VsbCA9PSBcIkJvbnVzXCIpIHtcblx0XHRcdFx0XHRcdGJvbnVzLnB1c2goaW5kZXgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR3aW5Cb251cy5wdXNoKG5ldyBHMTAwOVdpbkxpbmVSZXN1bHQoYm9udXMsIDAsIFstMV0sIFwiQm9udXNcIiwgZmFsc2UsIHRydWUpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5jdXJyZW50U2Vzc2lvbi5oYXNPd25Qcm9wZXJ0eShcImJvbnVzTWF0cml4XCIpKSB7XG5cdFx0XHRsZXQgYm9udXNUb3RhbE11bHRpcGxlID0gMDtcblx0XHRcdGxldCBib251c0N1cnJlbnRNdWx0aXBsZSA9IDA7XG5cdFx0XHRsZXQgY3VycmVudEluZGV4ID0gdGhpcy5jdXJyZW50U2Vzc2lvbi5ib251c01hdHJpeC5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jdXJyZW50U2Vzc2lvbi5ib251c01hdHJpeC5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0bGV0IHJlc3VpbHQgPSB0aGlzLmN1cnJlbnRTZXNzaW9uLmJvbnVzTWF0cml4W2luZGV4XTtcblx0XHRcdFx0bGV0IHBpY2t1cERhdGFzID0gcmVzdWlsdC5zcGxpdChcIjtcIik7XG5cdFx0XHRcdGJvbnVzVG90YWxNdWx0aXBsZSArPSBOdW1iZXIocGlja3VwRGF0YXNbMF0pO1xuXHRcdFx0XHRpZiAoY3VycmVudEluZGV4ID4gaW5kZXgpIHtcblx0XHRcdFx0XHRib251c0N1cnJlbnRNdWx0aXBsZSArPSBOdW1iZXIocGlja3VwRGF0YXNbMF0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGJvbnVzR2FtZURhdGFzID0ge1xuXHRcdFx0XHRib251c1RvdGFsV2luUG9pbnQ6IHRoaXMuY3VycmVudFNlc3Npb24uYm9udXNHYW1lV2luQW1vdW50IHx8IDAsXG5cdFx0XHRcdGJvbnVzTXVsdGlwbGU6IE51bWJlcih0aGlzLmN1cnJlbnRTZXNzaW9uLmRhdGEubGFzdE9wZW5TeW1ib2xCb251cykgfHwgMCxcblx0XHRcdFx0Ym9udXNUb3RhbE11bHRpcGxlOiBib251c1RvdGFsTXVsdGlwbGUsXG5cdFx0XHRcdGJvbnVzQ3VycmVudFN0YXRlSW5kZXg6IGN1cnJlbnRJbmRleCxcblx0XHRcdFx0Ym9udXNDdXJyZW50TXVsdGlwbGU6IGJvbnVzQ3VycmVudE11bHRpcGxlXG5cdFx0XHR9O1xuXHRcdH1cblx0XHQvL2V4cGFuZGluZyB3aWxkXG5cblx0XHQvL3BhcnNlIGphY2twb3Rcblx0XHRpZiAodGhpcy5jdXJyZW50U2Vzc2lvbi5oYXNPd25Qcm9wZXJ0eShcImphY2twb3RQYXlMaW5lXCIpICYmIHRoaXMuY3VycmVudFNlc3Npb24uamFja3BvdFBheUxpbmUubGVuZ3RoID4gMCkge1xuXHRcdFx0bGV0IGphY2twb3RUb3RhbFdpbiA9IDA7XG5cblx0XHRcdC8vIHRoaXMuY3VycmVudFNlc3Npb24uamFja3BvdFBheUxpbmUuZm9yRWFjaChyZXN1bHQgPT4ge1xuXHRcdFx0bGV0IGphY2twb3RMaW5lID0gdGhpcy5jdXJyZW50U2Vzc2lvbi5qYWNrcG90UGF5TGluZVswXS5zcGxpdChcIjtcIik7XG5cdFx0XHRqYWNrcG90VG90YWxXaW4gKz0gTnVtYmVyKGphY2twb3RMaW5lWzFdKTtcblx0XHRcdGxldCB3aW5MaW5lTnVtYmVyID0gamFja3BvdExpbmVbMl0gLSAxO1xuXHRcdFx0bGV0IGNvcmVXaW5MaW5lID0gW107XG5cdFx0XHRsZXQgaGl0U2V0ID0gV0lOX0xJTkVfTUFQUElOR1t3aW5MaW5lTnVtYmVyXTtcblx0XHRcdGhpdFNldC5mb3JFYWNoKGluZGV4ID0+IHtcblx0XHRcdFx0bGV0IGNlbGwgPSBjZWxsc1Jlc3VsdFtpbmRleF07XG5cdFx0XHRcdGlmIChjZWxsID09IFwiQ29yZVwiKSB7XG5cdFx0XHRcdFx0Y29yZVdpbkxpbmUucHVzaChpbmRleCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHRqYWNrcG90V2luTGluZS5wdXNoKG5ldyBHMTAwOVdpbkxpbmVSZXN1bHQoY29yZVdpbkxpbmUsIDAsIFt3aW5MaW5lTnVtYmVyXSwgXCJDb3JlXCIsIGZhbHNlLCB0cnVlKSk7XG5cdFx0XHQvLyB9KTtcblxuXHRcdFx0amFja3BvdFdpblBvaW50ID0gamFja3BvdFRvdGFsV2luO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jdXJyZW50U2Vzc2lvbi5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikpIHtcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRTZXNzaW9uLmRhdGEuaGFzT3duUHJvcGVydHkoXCJub3JtYWxNYXRyaXhPcmlnaW5cIikgfHwgdGhpcy5jdXJyZW50U2Vzc2lvbi5kYXRhLmhhc093blByb3BlcnR5KFwiZnJlZU1hdHJpeE9yaWdpblwiKSkge1xuXHRcdFx0XHQvL2NvbnZlcnQgIG1hdHJpeCBvcmlnaW4gdG8gY2VsbHJlc3VsdFxuXHRcdFx0XHRsZXQgaXRlbXMgPSBbXTtcblx0XHRcdFx0bGV0IG5ld0NlbGxzUmVzdWx0ID0gW107XG5cdFx0XHRcdHRoaXMuY3VycmVudFNlc3Npb24uZGF0YS5ub3JtYWxNYXRyaXhPcmlnaW4uZm9yRWFjaChpdGVtID0+IGl0ZW1zLnB1c2goU0xPVFRZX0lURU1baXRlbV0pKTtcblx0XHRcdFx0bGV0IGNvdW50ID0gMDtcblx0XHRcdFx0Zm9yIChsZXQgcmVlbEluZGV4ID0gMDsgcmVlbEluZGV4IDwgcmVlbENvdW50OyByZWVsSW5kZXgrKykge1xuXHRcdFx0XHRcdGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCByb3dDb3VudDsgcm93SW5kZXgrKykge1xuXHRcdFx0XHRcdFx0bGV0IGNlbGxJbmRleCA9IFNsb3R0eVBhcmFtZXRlci5HZXRDZWxsSW5kZXgocmVlbEluZGV4LCByb3dJbmRleCk7XG5cdFx0XHRcdFx0XHRuZXdDZWxsc1Jlc3VsdFtjZWxsSW5kZXhdID0gaXRlbXNbY291bnQrK107XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAobGV0IHJlZWxJbmRleCA9IDA7IHJlZWxJbmRleCA8IHJlZWxDb3VudDsgcmVlbEluZGV4KyspIHtcblx0XHRcdFx0XHRsZXQgY291bnQgPSAwO1xuXHRcdFx0XHRcdGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCByb3dDb3VudDsgcm93SW5kZXgrKykge1xuXHRcdFx0XHRcdFx0bGV0IGNlbGxJbmRleCA9IFNsb3R0eVBhcmFtZXRlci5HZXRDZWxsSW5kZXgocmVlbEluZGV4LCByb3dJbmRleCk7XG5cdFx0XHRcdFx0XHRpZiAoY2VsbHNSZXN1bHRbY2VsbEluZGV4XSA9PSBcIkNvcmVcIikge1xuXHRcdFx0XHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0XHRcdFx0XHRpZiAoY291bnQgPT0gMykge1xuXHRcdFx0XHRcdFx0XHRcdGlzRXhwYW5kV2lsZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IGluZGljZXMgPSBbXTtcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBuZXdSb3dJbmRleCA9IDA7IG5ld1Jvd0luZGV4IDwgcm93Q291bnQ7IG5ld1Jvd0luZGV4KyspIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBuZXdDZWxsSW5kZXggPSBTbG90dHlQYXJhbWV0ZXIuR2V0Q2VsbEluZGV4KHJlZWxJbmRleCwgbmV3Um93SW5kZXgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG5ld0NlbGxzUmVzdWx0W25ld0NlbGxJbmRleF0gPT0gXCJDb3JlXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmV3Q2VsbHNSZXN1bHRbbmV3Q2VsbEluZGV4XSA9IFwiUmVhY3RvclwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbmRpY2VzLnB1c2gobmV3Q2VsbEluZGV4KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGluZGljZXMubGVuZ3RoID4gMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXhwYW5kV2lsZEluZGljZXMucHVzaChpbmRpY2VzWzFdKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXhwYW5kV2lsZEluZGljZXMucHVzaChpbmRpY2VzWzBdKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2VsbHNSZXN1bHQgPSBPYmplY3QuYXNzaWduKFtdLCBuZXdDZWxsc1Jlc3VsdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuY3VycmVudFNlc3Npb24uaGFzT3duUHJvcGVydHkoXCJpc0ZpbmlzaFwiKSAmJiBmcmVlc3BpbkxlZnQgPT0gMCkge1xuXHRcdFx0aXNFbmRyb3VuZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0ZnJlZXNwaW50b3RhbFdpblBvaW50ID0gdGhpcy5jdXJyZW50U2Vzc2lvbi5mcmVlV2luQW1vdW50IHx8IDA7XG5cdFx0dG90YWxXaW5Qb2ludCA9IHRoaXMuY3VycmVudFNlc3Npb24udG90YWxXaW5BbW91bnQgfHwgMDtcblxuXHRcdC8vcGFyc2UgY29tYm8gd2luXG5cdFx0bGV0IGNvbWJvRGF0YSA9IFtdO1xuXHRcdGlmICh0aGlzLmN1cnJlbnRTZXNzaW9uLmhhc093blByb3BlcnR5KFwiY29tYm9EYXRhXCIpKSB7XG5cdFx0XHRjb21ib0RhdGEgPSB0aGlzLmdldENvbWJvRGF0YSh0aGlzLmN1cnJlbnRTZXNzaW9uLmNvbWJvRGF0YSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdENlbGxzOiBjZWxsc1Jlc3VsdCxcblx0XHRcdFdpbkxpbmVzOiBXaW5MaW5lcyxcblx0XHRcdGFsbFdpbkxpbmU6IG51bGwsXG5cdFx0XHRXaW5TY2F0dGVyczogd2luU2NhdHRlcnMsXG5cdFx0XHRXaW5Cb251czogd2luQm9udXMsXG5cdFx0XHRmZWF0dXJlRGF0YXM6IGZlYXR1cmVEYXRhcyxcblx0XHRcdGZyZWVzcGluTGVmdDogZnJlZXNwaW5MZWZ0LFxuXHRcdFx0dG90YWxGcmVlc3BpbnM6IHRoaXMudG90YWxGcmVlc3BpbnMsXG5cdFx0XHRpc0ZyZWVzcGluczogdGhpcy5pc0ZyZWVzcGlucyxcblx0XHRcdGlzRW5kcm91bmQ6IGlzRW5kcm91bmQsXG5cdFx0XHRpc0V4cGFuZFdpbGQ6IGlzRXhwYW5kV2lsZCxcblx0XHRcdGV4cGFuZFdpbGRJbmRpY2VzOiBleHBhbmRXaWxkSW5kaWNlcyxcblx0XHRcdHdpblBvaW50OiB3aW5Qb2ludCxcblx0XHRcdHRvdGFsV2luUG9pbnQ6IHRvdGFsV2luUG9pbnQsXG5cdFx0XHRmcmVlc3BpbnRvdGFsV2luUG9pbnQ6IGZyZWVzcGludG90YWxXaW5Qb2ludCxcblx0XHRcdGphY2twb3RXaW5Qb2ludDogamFja3BvdFdpblBvaW50LFxuXHRcdFx0amFja3BvdFdpbkxpbmU6IGphY2twb3RXaW5MaW5lLFxuXHRcdFx0Ym9udXNHYW1lRGF0YXM6IGJvbnVzR2FtZURhdGFzLFxuXHRcdFx0Y29tYm9EYXRhOiBjb21ib0RhdGFcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldENvbWJvRGF0YShyYXdjb21ib0RhdGEpIHtcblx0XHR2YXIgY29tYm9EYXRhID0gW107XG5cdFx0cmF3Y29tYm9EYXRhLmZvckVhY2gocmF3RGF0YSA9PiB7XG5cdFx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdFx0ZXhwbG9kZWRDZWxsczogW10sXG5cdFx0XHRcdENlbGxzOiBbXSxcblx0XHRcdFx0V2luTGluZXM6IFtdLFxuXHRcdFx0XHRhbGxXaW5MaW5lOiBudWxsLFxuXHRcdFx0XHR3aW5Qb2ludDogMFxuXHRcdFx0fTtcblx0XHRcdGRhdGEuZXhwbG9kZWRDZWxscyA9IHJhd0RhdGEuZXhwbG9kZWRDZWxscztcblx0XHRcdGRhdGEuQ2VsbHMgPSB0aGlzLmNyZWF0ZUNlbGxzUmVzdWx0KHJhd0RhdGEubm9ybWFsR2FtZU1hdHJpeCk7XG5cdFx0XHRpZiAodGhpcy5jdXJyZW50U2Vzc2lvbi5oYXNPd25Qcm9wZXJ0eShcIm5vcm1hbFBheUxpbmVzXCIpKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudFNlc3Npb24ubm9ybWFsUGF5TGluZXMuZm9yRWFjaChub3JtYWxQYXlMaW5lID0+IHtcblx0XHRcdFx0XHRkYXRhLldpbkxpbmVzLnB1c2goXG5cdFx0XHRcdFx0XHRuZXcgRzEwMDlXaW5MaW5lUmVzdWx0KFdJTl9MSU5FX01BUFBJTkdbbm9ybWFsUGF5TGluZS5wd2wgLSAxXS5zbGljZSgwLCBub3JtYWxQYXlMaW5lLnB3cmMpLCBub3JtYWxQYXlMaW5lLnB3YSwgW25vcm1hbFBheUxpbmUucHdsIC0gMV0sIFNMT1RUWV9JVEVNW25vcm1hbFBheUxpbmUucHNjXSwgZmFsc2UsIE5FQVJfV0lOX1NZTUJPTC5pbmNsdWRlcygoU0xPVFRZX0lURU1bbm9ybWFsUGF5TGluZS5wc2NdKSkpKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRkYXRhLldpbkxpbmVzLmZvckVhY2god2luTGluZSA9PiBkYXRhLndpblBvaW50ICs9IHdpbkxpbmUuR2V0V2luUG9pbnQoKSk7XG5cdFx0XHRjb21ib0RhdGEucHVzaChkYXRhKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gY29tYm9EYXRhO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDZWxsc1Jlc3VsdChhcnJJdGVtKSB7XG5cdFx0dmFyIGNlbGxzUmVzdWx0ID0gW107XG5cdFx0Zm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHJvd0NvdW50OyByb3dJbmRleCsrKSB7XG5cdFx0XHRmb3IgKGxldCByZWVsSW5kZXggPSAwOyByZWVsSW5kZXggPCByZWVsQ291bnQ7IHJlZWxJbmRleCsrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gYXJySXRlbVtyZWVsSW5kZXhdW3Jvd0luZGV4XTtcblx0XHRcdFx0bGV0IGNlbGxJbmRleCA9IFNsb3R0eVBhcmFtZXRlci5HZXRDZWxsSW5kZXgocmVlbEluZGV4LCByb3dJbmRleCk7XG5cdFx0XHRcdGNlbGxzUmVzdWx0LnB1c2goU0xPVFRZX0lURU1baXRlbV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY2VsbHNSZXN1bHQ7XG5cdH1cblxuXHRwcml2YXRlIG5leHRTY3JvbGxEYXRhKCk6IHZvaWQge1xuXHRcdGxldCByZXN1bHQgPSB0aGlzLnByb2Nlc3NOb3JtYWxEYXRhKCk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIk5leHRTY3JvbGxEYXRhXCIsIHJlc3VsdCk7XG5cdFx0XHRpZiAocmVzdWx0LmZyZWVzcGluTGVmdCA9PSAwKSB7XG5cdFx0XHRcdHRoaXMuaXNGcmVlc3BpbnMgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LCAxMDApO1xuXHR9XG5cblx0cHJpdmF0ZSBmYWtlQmFsYW5jZVNwaW4oKSB7XG5cdFx0aWYgKCF0aGlzLmlzRnJlZXNwaW5zKSB7XG5cdFx0XHRsZXQgbmV3QmFsYW5jZSA9IEcxMDA5QmFsYW5jZU1vZGVsLkdldEluc3RhbmNlKCkuR2V0QmFsYW5jZSgpIC0gRzEwMDlCZXRNb2RlbC5HZXRJbnN0YW5jZSgpLkdldFRvdGFsQmV0UG9pbnQoKTtcblx0XHRcdEcxMDA5QmFsYW5jZU1vZGVsLkdldEluc3RhbmNlKCkuU2V0QmFsYW5jZShuZXdCYWxhbmNlKTtcblx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiQmFsYW5jZUNoYW5nZVwiLCBuZXdCYWxhbmNlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9uRW5kUm91bmQoKSB7XG5cdFx0bGV0IG5ld0JhbGFuY2UgPSB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5nZXRQbGF5ZXJNb25leSgpO1xuXHRcdEcxMDA5QmFsYW5jZU1vZGVsLkdldEluc3RhbmNlKCkuU2V0QmFsYW5jZShuZXdCYWxhbmNlKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIkJhbGFuY2VDaGFuZ2VcIiwgbmV3QmFsYW5jZSk7XG5cdH1cbn0iXX0=