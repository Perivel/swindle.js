"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DurationException = void 0;
const common_module_1 = require("./../../common/common.module");
/**
 * DurationException
 *
 * DurationException represents a generic duration error.
 */
class DurationException extends common_module_1.BaseException {
    constructor(message = "Duration error.") {
        super(message);
    }
}
exports.DurationException = DurationException;
//# sourceMappingURL=duration.exception.js.map