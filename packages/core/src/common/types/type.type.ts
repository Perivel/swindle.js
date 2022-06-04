/**
 * Type
 * 
 * A utility for designating a type. Types are just Constructor Signitures.
 */

export type Type<T> = {
    new (...args: any[]): T
};