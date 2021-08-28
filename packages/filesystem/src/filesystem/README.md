# FileSystem
The `FileSystem` class provides several utilities for working with the files.

# Constructor
## private constructor()
The FileSystem constructor is private, and instead exposes a variety of static methods to interact with.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |

The `FileSystem` constructor does not take any arguments.

# Static Methods
| **Method** | **Arguments** | **Return Type** | **Description** | **Exceptions** |
| ----------- | ----------- | ----------- | ----------- | ----------- | 
| Access() | ([Path](./../path/README.md)) path, ([FileAccessMode](../constants/FILEACCESSMODE.md)) mode | Promise (void) | Tests a user's permissions for the file or directory specified by path. The mode argument is an optional integer that specifies the accessibility checks to be performed. If the accessibility check is successful, the promise is resolved with no value. If any of the accessibility checks fail, a FileSystemException is thrown, | FileSystemException when you do not have permissions. |
| ChangeSymbolicLinkOwner() | ([Path](./../path/README.md)) path, (number) uid, (number) gid | Promise (void) | Changes the ownership on a symbolic link. | FileSystemException when the operation fails. |
| Contains() | ([Path](./../path/README.md)) path | Promise (boolean) | Determines if a file or directory exists in the given path. | N/A |
| CopyFile() | ([Path](./../path/README.md)) source, ([Path](./../path/README.md)) destination, (boolean) reateDirIfNotExists, (FileCopyMode) mode | Promise (void) | copies source to destination. By default, destination is overwritten if it already exists. | FileSystemException if the operation fails. DirectoryNotFoundException if the destination directory is not found and createDirIfNotExists is set to false. |
| CreateDirectory() | ([Path](./../path/README.md)) path | Promise (void) | creates a directory. | FileSystemException when there is an error completing the operation |
| CreateFile() | ([Path](./../path/README.md)) path, (boolean) createDirIfNotExists | Promise (void) | creates a file. | FileAlreadyExistsException when the file being created already exists, DirectoryNotFoundException when the file directory does not exist, FileSystemException when there is an error completing the operation. |
| CreateLink() | ([Path](./../path/README.md)) existingPath, [Path](./../path/README.md)) newPath | Promise (void) | Creates a new (hard) link from the existingPath to the newPath. | FileSystemException when there is an error completing the operation. |
| CreateSymbolicLink() | ([Path](./../path/README.md)) target, [Path](./../path/README.md)) path, (SymbolicLinkType) type | Promise (void) | Creates a symbolic link. The type argument is only used on Windows platforms and can be one of symbolicLinkType.DIRECTORY, SymbolicLinkType.FILE, or SymbolicLinkType.JUNCTION. Windows junction points require the destination path to be absolute. When using SymbolicLinkType.JUNCTION, the target argument will automatically be normalized to absolute path. | FileSystemException when there is an error completing the operation. |
| Delete() | ([Path](./../path/README.md)) path, (boolean) force, (boolean) recursive | Promise (void) | Delete a file or directory specified by path. | FileSystemException when an error occurs completing the operation. |
| Open() | ([Path](./../path/README.md)) path, (fiLEsystemFlag) flag, (FileOpenMode) mode, (BufferEncoding) encoding | Promise ([File](../file/README.md)) | opens a file. | FileNotFoundException when the file cannot be found. FileSystemException when there is an error completing the operation. |
| Rename() | ([Path](./../path/README.md)) oldPath, ([Path](./../path/README.md)) newPath | Promise (void) | Renames the oldPath to the newPath. | FileSystemException when there is an error completing the operation. |
| RemoveSymbolicLink() | ([Path](./../path/README.md)) path | Promise (void) | Removes a symbolic link without affecting the file or directory to which that link refer. | FileSystemException when there is an error completing the operation. |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |

None