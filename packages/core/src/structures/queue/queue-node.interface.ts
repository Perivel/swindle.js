
import { NodeInterface } from './../node/node.interface';

/**
 * QueueNodeInterface
 * 
 * QueueNodeInterface defines the operations of a Queue node.
 */

export interface QueueNodeInterface<T> extends NodeInterface<T> {

    /**
     * next()
     * 
     * next() gets the next node.
     */

    next(): QueueNodeInterface<T>|null;

    /**
     * setNext()
     * 
     * setNext() sets the next node value.
     * @param next the node to set as the next value.
     */

    setNext(next: QueueNodeInterface<T>): void;
}