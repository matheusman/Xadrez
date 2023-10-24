import Position from "../Game/Position";

export type Colors = "Branca" | "Preta";

export interface Pecas {
    sprite : string;
    color : Colors;
    qteMoviment : number;
    pos : Position;
    ToString () : string;
}