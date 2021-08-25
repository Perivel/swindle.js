"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCopyMode = void 0;
const fs_1 = require("fs");
/**
 * Mode options for FileSystem.CopyFile()
 */
var FileCopyMode;
(function (FileCopyMode) {
    /**
     * If present, the copy operation will fail with an error if the destination path already exists.
     * COPYFILE_EXCL = constants.COPYFILE_EXCL,
    */
    FileCopyMode[FileCopyMode["EXCL"] = fs_1.constants.COPYFILE_EXCL] = "EXCL";
    // If present, the copy operation will attempt to create a copy-on-write reflink. If the underlying
    // platform does not support copy-on-write, then a fallback copy mechanism is used.
    FileCopyMode[FileCopyMode["FICLONE"] = fs_1.constants.COPYFILE_FICLONE] = "FICLONE";
    // If present, the copy operation will attempt to create a copy-on-write reflink. If the underlying platform
    // does not support copy-on-write, then the operation will fail with an error.
    FileCopyMode[FileCopyMode["FICLONE_FORCE"] = fs_1.constants.COPYFILE_FICLONE_FORCE] = "FICLONE_FORCE";
})(FileCopyMode = exports.FileCopyMode || (exports.FileCopyMode = {}));
//# sourceMappingURL=file-copy-mode.enum.js.map