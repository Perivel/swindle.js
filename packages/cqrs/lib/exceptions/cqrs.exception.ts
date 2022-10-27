import { BaseException } from '@swindle/core';

/**
 * CQRSException
 * 
 * A Generic CQRS Error.
 */

export class CQRSException extends BaseException {

    constructor(message: string = "CQRS Error") {
        super(message);
    }
}