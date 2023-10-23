import { Pecas } from "../Pecas/PecasIterface";
import Torre from "../Pecas/Torre";
import Position from "./Position";
import Table from "./table";

export default class Xadrez extends Table {

  constructor(row: number, columns: number) {
    super(row, columns);
    this.takePosition(new Position('A', 5), new Torre('Branca'));
  }

  private takePositionHTML (pos : Position, peca : Pecas) {

    try {
      if (pos.posInitial.charCodeAt(0) < 65 || pos.posInitial.charCodeAt(0) > 65 + 7) throw new Error("Posição não existe");
      const row = document.querySelector(`[data-rows="${pos.posInitial.toUpperCase()}"] [data-columns="${pos.posFinal}"]`);
      if (!row) throw new Error("Row não foi encontrado!");
      row.innerHTML += peca.ToString();
      return row;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }

  } 

  private takePosition (pos : Position, peca : Pecas) {
    this.matriz[pos.posInitial.charCodeAt(0) - 65][pos.posFinal - 1] = peca.sprite;
    this.takePositionHTML(pos, peca);
  }
}
