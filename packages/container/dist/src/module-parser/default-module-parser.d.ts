import { ModuleParser } from "./module-parser";
/**
 * DefaultModuleParser
 *
 * The default module parser.
 */
export declare class DefaultModuleParser extends ModuleParser {
    constructor();
    /**
     * canParse()
     *
     * canParse() determines if the module name can be parsed.
     * @param path the name of the module.
     */
    canParse(path: string): boolean;
    /**
     * delimiter()
     *
     * delimiter() gets the delimiter of the parser.
     * @returns the delimiter to use to parse modules.
     */
    delimiter(): string;
}
//# sourceMappingURL=default-module-parser.d.ts.map