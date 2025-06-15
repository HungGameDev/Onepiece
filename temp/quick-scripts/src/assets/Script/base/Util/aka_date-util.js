"use strict";
cc._RF.push(module, 'b746eHco41Iq4DztaweVrSY', 'aka_date-util');
// Script/base/Util/aka_date-util.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDDMMYYHHmmSS = exports.formatDDMMHHmmSS = void 0;
function addZero(formatNumber, maxLength, textPadding) {
    return formatNumber.toString().padStart(maxLength, textPadding);
}
/**
 *
 * @param timestamp
 * @returns 30/10 23:39:24
 */
function formatDDMMHHmmSS(timestamp) {
    var d = new Date(timestamp);
    var h = addZero(d.getHours(), 2, '0');
    var m = addZero(d.getMinutes(), 2, '0');
    var s = addZero(d.getSeconds(), 2, '0');
    var t = addZero(d.getDate(), 2, '0') + '/' + addZero(d.getMonth() + 1, 2, '0') + ' ' + h + ':' + m + ':' + s;
    return t;
}
exports.formatDDMMHHmmSS = formatDDMMHHmmSS;
/**
 *
 * @param timestamp
 * @returns 30/10/2023\n23:39:24
 */
function formatDDMMYYHHmmSS(timestamp) {
    var d = new Date(timestamp);
    var h = addZero(d.getHours(), 2, '0');
    var m = addZero(d.getMinutes(), 2, '0');
    var s = addZero(d.getSeconds(), 2, '0');
    var t = addZero(d.getDate(), 2, '0') + '/' + addZero(d.getMonth() + 1, 2, '0') + '/' + d.getFullYear() + '\n' + h + ':' + m + ':' + s;
    return t;
}
exports.formatDDMMYYHHmmSS = formatDDMMYYHHmmSS;

cc._RF.pop();