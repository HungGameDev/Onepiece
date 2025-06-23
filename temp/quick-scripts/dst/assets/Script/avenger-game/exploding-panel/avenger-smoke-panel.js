
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
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SmokePanel = /** @class */ (function (_super) {
    __extends(SmokePanel, _super);
    function SmokePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.particleSmoke = [];
        return _this;
    }
    SmokePanel.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("CellDropCompleted", this.onCellDropCompleted.bind(this));
    };
    SmokePanel.prototype.onLoad = function () {
        this.register();
    };
    SmokePanel.prototype.onCellDropCompleted = function (cellIndex) {
        this.particleSmoke[cellIndex].setAnimation(0, "animation", false);
    };
    __decorate([
        property(sp.Skeleton)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdmVuZ2VyLWdhbWVcXGV4cGxvZGluZy1wYW5lbFxcYXZlbmdlci1zbW9rZS1wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrRUFBNEU7QUFFdEUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFtQkM7UUFoQlEsbUJBQWEsR0FBbUIsRUFBRSxDQUFDOztJQWdCNUMsQ0FBQztJQWRXLDZCQUFRLEdBQWhCO1FBQ0kseUNBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBR0Qsd0NBQW1CLEdBQW5CLFVBQW9CLFNBQVM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBYko7UUFESSxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxREFDa0I7SUFIdkIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQW1COUI7SUFBRCxpQkFBQztDQW5CRCxBQW1CQyxDQW5CdUMsRUFBRSxDQUFDLFNBQVMsR0FtQm5EO2tCQW5Cb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBTbG90NDVFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvU2xvdDQ1LWV2ZW50LW1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbW9rZVBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcblx0cHJpdmF0ZSBwYXJ0aWNsZVNtb2tlOiBzcC5Ta2VsZXRvbiBbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgU2xvdDQ1RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJDZWxsRHJvcENvbXBsZXRlZFwiLCB0aGlzLm9uQ2VsbERyb3BDb21wbGV0ZWQuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25DZWxsRHJvcENvbXBsZXRlZChjZWxsSW5kZXgpe1xyXG4gICAgICAgIHRoaXMucGFydGljbGVTbW9rZVtjZWxsSW5kZXhdLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuIl19