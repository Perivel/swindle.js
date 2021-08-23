import { QueueNodeInterface } from "./queue-node.interface";
import { Node } from './../node/node';
/**
 * QueueNode
 *
 * QueueNode represents a single node in a queue.
 */
export declare class QueueNode<T> extends Node<T> implements QueueNodeInterface<T> {
    private _next;
    constructor(value: T, next?: QueueNode<T> | null);
    /**
     * next()
     *
     * next() gets the next node.
     */
    next(): QueueNode<T> | null;
    /**
     * setNext()
     *
     * setNext() sets the next node value.
     * @param next the node to set as the next value.
     */
    setNext(next: QueueNode<T>): void;
}
//# sourceMappingURL=queue-node.d.ts.map