import { QueueNodeInterface } from "./queue-node.interface";
import { Node } from './../node/node';

/**
 * QueueNode
 * 
 * QueueNode represents a single node in a queue.
 */

export class QueueNode<T> extends Node<T> implements QueueNodeInterface<T> {

    private _next: QueueNode<T>|null;

    constructor(value: T, next: QueueNode<T>|null = null) {
        super(value);
        this._next = next;
    }

    /**
     * next()
     * 
     * next() gets the next node.
     */

    public next(): QueueNode<T>|null {
        return this._next;
    }

    /**
     * setNext()
     * 
     * setNext() sets the next node value.
     * @param next the node to set as the next value.
     */

    public setNext(next: QueueNode<T>): void {
        this._next = next;
    }
}