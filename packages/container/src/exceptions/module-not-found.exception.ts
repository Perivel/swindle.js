import { VerdicException } from "./verdic.exception";

/**
 * ModuleNotFoundException
 */

export class ModuleNotFoundException extends VerdicException {

    constructor(message: string = "Module not found") {
        super(message);
    }
}