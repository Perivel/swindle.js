import { DateTime } from './../../src/dates/dates.module';
import { Timezone } from '../../src/geography/geography.module';
import { Duration } from './../../src/dates/duration/duration';
import { DateTime as LuxonDT, Duration as LuxonDuration} from 'luxon';

test("Create a DateTime from an existing date.", () => {
    const lux = LuxonDT.utc();
    expect(lux.isValid).toBeTruthy();
    const utcDate = lux.toJSDate();
    expect(utcDate).toBeDefined();
    const dt = DateTime.FromDate(utcDate, Timezone.UTC());
    expect(dt).toBeDefined();
    expect(dt.value()).toEqual(utcDate);
});

test('Generate a timestamp.', () => {
    const dt = DateTime.Now();
    expect(dt).toBeDefined();
});

test('Adding and subtracting days', () => {
    //const initialDate = new Date(Date.UTC(2020, 6, 10, 5, 30, 0, 0));
    const luxonDate = LuxonDT.fromObject({
        year: 1994,
        month: 10,
        day: 15,
        hour: 14,
        minute: 35,
        second: 0,
        millisecond: 0,
    }, {
        zone: 'utc'
    });
    const initialDate = luxonDate.toJSDate();
    const dt = DateTime.FromDate(initialDate, Timezone.UTC());

    // add one day.
    const addedDate = luxonDate.plus(LuxonDuration.fromObject({days: 1})).toJSDate();
    const addedDatesDt = dt.add(new Duration({days: 1}));
    expect(addedDatesDt.value()).toEqual(addedDate);

    // subtract one day.
    const subtractedDaysDt = addedDatesDt.subtract(new Duration({days: 1}));
    expect(subtractedDaysDt.value()).toEqual(initialDate);

    // add a full month
    const newDate = luxonDate.plus(LuxonDuration.fromObject({months: 1})).toJSDate();
    const newMonthDt = dt.add(new Duration({months: 1})); 
    expect(newMonthDt.value()).toEqual(newDate);

    // subtract an entire month.
    const subtractMonthDt = newMonthDt.subtract(new Duration({months: 1}));
    expect(subtractMonthDt.value()).toEqual(initialDate);
});

test("Get the components of the timestamp.", () => {
    const luxonDate = LuxonDT.fromObject({
        year: 2020,
        month: 6,
        day: 10,
        hour: 5,
        minute: 30,
        second: 0,
        millisecond: 0,
    }, {
        zone: 'utc'
    });
    const date = luxonDate.toJSDate();
    const dt = DateTime.FromDate(date, Timezone.UTC());
    expect(dt.month()).toEqual(6);
    expect(dt.day()).toEqual(10);
    expect(dt.year()).toEqual(2020);
});

test("Adding and subtracting months", () => {
    //const initialDate = new Date(Date.UTC(2020, 6, 10, 5, 30, 0, 0));
    const luxonDate =  LuxonDT.fromObject({
        year: 2020,
        month: 3,
        day: 10,
        hour: 5,
        minute: 30,
        second: 0,
        millisecond: 0,
    }, {
        zone: 'utc'
    });
    const initialDate = luxonDate.toJSDate();
    const datetime = DateTime.FromDate(initialDate, Timezone.UTC());
    const futureDate = luxonDate.plus(LuxonDuration.fromObject({months: 3})).toJSDate();
    expect(datetime.add(new Duration({months: 3})).value()).toEqual(futureDate);

    const pastDate = LuxonDT.fromObject({
        year: 2019,
        month: 12,
        day: 10,
        hour: 5,
        minute: 30,
        second: 0,
        millisecond: 0,
    }, {
        zone: 'utc'
    }).toUTC().toJSDate();
    expect(datetime.subtract(new Duration({months: 3})).value()).toEqual(pastDate);
});

test("Add and subtract years.", () => {
    const luxonDate = LuxonDT.fromObject({
        year: 2019,
        month: 10,
        day: 10,
        hour: 5,
        minute: 30,
        second: 0,
        millisecond: 0,
    }, {
        zone: 'utc'
    });
    const date = luxonDate.toJSDate();
    const dt = DateTime.FromDate(date, Timezone.UTC());
    expect(dt.year()).toEqual(2019);
    expect(dt.add(new Duration({years: 1})).year()).toEqual(2020);
    expect(dt.subtract(new Duration({ years: 1 })).year()).toEqual(2018);
});

test('Test date comparison operations', () => {
    // test equality
    const now = DateTime.Now();
    const alsoNow = DateTime.FromDate(now.value(), now.timezone());
    const yesterday = now.subtract(new Duration({ days: 1 }));
    const tomorrow = now.add(new Duration({ days: 1 }));

    expect(now.equals(alsoNow)).toEqual(true);
    expect(now.equals(yesterday)).toEqual(false);

    //test is after.
    expect(now.isAfter(yesterday)).toEqual(true);
    expect(now.isAfter(now)).toEqual(false);
    expect(now.isAfter(tomorrow)).toEqual(false);

    // test isBefore
    expect(now.isBefore(yesterday)).toEqual(false);
    expect(now.isBefore(now)).toEqual(false);
    expect(now.isBefore(tomorrow)).toEqual(true);
});