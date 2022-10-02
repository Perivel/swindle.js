
/**
 * Command
 * 
 * A Command is used to update data. Commands should be tasked-based, instead of data centric.
 */

export abstract class Command {
    
    constructor() {

    }

    /**
     * execute()
     * 
     * executes the operation.
     * @param arg command arguments.
     */

    public abstract execute(...arg: any): Promise<void>;
}