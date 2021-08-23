"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkException = void 0;
const base_exception_1 = require("./base.exception");
/**
 * NetworkException
 *
 * NetworkException indicates a network exception has occured.
 */
class NetworkException extends base_exception_1.BaseException {
    constructor(message = "Network Error") {
        super(message);
    }
}
exports.NetworkException = NetworkException;
//# sourceMappingURL=network.exception.js.map