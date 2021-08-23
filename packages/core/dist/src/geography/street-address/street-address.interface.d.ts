import { CountryInterface } from "../country/country.interface";
import { LocalityInterface } from "../locality/locality.interface";
import { PostalCodeInterface } from "../postal-code/postal-code.interface";
import { RegionInterface } from "../region/region.interface";
import { StreetInterface } from "../street/street.interface";
/**
 * StreetAddressInterface
 *
 * StreetAddressInterface specifies the functionality of a street address.
 */
export interface StreetAddressInterface {
    /**
     * country()
     *
     * country() gets the address country.
     */
    country(): CountryInterface;
    /**
     * locality()
     *
     * locality() gets the address locality.
     */
    locality(): LocalityInterface;
    /**
     * postalCode()
     *
     * postalCode() gets the address postal code.
     */
    postalCode(): PostalCodeInterface;
    /**
     * region()
     *
     * region gets the address region.
     */
    region(): RegionInterface;
    /**
     * street()
     *
     * street() gets the street.
     */
    street(): StreetInterface;
}
//# sourceMappingURL=street-address.interface.d.ts.map