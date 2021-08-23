import { CountryInterface } from './country.interface';
import { Equatable } from '../../common/common.module';
/**
 * Country
 *
 * Country represents a Country in the world.
 */
export declare class Country implements CountryInterface, Equatable {
    private readonly _code;
    readonly _name: string;
    /**
     * Creates a Country instance
     * @param code The country code.
     * @throws CountryException when the country information is invalid.
     */
    constructor(code: string);
    /**
     * code()
     *
     * code() gets the country code.
     */
    code(): string;
    /**
     * name()
     *
     * name() gets the country's common name.
     */
    name(): string;
    /**
     * equals()
     *
     * equals() compares the Country to the suspect to determine if they are equal.
     * @param suspect The suspect to be compared.
     */
    equals(suspect: any): boolean;
    toString(): string;
}
//# sourceMappingURL=country.d.ts.map