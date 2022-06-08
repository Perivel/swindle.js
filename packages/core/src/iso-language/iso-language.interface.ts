

export interface IsoLanguageInterface {

    /**
     * alpha2()
     * 
     * Gets the alpha2 value.
     */

    alpha2(): string | null;

    /**
     * alpha3b()
     * 
     * gets the alpha3b value.
     */

    alpha3b(): string | null;

    /**
     * alpha3t()
     * 
     * gets the alpha3t value.
     */

    alpha3t(): string | null;

    /**
     * name()
     * 
     * gets the language name.
     */
    
    name(): string;
}