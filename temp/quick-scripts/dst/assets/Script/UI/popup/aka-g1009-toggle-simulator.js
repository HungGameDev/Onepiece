
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-toggle-simulator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6bee6wjLPFBGZ2f4F5phFT3', 'aka-g1009-toggle-simulator');
// Script/UI/popup/aka-g1009-toggle-simulator.ts

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
var G1009ToggleSimulatorActor = /** @class */ (function (_super) {
    __extends(G1009ToggleSimulatorActor, _super);
    function G1009ToggleSimulatorActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalButton = null;
        _this.activeButton = null;
        _this.EventName = "Event-name";
        return _this;
    }
    G1009ToggleSimulatorActor.prototype.changeToggleState = function (_isActive) {
        var isActive = _isActive == "true" ? true : false;
        this.activeButton.active = isActive;
        this.normalButton.active = !isActive;
    };
    G1009ToggleSimulatorActor.prototype.onToggleOffClick = function () {
        this.activeButton.active = false;
        this.normalButton.active = true;
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify(this.EventName + "-off");
    };
    G1009ToggleSimulatorActor.prototype.onToggleOnClick = function () {
        this.activeButton.active = true;
        this.normalButton.active = false;
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify(this.EventName + "-on");
    };
    __decorate([
        property(cc.Node)
    ], G1009ToggleSimulatorActor.prototype, "normalButton", void 0);
    __decorate([
        property(cc.Node)
    ], G1009ToggleSimulatorActor.prototype, "activeButton", void 0);
    __decorate([
        property
    ], G1009ToggleSimulatorActor.prototype, "EventName", void 0);
    G1009ToggleSimulatorActor = __decorate([
        ccclass
    ], G1009ToggleSimulatorActor);
    return G1009ToggleSimulatorActor;
}(cc.Component));
exports.default = G1009ToggleSimulatorActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LXRvZ2dsZS1zaW11bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQThFO0FBRXhFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVELDZDQUFZO0lBQW5FO1FBQUEscUVBOEJDO1FBM0JHLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGVBQVMsR0FBVyxZQUFZLENBQUM7O0lBcUJyQyxDQUFDO0lBbkJVLHFEQUFpQixHQUF4QixVQUF5QixTQUFpQjtRQUV0QyxJQUFJLFFBQVEsR0FBRyxTQUFTLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDekMsQ0FBQztJQUVPLG9EQUFnQixHQUF4QjtRQUVJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDaEMsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNPLG1EQUFlLEdBQXZCO1FBRUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNqQywyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBMUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bUVBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttRUFDVztJQUc3QjtRQURDLFFBQVE7Z0VBQ3dCO0lBVGhCLHlCQUF5QjtRQUQ3QyxPQUFPO09BQ2EseUJBQXlCLENBOEI3QztJQUFELGdDQUFDO0NBOUJELEFBOEJDLENBOUJzRCxFQUFFLENBQUMsU0FBUyxHQThCbEU7a0JBOUJvQix5QkFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5VG9nZ2xlU2ltdWxhdG9yQWN0b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9ybWFsQnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFjdGl2ZUJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICBFdmVudE5hbWU6IHN0cmluZyA9IFwiRXZlbnQtbmFtZVwiO1xuXG4gICAgcHVibGljIGNoYW5nZVRvZ2dsZVN0YXRlKF9pc0FjdGl2ZTogc3RyaW5nKTogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gX2lzQWN0aXZlID09IFwidHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGl2ZUJ1dHRvbi5hY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICAgICAgdGhpcy5ub3JtYWxCdXR0b24uYWN0aXZlID0gIWlzQWN0aXZlO1xuICAgIH1cbiAgXG4gICAgcHJpdmF0ZSBvblRvZ2dsZU9mZkNsaWNrKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuYWN0aXZlQnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vcm1hbEJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeSh0aGlzLkV2ZW50TmFtZStcIi1vZmZcIik7XG4gICAgfVxuICAgIHByaXZhdGUgb25Ub2dnbGVPbkNsaWNrKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuYWN0aXZlQnV0dG9uLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubm9ybWFsQnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeSh0aGlzLkV2ZW50TmFtZStcIi1vblwiKTtcbiAgICB9XG59XG4iXX0=