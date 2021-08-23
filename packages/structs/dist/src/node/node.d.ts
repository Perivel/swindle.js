import { NodeInterface } from "./node.interface";
/**
 * Node
 *
 * A generic node.
 */
export declare class Node<T> implements NodeInterface<T> {
    private readonly _value;
    constructor(value: T);
    /**
     * value()
     *
     * gets the value of the node.
     */
    value(): T;
}
//# sourceMappingURL=node.d.ts.map