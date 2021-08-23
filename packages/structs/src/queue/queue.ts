import { QueueNode } from "./queue-node";
import { QueueInterface } from "./queue.interface";

/**
 * Queue
 * 
 * Queue is a data structure that follows the LIFO principle.
 * 
 */

export class Queue<T> implements QueueInterface<T> {

    private _front: QueueNode<T>|null;
    private _back: QueueNode<T>|null;
    private _size: number;

    constructor() {
        this._front = null;
        this._back = null;
        this._size = 0;
    }

    /**
     * clear()
     * 
     * clear() clears the queue.
     */

    public clear(): void {
        this._front = null;
        this._back = null;
        this._size = 0;
    }

    /**
     * dequeue()
     * 
     * dequeue() removes the next item in the queue. 
     * O(1)
     */

    public dequeue(): T | null {
        let value: T|null = null;

        if (!this.isEmpty()) {
            const front = this._front!;
            value = front?.value();
            this._front = front.next() ? front?.next() : null;
            this._size--;
            this._back = this.isEmpty() ? null : this._back;
        }

        return value;
    }

    /**
     * enqueue()
     * 
     * enqueue() inserts an item into the queue.
     * O(1)
     * @param value the value to insert.
     */

    public enqueue(value: T): void {
        
        if (this.isEmpty()) {
            // add to the front
            const nodeToAdd = new QueueNode<T>(value, null);
            this._front = nodeToAdd;
            this._back = nodeToAdd;
        }
        else {
            // add to the back
            const currentBack = this._back;
            const newBack = new QueueNode<T>(value, null);
            currentBack?.setNext(newBack);
            this._back = newBack;
        }

        this._size++;
    } 

    /**
     * isEmpty()
     * 
     * isEmpty() determines if the queue is empty.
     */

    public isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * peek()
     * 
     * peek() gets the next item in the queue, but does not remove it.
     */
    public peek(): T|null {
        if (!this.isEmpty()) {
            return this._front!.value();
        }
        else {
            return null;
        }
    }

    /**
     * size()
     * 
     * size() gets the number of elements in the queue.
     */
    
    public size(): number {
        return this._size;
    }

    /**
     * toArray()
     * 
     * toArray() converts the queue to an array.
     */

    public toArray(): Array<T> {
        const arr = new Array<T>();

        if (!this.isEmpty()) {
            // fill the array
            return this.fillArray(this._front!, arr);
        }
        else {
            // the queue is empty.
            return arr;
        }
    }

    // ==========================
    // Help
    // ==========================

    /**
     * fillArray()
     * 
     * fillArray() populates the array recursively.
     * @param node the first node.
     * @param array the array to fill.
     * @returns the filled array.
     */

    private fillArray(node: QueueNode<T>, array: Array<T>): Array<T> {
        array.push(node.value());

        if (node.next() === null) {
            // there are no more values to add.
            return array;
        }
        else {
            // there are more values to add.
            return this.fillArray(node.next()!, array);
        }
    }
}