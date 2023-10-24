import Position from "./Position";

export default class Matriz {

    matriz : string[][];

    constructor (matriz : string[][]) {
        this.matriz = matriz;
    }

    getMatriz (posInitial : string, posFinal : number) {
        this.matriz[posInitial.charCodeAt(0) - 65][posFinal - 1]
    }

    public static checkPosition (pos : Position) {
        try {
            if (pos.posInitial.length > 1) throw new Error("Posição deve conter somente um caractere!")
            if (!(typeof pos.posFinal === 'number')) throw new Error("Deve se passar elementos do tipo number!")
            if (pos.posInitial.charCodeAt(0) < 65 || pos.posInitial.charCodeAt(0) > 65 + 7) throw new Error("Posição não existe");
            if ((pos.posInitial.charCodeAt(0) - 65) > 8 || (pos.posInitial.charCodeAt(0) - 65) < 0) throw new Error("Passe um valor inicial que estaja contido dentro da tabela!");
            if (pos.posFinal > 8 || pos.posFinal < 0) throw new Error("Passe um valor final que esteja contido dentro da tabela!");
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message)
            }
        }
    }
}