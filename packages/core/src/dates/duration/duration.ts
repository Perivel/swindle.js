import { DateTime as LuxonDateTime, Duration as LuxonDuration } from "luxon";
import { DateTime } from './../datetime/datetime';
import { Equatable } from "../../common/common.module";
import { DurationException } from "../exceptions/duration.exception";
import { DurationInterface } from "./duration.interface";
import { DurationPeriod } from './duration-period.interface';

/**
 * Duration
 *
 * Duration represents a duration. A duration is a period in time, such as "1 day", "2 weeks", or "5 months".
 */

export class Duration implements DurationInterface, Equatable {

    private readonly luxonDuration: LuxonDuration;

    /**
     * creates a Duration object.
     * @param an object specifying information about the Duration.
     * @throws DurationException when the Duration is invalid.
     */

    constructor({years = 0, quarters = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0, miliseconds = 0}: DurationPeriod) {
        this.luxonDuration = LuxonDuration.fromObject({
            years,
            quarters,
            months,
            weeks,
            days,
            hours,
            minutes,
            seconds,
            milliseconds: miliseconds,
            conversionAccuracy: "longterm",
        });

        if (!this.luxonDuration.isValid) {
            // not valid.
            throw new DurationException(this.luxonDuration.invalidReason!);
        }
    }

    /**
     * FromDateTimeDifference()
     *
     * Creates a duration given the difference between the DateTime instances.
     * @param a the first date time
     * @param b the second date time
     * @returns a duration containing the difference between DateTimes a and b.
     */

    public static FromDateTimeDifference(a: DateTime, b: DateTime): Duration {
        const luxA = LuxonDateTime.fromISO(a.toString());
        const luxB = LuxonDateTime.fromISO(b.toString());
        const duration = a.isAfter(b) ? luxA.diff(luxB) : luxB.diff(luxA);
        return new Duration({
            years: duration.years,
            quarters: duration.quarters,
            months: duration.months,
            weeks: duration.weeks,
            days: duration.days,
            hours: duration.hours,
            minutes: duration.minutes,
            seconds: duration.seconds,
            miliseconds: duration.milliseconds,
        });
    }

    /**
     * days()
     *
     * gets the number of days in the duration.
     */

    public days(): number {
        return this.luxonDuration.days;
    }

    /**
     * equals()
     *
     * equals() compares the instance to the suspect, to determine if they are equal.
     * @param suspect the suspect to compare.
     */

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof Duration) {
            const other = suspect as Duration;
            isEqual = this.luxonDuration.equals(other.luxonDuration);
        }

        return isEqual;
    }

    /**
     * hours()
     *
     * hours() gets the number of hours in the duration.
     */

    public hours(): number {
        return this.luxonDuration.hours;
    }

    /**
     * inDays()
     *
     * inDays() converts the duration to days.
     */

    public inDays(): number {
        return this.luxonDuration.as('days');
    }

    /**
     * inHours()
     *
     * inHours() converts the duration to hours.
     */

    public inHours(): number {
        return this.luxonDuration.as('hours');
    }

    /**
     * inMiliseconds()
     *
     * converts the duration to miliseconds.
     */

    public inMiliseconds(): number {
        return this.luxonDuration.toMillis();
    }

    /**
     * inMinutes()
     *
     * inMinutes() converts the duration to minutes.
     */

    public inMinutes(): number {
        return this.luxonDuration.as('minutes');
    }

    /**
     * inMonths()
     *
     * inMonths() converts the duration to months.
     */

    public inMonths(): number {
        return this.luxonDuration.as('months');
    }

    /**
     * inQuarters()
     *
     * inQuarters() converts the duration to quarters.
     */

    public inQuarters(): number {
        return this.luxonDuration.as('quarters');
    }

    /**
     * inSeconds()
     *
     * inSeconds() converts a duration to a second.
     */

    public inSeconds(): number {
        return this.luxonDuration.as('seconds');
    }

    /**
     * inWeeks()
     *
     * inWeeks() converts the duration to weeks.
     */

    public inWeeks(): number {
        return this.luxonDuration.as('weeks');
    }

    /**
     * inYears()
     *
     * inYears() converts the duration to years.
     */

    public inYears(): number {
        return this.luxonDuration.as('years');
    }

    /**
     * miliseconds()
     *
     * miliseconds() gets the miliseconds of the duration.
     */

    public miliseconds(): number {
        return this.luxonDuration.milliseconds;
    }

    /**
     * minutes()
     *
     * minutes() gets the minutes of the duration.
     */

    public minutes(): number {
        return this.luxonDuration.minutes;
    }

    /**
     * months()
     *
     * months() gets the months of the duration.
     */

    public months(): number {
        return this.luxonDuration.months;
    }

    /**
     * quarters()
     *
     * quarters() gets the quarters in the duration.
     */

    public quarters(): number {
        return this.luxonDuration.quarters;
    }

    /**
     * seconds()
     *
     * seconds() gets the seconds of the duration.
     */

    public seconds(): number {
        return this.luxonDuration.seconds;
    }

    /**
     * weeks()
     *
     * weeks() gets the weeks.
     */

    public weeks(): number {
        return this.luxonDuration.weeks;
    }

    /**
     * years()
     *
     * years() gets the years in the duration.
     */

    public years(): number {
        return this.luxonDuration.years;
    }

    // ==========================
    // Overrides
    // ==========================

    public toString(): string {
        return this.luxonDuration.toISO();
    }
}