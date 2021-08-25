"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileType = void 0;
const fs_1 = require("fs");
/**
 * FileType
 *
 * Constants for determining file type.
 */
var FileType;
(function (FileType) {
    /**
     * Bit mask used to extract the file type code.
     */
    FileType[FileType["BITMASK"] = fs_1.constants.S_IFMT] = "BITMASK";
    /**
     * File type constant for a regular file.
     */
    FileType[FileType["REGULAR"] = fs_1.constants.S_IFREG] = "REGULAR";
    /**
     * File type constant for a directory.
     */
    FileType[FileType["DIRECTORY"] = fs_1.constants.S_IFDIR] = "DIRECTORY";
    /**
     * File type constant for a character-oriented device file.
     */
    FileType[FileType["CHARACTER_ORIENTED_DEVICE"] = fs_1.constants.S_IFCHR] = "CHARACTER_ORIENTED_DEVICE";
    /**
     * File type constant for a block-oriented device file.
     */
    FileType[FileType["BLOCK_ORIENTED_DEVICE"] = fs_1.constants.S_IFBLK] = "BLOCK_ORIENTED_DEVICE";
    /**
     * File type constant for a FIFO/pipe.
     */
    FileType[FileType["FIFO_PIPE"] = fs_1.constants.S_IFIFO] = "FIFO_PIPE";
    /**
     * File type constant for a symbolic link.
     */
    FileType[FileType["SYMBOLIC_LINK"] = fs_1.constants.S_IFLNK] = "SYMBOLIC_LINK";
    /**
     * File type constant for a socket.
     */
    FileType[FileType["SOCKET"] = fs_1.constants.S_IFSOCK] = "SOCKET";
})(FileType = exports.FileType || (exports.FileType = {}));
//# sourceMappingURL=file-type.enum.js.map