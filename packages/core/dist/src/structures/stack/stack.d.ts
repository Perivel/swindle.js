import { StackInterface } from "./stack.interface.js";
/**
 * Stack
 *
 * Stack is a Data structure, following the FIFO principle.
 *
 */
export declare class Stack<T> implements StackInterface<T> {
    private _count;
    private _top;
    constructor();
    /**
     * clear()
     *
     * clear() clears the stack.
     */
    clear(): void;
    /**
     * isEmpty()
     *
     * isEmpty() determines if the stack is empty.
     */
    isEmpty(): boolean;
    /**
     * peek()
     *
     * peek() gets the next value in the stack.
     */
    peek(): T | null;
    /**
     * pop()
     *
     * pop() removes the next value in the stack.
     */
    pop(): T | null;
    /**
     * push()
     *
     * push() push pushes an item to the stack.
     * @param value The value to push.
     */
    push(value: T): void;
    /**
     * size()
     *
     * size() gets the number of items in the stack.
     */
    size(): number;
    /**
     * toArray()
     *
     * toArray() converts the stack to an array.
     */
    toArray(): Array<T>;
}
//# sourceMappingURL=stack.d.ts.map