# Region
The `Region` class represents an Address Administrative region.

# Constructor
## constructor(name)
Creates a Region instance.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| name | string | true | The name of the region. |

## Errors
| **Name** | **Description** 
| ----------- | ----------- |
| RegionException | Thrown when the `Region` name is invalid. |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| equals() | (any) suspect | boolean | Determines if the `Region` instance is equal to the suspect. |
| name() | N/A | string | Gets the `Region` name. |
| serialize() | N/A | string | Serializes the object. |
| toString() | N/A | string | Converts the object to a string |