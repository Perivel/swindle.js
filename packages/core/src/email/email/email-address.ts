import { EmailInterface } from "./email.interface";
import { Equatable, InvalidArgumentException } from "../../common/common.module";
import { EmailAddressException } from "./email-address.exception";

/**
 * EmailAddress
 *
 * EmailAddress provides functionality for handling email addresses.
 */

export class EmailAddress implements EmailInterface, Equatable {

    private readonly _value: string;
    private readonly _domain: string;
    private readonly _username: string;

    /**
     * Creates an instance of an email address.
     * @param value The value of the email address.
     * @throws EmailAddressException when the email address value is invalid.
     */

    constructor(value: string) {
        const VALID_EMAIL_REGEX = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$");
        if (VALID_EMAIL_REGEX.test(value)) {
            this._value = value;
            const separatorIndex = value.indexOf('@');
            this._username = value.substring(0, separatorIndex);
            this._domain = value.substring(separatorIndex + 1);
        }
        else {
            // email is invalid.
            throw new EmailAddressException();
        }
    }

    /**
     * domainName()
     * 
     * domainName() gets the domain of the email address.
     */

    public domainName(): string {
        return this._domain;
    }

    /**
     * email()
     *
     * email() gets the value of the email address.
     */

    public email(): string {
        return this._value;
    }

    /**
     * equals()
     *
     * equals() compares the instance to the suspect, to determine if they are equal.
     * @param suspect The suspect to be compared.
     */

    public equals(suspect: any): boolean {

        let isEqual = false;

        if (suspect instanceof EmailAddress) {
            const other = suspect as EmailAddress;
            isEqual = this.email() === other.email();
        }

        return isEqual;
    }

    /**
     * username()
     * 
     * username() gets the username of the email address.
     */

    public username(): string {
        return this._username;
    }

    public toString(): string {
        return this.email();
    }
}