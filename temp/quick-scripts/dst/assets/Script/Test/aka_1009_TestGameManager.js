
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Test/aka_1009_TestGameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUZXN0XFxha2FfMTAwOV9UZXN0R2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQTBKO0FBRXBKLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTZDLG1DQUFZO0lBV3JEO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBYkQsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixrQkFBWSxHQUFlLElBQUksQ0FBQztRQVM1QixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksb0NBQWUsRUFBRSxDQUFDOztJQUNqRCxDQUFDO0lBRVMsZ0NBQU0sR0FBaEI7UUFBQSxpQkEwQ0M7UUF6Q0csSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsdUNBQWtCLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxJQUF1QjtZQUM5RixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLHVDQUFrQixDQUFDLGtCQUFrQixFQUFFLFVBQUMsSUFBb0I7WUFDM0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLHVDQUFrQixDQUFDLGdCQUFnQixFQUFFLFVBQUMsSUFBb0I7WUFDekYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLHVDQUFrQixDQUFDLGlCQUFpQixFQUFFLFVBQUMsSUFBb0I7WUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLHVDQUFrQixDQUFDLG1CQUFtQixFQUFFLFVBQUMsSUFBWTtZQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsdUNBQWtCLENBQUMsY0FBYyxFQUFFLFVBQUMsSUFBaUM7WUFDcEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLHVDQUFrQixDQUFDLGtCQUFrQixFQUFFLFVBQUMsSUFBc0I7WUFDN0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUksQ0FBQyxjQUFjLElBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RELEtBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0Q7aUJBQU0sSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9DLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDbkM7aUJBQU0sSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hELEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFyRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lEQUNXO0lBTGYsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXdFbkM7SUFBRCxzQkFBQztDQXhFRCxBQXdFQyxDQXhFNEMsRUFBRSxDQUFDLFNBQVMsR0F3RXhEO2tCQXhFb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVNYW5hZ2VyMTAwOSwgR0FNRV9NQU5BR0VSX0VWRU5ULCBQbGF5ZXJEYXRhMTAwOSwgSmFja3BvdEluZm8sIFN0YXJ0R2FtZURhdGExMDA5LCBQb3B1cEluZm9NZXNzYWdlIH0gZnJvbSBcIi4uL0dhbWVNYW5hZ2VyL1Nsb3Q0NS1HYW1lTWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0R2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHNwaW5CdG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBiZXRJZEVkaXRib3g6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZU1hbmFnZXIxMDA5OiBHYW1lTWFuYWdlcjEwMDk7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50U2Vzc2lvbjogUGxheWVyRGF0YTEwMDk7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIxMDA5ID0gbmV3IEdhbWVNYW5hZ2VyMTAwOSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlcjEwMDkucmVnaXN0ZXJFdmVudChHQU1FX01BTkFHRVJfRVZFTlQuU1RBUlRfR0FNRV9TVUNDRVNTLCAoZGF0YTogU3RhcnRHYW1lRGF0YTEwMDkpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NUQVJUX0dBTUVfU1VDQ0VTUycsIGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXNzaW9uID0gZGF0YS5wbGF5ZXJTdGF0ZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5yZWdpc3RlckV2ZW50KEdBTUVfTUFOQUdFUl9FVkVOVC5OT1JNQUxfR0FNRV9SRVNVTFQsIChkYXRhOiBQbGF5ZXJEYXRhMTAwOSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTk9STUFMX0dBTUVfUkVTVUxUJywgZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNlc3Npb24gPSBkYXRhO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIxMDA5LnJlZ2lzdGVyRXZlbnQoR0FNRV9NQU5BR0VSX0VWRU5ULkZSRUVfR0FNRV9SRVNVTFQsIChkYXRhOiBQbGF5ZXJEYXRhMTAwOSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRlJFRV9HQU1FX1JFU1VMVCcsIGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXNzaW9uID0gZGF0YTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5yZWdpc3RlckV2ZW50KEdBTUVfTUFOQUdFUl9FVkVOVC5CT05VU19HQU1FX1JFU1VMVCwgKGRhdGE6IFBsYXllckRhdGExMDA5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCT05VU19HQU1FX1JFU1VMVCcsIGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXNzaW9uID0gZGF0YTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5yZWdpc3RlckV2ZW50KEdBTUVfTUFOQUdFUl9FVkVOVC5QTEFZRVJfTU9ORVlfVVBEQVRFLCAoZGF0YTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQTEFZRVJfTU9ORVlfVVBEQVRFJywgZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5yZWdpc3RlckV2ZW50KEdBTUVfTUFOQUdFUl9FVkVOVC5KQUNLUE9UX1VQREFURSwgKGRhdGE6IHtba2V5OnN0cmluZ106IEphY2twb3RJbmZvfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSkFDS1BPVF9VUERBVEUnLCBkYXRhKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5yZWdpc3RlckV2ZW50KEdBTUVfTUFOQUdFUl9FVkVOVC5QT1BVUF9JTkZPX01FU1NBR0UsIChkYXRhOiBQb3B1cEluZm9NZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQT1BVUF9JTkZPX01FU1NBR0UnLCBkYXRhKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLnNwaW5CdG4ubm9kZS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50U2Vzc2lvbiB8fCB0aGlzLmN1cnJlbnRTZXNzaW9uLmlzRmluaXNoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5ub3JtYWxTcGluKHRoaXMuYmV0SWRFZGl0Ym94LnN0cmluZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50U2Vzc2lvbi5mcmVlR2FtZVJlbWFpbiA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIxMDA5LmZyZWVTcGluKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50U2Vzc2lvbi5ib251c0dhbWVSZW1haW4gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5ib251c1BsYXkoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5zdGFydEdhbWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlcjEwMDkuZ2V0SlBIaXN0b3J5KDAsIDgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldEpQSGlzdG9yeScsIGRhdGEpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIxMDA5LmdldEJldEhpc3RvcnkoMCwgOCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0QmV0SGlzdG9yeScsIGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl19