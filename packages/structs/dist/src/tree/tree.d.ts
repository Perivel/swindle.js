import { TreeInterface } from './tree.interface';
/**
 * Tree
 *
 * A generic tree.
 */
export declare abstract class Tree<K, V> implements TreeInterface<K, V> {
    /**
     * contains()
     *
     * determines if the tree contains the key.
     * @param key the key to search for.
     */
    abstract contains(key: K): boolean;
    /**
     * get()
     *
     * gets the value associated with the key.
     * @param key the key of the value to get.
     */
    abstract get(key: K): V | null;
    /**
     * insert()
     *
     * inserts a node into the tree, with the associated key.
     * @param key The key being inserted
     * @param value the value being inserted.
     */
    abstract insert(key: K, value: V | null): void;
    /**
     * isEmpty()
     *
     * determines if the tree is empty.
     */
    isEmpty(): boolean;
    /**
     * remove()
     *
     * removes the item in the tree, with the assiciated key.
     * @param key the key of the node to remove.
     */
    abstract remove(key: K): void;
    /**
     * size()
     *
     * gets the size of the tree.
     */
    abstract size(): number;
}
//# sourceMappingURL=tree.d.ts.map