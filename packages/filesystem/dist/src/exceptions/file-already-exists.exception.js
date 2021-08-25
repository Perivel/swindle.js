"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAlreadyExistsException = void 0;
const file_system_exception_1 = require("./file-system.exception");
/**
 * FileAlreadyExistsException
 *
 * An Error indicating a File already exists.
 */
class FileAlreadyExistsException extends file_system_exception_1.FileSystemException {
    constructor(message = "File Not Found") {
        super(message);
    }
}
exports.FileAlreadyExistsException = FileAlreadyExistsException;
//# sourceMappingURL=file-already-exists.exception.js.map