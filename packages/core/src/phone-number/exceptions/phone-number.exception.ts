import { InvalidArgumentException } from './../../common/common.module';

/**
 * PhoneNumberException
 *
 * Indicates an error with a Phone Number.
 */

export class PhoneNumberException extends InvalidArgumentException {
    constructor(message: string = "Phone Number Error") {
        super(message);
    }
}