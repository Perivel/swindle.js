import { Equatable } from '../../common/common.module';
import { SaltInterface } from './salt.interface';
/**
 * Salt
 *
 * Represents a salt.
 */
export declare class Salt implements Equatable, SaltInterface {
    private readonly _value;
    constructor(value: string);
    /**
     * Generate()
     *
     * generates a salt.
     * @param rounds the number of rounds to use.
     * @returns a generated hash
     */
    static Generate(rounds?: number): Promise<Salt>;
    /**
     * equals()
     *
     * compares the suspect to the instance to determine if they are equal.
     * @param suspect the suspect to compare
     * @returns true if the suspect and the instance are equal
     */
    equals(suspect: any): boolean;
    /**
     * value()
     *
     * gets the value of the salt.
     */
    value(): string;
    toString(): string;
}
//# sourceMappingURL=salt.d.ts.map