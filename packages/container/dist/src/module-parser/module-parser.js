"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleParser = void 0;
const invalid_module_exception_1 = require("../exceptions/invalid-module.exception");
class ModuleParser {
    /**
     * hasSubmodule()
     *
     * hasSubmodule() determines if the path has submodules.
     * @param modulePath the module path in question.
     * @throws InvalidModuleException when the module path cannot be parsed.
     */
    hasSubmodules(modulePath) {
        if (this.canParse(modulePath)) {
            try {
                return this.parse(modulePath).length > 1;
            }
            catch (e) {
                return false;
            }
        }
        else {
            throw new invalid_module_exception_1.InvalidModuleException();
        }
    }
    /**
     * parse()
     *
     * parses the module name.
     * @param modulePath the module name.
     * @throws InvalidModuleException
     */
    parse(modulePath) {
        if (this.canParse(modulePath)) {
            return modulePath.split(this.delimiter()).filter(value => value.length > 0);
        }
        else {
            throw new invalid_module_exception_1.InvalidModuleException();
        }
    }
    /**
     * root()
     *
     * root() gets the root of the module.
     * @param modulePath the path of the module.
     * @throws InvalidModuleException when the modulePath cannot be parsed.
     */
    root(modulePath) {
        if (this.canParse(modulePath)) {
            const end = modulePath.includes(this.delimiter()) ? modulePath.indexOf(this.delimiter()) : modulePath.length;
            return modulePath.substring(0, end);
        }
        else {
            throw new invalid_module_exception_1.InvalidModuleException();
        }
    }
    /**
     * submodules()
     *
     * gets the submodules name.
     * @param modulePath the name of the module
     * @throws InvalidModuleException when the modulePath cannot be parsed.
     */
    submodules(modulePath) {
        if (this.canParse(modulePath)) {
            if ((modulePath.length > 0) && modulePath.includes(this.delimiter())) {
                const start = this.root(modulePath).length + 1;
                return modulePath.substring(start);
            }
            else {
                return '';
            }
        }
        else {
            throw new invalid_module_exception_1.InvalidModuleException();
        }
    }
}
exports.ModuleParser = ModuleParser;
//# sourceMappingURL=module-parser.js.map