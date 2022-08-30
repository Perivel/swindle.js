import { DirectoryException } from './directory.exception';

/**
 * DirectoryNotFoundException
 * 
 * An exception indicating a directory cannot be found.
 */

export class DirectoryNotFoundException extends DirectoryException {

    constructor(message: string = "Directory Not Found") {
        super(message);
    }
}