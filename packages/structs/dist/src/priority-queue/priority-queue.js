"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
const priority_queue_node_1 = require("./priority-queue-node");
const priority_queue_order_enum_1 = require("./priority-queue-order.enum");
/**
 * PriorityQueue
 *
 * PriorityQueue is a priority queue.
 */
class PriorityQueue {
    constructor(order = priority_queue_order_enum_1.PriorityQueueOrder.Ascending) {
        this._values = new Array();
        this._order = order;
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
        if (this._order === priority_queue_order_enum_1.PriorityQueueOrder.Ascending) {
            this.insertAscending(node);
        }
        else {
            this.insertDescending(node);
        }
    }
    /**
     * insertAscending()
     *
     * inserts the node in ascending order by priority.
     * @param node the node to insert.
     */
    insertAscending(node) {
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
     * insertDescending()
     *
     * inserts the node in Descending order by priority.
     * @param node the node to insert.
     */
    insertDescending(node) {
        const size = this.size();
        let contains = false;
        let i = 0;
        for (i = 0; i < size; i++) {
            if (this._values[i].priority() < node.priority()) {
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
     * sortAscending()
     *
     * sorts the items in the queue in ascending order by priority.
     */
    sortAscending() {
        const size = this.size();
        let i = 0;
        for (i = 0; i < size; i++) {
            if (this._values[i].priority() > this._values[i + 1].priority()) {
                // swap the two nodes.
                const temp = this._values[i];
                this._values[i] = this._values[i + 1];
                this._values[i + 1] = temp;
            }
        }
    }
    /**
     * sortDescending()
     *
     * sorts the items in the queue in descending order by priority.
     */
    sortDescending() {
        const size = this.size();
        let i = 0;
        for (i = 0; i < size; i++) {
            if (this._values[i].priority() < this._values[i + 1].priority()) {
                // swap the two nodes.
                const temp = this._values[i];
                this._values[i] = this._values[i + 1];
                this._values[i + 1] = temp;
            }
        }
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
    /**
     * updatePriority()
     *
     * updates the priority of the first occurance of the specified value.
     * @param target The value who's priority must be updated.
     * @param newPriority The new priority to set for the target value.
     */
    updatePriority(target, newPriority) {
        // find the node to update
        const nodeToUpdate = this._values.find((suspect, index) => {
            let isTarget = false;
            const suspectValue = suspect.value();
            if (typeof suspectValue.equals === 'function') {
                // the value implements the Equatable interface. So, we can use that for comparison.
                isTarget = suspectValue.equals(target);
            }
            else {
                // the value does not implement the Equatable interface. So, we have to fallback to simple equality.
                isTarget = suspectValue === target;
            }
            return isTarget;
        });
        // update the priority
        nodeToUpdate === null || nodeToUpdate === void 0 ? void 0 : nodeToUpdate.setPriority(newPriority);
        // reorder the queue based on the new priority.
        if (this._order === priority_queue_order_enum_1.PriorityQueueOrder.Ascending) {
            this.sortAscending();
        }
        else {
            this.sortDescending();
        }
    }
}
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=priority-queue.js.map