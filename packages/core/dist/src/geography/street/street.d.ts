import { StreetInterface } from "./street.interface";
import { Serializable, Equatable } from './../../common/common.module';
/**
 * Street
 *
 * Street represents an address street.
 */
export declare class Street implements StreetInterface, Serializable, Equatable {
    private readonly _line1;
    private readonly _line2;
    /**
     * Creates a Street Instance.
     * @param line1 String
     * @param line2 Strirg
     * @throws StreetException when the street in invalid.
     */
    constructor(line1: string, line2?: string);
    /**
     * Determines if two streets are equal.
     * @param suspect The value being compared.
     */
    equals(suspect: any): boolean;
    /**
     * line1()
     *
     * line1() gets the line1 value of the street address.
     */
    line1(): string;
    /**
     * line2()
     *
     * line2() gets the line2 value of the street.
     */
    line2(): string;
    serialize(): string;
    toString(): string;
}
//# sourceMappingURL=street.d.ts.map