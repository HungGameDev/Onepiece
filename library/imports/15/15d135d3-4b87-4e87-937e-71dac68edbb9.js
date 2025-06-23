"use strict";
cc._RF.push(module, '15d13XTS4dOh5N+cdrGjtu5', 'Slot45-event-manager');
// Script/base/events/Slot45-event-manager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot45EventManager = void 0;
var Slot45EventManager = /** @class */ (function () {
    function Slot45EventManager() {
        this.events = {};
    }
    Slot45EventManager.GetInstance = function () {
        if (!Slot45EventManager.instance)
            Slot45EventManager.instance = new Slot45EventManager();
        return Slot45EventManager.instance;
    };
    Slot45EventManager.prototype.register = function (name, callback) {
        name = name.toLowerCase();
        if (!this.events[name])
            this.events[name] = [];
        this.events[name].push(callback);
    };
    Slot45EventManager.prototype.unregister = function (name, searchCallback) {
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
    Slot45EventManager.prototype.notify = function (name, args) {
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
    return Slot45EventManager;
}());
exports.Slot45EventManager = Slot45EventManager;

cc._RF.pop();