import { NodeInterface } from "../node/node.interface";
export interface LinkedListNodeInterface<T> extends NodeInterface<T> {
    /**
     * next()
     *
     * next() gets the next node.
     */
    next(): LinkedListNodeInterface<T> | null;
    /**
    * setNext()
    *
    * sets the next node.
    * @param next The next node to set.
    */
    setNext(next: LinkedListNodeInterface<T> | null): void;
}
//# sourceMappingURL=linked-list-node.interface.d.ts.map