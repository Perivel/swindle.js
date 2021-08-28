# FileSystem
The `Process` class provides several utilities for interfacing with the current process.

# Constructor
## private constructor()
The Process constructor is private, and instead exposes a variety of static methods to interact with.

## Arguments
| **Name** | **Type** | **Required** | **Description** |
| ----------- | ----------- | ----------- | ----------- |

none

# Static Properties
| **Name** | **Description** |
| architecture | A proxy for process.arch |
| argv | A proxy for process.argv |
| argv0 | A proxy for process.argv0 |
| config | A proxy for process.config |
| connected | A proxy for process.connected |
| debugPort | A proxy for process.debugPort |
| env | A proxy for process.env |
| execArgv | A proxy for process.execArgv |
| exitCode | A proxy for process.exitCode |

# Static Methods
| **Method** | **Arguments** | **Return Type** | **Description** | **Exceptions** |
| ----------- | ----------- | ----------- | ----------- | ----------- | 
| ChangeCurrentWorkingDirectory() | (Path) path | void | changes the curent working directory. | | ProcessException when the operation fails. |
| ChDir() | (Path) path | void | Alias to ChangeCurrentWorkingDirectory() | PromiseException whe operation fails |
| CpuUsage() | N/A | CpuUsage | gets the current working directory. | N/A |
| Cwd() | N/A | Path | Gets teh current working directory | N/A |
| Disconnect() | N/A | Promise (void) | If the Node.js process is spawned with an IPC channel (see the Child Process and Cluster documentation), the process.disconnect() method will close the IPC channel to the parent process, allowing the child process to exit gracefully once there are no other connections keeping it alive. The effect of calling process.disconnect() is the same as calling ChildProcess.disconnect() from the parent process. If the Node.js process was not spawned with an IPC channel, process.disconnect() will be undefined. | N/A |
| EmitWarning() | (string, Error) warning, (EmitWarningOptions, undefined) options | void | The process.emitWarning() method can be used to emit custom or application specific process warnings. These can be listened for by adding a handler to the 'warning' event. | N/A |
| Exec() | (string) command, (ExecOptions, null) options | string, Buffer, null,undefined | Spawns a shell then executes the command within that shell, buffering any generated output. The command string passed to the exec function is processed directly by the shell and special characters (vary based on shell) need to be dealt with accordingly. Never pass unsanitized user input to this function. Any input containing shell metacharacters may be used to trigger arbitrary command execution. | ProcessException when the operation fails. |
| ExecFile() | (Path) path, (string[]) args, (ExecFileOptions|undefined) options | Promise(string, Buffer, null, undefined) | The Process.execFile() function is similar to Process.exec() except that it does not spawn a shell by default. Rather, the specified executable file is spawned directly as a new process making it slightly more efficient than Process.exec(). | ProcessException when the operation fails. |
| Exit() | (number) code | void | The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code. If code is omitted, exit uses either the 'success' code 0 or the value of process.exitCode if it has been set. Node.js will not terminate until all the 'exit' event listeners are called. | N/A |
| Fork() | (Path) module, (string[]) args, (ForkOptions, null) options | Promise (string, Buffer, null, undefined) | The Process.fork() method is a special case of child_process.spawn() used specifically to spawn new Node.js processes. Like Process.spawn(), a ChildProcess object is returned. The returned ChildProcess will have an additional communication channel built-in that allows messages to be passed back and forth between the parent and child. See subprocess.send() for details. | ProcessException when the operation fails. |
| Spawn() | (string) command, (string[]) args, (SpawnOptions, undefined) options | string, Buffer, null, undefined | The Process.spawn() method spawns a new process using the given command, with command-line arguments in args. If omitted, args defaults to an empty array. If the shell option is enabled, do not pass unsanitized user input to this function. Any input containing shell metacharacters may be used to trigger arbitrary command execution. A third argument may be used to specify additional options, with these defaults | ProcessException when the operation fals. |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |

None