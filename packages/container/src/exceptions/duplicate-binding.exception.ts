import { ContainerException } from "./container.exception";

/**
 * DuplicateBindingException
 * 
 * An error indicating a duplicate binding.
 */



export class DuplicateBindingException extends ContainerException {
    constructor(message: string = "Duplicate Binding") {
        super(message);
    }
}