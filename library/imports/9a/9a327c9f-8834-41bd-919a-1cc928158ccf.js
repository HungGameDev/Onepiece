"use strict";
cc._RF.push(module, '9a327yfiDRBvZGaHMkoFYzP', 'Slot45-GameManager');
// Script/GameManager/Slot45-GameManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager1009 = exports.GAME_MANAGER_EVENT = void 0;
var EventEmitter = require("events");
var Slot45_JoinGameData_1 = require("./Slot45-JoinGameData");
var Slot45_SpinGameData2_1 = require("./Slot45-SpinGameData2");
globalThis.CHEAT_IDX = -1;
exports.GAME_MANAGER_EVENT = {
    'START_GAME_SUCCESS': 'start-game-success',
    'NORMAL_GAME_RESULT': 'normal-game-result',
    'FREE_GAME_RESULT': 'free-game-result',
    'BONUS_GAME_RESULT': 'bonus-game-result',
    'JACKPOT_UPDATE': 'jackpot-update',
    'JACKPOT_SHOW_MULTIPLE': 'jackpot_show_multiple',
    'JACKPOT_HIDE_MULTIPLE': 'jackpot_hide_multiple',
    'PLAYER_MONEY_UPDATE': 'player-money-update',
    'ERROR': 'error',
    'POPUP_INFO_MESSAGE': 'popup-info-message',
};
var GameManager1009 = /** @class */ (function () {
    function GameManager1009() {
        this._emitter = new EventEmitter();
        this.jackpotData = Slot45_JoinGameData_1.default.allJackpotInfos;
        this.jackpotDataOrigin = JSON.parse(JSON.stringify(Slot45_JoinGameData_1.default.allJackpotInfos));
        this.jackpotMessage = JSON.parse(JSON.stringify(Slot45_JoinGameData_1.default.message));
        this.currentBetInfo = Slot45_JoinGameData_1.default.currentBetInfo;
        this.playerMoney = 1000000;
    }
    GameManager1009.getInstance = function () {
        if (GameManager1009.instance === null) {
            GameManager1009.instance = new GameManager1009();
        }
        return GameManager1009.instance;
    };
    GameManager1009.prototype.registerEvent = function (event, listener) {
        this._emitter.on(event, listener);
    };
    GameManager1009.prototype.removeAllListeners = function (event) {
        this._emitter.removeAllListeners(event);
    };
    GameManager1009.prototype.removeAllEvent = function () {
        this._emitter.removeAllListeners();
    };
    GameManager1009.prototype.removeListener = function (event, listener) {
        this._emitter.removeListener(event, listener);
    };
    GameManager1009.prototype.startGame = function () {
        var _this = this;
        var lastSpinData = this.getLastSpinData();
        if (lastSpinData.idxSpinData >= 0) {
            CHEAT_IDX = lastSpinData.idxSpinData;
            this.currentSpinData = this.getNextCurrentSpinData();
            this.currentSpinData.splice(0, this.currentSpinData.length - lastSpinData.lenRemainData - 1);
            CHEAT_IDX = -1;
            Slot45_JoinGameData_1.default.playerState = this.currentSpinData.splice(0, 1)[0];
        }
        setTimeout(function () {
            _this._emitter.emit(exports.GAME_MANAGER_EVENT.START_GAME_SUCCESS, Slot45_JoinGameData_1.default);
        }, random(100, 500));
    };
    GameManager1009.prototype.normalSpin = function (betId) {
        var _this = this;
        this.showMessageJackpot();
        // if (random(1, 100) <= 50)
        // {
        //     this.showMessageJackpot();
        // }
        // else
        // {
        //     this.hideMessageJackpot();
        // }
        //if (!this.currentSpinData || this.currentSpinData.length === 0) {
        var foundBetInfo = Slot45_JoinGameData_1.default.betInfos.find(function (betInfo) {
            return betInfo.betId == betId;
        });
        this.currentBetInfo = foundBetInfo;
        this.currentSpinData = this.getNextCurrentSpinData();
        this.plusJackpot();
        this.plusPlayerMoney(-foundBetInfo.betAmount);
        setTimeout(function () {
            var resultSpin = _this.currentSpinData.splice(0, 1)[0];
            _this.checkWinJackpot(resultSpin);
            _this._emitter.emit(exports.GAME_MANAGER_EVENT.NORMAL_GAME_RESULT, resultSpin);
            _this.storeLastSpinData(CURRENT_IDX_SPIN_DATA, _this.currentSpinData.length);
            _this.checkFinishSession(resultSpin);
        }, random(100, 500));
        // } else {
        //     setTimeout(() => {
        //         this._emitter.emit(GAME_MANAGER_EVENT.ERROR, {code: 400});
        //     }, random(100, 500));
        // }
    };
    GameManager1009.prototype.freeSpin = function () {
        var _this = this;
        if (!this.currentSpinData || this.currentSpinData.length === 0) {
            setTimeout(function () {
                _this._emitter.emit(exports.GAME_MANAGER_EVENT.ERROR, { code: 400 });
            }, random(100, 500));
        }
        else {
            setTimeout(function () {
                var resultSpin = _this.currentSpinData.splice(0, 1)[0];
                _this.checkWinJackpot(resultSpin);
                _this._emitter.emit(exports.GAME_MANAGER_EVENT.FREE_GAME_RESULT, resultSpin);
                _this.storeLastSpinData(CURRENT_IDX_SPIN_DATA, _this.currentSpinData.length);
                _this.checkFinishSession(resultSpin);
            }, random(100, 500));
        }
    };
    /**
     *
     * @param item: 1-12
     */
    GameManager1009.prototype.bonusPlay = function (item) {
        var _this = this;
        if (!this.currentSpinData || this.currentSpinData.length === 0) {
            setTimeout(function () {
                _this._emitter.emit(exports.GAME_MANAGER_EVENT.ERROR, { code: 400 });
            }, random(100, 500));
        }
        else {
            console.log('bonusPlay with item:', item);
            setTimeout(function () {
                var resultSpin = _this.currentSpinData.splice(0, 1)[0];
                _this._emitter.emit(exports.GAME_MANAGER_EVENT.BONUS_GAME_RESULT, resultSpin);
                _this.storeLastSpinData(CURRENT_IDX_SPIN_DATA, _this.currentSpinData.length);
                _this.checkFinishSession(resultSpin);
            }, random(100, 500));
        }
    };
    GameManager1009.prototype.getJPHistory = function (from, size) {
        var jpHistoryList = [];
        var types = ['Nổ Hũ', 'Thăng lớn'];
        for (var i = 0; i < size; i++) {
            jpHistoryList.push({
                session: "#" + (2000 - (i + from)),
                time: Date.now() - (i + from) * 3600 * 1000,
                wonUser: "Nguyen van A" + (i + from),
                win: 50000000 + random(100000, 10000000),
                type: types[Math.floor(Math.random() * types.length)]
            });
        }
        var resultHistory = {
            from: from,
            size: size,
            total: 200,
            data: jpHistoryList,
        };
        return Promise.resolve(resultHistory);
    };
    GameManager1009.prototype.getBetHistory = function (from, size) {
        var betHistoryList = [];
        for (var i = 0; i < size; i++) {
            var betUnit = Slot45_JoinGameData_1.default.betInfos[random(0, 5)].betAmount;
            var lineBet = 20;
            betHistoryList.push({
                session: "#" + (2000 - (i + from)),
                time: Date.now() - (i + from) * 3600 * 1000,
                betUnit: betUnit,
                lineBet: lineBet,
                totalBet: betUnit * lineBet,
                totalWin: random(100000, 10000000),
                lineWin: random(0, lineBet),
                spinData: ["King", "King", "King", "King", "King",
                    "King", "King", "King", "King", "King",
                    "King", "King", "King", "King", "King"]
            });
        }
        var resultHistory = {
            from: from,
            size: size,
            total: 200,
            data: betHistoryList,
        };
        return Promise.resolve(resultHistory);
    };
    GameManager1009.prototype.getPlayerMoney = function () {
        return this.playerMoney;
    };
    GameManager1009.prototype.checkWinJackpot = function (playerData) {
        // if (playerData.info.jackpotPayLine && playerData.info.jackpotPayLine && playerData.info.jackpotPayLine.length > 0) {
        //     this.resetJackpot();
        // }
    };
    GameManager1009.prototype.checkFinishSession = function (playerData) {
        if (playerData.isFinish) {
            var win = playerData.datas[playerData.datas.length - 1].content.win;
            console.warn('checkFinishSession: ', win);
            if (win > 0) {
                this.plusPlayerMoney(win);
            }
        }
    };
    GameManager1009.prototype.plusPlayerMoney = function (money) {
        this.playerMoney += money;
        this._emitter.emit(exports.GAME_MANAGER_EVENT.PLAYER_MONEY_UPDATE, this.playerMoney);
    };
    GameManager1009.prototype.storeLastSpinData = function (idxSpinData, lenRemainData) {
        localStorage.setItem('idxSpinData', idxSpinData.toString());
        localStorage.setItem('lenRemainData', lenRemainData.toString());
    };
    GameManager1009.prototype.getLastSpinData = function () {
        var idxSpinData = localStorage.getItem('idxSpinData') || '-1';
        var lenRemainData = localStorage.getItem('lenRemainData') || '0';
        return {
            idxSpinData: parseInt(idxSpinData),
            lenRemainData: parseInt(lenRemainData),
        };
    };
    GameManager1009.prototype.getNextCurrentSpinData = function () {
        var fakeDatas = Slot45_SpinGameData2_1.default;
        var idx = CHEAT_IDX >= 0 && CHEAT_IDX < fakeDatas.length ? CHEAT_IDX : random(0, fakeDatas.length - 1);
        globalThis.CURRENT_IDX_SPIN_DATA = idx;
        return JSON.parse(JSON.stringify(fakeDatas[idx].data));
    };
    GameManager1009.prototype.plusJackpot = function () {
        var _this = this;
        this.currentBetInfo.jackpotInfos.forEach(function (_a) {
            var jackpotId = _a.jackpotId;
            _this.jackpotData[jackpotId].jackpotAmount += 100;
        });
        setTimeout(function () {
            _this._emitter.emit(exports.GAME_MANAGER_EVENT.JACKPOT_UPDATE, JSON.parse(JSON.stringify(_this.jackpotData)));
        }, 3000);
    };
    GameManager1009.prototype.showMessageJackpot = function () {
        var _this = this;
        setTimeout(function () {
            _this._emitter.emit(exports.GAME_MANAGER_EVENT.JACKPOT_SHOW_MULTIPLE, JSON.parse(JSON.stringify(_this.jackpotMessage)));
        }, 300);
    };
    GameManager1009.prototype.hideMessageJackpot = function () {
        var _this = this;
        setTimeout(function () {
            _this._emitter.emit(exports.GAME_MANAGER_EVENT.JACKPOT_HIDE_MULTIPLE, JSON.parse(JSON.stringify(_this.jackpotMessage)));
        }, 300);
    };
    GameManager1009.prototype.resetJackpot = function () {
        var _this = this;
        this.currentBetInfo.jackpotInfos.forEach(function (_a) {
            var jackpotId = _a.jackpotId;
            _this.jackpotData[jackpotId] = JSON.parse(JSON.stringify(_this.jackpotDataOrigin[jackpotId]));
        });
        setTimeout(function () {
            _this._emitter.emit(exports.GAME_MANAGER_EVENT.JACKPOT_UPDATE, JSON.parse(JSON.stringify(_this.jackpotData)));
        }, 300);
    };
    GameManager1009.instance = null;
    return GameManager1009;
}());
exports.GameManager1009 = GameManager1009;
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

cc._RF.pop();