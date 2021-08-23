import { TreeNodeInterface } from './tree-node.interface';
/**
 * TreeNode
 *
 * A generic node used in some tree structure.
 */
export declare class TreeNode<K, V> implements TreeNodeInterface<K, V> {
    private readonly _key;
    private readonly _value;
    private readonly leftChild;
    private readonly rightChild;
    constructor(key: K, value?: V | null, leftChild?: TreeNode<K, V> | null, rightChild?: TreeNode<K, V> | null);
    /**
     * hasLeft()
     *
     * determines if the node has a left child.
     * @returns TRUE if the node has a left child. FALSE otherwise.
     */
    hasLeft(): boolean;
    /**
     * hasRight()
     *
     * determines if the node has a right child.
     * @returns TRUE if the node has a right child. FALSE otherwise.
     */
    hasRight(): boolean;
    /**
     * height()
     *
     * gets the height of the node.
     */
    height(): number;
    /**
     * key()
     *
     * gets the key of the node
     */
    key(): K;
    /**
     * left()
     *
     * gets the left child of the node.
     */
    left(): TreeNode<K, V> | null;
    /**
     * leftHeight()
     *
     * gets the height of the left child of the node.
     */
    leftHeight(): number;
    /**
     * right()
     *
     * gets the right child of the node
     */
    right(): TreeNode<K, V> | null;
    /**
     * rightHeight()
     *
     * gets the height of the right child of the node.
     */
    rightHeight(): number;
    /**
     * rotateLeft()
     *
     * performs a left rotation on the node.
     * @returns the root of the subtree. In other words, the node where this current node used to be.
     * @throws InvalidStateExceptin when the left child of the node is undefined.
     */
    rotateLeft(): TreeNode<K, V>;
    /**
     * rotateRight()
     *
     * performs a right rotation on the node.
     * @returns the root of the subtree. In other words, the node where this current node used to be.
     * @throws InvalidStateExceptin when the right child of the node is undefined.
     */
    rotateRight(): TreeNode<K, V>;
    /**
     * value()
     *
     * gets the value of the node.
     */
    value(): V | null;
}
//# sourceMappingURL=tree-node.d.ts.map