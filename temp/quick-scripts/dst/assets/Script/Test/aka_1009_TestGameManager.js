
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
var aka_1009_GameManager_1 = require("../GameManager/aka_1009-GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TestGameManager = /** @class */ (function (_super) {
    __extends(TestGameManager, _super);
    function TestGameManager() {
        var _this = _super.call(this) || this;
        _this.spinBtn = null;
        _this.betIdEditbox = null;
        _this.gameManager1009 = new aka_1009_GameManager_1.GameManager1009();
        return _this;
    }
    TestGameManager.prototype.onLoad = function () {
        var _this = this;
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.START_GAME_SUCCESS, function (data) {
            console.log('START_GAME_SUCCESS', data);
            _this.currentSession = data.playerState;
        });
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.NORMAL_GAME_RESULT, function (data) {
            console.log('NORMAL_GAME_RESULT', data);
            _this.currentSession = data;
        });
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.FREE_GAME_RESULT, function (data) {
            console.log('FREE_GAME_RESULT', data);
            _this.currentSession = data;
        });
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.BONUS_GAME_RESULT, function (data) {
            console.log('BONUS_GAME_RESULT', data);
            _this.currentSession = data;
        });
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.PLAYER_MONEY_UPDATE, function (data) {
            console.log('PLAYER_MONEY_UPDATE', data);
        });
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.JACKPOT_UPDATE, function (data) {
            console.log('JACKPOT_UPDATE', data);
        });
        this.gameManager1009.registerEvent(aka_1009_GameManager_1.GAME_MANAGER_EVENT.POPUP_INFO_MESSAGE, function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVGVzdC9ha2FfMTAwOV9UZXN0R2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQTRKO0FBRXRKLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTZDLG1DQUFZO0lBV3JEO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBYkQsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixrQkFBWSxHQUFlLElBQUksQ0FBQztRQVM1QixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksc0NBQWUsRUFBRSxDQUFDOztJQUNqRCxDQUFDO0lBRVMsZ0NBQU0sR0FBaEI7UUFBQSxpQkEwQ0M7UUF6Q0csSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMseUNBQWtCLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxJQUF1QjtZQUM5RixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLHlDQUFrQixDQUFDLGtCQUFrQixFQUFFLFVBQUMsSUFBb0I7WUFDM0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLHlDQUFrQixDQUFDLGdCQUFnQixFQUFFLFVBQUMsSUFBb0I7WUFDekYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLHlDQUFrQixDQUFDLGlCQUFpQixFQUFFLFVBQUMsSUFBb0I7WUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLHlDQUFrQixDQUFDLG1CQUFtQixFQUFFLFVBQUMsSUFBWTtZQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMseUNBQWtCLENBQUMsY0FBYyxFQUFFLFVBQUMsSUFBaUM7WUFDcEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLHlDQUFrQixDQUFDLGtCQUFrQixFQUFFLFVBQUMsSUFBc0I7WUFDN0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUksQ0FBQyxjQUFjLElBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RELEtBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0Q7aUJBQU0sSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9DLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDbkM7aUJBQU0sSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hELEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFyRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lEQUNXO0lBTGYsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXdFbkM7SUFBRCxzQkFBQztDQXhFRCxBQXdFQyxDQXhFNEMsRUFBRSxDQUFDLFNBQVMsR0F3RXhEO2tCQXhFb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVNYW5hZ2VyMTAwOSwgR0FNRV9NQU5BR0VSX0VWRU5ULCBQbGF5ZXJEYXRhMTAwOSwgSmFja3BvdEluZm8sIFN0YXJ0R2FtZURhdGExMDA5LCBQb3B1cEluZm9NZXNzYWdlIH0gZnJvbSBcIi4uL0dhbWVNYW5hZ2VyL2FrYV8xMDA5LUdhbWVNYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHNwaW5CdG46IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBiZXRJZEVkaXRib3g6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBnYW1lTWFuYWdlcjEwMDk6IEdhbWVNYW5hZ2VyMTAwOTtcblxuICAgIHByaXZhdGUgY3VycmVudFNlc3Npb246IFBsYXllckRhdGExMDA5O1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIxMDA5ID0gbmV3IEdhbWVNYW5hZ2VyMTAwOSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIxMDA5LnJlZ2lzdGVyRXZlbnQoR0FNRV9NQU5BR0VSX0VWRU5ULlNUQVJUX0dBTUVfU1VDQ0VTUywgKGRhdGE6IFN0YXJ0R2FtZURhdGExMDA5KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU1RBUlRfR0FNRV9TVUNDRVNTJywgZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXNzaW9uID0gZGF0YS5wbGF5ZXJTdGF0ZTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5yZWdpc3RlckV2ZW50KEdBTUVfTUFOQUdFUl9FVkVOVC5OT1JNQUxfR0FNRV9SRVNVTFQsIChkYXRhOiBQbGF5ZXJEYXRhMTAwOSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05PUk1BTF9HQU1FX1JFU1VMVCcsIGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2Vzc2lvbiA9IGRhdGE7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlcjEwMDkucmVnaXN0ZXJFdmVudChHQU1FX01BTkFHRVJfRVZFTlQuRlJFRV9HQU1FX1JFU1VMVCwgKGRhdGE6IFBsYXllckRhdGExMDA5KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRlJFRV9HQU1FX1JFU1VMVCcsIGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2Vzc2lvbiA9IGRhdGE7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlcjEwMDkucmVnaXN0ZXJFdmVudChHQU1FX01BTkFHRVJfRVZFTlQuQk9OVVNfR0FNRV9SRVNVTFQsIChkYXRhOiBQbGF5ZXJEYXRhMTAwOSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0JPTlVTX0dBTUVfUkVTVUxUJywgZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXNzaW9uID0gZGF0YTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5yZWdpc3RlckV2ZW50KEdBTUVfTUFOQUdFUl9FVkVOVC5QTEFZRVJfTU9ORVlfVVBEQVRFLCAoZGF0YTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUExBWUVSX01PTkVZX1VQREFURScsIGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlcjEwMDkucmVnaXN0ZXJFdmVudChHQU1FX01BTkFHRVJfRVZFTlQuSkFDS1BPVF9VUERBVEUsIChkYXRhOiB7W2tleTpzdHJpbmddOiBKYWNrcG90SW5mb30pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdKQUNLUE9UX1VQREFURScsIGRhdGEpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIxMDA5LnJlZ2lzdGVyRXZlbnQoR0FNRV9NQU5BR0VSX0VWRU5ULlBPUFVQX0lORk9fTUVTU0FHRSwgKGRhdGE6IFBvcHVwSW5mb01lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQT1BVUF9JTkZPX01FU1NBR0UnLCBkYXRhKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNwaW5CdG4ubm9kZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFNlc3Npb24gfHwgdGhpcy5jdXJyZW50U2Vzc2lvbi5pc0ZpbmlzaCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIxMDA5Lm5vcm1hbFNwaW4odGhpcy5iZXRJZEVkaXRib3guc3RyaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50U2Vzc2lvbi5mcmVlR2FtZVJlbWFpbiA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5mcmVlU3BpbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRTZXNzaW9uLmJvbnVzR2FtZVJlbWFpbiA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5ib251c1BsYXkoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5zdGFydEdhbWUoKTtcblxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyMTAwOS5nZXRKUEhpc3RvcnkoMCwgOCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldEpQSGlzdG9yeScsIGRhdGEpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIxMDA5LmdldEJldEhpc3RvcnkoMCwgOCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldEJldEhpc3RvcnknLCBkYXRhKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=