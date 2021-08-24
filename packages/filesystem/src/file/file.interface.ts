import { Equatable } from "@swindle/core";
import { FileStats } from "./file-stats.interface";

/**
 * FileInterface
 */

export interface FileInterface extends Equatable {

    /**
     * append()
     * 
     * writes data to a file, replacing the file if it already exists.
     * @param data The data to append.
     */

    append(data: string|Uint8Array): Promise<void>;

    /**
     * chmod()
     * 
     * Modifies the permissions on the file
     * @param mode the mode to set.
     */

    chmod(mode: number|string): Promise<void>;

    /**
     * chown()
     * 
     * changes the ownership of the file
     * @param uid The file's new user id.
     * @param gid the file's new group id.
     */

    chown(uid: number, gid: number): Promise<void>;

    /**
     * close()
     * 
     * closes the file after waiting for any pending operations to complete.
     */

    close(): Promise<void>;

    /**
     * datasync()
     * 
     * forces all currently queued I/O operations associated with the file to the 
     * operating system's synchronized I/O completion state.
     */

    datasync(): Promise<void>;

    /**
     * decryptor()
     * 
     * gets numeric file descriptor
     */

    decryptor(): number;

    /**
     * encoding()
     * 
     * gets the file encoding.
     * @returns the file encoding.
     */

    encoding(): BufferEncoding;

    /**
     * read()
     * 
     * Reads data from the file
     * @param length The number of bytes to read. 
     * @param position The location where to begin reading data from the file. If null, 
     * data will be read from the current file position, and the position will be updated. 
     * If position is an integer, the current file position will remain unchanged.
     * @returns the file contents.
     */

    read(length: number|null, position: number|null): Promise<string>;

    /**
     * readAll()
     * 
     * reads the entire contents of a file
     */

    readAll(): Promise<string>;

    /**
     * stats()
     * 
     * gets the stats for the file.
     * @param bigInt Whether the numeric values in the stat should use BigInt
     */

    stats(bigInt: boolean): Promise<FileStats>;

    /**
     * sync()
     * 
     * request that all data for the open file descriptor is flushed to the storage device.
     */
    
    sync(): Promise<void>;
}