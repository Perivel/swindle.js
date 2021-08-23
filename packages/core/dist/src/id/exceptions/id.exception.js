"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdException = void 0;
const common_module_1 = require("./../../common/common.module");
/**
 * IdException
 *
 * Indicates an error with the ID.
 */
class IdException extends common_module_1.InvalidArgumentException {
    constructor(message = "Invalid ID") {
        super(message);
    }
}
exports.IdException = IdException;
//# sourceMappingURL=id.exception.js.map