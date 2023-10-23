import "./styles/styles.scss";
import Xadrez from './Game/Xadrez'

class Start {
    chess : Xadrez;
    constructor () {
        this.chess = new Xadrez(8, 8);
    }


}

new Start();