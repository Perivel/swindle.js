"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateModuleException = void 0;
const verdic_exception_1 = require("./verdic.exception");
/**
 * DuplicateModuleException
 */
class DuplicateModuleException extends verdic_exception_1.VerdicException {
    constructor(message = "Duplicate Module") {
        super(message);
    }
}
exports.DuplicateModuleException = DuplicateModuleException;
//# sourceMappingURL=duplicate-module.exception.js.map