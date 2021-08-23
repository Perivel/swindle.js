import { StackNodeInterface } from "./stack-node.interface";
import { Node } from './../node/node';


export class StackNode<T> extends Node<T> implements StackNodeInterface<T> {
    private readonly _next: StackNode<T> | null;

    constructor(value: T, next: StackNode<T> | null = null) {
        super(value);
        this._next = next;
    }

    /**
     * next()
     * 
     * next() gets the next node.
     */

    public next(): StackNode<T> | null {
        return this._next;
    }
}