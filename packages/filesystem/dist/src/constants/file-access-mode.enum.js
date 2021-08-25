"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAccessMode = void 0;
const fs_1 = require("fs");
/**
 * Constants intended for use with FileSystem.Access()
 */
var FileAccessMode;
(function (FileAccessMode) {
    /**
     * Flag indicating that the file is visible to the calling
     * process. This is useful for determining if a file exists, but
     * says nothing about rwx permissions.
     */
    FileAccessMode[FileAccessMode["F_OK"] = fs_1.constants.F_OK] = "F_OK";
    /**
     * Flag indicating that the file can be read by the calling process.
     */
    FileAccessMode[FileAccessMode["R_OK"] = fs_1.constants.R_OK] = "R_OK";
    /**
     * Flag indicating that the file can be written by the calling process.
     */
    FileAccessMode[FileAccessMode["W_OK"] = fs_1.constants.W_OK] = "W_OK";
    /**
     * Flag indicating that the file can be executed by the calling process
     */
    FileAccessMode[FileAccessMode["X_OK"] = fs_1.constants.X_OK] = "X_OK";
})(FileAccessMode = exports.FileAccessMode || (exports.FileAccessMode = {}));
//# sourceMappingURL=file-access-mode.enum.js.map