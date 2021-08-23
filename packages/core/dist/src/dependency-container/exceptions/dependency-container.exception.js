"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyContainerException = void 0;
const common_module_1 = require("./../../common/common.module");
/**
 * DependencyContainerException
 *
 * A generic dependency injection container exception.
 */
class DependencyContainerException extends common_module_1.BaseException {
    constructor(message = "Dependency Container Error") {
        super(message);
    }
}
exports.DependencyContainerException = DependencyContainerException;
