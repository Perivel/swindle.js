import { Country } from '../country/country';
import { CountryException } from '../exceptions/country.exception';
import { LocalityException } from '../exceptions/locality.exception';
import { PostalCodeException } from '../exceptions/postal-code.exception';
import { RegionException } from '../exceptions/region.exception';
import { StreetException } from '../exceptions/street.exception';
import { Locality } from '../locality/locality';
import { PostalCode } from '../postal-code/postal-code';
import { Region } from '../region/region';
import { Street } from '../street/street';
import {
    Equatable,
    Serializable
} from './../../common/common.module';
import { StreetAddressInterface } from "./street-address.interface";

/**
 * StreetAddress
 *
 * StreetAddress represents a a physical street address.
 */

export class StreetAddress implements StreetAddressInterface, Equatable, Serializable {
    private readonly _street: Street;
    private readonly _locality: Locality;
    private readonly _region: Region;
    private readonly _postal: PostalCode;
    private readonly _country: Country;


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

    constructor(street: Street, locality: Locality, region: Region, postal_code: PostalCode, country: Country) {
        let error: Error | null = null;

        if (!street) {
            error = new StreetException();
            throw error;
        }

        if (!locality) {
            error = new LocalityException();
            throw error;
        }

        if (!region) {
            error = new RegionException();
            throw error;
        }

        if (!postal_code) {
            error = new PostalCodeException();
            throw error;
        }

        if (!country) {
            error = new CountryException();
            throw error;
        }

        this._street = street;
        this._locality = locality;
        this._region = region;
        this._postal = postal_code;
        this._country = country;
    }

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

    public static FromPrimitives(
        street_line_1: string,
        street_line_2: string = "",
        locality_name: string,
        region_name: string,
        postal_code: string,
        country_code: string
    ): StreetAddress {
        const street = new Street(street_line_1, street_line_2);
        const locality = new Locality(locality_name);
        const region = new Region(region_name);
        const postalCode = new PostalCode(postal_code);
        const country = new Country(country_code);
        return new StreetAddress(street, locality, region, postalCode, country);
    }

    /**
     * country()
     *
     * country() gets the address country.
     */

    public country(): Country {
        return this._country;
    }

    /**
     * equals()
     *
     * equals() compares the StreetAddress instance to the suspect to determine if they are equal.
     * @param suspect the suspect being compared.
     */

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof StreetAddress) {
            const otherAddress = suspect as StreetAddress;
            isEqual = (
                this.street().equals(otherAddress.street()) &&
                this.locality().equals(otherAddress.locality()) &&
                this.region().equals(otherAddress.region()) &&
                this.postalCode().equals(otherAddress.postalCode()) &&
                this.country().equals(otherAddress.country())
            );
        }

        return isEqual;
    }

    /**
     * locality()
     *
     * locality() gets the address locality.
     */

    public locality(): Locality {
        return this._locality;
    }

    /**
     * postalCode()
     *
     * postalCode() gets the address postal code.
     */

    public postalCode(): PostalCode {
        return this._postal;
    }

    /**
    * region()
    *
    * region() gets the address region.
    */

    public region(): Region {
        return this._region;
    }

    public serialize(): string {
        return JSON.stringify({
            street: this.street().serialize(),
            locality: this.locality().serialize(),
            region: this.region().serialize(),
            postal_code: this.postalCode().serialize(),
            country: this.country().toString()
        });
    }

    /**
     * street()
     *
     * street() gets the address street.
     */

    public street(): Street {
        return this._street;
    }

    public toString(): string {
        return this.serialize();
    }
}