import { StreetInterface } from "./street.interface";
import { Serializable, Equatable } from './../../common/common.module';
import { StreetException } from './../exceptions/street.exception';

/**
 * Street
 * 
 * Street represents an address street.
 */

export class Street implements StreetInterface, Serializable, Equatable {
    private readonly _line1: string;
    private readonly _line2: string;

    /**
     * Creates a Street Instance.
     * @param line1 String
     * @param line2 Strirg
     * @throws StreetException when the street in invalid.
     */

    constructor(line1: string, line2: string = "") {

        if (!line1) {
            // invalid street.
            const error = new StreetException();
            throw error;
        }
        this._line1 = line1;
        this._line2 = line2;
    }

    /**
     * Determines if two streets are equal.
     * @param suspect The value being compared.
     */

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof Street) {
            const otherStreet = suspect as Street;
            isEqual = ((this.line1() === otherStreet.line1()) && (this.line2() === this.line2()));
        }

        return isEqual;
    }

    /**
     * line1()
     * 
     * line1() gets the line1 value of the street address.
     */

    public line1(): string {
        return this._line1;
    }

    /**
     * line2()
     * 
     * line2() gets the line2 value of the street.
     */

    public line2(): string {
        return this._line2;
    }

    public serialize(): string {
        return JSON.stringify({
            line_1: this.line1(),
            line2: this.line2(),
        });
    }

    public toString(): string {
        return this.serialize();
    }
}