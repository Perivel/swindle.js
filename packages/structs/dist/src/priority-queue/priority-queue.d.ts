import { PriorityQueueInterface } from "./priority-queue.interface";
/**
 * PriorityQueue
 *
 * PriorityQueue is a priority queue.
 */
export declare class PriorityQueue<T> implements PriorityQueueInterface<T> {
    private _values;
    constructor();
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
     * toArray()
     *
     * toArray() converts the queue to an array.
     */
    toArray(): Array<T>;
}
//# sourceMappingURL=priority-queue.d.ts.map