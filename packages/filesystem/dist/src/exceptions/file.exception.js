"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileException = void 0;
const file_system_exception_1 = require("./file-system.exception");
/**
 * FileException
 *
 * A generic file error.
 */
class FileException extends file_system_exception_1.FileSystemException {
    constructor(message = "File Error") {
        super(message);
    }
}
exports.FileException = FileException;
//# sourceMappingURL=file.exception.js.map