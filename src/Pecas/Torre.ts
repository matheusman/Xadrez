import { Pecas, Colors } from "./PecasIterface";
import torre from "../images/rook-white.png";
import Position from "../Game/Position";

export default class Torre implements Pecas {
  color: Colors;
  qteMoviment: number;
  sprite: string;
  matriz : string[][];
  pos : Position;

  constructor(color: Colors, pos : Position , matriz : string[][]) {
    this.color = color;
    this.qteMoviment = 0;
    this.sprite = "T";
    this.matriz = matriz;
    this.pos = pos;
  }

  ToString() : string {
    return `<img src=${torre} alt="torre"/>`;
  }

  possibility () {
    
  }

}
