import { VerdicException } from "./verdic.exception";

/**
 * InvalidModuleException
 */

export class InvalidModuleException extends VerdicException {
    constructor(message: string = "Invalid Module") {
        super(message);
    }
}