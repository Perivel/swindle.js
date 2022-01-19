
/**
 * AsyncFn
 * 
 * An asynchronous function type.
 */

export type AsyncFn<T> = (...args: any) => Promise<T>;