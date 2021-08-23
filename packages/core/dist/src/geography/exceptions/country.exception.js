"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryException = void 0;
const common_module_1 = require("../../common/common.module");
class CountryException extends common_module_1.BaseException {
    constructor(message = "Country Error") {
        super(message);
    }
}
exports.CountryException = CountryException;
//# sourceMappingURL=country.exception.js.map