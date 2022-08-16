/// <reference types="node" />
/**
 * Equaatable
 *
 * THe Equatable Interface determines equality.
 */
interface Equatable {
    equals(suspect: any): boolean;
}
/**
 * Serializable
 *
 * Serializable indicates that an object can be serialized.
 */
interface Serializable {
    /**
     * serialize()
     *
     * serialize() serializes the object.
     */
    serialize(): string;
}
/**
 * TraverseFn
 *
 * A function to be invoked on each traversible value.
 */
type TraverseFn<T> = (current: T, next: T | null, previous: T | null) => void;
/**
 * The Traversable Interface.
 *
 * The Traversable interface indicates an object can be traversed.
 */
interface Traversable<T> {
    /**
     * traverse()
     *
     * traverses every value in the object, invoking the predicate on each.
     * @param predicate a predicate function to be invoked on every value.
     */
    traverse(predicate: TraverseFn<T>): void;
}
/**
 * BaseException
 *
 * DomainException represents a generic domain exception.
 */
declare class BaseException extends Error {
    constructor(message?: string);
}
/**
 * InvlaidArguentException
 *
 * InvalidArgumentException indicates an argument is invalid.
 */
declare class InvalidArgumentException extends BaseException {
    constructor(message?: string);
}
/**
 * MethodUndefinedException
 *
 * MethodUndefinedException is an error indicating that a method
 * that was called is undefined.
 */
declare class MethodUndefinedException extends BaseException {
    constructor(message?: string);
}
declare class OutOfBoundsException extends InvalidArgumentException {
    constructor(message?: string);
}
/**
 * NetworkException
 *
 * NetworkException indicates a network exception has occured.
 */
declare class NetworkException extends BaseException {
    constructor(message?: string);
}
/**
 * Comparator
 *
 * A type indicating a comparator function. The comparator function takes two arguments, a and b.
 * The comparator function returns a negative number if a < b, 0 if a = b, and a positive number if a > b.
 */
type Comparator<T> = (a: T, b: T) => number;
/**
 * Type
 *
 * A utility for designating a type. Types are just Constructor Signitures.
 */
type Type<T> = {
    new (...args: any[]): T;
};
/**
 * AsyncFn
 *
 * An asynchronous function type.
 */
type AsyncFn<T> = (...args: any) => Promise<T>;
/**
 * SyncFn
 *
 * A synchronous function type.
 */
type SyncFn<T> = (...args: any) => T;
/**
 * VlidAsyncFn
 *
 * An asynchonous Void Function.
 */
type VoidAsyncFn = () => Promise<void>;
/**
 * VoidSyncFn
 *
 * A synchonus void function type.
 */
type VoidSyncFn = () => void;
/**
 * DurationInterface
 *
 * DurationInterface
 */
interface DurationInterface {
    /**
     * days()
     *
     * gets the number of days in the duration.
     */
    days(): number;
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
}
interface TimezoneInterface {
    /**
     * TimezoneInterface
     */
    abbreviation(): string;
    /**
     * id()
     *
     * id() gets the timezone id.
     */
    id(): string;
    /**
     * utcOffset()
     *
     * utcOffset() gets the UTC offset.
     */
    utcOffset(): number;
}
/**
 * Timezone
 *
 * Timezone represents a Timezone
 */
