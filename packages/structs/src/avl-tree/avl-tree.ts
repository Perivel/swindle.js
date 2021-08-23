import { Tree } from './../tree/Tree';
import { DefaultComparator } from './default-comparator';
import { TreeNode } from './../tree-node/tree-node';
import { AvlTreeInterface } from './avl-tree.interface';
import { TreeBalanceState } from './../tree/tree-balance-state.enum';
import { Comparator } from '@swindle/core';

/**
 * AvlTree
 * 
 * An AVL Tree is a self-balancing binary search tree.
 */

export class AvlTree<K, V> extends Tree<K, V> implements AvlTreeInterface<K, V> {
    private root: TreeNode<K, V> | null;
    private treeSize: number;
    private readonly compare: Comparator<K>;

    constructor(compareFn: Comparator<K> = DefaultComparator) {
        super();
        this.root = null;
        this.treeSize = 0;
        this.compare = compareFn;
    }

    /**
     * FromArray()
     * 
     * creates an AvlTree from an arraay.
     * @param arr the array to convert.
     * @returns an AvlTree instance containsing the array values.
     */

    public static FromArray<T>(arr: Array<T>): AvlTree<number, T> {
        const tree = new AvlTree<number, T>((a: number, b: number): number => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });

        arr.forEach((value, index) => {
            tree.insert(index, value);
        });

