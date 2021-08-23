"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueNode = void 0;
const node_1 = require("./../node/node");
/**
 * QueueNode
 *
 * QueueNode represents a single node in a queue.
 */
class QueueNode extends node_1.Node {
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
    /**
     * setNext()
     *
     * setNext() sets the next node value.
     * @param next the node to set as the next value.
     */
    setNext(next) {
        this._next = next;
    }
}
exports.QueueNode = QueueNode;
//# sourceMappingURL=queue-node.js.map