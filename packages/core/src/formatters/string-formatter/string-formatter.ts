import Case from 'change-case';
import { BaseFormatter } from './../base-formatter/base-formatter';
import { StringFormatterInterface } from './string-formatter.interface';

/**
 * StringFormatter
 *
 * A utility class to format strings.
 */

export class StringFormatter extends BaseFormatter implements StringFormatterInterface {

    constructor() {
        super();
    }

    /**
     * camelCase()
     *
     * converts an input into camel case.
     *
     * if the input is not a string type, camelCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in camel case format.
     */

    public camelCase(input: any): string {
        return Case.camelCase(this.castToString(input));
    }

    /**
     * capitalCase()
     *
     * converts an input into capital case.
     *
     * if the input is not a string type, capitalCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in capital case format.
     */

    public capitalCase(input: any): string {
        return Case.capitalCase(this.castToString(input));
    }

    /**
     * constantCase()
     *
     * converts an input into constant case.
     *
     * if the input is not a string type, constantCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in camel constant format.
     */

    public constantCase(input: any): string {
        return Case.constantCase(this.castToString(input));
    }

    /**
     * dotCase()
     *
     * converts an input into dot case.
     *
     * if the input is not a string type, dotCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in dot case format.
     */

    public dotCase(input: any): string {
        return Case.dotCase(this.castToString(input));
    }

    /**
     * headerCase()
     *
     * converts an input into header case.
     *
     * if the input is not a string type, headerCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in header case format.
     */

    public headerCase(input: any): string {
        return Case.headerCase(this.castToString(input));
    }

    /**
     * noCase()
     *
     * converts an input into no case.
     *
     * if the input is not a string type, noCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in no case format.
     */

    public noCase(input: any): string {
        return Case.noCase(this.castToString(input));
    }

    /**
     * paramCase()
     *
     * converts an input into param case.
     *
     * if the input is not a string type, paramCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in param case format.
     */

    public paramCase(input: any): string {
        return Case.paramCase(this.castToString(input));
    }

    /**
     * pascalCase()
     *
     * converts an input into pascal case.
     *
     * if the input is not a string type, pascalCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in pascal case format.
     */

    public pascalCase(input: any): string {
        return Case.pascalCase(this.castToString(input));
    }

    /**
     * pathCase()
     *
     * converts an input into path case.
     *
     * if the input is not a string type, pathCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in path case format.
     */

    public pathCase(input: any): string {
        return Case.pathCase(this.castToString(input));
    }

    /**
     * snakeCase()
     *
     * converts an input into snake case.
     *
     * if the input is not a string type, snakeCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in snake case format.
     */

    public snakeCase(input: any): string {
        return Case.snakeCase(this.castToString(input));
    }

    // =============================
    // Helpers
    // =============================

    /**
     * castToString()
     *
     * casts the input to a string
     * @param input the input to cast.
     */

    private castToString(input: any): string {
        const type = typeof input;

        if ((input === null) || (input === undefined)) {
            return "";
        }
        else if (type === "string") {
            return input;
        }
        else {
            return input.toString();
        }
    }
}