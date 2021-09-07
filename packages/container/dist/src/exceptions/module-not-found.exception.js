"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleNotFoundException = void 0;
const verdic_exception_1 = require("./verdic.exception");
/**
 * ModuleNotFoundException
 */
class ModuleNotFoundException extends verdic_exception_1.VerdicException {
    constructor(message = "Module not found") {
        super(message);
    }
}
exports.ModuleNotFoundException = ModuleNotFoundException;
//# sourceMappingURL=module-not-found.exception.js.map