import { PostalCodeInterface } from './postal-code.interface';
import { Equatable, Serializable } from './../../common/common.module';
/**
 * PostalCode
 *
 * PostalCode represents an address Postal Code (or Zip Code)
 */
export declare class PostalCode implements PostalCodeInterface, Serializable, Equatable {
    private readonly _value;
    /**
     * Creates a Postal Code instance.
     * @param value string
     * @throws InvalidPostalCodeException when the postal code is invalid.
     */
    constructor(value: string);
    /**
     * equals()
     *
     * equals() compares the PostalCode object to the suspect to determine if they are equal.
     * @param suspect The value being compared.
     */
    equals(suspect: any): boolean;
    serialize(): string;
    toString(): string;
    /**
     * value()
     *
     * value() gets the postal code value.
     */
    value(): string;
}
//# sourceMappingURL=postal-code.d.ts.map