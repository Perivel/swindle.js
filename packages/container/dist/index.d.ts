import { BaseException } from "@swindle/core";
interface ModuleParserInterface {
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
declare abstract class ModuleParser implements ModuleParserInterface {
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
/**
 * DefaultModuleParser
 *
 * The default module parser.
 */
declare class DefaultModuleParser extends ModuleParser {
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
interface ContainerInterface {
    /**
     * bindFactory()
     *
     * bindFactory() binds the token to the factory.
     * @param token the token to assign to the binding.
     * @param factory the factory.
     */
    bindFactory<T>(token: ConcreteDependencyToken<T>, factory: BindingFactory<T>): void;
    /**
     * bindInstance()
     *
     * bindInstance() creates mapping in the container between .
     * @param token: The token of the binding.
     * @param instance The instance to to bind to the token.
     */
    bindInstance<T>(token: DependencyToken<T>, instanceDependency: T): void;
    /**
     * containsModule()
     *
     * determines if the module exists.
     * @param path the path of the module to check for.
     */
    containsModule(path: string): boolean;
    /**
     * createModule()
     *
     * creates a module.
     * @param path the path of the module.
     */
    createModule(path: string): void;
    /**
     * get()
     *
     * gets the dependency associated with the provided token.
     * @param token the dependency to get.
     * @throws DependencyNotFoundException when the dependency cannot be found.
     */
    get<T>(token: DependencyToken<T>): T;
    /**
     * has()
     *
     * has() determines whether the dependency exists in the container.
     * @param token the token of the dependency to test for.
     * @returns true if the dependency is found in the container. False otherwise.
     */
    has<T>(token: DependencyToken<T>): boolean;
    /**
     * module()
     *
     * gets a module.
     * @param path the name of the module to get.
     * @throws ModuleNotFoundException when the module cannot be found.
     */
    module(path: string): ContainerInterface;
    /**
     * parser()
     *
     * gets the parser that is used by the container.
     */
    parser(): ModuleParserInterface;
}
/**
 * BindingFactory
 *
 * BindingFactory type.
 */
type BindingFactory<T> = (container: ContainerInterface) => T;
/**
 * DependencyToken
 *
 * A type indicating a dependency class, which may be either abstract or concrete.
 */
type DependencyToken<T> = abstract new (...args: any[]) => T;
/**
 * ConcreteDependencyToken
 *
 * A type indicating a dependency class, which must be concrete.
 */
type ConcreteDependencyToken<T> = new (...args: any[]) => T;
/**
 * VerdicContainer
 *
 * A simple Dependency Container.
 */
declare class Container implements ContainerInterface {
    private readonly instances;
    private readonly bindings;
    private readonly modules;
    private readonly moduleParser;
    // This is used to track circular dependencies
    private readonly instanciationMap;
    constructor(parser?: ModuleParser);
    /**
     * bind()
     *
     * bind() is an alias of bindFactory().
     * @param token the token to assign to the binding.
     * @param factory the factory.
     * @throws DuplicateBindingException when attempting to add a duplicate binding.
     */
    bind<T>(token: ConcreteDependencyToken<T>, factory: BindingFactory<T>): void;
    /**
     * bindFactory()
     *
     * bindFactory() binds the token to the factory.
     * @param token the token to assign to the binding.
     * @param factory the factory.
     * @throws DuplicateBindingException when attempting to add a duplicate binding.
     */
    bindFactory<T>(token: ConcreteDependencyToken<T>, factory: BindingFactory<T>): void;
    /**
     * bindInstance()
     *
     * bindInstance() creates mapping in the container between .
     * @param token: The token of the binding.
     * @param instance The instance to to bind to the token.
     */
    bindInstance<T>(token: DependencyToken<T>, instance: T): void;
    /**
     * containsModule()
     *
     * determines if the module exists.
     * @param path the path of the module to check for.
     * @returns TRUE if the container contains the module. FALSE otherwise.
     */
    containsModule(path: string): boolean;
    /**
     * createModule()
     *
     * creates a module.
     * @param modulePath the path of the module.
     * @throws DuplicateModuleException when attempting to create a duplicate module.
     * @throws InvalidModuleException when the module path cannot be parsed.
     */
    createModule(modulePath: string): void;
    /**
     * get()
     *
     * gets the dependency associated with the provided token.
     * @param token the dependency to get.
     * @throws DependencyNotFoundException when the dependency cannot be found.
     * @throws CircularDependencyException when a circular dependency is detected.
     */
    get<T>(token: DependencyToken<T>): T;
    /**
     * has()
     *
     * has() determines whether the dependency exists in the container.
     * @param token the token of the dependency to test for.
     * @returns true if the dependency is found in the container. False otherwise.
     */
    has<T>(token: DependencyToken<T>): boolean;
    /**
     * hasBinding()
     *
     * hasBinding() determines if the container has a binding for the specified dependency.
     * @param token the token of the dependnecy to check for.
     * @returns TRUE if the binding exists. FALSE otherwise.
     */
    hasBinding<T>(token: DependencyToken<T>): boolean;
    /**
     * hasInstance()
     *
     * hasInstance() determines if the container has an instance for the specified dependency.
     * @param token the token of the dependnecy to check for.
     * @returns TRUE if the instance exists. FALSE otherwise.
     */
    hasInstance<T>(token: DependencyToken<T>): boolean;
    /**
     * module()
     *
     * gets a module.
     * @param path the path of the module to get.
     * @throws ModuleNotFoundException when the module cannot be found.
     * @throws InvalidModuleException when the module path cannot be parsed
     */
    module(path: string): Container;
    /**
     * parser()
     *
     * gets the parser that is used by the container.
     */
    parser(): ModuleParser;
    // ===========================
    // Helper methods
    // ===========================
    /**
     * getDependencyIdFromToken()
     *
     * gets the id of the dependency from the dependency token.
     * @param toekn The token to derive the id from.
     * @returns the id of the dependency.
     */
    private getDependencyIdFromToken;
}
/**
 * ContainerException
 *
 * The base exception class.
 */
declare class ContainerException extends BaseException {
    constructor(message?: string);
}
/**
 * CircularDependencyException
 */
declare class CircularDependencyException extends ContainerException {
    constructor(message?: string);
}
/**
 * DependencyNotFoundException
 *
 * DependencyNotFoundException indicates that a dependency was not found.
 */
declare class DependencyNotFoundException extends ContainerException {
    constructor(message?: string);
}
/**
 * DuplicateBindingException
 *
 * An error indicating a duplicate binding.
 */
declare class DuplicateBindingException extends ContainerException {
    constructor(message?: string);
}
/**
 * DuplicateDependencyException
 *
 * DuplicateDependencyException indicates that there is a duplicate dependency in the container.
 */
declare class DuplicateDependencyException extends ContainerException {
    constructor(message?: string);
}
/**
 * DuplicateModuleException
 */
declare class DuplicateModuleException extends ContainerException {
    constructor(message?: string);
}
/**
 * InvalidModuleException
 */
declare class InvalidModuleException extends ContainerException {
    constructor(message?: string);
}
/**
 * ModuleNotFoundException
 */
declare class ModuleNotFoundException extends ContainerException {
    constructor(message?: string);
}
export { Container, ContainerInterface, ContainerException, CircularDependencyException, DependencyNotFoundException, DuplicateBindingException, DuplicateDependencyException, DuplicateModuleException, InvalidModuleException, ModuleNotFoundException, ModuleParserInterface, ModuleParser, DefaultModuleParser, BindingFactory, DependencyToken, ConcreteDependencyToken };
//# sourceMappingURL=index.d.ts.map