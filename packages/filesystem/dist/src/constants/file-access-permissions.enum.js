"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAccessPermissions = void 0;
const fs_1 = require("fs");
/**
 * FileAccessPermissions
 *
 * Constants indicating file access permissions.
 */
var FileAccessPermissions;
(function (FileAccessPermissions) {
    /**
     * File mode indicating readable, writable, and executable by owner.
     */
    FileAccessPermissions[FileAccessPermissions["READ_WRITE_EXEECUTE_BY_OWNER"] = fs_1.constants.S_IRWXU] = "READ_WRITE_EXEECUTE_BY_OWNER";
    /**
     * File mode indicating readable by owner.
     */
    FileAccessPermissions[FileAccessPermissions["READABLE_BY_OWNER"] = fs_1.constants.S_IRWXU] = "READABLE_BY_OWNER";
    /**
     * File mode indicating writable by owner.
     */
    FileAccessPermissions[FileAccessPermissions["WRITABLE_BY_OWNER"] = fs_1.constants.S_IWUSR] = "WRITABLE_BY_OWNER";
    /**
     * File mode indicating executable by owner.
     */
    FileAccessPermissions[FileAccessPermissions["EXECUTABLE_BY_OWNER"] = fs_1.constants.S_IXUSR] = "EXECUTABLE_BY_OWNER";
    /**
     * File mode indicating readable, writable, and executable by group
     */
    FileAccessPermissions[FileAccessPermissions["READ_WRITE_EXECUTE_BY_GROUP"] = fs_1.constants.S_IRWXG] = "READ_WRITE_EXECUTE_BY_GROUP";
    /**
     * File mode indicating readable by group.
     */
    FileAccessPermissions[FileAccessPermissions["READABLE_BY_GROUP"] = fs_1.constants.S_IRGRP] = "READABLE_BY_GROUP";
    /**
     * File mode indicating writable by group.
     */
    FileAccessPermissions[FileAccessPermissions["WRITABLE_BY_GROUP"] = fs_1.constants.S_IWGRP] = "WRITABLE_BY_GROUP";
    /**
     * File mode indicating executable by group.
     */
    FileAccessPermissions[FileAccessPermissions["EXECUTABLE_BY_GROUP"] = fs_1.constants.S_IXGRP] = "EXECUTABLE_BY_GROUP";
    /**
     * File mode indicating readable, writable, and executable by others.
     */
    FileAccessPermissions[FileAccessPermissions["READ_WRITE_EXECUTE_BY_OTHERS"] = fs_1.constants.S_IRWXO] = "READ_WRITE_EXECUTE_BY_OTHERS";
    /**
     * File mode indicating readable by others.
     */
    FileAccessPermissions[FileAccessPermissions["READABLE_BY_OTHERS"] = fs_1.constants.S_IROTH] = "READABLE_BY_OTHERS";
    /**
     * File mode indicating writable by others.
     */
    FileAccessPermissions[FileAccessPermissions["WRITABLE_BY_OTHERS"] = fs_1.constants.S_IWOTH] = "WRITABLE_BY_OTHERS";
    /**
     * File mode indicating executable by others
     */
    FileAccessPermissions[FileAccessPermissions["EXECUTABLE_BY_OTHERS"] = fs_1.constants.S_IXOTH] = "EXECUTABLE_BY_OTHERS";
})(FileAccessPermissions = exports.FileAccessPermissions || (exports.FileAccessPermissions = {}));
//# sourceMappingURL=file-access-permissions.enum.js.map