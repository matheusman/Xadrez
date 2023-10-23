import { Pecas } from "../Pecas/PecasIterface";
import Position from "./Position";
import Table from "./table";

export default class Xadrez extends Table {
  constructor(row: number, columns: number) {
    super(row, columns);
    this.takePosition();
  }

  public takePosition (str = 'A', num = 2) {
    const matrix = this.matriz[str.charCodeAt(0) - 65][num - 1];
    console.log(matrix)
  }

}
