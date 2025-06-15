
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/events/aka-g1009-event-manager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15d13XTS4dOh5N+cdrGjtu5', 'aka-g1009-event-manager');
// Script/base/events/aka-g1009-event-manager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFJQztRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFYSw2QkFBVyxHQUF6QjtRQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRO1lBQzlCLGlCQUFpQixDQUFDLFFBQVEsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDdEQsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVNLG9DQUFRLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLFFBQWtCO1FBQy9DLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFHTSxzQ0FBVSxHQUFqQixVQUFrQixJQUFZLEVBQUUsY0FBd0I7UUFDdkQsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDckIsT0FBTztRQUNSLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFDN0Q7WUFDQyxJQUFJLGNBQWMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUMvQztnQkFDQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixNQUFNO2FBQ047U0FDRDtRQUNELElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUN0QjtZQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUM7SUFFTSxrQ0FBTSxHQUFiLFVBQWMsSUFBWSxFQUFFLElBQWdCO1FBQWhCLHFCQUFBLEVBQUEsV0FBZ0I7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDckIsT0FBTztRQUVSLEtBQXVCLFVBQWlCLEVBQWpCLEtBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBakIsY0FBaUIsRUFBakIsSUFBaUIsRUFDeEM7WUFESyxJQUFNLFFBQVEsU0FBQTtZQUVsQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDZjtJQUNGLENBQUM7SUFDRix3QkFBQztBQUFELENBcERBLEFBb0RDLElBQUE7QUFwRFksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEcxMDA5RXZlbnRNYW5hZ2VyIHtcblx0cHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEcxMDA5RXZlbnRNYW5hZ2VyO1xuXHRwcml2YXRlIGV2ZW50czogeyBbbmFtZTogc3RyaW5nXTogRnVuY3Rpb25bXSB9XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmV2ZW50cyA9IHt9O1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBHZXRJbnN0YW5jZSgpIHtcblx0XHRpZiAoIUcxMDA5RXZlbnRNYW5hZ2VyLmluc3RhbmNlKVxuXHRcdFx0RzEwMDlFdmVudE1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgRzEwMDlFdmVudE1hbmFnZXIoKTtcblx0XHRyZXR1cm4gRzEwMDlFdmVudE1hbmFnZXIuaW5zdGFuY2U7XG5cdH1cblxuXHRwdWJsaWMgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcblx0XHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICghdGhpcy5ldmVudHNbbmFtZV0pXG5cdFx0XHR0aGlzLmV2ZW50c1tuYW1lXSA9IFtdO1xuXHRcdHRoaXMuZXZlbnRzW25hbWVdLnB1c2goY2FsbGJhY2spO1xuXHR9XG5cblxuXHRwdWJsaWMgdW5yZWdpc3RlcihuYW1lOiBzdHJpbmcsIHNlYXJjaENhbGxiYWNrOiBGdW5jdGlvbikge1xuXHRcdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCF0aGlzLmV2ZW50c1tuYW1lXSlcblx0XHRcdHJldHVybjtcblx0XHRsZXQgY2FsbGJhY2tJbmRleCA9IC0xO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmV2ZW50c1tuYW1lXS5sZW5ndGg7IGluZGV4KyspXG5cdFx0e1xuXHRcdFx0aWYgKHNlYXJjaENhbGxiYWNrID09PSB0aGlzLmV2ZW50c1tuYW1lXVtpbmRleF0pXG5cdFx0XHR7XG5cdFx0XHRcdGNhbGxiYWNrSW5kZXggPSBpbmRleDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChjYWxsYmFja0luZGV4ID4gLTEpXG5cdFx0e1xuXHRcdFx0dGhpcy5ldmVudHNbbmFtZV0uc3BsaWNlKGNhbGxiYWNrSW5kZXgsIDEpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBub3RpZnkobmFtZTogc3RyaW5nLCBhcmdzOiBhbnkgPSBudWxsKSB7XG5cdFx0Y29uc29sZS5sb2cobmFtZSwgYXJncyk7XG5cdFx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAoIXRoaXMuZXZlbnRzW25hbWVdKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Zm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLmV2ZW50c1tuYW1lXSlcblx0XHR7XG5cdFx0XHRjYWxsYmFjayhhcmdzKTtcblx0XHR9XG5cdH1cbn0iXX0=