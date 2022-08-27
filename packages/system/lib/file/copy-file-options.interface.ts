import { CopyOptions } from '../interfaces';
import { FileSystemEntryOptions } from './../file-system-entry';
import { CopyFileMode } from './enums';

/**
 * CopyFileOptions
 * 
 * Options for copying a file.
 */

export interface CopyFileOptions extends CopyOptions {
    mode: CopyFileMode|null;
    override: boolean
}