import { PriorityQueueInterface } from "./priority-queue.interface";
import { PriorityQueueOrder } from './priority-queue-order.enum';
/**
 * PriorityQueue
 *
 * PriorityQueue is a priority queue.
 */
export declare class PriorityQueue<T> implements PriorityQueueInterface<T> {
    private _values;
    private readonly _order;
    constructor(order?: PriorityQueueOrder);
    /**
     * clear()
     *
     * clear() clears the queue.
     */
    clear(): void;
    /**
     * dequeue()
     *
     * dequeue() removes the next item in the queue.
     */
    dequeue(): T | null;
    /**
     * enqueue()
     *
     * enqueue() inserts an item into the queue.
     * @param value the value to insert.
     * @param priority the priority of this value. The lower the priority, the earlier in the queue the item will be placed.
     */
    enqueue(value: T, priority: number): void;
    /**
     * insertAscending()
     *
     * inserts the node in ascending order by priority.
     * @param node the node to insert.
     */
    private insertAscending;
    /**
     * insertDescending()
     *
     * inserts the node in Descending order by priority.
     * @param node the node to insert.
     */
    private insertDescending;
    /**
     * isEmpty()
     *
     * isEmpty() determines if the queue is empty.
     */
    isEmpty(): boolean;
    /**
     * peek()
     *
     * peek() gets the next item in the queue, but does not remove it.
     */
    peek(): T | null;
    /**
     * size()
     *
     * size() gets the number of elements in the queue.
     */
    size(): number;
    /**
     * sortAscending()
     *
     * sorts the items in the queue in ascending order by priority.
     */
    private sortAscending;
    /**
     * sortDescending()
     *
     * sorts the items in the queue in descending order by priority.
     */
    private sortDescending;
    /**
     * toArray()
     *
     * toArray() converts the queue to an array.
     */
    toArray(): Array<T>;
    /**
     * updatePriority()
     *
     * updates the priority of the first occurance of the specified value.
     * @param target The value who's priority must be updated.
     * @param newPriority The new priority to set for the target value.
     */
    updatePriority(target: T, newPriority: number): void;
}
//# sourceMappingURL=priority-queue.d.ts.map