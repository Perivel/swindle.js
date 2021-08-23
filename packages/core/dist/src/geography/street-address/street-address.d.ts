import { Country } from '../country/country';
import { Locality } from '../locality/locality';
import { PostalCode } from '../postal-code/postal-code';
import { Region } from '../region/region';
import { Street } from '../street/street';
import { Equatable, Serializable } from './../../common/common.module';
import { StreetAddressInterface } from "./street-address.interface";
/**
 * StreetAddress
 *
 * StreetAddress represents a a physical street address.
 */
export declare class StreetAddress implements StreetAddressInterface, Equatable, Serializable {
    private readonly _street;
    private readonly _locality;
    private readonly _region;
    private readonly _postal;
    private readonly _country;
    /**
     * Creates a new StreetAddress Instance.
     * @param street Street
     * @param locality Locality
     * @param region Region
     * @param postal_code PostalCode
     * @param country Country
     *
     * @throws StreetException when the street is invalid.
     * @throws LocalityException when the locality is invalid.
     * @throws RegionException when the the region is invalid.
     * @throws PostalCodeException when the postal code is invalid.
     * @throws CountryException when the country is invalid.
     *
     */
    constructor(street: Street, locality: Locality, region: Region, postal_code: PostalCode, country: Country);
    /**
     * FromPrimitives()
     *
     * creates a street address based on primitive values.
     * @param street_line_1 the street address line 1 value
     * @param street_line_2 street address line 2 value (optional)
     * @param locality_name the city or town name
     * @param region_name the state or province name
     * @param postal_code the zip code or postal code.
     * @param country_code the country code.
     * @returns a StreetAddress instance.
     *
     * @throws StreetException when the street is invalid.
     * @throws LocalityException when the
     */
    static FromPrimitives(street_line_1: string, street_line_2: string | undefined, locality_name: string, region_name: string, postal_code: string, country_code: string): StreetAddress;
    /**
     * country()
     *
     * country() gets the address country.
     */
    country(): Country;
    /**
     * equals()
     *
     * equals() compares the StreetAddress instance to the suspect to determine if they are equal.
     * @param suspect the suspect being compared.
     */
    equals(suspect: any): boolean;
    /**
     * locality()
     *
     * locality() gets the address locality.
     */
    locality(): Locality;
    /**
     * postalCode()
     *
     * postalCode() gets the address postal code.
     */
    postalCode(): PostalCode;
    /**
    * region()
    *
    * region() gets the address region.
    */
    region(): Region;
    serialize(): string;
    /**
     * street()
     *
     * street() gets the address street.
     */
    street(): Street;
    toString(): string;
}
//# sourceMappingURL=street-address.d.ts.map