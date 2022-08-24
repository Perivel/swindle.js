import { FileSystemEntryOptions } from './../file-system-entry';

/**
 * DeleteFileOptions
 * 
 * Options for deleting a file.
 */

export interface DeleteFileOptions extends FileSystemEntryOptions {
    force: boolean;
    recursive: boolean
}