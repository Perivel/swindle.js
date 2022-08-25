import { copyFile, writeFile, rm, rename } from 'fs/promises';
import { Path } from '../path';
import { FileSystemEntry, FileSystemEntryOptions } from './../file-system-entry';
import { CopyFileOptions } from './copy-file-options.interface';
import { DeleteFileOptions } from './dlete-file-options.interface';
import { FileAlreadyExistsException, FileException, FileNotFoundException } from './exceptions';
import { FileInterface } from './file.interface';
import { MoveFileOptions } from './move-file-options.interface';

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
        // make sure the file does not already exists.
        try {
            new File(path);
            throw new FileAlreadyExistsException();
        }
        catch(e) {
            if (e instanceof FileAlreadyExistsException) {
                throw e;
            }
        }

        // create the file.
        const filePath = path instanceof Path ? path : new Path(path.toString());
        try {
            await writeFile(filePath.toString(), "");
        }
        catch(e) {
            throw new FileException((e as Error).message);
        }

        return new File(filePath);
    }

    /**
     * copy()
     * 
     * copies the directory to the specified path.
     * @param to the destination to copy the file to.
     * @param options copy options.
     */

    public async copy(to: Path | string, options: CopyFileOptions): Promise<void> {
        // resolve the arguments.
        const resolvedDestination = to instanceof Path ? to : new Path(to);
        const resolvedOptions: CopyFileOptions = {
            mode: options.mode ? options.mode : null,
            override: options.override ? options.override : false
        };

        // make sure the destination file does not already exist.
        let destinationInUse = false;
        try {
            // this line should fail if the file does not exist.
            new File(resolvedDestination);
            destinationInUse = true;
        }
        catch(e) {
            destinationInUse = false;
        }

        if (destinationInUse && !resolvedOptions.override) {
            throw new FileAlreadyExistsException();
        }

        // copy the file.
        try {
            await copyFile(this.path().toString(), resolvedDestination.toString(), resolvedOptions.mode!);
        }
        catch(e) {
            throw new FileException((e as Error).message);
        }
    }

    /**
     * delete()
     * 
     * deletes the directory.
     * @returns the deleted directory.
     * @param options delete options.
     */

    public async delete(options: DeleteFileOptions): Promise<void> {
        // resolve options
        const resolvedOptions: DeleteFileOptions = {
            recursive: options.recursive ? options.recursive : false,
            force: options.force ? options.force : false
        };

        // delete the file.
        try {
            await rm(this.path().toString(), {
                force: resolvedOptions.force,
                recursive: resolvedOptions.recursive
            });
        }
        catch(e) {
            throw new FileException((e as Error).message);
        }
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

    public async move(to: Path | string, options: MoveFileOptions): Promise<File> {
        const resolvedDestination = to instanceof Path ? to : new Path(to);
        const resolvedOptions: MoveFileOptions = {
            override: options.override ? options.override : false
        }

        // make sure the destination is available.
        let destinationInUse = false;
        try {
            new File(resolvedDestination);
            destinationInUse = true;
        }
        catch(e) {
            destinationInUse = false;
        }

        if (destinationInUse && !resolvedOptions.override) {
            throw new FileAlreadyExistsException();
        }

        // move the file.
        try {
            await rename(this.path().toString(), resolvedDestination.toString());
            return new File(resolvedDestination);
        }
        catch(e) {
            throw new FileException((e as Error).message);
        }
    }

    /**
     * rename()
     * 
     * renames the filesystem entry.
     * @param newName the new name of the directory.
     * @throws PathException when the new name is invalid.
     * @throws FileException when the operation encounters an error.
     */

    public async rename(newName: string): Promise<File> {
        // resolve the new file path.
        const resolvedFileName = Path.FromSegments(this.path().dirname(), newName);

        // rename the file.
        try {
            await rename(this.path().toString(), resolvedFileName.toString());
            return new File(resolvedFileName);
        }
        catch(e) {
            throw new FileException((e as Error).message);
        }
    }

    public serialize(): string {
        return JSON.stringify({
            path: this.path().toString(),
            created_on: this.createdOn().toString(),
            updated_on: this.updatedOn().toString()
        });
    }
}