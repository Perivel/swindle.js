"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
const CountryData = __importStar(require("i18n-iso-countries"));
const country_exception_1 = require("../exceptions/country.exception");
/**
 * Country
 *
 * Country represents a Country in the world.
 */
class Country {
    /**
     * Creates a Country instance
     * @param code The country code.
     * @throws CountryException when the country information is invalid.
     */
    constructor(code) {
        const countryCode = code.toUpperCase();
        const name = CountryData.getName(countryCode, 'en');
        if (name) {
            this._code = countryCode;
            this._name = name;
        }
        else {
            // invalid country
            throw new country_exception_1.CountryException();
        }
    }
    /**
     * code()
     *
     * code() gets the country code.
     */
    code() {
        return this._code;
    }
    /**
     * name()
     *
     * name() gets the country's common name.
     */
    name() {
        return this._name;
    }
    /**
     * equals()
     *
     * equals() compares the Country to the suspect to determine if they are equal.
     * @param suspect The suspect to be compared.
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof Country) {
            const otherCountry = suspect;
            isEqual = this.code() === otherCountry.code();
        }
        return isEqual;
    }
    toString() {
        return this.name();
    }
}
exports.Country = Country;
//# sourceMappingURL=country.js.map