import * as NodeFS from "fs/promises";
import { 
    FileAccessMode,
    FileCopyMode,
    FileOpenFlag,
    FileOpenMode,
    SymbolicLinkType
} from "../constants/constants.well";
import { 
    FileAlreadyExistsException,
    FileNotFoundException, 
    FileSystemException 
} from "../exceptions/exceptions.well";
import { Path } from "./../path/path";
import { File } from "./../file/file";

/**
 * FileSystem
 * 
 * A class abstracting FileSystem operations.
 */

export class FileSystem {

    private constructor() {}

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

    public static async Access(path: Path, mode: FileAccessMode = FileAccessMode.F_OK): Promise<void> {
        try {
            await NodeFS.access(path.toString(), mode)
        }
        catch(e) {
            throw new FileSystemException((e as Error).message);
        }
    }

    /**
     * ChangeSymbolicLinkOwner()
     * 
     * Changes the ownership on a symbolic link.
     * @param path the path
     * @param uid the user id
     * @param gid the group id.
     * @throws FileSystemException when there is an error completing the operation.
     */

    public static async ChangeSymbolicLinkOwner(path: Path, uid: number, gid: number): Promise<void> {
        try {
            await NodeFS.lchown(path.toString(), uid, gid);
        }
        catch (e) {
            throw new FileSystemException((e as Error).message);
        }
    }

    /**
     * ContainsFile()
     * 
     * Determines if a file exists in the given path.
     * @param path The path to the file.
     * @returns TRUE if the file exists. FALSE otherwise.
     */

    public static async ContainsFile(path: Path): Promise<boolean> {
        try {
            await FileSystem.Access(path);
            return true;
        }
        catch(e) {
            return false;
        }
    }

    /**
     * CopyFile()
     * 
     * copies src to dest. By default, dest is overwritten if it already exists.
     * @param source the path of the file to copy.
     * @param destination the destination to copy to.
     * @param mode Optional modifiers that specify the behavior of the copy operation.
     * @throws FileSystemException when there is an error completing the operation.
     */

    public static async CopyFile(source: Path, destination: Path, mode: FileCopyMode|null = null): Promise<void> {
        try {
            const mod = mode !== null ? mode : 0;
            await NodeFS.copyFile(source.toString(), destination.toString(), mod);
        }
        catch(e) {
            throw new FileSystemException((e as Error).message);
        }
    }

    /**
     * createDirectory()
     * 
     * creates a directory.
     * @param path the path of the directory to create.
     * @throws FileSystemException when there is an error completing the operation
     */

    public static async CreateDirectory(path: Path): Promise<void> {
        try {
            await NodeFS.mkdir(path.toString(), {
                recursive: true
            });
        }
        catch(e) {
            throw new FileSystemException((e as Error).message);
        }
    }

    /**
     * CreateFile()
     * 
     * creates a file.
     * @param path the path of the file.
     */

    public static async CreateFile(path: Path): Promise<void> {
        
        try {
            const handle = await NodeFS.open(path.toString(), FileOpenFlag.READ_APPEND_FAIL_IF_EXISTS, FileOpenMode.READONLY);
            await handle.close();
        }
        catch(e) {
            throw new FileAlreadyExistsException();
        }
    }

    /**
     * CreateLink()
     * 
     * Creates a new (hard) link from the existingPath to the newPath.
     * @param existingPath the existing path from which to create the new link form.
     * @param newPath the new path.
     * @throws FileSystemException when there is an error completing the operation.
     */

    public static async CreateLink(existingPath: Path, newPath: Path): Promise<void> {
        try {
            await NodeFS.link(existingPath.toString(), newPath.toString());
        }
        catch(e) {
            throw new FileSystemException((e as Error).message);
        }
    }

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
    public static async CreateSymbolicLink(target: Path, path: Path, type: SymbolicLinkType = SymbolicLinkType.FILE): Promise<void> {
        try {
            await NodeFS.symlink(target.toString(), path.toString(), type.toString());
        }
        catch(e) {
            throw new FileSystemException((e as Error).message);
        }
    }

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

    public static async Open(path: Path, flag: FileOpenFlag = FileOpenFlag.READ_WRITE, mode: FileOpenMode = FileOpenMode.READWRITE, encoding: BufferEncoding = "utf8"): Promise<File> {
        
        if (!await FileSystem.ContainsFile(path)) {
            throw new FileNotFoundException();
        }

        // Open the file.
        try {
            const handle = await NodeFS.open(path.toString(), flag.toString(), mode);
            return new File(handle, encoding);
        }
        catch(e) {
            throw new FileSystemException((e as Error).message);
        }
    }

    /**
     * Rename()
     * 
     * Renames the oldPath to the newPath.
     * @param oldPath the original path
     * @param newPath the new path.
     * @throws FileSystemException when there is an error completing the operation.
     */

    public static async Rename(oldPath: Path, newPath: Path): Promise<void> {
        try {
            await NodeFS.rename(oldPath.toString(), newPath.toString());
        }
        catch(e) {
            throw new FileSystemException((e as Error).message);
        }
    }

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

    public static async Remove(path: Path, recursive: boolean = false, force: boolean = false): Promise<void> {
        try {
            await NodeFS.rm(path.toString(), {
                force: force,
                recursive: recursive,
            });
        }
        catch(e) {
            throw new FileSystemException((e as Error).message);
        }
    }

    /**
     * RemoveSymbolicLink()
     * 
     * removes a symbolic link without affecting the file or directory to which that link refer.
     * @param path the path to the symbolic link to remove.
     * @throws FileSystemException when there is an error completing the operation.
     */

    public static async RemoveSymbolicLink(path: Path): Promise<void> {
        try {
            const stats = await NodeFS.lstat(path.toString(), {
                throwIfNoEntry: true
            });

            if (stats.isSymbolicLink()) {
                await NodeFS.unlink(path.toString());
            }
            else {
                throw new Error("Not a Symbolic Link");
            }
        }
        catch(e) {
            throw new FileSystemException((e as Error).message);
        }
    }
}