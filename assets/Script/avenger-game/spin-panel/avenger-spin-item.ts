import Slot45CellItemActor from "../../UI/spin-panel/Slot45-cell-item";
import Slot45SpinItemActor, { ESpinningState } from "../../UI/spin-panel/Slot45-spin-item";
import { Slot45SpinItemData } from "../../UI/spin-panel/Slot45-spin-item-data";
import { Slot45EventManager } from "../../base/events/Slot45-event-manager";
import { SpinPanelConfig } from "./avenger-spin-panel-config";

const { ccclass, property } = cc._decorator;
@ccclass
export default class AvengerSpinItem extends Slot45SpinItemActor {

	@property()
	reelIndex: number = -1;
	private arrStartYPosCellItem = [];
	public onExplodeCompleted: Function = () => { };

	lateUpdate(dt: number): void {
	}
	protected fixUpdate(): void {
	}

	onLoad(): void {
		this.cellItems.forEach(cell => {
			this.arrStartYPosCellItem.push(cell.node.y);
		});
	}

	scroll(): void {
		this.state = ESpinningState.Scroll;
		for (let cellIndex = 0; cellIndex < this.cellItems.length; cellIndex++) {
			const cellItem = this.cellItems[cellIndex];

			let startYPosition = this.arrStartYPosCellItem[cellIndex];
			let endYPosition = startYPosition - this.node.height - SpinPanelConfig.SpawnedOffsetHeight;
			let spawnedYPosition = startYPosition + this.node.height + SpinPanelConfig.SpawnedOffsetHeight;
			let count = cellIndex;

			var tweenDropDown = cc.tween(cellItem.node)
				.to(SpinPanelConfig.DropDownDuration, { y: endYPosition }, { easing: SpinPanelConfig.EasingDropDown })
				.call(() => {
					cellItem.node.y = spawnedYPosition;
					if (count == this.cellItems.length - 1) {
						this.onReadyToStop(this.cellIndices);
					}
				}).start();
		}
	}

	stopScroll(): void {
		this.state = ESpinningState.StopScroll;
		for (let cellIndex = 0; cellIndex < this.cellItems.length; cellIndex++) {
			const cellItem = this.cellItems[cellIndex];
			let endYPosition = this.arrStartYPosCellItem[cellIndex];
			let count = cellIndex;
			var tweenDropDown = cc.tween(cellItem.node)
				.to(SpinPanelConfig.DropDownDuration, { y: endYPosition }, { easing: SpinPanelConfig.EasingDropDown })
				.call(()=>{
					Slot45EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_cell_drop_down', isLoop: false });
					Slot45EventManager.GetInstance().notify('CellDropCompleted', cellItem.GetCellIndex());
				})
				.to(SpinPanelConfig.RotationDuration, { angle: SpinPanelConfig.ShakeRotation }, { easing: SpinPanelConfig.EasingDropDown })
				.to(SpinPanelConfig.BounceDuration, { y: endYPosition + SpinPanelConfig.BouncedOffsetHeight, angle: -SpinPanelConfig.ShakeRotation / 2 }, { easing: SpinPanelConfig.EasingDropDown })
				.to(SpinPanelConfig.BounceDuration, { y: endYPosition - SpinPanelConfig.BouncedOffsetHeight / 2, angle: 0 }, { easing: SpinPanelConfig.EasingDropDown })
				.to(SpinPanelConfig.BounceDuration, { y: endYPosition }, { easing: SpinPanelConfig.EasingDropDown })
				.call(() => {
					if (count == this.cellItems.length - 1) {
						this.onReadyBounceUp();
						this.stopComplete();
					}
				}).start();
		}
	}

	protected setFinalResults(): void {
		let resultIndex = 0;
		for (let index = 0; index < this.cellItems.length; index++) {
			let cellItem = this.cellItems[index];
			let cellIndex = this.originIndices[index];
			cellItem.SetCellIndex(cellIndex);
			if (cellIndex >= 0) {
				cellItem.SetItem(this.rawResultItems[resultIndex++]);
			}
		}
	}

	public StartExplodeCells(explodedCells, arrNewItem) {
		var arrNodeExplodedCell = [];
		explodedCells.forEach(id => {
			for (let index = 0; index < this.cellItems.length; index++) {
				const cellItem = this.cellItems[index];
				if (cellItem.GetCellIndex() == id) {
					this.cellItems.splice(index, 1);
					this.cellItems.unshift(cellItem);
					arrNodeExplodedCell.unshift(cellItem.node);
				}
			}
		});

		for (let index = 0; index < arrNodeExplodedCell.length; index++) {
			const node = arrNodeExplodedCell[index];
			let count = index;
			var tweenExplode = cc.tween(node)
				.delay(this.reelIndex * 0.1)
				.to(SpinPanelConfig.FadeCellDuration, { opacity: 0 }, { easing: 'linear' })
				.delay(SpinPanelConfig.ExplodeDuration - SpinPanelConfig.FadeCellDuration)
				.call(() => {
					let startYPosition = this.arrStartYPosCellItem[count];
					node.y = startYPosition + this.node.height;
					node.opacity = 255;

					if (count == arrNodeExplodedCell.length - 1) {
						for (let index = 0; index < this.cellItems.length; index++) {
							this.cellItems[index].SetCellIndex(this.cellIndices[index]);
						}
						this.rawResultItems= [];
						this.resultItems = [];
						this.setResultItems(arrNewItem);
						this.setFinalResults();

						this.stopExplodeCells(arrNodeExplodedCell);
					}
				}).start();
		}
	}

	private stopExplodeCells(arrNodeExplodedCell) {
		for (let index = 0; index < this.cellItems.length; index++) {
			const cellItem = this.cellItems[index];
			let count = index;
			let desYPostion = this.arrStartYPosCellItem[index];
			if (desYPostion != cellItem.node.y) {
				
				var tweenDropDown = cc.tween(cellItem.node)
					.to(SpinPanelConfig.DropDownDuration, { y: desYPostion }, { easing: SpinPanelConfig.EasingDropDown })
					.call(()=>{
						Slot45EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_cell_drop_down', isLoop: false });
						Slot45EventManager.GetInstance().notify('CellDropCompleted', cellItem.GetCellIndex());
					})
					.to(SpinPanelConfig.RotationDuration, { angle: SpinPanelConfig.ShakeRotation }, { easing: SpinPanelConfig.EasingDropDown })
					.to(SpinPanelConfig.BounceDuration, { y: desYPostion + SpinPanelConfig.BouncedOffsetHeight, angle: -SpinPanelConfig.ShakeRotation / 2 }, { easing: SpinPanelConfig.EasingDropDown })
					.to(SpinPanelConfig.BounceDuration, { y: desYPostion - SpinPanelConfig.BouncedOffsetHeight / 2, angle: 0 }, { easing: SpinPanelConfig.EasingDropDown })
					.to(SpinPanelConfig.BounceDuration, { y: desYPostion }, { easing: SpinPanelConfig.EasingDropDown })
					.call(() => {
						if (count == arrNodeExplodedCell.length - 1) {
							this.onExplodeCompleted();
						}
					}).start();
			}
		}
	}
}
