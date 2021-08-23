"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostalCodeException = void 0;
const street_address_exception_1 = require("./street-address.exception");
class PostalCodeException extends street_address_exception_1.StreetAddressException {
    constructor(message = "Invalid Postal Code") {
        super(message);
    }
}
exports.PostalCodeException = PostalCodeException;
//# sourceMappingURL=postal-code.exception.js.map