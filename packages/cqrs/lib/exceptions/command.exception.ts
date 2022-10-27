import { CQRSException } from './cqrs.exception';

/**
 * CommandException
 * 
 * A Command error.
 */

export class CommandException extends CQRSException {

    constructor(message: string = "Command Error") {
        super(message);
    }
}