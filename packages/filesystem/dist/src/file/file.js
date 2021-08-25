"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const core_1 = require("@swindle/core");
const exceptions_well_1 = require("../exceptions/exceptions.well");
/**
 * File
 *
 * A FileHandle.
 */
class File {
    constructor(handle, encoding) {
        this._handle = handle;
        this._encoding = encoding;
    }
    /**
     * append()
     *
     * writes data to a file, replacing the file if it already exists.
     * @param data The data to append.
     * @throws FileException when there is an error appending the file.
     */
    async append(data) {
        try {
            await this._handle.appendFile(data, {
                encoding: this.encoding(),
            });
        }
        catch (e) {
            throw new exceptions_well_1.FileException(e.message);
        }
    }
    /**
     * chmod()
     *
     * Modifies the permissions on the file
     * @param mode the mode to set.
     * @throws FileException when there is an error completing the operation.
     */
    async chmod(mode) {
        try {
            await this._handle.chmod(mode);
        }
        catch (e) {
            throw new exceptions_well_1.FileException(e.message);
        }
    }
    /**
     * chown()
     *
     * changes the ownership of the file
     * @param uid The file's new user id.
     * @param gid the file's new group id.
     * @throws FileException when there is an error completing the operation.
     */
    async chown(uid, gid) {
        try {
            await this._handle.chown(uid, gid);
        }
        catch (e) {
            throw new exceptions_well_1.FileException(e.message);
        }
    }
    /**
     * close()
     *
     * closes the file after waiting for any pending operations to complete.
     * @throws FileException when an error occurs completing the operation.
     */
    async close() {
        try {
            await this._handle.close();
        }
        catch (e) {
            throw new exceptions_well_1.FileException(e.message);
        }
    }
    /**
     * datasync()
     *
     * Forces all currently queued I/O operations associated with the file to the
     * operating system's synchronized I/O completion state.
     * @throws FileException when an error occurs completing the operation.
     */
    async datasync() {
        try {
            await this._handle.datasync();
        }
        catch (e) {
            throw new exceptions_well_1.FileException(e.message);
        }
    }
    /**
     * decryptor()
     *
     * gets numeric file descriptor
     */
    decryptor() {
        return this._handle.fd;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof File) {
            const other = suspect;
            this.decryptor() === other.decryptor();
        }
        return isEqual;
    }
    /**
     * encoding()
     *
     * gets the file encoding.
     * @returns the file encoding.
     */
    encoding() {
        return this._encoding;
    }
    /**
     * read()
     *
     * Reads data from the file
     * @param length The number of bytes to read.
     * @param position The location where to begin reading data from the file. If null,
     * data will be read from the current file position, and the position will be updated.
     * If position is an integer, the current file position will remain unchanged.
     * @throws FileException when an error occurs completing the operation.
     * @returns the file contents.
     */
    async read(length, position) {
        try {
            const contents = await this._handle.read({
                length: length,
                position: position
            });
            return contents.buffer.toString(this.encoding());
        }
        catch (e) {
            throw new exceptions_well_1.FileException(e.message);
        }
    }
    /**
     * readAll()
     *
     * reads the entire contents of a file
     * @throws FileException when an error occurs completing the operation.
     */
    async readAll() {
        try {
            return await this._handle.readFile({
                encoding: this.encoding(),
            });
        }
        catch (e) {
            throw new exceptions_well_1.FileException(e.message);
        }
    }
    /**
     * stats()
     *
     * gets the stats for the file.
     * @param bigInt Whether the numeric values in the stat should use BigInt
     * @throws FileException when an error occurs completing the operation.
     */
    async stats(bigInt = false) {
        try {
            const stats = await this._handle.stat({
                bigint: bigInt,
                throwIfNoEntry: true,
            });
            return {
                dev: stats.dev,
                ino: stats.ino,
                mode: stats.mode,
                nlink: stats.nlink,
                uid: stats.uid,
                gid: stats.gid,
                rdev: stats.rdev,
                size: stats.size,
                blksize: stats.blksize,
                blocks: stats.blocks,
                atimeMs: stats.atimeMs,
                mtimeMs: stats.mtimeMs,
                ctimeMs: stats.ctimeMs,
                birthtimeMs: stats.birthtimeMs,
                atime: core_1.DateTime.FromDate(stats.atime, core_1.Timezone.UTC()),
                mtime: core_1.DateTime.FromDate(stats.mtime, core_1.Timezone.UTC()),
                ctime: core_1.DateTime.FromDate(stats.ctime, core_1.Timezone.UTC()),
                birthtime: core_1.DateTime.FromDate(stats.birthtime, core_1.Timezone.UTC()),
                isBlockDevice: stats.isBlockDevice(),
                isCharacterDevice: stats.isCharacterDevice(),
                isDirectory: stats.isDirectory(),
                isFIFO: stats.isFIFO(),
                isFile: stats.isFile(),
                isSocket: stats.isSocket(),
                isSymbolicLink: stats.isSymbolicLink()
            };
        }
        catch (e) {
            throw new exceptions_well_1.FileException(e.message);
        }
    }
    /**
     * sync()
     *
     * request that all data for the open file descriptor is flushed to the storage device.
     * @throws FileException();
     */
    async sync() {
        try {
            await this._handle.sync();
        }
        catch (e) {
            throw new exceptions_well_1.FileException(e.message);
        }
    }
    /**
     * utimes()
     *
     * change the file system timestamps
     * @throws FileException when an error occurs completing the operation.
     */
    async utimes(atime, mtime) {
        try {
            await this._handle.utimes(atime.value(), mtime.value());
        }
        catch (e) {
            throw new exceptions_well_1.FileException(e.message);
        }
    }
    /**
     * writeBuffer()
     *
     * writes the bufer to the file.
     * @param buffer the data to write.
     * @param offset the start position from within buffer where the data to write begins
     * @param length the number of bytes from buffer to write
     * @param position the offset from the beginning of the file where the data from buffer should be written
     * @throws FileException when an error occurs completing the operation.
     */
    async writeBuffer(buffer, offset = 0, length = buffer.byteLength, position = null) {
        try {
            await this._handle.write(buffer, offset, length, position);
        }
        catch (e) {
            throw new exceptions_well_1.FileException(e.message);
        }
    }
    /**
     * writeString()
     *
     * writes the string data to a file.
     * @param datathe data to write.
     * @param position  the offset from the beginning of the file where the data from string should
     * be written
     * @throws FileException when an error occurs completing the operation.
     */
    async writeString(str, position = null) {
        try {
            await this._handle.write(str.toString(), position, this.encoding());
        }
        catch (e) {
            throw new exceptions_well_1.FileException(e.message);
        }
    }
}
exports.File = File;
//# sourceMappingURL=file.js.map