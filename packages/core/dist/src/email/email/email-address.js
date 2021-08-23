"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAddress = void 0;
const email_address_exception_1 = require("./email-address.exception");
/**
 * EmailAddress
 *
 * EmailAddress provides functionality for handling email addresses.
 */
class EmailAddress {
    /**
     * Creates an instance of an email address.
     * @param value The value of the email address.
     * @throws EmailAddressException when the email address value is invalid.
     */
    constructor(value) {
        const VALID_EMAIL_REGEX = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$");
        if (VALID_EMAIL_REGEX.test(value)) {
            this._value = value;
        }
        else {
            // email is invalid.
            throw new email_address_exception_1.EmailAddressException();
        }
    }
    /**
     * email()
     *
     * email() gets the value of the email address.
     */
    email() {
        return this._value;
    }
    /**
     * equals()
     *
     * equals() compares the instance to the suspect, to determine if they are equal.
     * @param suspect The suspect to be compared.
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof EmailAddress) {
            const other = suspect;
            isEqual = this.email() === other.email();
        }
        return isEqual;
    }
    toString() {
        return this.email();
    }
}
exports.EmailAddress = EmailAddress;
//# sourceMappingURL=email-address.js.map