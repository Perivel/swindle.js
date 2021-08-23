"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvlTree = void 0;
const Tree_1 = require("./../tree/Tree");
const default_comparator_1 = require("./default-comparator");
const tree_node_1 = require("./../tree-node/tree-node");
const tree_balance_state_enum_1 = require("./../tree/tree-balance-state.enum");
/**
 * AvlTree
 *
 * An AVL Tree is a self-balancing binary search tree.
 */
class AvlTree extends Tree_1.Tree {
    constructor(compareFn = default_comparator_1.DefaultComparator) {
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
    static FromArray(arr) {
        const tree = new AvlTree((a, b) => {
            if (a < b)
                return -1;
            if (a > b)
                return 1;
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
    static FromMap(map, compareFn) {
        const tree = new AvlTree(compareFn);
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
    contains(key) {
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
    get(key) {
        let result = null;
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
    insert(key, value = null) {
        this.root = this.insertKeyValuePair(key, value, this.root);
        this.treeSize++;
    }
    /**
     * maximum()
     *
     * gets the key of the largest element in the tree.
     */
    maximum() {
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
    minimum() {
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
    remove(key) {
        this.root = this.removeNode(key, this.root);
        this.treeSize--;
    }
    /**
     * size()
     *
     * gets the size of the tree.
     */
    size() {
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
    getNode(key, root) {
        const comparisonResult = this.compare(key, root.key());
        if (comparisonResult === 0) {
            // the root is what we are looking for.
            return root;
        }
        else if (comparisonResult < 0) {
            return root.hasLeft() ? this.getNode(key, root.left()) : null;
        }
        else {
            return root.hasRight() ? this.getNode(key, root.right()) : null;
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
    insertKeyValuePair(key, value = null, root = null) {
        if (!this.root) {
            return new tree_node_1.TreeNode(key, value);
        }
        let newRoot = root;
        const comparisonResult = this.compare(key, root === null || root === void 0 ? void 0 : root.key());
        if (comparisonResult < 0) {
            newRoot = new tree_node_1.TreeNode(root.key(), root.value(), this.insertKeyValuePair(key, value, root.left()), root.right());
        }
        else if (comparisonResult > 0) {
            newRoot = new tree_node_1.TreeNode(root.key(), root.value(), root.left(), this.insertKeyValuePair(key, value, root.right()));
        }
        else {
            // duplicate insert.
            this.treeSize--;
            return root;
        }
        // rebalance the tree.
        const balanceState = this.getBalanceState(newRoot);
        if (balanceState === tree_balance_state_enum_1.TreeBalanceState.UNBALANCED_LEFT) {
            if (this.compare(key, newRoot.left().key()) < 0) {
                // left left case
                newRoot = newRoot.rotateRight();
            }
            else {
                // left right case.
                newRoot = new tree_node_1.TreeNode(newRoot.key(), newRoot.value(), newRoot.left().rotateLeft(), newRoot.right());
                newRoot = newRoot.rotateRight();
            }
        }
        else if (balanceState === tree_balance_state_enum_1.TreeBalanceState.UNBALANCED_RIGHT) {
            if (this.compare(key, newRoot.right().key()) > 0) {
                // right right case.
                newRoot = newRoot.rotateLeft();
            }
            else {
                // right left case.
                newRoot = new tree_node_1.TreeNode(newRoot.key(), newRoot.value(), newRoot.left(), newRoot.right().rotateRight());
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
    getBalanceState(root) {
        const heightDiff = root.leftHeight() - root.rightHeight();
        switch (heightDiff) {
            case -2:
                return tree_balance_state_enum_1.TreeBalanceState.UNBALANCED_RIGHT;
            case -1:
                return tree_balance_state_enum_1.TreeBalanceState.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return tree_balance_state_enum_1.TreeBalanceState.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return tree_balance_state_enum_1.TreeBalanceState.UNBALANCED_LEFT;
            default:
                return tree_balance_state_enum_1.TreeBalanceState.BALANCED;
        }
    }
    /**
     * getMaximumValueNode()
     *
     * gets the node with the largest key in the provided tree node.
     * @param root the root of the tree to search.
     * @returns the node with the largest key in the tree.
     */
    getMaximumValueNode(root) {
        if (root.hasRight()) {
            return this.getMaximumValueNode(root.right());
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
    getMinimumValueNode(root) {
        if (root.hasLeft()) {
            return this.getMinimumValueNode(root.left());
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
    removeNode(key, root) {
        if (!root) {
            this.treeSize++;
            return root;
        }
        let newRoot = root;
        const comparisonResult = this.compare(key, newRoot.key());
        if (comparisonResult < 0) {
            // key to delete is in the left tree.
            newRoot = new tree_node_1.TreeNode(newRoot.key(), newRoot.value(), this.removeNode(key, newRoot.left()), newRoot.right());
        }
        else if (comparisonResult > 0) {
            // key to delete is in the right subtree
            newRoot = new tree_node_1.TreeNode(newRoot.key(), newRoot.value(), newRoot.left(), this.removeNode(key, newRoot.right()));
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
                const successor = this.getMinimumValueNode(newRoot.right());
                newRoot = new tree_node_1.TreeNode(successor.key(), successor.value(), newRoot.left(), this.removeNode(successor.key(), newRoot.right()));
            }
        }
        if (!newRoot) {
            return newRoot;
        }
        // rebalance the tree.
        const balanceState = this.getBalanceState(newRoot);
        if (balanceState === tree_balance_state_enum_1.TreeBalanceState.UNBALANCED_LEFT) {
            // left left case
            if ((this.getBalanceState(newRoot.left()) === tree_balance_state_enum_1.TreeBalanceState.BALANCED) ||
                (this.getBalanceState(newRoot.left()) === tree_balance_state_enum_1.TreeBalanceState.SLIGHTLY_UNBALANCED_LEFT)) {
                newRoot = newRoot.rotateRight();
            }
            else {
                // left right case
                newRoot = new tree_node_1.TreeNode(newRoot.key(), newRoot.value(), newRoot.left().rotateLeft(), newRoot.right());
                newRoot = newRoot.rotateRight();
            }
        }
        if (balanceState === tree_balance_state_enum_1.TreeBalanceState.UNBALANCED_RIGHT) {
            // right right  case
            if ((this.getBalanceState(newRoot.right()) === tree_balance_state_enum_1.TreeBalanceState.BALANCED) ||
                (this.getBalanceState(newRoot.right()) === tree_balance_state_enum_1.TreeBalanceState.SLIGHTLY_UNBALANCED_RIGHT)) {
                newRoot = newRoot.rotateLeft();
            }
            else {
                // right left case
                newRoot = new tree_node_1.TreeNode(newRoot.key(), newRoot.value(), newRoot.left(), newRoot.right().rotateRight());
                newRoot = newRoot.rotateLeft();
            }
        }
        return newRoot;
    }
}
exports.AvlTree = AvlTree;
//# sourceMappingURL=avl-tree.js.map