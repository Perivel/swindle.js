import { PriorityQueueNodeInterface } from "./priority-queue-node.interface";
import { Node } from './../node/node';
/**
 * PriorityQueueNode
 *
 * PriorityQueueNode is a single node in a priority queue.
 */
export declare class PriorityQueueNode<T> extends Node<T> implements PriorityQueueNodeInterface<T> {
    private readonly _priority;
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
}
//# sourceMappingURL=priority-queue-node.d.ts.map