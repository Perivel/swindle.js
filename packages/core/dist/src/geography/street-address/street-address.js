"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreetAddress = void 0;
const country_1 = require("../country/country");
const country_exception_1 = require("../exceptions/country.exception");
const locality_exception_1 = require("../exceptions/locality.exception");
const postal_code_exception_1 = require("../exceptions/postal-code.exception");
const region_exception_1 = require("../exceptions/region.exception");
const street_exception_1 = require("../exceptions/street.exception");
const locality_1 = require("../locality/locality");
const postal_code_1 = require("../postal-code/postal-code");
const region_1 = require("../region/region");
const street_1 = require("../street/street");
/**
 * StreetAddress
 *
 * StreetAddress represents a a physical street address.
 */
class StreetAddress {
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
    constructor(street, locality, region, postal_code, country) {
        let error = null;
        if (!street) {
            error = new street_exception_1.StreetException();
            throw error;
        }
        if (!locality) {
            error = new locality_exception_1.LocalityException();
            throw error;
        }
        if (!region) {
            error = new region_exception_1.RegionException();
            throw error;
        }
        if (!postal_code) {
            error = new postal_code_exception_1.PostalCodeException();
            throw error;
        }
        if (!country) {
            error = new country_exception_1.CountryException();
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
    static FromPrimitives(street_line_1, street_line_2 = "", locality_name, region_name, postal_code, country_code) {
        const street = new street_1.Street(street_line_1, street_line_2);
        const locality = new locality_1.Locality(locality_name);
        const region = new region_1.Region(region_name);
        const postalCode = new postal_code_1.PostalCode(postal_code);
        const country = new country_1.Country(country_code);
        return new StreetAddress(street, locality, region, postalCode, country);
    }
    /**
     * country()
     *
     * country() gets the address country.
     */
    country() {
        return this._country;
    }
    /**
     * equals()
     *
     * equals() compares the StreetAddress instance to the suspect to determine if they are equal.
     * @param suspect the suspect being compared.
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof StreetAddress) {
            const otherAddress = suspect;
            isEqual = (this.street().equals(otherAddress.street()) &&
                this.locality().equals(otherAddress.locality()) &&
                this.region().equals(otherAddress.region()) &&
                this.postalCode().equals(otherAddress.postalCode()) &&
                this.country().equals(otherAddress.country()));
        }
        return isEqual;
    }
    /**
     * locality()
     *
     * locality() gets the address locality.
     */
    locality() {
        return this._locality;
    }
    /**
     * postalCode()
     *
     * postalCode() gets the address postal code.
     */
    postalCode() {
        return this._postal;
    }
    /**
    * region()
    *
    * region() gets the address region.
    */
    region() {
        return this._region;
    }
    serialize() {
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
    street() {
        return this._street;
    }
    toString() {
        return this.serialize();
    }
}
exports.StreetAddress = StreetAddress;
//# sourceMappingURL=street-address.js.map