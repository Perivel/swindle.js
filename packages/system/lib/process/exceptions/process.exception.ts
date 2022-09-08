import { SystemException } from './../../exceptions';

/**
 * ProcessException
 * 
 * A generic process error
 */

export class ProcessException extends SystemException {

    constructor(message: string = "Process Error") {
        super(message);
    }
}