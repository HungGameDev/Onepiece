
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/models/aka-g1009-balance-model.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e30069RmJ1ItLnOgu9HPoJU', 'aka-g1009-balance-model');
// Script/models/aka-g1009-balance-model.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G1009BalanceModel = void 0;
var G1009BalanceModel = /** @class */ (function () {
    function G1009BalanceModel() {
        this.balance = 0;
    }
    G1009BalanceModel.GetInstance = function () {
        if (!G1009BalanceModel.instance)
            G1009BalanceModel.instance = new G1009BalanceModel();
        return G1009BalanceModel.instance;
    };
    G1009BalanceModel.prototype.SetBalance = function (balance) {
        this.balance = balance;
    };
    G1009BalanceModel.prototype.GetBalance = function () {
        return this.balance;
    };
    return G1009BalanceModel;
}());
exports.G1009BalanceModel = G1009BalanceModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbW9kZWxzL2FrYS1nMTAwOS1iYWxhbmNlLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7UUFHUyxZQUFPLEdBQVcsQ0FBQyxDQUFDO0lBa0I3QixDQUFDO0lBaEJjLDZCQUFXLEdBQXpCO1FBRUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVE7WUFDOUIsaUJBQWlCLENBQUMsUUFBUSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUN0RCxPQUFPLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBRU0sc0NBQVUsR0FBakIsVUFBa0IsT0FBTztRQUV4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU0sc0NBQVUsR0FBakI7UUFFQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSw4Q0FBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRzEwMDlCYWxhbmNlTW9kZWxcbntcblx0cHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEcxMDA5QmFsYW5jZU1vZGVsO1xuXHRwcml2YXRlIGJhbGFuY2U6IG51bWJlciA9IDA7XG5cblx0cHVibGljIHN0YXRpYyBHZXRJbnN0YW5jZSgpXG5cdHtcblx0XHRpZiAoIUcxMDA5QmFsYW5jZU1vZGVsLmluc3RhbmNlKVxuXHRcdFx0RzEwMDlCYWxhbmNlTW9kZWwuaW5zdGFuY2UgPSBuZXcgRzEwMDlCYWxhbmNlTW9kZWwoKTtcblx0XHRyZXR1cm4gRzEwMDlCYWxhbmNlTW9kZWwuaW5zdGFuY2U7XG5cdH1cblxuXHRwdWJsaWMgU2V0QmFsYW5jZShiYWxhbmNlKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5iYWxhbmNlID0gYmFsYW5jZTtcblx0fVxuXG5cdHB1YmxpYyBHZXRCYWxhbmNlKCk6IG51bWJlclxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuYmFsYW5jZTtcblx0fVxufSJdfQ==