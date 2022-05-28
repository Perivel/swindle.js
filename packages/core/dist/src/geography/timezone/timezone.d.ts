import { TimezoneInterface } from "./timezone.interface";
import { Equatable } from "./../../common/common.module";
/**
 * Timezone
 *
 * Timezone represents a Timezone
 */
export declare class Timezone implements TimezoneInterface, Equatable {
    private readonly _id;
    private readonly _offset;
    private readonly _abbreviation;
    constructor(id: string, abbreviation: string, offset: number);
    /**
     * FromId()
     *
     * FromeId() creates a Timezone from an Id.
     * @param id The Id of the timezone.
     */
    static FromId(id: string): Timezone;
    /**
     * Local()
     *
     * Creates a Timezone instance representing the local timezone (based on the machine)
     * @returns A Timezone instance representing local time.
     */
    static Local(): Timezone;
    /**
     * UTC()
     *
     * UTC() sets the timezone to UTC.
     */
    static UTC(): Timezone;
    /**
     * abbreviation()
     *
     * abbreviation() gets the timezone abbreviation()
     */
    abbreviation(): string;
    /**
     * equals()
     *
     * equals() compares the instnace to the suspect to determine if they are equal.
     * @param suspect the suspect to be compared.
     */
    equals(suspect: any): boolean;
    /**
     * id()
     *
     * id() gets the Olson timezone id.
     */
    id(): string;
    /**
     * utcOffset()
     *
     * utcOffset() gets the UTC offset of the timezone.
     */
    utcOffset(): number;
    toString(): string;
}
//# sourceMappingURL=timezone.d.ts.map