import { ModuleParser } from "./module-parser";

/**
 * DefaultModuleParser
 * 
 * The default module parser.
 */

export class DefaultModuleParser extends ModuleParser {

    constructor() {
        super();
    }

    /**
     * canParse()
     * 
     * canParse() determines if the module name can be parsed.
     * @param path the name of the module.
     */

    public canParse(path: string): boolean {
        return new RegExp('^[A-Za-z0-9._-]+$').test(path);
    }

    /**
     * delimiter()
     * 
     * delimiter() gets the delimiter of the parser.
     * @returns the delimiter to use to parse modules.
     */
    public delimiter(): string {
        return ".";
    }
}