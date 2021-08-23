import { NodeInterface } from "../node/node.interface";
/**
 * Node
 *
 * Node represents a generic data container.
 */
export interface StackNodeInterface<T> extends NodeInterface<T> {
    /**
     * next()
     *
     * next() gets the next node.
     */
    next(): StackNodeInterface<T> | null;
}
//# sourceMappingURL=stack-node.interface.d.ts.map