# DateTime
The `DateTime` class represents a specific date and time. The `DateTime` class uses Luxon behind the scenes.

# Constructor
## constructor(year, month, date, hours, minutes, seconds, miliseconds, tz)
Creates a DateTime instance

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| year | number | true | The year of the DateTime |
| month | number | true | The month (1-12) of the Date |
| date | number | true | The day of the Date. Values can be any number between 1 and 31. |
| hours | number | false | The hour of the DateTime. Defaults to 0 |
| minutes | number | false | The minutes of the DateTime Values can be any number between 0 and 59. Defaults to 0 |
| seconds | number | false | The number of seconds of the DateTime. Values can be any number between 0 and 59. Defaults to 0 |
| ms | number | false | The number of miliseconds of the DateTime. Values can be any number between 0 and 59. Defaults to 0 |
| timezone | [Timezone](./../../geography/timezone/README.md) | false | Specifies the timezone to associate with the DateTime. Defaults to `Timezone.UTC()` |

## Errors
| **Name** | **Description** 
| ----------- | ----------- |
| DateException | Thrown when the date is invalid |

# Static Methods
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| FromDate() | (Date) dateVal, ([Timezone](./../../geography/timezone/README.md)) timezone | DateTime | Creates a DateTime object from a specified JS Date and Timezone |
| Local() | N/A | DateTime | Creates a DateTime Object for the local timezone |
| Now() | ([Timezone](./../../geography/timezone/README.md)) timezone which defaults to `Timezone.UTC` | DateTime | Creates a DateTime Object for the current timestamp. |

# Methods
| **Method** | **Arguments** | **Return Type** | **Description** | **Errors** |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| add() | ([Duration](./../duration/README.md)) duration | DateTime | Adds a specified duration to the `DateTime` object | N/A |
| day() | N/A | number | gets the day of the month for the `DateTime` instance. | N/A |
| equals() | (any) suspect | boolean | Determines if the `DateTime` instance and the suspect are equal. | N/A |
| hour() | N/A | number | gets the hour for the `DateTime` instance. | N/A |
| isAfter() | (any) suspect | boolean | Determines if the `DateTime` instance is after the suspect. | N/A |
| isBefore() | (any) suspect | boolean | Determines if the `DateTime` instance is before the suspect. | N/A |
| milisecond() | N/A | number | gets the milisecond of the `DateTime` instance. | N/A |
| minute() | N/A | number | gets the minute for the `DateTime` instance. | N/A |
| month() | N/A | number | gets the month of the DateTime object. | N/A |
| second() | N/A | number | gets the second of the `DateTime` instance. | N/A |
| subtract() | ([Duration](./../duration/README.md)) duration | DateTime | Subtracts the specified duration from the `DateTime` instance. | N/A |
| timezone() | N/A | [Timezone](./../../geography/timezone/README.md) | gets the timezone of the `DateTime` object. | N/A |
| toString() | N/A | string | converts the `DateTime` instance to an ISO string | N/A |
| toUTC() | N/A | DateTime | Converts the `DateTime` object to a UTC DateTime object. | N/A |
| toTimezone() | ([Timezone](./../../geography/timezone/README.md)) timezone | DateTime | Converts the `DateTime` instance to the specified `Timezone` | N/A |
| isoString() | N/A | string | Converts the `DateTime` instance to an ISO string. | N/A |
| value() | N/A | Date | Converts the `DateTime` instance to a regular Javascript Date object. | N/A |
| year() | N/A | number | gets the year of the DateTime object. | N/A |