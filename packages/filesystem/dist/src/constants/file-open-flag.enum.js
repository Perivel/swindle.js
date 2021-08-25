"use strict";
/**
 * FileOpenFlag
 *
 * Flag constants for opening files.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileOpenFlag = void 0;
var FileOpenFlag;
(function (FileOpenFlag) {
    /**
     * Open file for appending. The file is created if it does not exist
     */
    FileOpenFlag["APPEND"] = "a";
    /**
     * Like APPEND. But, fails if file exists.
     */
    FileOpenFlag["APPEND_FAIL_IF_EXIST"] = "ax";
    /**
     * Open file for reading and appending. The file is created if it does not exist.
     */
    FileOpenFlag["READ_APPEND"] = "a+";
    /**
     * Like READ_APPEND but fails if the path exists
     */
    FileOpenFlag["READ_APPEND_FAIL_IF_EXISTS"] = "ax+";
    /**
     * Open file for reading. An exception occurs if the file does not exist
     */
    FileOpenFlag["READ"] = "r";
    /**
     * Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
     */
    FileOpenFlag["WRITE"] = "w";
    /**
     * Like WRITE but fails if the path exists.
     */
    FileOpenFlag["WRITE_FAIL_IF_EXISTS"] = "wx";
    /**
     * Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
     */
    FileOpenFlag["READ_WRITE"] = "w+";
    /**
     * Like READ_WRITE but fails if the path exists.
     */
    FileOpenFlag["READ_WRITE_FAIL_IF_EXISTS"] = "wx+";
})(FileOpenFlag = exports.FileOpenFlag || (exports.FileOpenFlag = {}));
//# sourceMappingURL=file-open-flag.enum.js.map