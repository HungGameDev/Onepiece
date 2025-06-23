"use strict";
cc._RF.push(module, '429d1czUfhEQakpVfbe/yTd', 'aka_1009_TestGameManager');
// Script/Test/aka_1009_TestGameManager.ts

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
var Slot45_GameManager_1 = require("../GameManager/Slot45-GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TestGameManager = /** @class */ (function (_super) {
    __extends(TestGameManager, _super);
    function TestGameManager() {
        var _this = _super.call(this) || this;
        _this.spinBtn = null;
        _this.betIdEditbox = null;
        _this.gameManager1009 = new Slot45_GameManager_1.GameManager1009();
        return _this;
    }
    TestGameManager.prototype.onLoad = function () {
        var _this = this;
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.START_GAME_SUCCESS, function (data) {
            console.log('START_GAME_SUCCESS', data);
            _this.currentSession = data.playerState;
        });
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.NORMAL_GAME_RESULT, function (data) {
            console.log('NORMAL_GAME_RESULT', data);
            _this.currentSession = data;
        });
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.FREE_GAME_RESULT, function (data) {
            console.log('FREE_GAME_RESULT', data);
            _this.currentSession = data;
        });
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.BONUS_GAME_RESULT, function (data) {
            console.log('BONUS_GAME_RESULT', data);
            _this.currentSession = data;
        });
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.PLAYER_MONEY_UPDATE, function (data) {
            console.log('PLAYER_MONEY_UPDATE', data);
        });
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.JACKPOT_UPDATE, function (data) {
            console.log('JACKPOT_UPDATE', data);
        });
        this.gameManager1009.registerEvent(Slot45_GameManager_1.GAME_MANAGER_EVENT.POPUP_INFO_MESSAGE, function (data) {
            console.log('POPUP_INFO_MESSAGE', data);
        });
        this.spinBtn.node.on('click', function () {
            if (!_this.currentSession || _this.currentSession.isFinish) {
                _this.gameManager1009.normalSpin(_this.betIdEditbox.string);
            }
            else if (_this.currentSession.freeGameRemain > 0) {
                _this.gameManager1009.freeSpin();
            }
            else if (_this.currentSession.bonusGameRemain > 0) {
                _this.gameManager1009.bonusPlay(1);
            }
        });
    };
    TestGameManager.prototype.start = function () {
        this.gameManager1009.startGame();
        this.gameManager1009.getJPHistory(0, 8).then(function (data) {
            console.log('getJPHistory', data);
        });
        this.gameManager1009.getBetHistory(0, 8).then(function (data) {
            console.log('getBetHistory', data);
        });
    };
    __decorate([
        property(cc.Button)
    ], TestGameManager.prototype, "spinBtn", void 0);
    __decorate([
        property(cc.EditBox)
    ], TestGameManager.prototype, "betIdEditbox", void 0);
    TestGameManager = __decorate([
        ccclass
    ], TestGameManager);
    return TestGameManager;
}(cc.Component));
exports.default = TestGameManager;

cc._RF.pop();