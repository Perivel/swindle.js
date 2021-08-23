"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListNode = void 0;
const node_1 = require("./../node/node");
/**
 * LinkedListNode
 *
 * A linked list node.
 */
class LinkedListNode extends node_1.Node {
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
    * sets the next node.
    * @param next sets the next node.
    */
    setNext(next) {
        this._next = next;
    }
}
exports.LinkedListNode = LinkedListNode;
//# sourceMappingURL=linked-list-node.js.map