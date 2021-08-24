"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemException = void 0;
const core_1 = require("@swindle/core");
/**
 * FileSystemException
 *
 * A generic file system error.
 */
class FileSystemException extends core_1.BaseException {
    constructor(message = "File System Error") {
        super(message);
    }
}
exports.FileSystemException = FileSystemException;
//# sourceMappingURL=file-system.exception.js.map