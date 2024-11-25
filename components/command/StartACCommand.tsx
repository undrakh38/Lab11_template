import { AC } from "./AC";

export class StartACCommand {
    private ac: AC;
  
    constructor(ac: AC) {
      this.ac = ac;
    }
  
    execute(): void {
      this.ac.start();
    }
  }
