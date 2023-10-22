export type Colors = "Branca" | "Preta";

export interface Pecas {
    position : number[];
    sprite : string;
    color : Colors;
    qteMoviment : number;
}