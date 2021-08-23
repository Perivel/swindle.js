# UUID
A utility to work with Universally Unique Identifiers (UUID).

# Constructor
## constructor(value)
Creates a UUID instance.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| value | string | true | The value of the UUID. |

## Errors
| **Type** | **Description** |
| ----------- | ----------- |
| UUIDException | Thrown when the UUID is invalid. |

# Static Methods
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| NIL() | N/A | UUID | Creates a NIL UUID. |
| V1() | N/A | UUID | Creates a version 1 (Timestamp) UUID. |
| V3() | (string) name, (string) namespace | UUID | Creates a Version 3 (namespace with MD5). |
| V4() | N/A | UUID | Creates a Version 4 (Random) UUID. |
| V5() | (string) name, (string) namespace | UUID | Creates a Version 3 (namespace with SHA-5). |

# Methods
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| equals() | (any) suspect | boolean | Determines if the instance and the suspect are equal. |
| id() | N/A | string | Gets the value of the UUID. |
| toString() | N/A | string | Converts the UUID to a string. |
| version() | N/A | number | Gets the version of the UUID. |
