import { InvalidModuleException } from "../exceptions";
import { ModuleParserInterface } from "./module-parser.interface";


export abstract class ModuleParser implements ModuleParserInterface {

    /**
     * canParse()
     * 
     * determines if a module name can be parsed.
     * @param path the path to check
     */

    public abstract canParse(path: string): boolean;

    /**
     * delimiter()
     * 
     * gets the module name delimiter
     */

    public abstract delimiter(): string;

    /**
     * hasSubmodule()
     * 
     * hasSubmodule() determines if the path has submodules.
     * @param modulePath the module path in question.
     * @throws InvalidModuleException when the module path cannot be parsed.
     */

    public hasSubmodules(modulePath: string): boolean {
        if (this.canParse(modulePath)) {
            try {
                return this.parse(modulePath).length > 1;
            }
            catch (e) {
                return false;
            }
        }
        else {
            throw new InvalidModuleException();
        }
    }

    /**
     * parse()
     * 
     * parses the module name.
     * @param modulePath the module name.
     * @throws InvalidModuleException
     */

    public parse(modulePath: string): Array<string> {
        
        if (this.canParse(modulePath)) {
            return modulePath.split(this.delimiter()).filter(value => value.length > 0);
        }
        else {
            throw new InvalidModuleException();
        }
    }

    /**
     * root()
     * 
     * root() gets the root of the module.
     * @param modulePath the path of the module.
     * @throws InvalidModuleException when the modulePath cannot be parsed.
     */

    public root(modulePath: string): string {
        if (this.canParse(modulePath)) {
            const end = modulePath.includes(this.delimiter()) ? modulePath.indexOf(this.delimiter()) : modulePath.length
            return modulePath.substring(0, end);
        }
        else {
            throw new InvalidModuleException();
        }
    }

    /**
     * submodules()
     * 
     * gets the submodules name.
     * @param modulePath the name of the module
     * @throws InvalidModuleException when the modulePath cannot be parsed.
     */

    public submodules(modulePath: string): string {
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
            throw new InvalidModuleException();
        }
    }
}