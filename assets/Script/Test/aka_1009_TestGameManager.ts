import { GameManager1009, GAME_MANAGER_EVENT, PlayerData1009, JackpotInfo, StartGameData1009, PopupInfoMessage } from "../GameManager/Slot45-GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestGameManager extends cc.Component {
    @property(cc.Button)
    spinBtn: cc.Button = null;

    @property(cc.EditBox)
    betIdEditbox: cc.EditBox = null;

    private gameManager1009: GameManager1009;

    private currentSession: PlayerData1009;

    constructor () {
        super();

        this.gameManager1009 = new GameManager1009();
    }

    protected onLoad(): void {
        this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.START_GAME_SUCCESS, (data: StartGameData1009) => {
            console.log('START_GAME_SUCCESS', data);
            this.currentSession = data.playerState;
        })

        this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.NORMAL_GAME_RESULT, (data: PlayerData1009) => {
            console.log('NORMAL_GAME_RESULT', data);
            this.currentSession = data;
        })

        this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.FREE_GAME_RESULT, (data: PlayerData1009) => {
            console.log('FREE_GAME_RESULT', data);
            this.currentSession = data;
        })

        this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.BONUS_GAME_RESULT, (data: PlayerData1009) => {
            console.log('BONUS_GAME_RESULT', data);
            this.currentSession = data;
        })

        this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.PLAYER_MONEY_UPDATE, (data: number) => {
            console.log('PLAYER_MONEY_UPDATE', data);
        })
        
        this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.JACKPOT_UPDATE, (data: {[key:string]: JackpotInfo}) => {
            console.log('JACKPOT_UPDATE', data);
        })

        this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.POPUP_INFO_MESSAGE, (data: PopupInfoMessage) => {
            console.log('POPUP_INFO_MESSAGE', data);
        })

        this.spinBtn.node.on('click', () => {
            if (!this.currentSession || this.currentSession.isFinish) {
                this.gameManager1009.normalSpin(this.betIdEditbox.string);
            } else if (this.currentSession.freeGameRemain > 0) {
                this.gameManager1009.freeSpin();
            } else if (this.currentSession.bonusGameRemain > 0) {
                this.gameManager1009.bonusPlay(1);
            }
        })
    }

    start () {
        this.gameManager1009.startGame();

        this.gameManager1009.getJPHistory(0, 8).then((data) => {
            console.log('getJPHistory', data);
        })

        this.gameManager1009.getBetHistory(0, 8).then((data) => {
            console.log('getBetHistory', data);
        })
    }
}
