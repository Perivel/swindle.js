"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreetAddressException = void 0;
const common_module_1 = require("./../../common/common.module");
class StreetAddressException extends common_module_1.InvalidArgumentException {
    constructor(message = "Street Address Error") {
        super(message);
    }
}
exports.StreetAddressException = StreetAddressException;
//# sourceMappingURL=street-address.exception.js.map