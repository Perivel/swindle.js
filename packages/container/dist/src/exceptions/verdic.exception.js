"use strict";
/**
 * VerdicException
 *
 * The base exception class.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerdicException = void 0;
class VerdicException extends Error {
    constructor(message = "An error occured.") {
        super(message);
    }
}
exports.VerdicException = VerdicException;
//# sourceMappingURL=verdic.exception.js.map