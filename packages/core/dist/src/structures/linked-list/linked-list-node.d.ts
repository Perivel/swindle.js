import { Node } from './../node/node';
import { LinkedListNodeInterface } from './linked-list-node.interface';
/**
 * LinkedListNode
 *
 * A linked list node.
 */
export declare class LinkedListNode<T> extends Node<T> implements LinkedListNodeInterface<T> {
    private _next;
    constructor(value: T, next?: LinkedListNode<T> | null);
    /**
     * next()
     *
     * next() gets the next node.
     */
    next(): LinkedListNode<T> | null;
    /**
    * setNext()
    *
    * sets the next node.
    * @param next sets the next node.
    */
    setNext(next: LinkedListNode<T> | null): void;
}
//# sourceMappingURL=linked-list-node.d.ts.map