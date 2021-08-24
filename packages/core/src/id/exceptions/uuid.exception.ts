import { IdException } from './id.exception';

/**
 * UUIDException
 *
 * Indicates an error with the UUID.
 */

export class UUIDException extends IdException {
    constructor(message: string = "UUID Error") {
        super(message);
    }
}