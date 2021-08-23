"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyContainer = void 0;
const dependency_not_found_exception_1 = require("../exceptions/dependency-not-found.exception");
const duplicate_binding_exception_1 = require("../exceptions/duplicate-binding.exception");
const duplicate_dependency_exception_1 = require("../exceptions/duplicate-dependency.exception");
/**
 * DependencyContainer
 *
 * A simple Dependency Container.
 */
class DependencyContainer {
    constructor() {
        //this.instances = new Array();
        this.instances = new Map();
        this.bindings = new Map();
    }
    /**
     * bind()
     *
     * bind() binds the token to the factory.
     * @param token the token to assign to the binding.
     * @param factory the factory.
     * @throws DuplicateBindingException when attempting to add a duplicate binding.
     */
    bind(token, factory) {
        if (this.bindings.has(token.name)) {
            // there is already an existing binding
            throw new duplicate_binding_exception_1.DuplicateBindingException();
        }
        // create the binding
        this.bindings.set(token.name, factory);
    }
    /**
     * bindInstance()
     *
     * bindInstance() creates mapping in the container between .
     * @param token: The token of the binding.
     * @param instance The instance to to bind to the token.
     */
    bindInstance(token, instance) {
        if (this.has(token)) {
            // duplicate insertion.
            throw new duplicate_dependency_exception_1.DuplicateDependencyException();
        }
        // add the dependency
        this.instances.set(token.name, instance);
    }
    /**
     * get()
     *
     * gets the dependency associated with the provided token.
     * @param token the dependency to get.
     * @throws DependencyNotFoundException when the dependency cannot be found.
     */
    get(token) {
        // check for instances
        if (!this.instances.has(token.name)) {
            // there is no instance yet.
            // check if there is a binding
            if (this.bindings.has(token.name)) {
                // create an instance.
                const instance = this.bindings.get(token.name)(this);
                this.instances.set(token.name, instance);
            }
            else {
                // no instance or binding.
                throw new dependency_not_found_exception_1.DependencyNotFoundException();
            }
        }
        return this.instances.get(token.name);
    }
    /**
     * has()
     *
     * has() determines whether the dependency exists in the container.
     * @param token the token of the dependency to test for.
     * @returns true if the dependency is found in the container. False otherwise.
     */
    has(token) {
        return this.instances.has(token.name) || this.bindings.has(token.name);
    }
    /**
     * remove()
     *
     * remove the dependency with the associated token.
     * @param token the toekn of the dependency to remove.
     */
    remove(token) {
        this.bindings.delete(token.name);
        this.instances.delete(token.name);
    }
}
exports.DependencyContainer = DependencyContainer;
