import { ColorException } from './../exceptions/exceptions.well';

/**
 * HexException
 * 
 * A Hex value error.
 */

export class HexException extends ColorException {
    constructor(message: string = "Hex Error") {
        super(message);
    }
}