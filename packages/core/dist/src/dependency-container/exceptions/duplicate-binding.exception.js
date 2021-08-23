"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateBindingException = void 0;
const dependency_container_exception_1 = require("./dependency-container.exception");
class DuplicateBindingException extends dependency_container_exception_1.DependencyContainerException {
    constructor(message = "Duplicate Binding") {
        super(message);
    }
}
exports.DuplicateBindingException = DuplicateBindingException;
