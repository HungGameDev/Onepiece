
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-select-bet-panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bfb9wzm9xAp7bxi2qR5AVs', 'aka-g1009-select-bet-panel');
// Script/UI/popup/aka-g1009-select-bet-panel.ts

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
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009SelectBetActor = /** @class */ (function (_super) {
    __extends(G1009SelectBetActor, _super);
    function G1009SelectBetActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        return _this;
    }
    G1009SelectBetActor.prototype.start = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register('SetBet', this.Hide.bind(this));
    };
    G1009SelectBetActor.prototype.Hide = function () {
        this.content.active = false;
    };
    G1009SelectBetActor.prototype.Show = function () {
        this.content.active = true;
    };
    G1009SelectBetActor.prototype.OnButtonBackClick = function () {
        cc.director.loadScene('Lobby');
    };
    __decorate([
        property(cc.Node)
    ], G1009SelectBetActor.prototype, "content", void 0);
    G1009SelectBetActor = __decorate([
        ccclass
    ], G1009SelectBetActor);
    return G1009SelectBetActor;
}(cc.Component));
exports.default = G1009SelectBetActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LXNlbGVjdC1iZXQtcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQThFO0FBRXhFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBb0JDO1FBakJXLGFBQU8sR0FBWSxJQUFJLENBQUM7O0lBaUJwQyxDQUFDO0lBZlUsbUNBQUssR0FBWjtRQUNJLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBQ00sa0NBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRU0sa0NBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRU0sK0NBQWlCLEdBQXhCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ2M7SUFIZixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQW9CdkM7SUFBRCwwQkFBQztDQXBCRCxBQW9CQyxDQXBCZ0QsRUFBRSxDQUFDLFNBQVMsR0FvQjVEO2tCQXBCb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOVNlbGVjdEJldEFjdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoJ1NldEJldCcsIHRoaXMuSGlkZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHVibGljIEhpZGUoKTogdm9pZHtcbiAgICAgICAgdGhpcy5jb250ZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBTaG93KCk6IHZvaWR7XG4gICAgICAgIHRoaXMuY29udGVudC5hY3RpdmUgPSB0cnVlO1xuICAgIH0gXG5cbiAgICBwdWJsaWMgT25CdXR0b25CYWNrQ2xpY2soKTogdm9pZHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdMb2JieScpO1xuICAgIH1cbiAgICBcbn1cbiJdfQ==