import { PathInterface } from './path.interface';
/**
 * Path
 *
 * A utility class for working with file and directory paths
 */
export declare class Path implements PathInterface {
    private static RESTRICTED;
    private static POSIX_RESTRICTED;
    private static WINDOWS_RESTRICTED;
    private readonly _value;
    /**
     * Creates a Path instance.
     * @param value the value of the path.
     * @throws InvalidArgumentException when the path is invalid.
     */
    constructor(value: string);
    /**
     * Delimiter()
     *
     * Provides the platform-specific path delimiter.
     * - Windows: ";"
     * - POSIX: ":"
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
    static FromSegments(...segments: Array<string | Path>): Path;
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
     * segments()
     *
     * returns an array consisting of the file segments.
     */
    segments(): string[];
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
    /**
     * isValidPath()
     *
     * determines if a path is valid.
     * @param suspect the string to test.
     * @returns TRUE if the path is valid. FALSE otherwise.
     * @note This method does not work correctly yet. We need some algorithm to validate paths for any operating system.
     * Current solution produces incorrect responses. For now, we will just make this function always return
     * TRUE. And then modify it at a later version.
     */
    private isValidPath;
}
//# sourceMappingURL=path.d.ts.map