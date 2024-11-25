import { Refrigerator } from "./Refrigerator";

export class Gift implements Refrigerator {
    private amount = 0;
    constructor(amount: number) {
        this.amount = amount;
    }
    setAmount(amount : number) {
        this.amount = amount;
    }
    getAmount() : Number {
        return this.amount;
    }
    toString() : String {
        return "Gift with amount = " + this.amount;// + "\n"; 
    }
}