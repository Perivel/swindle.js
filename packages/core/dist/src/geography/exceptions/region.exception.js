"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionException = void 0;
const street_address_exception_1 = require("./street-address.exception");
class RegionException extends street_address_exception_1.StreetAddressException {
    constructor(message = "Invalid Region") {
        super(message);
    }
}
exports.RegionException = RegionException;
//# sourceMappingURL=region.exception.js.map