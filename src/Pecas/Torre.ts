import { Pecas, Colors } from "./PecasIterface";


class Torre implements Pecas {

    position : number[];
    color: Colors;
    qteMoviment: number;
    sprite: string;

    constructor (color : Colors, posInitial : number, posFinal : number) {
        this.position = [0, 0];
        this.color = color;
        this.qteMoviment = 0;
        this.sprite = "T";
    }
}