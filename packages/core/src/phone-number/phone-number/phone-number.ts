import AwesomePhone from "awesome-phonenumber";
import { Equatable } from "../../common/common.module";
import { PhoneNumberException } from "../exceptions/exceptions.well";
import { PhoneNumberInterface } from "./phone-number.interface";

/**
 * PhoneNumber
 *
 * PhoneNumber represents a phone number.
 */

export class PhoneNumber implements PhoneNumberInterface, Equatable {
    private _phoneParser: AwesomePhone;

    /**
     * Creates a Phone Number instance.
     * @param value The phone number value.
     * @param countryCode The region code of the phone number.
     * @throws PhoneNumverException when the phone number is not valid.
     */

    constructor(value: string, regionCode: string) {

        if ((value) && (regionCode)) {
            this._phoneParser = new AwesomePhone(value, regionCode);
            if (!this._phoneParser.isValid()) throw new PhoneNumberException();
        }
        else {
            // invlaid phone number.
            throw new PhoneNumberException();
        }
    }

    /**
     * canBeInternationallyDialed()
     *
     * canBeInternationallyDialed() determines if the phone number can be internationally dialed.
     *
     * @returns TRUE if the number can be internationally dialed. Otherwise, it returns FALSE.
     */

    public canBeInternationallyDialed(): boolean {
        return this._phoneParser.canBeInternationallyDialled();
    }

    /**
     * countryCode()
     *
     * countryCode() gets the phone number's country code.
     */

    public countryCode(): number {
        return this._phoneParser.getCountryCode();
    }

    /**
     * equals()
     *
     * equals() compares the phone number to the suspect, to determine if they are equal.
     * @param suspect the suspect being confirmed.
     */

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof PhoneNumber) {
            const otherPhone = suspect as PhoneNumber;
            isEqual = this.value() === otherPhone.value();
        }

        return isEqual;
    }

    /**
     * e164()
     *
     * e164() gets the phone number in e164 format.
     */

    public e164(): string {
        return this._phoneParser.getNumber('e164');
    }

    /**
     * international()
     *
     * international() gets the international number.
     */

    public international(): string {
        return this._phoneParser.getNumber('international');
    }

    /**
     * isMobile()
     *
     * isMobile() determines if a phone number is mobile.
     */

    public isMobile(): boolean {
        return this._phoneParser.isMobile();
    }

    /**
     * national()
     *
     * national() gets the national phone number.
     */

    public national(): string {
        return this._phoneParser.getNumber('national');
    }

    /**
     * rfc3966()
     *
     * rfc3966() gets the rfc3966 number.
     */

    public rfc3966(): string {
        return this._phoneParser.getNumber('rfc3966');
    }

    /**
     * regionCode()
     *
     * regionCode() gets the phone number's region code.
     */

    public regionCode(): string {
        return this._phoneParser.getRegionCode();
    }

    /**
     * significant()
     *
     * significant() gets the significant number of the phone number.
     */

    public significant(): string {
        return this._phoneParser.getNumber('significant');
    }

    /**
     * value()
     *
     * value() gets the phone number, in international format.
     */

    public value(): string {
        return this.international();
    }

    public toString(): string {
        return this.value();
    }
}