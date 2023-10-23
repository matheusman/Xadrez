import { Pecas } from "../Pecas/PecasIterface";
import Torre from "../Pecas/Torre";

export default class Table {
  row: number;
  columns: number;
  index: number;
  matriz: string[][];
  color: boolean;
  table: null | HTMLDivElement;

  public constructor(row: number, columns: number) {
    this.row = row;
    this.columns = columns;

    this.matriz = [];
    this.index = 0;
    this.color = false;
    this.table = null;

    this.createMatriz();
    this.showTable();
  }

  private createMatriz() {
    for (let e = 0; e < this.row; e++) {
      const arr = [];
      for (let j = 0; j < this.columns; j++) {
        arr.push("");
      }
      this.matriz.push(arr);
    }
  }

  private appendHtml(numbers: number, pair: string): string {
    return `<div data-columns=${numbers + 1} class="square ${pair}"></div>`;
  }

  private checkPair(index: number, charCode: string) {
    const row = document.querySelector(`[data-rows="${charCode}"]`);
    if (row) {
      if (this.index % 2 === 0) {
        if (this.color) {
          row.innerHTML += this.appendHtml(index, "odd");
        } else {
          row.innerHTML += this.appendHtml(index, "pair");
        }
      } else {
        if (this.color) {
          row.innerHTML += this.appendHtml(index, "pair");
        } else {
          row.innerHTML += this.appendHtml(index, "odd");
        }
      }
      this.color = !this.color;
    } else {
      return console.log("Row não existe");
    }
  }

  private showTable() {
    try {
      const table = document.getElementById("table");
      if (!table || !(table instanceof HTMLDivElement))
        throw new Error("Div tabela não foi encontrada!");
      if (this.table === null) this.table = table;
      this.matriz.forEach((row, indexRow) => {
        this.index++;
        table.innerHTML += `<div data-rows=${String.fromCharCode(
          65 + indexRow
        )} class="rows"></div>`;
        row.forEach((column, indexColumn) => {
          this.checkPair(indexColumn, String.fromCharCode(65 + indexRow));
        });
      });
      this.updatePage(new Torre("Branca", 4, "c"));
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  }

  protected updatePage(peca: Pecas) {
    this.matriz.forEach((row, indexRow) => {
      row.forEach((column, indexColumn) => {
        const row = document.querySelector(`[data-row="${indexRow}"]`);
        if (column !== "") {
          
        }
      });
    });
  }
}
