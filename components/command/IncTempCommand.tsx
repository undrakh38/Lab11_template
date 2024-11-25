import { AC } from "./AC";

export class IncTempCommand {
    private ac: AC;
  
    constructor(ac: AC) {
      this.ac = ac;
    }
  
    execute(): void {
      this.ac.increment();
    }
  }
