import * as Bcrypt from 'bcryptjs';
import { Equatable } from '../../common/common.module';
import { SaltInterface } from './salt.interface';

/**
 * Salt
 *
 * Represents a salt.
 */

export class Salt implements Equatable, SaltInterface {
    private readonly _value: string;

    constructor(value: string) {
        this._value = value;
    }

    /**
     * Generate()
     *
     * generates a salt.
     * @param rounds the number of rounds to use.
     * @returns a generated hash
     */

    public static async Generate(rounds: number = 10): Promise<Salt> {
        return new Salt(await Bcrypt.genSalt(rounds));
    }

    /**
     * equals()
     *
     * compares the suspect to the instance to determine if they are equal.
     * @param suspect the suspect to compare
     * @returns true if the suspect and the instance are equal
     */

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof Salt) {
            isEqual = (suspect as Salt).value() === this.value();
        }

        return isEqual;
    }

    /**
     * value()
     *
     * gets the value of the salt.
     */

    public value(): string {
        return this._value;
    }

    public toString(): string {
        return this.value();
    }
}