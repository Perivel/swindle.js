
/**
 * Comparator
 * 
 * A type indicating a comparator function. The comparator function takes two arguments, a and b. 
 * The comparator function returns a negative number if a < b, 0 if a = b, and a positive number if a > b.
 */

export type Comparator<T> = (a: T, b: T) => number;