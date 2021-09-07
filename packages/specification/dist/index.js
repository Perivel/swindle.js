"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrNotSpecification = exports.OrSpecification = exports.AndNotSpecification = exports.AndSpecification = exports.CompositeSpecification = void 0;
var composite_specification_1 = require("./src/specification/composite-specification");
Object.defineProperty(exports, "CompositeSpecification", { enumerable: true, get: function () { return composite_specification_1.CompositeSpecification; } });
var and_specification_1 = require("./src/specification/and-specification");
Object.defineProperty(exports, "AndSpecification", { enumerable: true, get: function () { return and_specification_1.AndSpecification; } });
var and_not_specification_1 = require("./src/specification/and-not-specification");
Object.defineProperty(exports, "AndNotSpecification", { enumerable: true, get: function () { return and_not_specification_1.AndNotSpecification; } });
var or_specification_1 = require("./src/specification/or-specification");
Object.defineProperty(exports, "OrSpecification", { enumerable: true, get: function () { return or_specification_1.OrSpecification; } });
var or_not_specification_1 = require("./src/specification/or-not-specification");
Object.defineProperty(exports, "OrNotSpecification", { enumerable: true, get: function () { return or_not_specification_1.OrNotSpecification; } });
//# sourceMappingURL=index.js.map