/**
 * DependencyToken
 * 
 * A type indicating a dependency class, which may be either abstract or concrete.
 */

export type DependencyToken<T> = abstract new (...args: any[]) => T;

/**
 * ConcreteDependencyToken
 *
 * A type indicating a dependency class, which must be concrete.
 */

export type ConcreteDependencyToken<T> = new (...args: any[]) => T;