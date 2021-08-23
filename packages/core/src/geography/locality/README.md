# Locality
The `Locality` class represents an address locality.

# Constructor
## constructor(name)
Creates a Locality instance.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| name | string | true | The name of the locality. |

## Errors
| **Name** | **Description** 
| ----------- | ----------- |
| LocalityException | Thrown when the Locality is invalid. |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| equals() | (any) suspect | boolean | Determines if the `Locality` instance and the suspect are equal. |
| name() | N/A | string | Gets the name of the `Locality`. |
| serialize() | N/A | string | Serializes the object. |
| toString() | N/A | string | Converts the object to a string. |