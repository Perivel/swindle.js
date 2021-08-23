import { NodeInterface } from "./node.interface";

/**
 * Node
 * 
 * A generic node.
 */

export class Node<T> implements NodeInterface<T> {

    private readonly _value: T;

    constructor(value: T) {
        this._value = value;
    }

    /**
     * value()
     * 
     * gets the value of the node.
     */

    public value(): T {
        return this._value;
    }
}