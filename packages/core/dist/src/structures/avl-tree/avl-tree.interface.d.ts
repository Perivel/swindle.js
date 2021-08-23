import { TreeInterface } from './../tree/tree.interface';
export interface AvlTreeInterface<K, V> extends TreeInterface<K, V> {
    /**
     * maximum()
     *
     * gets the key of the largest element in the tree.
     */
    maximum(): K | null;
    /**
     * minimum()
     *
     * gets the key of the smallest element in the tree.
     */
    minimum(): K | null;
}
//# sourceMappingURL=avl-tree.interface.d.ts.map