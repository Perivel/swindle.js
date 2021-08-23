"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinates = void 0;
/**
 * Coordinates
 *
 * Coordinates represents a geographic longitude/latitude pair.
 */
class Coordinates {
    constructor(longitude, latitude) {
        this._long = longitude;
        this._lat = latitude;
    }
    /**
     * equals()
     *
     * equals() compares the suspect to the instance, to determine if they are equals.
     * @param suspect The suspect to compare.
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof Coordinates) {
            const other = suspect;
            isEqual = (this.longitude() === other.longitude()) && (this.latitude() === other.latitude());
        }
        return isEqual;
    }
    /**
     * latitude()
     *
     * latitude() gets the latitude.
     */
    latitude() {
        return this._lat;
    }
    /**
     * longitude()
     *
     * longitude() gets teh longitude.
     */
    longitude() {
        return this._long;
    }
    toString() {
        return `${this.latitude()}, ${this.longitude()}`;
    }
}
exports.Coordinates = Coordinates;
//# sourceMappingURL=coordinates.js.map