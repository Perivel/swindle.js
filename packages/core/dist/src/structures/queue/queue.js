"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
const queue_node_1 = require("./queue-node");
/**
 * Queue
 *
 * Queue is a data structure that follows the LIFO principle.
 *
 */
class Queue {
    constructor() {
        this._front = null;
        this._back = null;
        this._size = 0;
    }
    /**
     * clear()
     *
     * clear() clears the queue.
     */
    clear() {
        this._front = null;
        this._back = null;
        this._size = 0;
    }
    /**
     * dequeue()
     *
     * dequeue() removes the next item in the queue.
     * O(1)
     */
    dequeue() {
        let value = null;
        if (!this.isEmpty()) {
            const front = this._front;
            value = front === null || front === void 0 ? void 0 : front.value();
            this._front = front.next() ? front === null || front === void 0 ? void 0 : front.next() : null;
            this._size--;
            this._back = this.isEmpty() ? null : this._back;
        }
        return value;
    }
    /**
     * enqueue()
     *
     * enqueue() inserts an item into the queue.
     * O(1)
     * @param value the value to insert.
     */
    enqueue(value) {
        if (this.isEmpty()) {
            // add to the front
            const nodeToAdd = new queue_node_1.QueueNode(value, null);
            this._front = nodeToAdd;
            this._back = nodeToAdd;
        }
        else {
            // add to the back
            const currentBack = this._back;
            const newBack = new queue_node_1.QueueNode(value, null);
            currentBack === null || currentBack === void 0 ? void 0 : currentBack.setNext(newBack);
            this._back = newBack;
        }
        this._size++;
    }
    /**
     * isEmpty()
     *
     * isEmpty() determines if the queue is empty.
     */
    isEmpty() {
        return this.size() === 0;
    }
    /**
     * peek()
     *
     * peek() gets the next item in the queue, but does not remove it.
     */
    peek() {
        if (!this.isEmpty()) {
            return this._front.value();
        }
        else {
            return null;
        }
    }
    /**
     * size()
     *
     * size() gets the number of elements in the queue.
     */
    size() {
        return this._size;
    }
    /**
     * toArray()
     *
     * toArray() converts the queue to an array.
     */
    toArray() {
        const arr = new Array();
        if (!this.isEmpty()) {
            // fill the array
            return this.fillArray(this._front, arr);
        }
        else {
            // the queue is empty.
            return arr;
        }
    }
    // ==========================
    // Help
    // ==========================
    /**
     * fillArray()
     *
     * fillArray() populates the array recursively.
     * @param node the first node.
     * @param array the array to fill.
     * @returns the filled array.
     */
    fillArray(node, array) {
        array.push(node.value());
        if (node.next() === null) {
            // there are no more values to add.
            return array;
        }
        else {
            // there are more values to add.
            return this.fillArray(node.next(), array);
        }
    }
}
exports.Queue = Queue;
//# sourceMappingURL=queue.js.map