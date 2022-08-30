import { CopyOptions } from '../interfaces';

/**
 * CopyDirectoryOptions
 * 
 * Options for copying directories.
 */

export interface CopyDirectoryOptions extends CopyOptions {
    overwrite?: boolean;
    recursive?: boolean;
}