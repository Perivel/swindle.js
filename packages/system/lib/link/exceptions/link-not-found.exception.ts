import { LinkException } from './link.exception';

/**
 * LinkNotFoundException
 */

export class LinkNotFoundException extends LinkException {

    constructor(message: string = "Link Not Found") {
        super(message);
    }
}