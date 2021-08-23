"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutOfBoundsException = void 0;
const invalid_argument_exception_1 = require("./invalid-argument.exception");
class OutOfBoundsException extends invalid_argument_exception_1.InvalidArgumentException {
    constructor(message = 'Argument out of bounds.') {
        super(message);
    }
}
exports.OutOfBoundsException = OutOfBoundsException;
//# sourceMappingURL=out-of-bounds.exception.js.map