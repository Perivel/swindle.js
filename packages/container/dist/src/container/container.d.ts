import { ModuleParser } from '../module-parser/module-parser';
import { BindingFactory } from "../types/binding-factory.type";
import { DependencyToken, ConcreteDependencyToken } from "../types/dependency-token.type";
import { ContainerInterface } from "./container.interface";
/**
 * VerdicContainer
 *
 * A simple Dependency Container.
 */
export declare class Container implements ContainerInterface {
    private readonly instances;
    private readonly bindings;
    private readonly modules;
    private readonly moduleParser;
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
    /**
     * getDependencyIdFromToken()
     *
     * gets the id of the dependency from the dependency token.
     * @param toekn The token to derive the id from.
     * @returns the id of the dependency.
     */
    private getDependencyIdFromToken;
}
//# sourceMappingURL=container.d.ts.map