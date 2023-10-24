import { Pecas } from "../Pecas/PecasIterface";
import Torre from "../Pecas/Torre";
import Matriz from "./Matriz";
import Position from "./Position";
import Table from "./table";

export default class Xadrez extends Table {
  matrizChess: Matriz;

  constructor(row: number, columns: number) {
    super(row, columns);
    this.matrizChess = new Matriz(this.matriz); // take methods that class
    this.takePosition( new Torre("Branca", new Position("A", 1), this.matriz) );
  }

  private takePositionHTML(peca: Pecas) {
    try {
      const row = document.querySelector(
        `[data-rows="${peca.pos.posInitial.toUpperCase()}"] [data-columns="${
          peca.pos.posFinal
        }"]`
      );
      if (!row || !(row instanceof HTMLDivElement))
        throw new Error("Row não foi encontrado!");
      if (row.children.length >= 1) row.innerHTML = "";
      row.innerHTML += peca.ToString();
      return row;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  }

  public takePosition(peca: Pecas) {
    Matriz.checkPosition(peca.pos);
    let positionMatriz =
      this.matriz[peca.pos.posInitial.charCodeAt(0) - 65][peca.pos.posFinal - 1];
    positionMatriz = peca.sprite;
    this.takePositionHTML(peca);
  }
}
