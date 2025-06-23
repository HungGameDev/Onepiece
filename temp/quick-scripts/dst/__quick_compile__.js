
(function () {
var scripts = [{"deps":{"./assets/Script/base/animation/Slot45-spine-animation-handler":1,"./assets/Script/avenger-game/avenger-total-win/total-win-panel":2,"./assets/Script/base/state-machine/state/Slot45-bonus-state":3,"./assets/Script/Slot45-game-config":4,"./assets/Script/base/Slot45-connect-server":5,"./assets/Script/base/controller/Slot45-game-controller":6,"./assets/Script/base/events/Slot45-event-manager":7,"./assets/Script/models/Slot45-bet-model":8,"./assets/Script/base/sound/Slot45-sound-button-click":9,"./assets/Script/config/sound-config":10,"./assets/Script/avenger-game/exploding-panel/avenger-exploding-panel":11,"./assets/Script/avenger-game/border-win-cell-panel/border-win-cell-panel":12,"./assets/Script/avenger-game/model/combo-data":13,"./assets/Script/avenger-game/spin-panel/avenger-spin-panel-config":14,"./assets/Script/base/state-machine/abstract/Slot45-state":15,"./assets/Script/base/animation/Slot45-animation":16,"./assets/Script/base/animation/Slot45-spine-animation":17,"./assets/Script/base/Slot45-perist-root-node":18,"./assets/Script/base/sound/Slot45-sfs-player":19,"./assets/Script/base/sound/Slot45-sound-controller":20,"./assets/Script/base/Slot45-simulator-server":21,"./assets/Script/models/Slot45-balance-model":22,"./assets/Script/base/animation/Slot45-animation-provider":23,"./assets/Script/avenger-game/exploding-panel/avenger-smoke-panel":24,"./assets/Script/Slot45-slotty-setting":25,"./assets/Script/base/sound/Slot45-sound-handler":26,"./assets/Script/avenger-game/avenger-total-win/combo-win-point":27,"./assets/Script/avenger-game/avenger-total-win/effect-total-win-panel":28,"./assets/Script/avenger-game/exploding-panel/avenger-exploding-cell":29,"./assets/Script/base/sound/Slot45-sound-player":30,"./assets/Script/base/state-machine/state/Slot45-expand-wild-state":31,"./assets/Script/base/state-machine/state/Slot45-feature-win-state":32,"./assets/Script/base/state-machine/state/Slot45-feature-trigger-state":33,"./assets/Script/base/sound/Slot45-music-player":34,"./assets/Script/base/state-machine/state/Slot45-spin-state":35,"./assets/Script/base/state-machine/state/Slot45-jackpot-state":36,"./assets/Script/base/state-machine/state/Slot45-bet-state":37,"./assets/Script/base/state-machine/state/Slot45-win-state":38,"./assets/Script/avenger-game/spin-panel/avenger-spin-item":39,"./assets/Script/base/state-machine/state/Slot45-init-state":40,"./assets/Script/avenger-game/spin-panel/avenger-spin-panel":41,"./assets/Script/UI/big-win/Slot45-big-win-actor":42,"./assets/Script/Test/aka_1009_TestGameManager":43,"./assets/Script/UI/change-bet/Slot45-change-bet-actor":45,"./assets/Script/UI/bonus-game/Slot45-bonus-trigger-actor":46,"./assets/Script/UI/freespins/Slot45-freespins-content-activation-actor":47,"./assets/Script/UI/feature/Slot45-feature-trigger-actor":48,"./assets/Script/UI/popup/Slot45-bet-toggle-button":49,"./assets/Script/UI/history-popup/Slot45-popup-history":50,"./assets/Script/UI/jackpot/Slot45-jackpot-actor":51,"./assets/Script/UI/present-win/Slot45-win-cell-item":52,"./assets/Script/UI/provider/Slot45-sprite-frame-provider":53,"./assets/Script/base/Util/Slot45_date-util":54,"./assets/Script/UI/spin-panel/Slot45-spin-item":55,"./assets/Script/UI/Slot45-notification-message":56,"./assets/Script/GameManager/Slot45-JoinGameData":57,"./assets/Script/GameManager/Slot45-SpinGameData":58,"./assets/Script/GameManager/Slot45-SpinGameData2":59,"./assets/Script/UI/feature/Slot45-feature-win-actor":60,"./assets/Script/UI/history-popup/Slot45-popup-history-detail":61,"./assets/Script/UI/history-popup/Slot45-popup-history-item":62,"./assets/Script/UI/history-popup/Slot45-popup-ranking-item":63,"./assets/Script/UI/freespins/Slot45-freespins-feature":64,"./assets/Script/UI/feature/Slot45-feature-content-activation-actor":65,"./assets/Script/UI/freespins/Slot45-freespins-retrigger-actor":66,"./assets/Script/UI/jackpot/Slot45-jackpot-banner":67,"./assets/Script/UI/freespins/Slot45-freespins-trigger-actor":68,"./assets/Script/UI/popup/Slot45-button-controller":69,"./assets/Script/UI/history-popup/Slot45-popup-ranking":70,"./assets/Script/UI/popup/Slot45-button-spin-animation":71,"./assets/Script/UI/popup/Slot45-bet-button":72,"./assets/Script/UI/popup/Slot45-button-home":73,"./assets/Script/UI/popup/Slot45-info-toggle-button":74,"./assets/Script/UI/popup/Slot45-popup-select-bet":75,"./assets/Script/UI/popup/Slot45-button":76,"./assets/Script/UI/popup/Slot45-info-toggle-panel":77,"./assets/Script/UI/popup/Slot45-popup-error":78,"./assets/Script/UI/popup/Slot45-info-page":79,"./assets/Script/UI/popup/Slot45-jackpot-info-content":80,"./assets/Script/UI/popup/Slot45-button-spin":81,"./assets/Script/UI/popup/Slot45-toggle-simulator":82,"./assets/Script/UI/popup/Slot45-round-popup":83,"./assets/Script/UI/popup/Slot45-bet-button-v2":84,"./assets/Script/UI/popup/Slot45-select-bet-panel":85,"./assets/Script/UI/popup/Slot45-system-panel":86,"./assets/Script/UI/present-win/Slot45-present-win-panel":87,"./assets/Script/UI/spin-panel/Slot45-spin-item-data":88,"./assets/Script/UI/present-win/Slot45-present-win-line-panel":89,"./assets/Script/UI/present-win/Slot45-win-line":90,"./assets/Script/UI/spin-panel/Slot45-spin-panel":91,"./assets/Script/UI/spin-panel/Slot45-cell-item":92,"./assets/Script/base/Util/Slot45-number-converter":93,"./assets/Script/GameManager/Slot45-GameManager":44},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/animation/Slot45-spine-animation-handler.js"},{"deps":{"../../base/Util/Slot45-number-converter":93,"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/avenger-game/avenger-total-win/total-win-panel.js"},{"deps":{"../../controller/Slot45-game-controller":6,"../../events/Slot45-event-manager":7,"../abstract/Slot45-state":15,"./Slot45-bet-state":37,"./Slot45-feature-trigger-state":33,"./Slot45-spin-state":35},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-bonus-state.js"},{"deps":{},"path":"preview-scripts/assets/Script/Slot45-game-config.js"},{"deps":{"../GameManager/Slot45-GameManager":44,"../UI/present-win/Slot45-present-win-panel":87,"../Slot45-game-config":4,"../avenger-game/model/combo-data":13,"../models/Slot45-balance-model":22,"../models/Slot45-bet-model":8,"./events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/base/Slot45-connect-server.js"},{"deps":{"../../UI/present-win/Slot45-present-win-panel":87,"../events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/base/controller/Slot45-game-controller.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/events/Slot45-event-manager.js"},{"deps":{},"path":"preview-scripts/assets/Script/models/Slot45-bet-model.js"},{"deps":{"../events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/base/sound/Slot45-sound-button-click.js"},{"deps":{},"path":"preview-scripts/assets/Script/config/sound-config.js"},{"deps":{"../../base/events/Slot45-event-manager":7,"../spin-panel/avenger-spin-item":39,"./avenger-exploding-cell":29},"path":"preview-scripts/assets/Script/avenger-game/exploding-panel/avenger-exploding-panel.js"},{"deps":{"../../Slot45-game-config":4,"../../base/animation/Slot45-animation-provider":23,"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/avenger-game/border-win-cell-panel/border-win-cell-panel.js"},{"deps":{},"path":"preview-scripts/assets/Script/avenger-game/model/combo-data.js"},{"deps":{},"path":"preview-scripts/assets/Script/avenger-game/spin-panel/avenger-spin-panel-config.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/state-machine/abstract/Slot45-state.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/animation/Slot45-animation.js"},{"deps":{"./Slot45-animation":16,"./Slot45-spine-animation-handler":1},"path":"preview-scripts/assets/Script/base/animation/Slot45-spine-animation.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/Slot45-perist-root-node.js"},{"deps":{"./Slot45-sound-player":30},"path":"preview-scripts/assets/Script/base/sound/Slot45-sfs-player.js"},{"deps":{"../events/Slot45-event-manager":7,"./Slot45-sfs-player":19,"./Slot45-music-player":34},"path":"preview-scripts/assets/Script/base/sound/Slot45-sound-controller.js"},{"deps":{"../UI/present-win/Slot45-present-win-panel":87,"../models/Slot45-balance-model":22,"../models/Slot45-bet-model":8,"./events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/base/Slot45-simulator-server.js"},{"deps":{},"path":"preview-scripts/assets/Script/models/Slot45-balance-model.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/animation/Slot45-animation-provider.js"},{"deps":{"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/avenger-game/exploding-panel/avenger-smoke-panel.js"},{"deps":{"./base/events/Slot45-event-manager":7,"./base/state-machine/state/Slot45-init-state":40},"path":"preview-scripts/assets/Script/Slot45-slotty-setting.js"},{"deps":{"../../config/sound-config":10,"../events/Slot45-event-manager":7,"./Slot45-sound-controller":20},"path":"preview-scripts/assets/Script/base/sound/Slot45-sound-handler.js"},{"deps":{"../../base/Util/Slot45-number-converter":93,"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/avenger-game/avenger-total-win/combo-win-point.js"},{"deps":{"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/avenger-game/avenger-total-win/effect-total-win-panel.js"},{"deps":{"../../base/animation/Slot45-animation-provider":23},"path":"preview-scripts/assets/Script/avenger-game/exploding-panel/avenger-exploding-cell.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/sound/Slot45-sound-player.js"},{"deps":{"../../controller/Slot45-game-controller":6,"../../events/Slot45-event-manager":7,"../abstract/Slot45-state":15,"./Slot45-bet-state":37,"./Slot45-feature-trigger-state":33,"./Slot45-feature-win-state":32,"./Slot45-spin-state":35,"./Slot45-win-state":38},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-expand-wild-state.js"},{"deps":{"../../controller/Slot45-game-controller":6,"../../events/Slot45-event-manager":7,"../abstract/Slot45-state":15,"./Slot45-bet-state":37,"./Slot45-feature-trigger-state":33,"./Slot45-spin-state":35},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-feature-win-state.js"},{"deps":{"../../events/Slot45-event-manager":7,"../abstract/Slot45-state":15,"./Slot45-bonus-state":3,"./Slot45-feature-win-state":32,"./Slot45-spin-state":35},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-feature-trigger-state.js"},{"deps":{"./Slot45-sound-player":30},"path":"preview-scripts/assets/Script/base/sound/Slot45-music-player.js"},{"deps":{"../../controller/Slot45-game-controller":6,"../../events/Slot45-event-manager":7,"../abstract/Slot45-state":15,"./Slot45-bet-state":37,"./Slot45-expand-wild-state":31,"./Slot45-feature-trigger-state":33,"./Slot45-feature-win-state":32,"./Slot45-win-state":38},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-spin-state.js"},{"deps":{"../../controller/Slot45-game-controller":6,"../../events/Slot45-event-manager":7,"../abstract/Slot45-state":15,"./Slot45-bet-state":37,"./Slot45-feature-trigger-state":33,"./Slot45-feature-win-state":32,"./Slot45-spin-state":35},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-jackpot-state.js"},{"deps":{"../../events/Slot45-event-manager":7,"../abstract/Slot45-state":15,"./Slot45-spin-state":35},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-bet-state.js"},{"deps":{"../../controller/Slot45-game-controller":6,"../../events/Slot45-event-manager":7,"../abstract/Slot45-state":15,"./Slot45-bet-state":37,"./Slot45-feature-trigger-state":33,"./Slot45-feature-win-state":32,"./Slot45-jackpot-state":36,"./Slot45-spin-state":35},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-win-state.js"},{"deps":{"../../UI/spin-panel/Slot45-spin-item":55,"../../base/events/Slot45-event-manager":7,"./avenger-spin-panel-config":14},"path":"preview-scripts/assets/Script/avenger-game/spin-panel/avenger-spin-item.js"},{"deps":{"../abstract/Slot45-state":15,"./Slot45-bet-state":37,"./Slot45-bonus-state":3,"./Slot45-spin-state":35},"path":"preview-scripts/assets/Script/base/state-machine/state/Slot45-init-state.js"},{"deps":{"../../UI/spin-panel/Slot45-spin-panel":91},"path":"preview-scripts/assets/Script/avenger-game/spin-panel/avenger-spin-panel.js"},{"deps":{"../../base/Util/Slot45-number-converter":93,"../../base/events/Slot45-event-manager":7,"../../models/Slot45-bet-model":8},"path":"preview-scripts/assets/Script/UI/big-win/Slot45-big-win-actor.js"},{"deps":{"../GameManager/Slot45-GameManager":44},"path":"preview-scripts/assets/Script/Test/aka_1009_TestGameManager.js"},{"deps":{"./Slot45-JoinGameData":57,"./Slot45-SpinGameData2":59,"events":94},"path":"preview-scripts/assets/Script/GameManager/Slot45-GameManager.js"},{"deps":{"../../base/Util/Slot45-number-converter":93,"../../base/events/Slot45-event-manager":7,"../../models/Slot45-balance-model":22,"../../models/Slot45-bet-model":8},"path":"preview-scripts/assets/Script/UI/change-bet/Slot45-change-bet-actor.js"},{"deps":{"../../base/controller/Slot45-game-controller":6,"../../base/events/Slot45-event-manager":7,"../feature/Slot45-feature-trigger-actor":48},"path":"preview-scripts/assets/Script/UI/bonus-game/Slot45-bonus-trigger-actor.js"},{"deps":{"../../base/controller/Slot45-game-controller":6,"../../base/events/Slot45-event-manager":7,"../feature/Slot45-feature-content-activation-actor":65},"path":"preview-scripts/assets/Script/UI/freespins/Slot45-freespins-content-activation-actor.js"},{"deps":{"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/UI/feature/Slot45-feature-trigger-actor.js"},{"deps":{"../../base/events/Slot45-event-manager":7,"./Slot45-info-toggle-button":74},"path":"preview-scripts/assets/Script/UI/popup/Slot45-bet-toggle-button.js"},{"deps":{"../../GameManager/Slot45-GameManager":44,"../../base/Util/Slot45_date-util":54,"../../base/events/Slot45-event-manager":7,"./Slot45-popup-history-item":62},"path":"preview-scripts/assets/Script/UI/history-popup/Slot45-popup-history.js"},{"deps":{"../../base/Util/Slot45-number-converter":93,"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/UI/jackpot/Slot45-jackpot-actor.js"},{"deps":{"../../Slot45-game-config":4,"../../base/animation/Slot45-animation-provider":23,"../provider/Slot45-sprite-frame-provider":53},"path":"preview-scripts/assets/Script/UI/present-win/Slot45-win-cell-item.js"},{"deps":{},"path":"preview-scripts/assets/Script/UI/provider/Slot45-sprite-frame-provider.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/Util/Slot45_date-util.js"},{"deps":{"./Slot45-cell-item":92},"path":"preview-scripts/assets/Script/UI/spin-panel/Slot45-spin-item.js"},{"deps":{"../base/Util/Slot45-number-converter":93,"../base/events/Slot45-event-manager":7,"./provider/Slot45-sprite-frame-provider":53},"path":"preview-scripts/assets/Script/UI/Slot45-notification-message.js"},{"deps":{},"path":"preview-scripts/assets/Script/GameManager/Slot45-JoinGameData.js"},{"deps":{},"path":"preview-scripts/assets/Script/GameManager/Slot45-SpinGameData.js"},{"deps":{},"path":"preview-scripts/assets/Script/GameManager/Slot45-SpinGameData2.js"},{"deps":{"../../base/Util/Slot45-number-converter":93,"../../base/controller/Slot45-game-controller":6,"../../base/events/Slot45-event-manager":7,"../../models/Slot45-balance-model":22},"path":"preview-scripts/assets/Script/UI/feature/Slot45-feature-win-actor.js"},{"deps":{"../../base/events/Slot45-event-manager":7,"../provider/Slot45-sprite-frame-provider":53},"path":"preview-scripts/assets/Script/UI/history-popup/Slot45-popup-history-detail.js"},{"deps":{"../../base/Util/Slot45-number-converter":93,"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/UI/history-popup/Slot45-popup-history-item.js"},{"deps":{"../../base/Util/Slot45-number-converter":93},"path":"preview-scripts/assets/Script/UI/history-popup/Slot45-popup-ranking-item.js"},{"deps":{"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/UI/freespins/Slot45-freespins-feature.js"},{"deps":{"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/UI/feature/Slot45-feature-content-activation-actor.js"},{"deps":{"../../base/controller/Slot45-game-controller":6,"../../base/events/Slot45-event-manager":7,"../feature/Slot45-feature-trigger-actor":48},"path":"preview-scripts/assets/Script/UI/freespins/Slot45-freespins-retrigger-actor.js"},{"deps":{"../../base/Util/Slot45-number-converter":93,"../../base/events/Slot45-event-manager":7,"../../models/Slot45-bet-model":8},"path":"preview-scripts/assets/Script/UI/jackpot/Slot45-jackpot-banner.js"},{"deps":{"../../base/controller/Slot45-game-controller":6,"../../base/events/Slot45-event-manager":7,"../feature/Slot45-feature-trigger-actor":48},"path":"preview-scripts/assets/Script/UI/freespins/Slot45-freespins-trigger-actor.js"},{"deps":{"../../base/events/Slot45-event-manager":7,"./Slot45-button":76},"path":"preview-scripts/assets/Script/UI/popup/Slot45-button-controller.js"},{"deps":{"../../base/Util/Slot45_date-util":54,"../../base/events/Slot45-event-manager":7,"./Slot45-popup-history":50,"./Slot45-popup-ranking-item":63},"path":"preview-scripts/assets/Script/UI/history-popup/Slot45-popup-ranking.js"},{"deps":{"../../base/events/Slot45-event-manager":7,"./Slot45-button":76},"path":"preview-scripts/assets/Script/UI/popup/Slot45-button-spin-animation.js"},{"deps":{"../../base/events/Slot45-event-manager":7,"../../models/Slot45-balance-model":22,"../../models/Slot45-bet-model":8,"./Slot45-button":76},"path":"preview-scripts/assets/Script/UI/popup/Slot45-bet-button.js"},{"deps":{},"path":"preview-scripts/assets/Script/UI/popup/Slot45-button-home.js"},{"deps":{"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/UI/popup/Slot45-info-toggle-button.js"},{"deps":{"../../base/events/Slot45-event-manager":7,"../../models/Slot45-balance-model":22,"../../models/Slot45-bet-model":8},"path":"preview-scripts/assets/Script/UI/popup/Slot45-popup-select-bet.js"},{"deps":{"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/UI/popup/Slot45-button.js"},{"deps":{"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/UI/popup/Slot45-info-toggle-panel.js"},{"deps":{"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/UI/popup/Slot45-popup-error.js"},{"deps":{"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/UI/popup/Slot45-info-page.js"},{"deps":{"../../base/events/Slot45-event-manager":7,"../../models/Slot45-bet-model":8},"path":"preview-scripts/assets/Script/UI/popup/Slot45-jackpot-info-content.js"},{"deps":{"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/UI/popup/Slot45-button-spin.js"},{"deps":{"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/UI/popup/Slot45-toggle-simulator.js"},{"deps":{"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/UI/popup/Slot45-round-popup.js"},{"deps":{"../../base/events/Slot45-event-manager":7,"../../base/Util/Slot45-number-converter":93,"../../models/Slot45-bet-model":8,"./Slot45-bet-button":72},"path":"preview-scripts/assets/Script/UI/popup/Slot45-bet-button-v2.js"},{"deps":{"../../base/events/Slot45-event-manager":7},"path":"preview-scripts/assets/Script/UI/popup/Slot45-select-bet-panel.js"},{"deps":{"../../base/events/Slot45-event-manager":7,"./Slot45-toggle-simulator":82},"path":"preview-scripts/assets/Script/UI/popup/Slot45-system-panel.js"},{"deps":{"../../Slot45-game-config":4,"../../base/controller/Slot45-game-controller":6,"../../base/events/Slot45-event-manager":7,"../../models/Slot45-bet-model":8,"./Slot45-win-cell-item":52},"path":"preview-scripts/assets/Script/UI/present-win/Slot45-present-win-panel.js"},{"deps":{},"path":"preview-scripts/assets/Script/UI/spin-panel/Slot45-spin-item-data.js"},{"deps":{"../../base/events/Slot45-event-manager":7,"./Slot45-win-line":90},"path":"preview-scripts/assets/Script/UI/present-win/Slot45-present-win-line-panel.js"},{"deps":{},"path":"preview-scripts/assets/Script/UI/present-win/Slot45-win-line.js"},{"deps":{"../../Slot45-game-config":4,"../../base/Util/Slot45-number-converter":93,"../../base/events/Slot45-event-manager":7,"./Slot45-spin-item":55,"./Slot45-spin-item-data":88},"path":"preview-scripts/assets/Script/UI/spin-panel/Slot45-spin-panel.js"},{"deps":{"../../base/animation/Slot45-animation-provider":23,"../provider/Slot45-sprite-frame-provider":53},"path":"preview-scripts/assets/Script/UI/spin-panel/Slot45-cell-item.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/Util/Slot45-number-converter.js"},{"deps":{},"path":"preview-scripts/__node_modules/events/events.js"}];
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
    