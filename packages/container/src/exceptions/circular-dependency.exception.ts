import { ContainerException } from "./container.exception";

/**
 * CircularDependencyException
 */

export class CircularDependencyException extends ContainerException {
    constructor(message: string = "Circular Dependency Detected") {
        super(message);
    }
}