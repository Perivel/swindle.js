
import { InvalidArgumentException } from './../../common/common.module';

/**
 * IdException
 *
 * Indicates an error with the ID.
 */

export class IdException extends InvalidArgumentException {
    constructor(message: string = "Invalid ID") {
        super(message);
    }
}