"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const stack_node_1 = require("./stack-node");
/**
 * Stack
 *
 * Stack is a Data structure, following the FIFO principle.
 *
 */
class Stack {
    constructor() {
        this._top = null;
        this._count = 0;
    }
    /**
     * clear()
     *
     * clear() clears the stack.
     */
    clear() {
        this._top = null;
        this._count = 0;
    }
    /**
     * isEmpty()
     *
     * isEmpty() determines if the stack is empty.
     */
    isEmpty() {
        return this.size() === 0;
    }
    /**
     * peek()
     *
     * peek() gets the next value in the stack.
     */
    peek() {
        let value = null;
        if (!this.isEmpty()) {
            // get the value of the top node.
            const top = this._top;
            value = top.value();
        }
        return value;
    }
    /**
     * pop()
     *
     * pop() removes the next value in the stack.
     */
    pop() {
        let value = null;
        if (!this.isEmpty()) {
            // remove the element at the top of the stack.
            const nodeToRemove = this._top;
            this._top = nodeToRemove.next();
            this._count--;
            value = nodeToRemove.value();
        }
        return value;
    }
    /**
     * push()
     *
     * push() push pushes an item to the stack.
     * @param value The value to push.
     */
    push(value) {
        if (this.isEmpty()) {
            // set the new node as the top.
            const newNode = new stack_node_1.StackNode(value);
            this._top = newNode;
        }
        else {
            // add the new node to the top of the stack.
            const newTop = new stack_node_1.StackNode(value, this._top);
            this._top = newTop;
        }
        // increment count.
        this._count++;
    }
    /**
     * size()
     *
     * size() gets the number of items in the stack.
     */
    size() {
        return this._count;
    }
    /**
     * toArray()
     *
     * toArray() converts the stack to an array.
     */
    toArray() {
        const arr = new Array();
        let currentNode = this._top;
        while (currentNode != null) {
            arr.push(currentNode.value());
            currentNode = currentNode.next();
        }
        return arr;
    }
}
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map