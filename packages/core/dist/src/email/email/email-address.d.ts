import { EmailInterface } from "./email.interface";
import { Equatable } from "../../common/common.module";
/**
 * EmailAddress
 *
 * EmailAddress provides functionality for handling email addresses.
 */
export declare class EmailAddress implements EmailInterface, Equatable {
    private readonly _value;
    /**
     * Creates an instance of an email address.
     * @param value The value of the email address.
     * @throws EmailAddressException when the email address value is invalid.
     */
    constructor(value: string);
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
    toString(): string;
}
//# sourceMappingURL=email-address.d.ts.map