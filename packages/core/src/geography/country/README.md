# Country
The `Country` class represents a country.

# Constructor
## constructor(code)
Creates a Country instance.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| code | string | true | The country code. |

## Errors
| **Name** | **Description** 
| ----------- | ----------- |
| CountryException | Thrown when the country is invalid. |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| code() | N/A | string | Gets the country code. |
| equals() | (any) suspect | boolean | DDetermines if the `Country` instance is equal to the suspect. |
| name() | N/A | string | Gets the country name. |
| toString() | N/A | string | Converts the `Country` instance to a string. |
