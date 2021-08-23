import { Tree } from './../tree/Tree';
import { AvlTreeInterface } from './avl-tree.interface';
import { Comparator } from './../../common/common.module';
/**
 * AvlTree
 *
 * An AVL Tree is a self-balancing binary search tree.
 */
export declare class AvlTree<K, V> extends Tree<K, V> implements AvlTreeInterface<K, V> {
    private root;
    private treeSize;
    private readonly compare;
    constructor(compareFn?: Comparator<K>);
    /**
     * FromArray()
     *
     * creates an AvlTree from an arraay.
     * @param arr the array to convert.
     * @returns an AvlTree instance containsing the array values.
     */
    static FromArray<T>(arr: Array<T>): AvlTree<number, T>;
    /**
     * FromMap()
     *
     * creates an AvlTree instance from a Map.
     * @param map the map to create the free from
     * @param compareFn the comparator function to use.
     * @returns
     */
    static FromMap<K, V>(map: Map<K, V>, compareFn: Comparator<K>): AvlTree<K, V>;
    /**
     * contains()
     *
     * determines if the tree contains the key.
     * @param key the key to search for.
     */
    contains(key: K): boolean;
    /**
     * get()
     *
     * gets the value associated with the key.
     * @param key the key of the value to get.
     */
    get(key: K): V | null;
    /**
     * insert()
     *
     * inserts a node into the tree, with the associated key.
     * @param key The key being inserted
     * @param value the value being inserted.
     */
    insert(key: K, value?: V | null): void;
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
    /**
     * remove()
     *
     * removes the item in the tree, with the assiciated key.
     * @param key the key of the node to remove.
     */
    remove(key: K): void;
    /**
     * size()
     *
     * gets the size of the tree.
     */
    size(): number;
    /**
     * getnode()
     *
     * gets the node with the specified key.
     * @param key the key to search for.
     * @param root The root of the tree to search
     * @returns The node with the specified key, or null if it is not found.
     */
    private getNode;
    /**
     * insertKeyValuePair()
     *
     * inserts a node into the tree, given a key/value pair.
     * @param key the key to insert
     * @param value the value being inserted.
     * @param root
     */
    private insertKeyValuePair;
    /**
     * getBalanceState()
     *
     * gets the balance state of a specified tree, indicating if either its left or right sub-tree is unbalanced.
     * @param root the node to get the difference from
     * @returns The node's balance state.
     */
    private getBalanceState;
    /**
     * getMaximumValueNode()
     *
     * gets the node with the largest key in the provided tree node.
     * @param root the root of the tree to search.
     * @returns the node with the largest key in the tree.
     */
    private getMaximumValueNode;
    /**
     * getMinimumValueNode()
     *
     * gets the node with the smallest key in the provided tree node.
     * @param root the root of the tree to search.
     * @returns the node with the smallest key in the tree.
     */
    private getMinimumValueNode;
    /**
     * removeNode()
     *
     * removes the node with the specified key from the tree.
     * @param key the key of the node to remove
     * @param root the root of the tree to search
     * @returns the root of the new tree with the node removed
     */
    private removeNode;
}
//# sourceMappingURL=avl-tree.d.ts.map