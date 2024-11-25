import { AC } from "./AC";

export class StopACCommand {
    private ac: AC;
  
    constructor(ac: AC) {
      this.ac = ac;
    }
  
    execute(): void {
      this.ac.stop();
    }
  }
