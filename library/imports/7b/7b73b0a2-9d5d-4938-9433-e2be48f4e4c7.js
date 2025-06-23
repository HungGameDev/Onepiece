"use strict";
cc._RF.push(module, '7b73bCinV1JOJQz4r5I9OTH', 'Slot45-connect-server');
// Script/base/Slot45-connect-server.ts

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
var Slot45_GameManager_1 = require("../GameManager/Slot45-GameManager");
var Slot45_present_win_panel_1 = require("../UI/present-win/Slot45-present-win-panel");
var Slot45_game_config_1 = require("../Slot45-game-config");
var combo_data_1 = require("../avenger-game/model/combo-data");
var Slot45_balance_model_1 = require("../models/Slot45-balance-model");
var Slot45_bet_model_1 = require("../models/Slot45-bet-model");
var Slot45_event_manager_1 = require("./events/Slot45-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.SLOTTY_ITEM = {
    'Bonus': 'Bonus',
    'Scatter': 'Scatter',
    'Jackpot': 'Jackpot',
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
        _this.gameManager1009 = Slot45_GameManager_1.GameManager1009.getInstance();
        return _this;
    }
    ConnectServer.prototype.onLoad = function () {
        this.register();
    };
    ConnectServer.prototype.start = function () {
        var _this = this;
        //hard set bet multipliser = 9
        Slot45_bet_model_1.Slot45BetModel.GetInstance().SetBetMultiplier(exports.WIN_LINE_MAPPING.length);
        this.gameManager1009.startGame();
        // this.gameManager1009.getJPHistory(0, 8).then((data) => {
        // 	console.log('getJPHistory', data);
        // })
        // this.gameManager1009.getBetHistory(0, 8).then((data) => {
        // 	console.log('getBetHistory', data);
        // })
        if (this.dataJackpot) {
            setTimeout(function () {
                Slot45_event_manager_1.Slot45EventManager.GetInstance().notify('JackpotUpdate', _this.dataJackpot);
            }, 100);
        }
    };
    ConnectServer.prototype.register = function () {
        var _this = this;
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.START_GAME_SUCCESS, function (data) {
            console.log('START_GAME_SUCCESS', data);
            _this.currentSession = data.playerState;
            _this.betInfos = data.betInfos;
            var betPerLines = data.betInfos.map(function (betInfo) { return betInfo.betDenom; });
            Slot45_bet_model_1.Slot45BetModel.GetInstance().SetBetPerLines(betPerLines);
            Slot45_balance_model_1.Slot45BalanceModel.GetInstance().SetBalance(_this.gameManager1009.getPlayerMoney());
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("BetInfos", _this.betInfos);
            if (data.hasOwnProperty("playerState") && data.playerState) {
                // Slot45BetModel.GetInstance().SetCurrentBetPerLine(data.playerState.datas[0].content.bet);
                Slot45_bet_model_1.Slot45BetModel.GetInstance().SetCurrentBetPerLine(100);
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
                    Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("resume", resuilt);
                }, 100);
            }
            else {
                if (_this.currentSession && _this.currentSession.hasOwnProperty("bonusGameRemain") && _this.currentSession.bonusGameRemain > 0) {
                    setTimeout(function () {
                        var resuilt = _this.processNormalData();
                        resuilt.featureDatas = [];
                        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("resumeBonus", resuilt);
                    }, 100);
                }
                else {
                    Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("init");
                }
            }
        });
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.NORMAL_GAME_RESULT, function (data) {
            console.log('NORMAL_GAME_RESULT', data);
            _this.currentSession = data;
            _this.nextScrollData();
        });
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.FREE_GAME_RESULT, function (data) {
            console.log('FREE_GAME_RESULT', data);
            _this.currentSession = data;
            _this.nextScrollData();
        });
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.BONUS_GAME_RESULT, function (data) {
            console.log('BONUS_GAME_RESULT', data);
            _this.currentSession = data;
            _this.nextScrollData();
        });
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.PLAYER_MONEY_UPDATE, function (data) {
            console.log('PLAYER_MONEY_UPDATE', data);
            // Slot45BalanceModel.GetInstance().SetBalance(data);
            // Slot45EventManager.GetInstance().notify("BalanceChange", data);
        });
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.JACKPOT_UPDATE, function (data) {
            console.log('JACKPOT_UPDATE', data);
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify('JackpotUpdate', data);
        });
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.JACKPOT_SHOW_MULTIPLE, function (data) {
            console.log('JACKPOT_SHOW_MULTIPLE', data);
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify('JackpotShowMultiple', data);
        });
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.JACKPOT_HIDE_MULTIPLE, function (data) {
            console.log('JACKPOT_SHOW_MULTIPLE', data);
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify('JackpotHideMultiple');
        });
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.POPUP_INFO_MESSAGE, function (data) {
            console.log('POPUP_INFO_MESSAGE', data);
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify('PopupInfoMessage', data);
        });
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SpinRequest", this.onSpinRequest.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("PickUpRequest", this.onPickUpRequest.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("EndRound", this.onEndRound.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ShowBetPanel", this.onEndRound.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("UpdateBetLine", this.onUpdateBetLine.bind(this));
    };
    ConnectServer.prototype.onUpdateBetLine = function (betLines) {
        Slot45_bet_model_1.Slot45BetModel.GetInstance().SetBetMultiplier(betLines.length);
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ShowBetPanel");
    };
    ConnectServer.prototype.onPickUpRequest = function (item) {
        this.gameManager1009.bonusPlay(item);
    };
    ConnectServer.prototype.onSpinRequest = function (requestData) {
        if (requestData.isFreespin) {
            this.gameManager1009.freeSpin();
        }
        else {
            var betDenom_1 = Slot45_bet_model_1.Slot45BetModel.GetInstance().GetCurrentBetPerLine();
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
                    var winLineData = new Slot45_present_win_panel_1.Slot45WinLineResult(content.hitSet, content.pay, arrNumber, content.what);
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
                        winScatters.push(new Slot45_present_win_panel_1.Slot45WinLineResult(element.content.trigger.hitSet, 0, [-1], "Scatter", false, true));
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
                    winBonus.push(new Slot45_present_win_panel_1.Slot45WinLineResult(element.content.trigger.hitSet, element.content.pay, [-1], "Bonus", false, true));
                    break;
                case "jackpotWin":
                    var content = element.content;
                    var arrNumber = [];
                    arrNumber.push(content.hitSetID);
                    var winLineData = new Slot45_present_win_panel_1.Slot45WinLineResult(content.hitSet, content.pay, arrNumber, content.what);
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
                WinLines.push(new Slot45_present_win_panel_1.Slot45WinLineResult(exports.WIN_LINE_MAPPING[normalPayLine.pwl - 1].slice(0, normalPayLine.pwrc), normalPayLine.pwa, [normalPayLine.pwl - 1], exports.SLOTTY_ITEM[normalPayLine.psc], false, Slot45_game_config_1.NEAR_WIN_SYMBOL.includes((exports.SLOTTY_ITEM[normalPayLine.psc]))));
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
                winScatters.push(new Slot45_present_win_panel_1.Slot45WinLineResult(scatters, 0, [-1], "Scatter", false, true));
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
                winBonus.push(new Slot45_present_win_panel_1.Slot45WinLineResult(bonus, 0, [-1], "Bonus", false, true));
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
            jackpotWinLine.push(new Slot45_present_win_panel_1.Slot45WinLineResult(coreWinLine_1, 0, [winLineNumber], "Core", false, true));
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
                for (var reelIndex = 0; reelIndex < Slot45_game_config_1.reelCount; reelIndex++) {
                    for (var rowIndex = 0; rowIndex < Slot45_game_config_1.rowCount; rowIndex++) {
                        var cellIndex = Slot45_game_config_1.SlottyParameter.GetCellIndex(reelIndex, rowIndex);
                        newCellsResult[cellIndex] = items_1[count++];
                    }
                }
                for (var reelIndex = 0; reelIndex < Slot45_game_config_1.reelCount; reelIndex++) {
                    var count_1 = 0;
                    for (var rowIndex = 0; rowIndex < Slot45_game_config_1.rowCount; rowIndex++) {
                        var cellIndex = Slot45_game_config_1.SlottyParameter.GetCellIndex(reelIndex, rowIndex);
                        if (cellsResult[cellIndex] == "Core") {
                            count_1++;
                            if (count_1 == 3) {
                                isExpandWild = true;
                                var indices = [];
                                for (var newRowIndex = 0; newRowIndex < Slot45_game_config_1.rowCount; newRowIndex++) {
                                    var newCellIndex = Slot45_game_config_1.SlottyParameter.GetCellIndex(reelIndex, newRowIndex);
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
                    data.WinLines.push(new Slot45_present_win_panel_1.Slot45WinLineResult(exports.WIN_LINE_MAPPING[normalPayLine.pwl - 1].slice(0, normalPayLine.pwrc), normalPayLine.pwa, [normalPayLine.pwl - 1], exports.SLOTTY_ITEM[normalPayLine.psc], false, Slot45_game_config_1.NEAR_WIN_SYMBOL.includes((exports.SLOTTY_ITEM[normalPayLine.psc]))));
                });
            }
            data.WinLines.forEach(function (winLine) { return data.winPoint += winLine.GetWinPoint(); });
            comboData.push(data);
        });
        return comboData;
    };
    ConnectServer.prototype.createCellsResult = function (arrItem) {
        var cellsResult = [];
        for (var rowIndex = 0; rowIndex < Slot45_game_config_1.rowCount; rowIndex++) {
            for (var reelIndex = 0; reelIndex < Slot45_game_config_1.reelCount; reelIndex++) {
                var item = arrItem[reelIndex][rowIndex];
                var cellIndex = Slot45_game_config_1.SlottyParameter.GetCellIndex(reelIndex, rowIndex);
                cellsResult.push(exports.SLOTTY_ITEM[item]);
            }
        }
        return cellsResult;
    };
    ConnectServer.prototype.nextScrollData = function () {
        var _this = this;
        var result = this.processNormalData();
        setTimeout(function () {
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("NextScrollData", result);
            if (result.freespinLeft == 0) {
                _this.isFreespins = false;
            }
        }, 100);
    };
    ConnectServer.prototype.fakeBalanceSpin = function () {
        if (!this.isFreespins) {
            var newBalance = Slot45_balance_model_1.Slot45BalanceModel.GetInstance().GetBalance() - Slot45_bet_model_1.Slot45BetModel.GetInstance().GetTotalBetPoint();
            Slot45_balance_model_1.Slot45BalanceModel.GetInstance().SetBalance(newBalance);
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("BalanceChange", newBalance);
        }
    };
    ConnectServer.prototype.onEndRound = function () {
        var newBalance = this.gameManager1009.getPlayerMoney();
        Slot45_balance_model_1.Slot45BalanceModel.GetInstance().SetBalance(newBalance);
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("BalanceChange", newBalance);
    };
    ConnectServer = __decorate([
        ccclass
    ], ConnectServer);
    return ConnectServer;
}(cc.Component));
exports.default = ConnectServer;

cc._RF.pop();