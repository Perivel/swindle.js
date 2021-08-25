import { FileSystemException } from "./file-system.exception";

/**
 * FileAlreadyExistsException
 * 
 * An Error indicating a File already exists.
 */

export class FileAlreadyExistsException extends FileSystemException {
    constructor(message: string = "File Not Found") {
        super(message);
    }
}