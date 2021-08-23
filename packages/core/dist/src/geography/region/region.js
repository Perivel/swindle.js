"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
const region_exception_1 = require("../exceptions/region.exception");
/**
 * Region
 *
 * Region represents an Address Region (a state or province).
 */
class Region {
    /**
     * Creates a Region instnace
     * @param name The nsme of the region
     * @throws RegionException when the region is invalid.
     */
    constructor(name) {
        if (name) {
            this._name = name;
        }
        else {
            // invalid region
            const error = new region_exception_1.RegionException();
            throw error;
        }
    }
    /**
     * equals()
     *
     * equals() compares the suspect and the instance to determine if they are equal.
     * @param suspect the suspect to be compared.
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof Region) {
            const otherRegion = suspect;
            isEqual = this.name() === otherRegion.name();
        }
        return isEqual;
    }
    /**
     * name()
     *
     * name() gets the name of the region.
     */
    name() {
        return this._name;
    }
    serialize() {
        return this.name();
    }
    toString() {
        return this.serialize();
    }
}
exports.Region = Region;
//# sourceMappingURL=region.js.map