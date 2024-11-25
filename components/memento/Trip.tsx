import { Refrigerator } from "./Refrigerator";

export class Trip implements Refrigerator{
    private amount;
    private plan;
    constructor (amount : number, gift : string) {
        this.amount = amount;
        this.plan = gift;
    }
    setPlan(plan : string) {
        this.plan = plan;
    }
    setAmount(amount : number) {
        this.amount = amount;
    }
    getPlan() {
        return this.plan;
    }
    getAmount() : Number {
        return this.amount;
    }
    toString() : String {
        return "Trip with amount = " + this.amount + " and plan = " + this.plan;// + "\n"; 
    }
}
