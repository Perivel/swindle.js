"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const circular_dependency_exception_1 = require("../exceptions/circular-dependency.exception");
const dependency_not_found_exception_1 = require("../exceptions/dependency-not-found.exception");
const duplicate_binding_exception_1 = require("../exceptions/duplicate-binding.exception");
const duplicate_dependency_exception_1 = require("../exceptions/duplicate-dependency.exception");
const duplicate_module_exception_1 = require("../exceptions/duplicate-module.exception");
const module_not_found_exception_1 = require("../exceptions/module-not-found.exception");
const default_module_parser_1 = require("../module-parser/default-module-parser");
/**
 * VerdicContainer
 *
 * A simple Dependency Container.
 */
class Container {
    constructor(parser = new default_module_parser_1.DefaultModuleParser()) {
        this.instances = new Map();
        this.bindings = new Map();
        this.modules = new Map();
        this.instanciationMap = new Set();
        this.moduleParser = parser;
    }
    /**
     * bind()
     *
     * bind() is an alias of bindFactory().
     * @param token the token to assign to the binding.
     * @param factory the factory.
     * @throws DuplicateBindingException when attempting to add a duplicate binding.
     */
    bind(token, factory) {
        this.bindFactory(token, factory);
    }
    /**
     * bindFactory()
     *
     * bindFactory() binds the token to the factory.
     * @param token the token to assign to the binding.
     * @param factory the factory.
     * @throws DuplicateBindingException when attempting to add a duplicate binding.
     */
    bindFactory(token, factory) {
        // get the name of the dependency
        const depId = this.getDependencyIdFromToken(token);
        if (this.bindings.has(depId)) {
            // there is already an existing binding
            throw new duplicate_binding_exception_1.DuplicateBindingException(`Binding for '${depId}' already exists.`);
        }
        // create the binding
        this.bindings.set(depId, factory);
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
            throw new duplicate_dependency_exception_1.DuplicateDependencyException(`Binding for '${this.getDependencyIdFromToken(token)}' already exists.`);
        }
        // add the dependency
        this.instances.set(this.getDependencyIdFromToken(token), instance);
    }
    /**
     * containsModule()
     *
     * determines if the module exists.
     * @param path the path of the module to check for.
     * @returns TRUE if the container contains the module. FALSE otherwise.
     */
    containsModule(path) {
        //return this.modules.has(path);
        const currentModule = this.parser().root(path);
        if (!this.parser().hasSubmodules(path)) {
            return this.modules.has(currentModule);
        }
        else {
            return this.module(currentModule).containsModule(this.parser().submodules(path));
        }
    }
    /**
     * createModule()
     *
     * creates a module.
     * @param modulePath the path of the module.
     * @throws DuplicateModuleException when attempting to create a duplicate module.
     * @throws InvalidModuleException when the module path cannot be parsed.
     */
    createModule(modulePath) {
        const currentModuleName = this.parser().root(modulePath);
        if (!this.containsModule(currentModuleName)) {
            this.modules.set(currentModuleName, new Container(this.moduleParser));
        }
        else {
            if (!this.parser().hasSubmodules(modulePath)) {
                throw new duplicate_module_exception_1.DuplicateModuleException(`Module '${modulePath}' already in use.`);
            }
        }
        // if there are submodules, create them
        if (this.parser().hasSubmodules(modulePath)) {
            this.module(currentModuleName).createModule(this.parser().submodules(modulePath));
            return;
        }
    }
    /**
     * get()
     *
     * gets the dependency associated with the provided token.
     * @param token the dependency to get.
     * @throws DependencyNotFoundException when the dependency cannot be found.
     * @throws CircularDependencyException when a circular dependency is detected.
     */
    get(token) {
        const depId = this.getDependencyIdFromToken(token);
        if (this.instanciationMap.has(depId)) {
            // there is a circular dependency
            throw new circular_dependency_exception_1.CircularDependencyException();
        }
        this.instanciationMap.add(depId);
        // check for instances
        if (!this.hasInstance(token)) {
            // there is no instance yet.
            // check if there is a binding
            if (this.hasBinding(token)) {
                // create an instance.
                const instance = this.bindings.get(depId)(this);
                this.instances.set(depId, instance);
            }
            else {
                // There is no instance or factory.
                this.instanciationMap.clear();
                throw new dependency_not_found_exception_1.DependencyNotFoundException(`Cannot find dependency '${depId}'`);
            }
        }
        this.instanciationMap.delete(depId);
        return this.instances.get(depId);
    }
    /**
     * has()
     *
     * has() determines whether the dependency exists in the container.
     * @param token the token of the dependency to test for.
     * @returns true if the dependency is found in the container. False otherwise.
     */
    has(token) {
        return this.hasInstance(token) || this.hasBinding(token);
    }
    /**
     * hasBinding()
     *
     * hasBinding() determines if the container has a binding for the specified dependency.
     * @param token the token of the dependnecy to check for.
     * @returns TRUE if the binding exists. FALSE otherwise.
     */
    hasBinding(token) {
        return this.bindings.has(this.getDependencyIdFromToken(token));
    }
    /**
     * hasInstance()
     *
     * hasInstance() determines if the container has an instance for the specified dependency.
     * @param token the token of the dependnecy to check for.
     * @returns TRUE if the instance exists. FALSE otherwise.
     */
    hasInstance(token) {
        return this.instances.has(this.getDependencyIdFromToken(token));
    }
    /**
     * module()
     *
     * gets a module.
     * @param path the path of the module to get.
     * @throws ModuleNotFoundException when the module cannot be found.
     * @throws InvalidModuleException when the module path cannot be parsed
     */
    module(path) {
        const currentModuleName = this.moduleParser.root(path);
        if (!this.parser().hasSubmodules(path)) {
            // the desired module is a direct submodule of the current module.
            if (this.containsModule(currentModuleName)) {
                return this.modules.get(currentModuleName);
            }
            else {
                // the domule does not exist.
                throw new module_not_found_exception_1.ModuleNotFoundException(`Cannot find Module '${path}'`);
            }
        }
        else {
            // look at the submodules
            return this.module(currentModuleName).module(this.moduleParser.submodules(path));
        }
    }
    /**
     * parser()
     *
     * gets the parser that is used by the container.
     */
    parser() {
        return this.moduleParser;
    }
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
    getDependencyIdFromToken(token) {
        return token.name;
    }
}
exports.Container = Container;
//# sourceMappingURL=container.js.map