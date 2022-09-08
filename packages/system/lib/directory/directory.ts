import { 
    mkdir,
    rmdir,
    rename,
    readdir
} from 'fs/promises';
import { copy, move } from 'fs-extra';
import { Copiable, Movable, MoveOptions, Renamable } from '../interfaces';
import { File } from './../file';
import { Link } from './../Link';
import { Path, PathInterface } from '../path';
import { FileSystemEntry, FileSystemEntryNotFoundException, FileSystemEntryOptions } from './../file-system-entry';
import { DirectoryInterface } from './directory.interface';
import { DirectoryAlreadyExistsException, DirectoryException, DirectoryNotFoundException } from './exceptions';
import { CreateDirectoryOptions } from './create-directory-options.interface';
import { CopyDirectoryOptions } from './copy-directory-options.interface';
import { DeleteDirectoryOptions } from './delete-directory-options.interface';
import { MoveDirectoryOptions } from './move-directory-options.interface';

/**
 * Directory
 * 
 * A File system Directory.
 */

export class Directory extends FileSystemEntry implements DirectoryInterface, Copiable, Movable, Renamable {

    /**
     * Creates a reference to a directory.
     * @param path the directory path.
     * @throws DirectoryNotFoundExeption when the directory is not found.
     */

    constructor(path: Path | string) {
        try {
            super(path);
        }
        catch (e) {
            if (e instanceof FileSystemEntryNotFoundException) {
                throw new DirectoryNotFoundException();
            }
            else {
                throw e;
            }
        }

        super.stats().then(stats => {
            if (!stats.isDirectory) {
                throw new DirectoryNotFoundException();
            }
        });
    }

    /**
     * Create()
     * 
     * creates a FileSystem Entry instance.
     * @param path The path of the resource to create.
     * @returns the created FileSystem Entry.
     */

    public static async Create(path: Path | string, options?: CreateDirectoryOptions): Promise<Directory> {
        // make sure the file does not already exists.
        try {
            new Directory(path);
            throw new DirectoryAlreadyExistsException();
        }
        catch (e) {
            if (e instanceof DirectoryAlreadyExistsException) {
                throw e;
            }
        }

        // create the file.
        const dirPath = path instanceof Path ? path : new Path(path.toString());
        try {
            await mkdir(dirPath.toString(), {
                recursive: true,
                mode: ''
            });
        }
        catch (e) {
            throw new DirectoryException((e as Error).message);
        }

        return new Directory(dirPath);
    }

    /**
     * Current()
     * 
     * Gets the current working directory.
     * @returns The current working directory.
     */

    public static Current(): Directory {
        return new Directory(process.cwd());
    }

    /**
     * contents()
     * 
     * gets the contents of the directory.
     */

    public async contents(): Promise<Array<Link | Directory | File>> {
        try {
            const contents = await readdir(this.path().toString());
            return await this.convertToObjects(contents);
            
        }
        catch(e) {
            throw new DirectoryException();
        }
    }

    /**
     * convertToObjects()
     * 
     * converts a list of paths into the corresponding objects.
     * @param paths a list of file paths to convert.
     * @returns a list of objects.
     */

    private async convertToObjects(paths: string[]): Promise<Array<Directory|File|Link>> {
        const results = new Array<Directory|File|Link>();
        let obj: File|Directory|Link;
        await Promise.all(paths.map(async path => {
            const entry = new FileSystemEntry(path);

            if (await entry.isDirectory()) {
                obj = new Directory(entry.path());
            }
            else if (await entry.isFile()) {
                obj = new File(entry.path());
            }
            else {
                obj = new Link(entry.path());
            }
            results.push(obj);
        }));

        return results;
    }

    /**
     * copy()
     * 
     * copies the directory to the specified path.
     * @param to the destination to copy to.
     * @param options copy options.
     * @throws DirectoryAlreadyExistsException when the to path already exists.
     * @throws DirectoryException when the operation fails.
     */

