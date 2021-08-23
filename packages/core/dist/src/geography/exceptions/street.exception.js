"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreetException = void 0;
const street_address_exception_1 = require("./../exceptions/street-address.exception");
class StreetException extends street_address_exception_1.StreetAddressException {
    constructor(message = "Invalid Street") {
        super(message);
    }
}
exports.StreetException = StreetException;
//# sourceMappingURL=street.exception.js.map