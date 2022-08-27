import { FileSystemEntryOptions } from '../file-system-entry';
import { LinkType } from './enums';

/**
 * CopyLinkOptions
 * 
 * Options for copying a symbolic link.
 */

export interface CopyLinkOptions extends FileSystemEntryOptions {
    type?: LinkType;
}