import { FileSystemException } from "./file-system.exception";

/**
 * FileNotFoundException
 *
 * An Error indicating a File was not Found.
 */

export class FileNotFoundException extends FileSystemException {
    constructor(message: string = "File Not Found") {
        super(message);
    }
}