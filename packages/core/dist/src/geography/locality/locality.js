"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locality = void 0;
const locality_exception_1 = require("../exceptions/locality.exception");
/**
 * Locality
 *
 * Locality represents an Address Locality, or a City or Town.
 */
class Locality {
    /**
     * Creates a Locality instance.
     * @param name The name of the locality.
     * @throws LocalityException when the locality is invalid.
     */
    constructor(name) {
        if (name) {
            this._name = name;
        }
        else {
            // invalid locality.
            const error = new locality_exception_1.LocalityException();
            throw error;
        }
    }
    /**
     * Compares the instance to the suspect to determine if they are equal.
     * @param suspect The suspect to compare.
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof Locality) {
            const otherLocality = suspect;
            isEqual = this.name() === otherLocality.name();
        }
        return isEqual;
    }
    /**
     * name()
     *
     * name() gets the locality name.
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
exports.Locality = Locality;
//# sourceMappingURL=locality.js.map