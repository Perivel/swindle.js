# Street
The `Street` class represents an Address Street.

# Constructor
## constructor(line1, line2)
Creates a Street instance.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| line1 | string | true | Line 1 of the street. |
| line2 | string | false | Line2 of the street. |

## Errors
| **Name** | **Description** 
| ----------- | ----------- |
| StreetException | Thrown when the street values are invalid.

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| equals() | (any) suspect | boolean | Determines if the `Street` instance and the suspect are equal. |
| line1() | N/A | string | Gets the line1 value of the `Street` instance. |
| line2() | N/A | string | Gets the line2 value of the `Street` instance. |
| serialize() | N/A | string | Serializes the object. |
| toString() | N/A | string | Converts the object to a string. |

