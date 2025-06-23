import { Slot45AnimationProviderManager } from "../../base/animation/Slot45-animation-provider";
import { Slot45SpriteProviderManagerActor } from "../provider/Slot45-sprite-frame-provider";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot45CellItemActor extends cc.Component {

	@property
	cellIndex: number = -1;

	@property(cc.Sprite)
	sprite: cc.Sprite = null;

	@property(sp.Skeleton)
	private skeleton: sp.Skeleton = null;

	@property
	dimColor: cc.Color = cc.Color.WHITE;

	isFreespins: boolean = false;
	itemID: string = 'a';
	SymbolFormat: string = 'Symbol_%s';
	SpinSymbolFormat: string = 'symbol_%s';

	private setSpinFrame(): void {
		this.skeleton.node.active = false;
		this.sprite.node.active = true;
		let frame = Slot45SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SpinSymbolFormat, this.itemID));
		this.sprite.spriteFrame = frame;
	}

	private setNormalFrame(): void {
		this.skeleton.node.active = true;
		this.sprite.node.active = false;
		let data = Slot45AnimationProviderManager.Instance().GetAnimation(cc.js.formatStr(this.SymbolFormat, this.itemID));

		if (data)
		{
			this.skeleton.node.active = true;
			this.sprite.node.active = false;
			this.skeleton.skeletonData = (data);
			this.skeleton.setAnimation(0, "animation", true);
		}
		else
		{
			this.skeleton.node.active = false;
			this.sprite.node.active = true;
			let frame = Slot45SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, this.itemID));
			this.sprite.spriteFrame = frame;
		}
	}

	private setOldFrame(): void {
		let data = Slot45AnimationProviderManager.Instance().GetAnimation(cc.js.formatStr(this.SymbolFormat, this.itemID));
		if (data)
		{
			this.skeleton.node.active = true;
			this.sprite.node.active = false;
			this.skeleton.skeletonData = (data);
			this.skeleton.setAnimation(0, "animation", true);
		}
		else
		{			
			this.skeleton.node.active = false;
			this.sprite.node.active = true;
			let frame = Slot45SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, this.itemID));
			this.sprite.spriteFrame = frame;
		}
	}

	public CheckValid(): boolean {
		return this.sprite.spriteFrame != null;
	}

	public GetCellIndex(): number {
		return this.cellIndex;
	}

	public GetItemID(): string {
		return this.itemID;
	}

	public Enable(): void {
		this.sprite.enabled = true;
	}

	public Disable(): void {
		this.sprite.enabled = false;
	}

	public SetItem(item: string): void {
		if (item != null)
		{
			this.itemID = item;
			this.setNormalFrame();
		}
	}

	public SetOldItem(item: string): void {
		if (item != null)
		{
			this.itemID = item;
			this.setOldFrame();
		}
	}

	public SetScrollItem(item: string): void {
		if (item != null)
		{
			this.itemID = item;
			this.setSpinFrame();
		}
	}

	public StartSpin(): void {
		this.SetScrollItem(this.itemID);
	}

	public StopSpin(): void {
		this.SetItem(this.itemID);
	}

	public Reset(): void {
		// this.Enable();
	}

	public SetCellIndex(_cellIndex: number): void {
		this.cellIndex = _cellIndex;
	}
}