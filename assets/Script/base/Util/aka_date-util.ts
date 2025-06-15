function addZero(formatNumber: number, maxLength: number, textPadding: string): string {
    return formatNumber.toString().padStart(maxLength, textPadding);
}

/**
 * 
 * @param timestamp 
 * @returns 30/10 23:39:24
 */
export function formatDDMMHHmmSS(timestamp: number): string {
    const d = new Date(timestamp);
    const h = addZero(d.getHours(), 2, '0');
    const m = addZero(d.getMinutes(), 2, '0');
    const s = addZero(d.getSeconds(), 2, '0');
    const t = addZero(d.getDate(), 2, '0') + '/' + addZero(d.getMonth() + 1, 2, '0') + ' ' + h + ':' + m + ':' + s;
    return t;
}


/**
 * 
 * @param timestamp 
 * @returns 30/10/2023\n23:39:24
 */
export function formatDDMMYYHHmmSS(timestamp: number): string {
    const d = new Date(timestamp);
    const h = addZero(d.getHours(), 2, '0');
    const m = addZero(d.getMinutes(), 2, '0');
    const s = addZero(d.getSeconds(), 2, '0');
    const t = addZero(d.getDate(), 2, '0') + '/' + addZero(d.getMonth() + 1, 2, '0')+'/'+ d.getFullYear()  + '\n' + h + ':' + m + ':' + s;
    return t;
}