import * as NodePath from 'path';
import { InvalidArgumentException } from "@swindle/core";
import { PathInterface } from './path.interface';

/**
 * Path
 *
 * A utility class for working with file and directory paths
 */

export class Path implements PathInterface {

    private readonly _value: string;

    constructor(value: string) {
        if (!value) {
            throw new InvalidArgumentException("Invalid Path");
        }
        this._value = value.trim();
    }

    /**
     * Delimiter()
     *
     * Provides the platform-specific path delimiter.
     * - Windows: ";"
     * -POSIX: ":"
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

    public static FromSegments(...segments: string[]): Path {
        if (segments.length !== 0) {
            return new Path(NodePath.resolve(...segments));
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
}