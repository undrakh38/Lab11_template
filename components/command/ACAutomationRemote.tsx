import { StartACCommand } from "./StartACCommand";
import { StopACCommand } from "./StopACCommand";
import { IncTempCommand } from "./IncTempCommand";
import { DecTempCommand } from "./DecTempCommand";
import { AC } from "./AC";

export class ACAutomationRemote {
    private ac: AC;
    private startACCommand: StartACCommand;
    private stopACCommand: StopACCommand;
    private incTempCommand: IncTempCommand;
    private decTempCommand: DecTempCommand;

    constructor(ac: AC) {
        this.ac = ac;
        this.startACCommand = new StartACCommand(ac);
        this.stopACCommand = new StopACCommand(ac);
        this.incTempCommand = new IncTempCommand(ac);
        this.decTempCommand = new DecTempCommand(ac);
    }

    start(): void {
        this.startACCommand.execute();
    }

    stop(): void {
        this.stopACCommand.execute();
    }

    increment(): void {
        this.incTempCommand.execute();
    }

    decrement(): void {
        this.decTempCommand.execute();
    }
}
