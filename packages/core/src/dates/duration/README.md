# Duration
The `Duration` class represents a Duration in time.

# Constructor
## constructor(obj)
Creates a duration object witth the specified configuration.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| values | DurationPeriod | true | A configuration object to specify the duration, with keys such as `months`, `quarters`, and `seconds` |

## Errors
| **Type** | **Description** |
| ----------- | ----------- |
|DurationException | Thrown when the duration is invalid |

# Static Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| FromDateTimeDifference() | ([DateTime](./../datetime/README.md)) a, ([DateTime](./../datetime/README.md)) b | Duration | Creates a `Duration` object from the duration between the specified arguments. |

# Methods
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| days() | N/A | number | Gets the number of days in the `Durtion` object. |
| equals() | (any) suspect | boolean | Determines if the `Duration` instance is equal to the suspect. |
| hours() | N/A | number | Gets the number of hours in the `Durtion` object. |
| inDays() | N/A | number | Converts the duration object to days. |
| inHours() | N/A | number | Converts the duration object to hours. |
| inMiliseconds() | N/A | number | Converts the duration object to miliseconds. |
| inMinutes() | N/A | number | Converts the duration object to minutes. |
| inMonths() | N/A | number | Converts the duration object to months. |
| inQuarters() | N/A | number | Converts the duration object to quarters. |
| inSeconds() | N/A | number | Converts the duration object to seconds. |
| inWeeks() | N/A | number | Converts the duration object to weeks. |
| inYears() | N/A | number | Converts the duration object to years. |
| miliseconds() | N/A | number | Gets the miliseonds of the `Duration` instance. |
| minutes() | N/A | number | Gets the minutes of the `Duration` instance. |
| months() | N/A | number | Gets the months of the `Duration` instance. |
| quarters() | N/A | number | Gets the quarters of the `Duration` instance. |
| seconds() | N/A | number | Gets the seonds of the `Duration` instance. |
| toString() | N/A | number | Converts the `Duration` instance to a string. |
| weeks() | N/A | number | Gets the weeks of the `Duration` instance. |
| years() | N/A | number | Gets the years of the `Duration` instance. |