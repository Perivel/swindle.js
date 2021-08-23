"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackNode = void 0;
const node_1 = require("./../node/node");
class StackNode extends node_1.Node {
    constructor(value, next = null) {
        super(value);
        this._next = next;
    }
    /**
     * next()
     *
     * next() gets the next node.
     */
    next() {
        return this._next;
    }
}
exports.StackNode = StackNode;
//# sourceMappingURL=stack-node.js.map