import { ContainerException } from "./container.exception";

/**
 * ModuleNotFoundException
 */

export class ModuleNotFoundException extends ContainerException {

    constructor(message: string = "Module not found") {
        super(message);
    }
}