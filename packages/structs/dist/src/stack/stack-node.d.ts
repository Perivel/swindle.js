import { StackNodeInterface } from "./stack-node.interface";
import { Node } from './../node/node';
export declare class StackNode<T> extends Node<T> implements StackNodeInterface<T> {
    private readonly _next;
    constructor(value: T, next?: StackNode<T> | null);
    /**
     * next()
     *
     * next() gets the next node.
     */
    next(): StackNode<T> | null;
}
//# sourceMappingURL=stack-node.d.ts.map