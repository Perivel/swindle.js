import { Path } from '../path';
import { FileSystemEntry, FileSystemEntryOptions } from './../file-system-entry';
import { FileNotFoundException } from './exceptions';
import { FileInterface } from './file.interface';

/**
 * File
 * 
 * A File
 */

export class File extends FileSystemEntry implements FileInterface {

    /**
     * Creates a file instance.
     * @param path the path to the file.
     * @throws FileNotFoundException when the file is not found.
     */

    constructor(path: Path|string) {
        super(path);
        super.stats().then(stats => {
            if (!stats.isFile) {
                throw new FileNotFoundException();
            }
        })
    }

    /**
     * Create()
     * 
     * creates a FileSystem Entry instance.
     * @param path The path of the resource to create.
     * @returns the created FileSystem Entry.
     */

    public static async Create(path: Path | string, options: FileSystemEntryOptions): Promise<File> {
        // 
    }

    /**
     * copy()
     * 
     * copies the directory to the specified path.
     * @param to the destination to copy the file to.
     * @param options copy options.
     */

    public async copy(to: Path | string, options: FileSystemEntryOptions): Promise<void> {
        //
    }

    /**
     * delete()
     * 
     * deletes the directory.
     * @returns the deleted directory.
     * @param options delete options.
     */

    public async delete(options: FileSystemEntryOptions): Promise<void> {

    }

    public equals(suspect: any): boolean {
        return false;
    }

    /**
     * move()
     * 
     * moves the filesystem entry to the specified path.
     * @param to the destination to move the filesystem entry to.
     * @param options move options.
     * @returns the copied FilSystem Entry.
     */

    public async move(to: Path | string, options: FileSystemEntryOptions): Promise<File> {

    }

    /**
     * rename()
     * 
     * renames the filesystem entry.
     * @param newName the new name of the directory.
     */

    public async rename(newName: string): Promise<File> {

    }

    public serialize(): string {
        return JSON.stringify({

        });
    }
}