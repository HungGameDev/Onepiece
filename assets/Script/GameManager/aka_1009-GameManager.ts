import EventEmitter = require('events');

import joinGameData from './aka_1009-JoinGameData';
import spinGameData from './aka_1009-SpinGameData2';

declare global {
    // eslint-disable-next-line no-var
    var CHEAT_IDX: number;
    // eslint-disable-next-line no-var
    var CURRENT_IDX_SPIN_DATA: number;
}

globalThis.CHEAT_IDX = -1;

export const GAME_MANAGER_EVENT = {
    'START_GAME_SUCCESS' : 'start-game-success',
    'NORMAL_GAME_RESULT' : 'normal-game-result',
    'FREE_GAME_RESULT' : 'free-game-result',
    'BONUS_GAME_RESULT' : 'bonus-game-result',

    'JACKPOT_UPDATE': 'jackpot-update',
    'JACKPOT_SHOW_MULTIPLE': 'jackpot_show_multiple',
    'JACKPOT_HIDE_MULTIPLE' : 'jackpot_hide_multiple',
    'PLAYER_MONEY_UPDATE' : 'player-money-update',
    
    'ERROR' : 'error',
    'POPUP_INFO_MESSAGE' : 'popup-info-message',
}

export class GameManager1009 {
    protected _emitter: EventEmitter;
    protected jackpotData: {[key:string]: JackpotInfo};
    protected jackpotDataOrigin: {[key:string]: JackpotInfo};
    protected jackpotMessage: {[key:string]: JackpotMessage};
    protected playerMoney: number;
    
    protected currentSpinData: PlayerData1009[];
    protected currentBetInfo: BetInfo;

    static instance: GameManager1009 = null;
    static getInstance(){
        if(GameManager1009.instance === null){
            GameManager1009.instance =  new GameManager1009();
        }
        return GameManager1009.instance;
    }

    constructor () {
        this._emitter = new EventEmitter();

        this.jackpotData = joinGameData.allJackpotInfos;
        this.jackpotDataOrigin = JSON.parse(JSON.stringify(joinGameData.allJackpotInfos));
        this.jackpotMessage = JSON.parse(JSON.stringify(joinGameData.message));
        this.currentBetInfo = joinGameData.currentBetInfo;

        this.playerMoney = 1000000;
    }

    registerEvent(event: string, listener: (...args: unknown[]) => void) {
        this._emitter.on(event, listener);
    }

    removeAllListeners(event: string) {
        this._emitter.removeAllListeners(event);
    }

    removeAllEvent() {
        this._emitter.removeAllListeners();
    }

    removeListener(event: string, listener: (...args: unknown[]) => void) {
        this._emitter.removeListener(event, listener);
    }

    startGame() {
        const lastSpinData = this.getLastSpinData();

        if (lastSpinData.idxSpinData >= 0) {
            CHEAT_IDX = lastSpinData.idxSpinData;
            this.currentSpinData = this.getNextCurrentSpinData();
            this.currentSpinData.splice(0, this.currentSpinData.length - lastSpinData.lenRemainData - 1);
            CHEAT_IDX = -1;
            joinGameData.playerState = this.currentSpinData.splice(0,1)[0];
        }


        setTimeout(() => {
            this._emitter.emit(GAME_MANAGER_EVENT.START_GAME_SUCCESS, joinGameData)
        }, random(100, 500));
    }

    normalSpin(betId: string) {
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
            const foundBetInfo = joinGameData.betInfos.find((betInfo) => {
                return betInfo.betId == betId;
            })

            this.currentBetInfo = foundBetInfo;

            this.currentSpinData = this.getNextCurrentSpinData();
            this.plusJackpot();
            this.plusPlayerMoney(-foundBetInfo.betAmount)
            setTimeout(() => {
                const resultSpin: PlayerData1009 = this.currentSpinData.splice(0,1)[0];

                this.checkWinJackpot(resultSpin);

                this._emitter.emit(GAME_MANAGER_EVENT.NORMAL_GAME_RESULT, resultSpin);
                this.storeLastSpinData(CURRENT_IDX_SPIN_DATA, this.currentSpinData.length);

                this.checkFinishSession(resultSpin);
            }, random(100, 500));

        // } else {
        //     setTimeout(() => {
        //         this._emitter.emit(GAME_MANAGER_EVENT.ERROR, {code: 400});
        //     }, random(100, 500));
        // }
    }

