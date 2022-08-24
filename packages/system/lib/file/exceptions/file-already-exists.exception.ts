import { FileException } from './file.exception';

/**
 * FileAlreadyExistsException
 * 
 * an error indicating a file already exists.
 */

export class FileAlreadyExistsException extends FileException {

    constructor(message: string = "File already exists") {
        super(message);
    }
}