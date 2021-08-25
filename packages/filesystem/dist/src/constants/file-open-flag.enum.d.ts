/**
 * FileOpenFlag
 *
 * Flag constants for opening files.
 */
export declare enum FileOpenFlag {
    /**
     * Open file for appending. The file is created if it does not exist
     */
    APPEND = "a",
    /**
     * Like APPEND. But, fails if file exists.
     */
    APPEND_FAIL_IF_EXIST = "ax",
    /**
     * Open file for reading and appending. The file is created if it does not exist.
     */
    READ_APPEND = "a+",
    /**
     * Like READ_APPEND but fails if the path exists
     */
    READ_APPEND_FAIL_IF_EXISTS = "ax+",
    /**
     * Open file for reading. An exception occurs if the file does not exist
     */
    READ = "r",
    /**
     * Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
     */
    WRITE = "w",
    /**
     * Like WRITE but fails if the path exists.
     */
    WRITE_FAIL_IF_EXISTS = "wx",
    /**
     * Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
     */
    READ_WRITE = "w+",
    /**
     * Like READ_WRITE but fails if the path exists.
     */
    READ_WRITE_FAIL_IF_EXISTS = "wx+"
}
//# sourceMappingURL=file-open-flag.enum.d.ts.map