import { DateTimeInterface } from "./datetime.interface";
import { Equatable } from "./../../common/common.module";
import { Timezone } from "./../../geography/geography.module";
import { Duration } from './../duration/duration';
/**
 * DateTime
 *
 * DateTime represents a specific date and time.
 */
export declare class DateTime implements DateTimeInterface, Equatable {
    private date;
    private tz;
    /**
     * Creates a DateTime object.
     * @param value Date
     */
    constructor(year: number, month: number, date: number, hours?: number, minutes?: number, seconds?: number, ms?: number, timezone?: Timezone);
    /**
     * FromDate()
     *
     * creates a Timestamp instance from a Date object.
     * @param dateVal The date to create a timestamp from
     * @throws DateException when the date is invalid.
     */
    static FromDate(dateVal: Date, timezone: Timezone): DateTime;
    /**
     * Local()
     *
     * creates a DateTime instance where the timezone is set to the local timezone.
     * @returns A DateTime object where the timezone is set to the local timezone.
     */
    static Local(): DateTime;
    /**
     * Now()
     *
     * Creates a DateTime for the current UTC date and time.
     */
    static Now(timezone?: Timezone): DateTime;
    /**
     * add()
     *
     * add() adds the duration to the datetime.
     * @param duration the duration to add.
     */
    add(duration: Duration): DateTime;
    /**
     * day()
     *
     * day() gets the day of the month of the DateTime.
     * @returns a number between 1 and 31
     */
    day(): number;
    /**
     * hour()
     *
     * gets the hour.
     * @note hours are zero-based (0-23)
     */
    hour(): number;
    /**
     * isAfter()
     *
     * isAfter() compares the Created instance to the suspect, to determine if the suspect is after the instance.
     * @param suspect The suspect to be compared.
     */
    isAfter(suspect: any): boolean;
    /**
     * isBefore()
     *
     * isBefore() compares the instance to the suspect, to determine if the instance is before the suspect.
     * @param suspect The suspect to be compared to.
     */
    isBefore(suspect: any): boolean;
    /**
     * equals()
     *
     * equals() compares the Created instance to a suspect, to determine if they are equal.
     * @param suspect The Created object to be compared.
     */
    equals(suspect: any): boolean;
    /**
     * milisecond()
     *
     * gets the milisecond (0-999)
     */
    milisecond(): number;
    /**
     * minute()
     *
     * gets the minute.
     * @note minutes are zero-based (0-59)
     */
    minute(): number;
    /**
     * month()
     *
     * month() gets the month part of the DateTime.
     * @returns A numeric value (Jan = 1, Dec = 12) representing the month of the year.
     */
    month(): number;
    /**
     * second()
     *
     * gets the second
     * @note seconds are zero-based (0-59)
     */
    second(): number;
    /**
     * subtract()
     *
     * subtract() subtracts a duration form the date time.
     * @param duration the duratin to subtract.
     */
    subtract(duration: Duration): DateTime;
    /**
     * timezone()
     *
     * timezone() gets the timestamp timezone.
     */
    timezone(): Timezone;
    toString(): string;
    /**
     * toUtc()
     *
     * toUtc() converts the timestamp to UTC time.
     */
    toUtc(): DateTime;
    /**
     * toTimeaone()
     *
     * toTimezone() converts the timestamp to the specified timezone.
     * @param timezone The timezone to convert to.
     */
    toTimezone(timezone: Timezone): DateTime;
    /**
     * isoString()
     *
     * isoString() gets a UTC string for a DateTime.
     */
    isoString(): string;
    /**
     * value()
     *
     * value() gets the value of the DateTime
     */
    value(): Date;
    /**
     * year()
     *
     * year() gets the year portion of the DateTime.
     *
     * @returns number
     */
    year(): number;
}
//# sourceMappingURL=datetime.d.ts.map