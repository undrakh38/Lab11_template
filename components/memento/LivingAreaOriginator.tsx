import { Memento } from "./Memento";
import { Refrigerator } from "./Refrigerator";
import { Gift } from "./Gift";
import { Trip } from "./Trip";

export class LivingAreaOriginator {
    private refri: Refrigerator = new Gift(0);
    createMemento(): Memento {
        return new Memento(this.refri);
    }
    setMemento(memento: Memento): void {
        this.refri = memento.getRefri();
    }
    setRefri(refri: Refrigerator): void {
        this.refri = refri;
    }
    getRefri(): Refrigerator {
        return this.refri;
    }
    toString(): string {
        return "Originator [refri = " + this.refri.toString() + "]";
    }
}
