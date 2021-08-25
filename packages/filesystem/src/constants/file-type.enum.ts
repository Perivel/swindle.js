import { constants } from "fs";

/**
 * FileType
 * 
 * Constants for determining file type.
 */

export enum FileType {

    /**
     * Bit mask used to extract the file type code.
     */

    BITMASK = constants.S_IFMT,

    /**
     * File type constant for a regular file.
     */

    REGULAR = constants.S_IFREG,

    /**
     * File type constant for a directory.
     */

    DIRECTORY = constants.S_IFDIR,

    /**
     * File type constant for a character-oriented device file.
     */

    CHARACTER_ORIENTED_DEVICE = constants.S_IFCHR,

    /**
     * File type constant for a block-oriented device file.
     */

    BLOCK_ORIENTED_DEVICE = constants.S_IFBLK,

    /**
     * File type constant for a FIFO/pipe.
     */

    FIFO_PIPE = constants.S_IFIFO,

    /**
     * File type constant for a symbolic link.
     */

    SYMBOLIC_LINK = constants.S_IFLNK,

    /**
     * File type constant for a socket.
     */

    SOCKET = constants.S_IFSOCK,
}