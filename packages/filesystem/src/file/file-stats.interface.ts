import { DateTime } from "@swindle/core";

/**
 * Information regarding a file.
 */

export interface FileStats {
    dev: number|bigint,
    ino: number|bigint,
    mode: number|bigint,
    nlink: number|bigint,
    uid: number|bigint,
    gid: number|bigint,
    rdev: number|bigint,
    size: number|bigint,
    blksize: number|bigint,
    blocks: number|bigint,
    atimeMs: number|bigint,
    mtimeMs: number|bigint,
    ctimeMs: number|bigint,
    birthtimeMs: number|bigint,
    atime: DateTime,
    mtime: DateTime,
    ctime: DateTime,
    birthtime: DateTime
}