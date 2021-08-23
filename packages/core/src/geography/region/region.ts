import { RegionInterface } from './region.interface';
import { Equatable, Serializable } from './../../common/common.module';
import { RegionException } from '../exceptions/region.exception';

/**
 * Region
 * 
 * Region represents an Address Region (a state or province).
 */

 export class Region implements RegionInterface, Serializable, Equatable {
    private readonly _name: string;

    /**
     * Creates a Region instnace
     * @param name The nsme of the region
     * @throws RegionException when the region is invalid.
     */

    constructor(name: string) {
        if (name) {
            this._name = name;
        }
        else {
            // invalid region
            const error = new RegionException();
            throw error;
        }
    }

    /**
     * equals()
     * 
     * equals() compares the suspect and the instance to determine if they are equal.
     * @param suspect the suspect to be compared.
     */

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof Region) {
            const otherRegion = suspect as Region;
            isEqual = this.name() === otherRegion.name();
        }

        return isEqual;
    }

    /**
     * name()
     * 
     * name() gets the name of the region.
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