import { FileSystemException } from "./file-system.exception";

/**
 * DirectoryNotFoundException
 *
 * An Error indicating a directory was not Found.
 */

export class DirectoryNotFoundException extends FileSystemException {
    constructor(message: string = "Directory Not Found") {
        super(message);
    }
}