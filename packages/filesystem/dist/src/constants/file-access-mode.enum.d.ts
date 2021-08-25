/**
 * Constants intended for use with FileSystem.Access()
 */
export declare enum FileAccessMode {
    /**
     * Flag indicating that the file is visible to the calling
     * process. This is useful for determining if a file exists, but
     * says nothing about rwx permissions.
     */
    F_OK,
    /**
     * Flag indicating that the file can be read by the calling process.
     */
    R_OK,
    /**
     * Flag indicating that the file can be written by the calling process.
     */
    W_OK,
    /**
     * Flag indicating that the file can be executed by the calling process
     */
    X_OK
}
//# sourceMappingURL=file-access-mode.enum.d.ts.map