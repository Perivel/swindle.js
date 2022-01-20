"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
const NodePath = __importStar(require("path"));
const core_1 = require("@swindle/core");
/**
 * Path
 *
 * A utility class for working with file and directory paths
 */
class Path {
    /**
     * Creates a Path instance.
     * @param value the value of the path.
     * @throws InvalidArgumentException when the path is invalid.
     */
    constructor(value) {
        const pathVal = value.trim();
        if (this.isValidPath(pathVal)) {
            this._value = pathVal.replace(/\\|\//g, NodePath.sep);
        }
        else {
            throw new core_1.InvalidArgumentException("Invalid Path: " + pathVal);
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
    static Delimiter() {
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
    static FromSegments(...segments) {
        if (segments.length !== 0) {
            const sanitizedSegments = segments.map(seg => seg instanceof Path ? seg.toString() : seg);
            return new Path(NodePath.resolve(...sanitizedSegments));
        }
        else {
            throw new core_1.InvalidArgumentException("Invalid Path segments.");
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
    static Separator() {
        return NodePath.sep;
    }
    /**
     * basename()
     *
     * gets the last portion of the path.
     */
    basename() {
        return new Path(NodePath.basename(this.toString()));
    }
    /**
     * dirname()
     *
     * gets the directory name of the path.
     */
    dirname() {
        return new Path(NodePath.dirname(this.toString()));
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof Path) {
            const other = suspect;
            isEqual = this.toString() === other.toString();
        }
        return isEqual;
    }
    /**
     * extension()
     *
     * gets the extension of the path.
     */
    extension() {
        return NodePath.extname(this.toString());
    }
    /**
    * isAbsolute()
    *
    * determines if path is an absolute path
    */
    isAbsolute() {
        return NodePath.isAbsolute(this.toString());
    }
    /**
     * normalize()
     *
     * normalizes the given path, resolving '..' and '.' segments.
     */
    normalize() {
        return new Path(NodePath.normalize(this.toString()));
    }
    /**
     * segments()
     *
     * returns an array consisting of the file segments.
     */
    segments() {
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
    toNamespacedPath() {
        return new Path(NodePath.toNamespacedPath(this.toString()));
    }
    toString() {
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
    isValidPath(suspect) {
        // const containsRestrictedCharacters = Path.RESTRICTED.test(suspect) || process.platform == "win32" ? Path.WINDOWS_RESTRICTED.test(suspect) : Path.POSIX_RESTRICTED.test(suspect);
        // const absoluteBeginning = /^([a-zA-Z]:\\|\/|\~\/)/;
        // const relativeBeginning = /^(?:\.\\|\.\/|\.\.\\|\.\.\/)/;
        // const validBeginning = NodePath.isAbsolute(suspect) ? absoluteBeginning.test(suspect) : relativeBeginning.test(suspect);
        // return !containsRestrictedCharacters && validBeginning;
        //return true;
        return suspect.trim().length > 0;
    }
}
exports.Path = Path;
Path.RESTRICTED = /[\[\]#%&{}<>*?\s\b\0$!'"@|‘“+^`]/g;
Path.POSIX_RESTRICTED = /[\\:]/g;
Path.WINDOWS_RESTRICTED = /[\/]/g;
//# sourceMappingURL=path.js.map