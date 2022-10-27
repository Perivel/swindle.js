import { CQRSException } from './cqrs.exception';

/**
 * QueryException
 * 
 * A Generic Query Error.
 */

export class QueryException extends CQRSException {

    constructor(message: string = 'Query Error') {
        super(message);
    }
}