import { Equatable } from './../common/common.module';
import { IsoLanguageInterface } from './iso-language.interface';
import { IsoLanguageException } from './iso-language.exception';
import languageData from './iso-language.data.json';

/**
 * IsoLanguage
 * 
 * A utility class representing ISO Language data.
 */

export class IsoLanguage implements IsoLanguageInterface, Equatable {

    private readonly _name: string;
    private readonly _alpha2: string|null;
    private readonly _alpha3b: string|null;
    private readonly _alpha3t: string|null;

    /**
     * Creates a new instance of IsoLanguage.
     * @param nameOrCode The language name or ISO code.
     */
    
    constructor(nameOrCode: string) {
        const query = nameOrCode.toLocaleLowerCase().trim();
        const data = languageData.find(suspect => {
            return (
                (suspect.English.toLocaleLowerCase() === query) ||
                (suspect.alpha2?.toLocaleLowerCase() === query) ||
                (suspect['alpha3-b'].toLowerCase() === query) ||
                (suspect['alpha3-t']?.toLocaleLowerCase() === query)
            );
        });

        if (data) {
            // data is found.
            this._name = data.English;
            this._alpha2 = data.alpha2;
            this._alpha3b = data['alpha3-b'];
            this._alpha3t = data['alpha3-t'];
        }
        else {
            // no data found.
            throw new IsoLanguageException();
        }
    }

    /**
     * alpha2()
     * 
     * Gets the alpha2 value.
     */

    public alpha2(): string | null {
        return this._alpha2;
    }

    /**
     * alpha3b()
     * 
     * gets the alpha3b value.
     */

    public alpha3b(): string | null {
        return this._alpha3b;
    }

    /**
     * alpha3t()
     * 
     * gets the alpha3t value.
     */

    public alpha3t(): string | null {
        return this._alpha3t;
    }

    /**
     * equals()
     * 
     * compares the instance to the subject to determine if they are equal.
     * @param suspect the suspect to compare.
     */

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof IsoLanguage) {
            const other = suspect as IsoLanguage;
            isEqual = (
                (this.name() === other.name()) &&
                (this.alpha2() === other.alpha2()) &&
                (this.alpha3b() === other.alpha3b()) &&
                (this.alpha3t() === other.alpha3t())
            );
        }

        return isEqual;
    }

    /**
     * name()
     * 
     * gets the language name.
     */
    
    public name(): string {
        return this._name;
    }

    public toString(): string {
        return this.name();
    }
}