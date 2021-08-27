import { BaseException } from "@swindle/core";

/**
 * ProcessException
 * 
 * A process error
 */

export class ProcessException extends BaseException {
    constructor(message: string = "Process Error") {
        super(message);
    }
}