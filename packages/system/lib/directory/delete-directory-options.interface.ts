import { FileSystemEntryOptions } from '../file-system-entry';

export interface DeleteDirectoryOptions extends FileSystemEntryOptions {
    /**
     * the maximum number of retries.
     */
    maxRetries?: number;

    /**
     * 
     */
    recursive?: boolean;

    /**
     * the amount of time in miliseconds between each retry.
     */
    retryDelay?: number;
}