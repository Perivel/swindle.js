import { PriorityQueueNodeInterface } from "./priority-queue-node.interface";
import { Node } from './../node/node';
/**
 * PriorityQueueNode
 * 
 * PriorityQueueNode is a single node in a priority queue.
 */

export class PriorityQueueNode<T> extends Node<T> implements PriorityQueueNodeInterface<T> {

    private _priority: number;
    private readonly _next: PriorityQueueNode<T>|null;

    constructor(value: T, priority: number = 1, next: PriorityQueueNode<T>|null = null) {
        super(value);
        this._priority = priority;
        this._next = next;
    }

    /**
     * next()
     * 
     * next() gets the next node.
     */

    public next(): PriorityQueueNodeInterface<T>|null {
        return this._next;
    }

    /**
     * priority()
     * 
     * priority() gets the priority of the node.
     */

    public priority(): number {
        return this._priority;
    }

    /**
     * setPriority()
     * 
     * sets the priority of the node.
     * @param newPriority 
     */
    
    public setPriority(newPriority: number): void {
        this._priority = newPriority;
    }
}