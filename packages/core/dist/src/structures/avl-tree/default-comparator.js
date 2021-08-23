"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultComparator = void 0;
const DefaultComparator = (a, b) => {
    if (a > b)
        return 1;
    if (a < b)
        return -1;
    return 0;
};
exports.DefaultComparator = DefaultComparator;
//# sourceMappingURL=default-comparator.js.map