import { ProcessException } from "./process.exception";

/**
 * ProcessFailedException
 * 
 * An Error indicating a process has failed.
 */

export class ProcessFailedException extends ProcessException {

    constructor(message: string = "Process Failed", readonly code: number|null = null) {
        super(message)
    }
}