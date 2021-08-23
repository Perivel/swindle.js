import { BindingFactory } from "./binding-factory.type";
import { DependencyContainerInterface } from "./dependency-container.interface";
import { DependencyToken } from './dependency-token.type';
/**
 * DependencyContainer
 *
 * A simple Dependency Container.
 */
export declare class DependencyContainer implements DependencyContainerInterface {
    private instances;
    private bindings;
    constructor();
    /**
     * bind()
     *
     * bind() binds the token to the factory.
     * @param token the token to assign to the binding.
     * @param factory the factory.
     * @throws DuplicateBindingException when attempting to add a duplicate binding.
     */
    bind<T>(token: DependencyToken<T>, factory: BindingFactory<T>): void;
    /**
     * bindInstance()
     *
     * bindInstance() creates mapping in the container between .
     * @param token: The token of the binding.
     * @param instance The instance to to bind to the token.
     */
    bindInstance<T>(token: DependencyToken<T>, instance: T): void;
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
     * remove()
     *
     * remove the dependency with the associated token.
     * @param token the toekn of the dependency to remove.
     */
    remove<T>(token: DependencyToken<T>): void;
}
//# sourceMappingURL=dependency-container.d.ts.map