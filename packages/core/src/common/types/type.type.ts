/**
 * Type
 * 
 * A utility for designating a type.
 */

export type Type<T> = {
    new (...args: any[]): T
};