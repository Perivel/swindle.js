import { FileStreamException } from './file-stream.exception';

/**
 * FileStreamDataException
 * 
 * File Stream Data error
 */

export class FileStreamDataException extends FileStreamException {

    constructor(message: string = "Stream Data Error") {
        super(message);
    }
}