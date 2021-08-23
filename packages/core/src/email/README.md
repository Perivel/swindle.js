# Email
The email class provides utilities to manipulate email addresses.

# Constructor
## constructor(value)
creates an `EmailAddress` instance with the provided email address value.

### Arguments
**value:** (string) The email address value
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| value | string | true | The email address value. |

### Errors
| **Type** | **Description** |
| ----------- | ----------- |
| EmailAddressException | Thrown when the value is not a valid email address. |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| email() | N/A | string | Gets the value of the Email Address |
| equals() | (any) suspect | boolean | Determines if the email address and the suspect are equal |
| toString() | N/A | string | converts the EmailAddress instance to a string |