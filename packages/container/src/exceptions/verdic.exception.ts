
/**
 * VerdicException
 * 
 * The base exception class.
 */

export class VerdicException extends Error {
    constructor(message: string = "An error occured.") {
        super(message);
    }
}