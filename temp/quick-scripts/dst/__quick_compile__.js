
(function () {
var scripts = [{"deps":{"./assets/Script/UI/bonus-game/Slot45-bonus-trigger-actor":1,"./assets/Script/base/Util/Slot45_date-util":2,"./assets/Script/avenger-game/avenger-total-win/total-win-panel":3,"./assets/Script/base/state-machine/state/Slot45-bonus-state":4,"./assets/Script/Slot45-game-config":5,"./assets/Script/UI/Slot45-notification-message":6,"./assets/Script/UI/feature/Slot45-feature-trigger-actor":7,"./assets/Script/UI/change-bet/Slot45-change-bet-actor":8,"./assets/Script/UI/freespins/Slot45-freespins-retrigger-actor":9,"./assets/Script/UI/history-popup/Slot45-popup-history-item":10,"./assets/Script/UI/popup/Slot45-bet-toggle-button":11,"./assets/Script/UI/jackpot/Slot45-jackpot-banner":12,"./assets/Script/UI/present-win/Slot45-win-line":13,"./assets/Script/UI/spin-panel/Slot45-spin-item-data":14,"./assets/Script/UI/provider/Slot45-sprite-frame-provider":15,"./assets/Script/base/animation/Slot45-animation":16,"./assets/Script/base/controller/Slot45-game-controller":17,"./assets/Script/base/events/Slot45-event-manager":18,"./assets/Script/base/sound/Slot45-sfs-player":19,"./assets/Script/config/sound-config":20,"./assets/Script/models/Slot45-bet-model":21,"./assets/Script/avenger-game/border-win-cell-panel/border-win-cell-panel":22,"./assets/Script/avenger-game/exploding-panel/avenger-exploding-panel":23,"./assets/Script/avenger-game/model/combo-data":24,"./assets/Script/avenger-game/spin-panel/avenger-spin-panel-config":25,"./assets/Script/base/state-machine/abstract/Slot45-state":26,"./assets/Script/UI/freespins/Slot45-freespins-trigger-actor":27,"./assets/Script/UI/feature/Slot45-feature-content-activation-actor":28,"./assets/Script/UI/feature/Slot45-feature-win-actor":29,"./assets/Script/UI/freespins/Slot45-freespins-feature":30,"./assets/Script/UI/freespins/Slot45-freespins-content-activation-actor":31,"./assets/Script/UI/history-popup/Slot45-popup-history":32,"./assets/Script/UI/history-popup/Slot45-popup-ranking-item":33,"./assets/Script/UI/history-popup/Slot45-popup-ranking":34,"./assets/Script/UI/jackpot/Slot45-jackpot-actor":35,"./assets/Script/UI/popup/Slot45-button-controller":36,"./assets/Script/UI/history-popup/Slot45-popup-history-detail":37,"./assets/Script/UI/popup/Slot45-button-home":38,"./assets/Script/UI/popup/Slot45-button-spin":39,"./assets/Script/UI/popup/Slot45-bet-button":40,"./assets/Script/UI/popup/Slot45-button":41,"./assets/Script/UI/popup/Slot45-button-spin-animation":42,"./assets/Script/UI/popup/Slot45-info-toggle-button":43,"./assets/Script/UI/popup/Slot45-info-toggle-panel":44,"./assets/Script/UI/popup/Slot45-info-page":45,"./assets/Script/UI/popup/Slot45-jackpot-info-content":46,"./assets/Script/UI/popup/Slot45-popup-error":47,"./assets/Script/UI/popup/Slot45-select-bet-panel":48,"./assets/Script/UI/popup/Slot45-round-popup":49,"./assets/Script/UI/popup/Slot45-system-panel":50,"./assets/Script/UI/popup/Slot45-popup-select-bet":51,"./assets/Script/UI/popup/Slot45-toggle-simulator":52,"./assets/Script/UI/present-win/Slot45-present-win-line-panel":53,"./assets/Script/UI/popup/Slot45-bet-button-v2":54,"./assets/Script/UI/present-win/Slot45-present-win-panel":55,"./assets/Script/UI/present-win/Slot45-win-cell-item":56,"./assets/Script/UI/spin-panel/Slot45-spin-item":57,"./assets/Script/UI/spin-panel/Slot45-cell-item":58,"./assets/Script/UI/spin-panel/Slot45-spin-panel":59,"./assets/Script/base/Slot45-simulator-server":60,"./assets/Script/base/animation/Slot45-spine-animation-handler":61,"./assets/Script/base/Slot45-perist-root-node":62,"./assets/Script/base/Util/Slot45-number-converter":63,"./assets/Script/base/animation/Slot45-animation-provider":64,"./assets/Script/base/Slot45-connect-server":65,"./assets/Script/base/animation/Slot45-spine-animation":66,"./assets/Script/base/sound/Slot45-sound-button-click":67,"./assets/Script/base/sound/Slot45-sound-handler":68,"./assets/Script/base/sound/Slot45-sound-player":69,"./assets/Script/base/sound/Slot45-sound-controller":70,"./assets/Script/base/sound/Slot45-music-player":71,"./assets/Script/models/Slot45-balance-model":72,"./assets/Script/avenger-game/avenger-total-win/combo-win-point":73,"./assets/Script/Slot45-slotty-setting":74,"./assets/Script/avenger-game/exploding-panel/avenger-smoke-panel":75,"./assets/Script/avenger-game/exploding-panel/avenger-exploding-cell":76,"./assets/Script/avenger-game/avenger-total-win/effect-total-win-panel":77,"./assets/Script/avenger-game/spin-panel/avenger-spin-panel":78,"./assets/Script/base/state-machine/state/Slot45-expand-wild-state":79,"./assets/Script/base/state-machine/state/Slot45-feature-trigger-state":80,"./assets/Script/avenger-game/spin-panel/avenger-spin-item":81,"./assets/Script/base/state-machine/state/Slot45-feature-win-state":82,"./assets/Script/base/state-machine/state/Slot45-init-state":83,"./assets/Script/base/state-machine/state/Slot45-spin-state":84,"./assets/Script/base/state-machine/state/Slot45-jackpot-state":85,"./assets/Script/base/state-machine/state/Slot45-win-state":86,"./assets/Script/base/state-machine/state/Slot45-bet-state":87,"./assets/Script/Test/aka_1009_TestGameManager":88,"./assets/Script/UI/big-win/Slot45-big-win-actor":90,"./assets/Script/GameManager/Slot45-SpinGameData2":91,"./assets/Script/GameManager/Slot45-SpinGameData":92,"./assets/Script/GameManager/Slot45-JoinGameData":93,"./assets/Script/GameManager/Slot45-GameManager":89},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../base/controller/Slot45-game-controller":17,"../../base/events/Slot45-event-manager":18,"../feature/Slot45-feature-trigger-actor":7},"path":"preview-scripts/assets/Script/UI/bonus-game/Slot45-bonus-trigger-actor.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/Util/Slot45_date-util.js"},{"deps":{"../../base/Util/Slot45-number-converter":63,"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/avenger-game/avenger-total-win/total-win-panel.js"},{"deps":{"../../controller/Slot45-game-controller":17,"../../events/Slot45-event-manager":18,"../abstract/Slot45-state":26,"./Slot45-bet-state":87,"./Slot45-feature-trigger-state":80,"./Slot45-spin-state":84},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-bonus-state.js"},{"deps":{},"path":"preview-scripts/assets/Script/Slot45-game-config.js"},{"deps":{"../base/Util/Slot45-number-converter":63,"../base/events/Slot45-event-manager":18,"./provider/Slot45-sprite-frame-provider":15},"path":"preview-scripts/assets/Script/UI/Slot45-notification-message.js"},{"deps":{"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/UI/feature/Slot45-feature-trigger-actor.js"},{"deps":{"../../base/Util/Slot45-number-converter":63,"../../base/events/Slot45-event-manager":18,"../../models/Slot45-balance-model":72,"../../models/Slot45-bet-model":21},"path":"preview-scripts/assets/Script/UI/change-bet/Slot45-change-bet-actor.js"},{"deps":{"../../base/controller/Slot45-game-controller":17,"../../base/events/Slot45-event-manager":18,"../feature/Slot45-feature-trigger-actor":7},"path":"preview-scripts/assets/Script/UI/freespins/Slot45-freespins-retrigger-actor.js"},{"deps":{"../../base/Util/Slot45-number-converter":63,"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/UI/history-popup/Slot45-popup-history-item.js"},{"deps":{"../../base/events/Slot45-event-manager":18,"./Slot45-info-toggle-button":43},"path":"preview-scripts/assets/Script/UI/popup/Slot45-bet-toggle-button.js"},{"deps":{"../../base/Util/Slot45-number-converter":63,"../../base/events/Slot45-event-manager":18,"../../models/Slot45-bet-model":21},"path":"preview-scripts/assets/Script/UI/jackpot/Slot45-jackpot-banner.js"},{"deps":{},"path":"preview-scripts/assets/Script/UI/present-win/Slot45-win-line.js"},{"deps":{},"path":"preview-scripts/assets/Script/UI/spin-panel/Slot45-spin-item-data.js"},{"deps":{},"path":"preview-scripts/assets/Script/UI/provider/Slot45-sprite-frame-provider.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/animation/Slot45-animation.js"},{"deps":{"../../UI/present-win/Slot45-present-win-panel":55,"../events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/base/controller/Slot45-game-controller.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/events/Slot45-event-manager.js"},{"deps":{"./Slot45-sound-player":69},"path":"preview-scripts/assets/Script/base/sound/Slot45-sfs-player.js"},{"deps":{},"path":"preview-scripts/assets/Script/config/sound-config.js"},{"deps":{},"path":"preview-scripts/assets/Script/models/Slot45-bet-model.js"},{"deps":{"../../Slot45-game-config":5,"../../base/animation/Slot45-animation-provider":64,"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/avenger-game/border-win-cell-panel/border-win-cell-panel.js"},{"deps":{"../../base/events/Slot45-event-manager":18,"../spin-panel/avenger-spin-item":81,"./avenger-exploding-cell":76},"path":"preview-scripts/assets/Script/avenger-game/exploding-panel/avenger-exploding-panel.js"},{"deps":{},"path":"preview-scripts/assets/Script/avenger-game/model/combo-data.js"},{"deps":{},"path":"preview-scripts/assets/Script/avenger-game/spin-panel/avenger-spin-panel-config.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/state-machine/abstract/Slot45-state.js"},{"deps":{"../../base/controller/Slot45-game-controller":17,"../../base/events/Slot45-event-manager":18,"../feature/Slot45-feature-trigger-actor":7},"path":"preview-scripts/assets/Script/UI/freespins/Slot45-freespins-trigger-actor.js"},{"deps":{"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/UI/feature/Slot45-feature-content-activation-actor.js"},{"deps":{"../../base/Util/Slot45-number-converter":63,"../../base/controller/Slot45-game-controller":17,"../../base/events/Slot45-event-manager":18,"../../models/Slot45-balance-model":72},"path":"preview-scripts/assets/Script/UI/feature/Slot45-feature-win-actor.js"},{"deps":{"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/UI/freespins/Slot45-freespins-feature.js"},{"deps":{"../../base/controller/Slot45-game-controller":17,"../../base/events/Slot45-event-manager":18,"../feature/Slot45-feature-content-activation-actor":28},"path":"preview-scripts/assets/Script/UI/freespins/Slot45-freespins-content-activation-actor.js"},{"deps":{"../../GameManager/Slot45-GameManager":89,"../../base/Util/Slot45_date-util":2,"../../base/events/Slot45-event-manager":18,"./Slot45-popup-history-item":10},"path":"preview-scripts/assets/Script/UI/history-popup/Slot45-popup-history.js"},{"deps":{"../../base/Util/Slot45-number-converter":63},"path":"preview-scripts/assets/Script/UI/history-popup/Slot45-popup-ranking-item.js"},{"deps":{"../../base/Util/Slot45_date-util":2,"../../base/events/Slot45-event-manager":18,"./Slot45-popup-history":32,"./Slot45-popup-ranking-item":33},"path":"preview-scripts/assets/Script/UI/history-popup/Slot45-popup-ranking.js"},{"deps":{"../../base/Util/Slot45-number-converter":63,"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/UI/jackpot/Slot45-jackpot-actor.js"},{"deps":{"../../base/events/Slot45-event-manager":18,"./Slot45-button":41},"path":"preview-scripts/assets/Script/UI/popup/Slot45-button-controller.js"},{"deps":{"../../base/events/Slot45-event-manager":18,"../provider/Slot45-sprite-frame-provider":15},"path":"preview-scripts/assets/Script/UI/history-popup/Slot45-popup-history-detail.js"},{"deps":{},"path":"preview-scripts/assets/Script/UI/popup/Slot45-button-home.js"},{"deps":{"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/UI/popup/Slot45-button-spin.js"},{"deps":{"../../base/events/Slot45-event-manager":18,"../../models/Slot45-balance-model":72,"../../models/Slot45-bet-model":21,"./Slot45-button":41},"path":"preview-scripts/assets/Script/UI/popup/Slot45-bet-button.js"},{"deps":{"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/UI/popup/Slot45-button.js"},{"deps":{"../../base/events/Slot45-event-manager":18,"./Slot45-button":41},"path":"preview-scripts/assets/Script/UI/popup/Slot45-button-spin-animation.js"},{"deps":{"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/UI/popup/Slot45-info-toggle-button.js"},{"deps":{"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/UI/popup/Slot45-info-toggle-panel.js"},{"deps":{"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/UI/popup/Slot45-info-page.js"},{"deps":{"../../base/events/Slot45-event-manager":18,"../../models/Slot45-bet-model":21},"path":"preview-scripts/assets/Script/UI/popup/Slot45-jackpot-info-content.js"},{"deps":{"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/UI/popup/Slot45-popup-error.js"},{"deps":{"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/UI/popup/Slot45-select-bet-panel.js"},{"deps":{"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/UI/popup/Slot45-round-popup.js"},{"deps":{"../../base/events/Slot45-event-manager":18,"./Slot45-toggle-simulator":52},"path":"preview-scripts/assets/Script/UI/popup/Slot45-system-panel.js"},{"deps":{"../../base/events/Slot45-event-manager":18,"../../models/Slot45-balance-model":72,"../../models/Slot45-bet-model":21},"path":"preview-scripts/assets/Script/UI/popup/Slot45-popup-select-bet.js"},{"deps":{"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/UI/popup/Slot45-toggle-simulator.js"},{"deps":{"../../base/events/Slot45-event-manager":18,"./Slot45-win-line":13},"path":"preview-scripts/assets/Script/UI/present-win/Slot45-present-win-line-panel.js"},{"deps":{"../../base/events/Slot45-event-manager":18,"../../base/Util/Slot45-number-converter":63,"../../models/Slot45-bet-model":21,"./Slot45-bet-button":40},"path":"preview-scripts/assets/Script/UI/popup/Slot45-bet-button-v2.js"},{"deps":{"../../Slot45-game-config":5,"../../base/controller/Slot45-game-controller":17,"../../base/events/Slot45-event-manager":18,"../../models/Slot45-bet-model":21,"./Slot45-win-cell-item":56},"path":"preview-scripts/assets/Script/UI/present-win/Slot45-present-win-panel.js"},{"deps":{"../../Slot45-game-config":5,"../../base/animation/Slot45-animation-provider":64,"../provider/Slot45-sprite-frame-provider":15},"path":"preview-scripts/assets/Script/UI/present-win/Slot45-win-cell-item.js"},{"deps":{"./Slot45-cell-item":58},"path":"preview-scripts/assets/Script/UI/spin-panel/Slot45-spin-item.js"},{"deps":{"../../base/animation/Slot45-animation-provider":64,"../provider/Slot45-sprite-frame-provider":15},"path":"preview-scripts/assets/Script/UI/spin-panel/Slot45-cell-item.js"},{"deps":{"../../Slot45-game-config":5,"../../base/Util/Slot45-number-converter":63,"../../base/events/Slot45-event-manager":18,"./Slot45-spin-item":57,"./Slot45-spin-item-data":14},"path":"preview-scripts/assets/Script/UI/spin-panel/Slot45-spin-panel.js"},{"deps":{"../UI/present-win/Slot45-present-win-panel":55,"../models/Slot45-balance-model":72,"../models/Slot45-bet-model":21,"./events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/base/Slot45-simulator-server.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/animation/Slot45-spine-animation-handler.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/Slot45-perist-root-node.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/Util/Slot45-number-converter.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/animation/Slot45-animation-provider.js"},{"deps":{"../GameManager/Slot45-GameManager":89,"../UI/present-win/Slot45-present-win-panel":55,"../Slot45-game-config":5,"../avenger-game/model/combo-data":24,"../models/Slot45-balance-model":72,"../models/Slot45-bet-model":21,"./events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/base/Slot45-connect-server.js"},{"deps":{"./Slot45-animation":16,"./Slot45-spine-animation-handler":61},"path":"preview-scripts/assets/Script/base/animation/Slot45-spine-animation.js"},{"deps":{"../events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/base/sound/Slot45-sound-button-click.js"},{"deps":{"../../config/sound-config":20,"../events/Slot45-event-manager":18,"./Slot45-sound-controller":70},"path":"preview-scripts/assets/Script/base/sound/Slot45-sound-handler.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/sound/Slot45-sound-player.js"},{"deps":{"../events/Slot45-event-manager":18,"./Slot45-sfs-player":19,"./Slot45-music-player":71},"path":"preview-scripts/assets/Script/base/sound/Slot45-sound-controller.js"},{"deps":{"./Slot45-sound-player":69},"path":"preview-scripts/assets/Script/base/sound/Slot45-music-player.js"},{"deps":{},"path":"preview-scripts/assets/Script/models/Slot45-balance-model.js"},{"deps":{"../../base/Util/Slot45-number-converter":63,"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/avenger-game/avenger-total-win/combo-win-point.js"},{"deps":{"./base/events/Slot45-event-manager":18,"./base/state-machine/state/Slot45-init-state":83},"path":"preview-scripts/assets/Script/Slot45-slotty-setting.js"},{"deps":{"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/avenger-game/exploding-panel/avenger-smoke-panel.js"},{"deps":{"../../base/animation/Slot45-animation-provider":64},"path":"preview-scripts/assets/Script/avenger-game/exploding-panel/avenger-exploding-cell.js"},{"deps":{"../../base/events/Slot45-event-manager":18},"path":"preview-scripts/assets/Script/avenger-game/avenger-total-win/effect-total-win-panel.js"},{"deps":{"../../UI/spin-panel/Slot45-spin-panel":59},"path":"preview-scripts/assets/Script/avenger-game/spin-panel/avenger-spin-panel.js"},{"deps":{"../../controller/Slot45-game-controller":17,"../../events/Slot45-event-manager":18,"../abstract/Slot45-state":26,"./Slot45-bet-state":87,"./Slot45-feature-trigger-state":80,"./Slot45-feature-win-state":82,"./Slot45-spin-state":84,"./Slot45-win-state":86},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-expand-wild-state.js"},{"deps":{"../../events/Slot45-event-manager":18,"../abstract/Slot45-state":26,"./Slot45-bonus-state":4,"./Slot45-feature-win-state":82,"./Slot45-spin-state":84},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-feature-trigger-state.js"},{"deps":{"../../UI/spin-panel/Slot45-spin-item":57,"../../base/events/Slot45-event-manager":18,"./avenger-spin-panel-config":25},"path":"preview-scripts/assets/Script/avenger-game/spin-panel/avenger-spin-item.js"},{"deps":{"../../controller/Slot45-game-controller":17,"../../events/Slot45-event-manager":18,"../abstract/Slot45-state":26,"./Slot45-bet-state":87,"./Slot45-feature-trigger-state":80,"./Slot45-spin-state":84},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-feature-win-state.js"},{"deps":{"../abstract/Slot45-state":26,"./Slot45-bet-state":87,"./Slot45-bonus-state":4,"./Slot45-spin-state":84},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-init-state.js"},{"deps":{"../../controller/Slot45-game-controller":17,"../../events/Slot45-event-manager":18,"../abstract/Slot45-state":26,"./Slot45-bet-state":87,"./Slot45-expand-wild-state":79,"./Slot45-feature-trigger-state":80,"./Slot45-feature-win-state":82,"./Slot45-win-state":86},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-spin-state.js"},{"deps":{"../../controller/Slot45-game-controller":17,"../../events/Slot45-event-manager":18,"../abstract/Slot45-state":26,"./Slot45-bet-state":87,"./Slot45-feature-trigger-state":80,"./Slot45-feature-win-state":82,"./Slot45-spin-state":84},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-jackpot-state.js"},{"deps":{"../../controller/Slot45-game-controller":17,"../../events/Slot45-event-manager":18,"../abstract/Slot45-state":26,"./Slot45-bet-state":87,"./Slot45-feature-trigger-state":80,"./Slot45-feature-win-state":82,"./Slot45-jackpot-state":85,"./Slot45-spin-state":84},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-win-state.js"},{"deps":{"../../events/Slot45-event-manager":18,"../abstract/Slot45-state":26,"./Slot45-spin-state":84},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-bet-state.js"},{"deps":{"../GameManager/Slot45-GameManager":89},"path":"preview-scripts/assets/Script/Test/aka_1009_TestGameManager.js"},{"deps":{"./Slot45-JoinGameData":93,"./Slot45-SpinGameData2":91,"events":94},"path":"preview-scripts/assets/Script/GameManager/Slot45-GameManager.js"},{"deps":{"../../base/Util/Slot45-number-converter":63,"../../base/events/Slot45-event-manager":18,"../../models/Slot45-bet-model":21},"path":"preview-scripts/assets/Script/UI/big-win/Slot45-big-win-actor.js"},{"deps":{},"path":"preview-scripts/assets/Script/GameManager/Slot45-SpinGameData2.js"},{"deps":{},"path":"preview-scripts/assets/Script/GameManager/Slot45-SpinGameData.js"},{"deps":{},"path":"preview-scripts/assets/Script/GameManager/Slot45-JoinGameData.js"},{"deps":{},"path":"preview-scripts/__node_modules/events/events.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    