"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodUndefinedException = void 0;
const base_exception_1 = require("./base.exception");
/**
 * MethodUndefinedException
 *
 * MethodUndefinedException is an error indicating that a method
 * that was called is undefined.
 */
class MethodUndefinedException extends base_exception_1.BaseException {
    constructor(message = "Method undefined.") {
        super(message);
    }
}
exports.MethodUndefinedException = MethodUndefinedException;
//# sourceMappingURL=method-undefined.exception.js.map