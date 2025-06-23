
export default class Slot45Util {
	private static instance: Slot45Util;

	public static Instance() {
		if (!Slot45Util.instance)
			Slot45Util.instance = new Slot45Util();
		return Slot45Util.instance;
	}

	public NumberFormat(inputNumber: number): string {

		if (isNaN(inputNumber)) {
			return undefined; // or handle the case differently based on your requirements
		}
	
		if (inputNumber < 1e3) {
			return inputNumber.toString();
		} else if (inputNumber < 1e6) {
			const result = inputNumber / 1e3;
			return result % 1 === 0 ? result.toFixed(0) + 'K' : result.toFixed(result % 1 === 0.5 ? 1 : 3) + 'K';
		} else if (inputNumber < 1e9) {
			const result = inputNumber / 1e6;
			return result % 1 === 0 ? result.toFixed(0) + 'M' : result.toFixed(result % 1 === 0.5 ? 1 : 3) + 'M';
		} else {
			const result = inputNumber / 1e9;
			return result % 1 === 0 ? result.toFixed(0) + 'B' : result.toFixed(result % 1 === 0.5 ? 1 : 3) + 'B';
		}
	}

	public NumberFormatWithoutCharacter(number: number): string {
		let temp = number.toLocaleString('en-US').split(".");
		let re = /\,/gi;
		let result = temp[0].replace(re, ".");
		if (temp.length > 1)
		{
			result = result + "," + temp[1];
		}
		return result;
	}

	public WaitUntil(condition: () => boolean, timeout?: number, interval?: number): Promise<void> {
		if (timeout === void 0) { timeout = 0; } // if not set, wait forever
		if (interval === void 0) { interval = 50; } // default interval = 50ms
		let waitHandler;
		let timeoutHandler;
		return new Promise<void>(function (resolve, reject) {
			let waitFn = function () {
				if (condition())
				{
					if (timeoutHandler)
					{
						clearTimeout(timeoutHandler);
					}
					resolve();
				}
				else
				{
					waitHandler = setTimeout(waitFn, interval);
				}
			};
			// 
			waitHandler = setTimeout(waitFn, interval);

			// timeout, if timeout <=0, never timeout
			if (timeout > 0)
			{
				timeoutHandler = setTimeout(() => {
					if (waitHandler)
					{
						clearTimeout(waitHandler);
					}

					reject({
						code: "TIMEOUT",
						message: "timeout"
					});
				}, timeout);
			}
		});
	}

	public ConvertTimeStampToHours(timestamp: number): string {
		let u = new Date(timestamp * 1000);

		return ('0' + u.getUTCHours()).slice(-2) +
			':' + ('0' + u.getUTCMinutes()).slice(-2) +
			':' + ('0' + u.getUTCSeconds()).slice(-2)
	}

	public ConvertTimeStampToDate(timestamp: number): string {
		let u = new Date(timestamp * 1000);

		return ('0' + u.getUTCDate()).slice(-2) +
			'-' + ('0' + u.getUTCMonth()).slice(-2) +
			'-' + u.getUTCFullYear()
	}
}
