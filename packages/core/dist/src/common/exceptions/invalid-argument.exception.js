"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidArgumentException = void 0;
const base_exception_1 = require("./base.exception");
/**
 * InvlaidArguentException
 *
 * InvalidArgumentException indicates an argument is invalid.
 */
class InvalidArgumentException extends base_exception_1.BaseException {
    constructor(message = "Invalid Argument") {
        super(message);
    }
}
exports.InvalidArgumentException = InvalidArgumentException;
//# sourceMappingURL=invalid-argument.exception.js.map