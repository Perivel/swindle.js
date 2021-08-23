import { Equatable } from "../../common/common.module";
import { PhoneNumberInterface } from "./phone-number.interface";
/**
 * PhoneNumber
 *
 * PhoneNumber represents a phone number.
 */
export declare class PhoneNumber implements PhoneNumberInterface, Equatable {
    private _phoneParser;
    /**
     * Creates a Phone Number instance.
     * @param value The phone number value.
     * @param countryCode The region code of the phone number.
     * @throws PhoneNumverException when the phone number is not valid.
     */
    constructor(value: string, regionCode: string);
    /**
     * canBeInternationallyDialed()
     *
     * canBeInternationallyDialed() determines if the phone number can be internationally dialed.
     *
     * @returns TRUE if the number can be internationally dialed. Otherwise, it returns FALSE.
     */
    canBeInternationallyDialed(): boolean;
    /**
     * countryCode()
     *
     * countryCode() gets the phone number's country code.
     */
    countryCode(): number;
    /**
     * equals()
     *
     * equals() compares the phone number to the suspect, to determine if they are equal.
     * @param suspect the suspect being confirmed.
     */
    equals(suspect: any): boolean;
    /**
     * e164()
     *
     * e164() gets the phone number in e164 format.
     */
    e164(): string;
    /**
     * international()
     *
     * international() gets the international number.
     */
    international(): string;
    /**
     * isMobile()
     *
     * isMobile() determines if a phone number is mobile.
     */
    isMobile(): boolean;
    /**
     * national()
     *
     * national() gets the national phone number.
     */
    national(): string;
    /**
     * rfc3966()
     *
     * rfc3966() gets the rfc3966 number.
     */
    rfc3966(): string;
    /**
     * regionCode()
     *
     * regionCode() gets the phone number's region code.
     */
    regionCode(): string;
    /**
     * significant()
     *
     * significant() gets the significant number of the phone number.
     */
    significant(): string;
    /**
     * value()
     *
     * value() gets the phone number, in international format.
     */
    value(): string;
    toString(): string;
}
//# sourceMappingURL=phone-number.d.ts.map