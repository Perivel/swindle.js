import { VerdicException } from "./verdic.exception";

/**
 * DependencyNotFoundException
 * 
 * DependencyNotFoundException indicates that a dependency was not found.
 */

export class DependencyNotFoundException extends VerdicException {
    constructor(message: string = "Dependency not found.") {
        super(message);
    }
}