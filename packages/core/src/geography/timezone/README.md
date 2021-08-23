# Timezone
The `Timezone` class represents a Timezone.

# Constructor
## constructor(id, abbreviation, offset)
Creates a Timezone instance.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| id | string | true | true | The timezone id (i.e. 'America/New_York') |
| abbreviation | string | true | The abbreviation of the timezone (i.e. 'EST') |
| offset | number | true | The offset of the timezone. |

# Static Methods
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| FromId() | (string) id | Timezone | Creates a Timezone object with the given id (i.e. \America/New_York') |
| UTC() | N/A | Timezone | Creates a UTC timezone. |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| abbreviation() | N/A | string | Gets the timezone abbreviation |
| equals() | (any) suspect | boolean | Determines if the `Timezone` instance and the suspect are equal. |
| id() | N/A | string | Gets the id of the `Timezone` instance. |
| utcOffset() | N/A | number | Gets the UTC offset of the `Timezone` instance. |
| toString() | N/A | string | Converts the object to a string |