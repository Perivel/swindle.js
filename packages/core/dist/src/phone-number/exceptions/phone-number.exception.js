"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberException = void 0;
const common_module_1 = require("./../../common/common.module");
/**
 * PhoneNumberException
 *
 * Indicates an error with a Phone Number.
 */
class PhoneNumberException extends common_module_1.InvalidArgumentException {
    constructor(message = "Phone Number Error") {
        super(message);
    }
}
exports.PhoneNumberException = PhoneNumberException;
//# sourceMappingURL=phone-number.exception.js.map