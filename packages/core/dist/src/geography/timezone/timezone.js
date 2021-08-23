"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timezone = void 0;
const luxon_1 = require("luxon");
const timezone_exception_1 = require("./../exceptions/timezone.exception");
/**
 * Timezone
 *
 * Timezone represents a Timezone
 */
class Timezone {
    constructor(id, abbreviation, offset) {
        this._id = id;
        this._abbreviation = abbreviation;
        this._offset = offset;
    }
    /**
     * FromId()
     *
     * FromeId() creates a Timezone from an Id.
     * @param id The Id of the timezone.
     */
    static FromId(id) {
        if (!luxon_1.IANAZone.isValidZone(id)) {
            // invalid timezone.
            throw new timezone_exception_1.TimezoneException();
        }
        // timezone exists.
        const zone = luxon_1.IANAZone.create(id);
        const dt = luxon_1.DateTime.fromJSDate(new Date()).setZone(zone);
        return new Timezone(zone.name, dt.toFormat("ZZZZ"), dt.offset);
    }
    /**
     * UTC()
     *
     * UTC() sets the timezone to UTC.
     */
    static UTC() {
        const dt = luxon_1.DateTime.fromJSDate(new Date()).setZone('utc');
        return new Timezone(dt.zone.name, dt.toFormat('ZZZZ'), dt.offset);
    }
    /**
     * abbreviation()
     *
     * abbreviation() gets the timezone abbreviation()
     */
    abbreviation() {
        return this._abbreviation;
    }
    /**
     * equals()
     *
     * equals() compares the instnace to the suspect to determine if they are equal.
     * @param suspect the suspect to be compared.
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof Timezone) {
            const other = suspect;
            isEqual = (this.id() === other.id() &&
                this.abbreviation() === other.abbreviation() &&
                this.utcOffset() === other.utcOffset());
        }
        return isEqual;
    }
    /**
     * id()
     *
     * id() gets the Olson timezone id.
     */
    id() {
        return this._id;
    }
    /**
     * utcOffset()
     *
     * utcOffset() gets the UTC offset of the timezone.
     */
    utcOffset() {
        return this._offset;
    }
    toString() {
        return this.id();
    }
}
exports.Timezone = Timezone;
//# sourceMappingURL=timezone.js.map