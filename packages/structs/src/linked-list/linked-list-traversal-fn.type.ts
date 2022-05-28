

/**
 * LinkedListTraversalPredicateFn
 * 
 * A function signiture for a LinkedListTraversal function.
 * @param value the current value.
 * @param next the next value, if it exists.
 * @param prev The previous value, if it exists.
 */

export type LinkedListTraversalFn<T> = (value: T, next: T|null, prev: T|null) => void;