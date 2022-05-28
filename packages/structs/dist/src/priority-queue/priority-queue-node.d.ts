import { PriorityQueueNodeInterface } from "./priority-queue-node.interface";
import { Node } from './../node/node';
/**
 * PriorityQueueNode
 *
 * PriorityQueueNode is a single node in a priority queue.
 */
export declare class PriorityQueueNode<T> extends Node<T> implements PriorityQueueNodeInterface<T> {
    private _priority;
    private readonly _next;
    constructor(value: T, priority?: number, next?: PriorityQueueNode<T> | null);
    /**
     * next()
     *
     * next() gets the next node.
     */
    next(): PriorityQueueNodeInterface<T> | null;
    /**
     * priority()
     *
     * priority() gets the priority of the node.
     */
    priority(): number;
    /**
     * setPriority()
     *
     * sets the priority of the node.
     * @param newPriority
     */
    setPriority(newPriority: number): void;
}
//# sourceMappingURL=priority-queue-node.d.ts.map