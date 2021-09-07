import { VerdicException } from "./verdic.exception";

/**
 * DuplicateDependencyException
 * 
 * DuplicateDependencyException indicates that there is a duplicate dependency in the container.
 */

export class DuplicateDependencyException extends VerdicException {
    constructor(message: string = "Duplicate Dependency") {
        super(message);
    }
}