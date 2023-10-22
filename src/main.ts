import "./styles.scss";
import Table from "./Game/table";

class Start {
    table : Table;
    constructor () {
        this.table = new Table(8, 8);
    }

    
}

new Start();