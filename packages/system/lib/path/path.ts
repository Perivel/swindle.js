import path, * as NodePath from 'path';
import { Stack } from '@swindle/structs';
import { PathInterface } from './path.interface';
import { PathException } from './exceptions';
import { PathInstruction } from './path-instruction.enum';

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
     * @throws PathException when the path is invalid.
     */

    constructor(value: string) {
        const pathVal = value.trim();
        if (this.isValidPath(pathVal)) {
            this._value = pathVal.replace(/\\|\//g, NodePath.sep);
        }
        else {
            throw new PathException("Invalid Path: " + pathVal);
        }
    }

    /**
     * Delimiter()
     *
     * Provides the platform-specific path delimiter.
     * - Windows: ";"
     * - POSIX: ":"
     */

    public static Delimiter = NodePath.delimiter;

    /**
     * FromSegments()
     *
     * Creates a Path from one or more segments.
     * @param segments the segnents of the path to create.
     * @returns the generated Path
     * @throws PathException when the segments are invalid.
     */

    public static FromSegments(...segments: Array<string | Path>): Path {
        const parsedSegments = new Stack<string>();
        Path._BuildPath(segments, parsedSegments);
        return new Path(parsedSegments.toArray().join(Path.Separator));
    }

    /**
     * Separator
     *
     * gets he platform-specific path segment separator.
     * - Windows: \
     * - POSIX: /
     */

    public static Separator = NodePath.sep;


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
        return this.toString().split(Path.Separator);
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
        // make sure the path is not an empty string.
        if (suspect.length === 0) {
            return false;
        }

        // check for restricted characters
        const isWindows = process.platform === 'win32';

        if (Path.RESTRICTED.test(suspect)) {
            return false;
        }

        if (isWindows && Path.WINDOWS_RESTRICTED.test(suspect)) {
            return false;
        }
        else if (Path.POSIX_RESTRICTED.test(suspect)) {
            return false;
        }

        return true;
    }

    /**
     * _BuildPathString()
     * 
     * Creates a valid path string from the provided segments.
     * @param segments the segments of a 
     * @returns 
     */

    private static _BuildPath(segments: Array<string | Path>, stack: Stack<string>): void {
        if (segments.length > 0) {
            const isHead = stack.isEmpty();
            const results = Path._NormalizeSegment(segments[0]);
            results.forEach(res => {
                if (typeof res === 'string') {
                    stack.push(res);
                }
                else {
                    switch (res) {
                        case PathInstruction.BackStep:
                            if (!isHead) {
                                stack.pop();
                            }
                            else {
                                throw new PathException('Invalid Path Segment');
                            }
                            break;
                        case PathInstruction.HomeDirectory:
                            if (isHead) {
                                stack.push('~');
                            }
                            else {
                                throw new PathException('Invalid Path Segment');
                            }
                            break;
                        default:
                            // here we know it is a Current Directory instruction
                            if (isHead) {
                                stack.push(process.cwd());
                            }
                    }
                }
            });

            segments.shift();
            Path._BuildPath(segments, stack);
        }
    }

    /**
     * _Norma.izeSegment()
     * 
     * Attempts to normalize a path segment.
     * @param dirty the dirty segment to normalize.
     */

    private static _NormalizeSegment(dirty: string | Path): Array<string | PathInstruction> {
        const isWindows = process.platform === 'win32';
        let candidate = dirty.toString();
        const normalized: Array<string | PathInstruction> = [];

        // A segment can fall into the following forms:
        // 1. '~'m '\', '\\', etc... : These usually symbolize the home directory, and should be converted to the platform-specific formats.
        // 2. './': the current directory. In this case, it is sufficient to return an empty string.


        return normalized;
    }
}