/**
 * Dependency
 *
 * A type indicating a dependency.
 */
export declare type Dependency<T> = abstract new (...args: any[]) => T;
export declare type ConcreteDependency<T> = new (...args: any[]) => T;
//# sourceMappingURL=dependency.type.d.ts.map