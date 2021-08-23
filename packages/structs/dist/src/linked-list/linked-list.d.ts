import { Comparator } from "@swindle/core";
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
     * removeNodeContainingValue()
     *
     * removes the node containding the value.
     * @param currentNode the current node.
     * @param value the value to delete.
     * @param previousNode the previous node, if available.
     */
    private removeNodeContainingValue;
}
//# sourceMappingURL=linked-list.d.ts.map