import { DateTime } from './../datetime/datetime';
import { Equatable } from "../../common/common.module";
import { DurationInterface } from "./duration.interface";
import { DurationPeriod } from './duration-period.interface';
/**
 * Duration
 *
 * Duration represents a duration. A duration is a period in time, such as "1 day", "2 weeks", or "5 months".
 */
export declare class Duration implements DurationInterface, Equatable {
    private readonly luxonDuration;
    /**
     * creates a Duration object.
     * @param an object specifying information about the Duration.
     * @throws DurationException when the Duration is invalid.
     */
    constructor({ years, quarters, months, weeks, days, hours, minutes, seconds, miliseconds }: DurationPeriod);
    /**
     * FromDateTimeDifference()
     *
     * Creates a duration given the difference between the DateTime instances.
     * @param a the first date time
     * @param b the second date time
     * @returns a duration containing the difference between DateTimes a and b.
     */
    static FromDateTimeDifference(a: DateTime, b: DateTime): Duration;
    /**
     * days()
     *
     * gets the number of days in the duration.
     */
    days(): number;
    /**
     * equals()
     *
     * equals() compares the instance to the suspect, to determine if they are equal.
     * @param suspect the suspect to compare.
     */
    equals(suspect: any): boolean;
    /**
     * hours()
     *
     * hours() gets the number of hours in the duration.
     */
    hours(): number;
    /**
     * inDays()
     *
     * inDays() converts the duration to days.
     */
    inDays(): number;
    /**
     * inHours()
     *
     * inHours() converts the duration to hours.
     */
    inHours(): number;
    /**
     * inMiliseconds()
     *
     * converts the duration to miliseconds.
     */
    inMiliseconds(): number;
    /**
     * inMinutes()
     *
     * inMinutes() converts the duration to minutes.
     */
    inMinutes(): number;
    /**
     * inMonths()
     *
     * inMonths() converts the duration to months.
     */
    inMonths(): number;
    /**
     * inQuarters()
     *
     * inQuarters() converts the duration to quarters.
     */
    inQuarters(): number;
    /**
     * inSeconds()
     *
     * inSeconds() converts a duration to a second.
     */
    inSeconds(): number;
    /**
     * inWeeks()
     *
     * inWeeks() converts the duration to weeks.
     */
    inWeeks(): number;
    /**
     * inYears()
     *
     * inYears() converts the duration to years.
     */
    inYears(): number;
    /**
     * miliseconds()
     *
     * miliseconds() gets the miliseconds of the duration.
     */
    miliseconds(): number;
    /**
     * minutes()
     *
     * minutes() gets the minutes of the duration.
     */
    minutes(): number;
    /**
     * months()
     *
     * months() gets the months of the duration.
     */
    months(): number;
    /**
     * quarters()
     *
     * quarters() gets the quarters in the duration.
     */
    quarters(): number;
    /**
     * seconds()
     *
     * seconds() gets the seconds of the duration.
     */
    seconds(): number;
    /**
     * weeks()
     *
     * weeks() gets the weeks.
     */
    weeks(): number;
    /**
     * years()
     *
     * years() gets the years in the duration.
     */
    years(): number;
    toString(): string;
}
//# sourceMappingURL=duration.d.ts.map