    freeSpin() {
        if (!this.currentSpinData || this.currentSpinData.length === 0) {
            setTimeout(() => {
                this._emitter.emit(GAME_MANAGER_EVENT.ERROR, {code: 400});
            }, random(100, 500));
        } else {
            setTimeout(() => {
                const resultSpin = this.currentSpinData.splice(0,1)[0];

                this.checkWinJackpot(resultSpin);

                this._emitter.emit(GAME_MANAGER_EVENT.FREE_GAME_RESULT, resultSpin);
                this.storeLastSpinData(CURRENT_IDX_SPIN_DATA, this.currentSpinData.length);

                this.checkFinishSession(resultSpin);
            }, random(100, 500));
        }
    }

    /**
     * 
     * @param item: 1-12
     */
    bonusPlay(item: number) {
        if (!this.currentSpinData || this.currentSpinData.length === 0) {
            setTimeout(() => {
                this._emitter.emit(GAME_MANAGER_EVENT.ERROR, {code: 400});
            }, random(100, 500));
        } else {
            console.log('bonusPlay with item:', item);
            setTimeout(() => { // bonus increasement index
                const resultSpin = this.currentSpinData.splice(0,1)[0];
                this._emitter.emit(GAME_MANAGER_EVENT.BONUS_GAME_RESULT, resultSpin);
                this.storeLastSpinData(CURRENT_IDX_SPIN_DATA, this.currentSpinData.length);

                this.checkFinishSession(resultSpin);
            }, random(100, 500));
        }
    }

    getJPHistory(from: number, size: number) : Promise<{
        data: JPHistory[],
        from: number,
        size: number,
        total: number,
    }> {
        const jpHistoryList: JPHistory[] = [];

        var types = ['Nổ Hũ','Thăng lớn'];
     
        for (let i = 0; i < size; i++) {
            jpHistoryList.push({
                session: `#${2000 - (i + from)}`,
                time: Date.now() - (i + from) * 3600 * 1000,
                wonUser: `Nguyen van A${i + from}`,     
                win: 50000000 + random(100000, 10000000),
                type: types[Math.floor(Math.random() * types.length)]
            })
        }

        const resultHistory: {
            data: JPHistory[],
            from: number,
            size: number,
            total: number,
        } = {
            from,
            size,
            total: 200,
            data: jpHistoryList,
        };
        return Promise.resolve(resultHistory);
    }

    getBetHistory(from: number,size: number): Promise<{
        data: BetHistory[],
        from: number,
        size: number,
        total: number,
    }>{
        const betHistoryList: BetHistory[] = [];

        for (let i = 0; i < size; i++) {
            const betUnit = joinGameData.betInfos[random(0,5)].betAmount;
            const lineBet = 20;
            betHistoryList.push(
                { 
                    session: `#${2000 - (i + from)}`,
                    time: Date.now() - (i + from) * 3600 * 1000, 
                    betUnit, 
                    lineBet, 
                    totalBet: betUnit * lineBet, 
                    totalWin: random(100000, 10000000), 
                    lineWin: random(0, lineBet),
                    spinData: ["King", "King", "King", "King", "King",
                        "King", "King", "King", "King", "King",
                        "King", "King", "King", "King", "King"]
                }
            )
        }

        const resultHistory: {
            data: BetHistory[],
            from: number,
            size: number,
            total: number,
        } = {
            from,
            size,
            total: 200,
            data: betHistoryList,
        };
        return Promise.resolve(resultHistory);
    }

    getPlayerMoney(): number {
        return this.playerMoney;
    }

    private checkWinJackpot(playerData: PlayerData1009) {
        // if (playerData.info.jackpotPayLine && playerData.info.jackpotPayLine && playerData.info.jackpotPayLine.length > 0) {
        //     this.resetJackpot();
        // }
    }

    private checkFinishSession(playerData: PlayerData1009) {
        if (playerData.isFinish) {
            var win = playerData.datas[playerData.datas.length - 1].content.win;
            console.warn('checkFinishSession: ', win);
            if (win > 0) {
                this.plusPlayerMoney(win);
            }
        }
    }

    private plusPlayerMoney(money: number) {
        this.playerMoney += money;
        this._emitter.emit(GAME_MANAGER_EVENT.PLAYER_MONEY_UPDATE, this.playerMoney);
    }

    private storeLastSpinData(idxSpinData: number, lenRemainData: number) {
        localStorage.setItem('idxSpinData', idxSpinData.toString());
        localStorage.setItem('lenRemainData', lenRemainData.toString());
    }

    private getLastSpinData(): {idxSpinData: number, lenRemainData: number} {
        const idxSpinData = localStorage.getItem('idxSpinData') || '-1';
        const lenRemainData = localStorage.getItem('lenRemainData') || '0';

        return {
            idxSpinData: parseInt(idxSpinData),
            lenRemainData: parseInt(lenRemainData),
        }
    }

