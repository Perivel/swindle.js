import * as NodePath from 'path';
import * as NodeProcess from 'process';
import { InvalidArgumentException } from "@swindle/core";
import { PathInterface } from './path.interface';

/**
 * Path
 *
 * A utility class for working with file and directory paths
 */

export class Path implements PathInterface {

    private static RESTRICTED = /[\[\]#%&{}<>*?\s\b\0$!'"@|‘“+^`]/g;
    private static POSIX_RESTRICTED = /[\\:]/g;
    private static WINDOWS_RESTRICTED = /[\/]/g;

    private readonly _value: string;

    /**
     * Creates a Path instance.
     * @param value the value of the path.
     * @throws InvalidArgumentException when the path is invalid.
     */
    
    constructor(value: string) {
        const pathVal = value.trim();
        if (this.isValidPath(pathVal)) {
            this._value = pathVal.replace(/\\|\//g, NodePath.sep);
        }
        else {
            throw new InvalidArgumentException("Invalid Path: " + pathVal);
        }
    }

    /**
     * Delimiter()
     *
     * Provides the platform-specific path delimiter.
     * - Windows: ";"
     * - POSIX: ":"
     *
     * @returns the platform speciic path delimiter.
     */

    public static Delimiter(): string {
        return NodePath.delimiter;
    }

    /**
     * FromSegments()
     *
     * Creates a Path from one or more segments.
     * @param segments the segnents of the path to create.
     * @returns the generated Path
     * @throws InvalidArgumentException when the segments are invalid.
     */

    public static FromSegments(...segments: Array<string|Path>): Path {
        if (segments.length !== 0) {
            const sanitizedSegments = segments.map(seg => seg instanceof Path ? seg.toString() : seg);
            return new Path(NodePath.resolve(...sanitizedSegments));
        }
        else {
            throw new InvalidArgumentException("Invalid Path segments.");
        }
    }

    /**
     * Separator()
     *
     * gets he platform-specific path segment separator.
     * - Windows: \
     * - POSIX: /
     * @returns
     */

    public static Separator(): string {
        return NodePath.sep;
    }

    /**
     * basename()
     *
     * gets the last portion of the path.
     */

    public basename(): Path {
        return new Path(NodePath.basename(this.toString()));
    }

    /**
     * dirname()
     *
     * gets the directory name of the path.
     */

    public dirname(): Path {
        return new Path(NodePath.dirname(this.toString()));
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof Path) {
            const other = suspect as Path;
            isEqual = this.toString() === other.toString();
        }

        return isEqual;
    }

    /**
     * extension()
     *
     * gets the extension of the path.
     */

    public extension(): string {
        return NodePath.extname(this.toString());
     }

     /**
     * isAbsolute()
     *
     * determines if path is an absolute path
     */

    public isAbsolute(): boolean {
        return NodePath.isAbsolute(this.toString());
    }

    /**
     * normalize()
     *
     * normalizes the given path, resolving '..' and '.' segments.
     */

    public normalize(): Path {
        return new Path(NodePath.normalize(this.toString()));
    }

    /**
     * segments()
     * 
     * returns an array consisting of the file segments.
     */

    public segments(): string[] {
        return this.toString().split(Path.Separator());
    }

    /**
     * toNamespacedPath()
     *
     * gets an equivalent namespace-prefixed path.
     *
     * This method is meaningful only on Windows systems. On POSIX systems,
     * the method is non-operational and always returns path without modifications.
     */

    public toNamespacedPath(): Path {
        return new Path(NodePath.toNamespacedPath(this.toString()));
    }

    public toString(): string {
        return this._value;
    }

    // =======================================================================
    // helpers
    // =======================================================================

    /**
     * isValidPath()
     * 
     * determines if a path is valid.
     * @param suspect the string to test.
     * @returns TRUE if the path is valid. FALSE otherwise.
     * @note This method does not work correctly yet. We need some algorithm to validate paths for any operating system.
     * Current solution produces incorrect responses. For now, we will just make this function always return
     * TRUE when the path is not empty.. And then modify it at a later version.
     */
    private isValidPath(suspect: string): boolean {
        // const containsRestrictedCharacters = Path.RESTRICTED.test(suspect) || process.platform == "win32" ? Path.WINDOWS_RESTRICTED.test(suspect) : Path.POSIX_RESTRICTED.test(suspect);
        // const absoluteBeginning = /^([a-zA-Z]:\\|\/|\~\/)/;
        // const relativeBeginning = /^(?:\.\\|\.\/|\.\.\\|\.\.\/)/;
        // const validBeginning = NodePath.isAbsolute(suspect) ? absoluteBeginning.test(suspect) : relativeBeginning.test(suspect);
        // return !containsRestrictedCharacters && validBeginning;
        //return true;

        return suspect.trim().length > 0;
    }
}