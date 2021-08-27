/// <reference types="node" />
import { ExecOptions, ExecFileOptions } from "child_process";
import { Path } from "@swindle/filesystem";
import { ForkOptions, SpawnOptions } from "./../types/types.well";
/**
 * Process
 *
 * A wrapper around the process object, with a few enhancements.
 */
export declare class Process {
    static architecture: string;
    static argv: string[];
    static argv0: string;
    static config: NodeJS.ProcessConfig;
    static connected: boolean;
    static debugPort: number;
    static env: NodeJS.ProcessEnv;
    static execArgv: string[];
    static exitCode: number | undefined;
    private constructor();
    /**
     * ChangeCurrentWorkingDirectory()
     *
     * changes the curent working directory.
     * @param path the path of the new current working directory.
     * @throws ProcessException when the operation fails.
     */
    static ChangeCurrentWorkingDirectory(path: Path): void;
    /**
     * ChDir()
     *
     * Alias to ChangeCurrentWorkingDirectory()
     * @param path the path of the new current working directory.
     * @throws ProcessException when the operation fails.
     */
    static ChDir(path: Path): void;
    static CpuUsage(previousValue?: NodeJS.CpuUsage | undefined): NodeJS.CpuUsage | undefined;
    /**
     * CurrentWorkingDirectory()
     *
     * gets the current working directory.
     * @returns the current working directory.
     */
    static CurrentWorkingDirectory(): Path;
    /**
     * Cwd()
     *
     * Alias to CurrentWorkingDirectory();
     * @returns the current working directory.
     */
    static Cwd(): Path;
    /**
     * Disconnect()
     *
     * If the Node.js process is spawned with an IPC channel (see the Child Process and Cluster documentation),
     * the process.disconnect() method will close the IPC channel to the parent process, allowing the child process
     * to exit gracefully once there are no other connections keeping it alive.
     *
     * The effect of calling process.disconnect() is the same as calling ChildProcess.disconnect() from the parent process.
     *
     * If the Node.js process was not spawned with an IPC channel, process.disconnect() will be undefined.
     */
    static Disconnect(): void;
    /**
     * EmitWarning()
     *
     * The process.emitWarning() method can be used to emit custom or application specific process warnings. These can be listened
     * for by adding a handler to the 'warning' event.
     * @param warning the warning to emit.
     * @param options options
     */
    static EmitWarning(warning: string | Error, options?: NodeJS.EmitWarningOptions | undefined): void;
    /**
     * Exec()
     *
     * Spawns a shell then executes the command within that shell, buffering any generated output. The command string passed to the exec
     * function is processed directly by the shell and special characters (vary based on shell) need to be dealt with accordingly.
     *
     * Never pass unsanitized user input to this function. Any input containing shell metacharacters may be used to trigger arbitrary command
     * execution.
     * @param command the command to run.
     * @param options the options.
     * @returns the output of the command.
     */
    static Exec(command: string, options?: ExecOptions | null): Promise<string | Buffer | null | undefined>;
    /**
     * ExecFile()
     *
     * The Process.execFile() function is similar to Process.exec() except that it does not spawn a shell by default. Rather, the specified executable
     * file is spawned directly as a new process making it slightly more efficient than Process.exec().
     * @param file the path to the file to run.
     * @param args list of string arguments.
     * @param options options.
     * @returns the output of the operation.
     */
    static ExecFile(file: Path, args: string[], options?: ExecFileOptions | undefined): Promise<string | Buffer | null | undefined>;
    /**
     * Exit()
     *
     * The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code. If code is
     * omitted, exit uses either the 'success' code 0 or the value of process.exitCode if it has been set. Node.js will not terminate
     * until all the 'exit' event listeners are called.
     * @param code the exit code. Defaults to 0
     */
    static Exit(code?: number): void;
    /**
     * Fork()
     *
     * The Process.fork() method is a special case of child_process.spawn() used specifically to spawn new Node.js processes. Like Process.spawn(), a
     * ChildProcess object is returned. The returned ChildProcess will have an additional communication channel built-in that allows messages to be
     * passed back and forth between the parent and child. See subprocess.send() for details.
     * @param modulePath the module to run.
     * @param args list of string arguments.
     * @param options options
     * @returns the output of the process
     */
    static Fork(modulePath: Path, args: string[], options?: ForkOptions | undefined): Promise<string | Buffer | null | undefined>;
    /**
     * OnBeforeExit()
     *
     * adds a listener to the process' "beforeExit" event.
     * @param handler The event handler to eecute.
     */
    static OnBeforeExit(handler: NodeJS.BeforeExitListener): void;
    /**
     * OnDisconnect()
     *
     * adds a listener to the process' "disconnect" event.
     * @param handler the event handler to execute.
     */
    static OnDisconnect(handler: NodeJS.DisconnectListener): void;
    /**
     * OnExit()
     *
     * adds a listener to the process' "exit" event.
     * @param handler the handler to execute.
     */
    static OnExit(handler: NodeJS.ExitListener): void;
    /**
     * OnMessage()
     *
     * adds a listener to the process' "message" event.
     * @param handler the handler to execute.
     */
    static OnMessage(handler: NodeJS.MessageListener): void;
    /**
     * OnMultipleResolves()
     *
     * adds a listener to the process' "multipleResolves" event.
     * @param handler the handler to execute.
     */
    static OnMultipleResolves(handler: NodeJS.MultipleResolveListener): void;
    /**
     * OnRejectionHandled()
     *
     * adds a listener to the process' "regectionHandled" event.
     * @param handler the handler to execute.
     */
    static OnRejectionHandled(handler: NodeJS.RejectionHandledListener): void;
    /**
     * OnUncaughtException()
     *
     * adds a listener to the process' "uncaughtException" event.
     * @param handler the handler to execute.
     */
    static OnUncaughtException(handler: NodeJS.UncaughtExceptionListener): void;
    /**
     * OnUncaughtExceptionMonitor()
     *
     * adds a listener to the process' "uncaughtExceptionMonitor" event.
     * @param handler the handler to execute.
     */
    static OnUncaughtExceptionMonitor(handler: NodeJS.BeforeExitListener): void;
    /**
     * OnUnhandledRejection()
     *
     * adds a listener to the process' "unhandledRejection" event.
     * @param handler the handler to execute.
     */
    static OnUnhandledRejection(handler: NodeJS.UnhandledRejectionListener): void;
    /**
     * OnWarning()
     *
     * adds a listener to the process' "warning" event.
     * @param handler the handler to execute.
     */
    static OnWarning(handler: NodeJS.WarningListener): void;
    /**
     * OnWorkerCreated()
     *
     * adds a listener to the process' "worker" event.
     * @param handler the handler to execute.
     */
    static OnWorkerCreated(handler: NodeJS.WorkerListener): void;
    /**
     * Spawn()
     *
     * The Process.spawn() method spawns a new process using the given command, with command-line arguments in args. If omitted, args defaults to an empty array.
     *
     * If the shell option is enabled, do not pass unsanitized user input to this function. Any input containing shell metacharacters may be used to trigger arbitrary command execution.
     *
     * A third argument may be used to specify additional options, with these defaults
     * @param command the command to run
     * @param args list of arguments
     * @param options options
     * @returns the output of the command.
     */
    static Spawn(command: string, args: string[], options?: SpawnOptions | undefined): Promise<string | Buffer | null | undefined>;
}
//# sourceMappingURL=process.d.ts.map