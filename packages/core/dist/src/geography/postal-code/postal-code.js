"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostalCode = void 0;
const postal_code_exception_1 = require("./../exceptions/postal-code.exception");
/**
 * PostalCode
 *
 * PostalCode represents an address Postal Code (or Zip Code)
 */
class PostalCode {
    /**
     * Creates a Postal Code instance.
     * @param value string
     * @throws InvalidPostalCodeException when the postal code is invalid.
     */
    constructor(value) {
        if (value) {
            this._value = value;
        }
        else {
            // postal code is invalid.
            const error = new postal_code_exception_1.PostalCodeException();
            throw error;
        }
    }
    /**
     * equals()
     *
     * equals() compares the PostalCode object to the suspect to determine if they are equal.
     * @param suspect The value being compared.
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof PostalCode) {
            const otherPostal = suspect;
            isEqual = this.value() === otherPostal.value();
        }
        return isEqual;
    }
    serialize() {
        return this.value();
    }
    toString() {
        return this.serialize();
    }
    /**
     * value()
     *
     * value() gets the postal code value.
     */
    value() {
        return this._value;
    }
}
exports.PostalCode = PostalCode;
//# sourceMappingURL=postal-code.js.map