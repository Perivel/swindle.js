import {
    Equatable
} from './../common/common.module';
import { CharacterSetInterface } from './character-set.interface';
import { CharacterSetValue } from './charset-values.type';

/**
 * CharacterSet
 * 
 * A CharacterSet.
 */

export class CharacterSet implements CharacterSetInterface, Equatable {

    private readonly _value: CharacterSetValue;

    constructor(value: CharacterSetValue) {
        this._value = value;
    }

    /**
     * ASCII()
     * 
     * Creates a CharacterSet instance set to ASCII.
     * @returns A CharacterSet instance set to ASCII.
     */

    public static ASCII(): CharacterSet {
        return new CharacterSet('ASCII');
    }

    /**
     * UTF8()
     * 
     * Creates a CharacterSet instance set to UTF8.
     * @returns A CharacterSet set to UTF-8.
     */

    public static UTF8(): CharacterSet {
        return new CharacterSet('UTF-8');
    }

    /**
     * equals()
     * 
     * determines if the instance and the suspect are equal.
     * @param suspect the suspect to compare.
     * @returns TRUE if the instance and the suspect are equal. FALSE otherwise.
     */

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof CharacterSet) {
            const other = suspect as CharacterSet;
            isEqual = this.value() === other.value();
        }

        return isEqual;
    }

    /**
     * value()
     * 
     * gets the value of the Character Set.
     */
    
    public value(): CharacterSetValue {
        return this._value;
    }

    public toString(): string {
        return this.value();
    }
}