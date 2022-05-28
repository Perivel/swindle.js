"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringFormatter = void 0;
const change_case_1 = __importDefault(require("change-case"));
const base_formatter_1 = require("./../base-formatter/base-formatter");
/**
 * StringFormatter
 *
 * A utility class to format strings.
 */
class StringFormatter extends base_formatter_1.BaseFormatter {
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
    camelCase(input) {
        return change_case_1.default.camelCase(this.castToString(input));
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
    capitalCase(input) {
        return change_case_1.default.capitalCase(this.castToString(input));
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
    constantCase(input) {
        return change_case_1.default.constantCase(this.castToString(input));
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
    dotCase(input) {
        return change_case_1.default.dotCase(this.castToString(input));
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
    headerCase(input) {
        return change_case_1.default.headerCase(this.castToString(input));
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
    noCase(input) {
        return change_case_1.default.noCase(this.castToString(input));
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
    paramCase(input) {
        return change_case_1.default.paramCase(this.castToString(input));
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
    pascalCase(input) {
        return change_case_1.default.pascalCase(this.castToString(input));
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
    pathCase(input) {
        return change_case_1.default.pathCase(this.castToString(input));
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
    snakeCase(input) {
        return change_case_1.default.snakeCase(this.castToString(input));
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
    castToString(input) {
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
exports.StringFormatter = StringFormatter;
//# sourceMappingURL=string-formatter.js.map