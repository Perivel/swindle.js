export interface PhoneNumberInterface {

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
     * e164() gets the e164 phone number format.
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
     * value() gets the raw phone number.
     */
    value(): string;
}