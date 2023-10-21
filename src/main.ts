import "./styles.scss";

class Table {
  row: number;
  columns: number;
  index: number;
  matriz: string[][];
  color: boolean;

  public constructor(row: number, columns: number) {
    this.row = row;
    this.columns = columns;
    this.matriz = [];
    this.index = 0;
    this.color = false;
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

  private showPair(): boolean {
    return (this.color = !this.color);
  }

  private appendHtml (pair : string) : string {
    return `<div class="square ${pair}"></div>`
  }

  private checkPair(column: string, index: number, table: HTMLDivElement) {
    if (index % 2 === 0) {
      console.log(index);
      if (this.showPair()) {
        table.innerHTML += this.appendHtml("pair");
      } else {
        table.innerHTML += this.appendHtml("odd");
      }
    } else {
      this.color = !this.color;
      if (this.showPair()) {
        table.innerHTML += this.appendHtml("pair");
      } else {
        table.innerHTML += this.appendHtml("odd");
      }
      return this.showPair();
    }
  }

  private showTable() {
    try {
      const table = document.getElementById("table");
      if (!table || !(table instanceof HTMLDivElement))
        throw new Error("Div tabela não foi encontrada!");
      this.createMatriz();
      this.matriz.forEach((row, indexRow) => {
        row.forEach((column) => {
          this.checkPair(column, indexRow, table);
        });
      });
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  }
}

new Table(8, 8);
