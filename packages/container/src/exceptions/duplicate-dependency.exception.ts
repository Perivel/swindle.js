import { ContainerException } from "./container.exception";

/**
 * DuplicateDependencyException
 * 
 * DuplicateDependencyException indicates that there is a duplicate dependency in the container.
 */

export class DuplicateDependencyException extends ContainerException {
    constructor(message: string = "Duplicate Dependency") {
        super(message);
    }
}