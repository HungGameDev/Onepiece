import { G1009WinLineResult } from "../../UI/present-win/aka-g1009-present-win-panel";

export class ComboData {
    private explodedCells: number[];
    private Cells: string[];
    private winPoint: number;
    private WinLines: G1009WinLineResult[];

    public constructor(explodedCells: number[]) {
        this.explodedCells = explodedCells;
        this.Cells = null;
        this.winPoint = 0;
        this.WinLines = [];
    }

    public GetExplodedCells(): number[] {
        return this.explodedCells;
    }

    public GetWinPoint(): number {
        return this.winPoint;
    }

    public GetCells(): string[] {
        return this.Cells;
    }


    public GetWinLines(): G1009WinLineResult[] {
        return this.WinLines;
    }

    public SetExplodedCells(explodedCells): void {
        this.explodedCells = explodedCells;
    }

    public SetWinPoint(winPoint): void {
        this.winPoint = winPoint;
    }

    public AddWinPoint(point): void {
        this.winPoint = this.winPoint + point;
    }

    public SetCells(Cells): void {
        this.Cells = Cells;
    }


    public SetWinLines(WinLines): void {
        this.WinLines = WinLines;
    }
}