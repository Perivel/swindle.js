"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyNotFoundException = void 0;
const verdic_exception_1 = require("./verdic.exception");
/**
 * DependencyNotFoundException
 *
 * DependencyNotFoundException indicates that a dependency was not found.
 */
class DependencyNotFoundException extends verdic_exception_1.VerdicException {
    constructor(message = "Dependency not found.") {
        super(message);
    }
}
exports.DependencyNotFoundException = DependencyNotFoundException;
//# sourceMappingURL=dependency-not-found.exception.js.map