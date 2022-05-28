
/**
 * TraverseFn
 * 
 * A function to be invoked on each traversible value.
 */

export type TraverseFn<T> = (current: T, next: T|null, previous: T|null) => void;

/**
 * The Traversable Interface.
 * 
 * The Traversable interface indicates an object can be traversed.
 */

export interface Traversable<T> {

    /**
     * traverse()
     * 
     * traverses every value in the object, invoking the predicate on each.
     * @param predicate a predicate function to be invoked on every value.
     */

    traverse(predicate: TraverseFn<T>): void;
}