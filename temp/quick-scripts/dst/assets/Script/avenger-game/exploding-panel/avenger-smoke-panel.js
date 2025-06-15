
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/avenger-game/exploding-panel/avenger-smoke-panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91baamCuxdAR7YRDpL3xu6y', 'avenger-smoke-panel');
// Script/avenger-game/exploding-panel/avenger-smoke-panel.ts

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
var SmokePanel = /** @class */ (function (_super) {
    __extends(SmokePanel, _super);
    function SmokePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.particleSmoke = [];
        return _this;
    }
    SmokePanel.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("CellDropCompleted", this.onCellDropCompleted.bind(this));
    };
    SmokePanel.prototype.onLoad = function () {
        this.register();
    };
    SmokePanel.prototype.onCellDropCompleted = function (cellIndex) {
        this.particleSmoke[cellIndex].resetSystem();
    };
    __decorate([
        property(cc.ParticleSystem)
    ], SmokePanel.prototype, "particleSmoke", void 0);
    SmokePanel = __decorate([
        ccclass
    ], SmokePanel);
    return SmokePanel;
}(cc.Component));
exports.default = SmokePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYXZlbmdlci1nYW1lL2V4cGxvZGluZy1wYW5lbC9hdmVuZ2VyLXNtb2tlLXBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFGQUE4RTtBQUV4RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWtCQztRQWhCRyxtQkFBYSxHQUF3QixFQUFFLENBQUM7O0lBZ0I1QyxDQUFDO0lBZFcsNkJBQVEsR0FBaEI7UUFDSSwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFHRCx3Q0FBbUIsR0FBbkIsVUFBb0IsU0FBUztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO3FEQUNZO0lBRnZCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FrQjlCO0lBQUQsaUJBQUM7Q0FsQkQsQUFrQkMsQ0FsQnVDLEVBQUUsQ0FBQyxTQUFTLEdBa0JuRDtrQkFsQm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEcxMDA5RXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbW9rZVBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXG4gICAgcGFydGljbGVTbW9rZTogY2MuUGFydGljbGVTeXN0ZW1bXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSByZWdpc3RlcigpOiB2b2lkIHtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkNlbGxEcm9wQ29tcGxldGVkXCIsIHRoaXMub25DZWxsRHJvcENvbXBsZXRlZC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgICB9XG5cblxuICAgIG9uQ2VsbERyb3BDb21wbGV0ZWQoY2VsbEluZGV4KXtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZVNtb2tlW2NlbGxJbmRleF0ucmVzZXRTeXN0ZW0oKTtcbiAgICB9XG5cbiAgICBcbn1cbiJdfQ==