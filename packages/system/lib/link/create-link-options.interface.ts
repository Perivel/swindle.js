import { FileSystemEntryOptions } from '../file-system-entry';
import { LinkType } from './enums';

/**
 * CreateLinkOptions
 * 
 * Options for crating a symbolic link.
 */

export interface CreateLinkOptions extends FileSystemEntryOptions {
    type?: LinkType;
}