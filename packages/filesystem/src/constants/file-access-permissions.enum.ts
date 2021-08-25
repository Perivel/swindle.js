import { constants } from "fs";

/**
 * FileAccessPermissions
 * 
 * Constants indicating file access permissions.
 */

export enum FileAccessPermissions {

    /**
     * File mode indicating readable, writable, and executable by owner.
     */

    READ_WRITE_EXEECUTE_BY_OWNER = constants.S_IRWXU,

    /**
     * File mode indicating readable by owner.
     */

    READABLE_BY_OWNER = constants.S_IRWXU,

    /**
     * File mode indicating writable by owner.
     */
    WRITABLE_BY_OWNER = constants.S_IWUSR,

    /**
     * File mode indicating executable by owner.
     */

    EXECUTABLE_BY_OWNER = constants.S_IXUSR,

    /**
     * File mode indicating readable, writable, and executable by group
     */

    READ_WRITE_EXECUTE_BY_GROUP = constants.S_IRWXG,
    
    /**
     * File mode indicating readable by group.
     */

    READABLE_BY_GROUP = constants.S_IRGRP,

    /**
     * File mode indicating writable by group.
     */

    WRITABLE_BY_GROUP = constants.S_IWGRP,

    /**
     * File mode indicating executable by group.
     */
    EXECUTABLE_BY_GROUP = constants.S_IXGRP,

    /**
     * File mode indicating readable, writable, and executable by others.
     */

    READ_WRITE_EXECUTE_BY_OTHERS = constants.S_IRWXO,

    /**
     * File mode indicating readable by others.
     */

    READABLE_BY_OTHERS = constants.S_IROTH,

    /**
     * File mode indicating writable by others.
     */

    WRITABLE_BY_OTHERS = constants.S_IWOTH,

    /**
     * File mode indicating executable by others
     */

    EXECUTABLE_BY_OTHERS = constants.S_IXOTH,
}