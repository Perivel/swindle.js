# StreetAddress
The `StreetAddress` class represents a Street Address.

# Constructor
## constructor(street, locality, region, postalCode, country)
Creates a StreetAddress instance.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| street | [Street](./../street/README.md) | true | The street information of the address. |
| locality | [Locality](./../locality/README.md) | true | The locality information of the address. |
| region | [Region](./../region/README.md) | true | The Region information of the address. |
| postalCode | [PostalCode](./../postal-code/README.md) | true | The postal code information of the address. |
| country | [Country](./../country/README.md) | true | The country information of the address. |


## Errors
| **Name** | **Description** 
| ----------- | ----------- |
| StreetException | Thrw\own when the street is invalid. |
| LocalityException | Thrown when the locality is invalid. |
| RegionException | Thrown when the region is invalid. |
| PostalCodeException | Thrown when the postal code is invalid. |
| CountryException | Thrown when the country is invalid. |

# Static Methods
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| FromPrimitives() | (string) line_1, (string) line_2, (string) locality_name, (string) region_name, (string) postal_code, (string) country_code | StreetAddress | Creates a streetAddress for primitive values |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| country() | N/A | [Country](./../country/README.md) | Gets the country of the address. |
| equals() | (any) suspect | boolean | Determines if the `StreetAddress` instance and the suspect are equal |
| locality() | N/A | [Locality](./../locality/README.md) | Gets the `StreetAddress` locality. |
| postalCode() | N/A | [PostalCode](./../postal-code/README.md) | Gets the `StreetAddress` postal code. |
| region() | N/A | [Region](./../region/README.md) | Gets the `StreetAddress` region. |
| serialize() | N/A | string | Serializes the object. |
| street() | N/A | [Street](./../street/README.md) | Gets the `StreetAddress` street. |
|toString() | N/A | string | Converts the object to a string. |