    private getNextCurrentSpinData(): PlayerData1009[] {
        var fakeDatas = spinGameData;
        const idx = CHEAT_IDX >= 0 && CHEAT_IDX < fakeDatas.length ? CHEAT_IDX : random(0, fakeDatas.length-1);
        globalThis.CURRENT_IDX_SPIN_DATA = idx;
        return JSON.parse(JSON.stringify(fakeDatas[idx].data));
    }

    private plusJackpot() {
        this.currentBetInfo.jackpotInfos.forEach(({jackpotId}) => {
            this.jackpotData[jackpotId].jackpotAmount += 100;
        })

        setTimeout(() => {
            this._emitter.emit(GAME_MANAGER_EVENT.JACKPOT_UPDATE, JSON.parse(JSON.stringify(this.jackpotData)));
        }, 3000)
    }

    private showMessageJackpot()
    {
        setTimeout(() => {
            this._emitter.emit(GAME_MANAGER_EVENT.JACKPOT_SHOW_MULTIPLE, JSON.parse(JSON.stringify(this.jackpotMessage)));
        }, 300)
    }

    private hideMessageJackpot()
    {
        setTimeout(() => {
            this._emitter.emit(GAME_MANAGER_EVENT.JACKPOT_HIDE_MULTIPLE, JSON.parse(JSON.stringify(this.jackpotMessage)));
        }, 300)
    }

    private resetJackpot() {
        this.currentBetInfo.jackpotInfos.forEach(({jackpotId}) => {
            this.jackpotData[jackpotId] = JSON.parse(JSON.stringify(this.jackpotDataOrigin[jackpotId]));
        })

        setTimeout(() => {
            this._emitter.emit(GAME_MANAGER_EVENT.JACKPOT_UPDATE, JSON.parse(JSON.stringify(this.jackpotData)));
        }, 300)
    }
}

function random(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
}

export interface JackpotInfo {
    jackpotId: string;
    jackpotAmount: number;
   
    level: number;
}
export interface JackpotMessage {
    jackpotId: string;
    message: string;
}

export interface BetInfo {
    betId: string;
    betAmount: number;
    jackpotInfos: JackpotInfo[];
}

export interface JoinGameModel<T> {
    betInfos: BetInfo[];
    currentBetInfo: BetInfo;
    allJackpotInfos : {[key:string]: JackpotInfo};
    playerState: T;
}

export interface JPHistory {
    session: string,
    time: number,
    wonUser: string,
    win: number,
    type: string
}

export interface BetHistory { 
    session: string,
    time: number,
    betUnit: number,
    lineBet: number,
    totalBet: number,
    totalWin: number, 
    lineWin: number,
    spinData:string[]
}

// export interface PlayerData1009 {
//     state: number
//     betId: string
//     normalGameMatrix: string[]
//     betDenom: number
//     isFinish: boolean
//     gameNum: string
//     data: Data
//     idx: number
//     bonusGameRemain: number
//     bonusGameTotal: number
//     totalWinAmount: number
//     normalPayLines: NormalPayLine[]
//     normalWinAmount: number
//     freeGameRemain: number
//     freeGameTotal: number
//     freeGameMatrix: string[]
//     freeWinAmount: number
//     freeGamePaylines: FreeGamePayline[]
//     jackpotPayLine: string[]
// }
export interface PlayerData1009 {
    datas: any[]
    info: any
    isFinish: boolean
}

export interface Data {
    scatterCountNormal: number
    normalMatrixOrigin: string[]
    multiplierBonus: number
    scatterCountFree: number
    freeMatrixOrigin: string[]
}

export interface NormalPayLine {
    psc: string
    pwa: number
    pwrc: number
    pwl: number
    pm: number
}

export interface FreeGamePayline {
    psc: string
    pwa: number
    pwrc: number
    pwl: number
    pm: number
}

export interface StartGameData1009 {
    allJackpotInfos: { [key: string]: JackpotInfo }
    betInfos: BetInfo[]
    currentBetInfo: CurrentBetInfo
    playerState: PlayerData1009
}

export interface BetInfo {
    betId: string
    betAmount: number
    betDenom: number
    jackpotInfos: JackpotInfo[]
}

export interface CurrentBetInfo {
    betId: string
    betAmount: number
    betDenom: number
    jackpotInfos: JackpotInfo[]
}

export interface PopupInfoMessage {
    type: 'info' | 'close-game',
    message: string,
}