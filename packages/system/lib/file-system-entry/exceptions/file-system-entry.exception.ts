import { SystemException } from './../../exceptions';

/**
 * FileSystemEntryException
 * 
 * A Generic FileSystemEntry error.
 */

export class FileSystemEntryException extends SystemException {

    constructor(message: string = "FileSystem Entry Error") {
        super(message);
    }
}