# Path
The `Path` class provides utilities for working with paths.

# Constructor
## constructor(value)
Creates an instance of Path.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| value | string | true | The path value. | 

## Exceptions
| **Name** | **Description** |
| ----------- | ----------- |
| InvalidArgumentException | Thrown when the path is not a valid format. |

# Static Methods
| **Method** | **Arguments** | **Return Type** | **Description** | **Exceptions** |
| ----------- | ----------- | ----------- | ----------- | ----------- | 
| Delimiter() | N/A | string | Provides the platform-specific path delimiter. For Windows, it returns ";". For POSIX systems, it returns ":" | N/A |
| FromSegments() | (Array<string|Path>) ...segments | Path | Creates a Path instance from the provided segments. | N/A |
| Separator() | N/A | string | Gets he platform-specific path segment separator. For Windows, it returns "\". For POSIX systems, it returns "/" | N/A |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** | **exceptions** |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| basename() | N/A | Path | gets the last portion of the path. | N/A |
| dirname() | N/A | Path | gets the directory name of the path.| N/A |
| equals() | (any) suspect | boolean | Determines if the path and the suspect are equal. | N/A |
| extension() | N/A | string | Gets the path extension. If the path does not have an dxtension, an empty string is returned. | N/A |
| isAbsolute() | N/A | boolean | Determines if a path instance is an absolute path. | N/A |
| normalize() | N/A | Path | Normalizes a path, resolving '..' and '.' segments. | N/A |
| segments() | N/A | Array<string> | returns an array consisting of the file segments. | N/A |
| toNamespacedPath() | N/A | Path | gets an equivalent namespace-prefixed path. This method is meaningful only on Windows systems. On POSIX systems, the method is non-operational and always returns path without modifications. | N/A |
| toString() | N/A | string | Converts the path to a string. | N/A |