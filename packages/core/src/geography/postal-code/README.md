# Postal Code
The `PostalCode` class represents a Postal Code.

# Constructor
## constructor(value)
Creates a PostalCode instance.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| value | string | true | The postal code value. |

## Errors
| **Name** | **Description** 
| ----------- | ----------- |
| PostalCodeException | Thrown when the postal code value is invalid. |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| equals() | (any) suspect | boolean | Determines if the `PostalCode` instance is equal t the suspect. |
| serialize() | N/A | string | Serializes the object. |
| toString() | N/A | string | Converts the postal code to a string |
| value() | N/A | string | Gets the value of the `Postal Code` instance. |