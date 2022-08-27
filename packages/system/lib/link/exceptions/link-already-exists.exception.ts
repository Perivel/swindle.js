import { LinkException } from './link.exception';

/**
 * LinkAlreadyExistsException
 */

export class LinkAlreadyExistsException extends LinkException {

    constructor(message: string = "Link already exists") {
        super(message);
    }
}