import { Node } from './../node/node';
import { LinkedListNodeInterface } from './linked-list-node.interface';

/**
 * LinkedListNode
 * 
 * A linked list node. 
 */

export class LinkedListNode<T> extends Node<T> implements LinkedListNodeInterface<T> {

    private _next: LinkedListNode<T>|null;

    constructor(value: T, next: LinkedListNode<T> | null = null) {
        super(value);
        this._next = next;
    }

    /**
     * next()
     *
     * next() gets the next node.
     */

    public next(): LinkedListNode<T> | null {
        return this._next;
    }

    /**
    * setNext()
    * 
    * sets the next node.
    * @param next sets the next node.
    */

    public setNext(next: LinkedListNode<T>|null): void {
        this._next = next;
    }
}