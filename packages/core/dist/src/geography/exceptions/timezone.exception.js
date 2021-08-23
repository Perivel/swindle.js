"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimezoneException = void 0;
const base_exception_1 = require("./../../common/exceptions/base.exception");
/**
 * TimezoneException
 *
 * TimezoneException represents a generic timezone error.
 */
class TimezoneException extends base_exception_1.BaseException {
    constructor(message = "Timezone error.") {
        super(message);
    }
}
exports.TimezoneException = TimezoneException;
//# sourceMappingURL=timezone.exception.js.map