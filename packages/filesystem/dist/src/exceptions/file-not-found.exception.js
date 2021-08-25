"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileNotFoundException = void 0;
const file_system_exception_1 = require("./file-system.exception");
/**
 * FileNotFoundException
 *
 * An Error indicating a File was not Found.
 */
class FileNotFoundException extends file_system_exception_1.FileSystemException {
    constructor(message = "File Not Found") {
        super(message);
    }
}
exports.FileNotFoundException = FileNotFoundException;
//# sourceMappingURL=file-not-found.exception.js.map