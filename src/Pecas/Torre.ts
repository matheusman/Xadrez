import { Pecas, Colors } from "./PecasIterface";
import torre from "../images/rook-white.png";

export default class Torre implements Pecas {
  color: Colors;
  qteMoviment: number;
  sprite: string;

  constructor(color: Colors) {
    this.color = color;
    this.qteMoviment = 0;
    this.sprite = "T";
  }

  ToString() : string {
    return `<img src=${torre} alt="torre"/>`;
  }
}
