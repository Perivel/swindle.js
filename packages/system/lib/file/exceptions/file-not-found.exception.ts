import { FileException } from './file.exception';

/**
 * FileNotFoundException
 * 
 * An exception indicates a file is not found.
 */

export class FileNotFoundException extends FileException {

    constructor(message: string = "File Not Found") {
        super(message);
    }
}