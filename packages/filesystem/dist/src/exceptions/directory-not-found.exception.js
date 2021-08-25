"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryNotFoundException = void 0;
const file_system_exception_1 = require("./file-system.exception");
/**
 * DirectoryNotFoundException
 *
 * An Error indicating a directory was not Found.
 */
class DirectoryNotFoundException extends file_system_exception_1.FileSystemException {
    constructor(message = "Directory Not Found") {
        super(message);
    }
}
exports.DirectoryNotFoundException = DirectoryNotFoundException;
//# sourceMappingURL=directory-not-found.exception.js.map