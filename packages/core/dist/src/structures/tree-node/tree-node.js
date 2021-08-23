"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
/**
 * TreeNode
 *
 * A generic node used in some tree structure.
 */
class TreeNode {
    constructor(key, value = null, leftChild = null, rightChild = null) {
        this._key = key;
        this._value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
    /**
     * hasLeft()
     *
     * determines if the node has a left child.
     * @returns TRUE if the node has a left child. FALSE otherwise.
     */
    hasLeft() {
        return this.leftChild !== null;
    }
    /**
     * hasRight()
     *
     * determines if the node has a right child.
     * @returns TRUE if the node has a right child. FALSE otherwise.
     */
    hasRight() {
        return this.rightChild !== null;
    }
    /**
     * height()
     *
     * gets the height of the node.
     */
    height() {
        return Math.max(this.leftHeight(), this.rightHeight()) + 1;
    }
    /**
     * key()
     *
     * gets the key of the node
     */
    key() {
        return this._key;
    }
    /**
     * left()
     *
     * gets the left child of the node.
     */
    left() {
        return this.leftChild;
    }
    /**
     * leftHeight()
     *
     * gets the height of the left child of the node.
     */
    leftHeight() {
        return this.hasLeft() ? this.left().height() : 0;
    }
    /**
     * right()
     *
     * gets the right child of the node
     */
    right() {
        return this.rightChild;
    }
    /**
     * rightHeight()
     *
     * gets the height of the right child of the node.
     */
    rightHeight() {
        return this.hasRight() ? this.right().height() : 0;
    }
    /**
     * rotateLeft()
     *
     * performs a left rotation on the node.
     * @returns the root of the subtree. In other words, the node where this current node used to be.
     * @throws InvalidStateExceptin when the left child of the node is undefined.
     */
    rotateLeft() {
        if (this.hasRight()) {
            // perform rotation.
            const modifiedCurrentNode = new TreeNode(this.key(), this.value(), this.left(), this.right().left());
            const subtreeRoot = new TreeNode(this.right().key(), this.right().value(), modifiedCurrentNode, this.right().right());
            return subtreeRoot;
        }
        else {
            throw new Error('Invalid State Exception');
        }
    }
    /**
     * rotateRight()
     *
     * performs a right rotation on the node.
     * @returns the root of the subtree. In other words, the node where this current node used to be.
     * @throws InvalidStateExceptin when the right child of the node is undefined.
     */
    rotateRight() {
        if (this.hasLeft()) {
            // perform rotation.
            const modifiedCurrentNode = new TreeNode(this.key(), this.value(), this.left().right(), this.right());
            const subtreeRoot = new TreeNode(this.left().key(), this.left().value(), this.left().left(), modifiedCurrentNode);
            return subtreeRoot;
        }
        else {
            throw new Error('Invalid State exception.');
        }
    }
    /**
     * value()
     *
     * gets the value of the node.
     */
    value() {
        return this._value;
    }
}
exports.TreeNode = TreeNode;
//# sourceMappingURL=tree-node.js.map