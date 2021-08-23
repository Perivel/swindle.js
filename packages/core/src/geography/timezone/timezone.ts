import { IANAZone, DateTime } from 'luxon';
import { TimezoneInterface } from "./timezone.interface";
import { Equatable } from "./../../common/common.module";
import { TimezoneException } from "./../exceptions/timezone.exception";

/**
 * Timezone
 * 
 * Timezone represents a Timezone
 */

export class Timezone implements TimezoneInterface, Equatable {
    private readonly _id: string;
    private readonly _offset: number;
    private readonly _abbreviation: string;

    constructor(
        id: string,
        abbreviation: string,
        offset: number
    ) {
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

    public static FromId(id: string): Timezone {
        if (!IANAZone.isValidZone(id)) {
            // invalid timezone.
            throw new TimezoneException();
        }

        // timezone exists.
        const zone = IANAZone.create(id);
        const dt = DateTime.fromJSDate(new Date()).setZone(zone);
        return new Timezone(zone.name, dt.toFormat("ZZZZ"), dt.offset);
    }

    /**
     * UTC()
     * 
     * UTC() sets the timezone to UTC.
     */

    public static UTC(): Timezone {
        const dt = DateTime.fromJSDate(new Date()).setZone('utc');
        return new Timezone(dt.zone.name, dt.toFormat('ZZZZ'), dt.offset);
    }

    /**
     * abbreviation()
     * 
     * abbreviation() gets the timezone abbreviation()
     */

    public abbreviation(): string {
        return this._abbreviation;
    }


    /**
     * equals()
     * 
     * equals() compares the instnace to the suspect to determine if they are equal.
     * @param suspect the suspect to be compared.
     */

    public equals(suspect: any): boolean {

        let isEqual = false;

        if (suspect instanceof Timezone) {
            const other = suspect as Timezone;
            isEqual = (
                this.id() === other.id() &&
                this.abbreviation() === other.abbreviation() &&
                this.utcOffset() === other.utcOffset()
            );
        }

        return isEqual;
    }

    /**
     * id()
     * 
     * id() gets the Olson timezone id.
     */

    public id(): string {
        return this._id;
    }

    /**
     * utcOffset()
     * 
     * utcOffset() gets the UTC offset of the timezone.
     */

    public utcOffset(): number {
        return this._offset;
    }

    public toString(): string {
        return this.id();
    }
}