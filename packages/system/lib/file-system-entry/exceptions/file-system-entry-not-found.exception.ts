import { FileSystemEntryException } from './file-system-entry.exception';

/**
 * FileSystemEntryNotFoundException
 * 
 * An error indicating a FileSystem Entry was not found.
 */

export class FileSystemEntryNotFoundException extends FileSystemEntryException {

    constructor(message: string = "FileSystem Entry Not Found.") {
        super(message);
    }
}