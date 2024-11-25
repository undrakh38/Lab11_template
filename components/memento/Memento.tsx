import { Refrigerator } from "./Refrigerator";

export class Memento {
    private refri: Refrigerator;
    constructor(refrigerator: Refrigerator) {
        this.refri = refrigerator
    }

    setRefri(refrigerator : Refrigerator) {
        this.refri = refrigerator;
    }

    getRefri(){
        return this.refri;
    }

    toString(): String {
        return "Memento [refri =" + this.refri.toString() + "]";
    }
}
