"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
const priority_queue_node_1 = require("./priority-queue-node");
/**
 * PriorityQueue
 *
 * PriorityQueue is a priority queue.
 */
class PriorityQueue {
    constructor() {
        this._values = new Array();
    }
    /**
     * clear()
     *
     * clear() clears the queue.
     */
    clear() {
        this._values = new Array();
    }
    /**
     * dequeue()
     *
     * dequeue() removes the next item in the queue.
     */
    dequeue() {
        let value = null;
        if (!this.isEmpty()) {
            value = this._values.shift().value();
        }
        return value;
    }
    /**
     * enqueue()
     *
     * enqueue() inserts an item into the queue.
     * @param value the value to insert.
     * @param priority the priority of this value. The lower the priority, the earlier in the queue the item will be placed.
     */
    enqueue(value, priority) {
        const node = new priority_queue_node_1.PriorityQueueNode(value, priority);
        const size = this.size();
        let contains = false;
        let i = 0;
        for (i = 0; i < size; i++) {
            if (this._values[i].priority() > node.priority()) {
                this._values.splice(i, 0, node);
                contains = true;
                break;
            }
        }
        if (!contains) {
            this._values.push(node);
        }
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
        let value = null;
        if (!this.isEmpty()) {
            value = this._values[0].value();
        }
        return value;
    }
    /**
     * size()
     *
     * size() gets the number of elements in the queue.
     */
    size() {
        return this._values.length;
    }
    /**
     * toArray()
     *
     * toArray() converts the queue to an array.
     */
    toArray() {
        const arr = new Array();
        this._values.forEach(node => arr.push(node.value()));
        return arr;
    }
}
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=priority-queue.js.map