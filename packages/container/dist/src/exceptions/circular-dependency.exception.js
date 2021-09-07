"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularDependencyException = void 0;
const verdic_exception_1 = require("./verdic.exception");
/**
 * CircularDependencyException
 */
class CircularDependencyException extends verdic_exception_1.VerdicException {
    constructor(message = "Circular Dependency Detected") {
        super(message);
    }
}
exports.CircularDependencyException = CircularDependencyException;
//# sourceMappingURL=circular-dependency.exception.js.map