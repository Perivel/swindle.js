export interface ModuleParserInterface {
    /**
     * canParse()
     *
     * determines if a module name can be parsed.
     * @param path the module path to check
     */
    canParse(path: string): boolean;
    /**
     * delimiter()
     *
     * gets the module name delimiter
     */
    delimiter(): string;
    /**
     * hasSubmodule()
     *
     * hasSubmodule() determines if the path has submodules.
     * @param modulePath the module path in question.
     */
    hasSubmodules(modulePath: string): boolean;
    /**
     * parse()
     *
     * parses the module name.
     * @param modulePath the module path to parse.
     */
    parse(modulePath: string): Array<string>;
    /**
     * root()
     *
     * root() gets the root of the module.
     * @param modulePath the path of the module.
     */
    root(modulePath: string): string;
    /**
     * submodules()
     *
     * gets the submodules name.
     * @param modulePath the path of the module
     */
    submodules(modulePath: string): string;
}
//# sourceMappingURL=module-parser.interface.d.ts.map