    public async copy(to: Path | string, options?: CopyDirectoryOptions): Promise<void> {
        // resolve arguments
        let resolvedOptions: CopyDirectoryOptions;

        if (options) {
            resolvedOptions = {
                recursive: options.recursive,
                overwrite: options.overwrite,

            };
        }
        else {
            resolvedOptions = {
                overwrite: false,
                recursive: false
            };
        }

        // make sure the destination and file exists
        const resolvedDestination = to instanceof Path ? to : new Path(to.toString());
        let directoryExists = false;
        try {
            new Directory(resolvedDestination);
            directoryExists = true;
        }
        catch(e) {
            directoryExists = false;
        }

        if (directoryExists) {
            throw new DirectoryAlreadyExistsException();
        }
        

        // copy the directory.
        try {
            await copy(this.path().toString(), resolvedDestination.toString(), {
                recursive: resolvedOptions.recursive,
                overwrite: resolvedOptions.overwrite,
                errorOnExist: true,
            });
        }
        catch (e) {
            // an error occured.
            throw new DirectoryException((e as Error).message);
        }
    }

    /**
     * delete()
     * 
     * deletes the directory.
     * @param options delete options.
     * @throws DirectoryException when the operation fails.
     */

    public async delete(options?: DeleteDirectoryOptions): Promise<void> {
        // resolve options
        let resolvedOptions: DeleteDirectoryOptions;

        if (options) {
            resolvedOptions = {
                recursive: options.recursive ? options.recursive : false,
                maxRetries: options.maxRetries ? options.maxRetries : 3,
                retryDelay: options.retryDelay ? options.retryDelay : 2000
            };
        }
        else {
            resolvedOptions = {
                recursive: false,
                maxRetries: 3,
                retryDelay: 2000
            };
        }

        // delete the file.
        try {
            await rmdir(this.path().toString(), {
                recursive: resolvedOptions.recursive,
                maxRetries: resolvedOptions.maxRetries,
                retryDelay: resolvedOptions.retryDelay,
            });
            this.setDeleted();
        }
        catch (e) {
            throw new DirectoryException((e as Error).message);
        }
    }

    public equals(suspect: any): boolean {
        if (suspect instanceof Directory) {
            return super.equals(suspect);
        }
        else {
            return false;
        }
    }

    /**
     * move()
     * 
     * moves the filesystem entry to the specified path.
     * @param to the destination to move the filesystem entry to.
     * @param options move options.
     * @returns the copied movable object.
     * @throws DirectoryAlreadyExistsException when the destination already exists.
     * @throws DirectoryException when the operation fails.
     */

    public async move(to: Path | string, options?: MoveDirectoryOptions): Promise<Directory> {
        const resolvedDestination = to instanceof Path ? to : new Path(to);
        let resolvedOptions: MoveDirectoryOptions;

        if (options) {
            resolvedOptions = {
                overwrite: options.overwrite ? options.overwrite : false
            }
        }
        else {
            resolvedOptions = {
                overwrite: false
            }
        }

        // make sure the destination is available.
        let destinationInUse = false;
        try {
            new Directory(resolvedDestination);
            destinationInUse = true;
        }
        catch (e) {
            destinationInUse = false;
        }

        if (destinationInUse && !resolvedOptions.overwrite) {
            throw new DirectoryAlreadyExistsException();
        }

        // move the file.
        try {
            await move(this.path().toString(), resolvedDestination.toString(), {
                overwrite: resolvedOptions.overwrite,
            });
            return new Directory(resolvedDestination);
        }
        catch (e) {
            throw new DirectoryException((e as Error).message);
        }
    }

    /**
     * rename()
     * 
     * renames the filesystem entry.
     * @param newName the new name of the directory.
     */

    public async rename(newName: string): Promise<Directory> {
        // resolve the new file path.
        const resolvedFileName = Path.FromSegments(this.path().dirname(), newName);

        // rename the file.
        try {
            await rename(this.path().toString(), resolvedFileName.toString());
            return new Directory(resolvedFileName);
        }
        catch (e) {
            throw new DirectoryException((e as Error).message);
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