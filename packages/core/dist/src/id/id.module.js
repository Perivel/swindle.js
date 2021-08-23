"use strict";
// Defines the API for the Id module.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUID = exports.Id = void 0;
var id_1 = require("./id/id");
Object.defineProperty(exports, "Id", { enumerable: true, get: function () { return id_1.Id; } });
var uuid_1 = require("./uuid/uuid");
Object.defineProperty(exports, "UUID", { enumerable: true, get: function () { return uuid_1.UUID; } });
__exportStar(require("./exceptions/exceptions.well"), exports);
//# sourceMappingURL=id.module.js.map