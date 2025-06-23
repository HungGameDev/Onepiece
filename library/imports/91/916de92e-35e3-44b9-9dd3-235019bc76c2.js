"use strict";
cc._RF.push(module, '916dekuNeNEuZ3TI1AZvHbC', 'Slot45-spin-item');
// Script/UI/spin-panel/Slot45-spin-item.ts

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
var Slot45_cell_item_1 = require("./Slot45-cell-item");
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
            // G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_reelspin', isLoop: false });
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
        // G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_reelstop', isLoop: false });
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
        property(Slot45_cell_item_1.default)
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