import { VerdicException } from "./verdic.exception";

/**
 * DuplicateBindingException
 * 
 * An error indicating a duplicate binding.
 */



export class DuplicateBindingException extends VerdicException {
    constructor(message: string = "Duplicate Binding") {
        super(message);
    }
}