import { EmailInterface } from "./email.interface";
import { Equatable } from "../../common/common.module";
/**
 * EmailAddress
 *
 * EmailAddress provides functionality for handling email addresses.
 */
export declare class EmailAddress implements EmailInterface, Equatable {
    private readonly _value;
    private readonly _domain;
    private readonly _username;
    /**
     * Creates an instance of an email address.
     * @param value The value of the email address.
     * @throws EmailAddressException when the email address value is invalid.
     */
    constructor(value: string);
    /**
     * domainName()
     *
     * domainName() gets the domain of the email address.
     */
    domainName(): string;
    /**
     * email()
     *
     * email() gets the value of the email address.
     */
    email(): string;
    /**
     * equals()
     *
     * equals() compares the instance to the suspect, to determine if they are equal.
     * @param suspect The suspect to be compared.
     */
    equals(suspect: any): boolean;
    /**
     * username()
     *
     * username() gets the username of the email address.
     */
    username(): string;
    toString(): string;
}
//# sourceMappingURL=email-address.d.ts.map