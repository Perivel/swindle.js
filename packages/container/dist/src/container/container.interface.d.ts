/**
 * VerdicDependencyInjectionContainerInterface
 */
import { ModuleParserInterface } from "../module-parser/module-parser.interface";
import { BindingFactory } from "../types/binding-factory.type";
import { ConcreteDependencyToken, DependencyToken } from "../types/dependency-token.type";
export interface ContainerInterface {
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
//# sourceMappingURL=container.interface.d.ts.map