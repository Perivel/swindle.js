"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalityException = void 0;
const street_address_exception_1 = require("./street-address.exception");
class LocalityException extends street_address_exception_1.StreetAddressException {
    constructor(message = "Invalid Locality") {
        super(message);
    }
}
exports.LocalityException = LocalityException;
//# sourceMappingURL=locality.exception.js.map