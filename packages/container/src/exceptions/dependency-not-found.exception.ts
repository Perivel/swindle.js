import { ContainerException } from "./container.exception";

/**
 * DependencyNotFoundException
 * 
 * DependencyNotFoundException indicates that a dependency was not found.
 */

export class DependencyNotFoundException extends ContainerException {
    constructor(message: string = "Dependency not found.") {
        super(message);
    }
}