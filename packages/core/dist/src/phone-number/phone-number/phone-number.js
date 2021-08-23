"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumber = void 0;
const awesome_phonenumber_1 = __importDefault(require("awesome-phonenumber"));
const exceptions_well_1 = require("../exceptions/exceptions.well");
/**
 * PhoneNumber
 *
 * PhoneNumber represents a phone number.
 */
class PhoneNumber {
    /**
     * Creates a Phone Number instance.
     * @param value The phone number value.
     * @param countryCode The region code of the phone number.
     * @throws PhoneNumverException when the phone number is not valid.
     */
    constructor(value, regionCode) {
        if ((value) && (regionCode)) {
            this._phoneParser = new awesome_phonenumber_1.default(value, regionCode);
            if (!this._phoneParser.isValid())
                throw new exceptions_well_1.PhoneNumberException();
        }
        else {
            // invlaid phone number.
            throw new exceptions_well_1.PhoneNumberException();
        }
    }
    /**
     * canBeInternationallyDialed()
     *
     * canBeInternationallyDialed() determines if the phone number can be internationally dialed.
     *
     * @returns TRUE if the number can be internationally dialed. Otherwise, it returns FALSE.
     */
    canBeInternationallyDialed() {
        return this._phoneParser.canBeInternationallyDialled();
    }
    /**
     * countryCode()
     *
     * countryCode() gets the phone number's country code.
     */
    countryCode() {
        return this._phoneParser.getCountryCode();
    }
    /**
     * equals()
     *
     * equals() compares the phone number to the suspect, to determine if they are equal.
     * @param suspect the suspect being confirmed.
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof PhoneNumber) {
            const otherPhone = suspect;
            isEqual = this.value() === otherPhone.value();
        }
        return isEqual;
    }
    /**
     * e164()
     *
     * e164() gets the phone number in e164 format.
     */
    e164() {
        return this._phoneParser.getNumber('e164');
    }
    /**
     * international()
     *
     * international() gets the international number.
     */
    international() {
        return this._phoneParser.getNumber('international');
    }
    /**
     * isMobile()
     *
     * isMobile() determines if a phone number is mobile.
     */
    isMobile() {
        return this._phoneParser.isMobile();
    }
    /**
     * national()
     *
     * national() gets the national phone number.
     */
    national() {
        return this._phoneParser.getNumber('national');
    }
    /**
     * rfc3966()
     *
     * rfc3966() gets the rfc3966 number.
     */
    rfc3966() {
        return this._phoneParser.getNumber('rfc3966');
    }
    /**
     * regionCode()
     *
     * regionCode() gets the phone number's region code.
     */
    regionCode() {
        return this._phoneParser.getRegionCode();
    }
    /**
     * significant()
     *
     * significant() gets the significant number of the phone number.
     */
    significant() {
        return this._phoneParser.getNumber('significant');
    }
    /**
     * value()
     *
     * value() gets the phone number, in international format.
     */
    value() {
        return this.international();
    }
    toString() {
        return this.value();
    }
}
exports.PhoneNumber = PhoneNumber;
//# sourceMappingURL=phone-number.js.map