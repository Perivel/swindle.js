import { copyFile, writeFile, rm, rename, readlink, symlink, unlink } from 'fs/promises';
import { Path } from '../path';
import { FileSystemEntry, FileSystemEntryNotFoundException, FileSystemEntryOptions } from './../file-system-entry';
import { LinkType } from './enums';
import { CreateLinkOptions } from './create-link-options.interface';
import { LinkInterface } from './link.interface';
import { CopyLinkOptions } from './copy-link-options.interface';
import { LinkAlreadyExistsException, LinkException, LinkNotFoundException } from './exceptions';
import { DeleteLinkOptions } from './delete-link-options.interface';

/**
 * Link
 * 
 * A Symbolic Link
 */

export class Link extends FileSystemEntry implements LinkInterface {

    private _target: Path | null;

    /**
     * Creates a file instance.
     * @param path the path to the file.
     * @throws FileNotFoundException when the file is not found.
     * @throws PathException when the path is invalid.
     */

    constructor(path: Path | string) {
        try {
            super(path);
            this._target = null;
        }
        catch (e) {
            if (e instanceof FileSystemEntryNotFoundException) {
                throw new LinkNotFoundException();
            }
            else {
                throw e;
            }
        }

        super.stats().then(stats => {
            if (!stats.isSymbolicLink) {
                throw new LinkNotFoundException();
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

    public static async Create(path: Path | string, target: Path | string, options?: CreateLinkOptions): Promise<Link> {
        // make sure the file does not already exists.
        try {
            new Link(path);
            throw new LinkAlreadyExistsException();
        }
        catch (e) {
            if (e instanceof LinkAlreadyExistsException) {
                throw e;
            }
        }

        // create the Link.
        const linkPath = path instanceof Path ? path : new Path(path.toString());
        const targetPath = target instanceof Path ? target : new Path(target);
        let resolvedOptions: CreateLinkOptions;

        if (options) {
            resolvedOptions = {
                type: options.type ? options.type : LinkType.File
            };
        }
        else {
            resolvedOptions = {
                type: LinkType.File
            }
        }

        try {
            await symlink(targetPath.toString(), linkPath.toString(), resolvedOptions.type?.toString());
        }
        catch (e) {
            throw new LinkException((e as Error).message);
        }

        return new Link(linkPath);
    }

    /**
     * delete()
     * 
     * deletes the directory.
     * @returns the deleted directory.
     * @param options delete options.
     */

    public async delete(options?: DeleteLinkOptions): Promise<void> {

        // delete the link.
        try {
            await unlink(this.path().toString());
            this.setDeleted();
        }
        catch (e) {
            throw new LinkException((e as Error).message);
        }
    }

    public equals(suspect: any): boolean {
        return false;
    }

    /**
     * isValid()
     * 
     * determines if the target of the link exists.
     */

    public async isValid(): Promise<boolean> {
        let valid = false;

        try {
            const res = await this.target();
            valid = res !== null;
        }
        catch(e) {}

        return valid;
    }

    public serialize(): string {
        return JSON.stringify({
            path: this.path().toString(),
            created_on: this.createdOn().toString(),
            updated_on: this.updatedOn().toString()
        });
    }

    /**
     * target()
     * 
     * gets the target object of the link.
     * @throws LinkException when the operation fails.
     * @returns the path targeted by the link.
     */

    public async target(): Promise<Path | null> {
        if (!this._target) {
            try {
                const targetPath = await readlink(this.path().toString());
                this._target = new Path(targetPath);
            }
            catch (e) {
                throw new LinkException((e as Error).message);
            }
        }
        return this._target;
    }
}