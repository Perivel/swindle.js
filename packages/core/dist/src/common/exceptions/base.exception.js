"use strict";
/**
 * BaseException
 *
 * DomainException represents a generic domain exception.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseException = void 0;
class BaseException extends Error {
    constructor(message = "A domain error occured.") {
        super(message);
    }
}
exports.BaseException = BaseException;
//# sourceMappingURL=base.exception.js.map