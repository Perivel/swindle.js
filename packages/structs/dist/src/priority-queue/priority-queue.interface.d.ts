/**
 * PriorityQueueInterface
 *
 * PriorityQueueInterface specifies the operations of a priority queue.
 */
export interface PriorityQueueInterface<T> {
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
     * @param priority the priority of this value.
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
    /**
     * updatePriority()
     *
     * updates the priority of the first occurance of the specified value.
     * @param target The value who's priority must be updated.
     * @param newPriority The new priority to set for the target value.
     */
    updatePriority(target: T, newPriority: number): void;
}
//# sourceMappingURL=priority-queue.interface.d.ts.map