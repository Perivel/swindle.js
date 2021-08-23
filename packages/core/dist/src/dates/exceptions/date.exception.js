"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateException = void 0;
const common_module_1 = require("./../../common/common.module");
/**
 * DateException
 *
 * DateException represents a generic date error.
 */
class DateException extends common_module_1.BaseException {
    constructor(message = "Date error.") {
        super(message);
    }
}
exports.DateException = DateException;
//# sourceMappingURL=date.exception.js.map