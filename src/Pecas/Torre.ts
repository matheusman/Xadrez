import { Pecas, Colors } from "./PecasIterface";
import torre from "../images/rook-white.png";
import Position from "../Game/Position";
import Matriz from "../Game/Matriz";

export default class Torre implements Pecas {
  color: Colors;
  qteMoviment: number;
  sprite: string;
  pos : Position;

  constructor(color: Colors, pos : Position) {
    this.color = color;
    this.qteMoviment = 0;
    this.sprite = "T";
    this.pos = pos;
  }

  ToString() : string {
    return `<img src=${torre} alt="torre"/>`;
  }

  public possibility () {
  }

}
