
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/spin-panel/aka-g1009-spin-item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '916dekuNeNEuZ3TI1AZvHbC', 'aka-g1009-spin-item');
// Script/UI/spin-panel/aka-g1009-spin-item.ts

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
exports.ESpinningState = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_cell_item_1 = require("./aka-g1009-cell-item");
var MAX_LOOP = 10;
var EDirection;
(function (EDirection) {
    EDirection[EDirection["Down"] = 1] = "Down";
    EDirection[EDirection["Up"] = -1] = "Up";
})(EDirection || (EDirection = {}));
var ESpinningState;
(function (ESpinningState) {
    ESpinningState[ESpinningState["Idle"] = 0] = "Idle";
    ESpinningState[ESpinningState["Momentum"] = 1] = "Momentum";
    ESpinningState[ESpinningState["Scroll"] = 2] = "Scroll";
    ESpinningState[ESpinningState["StopScroll"] = 3] = "StopScroll";
    ESpinningState[ESpinningState["Bounce"] = 4] = "Bounce";
    ESpinningState[ESpinningState["WaitingBounce"] = 5] = "WaitingBounce";
})(ESpinningState = exports.ESpinningState || (exports.ESpinningState = {}));
var G1009SpinItemActor = /** @class */ (function (_super) {
    __extends(G1009SpinItemActor, _super);
    function G1009SpinItemActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cellItems = [];
        _this.direction = EDirection.Down;
        _this.state = ESpinningState.Idle;
        _this.scrollSpeed = 0;
        _this.originSpeed = 0;
        _this.tensionSpeedMultiplier = 0;
        _this.momentumRange = 0;
        _this.momentumSpeed = 0;
        _this.bounceRange = 0;
        _this.bounceSpeed = 0;
        _this.height = 0;
        _this.cellHeight = 0;
        _this.isStopImmediately = false;
        _this.isTurbo = false;
        _this.allowBounceUp = true;
        _this.resultItems = [];
        _this.rawResultItems = [];
        _this.reelData = [];
        _this.originYCoordinates = [];
        _this.originIndices = [];
        _this.cellIndices = [];
        _this.despawnYCoordinate = null;
        _this.tweenUpdate = new cc.Tween({});
        _this.subMask = null;
        _this.onReadyToStop = function () { };
        _this.onStopSpin = function () { };
        _this.onStopSpinCompleted = function () { };
        _this.onReadyBounceUp = function () { };
        _this.repeatCount = 0;
        return _this;
    }
    G1009SpinItemActor.prototype.Init = function (initData) {
        this.scrollSpeed = initData.ScrollSpeed;
        this.originSpeed = this.scrollSpeed;
        this.tensionSpeedMultiplier = initData.TensionSpeedMultiplier;
        this.momentumRange = initData.MomentumRange;
        this.bounceRange = initData.BounceRange;
        this.bounceSpeed = initData.BounceSpeed;
        this.momentumSpeed = initData.MomentumSpeed;
        this.originYCoordinates = this.cellItems.map(function (i) { return i.node.y; });
        this.cellHeight = this.originYCoordinates[0] - this.originYCoordinates[1];
        var top = this.originYCoordinates[0];
        var bot = this.originYCoordinates[this.originYCoordinates.length - 1] - this.cellHeight;
        this.height = Math.abs(top - bot);
        this.despawnYCoordinate = this.direction == EDirection.Up ? top : bot;
        this.reelData = initData.ReelDefaultData;
        for (var index = 0; index < this.cellItems.length; index++) {
            var cellIndex = this.cellItems[index].GetCellIndex();
            this.originIndices.push(cellIndex);
            if (cellIndex >= 0) {
                this.cellIndices.push(cellIndex);
            }
            if (cellIndex == -1) {
                var randomIndex = Math.floor(Math.random() * 4);
                this.cellItems[index].SetItem(this.reelData[randomIndex]);
            }
            else {
                this.cellItems[index].SetItem(this.reelData[cellIndex]);
            }
        }
    };
    G1009SpinItemActor.prototype.SetItems = function (reelData) {
        for (var index = 0; index < this.cellItems.length; index++) {
            var cellIndex = this.cellItems[index].GetCellIndex();
            this.cellItems[index].SetItem(reelData[cellIndex]);
        }
    };
    G1009SpinItemActor.prototype.SetOldItems = function (reelData) {
        for (var index = 0; index < this.cellItems.length; index++) {
            var cellIndex = this.cellItems[index].GetCellIndex();
            this.cellItems[index].SetOldItem(reelData[cellIndex]);
        }
    };
    G1009SpinItemActor.prototype.Spin = function () {
        if (this.state == ESpinningState.Idle) {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_reelspin', isLoop: false });
            this.momentum();
        }
    };
    G1009SpinItemActor.prototype.momentum = function () {
        if (this.isTurbo || this.momentumRange == 0) {
            this.startScroll();
            return;
        }
        this.state = ESpinningState.Momentum;
        var isMomentumComplete = false;
        for (var index = 0; index < this.cellItems.length; index++) {
            var cellItem = this.cellItems[index];
            cellItem.node.y += this.momentumSpeed * this.direction;
            isMomentumComplete = cellItem.node.y >= (this.originYCoordinates[index] + this.momentumRange) * this.direction;
        }
        if (isMomentumComplete) {
            this.startScroll();
        }
    };
    G1009SpinItemActor.prototype.startScroll = function () {
        this.cellItems.forEach(function (i) { return i.StartSpin(); });
        this.scroll();
    };
    G1009SpinItemActor.prototype.lateUpdate = function (dt) {
        if (this.repeatCount >= 0.02) {
            this.fixUpdate();
            this.repeatCount = 0;
        }
        this.repeatCount += dt;
    };
    G1009SpinItemActor.prototype.scroll = function () {
        this.state = ESpinningState.Idle;
        var isScrollComplete = false;
        for (var index = 0; index < this.cellItems.length; index++) {
            var cellItem = this.cellItems[index];
            cellItem.node.y -= this.scrollSpeed * this.direction;
            var isRespawn = false;
            var loopCount = 0;
            while (cellItem.node.y <= this.despawnYCoordinate && loopCount++ < MAX_LOOP) {
                cellItem.node.y += this.height * this.direction;
                isRespawn = true;
            }
            if (isRespawn) {
                if (this.rawResultItems.length > 0) {
                    if (this.checkReadyToStop() === true) {
                        this.onReadyToStop(this.cellIndices);
                        this.fixCellIndex(index);
                    }
                    isScrollComplete = this.resultItems.length == 0;
                }
                this.setSpinningItem(cellItem, cellItem.cellIndex);
            }
            if (isScrollComplete) {
                this.cellItems.sort(function (a, b) {
                    return b.node.y - a.node.y;
                });
                this.setFinalResults();
                this.stopScroll();
                return;
            }
        }
        this.state = ESpinningState.Scroll;
    };
    G1009SpinItemActor.prototype.fixCellIndex = function (firstIndex) {
        var index = this.cellItems.length;
        var cellIndices = Object.assign([], this.cellIndices);
        do {
            var cellIndex = cellIndices.pop();
            if (cellIndex == null) {
                cellIndex = -1;
            }
            this.cellItems[(firstIndex + index) % this.cellItems.length].SetCellIndex(cellIndex);
        } while (--index > 0);
    };
    G1009SpinItemActor.prototype.setFinalResults = function () {
        var resultIndex = 0;
        for (var index = 0; index < this.cellItems.length; index++) {
            var cellItem = this.cellItems[index];
            var cellIndex = this.originIndices[index];
            cellItem.node.y = this.originYCoordinates[index];
            cellItem.SetCellIndex(cellIndex);
            if (cellIndex >= 0) {
                cellItem.SetItem(this.rawResultItems[resultIndex++]);
            }
            else {
                var randomIndex = Math.floor(Math.random() * 4);
                cellItem.SetItem(this.reelData[randomIndex]);
            }
        }
    };
    G1009SpinItemActor.prototype.setSpinningItem = function (cellItem, index) {
        if (this.rawResultItems.length > 0) {
            var item = this.resultItems.pop();
            cellItem.SetScrollItem(item);
        }
        else {
            var loopCount = 0;
            do {
                cellItem.SetScrollItem(this.reelData[index]);
            } while (cellItem.CheckValid() == false && loopCount++ < MAX_LOOP);
        }
    };
    G1009SpinItemActor.prototype.stopScroll = function () {
        this.state = ESpinningState.StopScroll;
        var isStopScrollComplete = false;
        for (var index = 0; index < this.cellItems.length; index++) {
            var cellItem = this.cellItems[index];
            var bounceDestination = (this.originYCoordinates[index] - this.bounceRange) * this.direction;
            var loopCount = 0;
            cellItem.node.y -= this.scrollSpeed * this.direction;
            while (cellItem.node.y < bounceDestination && loopCount++ < MAX_LOOP) {
                cellItem.node.y = bounceDestination;
                isStopScrollComplete = true;
            }
        }
        if (isStopScrollComplete) {
            this.onStopSpin(this.cellIndices);
            this.onReadyBounceUp();
            this.bounce();
        }
    };
    G1009SpinItemActor.prototype.bounce = function () {
        this.state = ESpinningState.Bounce;
        if (this.allowBounceUp == false && this.isStopImmediately == true) {
            this.state = ESpinningState.WaitingBounce;
            return;
        }
        var isBounceComplete = false;
        for (var index = 0; index < this.cellItems.length; index++) {
            var cellItem = this.cellItems[index];
            cellItem.node.y += this.bounceSpeed * this.direction;
            isBounceComplete = cellItem.node.y >= (this.originYCoordinates[index]) * this.direction;
        }
        if (isBounceComplete) {
            this.stopComplete();
        }
    };
    G1009SpinItemActor.prototype.stopComplete = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_reelstop', isLoop: false });
        this.cellItems.forEach(function (cellItem) { return cellItem.StopSpin(); });
        this.state = ESpinningState.Idle;
        this.onStopSpinCompleted(this.cellIndices);
        this.setDefaultPosition();
    };
    G1009SpinItemActor.prototype.StopImmediately = function (isTurbo) {
        this.isStopImmediately = true;
        this.isTurbo = isTurbo === true;
    };
    G1009SpinItemActor.prototype.TensionStarted = function () {
        this.scrollSpeed *= this.tensionSpeedMultiplier;
    };
    G1009SpinItemActor.prototype.Reset = function () {
        this.state = ESpinningState.Idle;
        this.allowBounceUp == true;
        this.isStopImmediately = false;
        this.isTurbo = false;
        this.scrollSpeed = this.originSpeed;
        this.rawResultItems = [];
        this.resultItems = [];
        for (var index = 0; index < this.cellItems.length; index++) {
            var cellItem = this.cellItems[index];
            cellItem.node.y = this.originYCoordinates[index];
            cellItem.SetCellIndex(this.originIndices[index]);
            cellItem.Reset();
        }
    };
    G1009SpinItemActor.prototype.setDefaultPosition = function () {
        for (var index = 0; index < this.cellItems.length; index++) {
            var cellItem = this.cellItems[index];
            cellItem.node.y = this.originYCoordinates[index];
            cellItem.SetCellIndex(this.originIndices[index]);
            cellItem.Reset();
        }
    };
    G1009SpinItemActor.prototype.Enable = function () {
        this.cellItems.forEach(function (cell) { return cell.Enable(); });
    };
    G1009SpinItemActor.prototype.Disable = function () {
        this.cellItems.forEach(function (cell) { return cell.Disable(); });
    };
    G1009SpinItemActor.prototype.AllowBounceUp = function () {
        this.allowBounceUp == true;
        if (this.state == ESpinningState.WaitingBounce) {
            this.bounce();
        }
    };
    G1009SpinItemActor.prototype.setResultItems = function (items) {
        this.resultItems = [];
        for (var index = 0; index < this.cellItems.length; index++) {
            var cellItem = this.cellItems[index];
            var item = items[cellItem.GetCellIndex()];
            if (item) {
                this.resultItems.push(item);
                this.rawResultItems.push(item);
            }
        }
    };
    G1009SpinItemActor.prototype.Stop = function (items) {
        this.setResultItems(items);
        if (this.direction == EDirection.Up) {
            this.resultItems.reverse();
            this.rawResultItems.reverse();
        }
        if (this.state != ESpinningState.Idle) {
            if (this.state == ESpinningState.Bounce || this.state == ESpinningState.StopScroll) {
                return;
            }
            this.state = ESpinningState.Idle;
            this.resultItems.length = 0;
            this.setFinalResults();
            this.stopScroll();
        }
    };
    G1009SpinItemActor.prototype.checkReadyToStop = function () {
        var isReady = this.rawResultItems.length > 0 && this.resultItems.length === this.rawResultItems.length;
        return isReady;
    };
    G1009SpinItemActor.prototype.fixUpdate = function () {
        switch (this.state) {
            case ESpinningState.Idle:
            case ESpinningState.WaitingBounce:
                return;
            case ESpinningState.Momentum:
                this.momentum();
                return;
            case ESpinningState.Scroll:
                this.scroll();
                return;
            case ESpinningState.StopScroll:
                this.stopScroll();
                return;
            case ESpinningState.Bounce:
                this.bounce();
                return;
        }
    };
    __decorate([
        property(aka_g1009_cell_item_1.default)
    ], G1009SpinItemActor.prototype, "cellItems", void 0);
    __decorate([
        property
    ], G1009SpinItemActor.prototype, "direction", void 0);
    G1009SpinItemActor = __decorate([
        ccclass
    ], G1009SpinItemActor);
    return G1009SpinItemActor;
}(cc.Component));
exports.default = G1009SpinItemActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvc3Bpbi1wYW5lbC9ha2EtZzEwMDktc3Bpbi1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxxRkFBOEU7QUFDOUUsNkRBQXVEO0FBRXZELElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNwQixJQUFLLFVBR0o7QUFIRCxXQUFLLFVBQVU7SUFDZCwyQ0FBUSxDQUFBO0lBQ1Isd0NBQU8sQ0FBQTtBQUNSLENBQUMsRUFISSxVQUFVLEtBQVYsVUFBVSxRQUdkO0FBRUQsSUFBWSxjQU9YO0FBUEQsV0FBWSxjQUFjO0lBQ3pCLG1EQUFRLENBQUE7SUFDUiwyREFBWSxDQUFBO0lBQ1osdURBQVUsQ0FBQTtJQUNWLCtEQUFjLENBQUE7SUFDZCx1REFBVSxDQUFBO0lBQ1YscUVBQWlCLENBQUE7QUFDbEIsQ0FBQyxFQVBXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBT3pCO0FBRUQ7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUFrV0M7UUEvVkEsZUFBUyxHQUF5QixFQUFFLENBQUM7UUFHckMsZUFBUyxHQUFlLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFFeEMsV0FBSyxHQUFtQixjQUFjLENBQUMsSUFBSSxDQUFDO1FBQzVDLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLDRCQUFzQixHQUFXLENBQUMsQ0FBQztRQUNuQyxtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFV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dXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IEcxMDA5Q2VsbEl0ZW1BY3RvciBmcm9tIFwiLi9ha2EtZzEwMDktY2VsbC1pdGVtXCI7XG5pbXBvcnQgeyBHMTAwOVNwaW5JdGVtRGF0YSB9IGZyb20gXCIuL2FrYS1nMTAwOS1zcGluLWl0ZW0tZGF0YVwiO1xuY29uc3QgTUFYX0xPT1AgPSAxMDtcbmVudW0gRURpcmVjdGlvbiB7XG5cdERvd24gPSAxLFxuXHRVcCA9IC0xLFxufVxuXG5leHBvcnQgZW51bSBFU3Bpbm5pbmdTdGF0ZSB7XG5cdElkbGUgPSAwLFxuXHRNb21lbnR1bSA9IDEsXG5cdFNjcm9sbCA9IDIsXG5cdFN0b3BTY3JvbGwgPSAzLFxuXHRCb3VuY2UgPSA0LFxuXHRXYWl0aW5nQm91bmNlID0gNSxcbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOVNwaW5JdGVtQWN0b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cdEBwcm9wZXJ0eShHMTAwOUNlbGxJdGVtQWN0b3IpXG5cdGNlbGxJdGVtczogRzEwMDlDZWxsSXRlbUFjdG9yW10gPSBbXTtcblxuXHRAcHJvcGVydHlcblx0ZGlyZWN0aW9uOiBFRGlyZWN0aW9uID0gRURpcmVjdGlvbi5Eb3duO1xuXG5cdHN0YXRlOiBFU3Bpbm5pbmdTdGF0ZSA9IEVTcGlubmluZ1N0YXRlLklkbGU7XG5cdHNjcm9sbFNwZWVkOiBudW1iZXIgPSAwO1xuXHRvcmlnaW5TcGVlZDogbnVtYmVyID0gMDtcblx0dGVuc2lvblNwZWVkTXVsdGlwbGllcjogbnVtYmVyID0gMDtcblx0bW9tZW50dW1SYW5nZTogbnVtYmVyID0gMDtcblx0bW9tZW50dW1TcGVlZDogbnVtYmVyID0gMDtcblx0Ym91bmNlUmFuZ2U6IG51bWJlciA9IDA7XG5cdGJvdW5jZVNwZWVkOiBudW1iZXIgPSAwO1xuXHRoZWlnaHQ6IG51bWJlciA9IDA7XG5cdGNlbGxIZWlnaHQ6IG51bWJlciA9IDA7XG5cdGlzU3RvcEltbWVkaWF0ZWx5OiBib29sZWFuID0gZmFsc2U7XG5cdGlzVHVyYm86IGJvb2xlYW4gPSBmYWxzZTtcblx0YWxsb3dCb3VuY2VVcDogYm9vbGVhbiA9IHRydWU7XG5cdHJlc3VsdEl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xuXHRyYXdSZXN1bHRJdGVtczogc3RyaW5nW10gPSBbXTtcblx0cmVlbERhdGE6IHN0cmluZ1tdID0gW107XG5cdG9yaWdpbllDb29yZGluYXRlczogbnVtYmVyW10gPSBbXTtcblx0b3JpZ2luSW5kaWNlcyA9IFtdO1xuXHRjZWxsSW5kaWNlczogbnVtYmVyW10gPSBbXTtcblx0ZGVzcGF3bllDb29yZGluYXRlID0gbnVsbDtcblx0dHdlZW5VcGRhdGUgPSBuZXcgY2MuVHdlZW4oe30pO1xuXHRzdWJNYXNrID0gbnVsbDtcblx0b25SZWFkeVRvU3RvcDogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG5cdG9uU3RvcFNwaW46IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuXHRvblN0b3BTcGluQ29tcGxldGVkOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcblx0b25SZWFkeUJvdW5jZVVwOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcblx0cmVwZWF0Q291bnQ6IG51bWJlciA9IDA7XG5cblx0cHVibGljIEluaXQoaW5pdERhdGE6IEcxMDA5U3Bpbkl0ZW1EYXRhKTogdm9pZCB7XG5cdFx0dGhpcy5zY3JvbGxTcGVlZCA9IGluaXREYXRhLlNjcm9sbFNwZWVkO1xuXHRcdHRoaXMub3JpZ2luU3BlZWQgPSB0aGlzLnNjcm9sbFNwZWVkO1xuXHRcdHRoaXMudGVuc2lvblNwZWVkTXVsdGlwbGllciA9IGluaXREYXRhLlRlbnNpb25TcGVlZE11bHRpcGxpZXI7XG5cdFx0dGhpcy5tb21lbnR1bVJhbmdlID0gaW5pdERhdGEuTW9tZW50dW1SYW5nZTtcblx0XHR0aGlzLmJvdW5jZVJhbmdlID0gaW5pdERhdGEuQm91bmNlUmFuZ2U7XG5cdFx0dGhpcy5ib3VuY2VTcGVlZCA9IGluaXREYXRhLkJvdW5jZVNwZWVkO1xuXHRcdHRoaXMubW9tZW50dW1TcGVlZCA9IGluaXREYXRhLk1vbWVudHVtU3BlZWQ7XG5cdFx0dGhpcy5vcmlnaW5ZQ29vcmRpbmF0ZXMgPSB0aGlzLmNlbGxJdGVtcy5tYXAoaSA9PiBpLm5vZGUueSk7XG5cdFx0dGhpcy5jZWxsSGVpZ2h0ID0gdGhpcy5vcmlnaW5ZQ29vcmRpbmF0ZXNbMF0gLSB0aGlzLm9yaWdpbllDb29yZGluYXRlc1sxXTtcblx0XHRsZXQgdG9wID0gdGhpcy5vcmlnaW5ZQ29vcmRpbmF0ZXNbMF1cblx0XHRsZXQgYm90ID0gdGhpcy5vcmlnaW5ZQ29vcmRpbmF0ZXNbdGhpcy5vcmlnaW5ZQ29vcmRpbmF0ZXMubGVuZ3RoIC0gMV0gLSB0aGlzLmNlbGxIZWlnaHQ7XG5cdFx0dGhpcy5oZWlnaHQgPSBNYXRoLmFicyh0b3AgLSBib3QpO1xuXHRcdHRoaXMuZGVzcGF3bllDb29yZGluYXRlID0gdGhpcy5kaXJlY3Rpb24gPT0gRURpcmVjdGlvbi5VcCA/IHRvcCA6IGJvdDtcblx0XHR0aGlzLnJlZWxEYXRhID0gaW5pdERhdGEuUmVlbERlZmF1bHREYXRhO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNlbGxJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGxldCBjZWxsSW5kZXggPSB0aGlzLmNlbGxJdGVtc1tpbmRleF0uR2V0Q2VsbEluZGV4KCk7XG5cdFx0XHR0aGlzLm9yaWdpbkluZGljZXMucHVzaChjZWxsSW5kZXgpO1xuXHRcdFx0aWYgKGNlbGxJbmRleCA+PSAwKSB7XG5cdFx0XHRcdHRoaXMuY2VsbEluZGljZXMucHVzaChjZWxsSW5kZXgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNlbGxJbmRleCA9PSAtMSkge1xuXHRcdFx0XHRsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcblx0XHRcdFx0dGhpcy5jZWxsSXRlbXNbaW5kZXhdLlNldEl0ZW0odGhpcy5yZWVsRGF0YVtyYW5kb21JbmRleF0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7IHRoaXMuY2VsbEl0ZW1zW2luZGV4XS5TZXRJdGVtKHRoaXMucmVlbERhdGFbY2VsbEluZGV4XSk7IH1cblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgU2V0SXRlbXMocmVlbERhdGE6IHN0cmluZ1tdKSB7XG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY2VsbEl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0bGV0IGNlbGxJbmRleCA9IHRoaXMuY2VsbEl0ZW1zW2luZGV4XS5HZXRDZWxsSW5kZXgoKTtcblx0XHRcdHRoaXMuY2VsbEl0ZW1zW2luZGV4XS5TZXRJdGVtKHJlZWxEYXRhW2NlbGxJbmRleF0pO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBTZXRPbGRJdGVtcyhyZWVsRGF0YTogc3RyaW5nW10pIHtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jZWxsSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRsZXQgY2VsbEluZGV4ID0gdGhpcy5jZWxsSXRlbXNbaW5kZXhdLkdldENlbGxJbmRleCgpO1xuXHRcdFx0dGhpcy5jZWxsSXRlbXNbaW5kZXhdLlNldE9sZEl0ZW0ocmVlbERhdGFbY2VsbEluZGV4XSk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIFNwaW4oKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5zdGF0ZSA9PSBFU3Bpbm5pbmdTdGF0ZS5JZGxlKSB7XG5cdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeSgnUGxheVNGWCcsIHsgc2Z4TmFtZTogJ3NmeF9yZWVsc3BpbicsIGlzTG9vcDogZmFsc2UgfSk7XG5cdFx0XHR0aGlzLm1vbWVudHVtKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBtb21lbnR1bSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1R1cmJvIHx8IHRoaXMubW9tZW50dW1SYW5nZSA9PSAwKSB7XG5cdFx0XHR0aGlzLnN0YXJ0U2Nyb2xsKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc3RhdGUgPSBFU3Bpbm5pbmdTdGF0ZS5Nb21lbnR1bTtcblx0XHRsZXQgaXNNb21lbnR1bUNvbXBsZXRlID0gZmFsc2U7XG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY2VsbEl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0bGV0IGNlbGxJdGVtID0gdGhpcy5jZWxsSXRlbXNbaW5kZXhdO1xuXHRcdFx0Y2VsbEl0ZW0ubm9kZS55ICs9IHRoaXMubW9tZW50dW1TcGVlZCAqIHRoaXMuZGlyZWN0aW9uO1xuXHRcdFx0aXNNb21lbnR1bUNvbXBsZXRlID0gY2VsbEl0ZW0ubm9kZS55ID49ICh0aGlzLm9yaWdpbllDb29yZGluYXRlc1tpbmRleF0gKyB0aGlzLm1vbWVudHVtUmFuZ2UpICogdGhpcy5kaXJlY3Rpb247XG5cdFx0fVxuXG5cdFx0aWYgKGlzTW9tZW50dW1Db21wbGV0ZSkge1xuXHRcdFx0dGhpcy5zdGFydFNjcm9sbCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc3RhcnRTY3JvbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5jZWxsSXRlbXMuZm9yRWFjaChpID0+IGkuU3RhcnRTcGluKCkpO1xuXHRcdHRoaXMuc2Nyb2xsKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgbGF0ZVVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucmVwZWF0Q291bnQgPj0gMC4wMikge1xuXHRcdFx0dGhpcy5maXhVcGRhdGUoKTtcblx0XHRcdHRoaXMucmVwZWF0Q291bnQgPSAwO1xuXHRcdH1cblx0XHR0aGlzLnJlcGVhdENvdW50ICs9IGR0O1xuXHR9XG5cblx0cHJvdGVjdGVkIHNjcm9sbCgpOiB2b2lkIHtcblxuXHRcdHRoaXMuc3RhdGUgPSBFU3Bpbm5pbmdTdGF0ZS5JZGxlO1xuXHRcdGxldCBpc1Njcm9sbENvbXBsZXRlID0gZmFsc2U7XG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY2VsbEl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0bGV0IGNlbGxJdGVtID0gdGhpcy5jZWxsSXRlbXNbaW5kZXhdO1xuXHRcdFx0Y2VsbEl0ZW0ubm9kZS55IC09IHRoaXMuc2Nyb2xsU3BlZWQgKiB0aGlzLmRpcmVjdGlvbjtcblx0XHRcdGxldCBpc1Jlc3Bhd24gPSBmYWxzZTtcblx0XHRcdGxldCBsb29wQ291bnQgPSAwO1xuXHRcdFx0d2hpbGUgKGNlbGxJdGVtLm5vZGUueSA8PSB0aGlzLmRlc3Bhd25ZQ29vcmRpbmF0ZSAmJiBsb29wQ291bnQrKyA8IE1BWF9MT09QKSB7XG5cdFx0XHRcdGNlbGxJdGVtLm5vZGUueSArPSB0aGlzLmhlaWdodCAqIHRoaXMuZGlyZWN0aW9uO1xuXHRcdFx0XHRpc1Jlc3Bhd24gPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNSZXNwYXduKSB7XG5cdFx0XHRcdGlmICh0aGlzLnJhd1Jlc3VsdEl0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRpZiAodGhpcy5jaGVja1JlYWR5VG9TdG9wKCkgPT09IHRydWUpIHtcblx0XHRcdFx0XHRcdHRoaXMub25SZWFkeVRvU3RvcCh0aGlzLmNlbGxJbmRpY2VzKTtcblx0XHRcdFx0XHRcdHRoaXMuZml4Q2VsbEluZGV4KGluZGV4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aXNTY3JvbGxDb21wbGV0ZSA9IHRoaXMucmVzdWx0SXRlbXMubGVuZ3RoID09IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zZXRTcGlubmluZ0l0ZW0oY2VsbEl0ZW0sIGNlbGxJdGVtLmNlbGxJbmRleCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc1Njcm9sbENvbXBsZXRlKSB7XG5cdFx0XHRcdHRoaXMuY2VsbEl0ZW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRcdFx0XHRyZXR1cm4gYi5ub2RlLnkgLSBhLm5vZGUueTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuc2V0RmluYWxSZXN1bHRzKCk7XG5cdFx0XHRcdHRoaXMuc3RvcFNjcm9sbCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5zdGF0ZSA9IEVTcGlubmluZ1N0YXRlLlNjcm9sbDtcblx0fVxuXG5cdHByaXZhdGUgZml4Q2VsbEluZGV4KGZpcnN0SW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdGxldCBpbmRleCA9IHRoaXMuY2VsbEl0ZW1zLmxlbmd0aDtcblx0XHRsZXQgY2VsbEluZGljZXMgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLmNlbGxJbmRpY2VzKTtcblx0XHRkbyB7XG5cdFx0XHRsZXQgY2VsbEluZGV4ID0gY2VsbEluZGljZXMucG9wKCk7XG5cdFx0XHRpZiAoY2VsbEluZGV4ID09IG51bGwpIHtcblx0XHRcdFx0Y2VsbEluZGV4ID0gLTE7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNlbGxJdGVtc1soZmlyc3RJbmRleCArIGluZGV4KSAlIHRoaXMuY2VsbEl0ZW1zLmxlbmd0aF0uU2V0Q2VsbEluZGV4KGNlbGxJbmRleCk7XG5cdFx0fSB3aGlsZSAoLS1pbmRleCA+IDApO1xuXHR9XG5cblx0cHJvdGVjdGVkIHNldEZpbmFsUmVzdWx0cygpOiB2b2lkIHtcblx0XHRsZXQgcmVzdWx0SW5kZXggPSAwO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNlbGxJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGxldCBjZWxsSXRlbSA9IHRoaXMuY2VsbEl0ZW1zW2luZGV4XTtcblx0XHRcdGxldCBjZWxsSW5kZXggPSB0aGlzLm9yaWdpbkluZGljZXNbaW5kZXhdO1xuXHRcdFx0Y2VsbEl0ZW0ubm9kZS55ID0gdGhpcy5vcmlnaW5ZQ29vcmRpbmF0ZXNbaW5kZXhdO1xuXHRcdFx0Y2VsbEl0ZW0uU2V0Q2VsbEluZGV4KGNlbGxJbmRleCk7XG5cdFx0XHRpZiAoY2VsbEluZGV4ID49IDApIHtcblx0XHRcdFx0Y2VsbEl0ZW0uU2V0SXRlbSh0aGlzLnJhd1Jlc3VsdEl0ZW1zW3Jlc3VsdEluZGV4KytdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuXHRcdFx0XHRjZWxsSXRlbS5TZXRJdGVtKHRoaXMucmVlbERhdGFbcmFuZG9tSW5kZXhdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldFNwaW5uaW5nSXRlbShjZWxsSXRlbTogRzEwMDlDZWxsSXRlbUFjdG9yLCBpbmRleDogbnVtYmVyKSB7XG5cdFx0aWYgKHRoaXMucmF3UmVzdWx0SXRlbXMubGVuZ3RoID4gMCkge1xuXHRcdFx0bGV0IGl0ZW0gPSB0aGlzLnJlc3VsdEl0ZW1zLnBvcCgpO1xuXHRcdFx0Y2VsbEl0ZW0uU2V0U2Nyb2xsSXRlbShpdGVtKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGxvb3BDb3VudCA9IDA7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGNlbGxJdGVtLlNldFNjcm9sbEl0ZW0odGhpcy5yZWVsRGF0YVtpbmRleF0pO1xuXHRcdFx0fSB3aGlsZSAoY2VsbEl0ZW0uQ2hlY2tWYWxpZCgpID09IGZhbHNlICYmIGxvb3BDb3VudCsrIDwgTUFYX0xPT1ApO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBzdG9wU2Nyb2xsKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUgPSBFU3Bpbm5pbmdTdGF0ZS5TdG9wU2Nyb2xsO1xuXHRcdGxldCBpc1N0b3BTY3JvbGxDb21wbGV0ZSA9IGZhbHNlO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNlbGxJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGxldCBjZWxsSXRlbSA9IHRoaXMuY2VsbEl0ZW1zW2luZGV4XTtcblx0XHRcdGxldCBib3VuY2VEZXN0aW5hdGlvbiA9ICh0aGlzLm9yaWdpbllDb29yZGluYXRlc1tpbmRleF0gLSB0aGlzLmJvdW5jZVJhbmdlKSAqIHRoaXMuZGlyZWN0aW9uO1xuXHRcdFx0bGV0IGxvb3BDb3VudCA9IDA7XG5cdFx0XHRjZWxsSXRlbS5ub2RlLnkgLT0gdGhpcy5zY3JvbGxTcGVlZCAqIHRoaXMuZGlyZWN0aW9uO1xuXHRcdFx0d2hpbGUgKGNlbGxJdGVtLm5vZGUueSA8IGJvdW5jZURlc3RpbmF0aW9uICYmIGxvb3BDb3VudCsrIDwgTUFYX0xPT1ApIHtcblx0XHRcdFx0Y2VsbEl0ZW0ubm9kZS55ID0gYm91bmNlRGVzdGluYXRpb247XG5cdFx0XHRcdGlzU3RvcFNjcm9sbENvbXBsZXRlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaXNTdG9wU2Nyb2xsQ29tcGxldGUpIHtcblx0XHRcdHRoaXMub25TdG9wU3Bpbih0aGlzLmNlbGxJbmRpY2VzKTtcblx0XHRcdHRoaXMub25SZWFkeUJvdW5jZVVwKCk7XG5cdFx0XHR0aGlzLmJvdW5jZSgpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBib3VuY2UoKTogdm9pZCB7XG5cblx0XHR0aGlzLnN0YXRlID0gRVNwaW5uaW5nU3RhdGUuQm91bmNlO1xuXG5cdFx0aWYgKHRoaXMuYWxsb3dCb3VuY2VVcCA9PSBmYWxzZSAmJiB0aGlzLmlzU3RvcEltbWVkaWF0ZWx5ID09IHRydWUpIHtcblx0XHRcdHRoaXMuc3RhdGUgPSBFU3Bpbm5pbmdTdGF0ZS5XYWl0aW5nQm91bmNlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBpc0JvdW5jZUNvbXBsZXRlID0gZmFsc2U7XG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY2VsbEl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0bGV0IGNlbGxJdGVtID0gdGhpcy5jZWxsSXRlbXNbaW5kZXhdO1xuXHRcdFx0Y2VsbEl0ZW0ubm9kZS55ICs9IHRoaXMuYm91bmNlU3BlZWQgKiB0aGlzLmRpcmVjdGlvbjtcblx0XHRcdGlzQm91bmNlQ29tcGxldGUgPSBjZWxsSXRlbS5ub2RlLnkgPj0gKHRoaXMub3JpZ2luWUNvb3JkaW5hdGVzW2luZGV4XSkgKiB0aGlzLmRpcmVjdGlvbjtcblx0XHR9XG5cblx0XHRpZiAoaXNCb3VuY2VDb21wbGV0ZSkge1xuXHRcdFx0dGhpcy5zdG9wQ29tcGxldGUoKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgc3RvcENvbXBsZXRlKCk6IHZvaWQge1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KCdQbGF5U0ZYJywgeyBzZnhOYW1lOiAnc2Z4X3JlZWxzdG9wJywgaXNMb29wOiBmYWxzZSB9KTtcblx0XHR0aGlzLmNlbGxJdGVtcy5mb3JFYWNoKGNlbGxJdGVtID0+IGNlbGxJdGVtLlN0b3BTcGluKCkpO1xuXHRcdHRoaXMuc3RhdGUgPSBFU3Bpbm5pbmdTdGF0ZS5JZGxlO1xuXHRcdHRoaXMub25TdG9wU3BpbkNvbXBsZXRlZCh0aGlzLmNlbGxJbmRpY2VzKTtcblx0XHR0aGlzLnNldERlZmF1bHRQb3NpdGlvbigpO1xuXHR9XG5cblx0cHVibGljIFN0b3BJbW1lZGlhdGVseShpc1R1cmJvOiBib29sZWFuKSB7XG5cblx0XHR0aGlzLmlzU3RvcEltbWVkaWF0ZWx5ID0gdHJ1ZTtcblx0XHR0aGlzLmlzVHVyYm8gPSBpc1R1cmJvID09PSB0cnVlO1xuXHR9XG5cblx0cHVibGljIFRlbnNpb25TdGFydGVkKCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zY3JvbGxTcGVlZCAqPSB0aGlzLnRlbnNpb25TcGVlZE11bHRpcGxpZXI7XG5cdH1cblxuXHRwdWJsaWMgUmVzZXQoKTogdm9pZCB7XG5cblx0XHR0aGlzLnN0YXRlID0gRVNwaW5uaW5nU3RhdGUuSWRsZTtcblx0XHR0aGlzLmFsbG93Qm91bmNlVXAgPT0gdHJ1ZTtcblx0XHR0aGlzLmlzU3RvcEltbWVkaWF0ZWx5ID0gZmFsc2U7XG5cdFx0dGhpcy5pc1R1cmJvID0gZmFsc2U7XG5cdFx0dGhpcy5zY3JvbGxTcGVlZCA9IHRoaXMub3JpZ2luU3BlZWQ7XG5cdFx0dGhpcy5yYXdSZXN1bHRJdGVtcz0gW107XG5cdFx0dGhpcy5yZXN1bHRJdGVtcyA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY2VsbEl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0bGV0IGNlbGxJdGVtID0gdGhpcy5jZWxsSXRlbXNbaW5kZXhdO1xuXHRcdFx0Y2VsbEl0ZW0ubm9kZS55ID0gdGhpcy5vcmlnaW5ZQ29vcmRpbmF0ZXNbaW5kZXhdO1xuXHRcdFx0Y2VsbEl0ZW0uU2V0Q2VsbEluZGV4KHRoaXMub3JpZ2luSW5kaWNlc1tpbmRleF0pO1xuXHRcdFx0Y2VsbEl0ZW0uUmVzZXQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldERlZmF1bHRQb3NpdGlvbigpOiB2b2lkIHtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jZWxsSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRsZXQgY2VsbEl0ZW0gPSB0aGlzLmNlbGxJdGVtc1tpbmRleF07XG5cdFx0XHRjZWxsSXRlbS5ub2RlLnkgPSB0aGlzLm9yaWdpbllDb29yZGluYXRlc1tpbmRleF07XG5cdFx0XHRjZWxsSXRlbS5TZXRDZWxsSW5kZXgodGhpcy5vcmlnaW5JbmRpY2VzW2luZGV4XSk7XG5cdFx0XHRjZWxsSXRlbS5SZXNldCgpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgRW5hYmxlKCk6IHZvaWQge1xuXG5cdFx0dGhpcy5jZWxsSXRlbXMuZm9yRWFjaChjZWxsID0+IGNlbGwuRW5hYmxlKCkpO1xuXHR9XG5cdHB1YmxpYyBEaXNhYmxlKCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEl0ZW1zLmZvckVhY2goY2VsbCA9PiBjZWxsLkRpc2FibGUoKSk7XG5cdH1cblxuXHRwdWJsaWMgQWxsb3dCb3VuY2VVcCgpIHtcblx0XHR0aGlzLmFsbG93Qm91bmNlVXAgPT0gdHJ1ZTtcblx0XHRpZiAodGhpcy5zdGF0ZSA9PSBFU3Bpbm5pbmdTdGF0ZS5XYWl0aW5nQm91bmNlKSB7XG5cdFx0XHR0aGlzLmJvdW5jZSgpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBzZXRSZXN1bHRJdGVtcyhpdGVtczogc3RyaW5nW10pOiB2b2lkIHtcblx0XHR0aGlzLnJlc3VsdEl0ZW1zID0gW107XG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY2VsbEl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0bGV0IGNlbGxJdGVtID0gdGhpcy5jZWxsSXRlbXNbaW5kZXhdO1xuXHRcdFx0bGV0IGl0ZW0gPSBpdGVtc1tjZWxsSXRlbS5HZXRDZWxsSW5kZXgoKV07XG5cdFx0XHRpZiAoaXRlbSkge1xuXHRcdFx0XHR0aGlzLnJlc3VsdEl0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHRcdHRoaXMucmF3UmVzdWx0SXRlbXMucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgU3RvcChpdGVtczogc3RyaW5nW10pOiB2b2lkIHtcblx0XHR0aGlzLnNldFJlc3VsdEl0ZW1zKGl0ZW1zKTtcblx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT0gRURpcmVjdGlvbi5VcCkge1xuXHRcdFx0dGhpcy5yZXN1bHRJdGVtcy5yZXZlcnNlKCk7XG5cdFx0XHR0aGlzLnJhd1Jlc3VsdEl0ZW1zLnJldmVyc2UoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zdGF0ZSAhPSBFU3Bpbm5pbmdTdGF0ZS5JZGxlKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZSA9PSBFU3Bpbm5pbmdTdGF0ZS5Cb3VuY2UgfHwgdGhpcy5zdGF0ZSA9PSBFU3Bpbm5pbmdTdGF0ZS5TdG9wU2Nyb2xsKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSBFU3Bpbm5pbmdTdGF0ZS5JZGxlO1xuXHRcdFx0dGhpcy5yZXN1bHRJdGVtcy5sZW5ndGggPSAwO1xuXHRcdFx0dGhpcy5zZXRGaW5hbFJlc3VsdHMoKTtcblx0XHRcdHRoaXMuc3RvcFNjcm9sbCgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBjaGVja1JlYWR5VG9TdG9wKCk6IGJvb2xlYW4ge1xuXHRcdGxldCBpc1JlYWR5ID0gdGhpcy5yYXdSZXN1bHRJdGVtcy5sZW5ndGggPiAwICYmIHRoaXMucmVzdWx0SXRlbXMubGVuZ3RoID09PSB0aGlzLnJhd1Jlc3VsdEl0ZW1zLmxlbmd0aDtcblx0XHRyZXR1cm4gaXNSZWFkeTtcblx0fVxuXG5cblx0cHJvdGVjdGVkIGZpeFVwZGF0ZSgpOiB2b2lkIHtcblxuXHRcdHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuXHRcdFx0Y2FzZSBFU3Bpbm5pbmdTdGF0ZS5JZGxlOlxuXHRcdFx0Y2FzZSBFU3Bpbm5pbmdTdGF0ZS5XYWl0aW5nQm91bmNlOlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRjYXNlIEVTcGlubmluZ1N0YXRlLk1vbWVudHVtOlxuXHRcdFx0XHR0aGlzLm1vbWVudHVtKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdGNhc2UgRVNwaW5uaW5nU3RhdGUuU2Nyb2xsOlxuXHRcdFx0XHR0aGlzLnNjcm9sbCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRjYXNlIEVTcGlubmluZ1N0YXRlLlN0b3BTY3JvbGw6XG5cdFx0XHRcdHRoaXMuc3RvcFNjcm9sbCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRjYXNlIEVTcGlubmluZ1N0YXRlLkJvdW5jZTpcblx0XHRcdFx0dGhpcy5ib3VuY2UoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufSJdfQ==