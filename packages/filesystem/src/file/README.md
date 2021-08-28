# File
The `File` class provides utilities for working with files.

# Constructor
## constructor(handle, encoding)
Creates an instance of a `File`.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| handle | fs.FileHandle | true | The file handle. |
| encoding | BufferEncoding | true | The file encoding. | 

## Exceptions
| **Name** | **Description** |
| ----------- | ----------- |

None

# Static Methods
| **Method** | **Arguments** | **Return Type** | **Description** | **Exceptions** |
| ----------- | ----------- | ----------- | ----------- | ----------- | 

None

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** | **exceptions** |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| append() | string | Uint8Array | Promise (void) | writes data to a file, replacing the file if it already exists. | FileException when there is an error appending the file. |
| chmod() | number or string | Promise (void) | Modifies the permissions on the file | FileException when there is an error completing the operation. |
| chown() | (number) uid, (number) gid | Promise (void) | Changes the ownership of the file | FileException when there is an error completing the operation. |
| close() | N/A | Promise (void) | closes the file after waiting for any pending operations to complete. | FileException when an error occurs completing the operation. |
| datasync() | N/A | Promise (void) | Forces all currently queued I/O operations associated with the file to the operating system's synchronized I/O completion state. | FileException when an error occurs completing the operation. |
| decryptor() | N/A | number | gets numeric file descriptor | N/A |
| equals() | (any) suspect | boolean | determines if the file and the suspect are equal. | N/A |
| encoding() | N/A | BufferEncoding | gets the file encoding. | N/A |
| read() | (number, null) length, (number, null) position | Promise (string) | Reads data from the file | FileException when an error occurs completing the operation. |
| readAll() | N/A | Promise (string) | reads the entire contents of a file | FileException when an error occurs completing the operation. |
| stats() | (boolean) bigInt | FileStats | gets the stats for the file. | FileException when an error occurs completing the operation. |
| sync() | N/A | Promise (void) | request that all data for the open file descriptor is flushed to the storage device. | FileException when the operation fails. |
| utimes() | (DateTime) atime, (DateTime) mtime | Promise (void) | change the file system timestamps | FileException when an error occurs completing the operation. |
| writeBuffer() | (Buffer) buffer, (number) offset, (number) length, (number, null) position | Promise (void) | writes the bufer to the file. | FileException when an error occurs completing the operation. |
| writeString() | (string) data, (number, null) position | Promise (void) | writes the string data to a file. | FileException when an error occurs completing the operation. |