# PhoneNumber
The `PhoneNumber` class provides utilities for working with Phone Numbers.

# Constructor
## constructor(value, regionCode)
Creates a PhoneNumber instance.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| value | string | true | the Phone Number value. |
| regionCode | string | true | The region code of the phone number.

## Errors
| **Name** | **Description** 
| ----------- | ----------- |
| PhoneNumberException | Thrown when the PhoneNumber is invalid. |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| canBeInternationallyDialed() | N/A | boolean | Determines if the phone number can be internationally dialed. |
| countryCode() | N/A | number | Gets the phone number's country code. |
| equals() | (any) suspect | boolean | Determines if the `PhoneNumber` instance and the suspect are equal. |
| e164() | N/A | string | Gets the phone number in e164 format. |
| international() | N/A | string | Gets the international number. |
| isMobile() | N/A | boolean | Determines if a phone number is mobile. |
| national() | N/A | string | Gets the national phone number. |
| rfc3966() | N/A | string | Gets the rfc3966 number. |
| regionCode() | N/A | string | Gets the phone number's region code. |
| significant() | N/A | string | Gets the significant number of the phone number. |
| value() | N/A | string | Gets the phone number, in international format. |
| toString() | N/A | string | Converts the object to a string. |