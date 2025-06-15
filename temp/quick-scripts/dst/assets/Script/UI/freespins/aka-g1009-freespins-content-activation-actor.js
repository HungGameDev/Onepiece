
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/freespins/aka-g1009-freespins-content-activation-actor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1462bPo181EcI8EvdWthWiP', 'aka-g1009-freespins-content-activation-actor');
// Script/UI/freespins/aka-g1009-freespins-content-activation-actor.ts

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
var aka_g1009_game_controller_1 = require("../../base/controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_feature_content_activation_actor_1 = require("../feature/aka-g1009-feature-content-activation-actor");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009FreespinsContentActivationActor = /** @class */ (function (_super) {
    __extends(G1009FreespinsContentActivationActor, _super);
    function G1009FreespinsContentActivationActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    G1009FreespinsContentActivationActor.prototype.onLoad = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("resume", this.showContent.bind(this));
    };
    G1009FreespinsContentActivationActor.prototype.checkRuleTrigger = function () {
        return aka_g1009_game_controller_1.default.GetInstance().CheckFreespinTrigger();
    };
    G1009FreespinsContentActivationActor = __decorate([
        ccclass
    ], G1009FreespinsContentActivationActor);
    return G1009FreespinsContentActivationActor;
}(aka_g1009_feature_content_activation_actor_1.default));
exports.default = G1009FreespinsContentActivationActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvZnJlZXNwaW5zL2FrYS1nMTAwOS1mcmVlc3BpbnMtY29udGVudC1hY3RpdmF0aW9uLWFjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZGQUFrRjtBQUNsRixxRkFBOEU7QUFDOUUsb0hBQXVHO0FBQ2pHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtFLHdEQUFrQztJQUFwRzs7SUFPQSxDQUFDO0lBTlUscURBQU0sR0FBaEI7UUFDQywyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNTLCtEQUFnQixHQUExQjtRQUNDLE9BQU8sbUNBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBTm1CLG9DQUFvQztRQUR4RCxPQUFPO09BQ2Esb0NBQW9DLENBT3hEO0lBQUQsMkNBQUM7Q0FQRCxBQU9DLENBUGlFLG9EQUFrQyxHQU9uRztrQkFQb0Isb0NBQW9DIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEcxMDA5R2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2Jhc2UvY29udHJvbGxlci9ha2EtZzEwMDktZ2FtZS1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IEcxMDA5RmVhdHVyZUNvbnRlbnRBY3RpdmF0aW9uQWN0b3IgZnJvbSBcIi4uL2ZlYXR1cmUvYWthLWcxMDA5LWZlYXR1cmUtY29udGVudC1hY3RpdmF0aW9uLWFjdG9yXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlGcmVlc3BpbnNDb250ZW50QWN0aXZhdGlvbkFjdG9yIGV4dGVuZHMgRzEwMDlGZWF0dXJlQ29udGVudEFjdGl2YXRpb25BY3RvciB7XG5cdHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcInJlc3VtZVwiLCB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcykpO1xuXHR9XG5cdHByb3RlY3RlZCBjaGVja1J1bGVUcmlnZ2VyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuQ2hlY2tGcmVlc3BpblRyaWdnZXIoKTtcblx0fVxufSJdfQ==