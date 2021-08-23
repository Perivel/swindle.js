import { BaseFormatterInterface } from './../base-formatter/base-formatter.interface';
export interface StringFormatterInterface extends BaseFormatterInterface {
    /**
     * camelCase()
     *
     * converts an input into camel case.
     *
     * if the input is not a string type, camelCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in camel case format.
     */
    camelCase(input: any): string;
    /**
     * capitalCase()
     *
     * converts an input into capital case.
     *
     * if the input is not a string type, capitalCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in capital case format.
     */
    capitalCase(input: any): string;
    /**
     * constantCase()
     *
     * converts an input into constant case.
     *
     * if the input is not a string type, constantCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in camel constant format.
     */
    constantCase(input: any): string;
    /**
     * dotCase()
     *
     * converts an input into dot case.
     *
     * if the input is not a string type, dotCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in dot case format.
     */
    dotCase(input: any): string;
    /**
     * headerCase()
     *
     * converts an input into header case.
     *
     * if the input is not a string type, headerCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in header case format.
     */
    headerCase(input: any): string;
    /**
     * noCase()
     *
     * converts an input into no case.
     *
     * if the input is not a string type, noCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in no case format.
     */
    noCase(input: any): string;
    /**
     * paramCase()
     *
     * converts an input into param case.
     *
     * if the input is not a string type, paramCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in param case format.
     */
    paramCase(input: any): string;
    /**
     * pascalCase()
     *
     * converts an input into pascal case.
     *
     * if the input is not a string type, pascalCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in pascal case format.
     */
    pascalCase(input: any): string;
    /**
     * pathCase()
     *
     * converts an input into path case.
     *
     * if the input is not a string type, pathCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in path case format.
     */
    pathCase(input: any): string;
    /**
     * snakeCase()
     *
     * converts an input into snake case.
     *
     * if the input is not a string type, snakeCase() will attempt to convert it to a string.
     * @param input the input.
     * @returns The input in snake case format.
     */
    snakeCase(input: any): string;
}
//# sourceMappingURL=string-formatter.interface.d.ts.map