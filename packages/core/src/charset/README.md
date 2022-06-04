# characterSet
The `CharacterSet` class represents a Character Set.

# Constructor
## constructor(value)
Creates a CharacterSet instance

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| value | CharacterSetValue | true | The value of the character set. |

## Errors
N/A


# Static Methods
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| ASCII() | N/A | CharacterSet | Creates an ASCII CharacterSet instance |
| UTF8() | N/A | CharacterSet | Creates a UTF-8 CharacterSet instance |


# Methods
| **Method** | **Arguments** | **Return Type** | **Description** | **Errors** |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| equals() | (any) suspect | boolean | Determines if the `DateTime` instance and the suspect are equal. | N/A |
| toString() | N/A | string | converts the `DateTime` instance to an ISO string | N/A |
| value() | N/A | string | Gets the raw value of the Character Set |