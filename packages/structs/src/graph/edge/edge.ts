import { EdgeInterface } from './edge.interface';

/**
 * Edge
 * 
 * An Edge.
 */

export class Edge<T> implements EdgeInterface<T> {

    private readonly _value: T;
    private readonly _weight: number;

    constructor(value: T, weight: number = 0.0) {
        this._value = value;
        this._weight = weight;
    }

    /**
     * value()
     * 
     * the value the edge is pointing to.
     */

    public value(): T {
        return this._value;
    }

    /**
     * wight()
     * 
     * the weight of the edge.
     */

    public weight(): number {
        return this._weight;
    }
}