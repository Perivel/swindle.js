import { ContainerException } from "./container.exception";

/**
 * DuplicateModuleException
 */

export class DuplicateModuleException extends ContainerException {
    constructor(message: string = "Duplicate Module") {
        super(message);
    }
}