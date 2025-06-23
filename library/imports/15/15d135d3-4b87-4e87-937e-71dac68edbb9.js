"use strict";
cc._RF.push(module, '15d13XTS4dOh5N+cdrGjtu5', 'Slot45-event-manager');
// Script/base/events/Slot45-event-manager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G1009EventManager = void 0;
var G1009EventManager = /** @class */ (function () {
    function G1009EventManager() {
        this.events = {};
    }
    G1009EventManager.GetInstance = function () {
        if (!G1009EventManager.instance)
            G1009EventManager.instance = new G1009EventManager();
        return G1009EventManager.instance;
    };
    G1009EventManager.prototype.register = function (name, callback) {
        name = name.toLowerCase();
        if (!this.events[name])
            this.events[name] = [];
        this.events[name].push(callback);
    };
    G1009EventManager.prototype.unregister = function (name, searchCallback) {
        name = name.toLowerCase();
        if (!this.events[name])
            return;
        var callbackIndex = -1;
        for (var index = 0; index < this.events[name].length; index++) {
            if (searchCallback === this.events[name][index]) {
                callbackIndex = index;
                break;
            }
        }
        if (callbackIndex > -1) {
            this.events[name].splice(callbackIndex, 1);
        }
    };
    G1009EventManager.prototype.notify = function (name, args) {
        if (args === void 0) { args = null; }
        console.log(name, args);
        name = name.toLowerCase();
        if (!this.events[name])
            return;
        for (var _i = 0, _a = this.events[name]; _i < _a.length; _i++) {
            var callback = _a[_i];
            callback(args);
        }
    };
    return G1009EventManager;
}());
exports.G1009EventManager = G1009EventManager;

cc._RF.pop();