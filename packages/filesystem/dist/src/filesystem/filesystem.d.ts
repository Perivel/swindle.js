/// <reference types="node" />
import { FileAccessMode, FileCopyMode, FileOpenFlag, FileOpenMode, SymbolicLinkType } from "../constants/constants.well";
import { Path } from "./../path/path";
import { File } from "./../file/file";
/**
 * FileSystem
 *
 * A class abstracting FileSystem operations.
 */
export declare class FileSystem {
    private constructor();
    /**
     * Access()
     *
     * Tests a user's permissions for the file or directory specified by path. The mode argument is an optional
     * integer that specifies the accessibility checks to be performed.
     *
     * If the accessibility check is successful, the promise is resolved with no value. If any of the accessibility
     * checks fail, a FileSystemException is thrown,
     * @param path The path to test.
     * @param mode the mode.
     */
    static Access(path: Path, mode?: FileAccessMode): Promise<void>;
    /**
     * ChangeSymbolicLinkOwner()
     *
     * Changes the ownership on a symbolic link.
     * @param path the path
     * @param uid the user id
     * @param gid the group id.
     * @throws FileSystemException when there is an error completing the operation.
     */
    static ChangeSymbolicLinkOwner(path: Path, uid: number, gid: number): Promise<void>;
    /**
     * ContainsFile()
     *
     * Determines if a file exists in the given path.
     * @param path The path to the file.
     * @returns TRUE if the file exists. FALSE otherwise.
     */
    static ContainsFile(path: Path): Promise<boolean>;
    /**
     * CopyFile()
     *
     * copies src to dest. By default, dest is overwritten if it already exists.
     * @param source the path of the file to copy.
     * @param destination the destination to copy to.
     * @param mode Optional modifiers that specify the behavior of the copy operation.
     * @throws FileSystemException when there is an error completing the operation.
     */
    static CopyFile(source: Path, destination: Path, mode?: FileCopyMode | null): Promise<void>;
    /**
     * createDirectory()
     *
     * creates a directory.
     * @param path the path of the directory to create.
     * @throws FileSystemException when there is an error completing the operation
     */
    static CreateDirectory(path: Path): Promise<void>;
    /**
     * CreateFile()
     *
     * creates a file.
     * @param path the path of the file.
     */
    static CreateFile(path: Path): Promise<void>;
    /**
     * CreateLink()
     *
     * Creates a new (hard) link from the existingPath to the newPath.
     * @param existingPath the existing path from which to create the new link form.
     * @param newPath the new path.
     * @throws FileSystemException when there is an error completing the operation.
     */
    static CreateLink(existingPath: Path, newPath: Path): Promise<void>;
    /**
     * CreateSymbolicLink()
     *
     * The type argument is only used on Windows platforms and can be one of 'dir', 'file',
     * or 'junction'. Windows junction points require the destination path to be absolute.
     * When using 'junction', the target argument will automatically be normalized to absolute
     * path.
     * @param target the target.
     * @param path the path of the symlink.
     * @param type the symlink type. Defaults to SymbolicLinkType.FILE
     * @throws FileSystemException whe nthere is an error completing the operation.
     */
    static CreateSymbolicLink(target: Path, path: Path, type?: SymbolicLinkType): Promise<void>;
    /**
     * Open()
     *
     * opens a file.
     * @note Do not forget to close the file with file.close() when you are finished working with it to prevent memory leaks
     * and other unexpected behaviors.
     * @param path The path of the file to open.
     * @param flag The flag
     * @param mode the mode to use.
     * @param encoding the file encoding. Defualts to UTF8.
     * @returns The opened file.
     * @throws FileNotFoundException
     */
    static Open(path: Path, flag?: FileOpenFlag, mode?: FileOpenMode, encoding?: BufferEncoding): Promise<File>;
    /**
     * Rename()
     *
     * Renames the oldPath to the newPath.
     * @param oldPath the original path
     * @param newPath the new path.
     * @throws FileSystemException when there is an error completing the operation.
     */
    static Rename(oldPath: Path, newPath: Path): Promise<void>;
    /**
     * Remove()
     *
     * Removes files and directories
     * @param path the path to the file or directory to delete.
     * @param force When true, exceptions will be ignored if path does not exist. Defaults to false.
     * @param recursive If true, perform a recursive directory removal. In recursive mode, operations are retried on failure.
     * Defaults to false.
     * @throws FileSystemException when an error occurs completing the operation.
     */
    static Remove(path: Path, recursive?: boolean, force?: boolean): Promise<void>;
    /**
     * RemoveSymbolicLink()
     *
     * removes a symbolic link without affecting the file or directory to which that link refer.
     * @param path the path to the symbolic link to remove.
     * @throws FileSystemException when there is an error completing the operation.
     */
    static RemoveSymbolicLink(path: Path): Promise<void>;
}
//# sourceMappingURL=filesystem.d.ts.map