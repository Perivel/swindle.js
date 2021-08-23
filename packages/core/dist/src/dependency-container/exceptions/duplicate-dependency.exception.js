"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateDependencyException = void 0;
const dependency_container_exception_1 = require("./dependency-container.exception");
/**
 * DuplicateDependencyException
 *
 * DuplicateDependencyException indicates that there is a duplicate dependency in the container.
 */
class DuplicateDependencyException extends dependency_container_exception_1.DependencyContainerException {
    constructor(message = "Duplicate Dependency") {
        super(message);
    }
}
exports.DuplicateDependencyException = DuplicateDependencyException;
