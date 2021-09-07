"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateDependencyException = void 0;
const verdic_exception_1 = require("./verdic.exception");
/**
 * DuplicateDependencyException
 *
 * DuplicateDependencyException indicates that there is a duplicate dependency in the container.
 */
class DuplicateDependencyException extends verdic_exception_1.VerdicException {
    constructor(message = "Duplicate Dependency") {
        super(message);
    }
}
exports.DuplicateDependencyException = DuplicateDependencyException;
//# sourceMappingURL=duplicate-dependency.exception.js.map