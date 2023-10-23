export type Colors = "Branca" | "Preta";

export interface Pecas {
    sprite : string;
    color : Colors;
    qteMoviment : number;
    ToString () : string;
}