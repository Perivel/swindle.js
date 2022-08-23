import { FileSystemEntryException } from './../../file-system-entry';

/**
 * FileException
 * 
 * A Generic File Exception.
 */

export class FileException extends FileSystemEntryException {

    constructor(message: string = "File Error") {
        super(message);
    }
}