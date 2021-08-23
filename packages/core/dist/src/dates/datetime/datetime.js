"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTime = void 0;
const luxon_1 = require("luxon");
const geography_module_1 = require("./../../geography/geography.module");
const date_exception_1 = require("../exceptions/date.exception");
/**
 * DateTime
 *
 * DateTime represents a specific date and time.
 */
class DateTime {
    /**
     * Creates a DateTime object.
     * @param value Date
     */
    constructor(year, month, date, hours = 0, minutes = 0, seconds = 0, ms = 0, timezone = geography_module_1.Timezone.UTC()) {
        this.date = luxon_1.DateTime.fromObject({
            year: year,
            month: month,
            day: date,
            hour: hours,
            minute: minutes,
            second: seconds,
            millisecond: ms,
            zone: 'utc'
        });
        if (!this.date.isValid) {
            throw new date_exception_1.DateException();
        }
        this.tz = timezone;
    }
    /**
     * FromDate()
     *
     * creates a Timestamp instance from a Date object.
     * @param dateVal The date to create a timestamp from
     * @throws DateException when the date is invalid.
     */
    static FromDate(dateVal, timezone) {
        const date = luxon_1.DateTime.fromJSDate(dateVal).toUTC();
        return new DateTime(date.year, date.month, date.day, date.hour, date.minute, date.second, date.millisecond, timezone);
    }
    /**
     * Now()
     *
     * Creates a DateTime for the current UTC date and time.
     */
    static Now(timezone = geography_module_1.Timezone.UTC()) {
        return DateTime.FromDate(luxon_1.DateTime.utc().toJSDate(), timezone);
    }
    /**
     * add()
     *
     * add() adds the duration to the datetime.
     * @param duration the duration to add.
     */
    add(duration) {
        return DateTime.FromDate(this.date.plus(luxon_1.Duration.fromObject({
            years: duration.years(),
            quarters: duration.quarters(),
            months: duration.months(),
            weeks: duration.weeks(),
            days: duration.days(),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds(),
            milliseconds: duration.miliseconds()
        })).toJSDate(), this.timezone());
    }
    /**
     * day()
     *
     * day() gets the day of the month of the DateTime.
     * @returns a number between 1 and 31
     */
    day() {
        return this.date.day;
    }
    /**
     * isAfter()
     *
     * isAfter() compares the Created instance to the suspect, to determine if the suspect is after the instance.
     * @param suspect The suspect to be compared.
     */
    isAfter(suspect) {
        let isAfter = false;
        if (suspect instanceof DateTime) {
            const other = suspect;
            isAfter = this.date > other.date;
        }
        return isAfter;
    }
    /**
     * isBefore()
     *
     * isBefore() compares the instance to the suspect, to determine if the instance is before the suspect.
     * @param suspect The suspect to be compared to.
     */
    isBefore(suspect) {
        let isBefore = false;
        if (suspect instanceof DateTime) {
            const other = suspect;
            isBefore = this.date < other.date;
        }
        return isBefore;
    }
    /**
     * equals()
     *
     * equals() compares the Created instance to a suspect, to determine if they are equal.
     * @param suspect The Created object to be compared.
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof DateTime) {
            const other = suspect;
            isEqual = this.date.equals(other.date);
        }
        return isEqual;
    }
    /**
     * month()
     *
     * month() gets the month part of the DateTime.
     * @returns A numeric value (Jan = 1, Dec = 12) representing the month of the year.
     */
    month() {
        return this.date.month;
    }
    /**
     * subtract()
     *
     * subtract() subtracts a duration form the date time.
     * @param duration the duratin to subtract.
     */
    subtract(duration) {
        return DateTime.FromDate(this.date.minus(luxon_1.Duration.fromObject({
            years: duration.years(),
            quarters: duration.quarters(),
            months: duration.months(),
            weeks: duration.weeks(),
            days: duration.days(),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds(),
            milliseconds: duration.miliseconds()
        })).toJSDate(), this.timezone());
    }
    /**
     * timezone()
     *
     * timezone() gets the timestamp timezone.
     */
    timezone() {
        return this.tz;
    }
    toString() {
        return this.isoString();
    }
    /**
     * toUtc()
     *
     * toUtc() converts the timestamp to UTC time.
     */
    toUtc() {
        return DateTime.FromDate(this.value(), geography_module_1.Timezone.UTC());
    }
    /**
     * toTimeaone()
     *
     * toTimezone() converts the timestamp to the specified timezone.
     * @param timezone The timezone to convert to.
     */
    toTimezone(timezone) {
        return DateTime.FromDate(this.value(), timezone);
    }
    /**
     * isoString()
     *
     * isoString() gets a UTC string for a DateTime.
     */
    isoString() {
        return this.date.setZone(this.timezone().id()).toISO();
    }
    /**
     * value()
     *
     * value() gets the value of the DateTime
     */
    value() {
        return this.date.setZone(this.timezone().id()).toJSDate();
    }
    /**
     * year()
     *
     * year() gets the year portion of the DateTime.
     *
     * @returns number
     */
    year() {
        return this.date.year;
    }
}
exports.DateTime = DateTime;
//# sourceMappingURL=datetime.js.map