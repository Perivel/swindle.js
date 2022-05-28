import { PriorityQueueNode } from "./priority-queue-node";
import { PriorityQueueInterface } from "./priority-queue.interface";
import { PriorityQueueOrder } from './priority-queue-order.enum';

/**
 * PriorityQueue
 * 
 * PriorityQueue is a priority queue.
 */

export class PriorityQueue<T> implements PriorityQueueInterface<T> {

    private _values: Array<PriorityQueueNode<T>>;
    private readonly _order: PriorityQueueOrder;

    constructor(order: PriorityQueueOrder = PriorityQueueOrder.Ascending) {
        this._values = new Array<PriorityQueueNode<T>>();
        this._order = order;
    }

    /**
     * clear()
     * 
     * clear() clears the queue.
     */

    public clear(): void {
        this._values = new Array<PriorityQueueNode<T>>();
    }

    /**
     * dequeue()
     * 
     * dequeue() removes the next item in the queue.
     */

    public dequeue(): T | null {
        let value: T | null = null;

        if (!this.isEmpty()) {
            value = this._values.shift()!.value();
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

    public enqueue(value: T, priority: number): void {
        const node = new PriorityQueueNode<T>(value, priority);

        if (this._order === PriorityQueueOrder.Ascending) {
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

    private insertAscending(node: PriorityQueueNode<T>): void {
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

    private insertDescending(node: PriorityQueueNode<T>): void {
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

    public isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * peek()
     * 
     * peek() gets the next item in the queue, but does not remove it.
     */

    public peek(): T | null {
        let value: T | null = null;

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
    public size(): number {
        return this._values.length;
    }

    /**
     * sortAscending()
     * 
     * sorts the items in the queue in ascending order by priority.
     */

    private sortAscending(): void {
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

    private sortDescending(): void {
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

    public toArray(): Array<T> {
        const arr = new Array<T>();
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

    public updatePriority(target: T, newPriority: number): void {
        // find the node to update
        const nodeToUpdate = this._values.find((suspect, index) => {
            let isTarget = false;
            const suspectValue = suspect.value() as any;

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
        nodeToUpdate?.setPriority(newPriority);

        // reorder the queue based on the new priority.

        if (this._order === PriorityQueueOrder.Ascending) {
            this.sortAscending();
        }
        else {
            this.sortDescending();
        }
    }
}