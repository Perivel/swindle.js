import { Comparator, TraverseFn } from "@swindle/core";
import { LinkedListNode } from "./linked-list-node";
import { LinkedListInterface } from "./linked-list.interface";
export declare class LinkedList<T> implements LinkedListInterface<T> {
    private _head;
    private _end;
    private _size;
    private readonly compare;
    constructor(comparator: Comparator<T>);
    /**
     * clear()
     *
     * clears the list.
     */
    clear(): void;
    /**
     * contains()
     *
     * contains() determineds if the
     * @param value the value to search for.
     */
    contains(value: T): boolean;
    /**
     * traverse()
     *
     * traverses the LinkedList executing the predicate function for each value.
     * @param predicate
     */
    traverse(predicate: TraverseFn<T>): void;
    /**
     * get()
     *
     * gets the first node with the associated value, if it exists.
     * @param value the value of the node to get.
     * @returns the first node with the specified value, or null if not found.
     */
    get(value: T): LinkedListNode<T> | null;
    /**
     * insert()
     *
     * inserts the value in the list.
     * @param value the value to insert.
     */
    insert(value: T): void;
    /**
     * isEmpty()
     *
     * determines if the list is empty.
     */
    isEmpty(): boolean;
    /**
     * remove()
     *
     * removes the value from the list.
     * @param value the value to remove.
     */
    remove(value: T): void;
    /**
     * size()
     *
     * gets teh size of the linked list
     */
    size(): number;
    /**
     * toArray()
     *
     * converts the list to an array.
     */
    toArray(): Array<T>;
    /**
     * populateArray()
     *
     * populates the array recursively.
     * @param node the current node.
     * @param array the array to populate
     * @returns the populated array.
     */
    private populateArray;
    /**
     * containsValue()
     *
     * determines if the node, or any of its links contains the target value
     * @param node the node to check.
     * @param target the value to check for
     * @returns TRUE if the value is contained in the node. False otherwise.
     */
    private containsValue;
    /**
     * getNodeForValue()
     *
     * gets the first node containing the specified value.
     * @param value the value to search for.
     * @param node The node to check.
     * @returns The first node containing the value or null if it is not found.
     */
    private getNodeForValue;
    /**
     * removeNodeContainingValue()
     *
     * removes the node containding the value.
     * @param currentNode the current node.
     * @param value the value to delete.
     * @param previousNode the previous node, if available.
     */
    private removeNodeContainingValue;
    /**
     * traverseList()
     *
     * traverses the linked list starting from the current node.
     * @param predicate the predicate to execute.
     * @param current The current node to process.
     * @param previous The previous node.
     */
    private traverseList;
}
//# sourceMappingURL=linked-list.d.ts.map