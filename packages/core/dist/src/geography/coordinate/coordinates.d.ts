import { CoordinatesInterface } from "./coordinates.interface";
import { Equatable } from "../../common/common.module";
/**
 * Coordinates
 *
 * Coordinates represents a geographic longitude/latitude pair.
 */
export declare class Coordinates implements CoordinatesInterface, Equatable {
    private readonly _long;
    private readonly _lat;
    constructor(longitude: number, latitude: number);
    /**
     * equals()
     *
     * equals() compares the suspect to the instance, to determine if they are equals.
     * @param suspect The suspect to compare.
     */
    equals(suspect: any): boolean;
    /**
     * latitude()
     *
     * latitude() gets the latitude.
     */
    latitude(): number;
    /**
     * longitude()
     *
     * longitude() gets teh longitude.
     */
    longitude(): number;
    toString(): string;
}
//# sourceMappingURL=coordinates.d.ts.map