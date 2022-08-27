import { FileSystemEntryException } from './../../file-system-entry';

/**
 * LinkException
 * 
 * A General Link error
 */

export class LinkException extends FileSystemEntryException {

    constructor(message: string = "Link Error") {
        super(message);
    }
}