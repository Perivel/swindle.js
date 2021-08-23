"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDException = void 0;
const id_exception_1 = require("./id.exception");
/**
 * UUIDException
 *
 * Indicates an error with the UUID.
 */
class UUIDException extends id_exception_1.IdException {
    constructor(message = "UUID Error") {
        super(message);
    }
}
exports.UUIDException = UUIDException;
//# sourceMappingURL=uuid.exception.js.map