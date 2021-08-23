# Salt
The `Salt` class generates a random salt.

# Constructor
## constructor(value)
Creates a Salt instance.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| value | string | true | The salt value. |

# Static Methods
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| Generate() | N/A | Promise (Salt) | Generates a random salt. |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| equals() | (any) suspect | boolean | Determines if the `Salt` instance and the suspect are equal. |
| value() | N/A | string | Gets the value of the `Salt` instance. |
| toString() | N/A | string | Converts the object to a string. |