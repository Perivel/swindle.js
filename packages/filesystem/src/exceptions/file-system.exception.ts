import { BaseException } from "@swindle/core";

/**
 * FileSystemException
 *
 * A generic file system error.
 */

export class FileSystemException extends BaseException {
    constructor(message: string = "File System Error") {
        super(message);
    }
}