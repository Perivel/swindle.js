"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = void 0;
const luxon_1 = require("luxon");
const duration_exception_1 = require("../exceptions/duration.exception");
/**
 * Duration
 *
 * Duration represents a duration. A duration is a period in time, such as "1 day", "2 weeks", or "5 months".
 */
class Duration {
    /**
     * creates a Duration object.
     * @param an object specifying information about the Duration.
     * @throws DurationException when the Duration is invalid.
     */
    constructor({ years = 0, quarters = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0, miliseconds = 0 }) {
        this.luxonDuration = luxon_1.Duration.fromObject({
            years: years,
            quarters: quarters,
            months: months,
            weeks: weeks,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            milliseconds: miliseconds,
            conversionAccuracy: "longterm",
        });
        if (!this.luxonDuration.isValid) {
            // not valid.
            throw new duration_exception_1.DurationException(this.luxonDuration.invalidReason);
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
    static FromDateTimeDifference(a, b) {
        const luxA = luxon_1.DateTime.fromISO(a.toString());
        const luxB = luxon_1.DateTime.fromISO(b.toString());
        let duration = a.isAfter(b) ? luxA.diff(luxB) : luxB.diff(luxA);
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
    days() {
        return this.luxonDuration.days;
    }
    /**
     * equals()
     *
     * equals() compares the instance to the suspect, to determine if they are equal.
     * @param suspect the suspect to compare.
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof Duration) {
            const other = suspect;
            isEqual = this.luxonDuration.equals(other.luxonDuration);
        }
        return isEqual;
    }
    /**
     * hours()
     *
     * hours() gets the number of hours in the duration.
     */
    hours() {
        return this.luxonDuration.hours;
    }
    /**
     * inDays()
     *
     * inDays() converts the duration to days.
     */
    inDays() {
        return this.luxonDuration.as('days');
    }
    /**
     * inHours()
     *
     * inHours() converts the duration to hours.
     */
    inHours() {
        return this.luxonDuration.as('hours');
    }
    /**
     * inMiliseconds()
     *
     * converts the duration to miliseconds.
     */
    inMiliseconds() {
        return this.luxonDuration.toMillis();
    }
    /**
     * inMinutes()
     *
     * inMinutes() converts the duration to minutes.
     */
    inMinutes() {
        return this.luxonDuration.as('minutes');
    }
    /**
     * inMonths()
     *
     * inMonths() converts the duration to months.
     */
    inMonths() {
        return this.luxonDuration.as('months');
    }
    /**
     * inQuarters()
     *
     * inQuarters() converts the duration to quarters.
     */
    inQuarters() {
        return this.luxonDuration.as('quarters');
    }
    /**
     * inSeconds()
     *
     * inSeconds() converts a duration to a second.
     */
    inSeconds() {
        return this.luxonDuration.as('seconds');
    }
    /**
     * inWeeks()
     *
     * inWeeks() converts the duration to weeks.
     */
    inWeeks() {
        return this.luxonDuration.as('weeks');
    }
    /**
     * inYears()
     *
     * inYears() converts the duration to years.
     */
    inYears() {
        return this.luxonDuration.as('years');
    }
    /**
     * miliseconds()
     *
     * miliseconds() gets the miliseconds of the duration.
     */
    miliseconds() {
        return this.luxonDuration.milliseconds;
    }
    /**
     * minutes()
     *
     * minutes() gets the minutes of the duration.
     */
    minutes() {
        return this.luxonDuration.minutes;
    }
    /**
     * months()
     *
     * months() gets the months of the duration.
     */
    months() {
        return this.luxonDuration.months;
    }
    /**
     * quarters()
     *
     * quarters() gets the quarters in the duration.
     */
    quarters() {
        return this.luxonDuration.quarters;
    }
    /**
     * seconds()
     *
     * seconds() gets the seconds of the duration.
     */
    seconds() {
        return this.luxonDuration.seconds;
    }
    /**
     * weeks()
     *
     * weeks() gets the weeks.
     */
    weeks() {
        return this.luxonDuration.weeks;
    }
    /**
     * years()
     *
     * years() gets the years in the duration.
     */
    years() {
        return this.luxonDuration.years;
    }
    // ==========================
    // Overrides
    // ==========================
    toString() {
        return this.luxonDuration.toISO();
    }
}
exports.Duration = Duration;
//# sourceMappingURL=duration.js.map