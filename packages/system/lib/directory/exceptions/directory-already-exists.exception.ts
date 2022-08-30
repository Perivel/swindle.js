import { DirectoryException } from './directory.exception';

/**
 * DirectoryAlreadyExistsException
 * 
 * An exception indicating a directory already exists.
 */

export class DirectoryAlreadyExistsException extends DirectoryException {

    constructor(message: string = "Directory Already Exists") {
        super(message);
    }
}