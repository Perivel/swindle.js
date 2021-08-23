"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Street = void 0;
const street_exception_1 = require("./../exceptions/street.exception");
/**
 * Street
 *
 * Street represents an address street.
 */
class Street {
    /**
     * Creates a Street Instance.
     * @param line1 String
     * @param line2 Strirg
     * @throws StreetException when the street in invalid.
     */
    constructor(line1, line2 = "") {
        if (!line1) {
            // invalid street.
            const error = new street_exception_1.StreetException();
            throw error;
        }
        this._line1 = line1;
        this._line2 = line2;
    }
    /**
     * Determines if two streets are equal.
     * @param suspect The value being compared.
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof Street) {
            const otherStreet = suspect;
            isEqual = ((this.line1() === otherStreet.line1()) && (this.line2() === this.line2()));
        }
        return isEqual;
    }
    /**
     * line1()
     *
     * line1() gets the line1 value of the street address.
     */
    line1() {
        return this._line1;
    }
    /**
     * line2()
     *
     * line2() gets the line2 value of the street.
     */
    line2() {
        return this._line2;
    }
    serialize() {
        return JSON.stringify({
            line_1: this.line1(),
            line2: this.line2(),
        });
    }
    toString() {
        return this.serialize();
    }
}
exports.Street = Street;
//# sourceMappingURL=street.js.map