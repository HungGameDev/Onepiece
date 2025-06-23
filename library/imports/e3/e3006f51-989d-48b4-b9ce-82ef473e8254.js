"use strict";
cc._RF.push(module, 'e30069RmJ1ItLnOgu9HPoJU', 'Slot45-balance-model');
// Script/models/Slot45-balance-model.ts

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