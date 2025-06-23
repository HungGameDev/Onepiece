export class G1009EventManager {
	private static instance: G1009EventManager;
	private events: { [name: string]: Function[] }

	private constructor() {
		this.events = {};
	}

	public static GetInstance() {
		if (!G1009EventManager.instance)
			G1009EventManager.instance = new G1009EventManager();
		return G1009EventManager.instance;
	}

	public register(name: string, callback: Function) {
		name = name.toLowerCase();
		if (!this.events[name])
			this.events[name] = [];
		this.events[name].push(callback);
	}


	public unregister(name: string, searchCallback: Function) {
		name = name.toLowerCase();
		if (!this.events[name])
			return;
		let callbackIndex = -1;
		for (let index = 0; index < this.events[name].length; index++)
		{
			if (searchCallback === this.events[name][index])
			{
				callbackIndex = index;
				break;
			}
		}
		if (callbackIndex > -1)
		{
			this.events[name].splice(callbackIndex, 1);
		}
	}

	public notify(name: string, args: any = null) {
		console.log(name, args);
		name = name.toLowerCase();
		if (!this.events[name])
			return;

		for (const callback of this.events[name])
		{
			callback(args);
		}
	}
}