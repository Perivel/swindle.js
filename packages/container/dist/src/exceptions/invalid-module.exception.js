"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidModuleException = void 0;
const verdic_exception_1 = require("./verdic.exception");
/**
 * InvalidModuleException
 */
class InvalidModuleException extends verdic_exception_1.VerdicException {
    constructor(message = "Invalid Module") {
        super(message);
    }
}
exports.InvalidModuleException = InvalidModuleException;
//# sourceMappingURL=invalid-module.exception.js.map