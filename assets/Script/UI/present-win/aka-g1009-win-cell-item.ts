import { NEAR_WIN_SYMBOL } from "../../aka-g1009-game-config";
import { G1009AnimationProviderManager } from "../../base/animation/aka-g1009-animation-provider";
import { G1009SpriteProviderManagerActor } from "../provider/aka-g1009-sprite-frame-provider";

const { ccclass, property } = cc._decorator;
@ccclass
export default class G1009WinCellItemActor extends cc.Component {

	@property()
	cellIndex: number = -1;
	@property
	private dimColor: cc.Color = cc.Color.WHITE;

	private skeleton: sp.Skeleton = null;
	private sprite: cc.Sprite = null;
	private SymbolFormat: string = 'symbol_%s';
	private itemID: string = 'a';

	protected onLoad(): void {
		this.sprite = this.node.getComponentInChildren(cc.Sprite);
		this.sprite.node.active = false;
		this.skeleton = this.node.getComponentInChildren(sp.Skeleton);
	}

	private setNormalFrame(): void {
		if (this.itemID == "Blank" || this.itemID == "Reactor")
		{
			return;
		}
		this.skeleton.node.active = true;
		let data = G1009AnimationProviderManager.Instance().GetAnimation(cc.js.formatStr(this.SymbolFormat, this.itemID));
		this.skeleton.skeletonData = (data);
		this.skeleton.setAnimation(0, "animation", false);
	}

	private setOldFrame(): void {
		if (this.itemID == "Blank" || this.itemID == "Reactor")
		{
			this.skeleton.node.active = false;
			return;
		}
		let data = G1009AnimationProviderManager.Instance().GetAnimation(cc.js.formatStr(this.SymbolFormat, this.itemID));
		this.skeleton.skeletonData = (data);
		this.skeleton.setAnimation(0, "animation", false);
	}

	public CheckValid(): boolean {
		return this.sprite != null;
	}

	public GetItemID(): string {
		return this.itemID;
	}

	public SetOldItem(item: string): void {
		if (item != null)
		{
			this.itemID = item;
			this.setOldFrame();
		}
	}

	public SetItem(item: string): void {
		if (item != null)
		{
			this.itemID = item;
			this.setNormalFrame();
		}
	}

	public PlayWinAnimation(): void {
		this.Reset();
		if (this.itemID == "Blank" || this.itemID == "Reactor")
		{
			return;
		}
		if (NEAR_WIN_SYMBOL.includes(this.itemID))
		{
			this.skeleton.setAnimation(0, "Win_Loop", false);
		} else
		{
			this.skeleton.setAnimation(0, "Win", false);
		}
	}

	public PlayWinTrigger(): void {
		this.Reset();
		if (this.itemID == "Blank" || this.itemID == "Reactor")
		{
			return;
		}
		let track = this.skeleton.setAnimation(0, "Win_Appear", false);
		this.skeleton.setTrackCompleteListener(track, () => {
			this.skeleton.setAnimation(0, "Win_Loop", true);
		});
	}

	public SetDim(): void {
		this.skeleton.node.color = this.dimColor;
		this.sprite.node.color = this.dimColor;
		if (this.itemID == "Blank" || this.itemID == "Reactor")
		{
			return;
		}
		if (this.skeleton)
		{
			this.skeleton.clearTrack(0);
			this.skeleton.setBonesToSetupPose();
		}
	}

	public Reset(): void {
		this.skeleton.node.color = cc.Color.WHITE;
		this.sprite.node.color = cc.Color.WHITE;
	}

	public Hide(): void {
		this.node.opacity = 0;
		if (this.itemID == "Blank" || this.itemID == "Reactor")
		{
			return;
		}
		if (this.skeleton)
		{
			this.skeleton.clearTrack(0);
			this.skeleton.setBonesToSetupPose();
		}
	}

	public Show(): void {
		this.node.opacity = 255;
	}

	public ShowJackpotWin(): void {
		this.node.opacity = 255;
		if (this.itemID == "Core")
		{
			let track = this.skeleton.setAnimation(0, "Win_Appear", false);
			this.skeleton.setTrackCompleteListener(track, () => {
				this.skeleton.setAnimation(0, "Win_Loop", true);
			});
		}
	}

	public ShowStaticFrame(): void {
		if (this.itemID == "Blank" || this.itemID == "Reactor")
		{
			return;
		}
		// this.skeleton.node.active = false;
		this.sprite.node.color = this.dimColor;
		// this.sprite.node.active = true;
		this.sprite.spriteFrame = G1009SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, this.itemID));
	}

	public HideStaticFrame(): void {
		if (this.itemID == "Blank" || this.itemID == "Reactor")
		{
			return;
		}
		this.skeleton.node.active = true;
		this.sprite.node.active = false;
	}
}