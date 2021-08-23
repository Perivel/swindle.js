"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAddressException = void 0;
const common_module_1 = require("../../common/common.module");
class EmailAddressException extends common_module_1.InvalidArgumentException {
    constructor(message = "Invalid Email Address") {
        super(message);
    }
}
exports.EmailAddressException = EmailAddressException;
//# sourceMappingURL=email-address.exception.js.map