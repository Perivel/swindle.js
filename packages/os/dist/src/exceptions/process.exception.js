"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessException = void 0;
const core_1 = require("@swindle/core");
/**
 * ProcessException
 *
 * A process error
 */
class ProcessException extends core_1.BaseException {
    constructor(message = "Process Error") {
        super(message);
    }
}
exports.ProcessException = ProcessException;
//# sourceMappingURL=process.exception.js.map