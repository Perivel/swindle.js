import { QueueInterface } from "./queue.interface";
/**
 * Queue
 *
 * Queue is a data structure that follows the LIFO principle.
 *
 */
export declare class Queue<T> implements QueueInterface<T> {
    private _front;
    private _back;
    private _size;
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
     * O(1)
     */
    dequeue(): T | null;
    /**
     * enqueue()
     *
     * enqueue() inserts an item into the queue.
     * O(1)
     * @param value the value to insert.
     */
    enqueue(value: T): void;
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
    /**
     * fillArray()
     *
     * fillArray() populates the array recursively.
     * @param node the first node.
     * @param array the array to fill.
     * @returns the filled array.
     */
    private fillArray;
}
//# sourceMappingURL=queue.d.ts.map