declare class Timezone implements TimezoneInterface, Equatable {
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
/**
 * TimezoneException
 *
 * TimezoneException represents a generic timezone error.
 */
declare class TimezoneException extends BaseException {
    constructor(message?: string);
}
/**
 * CoordinatesInterface
 *
 * Specifies the requirements to represent geographic coordinates.
 */
interface CoordinatesInterface {
    /**
     * latitude()
     *
     * latitude() gets the latitude.
     */
    latitude(): number;
    /**
     * longitude()
     *
     * longitude() gets teh longitude.
     */
    longitude(): number;
}
/**
 * Coordinates
 *
 * Coordinates represents a geographic longitude/latitude pair.
 */
declare class Coordinates implements CoordinatesInterface, Equatable {
    private readonly _long;
    private readonly _lat;
    constructor(longitude: number, latitude: number);
    /**
     * equals()
     *
     * equals() compares the suspect to the instance, to determine if they are equals.
     * @param suspect The suspect to compare.
     */
    equals(suspect: any): boolean;
    /**
     * latitude()
     *
     * latitude() gets the latitude.
     */
    latitude(): number;
    /**
     * longitude()
     *
     * longitude() gets teh longitude.
     */
    longitude(): number;
    toString(): string;
}
declare class CountryException extends BaseException {
    constructor(message?: string);
}
/**
 * CountryInterface
 *
 * CountryInterface specifies functionalities for a country.
 */
interface CountryInterface {
    /**
     * code()
     *
     * code() gets the country code.
     */
    code(): string;
    /**
     * name()
     *
     * name() gets the country's common name.
     */
    name(): string;
}
/**
 * Country
 *
 * Country represents a Country in the world.
 */
declare class Country implements CountryInterface, Equatable {
    private readonly _code;
    readonly _name: string;
    /**
     * Creates a Country instance
     * @param code The country code.
     * @throws CountryException when the country information is invalid.
     */
    constructor(code: string);
    /**
     * code()
     *
     * code() gets the country code.
     */
    code(): string;
    /**
     * name()
     *
     * name() gets the country's common name.
     */
    name(): string;
    /**
     * equals()
     *
     * equals() compares the Country to the suspect to determine if they are equal.
     * @param suspect The suspect to be compared.
     */
    equals(suspect: any): boolean;
    toString(): string;
}
/**
 * StreetInterface
 *
 * StreetInterface outlines the requirements for a street
 */
interface StreetInterface {
    /**
     * line1()
     *
     * line1() gets the line1 of a street.
     */
    line1(): string;
    /**
     * line2()
     *
     * line2() gets the line2 of a street.
     */
    line2(): string;
}
/**
 * Street
 *
 * Street represents an address street.
 */
declare class Street implements StreetInterface, Serializable, Equatable {
    private readonly _line1;
    private readonly _line2;
    /**
     * Creates a Street Instance.
     * @param line1 String
     * @param line2 Strirg
     * @throws StreetException when the street in invalid.
     */
    constructor(line1: string, line2?: string);
    /**
     * Determines if two streets are equal.
     * @param suspect The value being compared.
     */
    equals(suspect: any): boolean;
    /**
     * line1()
     *
     * line1() gets the line1 value of the street address.
     */
    line1(): string;
    /**
     * line2()
     *
     * line2() gets the line2 value of the street.
     */
    line2(): string;
    serialize(): string;
    toString(): string;
}
declare class StreetAddressException extends InvalidArgumentException {
    constructor(message?: string);
}
declare class StreetException extends StreetAddressException {
    constructor(message?: string);
}
/**
 * LocalityInterface
 *
 * LocalityInterface represents the locality interface.
 */
interface LocalityInterface {
    /**
     * name()
     *
     * name() gets the name of the locality.
     */
    name(): string;
}
/**
 * Locality
 *
 * Locality represents an Address Locality, or a City or Town.
 */
declare class Locality implements LocalityInterface, Serializable, Equatable {
    private readonly _name;
    /**
     * Creates a Locality instance.
     * @param name The name of the locality.
     * @throws LocalityException when the locality is invalid.
     */
    constructor(name: string);
    /**
     * Compares the instance to the suspect to determine if they are equal.
     * @param suspect The suspect to compare.
     */
    equals(suspect: any): boolean;
    /**
     * name()
     *
     * name() gets the locality name.
     */
    name(): string;
    serialize(): string;
    toString(): string;
}
declare class LocalityException extends StreetAddressException {
    constructor(message?: string);
}
/**
 * RegionInterface
 *
 * RegionInterface defines the interface for an address region.
 */
interface RegionInterface {
    /**
     * name()
     *
     * name() gets the region name.
     */
    name(): string;
}
/**
 * Region
 *
 * Region represents an Address Region (a state or province).
 */
declare class Region implements RegionInterface, Serializable, Equatable {
    private readonly _name;
    /**
     * Creates a Region instnace
     * @param name The nsme of the region
     * @throws RegionException when the region is invalid.
     */
    constructor(name: string);
    /**
     * equals()
     *
     * equals() compares the suspect and the instance to determine if they are equal.
     * @param suspect the suspect to be compared.
     */
    equals(suspect: any): boolean;
    /**
     * name()
     *
     * name() gets the name of the region.
     */
    name(): string;
    serialize(): string;
    toString(): string;
}
declare class RegionException extends StreetAddressException {
    constructor(message?: string);
}
/**
 * PostalCodeInterface
 *
 * PostalCodeInterface specifies the functiions for a postal code.
 */
interface PostalCodeInterface {
    /**
     * value()
     *
     * value() gets the value.
     */
    value(): string;
}
/**
 * PostalCode
 *
 * PostalCode represents an address Postal Code (or Zip Code)
 */
declare class PostalCode implements PostalCodeInterface, Serializable, Equatable {
    private readonly _value;
    /**
     * Creates a Postal Code instance.
     * @param value string
     * @throws InvalidPostalCodeException when the postal code is invalid.
     */
    constructor(value: string);
    /**
     * equals()
     *
     * equals() compares the PostalCode object to the suspect to determine if they are equal.
     * @param suspect The value being compared.
     */
    equals(suspect: any): boolean;
    serialize(): string;
    toString(): string;
    /**
     * value()
     *
     * value() gets the postal code value.
     */
    value(): string;
}
declare class PostalCodeException extends StreetAddressException {
    constructor(message?: string);
}
/**
 * StreetAddressInterface
 *
 * StreetAddressInterface specifies the functionality of a street address.
 */
interface StreetAddressInterface {
    /**
     * country()
     *
     * country() gets the address country.
     */
    country(): CountryInterface;
    /**
     * locality()
     *
     * locality() gets the address locality.
     */
    locality(): LocalityInterface;
    /**
     * postalCode()
     *
     * postalCode() gets the address postal code.
     */
    postalCode(): PostalCodeInterface;
    /**
     * region()
     *
     * region gets the address region.
     */
    region(): RegionInterface;
    /**
     * street()
     *
     * street() gets the street.
     */
    street(): StreetInterface;
}
/**
 * StreetAddress
 *
 * StreetAddress represents a a physical street address.
 */
declare class StreetAddress implements StreetAddressInterface, Equatable, Serializable {
    private readonly _street;
    private readonly _locality;
    private readonly _region;
    private readonly _postal;
    private readonly _country;
    /**
     * Creates a new StreetAddress Instance.
     * @param street Street
     * @param locality Locality
     * @param region Region
     * @param postal_code PostalCode
     * @param country Country
     *
     * @throws StreetException when the street is invalid.
     * @throws LocalityException when the locality is invalid.
     * @throws RegionException when the the region is invalid.
     * @throws PostalCodeException when the postal code is invalid.
     * @throws CountryException when the country is invalid.
     *
     */
    constructor(street: Street, locality: Locality, region: Region, postal_code: PostalCode, country: Country);
    /**
     * FromPrimitives()
     *
     * creates a street address based on primitive values.
     * @param street_line_1 the street address line 1 value
     * @param street_line_2 street address line 2 value (optional)
     * @param locality_name the city or town name
     * @param region_name the state or province name
     * @param postal_code the zip code or postal code.
     * @param country_code the country code.
     * @returns a StreetAddress instance.
     *
     * @throws StreetException when the street is invalid.
     * @throws LocalityException when the
     */
    static FromPrimitives(street_line_1: string, street_line_2: string | undefined, locality_name: string, region_name: string, postal_code: string, country_code: string): StreetAddress;
    /**
     * country()
     *
     * country() gets the address country.
     */
    country(): Country;
    /**
     * equals()
     *
     * equals() compares the StreetAddress instance to the suspect to determine if they are equal.
     * @param suspect the suspect being compared.
     */
    equals(suspect: any): boolean;
    /**
     * locality()
     *
     * locality() gets the address locality.
     */
    locality(): Locality;
    /**
     * postalCode()
     *
     * postalCode() gets the address postal code.
     */
    postalCode(): PostalCode;
    /**
     * region()
     *
     * region() gets the address region.
     */
    region(): Region;
    serialize(): string;
    /**
     * street()
     *
     * street() gets the address street.
     */
    street(): Street;
    toString(): string;
}
interface DateTimeInterface {
    /**
     * add()
     *
     * add() adds the duration to the datetime.
     * @param duration the duration to add.
     */
    add(duration: DurationInterface): DateTimeInterface;
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
    subtract(duration: DurationInterface): DateTimeInterface;
    /**
     * timezone()
     *
     * timezone() gets the timezone of the DateTime.
     */
    timezone(): Timezone;
    /**
     * toTimezone()
     *
     * toTimezone() converts a DateTime to the specified Timezone.
     * @param timezone
     */
    toTimezone(timezone: Timezone): DateTimeInterface;
    /**
     * toUtc()
     *
     * toUtc() converts a DateTime to UTC.
     */
    toUtc(): DateTimeInterface;
    /**
     * isoString()
     *
     * isoString() gets a UTC string for a DateTime.
     */
    isoString(): string;
    /**
     * value()
     *
     * value() gets the value of the DateTime.
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
interface DurationPeriod {
    miliseconds?: number;
    seconds?: number;
    minutes?: number;
    hours?: number;
    days?: number;
    weeks?: number;
    months?: number;
    quarters?: number;
    years?: number;
}
/**
 * Duration
 *
 * Duration represents a duration. A duration is a period in time, such as "1 day", "2 weeks", or "5 months".
 */
declare class Duration implements DurationInterface, Equatable {
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
    static FromDateTimeDifference(a: DateTimeInterface, b: DateTimeInterface): Duration;
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
    // ==========================
    // Overrides
    // ==========================
    toString(): string;
}
/**
 * DateTime
 *
 * DateTime represents a specific date and time.
 */
declare class DateTime implements DateTimeInterface, Equatable {
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
/**
 * DateException
 *
 * DateException represents a generic date error.
 */
declare class DateException extends BaseException {
    constructor(message?: string);
}
/**
 * DurationException
 *
 * DurationException represents a generic duration error.
 */
declare class DurationException extends BaseException {
    constructor(message?: string);
}
/**
 * BaseFormatterInterface
 *
 * The interface for the base formatter.
 */
interface BaseFormatterInterface {
}
/**
 * The BaseFormatter class
 *
 * The base formatter class is the base class for Formatter classes.
 */
declare abstract class BaseFormatter implements BaseFormatterInterface {
    constructor();
}
interface StringFormatterInterface extends BaseFormatterInterface {
    /**
     * camelCase()
     *
     * converts an input into camel case.
     *
     * if the input is not a string type, camelCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in camel case format.
     */
    camelCase(input: any): string;
    /**
     * capitalCase()
     *
     * converts an input into capital case.
     *
     * if the input is not a string type, capitalCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in capital case format.
     */
    capitalCase(input: any): string;
    /**
     * constantCase()
     *
     * converts an input into constant case.
     *
     * if the input is not a string type, constantCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in camel constant format.
     */
    constantCase(input: any): string;
    /**
     * dotCase()
     *
     * converts an input into dot case.
     *
     * if the input is not a string type, dotCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in dot case format.
     */
    dotCase(input: any): string;
    /**
     * headerCase()
     *
     * converts an input into header case.
     *
     * if the input is not a string type, headerCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in header case format.
     */
    headerCase(input: any): string;
    /**
     * noCase()
     *
     * converts an input into no case.
     *
     * if the input is not a string type, noCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in no case format.
     */
    noCase(input: any): string;
    /**
     * paramCase()
     *
     * converts an input into param case.
     *
     * if the input is not a string type, paramCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in param case format.
     */
    paramCase(input: any): string;
    /**
     * pascalCase()
     *
     * converts an input into pascal case.
     *
     * if the input is not a string type, pascalCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in pascal case format.
     */
    pascalCase(input: any): string;
    /**
     * pathCase()
     *
     * converts an input into path case.
     *
     * if the input is not a string type, pathCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in path case format.
     */
    pathCase(input: any): string;
    /**
     * snakeCase()
     *
     * converts an input into snake case.
     *
     * if the input is not a string type, snakeCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in snake case format.
     */
    snakeCase(input: any): string;
}
/**
 * StringFormatter
 *
 * A utility class to format strings.
 */
declare class StringFormatter extends BaseFormatter implements StringFormatterInterface {
    constructor();
    /**
     * camelCase()
     *
     * converts an input into camel case.
     *
     * if the input is not a string type, camelCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in camel case format.
     */
    camelCase(input: any): string;
    /**
     * capitalCase()
     *
     * converts an input into capital case.
     *
     * if the input is not a string type, capitalCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in capital case format.
     */
    capitalCase(input: any): string;
    /**
     * constantCase()
     *
     * converts an input into constant case.
     *
     * if the input is not a string type, constantCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in camel constant format.
     */
    constantCase(input: any): string;
    /**
     * dotCase()
     *
     * converts an input into dot case.
     *
     * if the input is not a string type, dotCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in dot case format.
     */
    dotCase(input: any): string;
    /**
     * headerCase()
     *
     * converts an input into header case.
     *
     * if the input is not a string type, headerCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in header case format.
     */
    headerCase(input: any): string;
    /**
     * noCase()
     *
     * converts an input into no case.
     *
     * if the input is not a string type, noCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in no case format.
     */
    noCase(input: any): string;
    /**
     * paramCase()
     *
     * converts an input into param case.
     *
     * if the input is not a string type, paramCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in param case format.
     */
    paramCase(input: any): string;
    /**
     * pascalCase()
     *
     * converts an input into pascal case.
     *
     * if the input is not a string type, pascalCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in pascal case format.
     */
    pascalCase(input: any): string;
    /**
     * pathCase()
     *
     * converts an input into path case.
     *
     * if the input is not a string type, pathCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in path case format.
     */
    pathCase(input: any): string;
    /**
     * snakeCase()
     *
     * converts an input into snake case.
     *
     * if the input is not a string type, snakeCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in snake case format.
     */
    snakeCase(input: any): string;
    // =============================
    // Helpers
    // =============================
    /**
     * castToString()
     *
     * casts the input to a string
     * @param input the input to cast.
     */
    private castToString;
}
/**
 * IdentifierInterface
 *
 * Specifies the requirements for a generic identifier.
 */
interface IddentifierInterface {
    /**
     * id()
     *
     * value() gets the value of the ID.
     */
    id(): any;
}
/**
 * Id
 *
 * Id represents a generic ID.
 */
declare abstract class Id implements IddentifierInterface, Equatable {
    private readonly _val;
    /**
     * Creates a new Id instance.
     * @param value The value of the id.
     * @throws IdException when the value is invalid.
     */
    constructor(value: any);
    /**
     * equals()
     *
     * equals() compares the suspect to the intance, to determine if they are equal.
     * @param suspect The suspect to compare.
     */
    equals(suspect: any): boolean;
    /**
     * id()
     *
     * id() gets the value of the ID.
     */
    id(): any;
    toString(): string;
}
/**
 * UUIDInterface
 *
 * UUIDInterface specifies the requirements for a UUID.
 */
interface UUIDInterface extends IddentifierInterface {
    /**
     * version()
     *
     * gets teh version of the UUID.
     */
    version(): number;
}
/**
 * UUID
 *
 * UUID represents a UUID.
 */
declare class UUID extends Id implements UUIDInterface {
    /**
     * Creates a UUID instance.
     * @param value The value of the UUID.
     * @throws UUIDException if the value is invalid.
     */
    constructor(value: string);
    /**
     * NIL()
     *
     * Creates the NIL UUID.
     * @returns a nil UUID (all zeros)
     */
    static NIL(): UUID;
    /**
     * V1()
     *
     * Generates a Version 1 UUID (Timestamp).
     * @returns A version 1 UUID.
     */
    static V1(): UUID;
    /**
     * V3()
     *
     * Creates a Version 3 UUID (namespace with MD5).
     * @param name the name
     * @param namespace the namespace
     * @returns a Version 3 UUID.
     */
    static V3(name: string, namespace: string): UUID;
    /**
     * V4()
     *
     * V4() generates a V4 UUID (random)
     * @returns a Version 4 UUID.
     */
    static V4(): UUID;
    /**
     * V5()
     *
     * Creates a Version 5 UUID (namespace with SHA-1) UUID.
     * @param name the name
     * @param namespace the namespace
     * @returns a Version 5 UUID.
     */
    static V5(name: string, namespace: string): UUID;
    /**
     * equals()
     *
     * equals() compares the suspect to the instance, to determine if they are equal.
     * @param suspect The suspect to be compared.
     */
    equals(suspect: any): boolean;
    /**
     * id()
     *
     * id() gets the value of the id.
     */
    id(): string;
    /**
     * version()
     *
     * gets teh version of the UUID.
     */
    version(): number;
}
/**
 * IdException
 *
 * Indicates an error with the ID.
 */
declare class IdException extends InvalidArgumentException {
    constructor(message?: string);
}
/**
 * UUIDException
 *
 * Indicates an error with the UUID.
 */
declare class UUIDException extends IdException {
    constructor(message?: string);
}
/**
 * EmailInterface
 *
 * EmailInterface defines the interface for an email address.
 */
interface EmailInterface {
    /**
     * domainName()
     *
     * domainName() gets the domain of the email address.
     */
    domainName(): string;
    /**
     * email()
     *
     * email() gets the email value.
     */
    email(): string;
    /**
     * username()
     *
     * username() gets the username of the email address.
     */
    username(): string;
}
/**
 * EmailAddress
 *
 * EmailAddress provides functionality for handling email addresses.
 */
declare class EmailAddress implements EmailInterface, Equatable {
    private readonly _value;
    private readonly _domain;
    private readonly _username;
    /**
     * Creates an instance of an email address.
     * @param value The value of the email address.
     * @throws EmailAddressException when the email address value is invalid.
     */
    constructor(value: string);
    /**
     * domainName()
     *
     * domainName() gets the domain of the email address.
     */
    domainName(): string;
    /**
     * email()
     *
     * email() gets the value of the email address.
     */
    email(): string;
    /**
     * equals()
     *
     * equals() compares the instance to the suspect, to determine if they are equal.
     * @param suspect The suspect to be compared.
     */
    equals(suspect: any): boolean;
    /**
     * username()
     *
     * username() gets the username of the email address.
     */
    username(): string;
    toString(): string;
}
declare class EmailAddressException extends InvalidArgumentException {
    constructor(message?: string);
}
interface PhoneNumberInterface {
    /**
     * canBeInternationallyDialed()
     *
     * canBeInternationallyDialed() determines if the phone number can be internationally dialed.
     *
     * @returns TRUE if the number can be internationally dialed. Otherwise, it returns FALSE.
     */
    canBeInternationallyDialed(): boolean;
    /**
     * countryCode()
     *
     * countryCode() gets the phone number's country code.
     */
    countryCode(): number;
    /**
     * equals()
     *
     * equals() compares the phone number to the suspect, to determine if they are equal.
     * @param suspect the suspect being confirmed.
     */
    equals(suspect: any): boolean;
    /**
     * e164()
     *
     * e164() gets the e164 phone number format.
     */
    e164(): string;
    /**
     * international()
     *
     * international() gets the international number.
     */
    international(): string;
    /**
     * isMobile()
     *
     * isMobile() determines if a phone number is mobile.
     */
    isMobile(): boolean;
    /**
     * national()
     *
     * national() gets the national phone number.
     */
    national(): string;
    /**
     * rfc3966()
     *
     * rfc3966() gets the rfc3966 number.
     */
    rfc3966(): string;
    /**
     * regionCode()
     *
     * regionCode() gets the phone number's region code.
     */
    regionCode(): string;
    /**
     * significant()
     *
     * significant() gets the significant number of the phone number.
     */
    significant(): string;
    /**
     * value()
     *
     * value() gets the raw phone number.
     */
    value(): string;
}
/**
 * PhoneNumber
 *
 * PhoneNumber represents a phone number.
 */
declare class PhoneNumber implements PhoneNumberInterface, Equatable {
    private _phoneParser;
    /**
     * Creates a Phone Number instance.
     * @param value The phone number value.
     * @param countryCode The region code of the phone number.
     * @throws PhoneNumverException when the phone number is not valid.
     */
    constructor(value: string, regionCode: string);
    /**
     * canBeInternationallyDialed()
     *
     * canBeInternationallyDialed() determines if the phone number can be internationally dialed.
     *
     * @returns TRUE if the number can be internationally dialed. Otherwise, it returns FALSE.
     */
    canBeInternationallyDialed(): boolean;
    /**
     * countryCode()
     *
     * countryCode() gets the phone number's country code.
     */
    countryCode(): number;
    /**
     * equals()
     *
     * equals() compares the phone number to the suspect, to determine if they are equal.
     * @param suspect the suspect being confirmed.
     */
    equals(suspect: any): boolean;
    /**
     * e164()
     *
     * e164() gets the phone number in e164 format.
     */
    e164(): string;
    /**
     * international()
     *
     * international() gets the international number.
     */
    international(): string;
    /**
     * isMobile()
     *
     * isMobile() determines if a phone number is mobile.
     */
    isMobile(): boolean;
    /**
     * national()
     *
     * national() gets the national phone number.
     */
    national(): string;
    /**
     * rfc3966()
     *
     * rfc3966() gets the rfc3966 number.
     */
    rfc3966(): string;
    /**
     * regionCode()
     *
     * regionCode() gets the phone number's region code.
     */
    regionCode(): string;
    /**
     * significant()
     *
     * significant() gets the significant number of the phone number.
     */
    significant(): string;
    /**
     * value()
     *
     * value() gets the phone number, in international format.
     */
    value(): string;
    toString(): string;
}
/**
 * PhoneNumberException
 *
 * Indicates an error with a Phone Number.
 */
declare class PhoneNumberException extends InvalidArgumentException {
    constructor(message?: string);
}
interface SaltInterface {
    /**
     * value()
     *
     * gets the value of the salt.
     */
    value(): string;
}
/**
 * Salt
 *
 * Represents a salt.
 */
declare class Salt implements Equatable, SaltInterface {
    private readonly _value;
    constructor(value: string);
    /**
     * Generate()
     *
     * generates a salt.
     * @param rounds the number of rounds to use.
     * @returns a generated hash
     */
    static Generate(rounds?: number): Promise<Salt>;
    /**
     * equals()
     *
     * compares the suspect to the instance to determine if they are equal.
     * @param suspect the suspect to compare
     * @returns true if the suspect and the instance are equal
     */
    equals(suspect: any): boolean;
    /**
     * value()
     *
     * gets the value of the salt.
     */
    value(): string;
    toString(): string;
}
interface HashInterface {
    /**
     * value()
     *
     * gets the value of the hash.
     */
    value(): string;
}
/**
 * Hash
 *
 * A Hash.
 */
declare class Hash implements HashInterface, Equatable {
    private readonly _value;
    constructor(value: string);
    /**
     * Create()
     *
     * creates a hash using the data and the salt
     * @param data the data to hash
     * @param salt the salt to use
     * @returns a hashed version of the data
     */
    static Create(data: string | Buffer, salt: Salt): Promise<Hash>;
    /**
     * equals()
     *
     * compares the instance to the suspect, to determine if they are equal.
     * @param suspect the suspect to compare
     */
    equals(suspect: any): boolean;
    toString(): string;
    /**
     * value()
     *
     * gets the value of the hash.
     */
    value(): string;
}
type CharacterSetValue = "ASCII" | "ANSI" | "8859" | "UTF-8";
interface CharacterSetInterface {
    /**
     * value()
     *
     * gets the value of the Character Set.
     */
    value(): CharacterSetValue;
}
/**
 * CharacterSet
 *
 * A CharacterSet.
 */
declare class CharacterSet implements CharacterSetInterface, Equatable {
    private readonly _value;
    constructor(value: CharacterSetValue);
    /**
     * ASCII()
     *
     * Creates a CharacterSet instance set to ASCII.
     * @returns A CharacterSet instance set to ASCII.
     */
    static ASCII(): CharacterSet;
    /**
     * UTF8()
     *
     * Creates a CharacterSet instance set to UTF8.
     * @returns A CharacterSet set to UTF-8.
     */
    static UTF8(): CharacterSet;
    /**
     * equals()
     *
     * determines if the instance and the suspect are equal.
     * @param suspect the suspect to compare.
     * @returns TRUE if the instance and the suspect are equal. FALSE otherwise.
     */
    equals(suspect: any): boolean;
    /**
     * value()
     *
     * gets the value of the Character Set.
     */
    value(): CharacterSetValue;
    toString(): string;
}
/**
 * ColorException
 *
 * A generic color error.
 */
declare class ColorException extends BaseException {
    constructor(message?: string);
}
/**
 * HexException
 *
 * A Hex value error.
 */
declare class HexException extends ColorException {
    constructor(message?: string);
}
interface HexInterface {
    /**
     * value()
     *
     * gets the value.
     */
    value(): string;
}
/**
 * Hex
 *
 * A Hex color value.
 */
declare class Hex implements HexInterface, Equatable, Serializable {
    private readonly _value;
    /**
     * Creates a Hex instance.
     * @param value the hex value.
     * @throws HexException when the hex value is invalid.
     */
    constructor(value: string);
    equals(suspect: any): boolean;
    serialize(): string;
    toString(): string;
    /**
     * value()
     *
     * gets the value.
     */
    value(): string;
}
/**
 * RGBAException
 *
 * An RGBA value error.
 */
declare class RGBAException extends ColorException {
    constructor(message?: string);
}
interface RGBAInterface {
    /**
     * a()
     *
     * gets the alpha value.
     */
    a(): number;
    /**
     * b()
     *
     * gets the blue value.
     */
    b(): number;
    /**
     * g()
     *
     * gets the green value.
     */
    g(): number;
    /**
     * r()
     *
     * gets the red value.
     */
    r(): number;
    /**
     * setA()
     *
     * sets the alpha value.
     * @param x the value to set.
     */
    setA(x: number): RGBAInterface;
    /**
     * setB()
     *
     * sets the b value.
     * @param x the value to set.
     */
    setB(x: number): RGBAInterface;
    /**
     * setG()
     *
     * sets the g value.
     * @param x the value to set.
     */
    setG(x: number): RGBAInterface;
    /**
     * setR()
     *
     * sets the r value.
     * @param x the value to set.
     */
    setR(x: any): RGBAInterface;
}
/**
 * RGBA
 *
 * An RGBA color representation.
 */
declare class RGBA implements RGBAInterface, Equatable, Serializable {
    private readonly _r;
    private readonly _g;
    private readonly _b;
    private readonly _a;
    /**
     * Creates an RGBA value.
     * @param r the r value.
     * @param g the g value.
     * @param b the b value.
     * @param a the alpha value.
     * @trows RGBAException when the RGBA values are invalid.
     */
    constructor(r: number, g: number, b: number, a?: number);
    /**
     * a()
     *
     * gets the alpha value.
     */
    a(): number;
    /**
     * b()
     *
     * gets the blue value.
     */
    b(): number;
    equals(suspect: any): boolean;
    /**
     * g()
     *
     * gets the green value.
     */
    g(): number;
    /**
     * r()
     *
     * gets the red value.
     */
    r(): number;
    serialize(): string;
    /**
     * setA()
     *
     * sets the alpha value.
     * @param x the value to set.
     * @throws RGBAException when x is invalid.
     */
    setA(x: number): RGBA;
    /**
     * setB()
     *
     * sets the b value.
     * @param x the value to set.
     * @throws RGBAException when x is invalid.
     */
    setB(x: number): RGBA;
    /**
     * setG()
     *
     * sets the g value.
     * @param x the value to set.
     * @throws RGBAException when x is invalid.
     */
    setG(x: number): RGBA;
    /**
     * setR()
     *
     * sets the r value.
     * @param x the value to set.
     * @throws RGBAException when x is invalid.
     */
    setR(x: any): RGBA;
    toString(): string;
}
interface ColorInterface {
    /**
     * hex()
     *
     * gets the hex value of the color.
     */
    hex(): HexInterface;
    /**
     * rgba()
     *
     * gets the RGBA value of the color.
     */
    rgba(): RGBAInterface;
}
/**
 * Color
 *
 * A Color value.
 */
declare class Color implements ColorInterface, Equatable, Serializable {
    private readonly _rgba;
    private readonly _hex;
    /**
     * Creates a Color value.
     * @param value the value of the color.
     */
    constructor(value: RGBA | Hex);
    /**
     * Black()
     *
     * creates a Black color.
     * @param a the alpha value, defaults to 1.0
     * @returns a color instance representing the Black color.
     */
    static Black(a?: number): Color;
    /**
     * Blue()
     *
     * creates a Color instance set to blue.
     * @param a the alpha value, defaults to 1.0
     * @returns a color value set to blue.
     */
    static Blue(a?: number): Color;
    /**
     * FromHex()
     *
     * creates a Color instance from a Hex string.
     * @param v the hex value.
     * @returns a Color representing the Hex value provided.
     * @throws HexException when the Hex value is invalid.
     */
    static FromHex(v: string): Color;
    /**
     * FromRGBA()
     *
     * Creates a Color instance using the RGBA values provided.
     * @param r the r value.
     * @param g the g value.
     * @param b the b value.
     * @param a the a value.
     * @returns a Color instance set to the RGBA value provided.
     */
    static FromRGBA(r: number, g: number, b: number, a?: number): Color;
    /**
     * Green()
     *
     * creates a Color instance set to green.
     * @param a the alpha value, defaults to 1.0
     * @returns a color value set to green.
     */
    static Green(a?: number): Color;
    /**
     * Red()
     *
     * creates a Color instance set to red.
     * @param a the alpha value, defaults to 1.0
     * @returns a color value set to red.
     */
    static Red(a?: number): Color;
    /**
     * White()
     *
     * creates a Color instance set to white.
     * @param a the alpha value, defaults to 1.0
     * @returns a color value set to White.
     */
    static White(a?: number): Color;
    equals(suspect: any): boolean;
    /**
     * hex()
     *
     * gets the hex value of the color.
     */
    hex(): Hex;
    /**
     * rgba()
     *
     * gets the RGBA value of the color.
     */
    rgba(): RGBA;
    serialize(): string;
    toString(): string;
}
interface IsoLanguageInterface {
    /**
     * alpha2()
     *
     * Gets the alpha2 value.
     */
    alpha2(): string | null;
    /**
     * alpha3b()
     *
     * gets the alpha3b value.
     */
    alpha3b(): string | null;
    /**
     * alpha3t()
     *
     * gets the alpha3t value.
     */
    alpha3t(): string | null;
    /**
     * name()
     *
     * gets the language name.
     */
    name(): string;
}
/**
 * IsoLanguage
 *
 * A utility class representing ISO Language data.
 */
declare class IsoLanguage implements IsoLanguageInterface, Equatable {
    private readonly _name;
    private readonly _alpha2;
    private readonly _alpha3b;
    private readonly _alpha3t;
    /**
     * Creates a new instance of IsoLanguage.
     * @param nameOrCode The language name or ISO code.
     */
    constructor(nameOrCode: string);
    /**
     * alpha2()
     *
     * Gets the alpha2 value.
     */
    alpha2(): string | null;
    /**
     * alpha3b()
     *
     * gets the alpha3b value.
     */
    alpha3b(): string | null;
    /**
     * alpha3t()
     *
     * gets the alpha3t value.
     */
    alpha3t(): string | null;
    /**
     * equals()
     *
     * compares the instance to the subject to determine if they are equal.
     * @param suspect the suspect to compare.
     */
    equals(suspect: any): boolean;
    /**
     * name()
     *
     * gets the language name.
     */
    name(): string;
    toString(): string;
}
/**
 * IsoLanguageException
 *
 * An IsoLanguage Error
 */
declare class IsoLanguageException extends BaseException {
    constructor(message?: string);
}
/**
 * HTMLSanitizerInterface
 *
 * The HTMLSantitizer interface specifies the API of a String Sanitizer.
 */
interface HTMLSanitizerInterface {
    /**
     * sanitize()
     *
     * strips the HTML from a string.
     * @param dirty the string to sanitize.
     */
    sanitize(dirty: string): string;
}
declare class HTMLSanitizer implements HTMLSanitizerInterface {
    constructor();
    /**
     * sanitize()
     *
     * strips the HTML from a string.
     * @param dirty the string to sanitize.
     */
    sanitize(dirty: string): string;
    toString(): string;
}
/**
 * TimestampedResource
 *
 * TimestampedResource interface defines functionality for timestamped resources.
 */
interface TimestampedResource {
    /**
     * createdOn()
     *
     * createdOn() gets the timestamp when the recource was created.
     */
    createdOn(): DateTime;
    /**
     * deletedOn()
     *
     * deletedOn() gets the timestamp when the rescource was deleted.
     */
    deletedOn(): DateTime | null;
    /**
     * updatedOn()
     *
     * updatedOn() gets the timestamp when the resource was last updated.
     */
    updatedOn(): DateTime;
}
export { Equatable, Serializable, TraverseFn, Traversable, BaseException, InvalidArgumentException, MethodUndefinedException, OutOfBoundsException, NetworkException, Comparator, Type, AsyncFn, SyncFn, VoidAsyncFn, VoidSyncFn, DateTime, Duration, DurationPeriod, DateException, DurationException, Timezone, TimezoneException, Coordinates, CountryException, Country, Street, StreetException, Locality, LocalityException, Region, RegionException, PostalCode, PostalCodeException, StreetAddress, BaseFormatter, StringFormatter, Id, UUID, IdException, UUIDException, EmailAddress, EmailAddressException, PhoneNumber, PhoneNumberException, Salt, Hash, CharacterSet, CharacterSetValue, ColorInterface, Color, ColorException, HexException, HexInterface, Hex, RGBAException, RGBAInterface, RGBA, IsoLanguage, IsoLanguageException, HTMLSanitizer, TimestampedResource };
//# sourceMappingURL=index.d.ts.map