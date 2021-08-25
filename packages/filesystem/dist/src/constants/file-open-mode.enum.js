"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileOpenMode = void 0;
const fs_1 = require("fs");
/**
 * FileOpenMode
 *
 * Constants meant for use with FileSystem.Open()
 */
var FileOpenMode;
(function (FileOpenMode) {
    /**
     * Flag indicating to open a file for read-only access.
     */
    FileOpenMode[FileOpenMode["READONLY"] = fs_1.constants.O_RDONLY] = "READONLY";
    /**
     * Flag indicating to open a file for write-only access.
     */
    FileOpenMode[FileOpenMode["WRITEONLY"] = fs_1.constants.O_WRONLY] = "WRITEONLY";
    /**
     * Flag indicating to open a file for read-write access.
     */
    FileOpenMode[FileOpenMode["READWRITE"] = fs_1.constants.O_RDWR] = "READWRITE";
    /**
     * Flag indicating to create the file if it does not already exist.
     */
    FileOpenMode[FileOpenMode["CREATE"] = fs_1.constants.O_CREAT] = "CREATE";
    /**
     * Flag indicating that opening a file should fail if the O_CREAT flag
     * is set and the file already exists.
     */
    FileOpenMode[FileOpenMode["EXCL"] = fs_1.constants.O_EXCL] = "EXCL";
    /**
     * Flag indicating that if path identifies a terminal device, opening the path
     * shall not cause that terminal to become the controlling terminal for the process
     * (if the process does not already have one).
     */
    FileOpenMode[FileOpenMode["NOCTTY"] = fs_1.constants.O_NOCTTY] = "NOCTTY";
    /**
     * Flag indicating that if the file exists and is a regular file, and the file is opened
     * successfully for write access, its length shall be truncated to zero.
     */
    FileOpenMode[FileOpenMode["TRUNC"] = fs_1.constants.O_TRUNC] = "TRUNC";
    /**
     * Flag indicating that data will be appended to the end of the file.
     */
    FileOpenMode[FileOpenMode["APPEND"] = fs_1.constants.O_APPEND] = "APPEND";
    /**
     * Flag indicating that the open should fail if the path is not a directory.
     */
    FileOpenMode[FileOpenMode["DIRECTORY"] = fs_1.constants.O_DIRECTORY] = "DIRECTORY";
    /**
     * Flag indicating reading accesses to the file system will no longer result in
     * an update to the atime information associated with the file. This flag is
     * available on Linux operating systems only.
     */
    FileOpenMode[FileOpenMode["NOATTIME"] = fs_1.constants.O_NOATIME] = "NOATTIME";
    /**
     * Flag indicating that the open should fail if the path is a symbolic link.
     */
    FileOpenMode[FileOpenMode["NOFOLLOW"] = fs_1.constants.O_NOFOLLOW] = "NOFOLLOW";
    /**
     * Flag indicating that the file is opened for synchronized I/O with write operations
     * waiting for file integrity.
     */
    FileOpenMode[FileOpenMode["SYNC"] = fs_1.constants.O_SYNC] = "SYNC";
    /**
     * Flag indicating that the file is opened for synchronized I/O with write operations waiting
     * for data integrity.
     */
    FileOpenMode[FileOpenMode["DSYNC"] = fs_1.constants.O_DSYNC] = "DSYNC";
    /**
     * Flag indicating to open the symbolic link itself rather than the resource it is pointing to.
     */
    FileOpenMode[FileOpenMode["SYMLINK"] = fs_1.constants.O_SYMLINK] = "SYMLINK";
    /**
     * When set, an attempt will be made to minimize caching effects of file I/O.
     */
    FileOpenMode[FileOpenMode["DIRECT"] = fs_1.constants.O_DIRECT] = "DIRECT";
    /**
     * Flag indicating to open the file in nonblocking mode when possible.
     */
    FileOpenMode[FileOpenMode["NONBLOCK"] = fs_1.constants.O_NONBLOCK] = "NONBLOCK";
    /**
     * When set, a memory file mapping is used to access the file. This flag is
     * available on Windows operating systems only. On other operating systems,
     * this flag is ignored.
     */
    FileOpenMode[FileOpenMode["FILEMAP"] = fs_1.constants.UV_FS_O_FILEMAP] = "FILEMAP";
})(FileOpenMode = exports.FileOpenMode || (exports.FileOpenMode = {}));
//# sourceMappingURL=file-open-mode.enum.js.map