"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyNotFoundException = void 0;
const dependency_container_exception_1 = require("./dependency-container.exception");
/**
 * DependencyNotFoundException
 *
 * DependencyNotFoundException indicates that a dependency was not found.
 */
class DependencyNotFoundException extends dependency_container_exception_1.DependencyContainerException {
    constructor(message = "Dependency not found.") {
        super(message);
    }
}
exports.DependencyNotFoundException = DependencyNotFoundException;
