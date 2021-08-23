/**
 * DependencyToken
 *
 * A type indicating a dependency.
 */
export declare type DependencyToken<T> = abstract new (...args: any[]) => T;
export declare type ConcreteDependencyToken<T> = new (...args: any[]) => T;
//# sourceMappingURL=dependency-token.type.d.ts.map