        return tree;
    }

    /**
     * FromMap()
     * 
     * creates an AvlTree instance from a Map.
     * @param map the map to create the free from
     * @param compareFn the comparator function to use.
     * @returns 
     */
    public static FromMap<K, V>(map: Map<K, V>, compareFn: Comparator<K>): AvlTree<K, V> {
        const tree = new AvlTree<K, V>(compareFn);
        map.forEach((value, key) => {
            tree.insert(key, value);
        });
        
        return tree;
    }

    /**
     * contains()
     * 
     * determines if the tree contains the key.
     * @param key the key to search for.
     */

    public contains(key: K): boolean {

        if (this.root) {
            return !!this.getNode(key, this.root);
        }
        else {
            return false;
        }
    }

    /**
     * get()
     * 
     * gets the value associated with the key.
     * @param key the key of the value to get.
     */

    public get(key: K): V | null {
        let result: V | null = null;

        if (this.root) {
            const node = this.getNode(key, this.root);
            result = node ? node.value() : null;
        }

        return result;
    }

    /**
     * insert()
     * 
     * inserts a node into the tree, with the associated key.
     * @param key The key being inserted
     * @param value the value being inserted.
     */

    public insert(key: K, value: V|null = null): void {
        this.root = this.insertKeyValuePair(key, value, this.root);
        this.treeSize++;
    }

    /**
     * maximum()
     * 
     * gets the key of the largest element in the tree.
     */

    public maximum(): K | null {
        if (!this.root) {
            return null;
        }

        return this.getMaximumValueNode(this.root).key();
    }

    /**
     * minimum()
     *
     * gets the key of the smallest element in the tree.
     */

    public minimum(): K | null {
        if (!this.root) {
            return null;
        }
        return this.getMinimumValueNode(this.root).key();
    }

    /**
     * remove()
     * 
     * removes the item in the tree, with the assiciated key. 
     * @param key the key of the node to remove.
     */

    public remove(key: K): void {
        this.root = this.removeNode(key, this.root);
        this.treeSize--;
    }

    /**
     * size()
     * 
     * gets the size of the tree.
     */

    public size(): number {
        return this.treeSize;
    }

    // Helpers

    /**
     * getnode()
     * 
     * gets the node with the specified key.
     * @param key the key to search for.
     * @param root The root of the tree to search
     * @returns The node with the specified key, or null if it is not found.
     */

    private getNode(key: K, root: TreeNode<K, V>): TreeNode<K, V> | null {
        const comparisonResult = this.compare(key, root.key());

        if (comparisonResult === 0) {
            // the root is what we are looking for.
            return root;
        }
        else if (comparisonResult < 0) {
            return root.hasLeft() ? this.getNode(key, root.left()!) : null;
        }
        else {
            return root.hasRight() ? this.getNode(key, root.right()!) : null;
        }
    }

    /**
     * insertKeyValuePair()
     * 
     * inserts a node into the tree, given a key/value pair.
     * @param key the key to insert
     * @param value the value being inserted.
     * @param root 
     */

    private insertKeyValuePair(key: K, value: V|null = null, root: TreeNode<K, V> | null = null): TreeNode<K, V> {
        if (!this.root) {
            return new TreeNode<K, V>(key, value);
        }

        let newRoot = root;
        const comparisonResult = this.compare(key, root?.key()!);

        if (comparisonResult < 0) {
            newRoot = new TreeNode<K, V>(root!.key()!, root!.value()!, this.insertKeyValuePair(key, value, root!.left()!), root!.right()!);
        }
        else if (comparisonResult > 0) {
            newRoot = new TreeNode<K, V>(root!.key()!, root!.value()!, root!.left(), this.insertKeyValuePair(key, value, root!.right()!));
        }
        else {
            // duplicate insert.
            this.treeSize--;
            return root!;
        }

        // rebalance the tree.
        const balanceState = this.getBalanceState(newRoot);

        if (balanceState === TreeBalanceState.UNBALANCED_LEFT) {
            if (this.compare(key, newRoot.left()!.key()) < 0) {
                // left left case
                newRoot = newRoot.rotateRight();
            }
            else {
                // left right case.
                newRoot = new TreeNode<K, V>(newRoot.key(), newRoot.value(), newRoot.left()!.rotateLeft(), newRoot.right());
                newRoot = newRoot.rotateRight();
            }
        }
        else if (balanceState === TreeBalanceState.UNBALANCED_RIGHT) {
            if (this.compare(key, newRoot.right()!.key()) > 0) {
                // right right case.
                newRoot = newRoot.rotateLeft();
            }
            else {
                // right left case.
                newRoot = new TreeNode<K, V>(newRoot.key(), newRoot.value(), newRoot.left(), newRoot.right()!.rotateRight());
                newRoot = newRoot.rotateLeft();
            }
        }

        return newRoot;
    }

    /**
     * getBalanceState()
     * 
     * gets the balance state of a specified tree, indicating if either its left or right sub-tree is unbalanced.
     * @param root the node to get the difference from
     * @returns The node's balance state.
     */

    private getBalanceState(root: TreeNode<K, V>): TreeBalanceState {
        const heightDiff = root.leftHeight() - root.rightHeight();

        switch (heightDiff) {
            case -2:
                return TreeBalanceState.UNBALANCED_RIGHT;
            case -1:
                return TreeBalanceState.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return TreeBalanceState.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return TreeBalanceState.UNBALANCED_LEFT;
            default:
                return TreeBalanceState.BALANCED;
        }
    }

    /**
     * getMaximumValueNode()
     *
     * gets the node with the largest key in the provided tree node.
     * @param root the root of the tree to search.
     * @returns the node with the largest key in the tree.
     */

    private getMaximumValueNode(root: TreeNode<K, V>): TreeNode<K, V> {
        if (root.hasRight()) {
            return this.getMaximumValueNode(root.right()!);
        }
        else {
            return root;
        }
    }

    /**
     * getMinimumValueNode()
     * 
     * gets the node with the smallest key in the provided tree node.
     * @param root the root of the tree to search.
     * @returns the node with the smallest key in the tree.
     */

    private getMinimumValueNode(root: TreeNode<K, V>): TreeNode<K, V> {
        if (root.hasLeft()) {
            return this.getMinimumValueNode(root.left()!);
        }
        else {
            return root;
        }
    }

    /**
     * removeNode()
     * 
     * removes the node with the specified key from the tree.
     * @param key the key of the node to remove
     * @param root the root of the tree to search
     * @returns the root of the new tree with the node removed
     */

    private removeNode(key: K, root: TreeNode<K, V>|null): TreeNode<K, V> | null {
        if (!root) {
            this.treeSize++;
            return root;
        }

        let newRoot: TreeNode<K, V> | null = root;
        const comparisonResult = this.compare(key, newRoot.key());

        if (comparisonResult < 0) {
            // key to delete is in the left tree.
            newRoot = new TreeNode<K, V>(newRoot.key(), newRoot.value(), this.removeNode(key, newRoot.left()!), newRoot.right());
        }
        else if (comparisonResult > 0) {
            // key to delete is in the right subtree
            newRoot = new TreeNode<K, V>(newRoot.key(), newRoot.value(), newRoot.left(), this.removeNode(key, newRoot.right()!));
        }
        else {
            // the root is the node to be deleted.
            if (!newRoot.hasLeft() && !newRoot.hasRight()) {
                newRoot = null;
            }
            else if (!newRoot.hasLeft() && newRoot.hasRight()) {
                newRoot = newRoot.right();
            }
            else if (newRoot.hasLeft() && !newRoot.hasRight()) {
                newRoot = newRoot.left();
            }
            else {
                // root has two children. So, we get the in-order successor.
                const successor = this.getMinimumValueNode(newRoot.right()!);
                newRoot = new TreeNode<K, V>(successor.key(), successor.value(), newRoot.left(), this.removeNode(successor.key(), newRoot.right()!));
            }
        }

        if (!newRoot) {
            return newRoot;
        }

        // rebalance the tree.
        const balanceState = this.getBalanceState(newRoot);

        if (balanceState === TreeBalanceState.UNBALANCED_LEFT) {
            // left left case
            if (
                (this.getBalanceState(newRoot.left()!) === TreeBalanceState.BALANCED) ||
                (this.getBalanceState(newRoot.left()!) === TreeBalanceState.SLIGHTLY_UNBALANCED_LEFT)
            ) {
                newRoot = newRoot.rotateRight();
            }
            else {
                // left right case
                newRoot = new TreeNode(newRoot.key(), newRoot.value(), newRoot.left()!.rotateLeft(), newRoot.right());
                newRoot = newRoot.rotateRight();
            }
        }

        if (balanceState === TreeBalanceState.UNBALANCED_RIGHT) {
            // right right  case
            if (
                (this.getBalanceState(newRoot.right()!) === TreeBalanceState.BALANCED) ||
                (this.getBalanceState(newRoot.right()!) === TreeBalanceState.SLIGHTLY_UNBALANCED_RIGHT)
            ) {
                newRoot = newRoot.rotateLeft();
            }
            else {
                // right left case
                newRoot = new TreeNode(newRoot.key(), newRoot.value(), newRoot.left(), newRoot.right()!.rotateRight());
                newRoot = newRoot.rotateLeft();
            }
        }

        return newRoot;
    }
}