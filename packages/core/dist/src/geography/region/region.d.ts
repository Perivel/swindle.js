import { RegionInterface } from './region.interface';
import { Equatable, Serializable } from './../../common/common.module';
/**
 * Region
 *
 * Region represents an Address Region (a state or province).
 */
export declare class Region implements RegionInterface, Serializable, Equatable {
    private readonly _name;
    /**
     * Creates a Region instnace
     * @param name The nsme of the region
     * @throws RegionException when the region is invalid.
     */
    constructor(name: string);
    /**
     * equals()
     *
     * equals() compares the suspect and the instance to determine if they are equal.
     * @param suspect the suspect to be compared.
     */
    equals(suspect: any): boolean;
    /**
     * name()
     *
     * name() gets the name of the region.
     */
    name(): string;
    serialize(): string;
    toString(): string;
}
//# sourceMappingURL=region.d.ts.map