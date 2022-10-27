import { ContainerException } from "./container.exception";

/**
 * InvalidModuleException
 */

export class InvalidModuleException extends ContainerException {
    constructor(message: string = "Invalid Module") {
        super(message);
    }
}