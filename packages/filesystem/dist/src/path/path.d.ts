import { PathInterface } from './path.interface';
/**
 * Path
 *
 * A utility class for working with file and directory paths
 */
export declare class Path implements PathInterface {
    private readonly _value;
    constructor(value: string);
    /**
     * Delimiter()
     *
     * Provides the platform-specific path delimiter.
     * - Windows: ";"
     * -POSIX: ":"
     *
     * @returns the platform speciic path delimiter.
     */
    static Delimiter(): string;
    /**
     * FromSegments()
     *
     * Creates a Path from one or more segments.
     * @param segments the segnents of the path to create.
     * @returns the generated Path
     * @throws InvalidArgumentException when the segments are invalid.
     */
    static FromSegments(...segments: string[]): Path;
    /**
     * Separator()
     *
     * gets he platform-specific path segment separator.
     * - Windows: \
     * - POSIX: /
     * @returns
     */
    static Separator(): string;
    /**
     * basename()
     *
     * gets the last portion of the path.
     */
    basename(): Path;
    /**
     * dirname()
     *
     * gets the directory name of the path.
     */
    dirname(): Path;
    equals(suspect: any): boolean;
    /**
     * extension()
     *
     * gets the extension of the path.
     */
    extension(): string;
    /**
    * isAbsolute()
    *
    * determines if path is an absolute path
    */
    isAbsolute(): boolean;
    /**
     * normalize()
     *
     * normalizes the given path, resolving '..' and '.' segments.
     */
    normalize(): Path;
    /**
     * toNamespacedPath()
     *
     * gets an equivalent namespace-prefixed path.
     *
     * This method is meaningful only on Windows systems. On POSIX systems,
     * the method is non-operational and always returns path without modifications.
     */
    toNamespacedPath(): Path;
    toString(): string;
}
//# sourceMappingURL=path.d.ts.map