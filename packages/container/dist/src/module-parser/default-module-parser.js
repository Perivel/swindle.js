"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultModuleParser = void 0;
const module_parser_1 = require("./module-parser");
/**
 * DefaultModuleParser
 *
 * The default module parser.
 */
class DefaultModuleParser extends module_parser_1.ModuleParser {
    constructor() {
        super();
    }
    /**
     * canParse()
     *
     * canParse() determines if the module name can be parsed.
     * @param path the name of the module.
     */
    canParse(path) {
        return new RegExp('^[A-Za-z0-9._-]+$').test(path);
    }
    /**
     * delimiter()
     *
     * delimiter() gets the delimiter of the parser.
     * @returns the delimiter to use to parse modules.
     */
    delimiter() {
        return ".";
    }
}
exports.DefaultModuleParser = DefaultModuleParser;
//# sourceMappingURL=default-module-parser.js.map