import { TreeNodeInterface } from './tree-node.interface'

/**
 * TreeNode
 * 
 * A generic node used in some tree structure.
 */

export class TreeNode<K, V> implements TreeNodeInterface<K, V> {

    private readonly _key: K;
    private readonly _value: V|null;
    private readonly leftChild: TreeNode<K, V> | null;
    private readonly rightChild: TreeNode<K, V> | null;

    constructor(key: K, value: V|null = null, leftChild: TreeNode<K, V> | null = null, rightChild: TreeNode<K, V> | null = null) {
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

    public hasLeft(): boolean {
        return this.leftChild !== null;
    }

    /**
     * hasRight()
     * 
     * determines if the node has a right child.
     * @returns TRUE if the node has a right child. FALSE otherwise.
     */

    public hasRight(): boolean {
        return this.rightChild !== null;
    }

    /**
     * height()
     * 
     * gets the height of the node.
     */

    public height(): number {
        return Math.max(this.leftHeight(), this.rightHeight()) + 1;
    }

    /**
     * key()
     * 
     * gets the key of the node
     */

    public key(): K {
        return this._key;
    }

    /**
     * left()
     * 
     * gets the left child of the node.
     */

    public left(): TreeNode<K, V> | null {
        return this.leftChild;
    }

    /**
     * leftHeight()
     * 
     * gets the height of the left child of the node.
     */

    public leftHeight(): number {
        return this.hasLeft() ? this.left()!.height() : 0;
    }

    /**
     * right()
     * 
     * gets the right child of the node
     */

    public right(): TreeNode<K, V> | null {
        return this.rightChild;
    }

    /**
     * rightHeight()
     * 
     * gets the height of the right child of the node.
     */

    public rightHeight(): number {
        return this.hasRight() ? this.right()!.height() : 0;
    }

    /**
     * rotateLeft()
     * 
     * performs a left rotation on the node.
     * @returns the root of the subtree. In other words, the node where this current node used to be.
     * @throws InvalidStateExceptin when the left child of the node is undefined.
     */

    public rotateLeft(): TreeNode<K, V> {
        if (this.hasRight()) {
            // perform rotation.
            const modifiedCurrentNode = new TreeNode<K, V>(this.key(), this.value(), this.left(), this.right()!.left());
            const subtreeRoot = new TreeNode<K, V>(this.right()!.key(), this.right()!.value(), modifiedCurrentNode, this.right()!.right());
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

    public rotateRight(): TreeNode<K, V> {
        if (this.hasLeft()) {
            // perform rotation.
            const modifiedCurrentNode = new TreeNode<K, V>(this.key(), this.value(), this.left()!.right(), this.right());
            const subtreeRoot = new TreeNode<K, V>(this.left()!.key(), this.left()!.value(), this.left()!.left(), modifiedCurrentNode);
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

    public value(): V|null {
        return this._value;
    }
}