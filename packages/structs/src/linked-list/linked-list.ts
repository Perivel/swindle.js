import { Comparator } from "@swindle/core";
import { LinkedListNode } from "./linked-list-node";
import { LinkedListInterface } from "./linked-list.interface";


export class LinkedList<T> implements LinkedListInterface<T> {

    private _head: LinkedListNode<T> | null;
    private _end: LinkedListNode<T>|null;
    private _size: number;
    private readonly compare: Comparator<T>

    constructor(comparator: Comparator<T>) {
        this._head = null;
        this._end = null;
        this._size = 0;
        this.compare = comparator;
    }

    /**
     * clear()
     * 
     * clears the list.
     */

    public clear(): void {
        this._head = null;
        this._end = null;
        this._size = 0;
    }

    /**
     * contains()
     * 
     * contains() determineds if the 
     * @param value the value to search for.
     */

    public contains(value: T): boolean {
        
        let isEqual = false;

        if (!this.isEmpty()) {
            return isEqual;
        }
        else {
            isEqual = this.containsValue(this._head!, value);
        }

        return isEqual;
    }

    /**
     * insert()
     * 
     * inserts the value in the list.
     * @param value the value to insert.
     */

    public insert(value: T): void {
        
        const newNode = new LinkedListNode<T>(value);

        if (this.isEmpty()) {
            // insert at the head.
            this._head = newNode;
            this._end = newNode;
        }
        else {
            // insert at the tail.
            this._end!.setNext(newNode);
            this._end = newNode;
        }

        this._size++;
    }

    /**
     * isEmpty()
     * 
     * determines if the list is empty.
     */

    public isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * remove() 
     * 
     * removes the value from the list.
     * @param value the value to remove.
     */

    public remove(value: T): void {
        if (!this.isEmpty()) {
            this.removeNodeContainingValue(this._head!, value, null);
        }
    }

    /**
     * size()
     * 
     * gets teh size of the linked list
     */

    public size(): number {
        return this._size;
    }

    /**
     * toArray()
     * 
     * converts the list to an array.
     */

    public toArray(): Array<T> {
        const arr = new Array<T>();

        if (this.isEmpty()) {
            return arr;
        }
        else {
            return this.populateArray(this._head!, arr);
        }
    }

    // ===========================
    // Helpers
    // ===========================

    /**
     * populateArray()
     * 
     * populates the array recursively.
     * @param node the current node.
     * @param array the array to populate
     * @returns the populated array.
     */
    private populateArray(node: LinkedListNode<T>, array: Array<T>): Array<T> {

        array.push(node.value());

        if (node.next() === null) {
            return array;
        }
        else {
            return this.populateArray(node.next()!, array);
        }
    }
    
    /**
     * containsValue()
     * 
     * determines if the node, or any of its links contains the target value
     * @param node the node to check.
     * @param target the value to check for
     * @returns TRUE if the value is contained in the node. False otherwise.
     */

    private containsValue(node: LinkedListNode<T>, target: T): boolean {

        if (this.compare(node.value(), target) === 0) {
            return true;
        }
        else if (node.next() !== null) {
            // check the next node.
            return this.containsValue(node.next()!, target);
        }
        else {
            return false;
        }
    }

    /**
     * removeNodeContainingValue()
     * 
     * removes the node containding the value.
     * @param currentNode the current node.
     * @param value the value to delete.
     * @param previousNode the previous node, if available.
     */
    private removeNodeContainingValue(currentNode: LinkedListNode<T>, value: T, previousNode: LinkedListNode<T>|null = null): void {

        if (this.compare(currentNode.value(), value) === 0) {
            const next = currentNode.next();

            if (previousNode != null) {
                previousNode.setNext(next);
            }

            this._size--;
        }
        else if (currentNode.next() !== null) {
            // check the next node.
            this.removeNodeContainingValue(currentNode.next()!, value, currentNode);
        }
        else {
            // this is the last node.
            this._end = currentNode;
        }
    }
}