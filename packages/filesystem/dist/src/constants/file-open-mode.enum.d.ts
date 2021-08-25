/**
 * FileOpenMode
 *
 * Constants meant for use with FileSystem.Open()
 */
export declare enum FileOpenMode {
    /**
     * Flag indicating to open a file for read-only access.
     */
    READONLY,
    /**
     * Flag indicating to open a file for write-only access.
     */
    WRITEONLY,
    /**
     * Flag indicating to open a file for read-write access.
     */
    READWRITE,
    /**
     * Flag indicating to create the file if it does not already exist.
     */
    CREATE,
    /**
     * Flag indicating that opening a file should fail if the O_CREAT flag
     * is set and the file already exists.
     */
    EXCL,
    /**
     * Flag indicating that if path identifies a terminal device, opening the path
     * shall not cause that terminal to become the controlling terminal for the process
     * (if the process does not already have one).
     */
    NOCTTY,
    /**
     * Flag indicating that if the file exists and is a regular file, and the file is opened
     * successfully for write access, its length shall be truncated to zero.
     */
    TRUNC,
    /**
     * Flag indicating that data will be appended to the end of the file.
     */
    APPEND,
    /**
     * Flag indicating that the open should fail if the path is not a directory.
     */
    DIRECTORY,
    /**
     * Flag indicating reading accesses to the file system will no longer result in
     * an update to the atime information associated with the file. This flag is
     * available on Linux operating systems only.
     */
    NOATTIME,
    /**
     * Flag indicating that the open should fail if the path is a symbolic link.
     */
    NOFOLLOW,
    /**
     * Flag indicating that the file is opened for synchronized I/O with write operations
     * waiting for file integrity.
     */
    SYNC,
    /**
     * Flag indicating that the file is opened for synchronized I/O with write operations waiting
     * for data integrity.
     */
    DSYNC,
    /**
     * Flag indicating to open the symbolic link itself rather than the resource it is pointing to.
     */
    SYMLINK,
    /**
     * When set, an attempt will be made to minimize caching effects of file I/O.
     */
    DIRECT,
    /**
     * Flag indicating to open the file in nonblocking mode when possible.
     */
    NONBLOCK,
    /**
     * When set, a memory file mapping is used to access the file. This flag is
     * available on Windows operating systems only. On other operating systems,
     * this flag is ignored.
     */
    FILEMAP
}
//# sourceMappingURL=file-open-mode.enum.d.ts.map