import { SystemException } from './../../exceptions';

/**
 * PathException
 * 
 * A general path error.
 */

export class PathException extends SystemException {

    constructor(message: string = "Path Error") {
        super(message);
    }
}