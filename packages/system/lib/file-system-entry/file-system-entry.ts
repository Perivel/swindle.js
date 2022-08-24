import {
    DateTime,
    Equatable,
    Serializable,
    TimestampedResource,
    MethodUndefinedException,
    Timezone
} from '@swindle/core';
import { constants as FSConstants } from 'fs';
import { access, stat } from 'fs/promises';
import { FileSystemEntryStats } from './file-sysgtem-entry-stats.interface';
import { FileSystemEntryOptions } from './file-system-entry-options.interface';
import { FileSystemEntryException, FileSystemEntryNotFoundException } from './exceptions';
import { Path } from '../path';

/**
 * FileSystemEntry
 * 
 * A generic object or entry in the file system.
 */

export abstract class FileSystemEntry implements TimestampedResource, Equatable, Serializable {

    private _created: DateTime|null;
    private _updated: DateTime|null;
    private _deleted: DateTime | null;
    private readonly _path: Path;
    private _stats: FileSystemEntryStats|null;

    /**
     * Creates an instance of FileSystemEnty.
     * @param path the path of the entry.
     * @throws PathException when the path is invalid.
     * @throws FileSystemEntryNotFound
     */

    constructor(
        path: Path | string,
    ) {
        this._path = path instanceof Path ? path : new Path(path);

        // make sure the path exists.
        this.pathExists(this.path()).then((exists) => {
            if (!exists) {
                // path does not exist.
                throw new FileSystemEntryNotFoundException();
            }
        });
        
        this._created = null;
        this._updated = null;
        this._deleted = null;
        this._stats = null;
    }

    /**
     * Create()
     * 
     * creates a FileSystem Entry instance.
     * @param path The path of the resource to create.
     * @returns the created FileSystem Entry.
     */

    public static async Create(path: Path | string, options: FileSystemEntryOptions): Promise<FileSystemEntry> {
        throw new MethodUndefinedException();
    }

    /**
     * copy()
     * 
     * copies the directory to the specified path.
     * @param to the destination to copy the file to.
     * @param options copy options.
     */

    public abstract copy(to: Path | string, options: FileSystemEntryOptions): Promise<void>;

    public createdOn(): DateTime {
        let date: DateTime|null = null;
        if (!this._stats) {
            this.stats().then(data => {
                this._created = data.birthtime;
                date = this._created;
            });
        }
        else {
            date = this._created!;
        }

        return date!;
    }

    /**
     * delete()
     * 
     * deletes the directory.
     * @param options delete options.
     */

    public abstract delete(options: FileSystemEntryOptions): Promise<void>;

    public deletedOn(): DateTime | null {
        return this._deleted;
    }

    public abstract equals(suspect: any): boolean;

    /**
     * move()
     * 
     * moves the filesystem entry to the specified path.
     * @param to the destination to move the filesystem entry to.
     * @param options move options.
     * @returns the copied FilSystem Entry.
     */

    public abstract move(to: Path | string, options: FileSystemEntryOptions): Promise<FileSystemEntry>;

    /**
     * path()
     * 
     * returns the path.
     * @returns the path.
     */

    public path(): Path {
        return this._path;
    }

    /**
     * pathExists()
     * 
     * determines if the path exists.
     * @returns TRUE if the file exists. False it it does not.
     */

    private async pathExists(path: Path | string): Promise<boolean> {
        try {
            await access(path.toString(), FSConstants.F_OK);
            return true;
        }
        catch (_) {
            return false;
        }
    }


    /**
     * rename()
     * 
     * renames the filesystem entry.
     * @param newName the new name of the directory.
     */

    public abstract rename(newName: string): Promise<FileSystemEntry>;

    /**
     * stats()
     * 
     * gets the stats of the entry.
     * @throws FileSystemEntryException when the operation fails.
     */

    public async stats(): Promise<FileSystemEntryStats> {
        if (!this._stats) {
            try {
                const data = await stat(this.path().toString(), {
                    bigint: false,
                    throwIfNoEntry: true
                });
                this._stats = {
                    dev: data.dev,
                    ino: data.ino,
                    mode: data.mode,
                    nlink: data.nlink,
                    uid: data.uid,
                    gid: data.gid,
                    rdev: data.rdev,
                    size: data.size,
                    blksize: data.blksize,
                    blocks: data.blocks,
                    atimeMs: data.atimeMs,
                    mtimeMs: data.mtimeMs,
                    ctimeMs: data.ctimeMs,
                    birthtimeMs: data.birthtimeMs,
                    atime: DateTime.FromDate(data.atime, Timezone.UTC()),
                    mtime: DateTime.FromDate(data.mtime, Timezone.UTC()),
                    ctime: DateTime.FromDate(data.ctime, Timezone.UTC()),
                    birthtime: DateTime.FromDate(data.birthtime, Timezone.UTC()),
                    isBlockDevice: data.isBlockDevice(),
                    isCharacterDevice: data.isCharacterDevice(),
                    isDirectory: data.isDirectory(),
                    isFIFO: data.isFIFO(),
                    isFile: data.isFile(),
                    isSocket: data.isSocket(),
                    isSymbolicLink: data.isSymbolicLink()
                };
                return this._stats;
            }
            catch (e) {
                throw new FileSystemEntryException((e as Error).message);
            }
        }
        else {
            return this._stats;
        }
    }

    public abstract serialize(): string;

    public updatedOn(): DateTime {
        let date: DateTime|null = null;
        if (!this._stats) {
            this.stats().then(data => {
                this._created = data.ctime;
                date = this._created;
            });
        }
        else {
            date = this._created!;
        }

        return date!;
    }
}