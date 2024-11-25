import { AC } from "./AC";

export class DecTempCommand {
    private ac: AC;
  
    constructor(ac: AC) {
      this.ac = ac;
    }
  
    execute(): void {
      this.ac.decrement();
    }
  }
