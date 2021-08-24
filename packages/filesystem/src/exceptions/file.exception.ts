import { FileSystemException } from "./file-system.exception";

/**
 * FileException
 * 
 * A generic file error.
 */

export class FileException extends FileSystemException {
    constructor(message: string = "File Error") {
        super(message);
    }
}