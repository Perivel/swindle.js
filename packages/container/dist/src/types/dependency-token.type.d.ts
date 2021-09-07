/**
 * DependencyToken
 *
 * A type indicating a dependency class, which may be either abstract or concrete.
 */
export declare type DependencyToken<T> = abstract new (...args: any[]) => T;
/**
 * ConcreteDependencyToken
 *
 * A type indicating a dependency class, which must be concrete.
 */
export declare type ConcreteDependencyToken<T> = new (...args: any[]) => T;
//# sourceMappingURL=dependency-token.type.d.ts.map