import { VerdicException } from "./verdic.exception";

/**
 * CircularDependencyException
 */

export class CircularDependencyException extends VerdicException {
    constructor(message: string = "Circular Dependency Detected") {
        super(message);
    }
}