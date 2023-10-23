export default class Position {

    posInitial : string;
    posFinal : number;

    constructor (posInitial : string, posFinal : number) {
        this.posInitial = posInitial;
        this.posFinal = posFinal;
        this.checkLength()
    }

    public checkLength () {
        try {
            if (this.posInitial.length > 1) throw new Error("Posição deve conter somente um caractere!")
            if (!(typeof this.posFinal === 'number')) throw new Error("Deve se passar elementos do tipo number!")
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message)
            }
        }
    }

}