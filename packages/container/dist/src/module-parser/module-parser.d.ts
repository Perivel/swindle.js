import { ModuleParserInterface } from "./module-parser.interface";
export declare abstract class ModuleParser implements ModuleParserInterface {
    /**
     * canParse()
     *
     * determines if a module name can be parsed.
     * @param path the path to check
     */
    abstract canParse(path: string): boolean;
    /**
     * delimiter()
     *
     * gets the module name delimiter
     */
    abstract delimiter(): string;
    /**
     * hasSubmodule()
     *
     * hasSubmodule() determines if the path has submodules.
     * @param modulePath the module path in question.
     * @throws InvalidModuleException when the module path cannot be parsed.
     */
    hasSubmodules(modulePath: string): boolean;
    /**
     * parse()
     *
     * parses the module name.
     * @param modulePath the module name.
     * @throws InvalidModuleException
     */
    parse(modulePath: string): Array<string>;
    /**
     * root()
     *
     * root() gets the root of the module.
     * @param modulePath the path of the module.
     * @throws InvalidModuleException when the modulePath cannot be parsed.
     */
    root(modulePath: string): string;
    /**
     * submodules()
     *
     * gets the submodules name.
     * @param modulePath the name of the module
     * @throws InvalidModuleException when the modulePath cannot be parsed.
     */
    submodules(modulePath: string): string;
}
//# sourceMappingURL=module-parser.d.ts.map