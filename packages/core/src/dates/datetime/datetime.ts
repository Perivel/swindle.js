import { DateTime as LuxonDateTime, Duration as LuxonDuration } from 'luxon';
import { DateTimeInterface } from "./datetime.interface";
import { Equatable } from "./../../common/common.module";
import { Timezone } from "./../../geography/geography.module";
import { DateException } from '../exceptions/date.exception';
import { Duration } from './../duration/duration';

/**
 * DateTime
 * 
 * DateTime represents a specific date and time.
 */

export class DateTime implements DateTimeInterface, Equatable {
    private date: LuxonDateTime;
    private tz: Timezone;

    /**
     * Creates a DateTime object.
     * @param value Date
     */

    constructor(year: number, month: number, date: number, hours: number = 0, minutes: number = 0, seconds: number = 0, ms: number = 0, timezone: Timezone = Timezone.UTC()) {
        this.date = LuxonDateTime.fromObject({
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
            throw new DateException();
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
    public static FromDate(dateVal: Date, timezone: Timezone): DateTime {
        const date = LuxonDateTime.fromJSDate(dateVal).toUTC();
        return new DateTime(date.year,
            date.month,
            date.day,
            date.hour,
            date.minute,
            date.second,
            date.millisecond,
            timezone
        );
    }

    /**
     * Now()
     * 
     * Creates a DateTime for the current UTC date and time.
     */

    public static Now(timezone: Timezone = Timezone.UTC()): DateTime {
        return DateTime.FromDate(LuxonDateTime.utc().toJSDate(), timezone);
    }

    /**
     * add()
     * 
     * add() adds the duration to the datetime.
     * @param duration the duration to add.
     */

    public add(duration: Duration): DateTime {
        return DateTime.FromDate(this.date.plus(LuxonDuration.fromObject({
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

    public day(): number {
        return this.date.day;
    }

    /**
     * isAfter()
     * 
     * isAfter() compares the Created instance to the suspect, to determine if the suspect is after the instance.
     * @param suspect The suspect to be compared.
     */

    public isAfter(suspect: any): boolean {
        let isAfter = false;

        if (suspect instanceof DateTime) {
            const other = suspect as DateTime;
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

    public isBefore(suspect: any): boolean {
        let isBefore = false;

        if (suspect instanceof DateTime) {
            const other = suspect as DateTime;
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

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof DateTime) {
            const other = suspect as DateTime;
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

    public month(): number {
        return this.date.month;
    }

    /**
     * subtract()
     * 
     * subtract() subtracts a duration form the date time.
     * @param duration the duratin to subtract.
     */

    public subtract(duration: Duration): DateTime {
        return DateTime.FromDate(this.date.minus(LuxonDuration.fromObject({
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

    public timezone(): Timezone {
        return this.tz;
    }

    public toString(): string {
        return this.isoString();
    }

    /**
     * toUtc()
     * 
     * toUtc() converts the timestamp to UTC time.
     */

    public toUtc(): DateTime {
        return DateTime.FromDate(this.value(), Timezone.UTC());
    }

    /**
     * toTimeaone()
     * 
     * toTimezone() converts the timestamp to the specified timezone.
     * @param timezone The timezone to convert to.
     */

    public toTimezone(timezone: Timezone): DateTime {
        return DateTime.FromDate(this.value(), timezone);
    }

    /**
     * isoString()
     * 
     * isoString() gets a UTC string for a DateTime.
     */

    public isoString(): string {
        return this.date.setZone(this.timezone().id()).toISO();
    }

    /**
     * value()
     * 
     * value() gets the value of the DateTime
     */

    public value(): Date {
        return this.date.setZone(this.timezone().id()).toJSDate();
    }

    /**
     * year()
     * 
     * year() gets the year portion of the DateTime.
     * 
     * @returns number
     */

    public year(): number {
        return this.date.year;
    }
}