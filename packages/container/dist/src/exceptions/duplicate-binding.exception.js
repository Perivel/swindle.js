"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateBindingException = void 0;
const verdic_exception_1 = require("./verdic.exception");
/**
 * DuplicateBindingException
 *
 * An error indicating a duplicate binding.
 */
class DuplicateBindingException extends verdic_exception_1.VerdicException {
    constructor(message = "Duplicate Binding") {
        super(message);
    }
}
exports.DuplicateBindingException = DuplicateBindingException;
//# sourceMappingURL=duplicate-binding.exception.js.map