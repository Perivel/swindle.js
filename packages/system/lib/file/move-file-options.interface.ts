import { FileSystemEntryOptions } from './../file-system-entry';

/**
 * MoveFileOptions
 * 
 * Options for moving a file.
 */

export interface MoveFileOptions extends FileSystemEntryOptions {
    override: boolean;
}