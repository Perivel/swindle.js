"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueueNode = void 0;
const node_1 = require("./../node/node");
/**
 * PriorityQueueNode
 *
 * PriorityQueueNode is a single node in a priority queue.
 */
class PriorityQueueNode extends node_1.Node {
    constructor(value, priority = 1, next = null) {
        super(value);
        this._priority = priority;
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
     * priority()
     *
     * priority() gets the priority of the node.
     */
    priority() {
        return this._priority;
    }
    /**
     * setPriority()
     *
     * sets the priority of the node.
     * @param newPriority
     */
    setPriority(newPriority) {
        this._priority = newPriority;
    }
}
exports.PriorityQueueNode = PriorityQueueNode;
//# sourceMappingURL=priority-queue-node.js.map