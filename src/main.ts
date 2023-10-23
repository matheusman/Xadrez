import "./styles/styles.scss";
import Xadrez from "./Game/table";

class Start {
    constructor () {
        new Xadrez(8, 8);
    }
}

new Start();