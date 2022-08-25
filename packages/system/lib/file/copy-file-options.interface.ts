import { FileSystemEntryOptions } from './../file-system-entry';
import { CopyFileMode } from './enums';

/**
 * CopyFileOptions
 * 
 * Options for copying a file.
 */

export interface CopyFileOptions extends FileSystemEntryOptions {
    mode: CopyFileMode|null;
    override: boolean
}