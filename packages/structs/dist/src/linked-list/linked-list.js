"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const linked_list_node_1 = require("./linked-list-node");
class LinkedList {
    constructor(comparator) {
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
    clear() {
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
    contains(value) {
        let isEqual = false;
        if (!this.isEmpty()) {
            return isEqual;
        }
        else {
            isEqual = this.containsValue(this._head, value);
        }
        return isEqual;
    }
    /**
     * traverse()
     *
     * traverses the LinkedList executing the predicate function for each value.
     * @param predicate
     */
    traverse(predicate) {
        this.traverseList(predicate, this._head);
    }
    /**
     * get()
     *
     * gets the first node with the associated value, if it exists.
     * @param value the value of the node to get.
     * @returns the first node with the specified value, or null if not found.
     */
    get(value) {
        return this.getNodeForValue(value, this._head);
    }
    /**
     * insert()
     *
     * inserts the value in the list.
     * @param value the value to insert.
     */
    insert(value) {
        const newNode = new linked_list_node_1.LinkedListNode(value);
        if (this.isEmpty()) {
            // insert at the head.
            this._head = newNode;
            this._end = newNode;
        }
        else {
            // insert at the tail.
            this._end.setNext(newNode);
            this._end = newNode;
        }
        this._size++;
    }
    /**
     * isEmpty()
     *
     * determines if the list is empty.
     */
    isEmpty() {
        return this.size() === 0;
    }
    /**
     * remove()
     *
     * removes the value from the list.
     * @param value the value to remove.
     */
    remove(value) {
        if (!this.isEmpty()) {
            this.removeNodeContainingValue(this._head, value, null);
        }
    }
    /**
     * size()
     *
     * gets teh size of the linked list
     */
    size() {
        return this._size;
    }
    /**
     * toArray()
     *
     * converts the list to an array.
     */
    toArray() {
        const arr = new Array();
        if (this.isEmpty()) {
            return arr;
        }
        else {
            return this.populateArray(this._head, arr);
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
    populateArray(node, array) {
        array.push(node.value());
        if (node.next() === null) {
            return array;
        }
        else {
            return this.populateArray(node.next(), array);
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
    containsValue(node, target) {
        if (this.compare(node.value(), target) === 0) {
            return true;
        }
        else if (node.next() !== null) {
            // check the next node.
            return this.containsValue(node.next(), target);
        }
        else {
            return false;
        }
    }
    /**
     * getNodeForValue()
     *
     * gets the first node containing the specified value.
     * @param value the value to search for.
     * @param node The node to check.
     * @returns The first node containing the value or null if it is not found.
     */
    getNodeForValue(value, node) {
        if (this.compare(node.value(), value) === 0) {
            return node;
        }
        else if (node.next() != null) {
            return this.getNodeForValue(value, node.next());
        }
        else {
            return null;
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
    removeNodeContainingValue(currentNode, value, previousNode = null) {
        if (this.compare(currentNode.value(), value) === 0) {
            const next = currentNode.next();
            if (previousNode != null) {
                previousNode.setNext(next);
            }
            this._size--;
        }
        else if (currentNode.next() !== null) {
            // check the next node.
            this.removeNodeContainingValue(currentNode.next(), value, currentNode);
        }
        else {
            // this is the last node.
            this._end = currentNode;
        }
    }
    /**
     * traverseList()
     *
     * traverses the linked list starting from the current node.
     * @param predicate the predicate to execute.
     * @param current The current node to process.
     * @param previous The previous node.
     */
    traverseList(predicate, current, previous = null) {
        if (current) {
            predicate(current.value(), current.next() ? current.next().value() : null, previous ? previous.value() : null);
            this.traverseList(predicate, current.next(), current);
        }
        else {
            return;
        }
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=linked-list.js.map