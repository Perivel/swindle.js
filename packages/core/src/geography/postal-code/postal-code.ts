import { PostalCodeInterface } from './postal-code.interface';
import { Equatable, Serializable } from './../../common/common.module';
import { PostalCodeException } from './../exceptions/postal-code.exception';

/**
 * PostalCode
 *
 * PostalCode represents an address Postal Code (or Zip Code)
 */

 export class PostalCode implements PostalCodeInterface, Serializable, Equatable {
    private readonly _value: string;

    /**
     * Creates a Postal Code instance.
     * @param value string
     * @throws InvalidPostalCodeException when the postal code is invalid.
     */

    constructor(value: string) {

        if (value) {
            this._value = value;
        }
        else {
            // postal code is invalid.
            const error = new PostalCodeException();
            throw error;
        }
    }

    /**
     * equals()
     *
     * equals() compares the PostalCode object to the suspect to determine if they are equal.
     * @param suspect The value being compared.
     */

    public equals(suspect: any) {
        let isEqual = false;

        if (suspect instanceof PostalCode) {
            const otherPostal = suspect as PostalCode;
            isEqual = this.value() === otherPostal.value();
        }

        return isEqual;
    }

    public serialize(): string {
        return this.value();
    }

    public toString(): string {
        return this.serialize();
    }

    /**
     * value()
     *
     * value() gets the postal code value.
     */

    public value(): string {
        return this._value;
    }
}