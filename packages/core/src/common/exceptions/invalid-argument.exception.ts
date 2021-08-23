import { BaseException } from './base.exception';

/**
 * InvlaidArguentException
 * 
 * InvalidArgumentException indicates an argument is invalid.
 */

export class InvalidArgumentException extends BaseException {

    constructor(message: string = "Invalid Argument") {
        super(message);
    }
}