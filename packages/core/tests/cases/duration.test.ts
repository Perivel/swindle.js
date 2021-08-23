import { Duration } from './../../src/dates/duration/duration';
import { DateTime } from './../../src/dates/datetime/datetime';

test("Creating a Duration instance", () => {
    const duration = new Duration({
        years: 1,
        months: 6,
    });

    expect(duration.years()).toEqual(1);
    expect(duration.quarters()).toEqual(0);
    expect(duration.months()).toEqual(6);
    expect(duration.weeks()).toEqual(0);
    expect(duration.days()).toEqual(0);
    expect(duration.hours()).toEqual(0);
    expect(duration.minutes()).toEqual(0);
    expect(duration.seconds()).toEqual(0);
    expect(duration.miliseconds()).toEqual(0);
    expect(duration.inYears()).toEqual(1.5);
    expect(duration.inQuarters()).toEqual(6);
    expect(duration.inMonths()).toEqual(18);
    expect(duration.inWeeks()).toEqual(78.26625000000001);
    expect(duration.inDays()).toEqual(547.86375);
});

test("Create a Duration from two date objects", () => {
    const firstDate = DateTime.Now();
    const durationToAdd = new Duration({minutes: 5});
    const secondDate = firstDate.add(durationToAdd);
    const diff = Duration.FromDateTimeDifference(firstDate, secondDate);
    expect(diff.inMinutes()).toEqual(5);
});

test('Converting from one unit to another', () => {
    const duration = new Duration({
        seconds: 300
    });
    expect(duration.inMinutes()).toEqual(5);
});
