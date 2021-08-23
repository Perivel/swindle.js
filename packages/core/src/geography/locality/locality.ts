import { LocalityException } from '../exceptions/locality.exception';
import { Equatable, Serializable } from './../../common/common.module';
import { LocalityInterface } from './locality.interface';

/**
 * Locality
 * 
 * Locality represents an Address Locality, or a City or Town.
 */

 export class Locality implements LocalityInterface, Serializable, Equatable {
    private readonly _name: string;

    /**
     * Creates a Locality instance.
     * @param name The name of the locality.
     * @throws LocalityException when the locality is invalid.
     */

    constructor(name: string) {

        if (name) {
            this._name = name;
        }
        else {
            // invalid locality.
            const error = new LocalityException();
            throw error;
        }

    }

    /**
     * Compares the instance to the suspect to determine if they are equal.
     * @param suspect The suspect to compare.
     */

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof Locality) {
            const otherLocality = suspect as Locality;
            isEqual = this.name() === otherLocality.name();
        }

        return isEqual;
    }

    /**
     * name()
     * 
     * name() gets the locality name.
     */

    public name(): string {
        return this._name;
    }

    public serialize(): string {
        return this.name();
    }

    public toString(): string {
        return this.serialize();
    }
}