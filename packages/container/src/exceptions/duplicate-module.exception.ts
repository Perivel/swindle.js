import { VerdicException } from "./verdic.exception";

/**
 * DuplicateModuleException
 */

export class DuplicateModuleException extends VerdicException {
    constructor(message: string = "Duplicate Module") {
        super(message);
    }
}