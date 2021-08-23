# Hash
The `Hash` class is used to hash data.

# Constructor
## constructor(value)
Creates a Hash instance consisting of the value hash string provided.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| value | string | true | the value of the hash. |

# Static Methods
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| Create() | (string/Buffer) data, ([Salt](../salt/README.md)) salt | Promise (Hash) | Creates a `Hash` instance given the data and salt. |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| equals() | (any) suspect | boolean | Determines if the `Hash` instance and suspect are equal. |
| toString() | N/A | string | Converts the object to a string. |
| value() | N/A | string | Gets the value of the `Hash` instance. |