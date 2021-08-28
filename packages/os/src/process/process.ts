import process from "process";
import { 
    ExecOptions, 
    ExecFileOptions 
} from "child_process";
import { Path } from "@swindle/filesystem";
import { ProcessException } from "../exceptions/exceptions.well";
import { 
    exec, 
    spawn, 
    execFile, 
    fork, 
} from "promisify-child-process";
import { 
    ForkOptions, 
    SpawnOptions 
} from "./../types/types.well";

/**
 * Process
 * 
 * A wrapper around the process object, with a few enhancements.
 */

export class Process {

    public static architecture = process.arch;
    public static argv = process.argv;
    public static argv0 = process.argv0;
    public static config = process.config;
    public static connected = process.connected;
    public static debugPort = process.debugPort;
    public static env = process.env;
    public static execArgv = process.execArgv;
    public static exitCode = process.exitCode;

    private constructor() {
        //
    }

    /**
     * ChangeCurrentWorkingDirectory()
     * 
     * changes the curent working directory.
     * @param path the path of the new current working directory.
     * @throws ProcessException when the operation fails.
     */

    public static ChangeCurrentWorkingDirectory(path: Path): void {
        try {
            process.chdir(path.toString());
        }
        catch(e) {
            throw new ProcessException();
        }
    }

    /**
     * ChDir()
     * 
     * Alias to ChangeCurrentWorkingDirectory()
     * @param path the path of the new current working directory.
     * @throws ProcessException when the operation fails.
     */
    public static ChDir(path: Path): void {
        Process.ChangeCurrentWorkingDirectory(path);
    }

    public static CpuUsage(previousValue: NodeJS.CpuUsage|undefined = undefined): NodeJS.CpuUsage|undefined {
        return process.cpuUsage(previousValue);
    }

    /**
     * CurrentWorkingDirectory()
     * 
     * gets the current working directory.
     * @returns the current working directory.
     */

    public static CurrentWorkingDirectory(): Path {
        return new Path(process.cwd());
    }

    /**
     * Cwd()
     * 
     * Alias to CurrentWorkingDirectory();
     * @returns the current working directory.
     */

    public static Cwd(): Path {
        return Process.CurrentWorkingDirectory();
    }

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

    public static Disconnect(): void {
        process.disconnect();
    }

    /**
     * EmitWarning()
     * 
     * The process.emitWarning() method can be used to emit custom or application specific process warnings. These can be listened 
     * for by adding a handler to the 'warning' event.
     * @param warning the warning to emit.
     * @param options options
     */

    public static EmitWarning(warning: string|Error, options: NodeJS.EmitWarningOptions|undefined = undefined): void {
        process.emitWarning(warning, options);
    }

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

    public static async Exec(command: string, options: ExecOptions|null = null): Promise<string|Buffer|null|undefined> {
        try {
            const { stdout } = await exec(command, {
                cwd: options && options.cwd ? options.cwd : Process.Cwd().toString(),
                env: options && options.env ? options.env : Process.env,
                gid: options?.gid,
                killSignal: options?.killSignal,
                maxBuffer: options?.maxBuffer,
                shell: options?.shell,
                timeout: options?.timeout,
                uid: options?.uid,
                windowsHide: options?.windowsHide,
            });
            return stdout;
        }
        catch(e) {
            throw new ProcessException((e as Error).message);
        }
    }

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

    public static async ExecFile(file: Path, args: string[], options: ExecFileOptions|undefined = undefined): Promise<string|Buffer|null|undefined> {
        try {
            const { stdout } = await execFile(file.toString(), args, {
                cwd: options && options.cwd ? options.cwd : Process.Cwd().toString(),
                env: options && options.env ? options.env : Process.env,
                gid: options?.gid,
                killSignal: options?.killSignal,
                maxBuffer: options?.maxBuffer,
                shell: options?.shell,
                timeout: options?.timeout,
                uid: options?.uid,
                windowsHide: options?.windowsHide,
                signal: options?.signal,
                windowsVerbatimArguments: options?.windowsVerbatimArguments,
            });
            return stdout;
        }
        catch(e) {
            throw new ProcessException((e as Error).message);
        }
    }

    /**
     * Exit()
     * 
     * The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code. If code is 
     * omitted, exit uses either the 'success' code 0 or the value of process.exitCode if it has been set. Node.js will not terminate 
     * until all the 'exit' event listeners are called.
     * @param code the exit code. Defaults to 0
     */

    public static Exit(code: number = 0): void {
        process.exit(code);
    }

    /**
     * Fork()
     * 
     * The Process.fork() method is a special case of child_process.spawn() used specifically to spawn new Node.js processes. Like Process.spawn(), a 
     * ChildProcess object is returned. The returned ChildProcess will have an additional communication channel built-in that allows messages to be 
     * passed back and forth between the parent and child. See subprocess.send() for details.
     * @param modulePath the module to run.
     * @param args list of string arguments.
     * @param options options
     * @throws ProcessException when the operation fails.
     * @returns the output of the process
     */

    public static async Fork(modulePath: Path, args: string[], options: ForkOptions|undefined = undefined): Promise<string|Buffer|null|undefined> {
        try {
            const { stdout } = await fork(modulePath.toString(), args, {
                cwd: options && options.cwd ? options.cwd : Process.Cwd().toString(),
                detached: options?.detached,
                encoding: options?.encoding,
                env: options && options.env ? options.env : Process.env,
                execArgv: options?.execArgv,
                execPath: options?.execPath,
                gid: options?.gid,
                killSignal: options?.killSignal,
                maxBuffer: options?.maxBuffer,
                serialization: options?.serialization,
                timeout: options?.timeout,
                uid: options?.uid,
                silent: options?.silent,
                signal: options?.signal,
                windowsVerbatimArguments: options?.windowsVerbatimArguments,
                stdio: options?.stdio,
            });
            return stdout;
        }
        catch(e) {
            throw new ProcessException((e as Error).message);
        }
    }

    /**
     * OnBeforeExit()
     * 
     * adds a listener to the process' "beforeExit" event.
     * @param handler The event handler to eecute.
     */

    public static OnBeforeExit(handler: NodeJS.BeforeExitListener): void {
        process.on("beforeExit", handler);
    }

    /**
     * OnDisconnect()
     * 
     * adds a listener to the process' "disconnect" event.
     * @param handler the event handler to execute.
     */

    public static OnDisconnect(handler: NodeJS.DisconnectListener): void {
        process.on("disconnect", handler);
    }

    /**
     * OnExit()
     * 
     * adds a listener to the process' "exit" event.
     * @param handler the handler to execute.
     */
    public static OnExit(handler: NodeJS.ExitListener): void {
        process.on("exit", handler);
    }

    /**
     * OnMessage()
     * 
     * adds a listener to the process' "message" event.
     * @param handler the handler to execute.
     */

    public static OnMessage(handler: NodeJS.MessageListener): void {
        process.on("message", handler);
    }

    /**
     * OnMultipleResolves()
     *
     * adds a listener to the process' "multipleResolves" event.
     * @param handler the handler to execute.
     */

    public static OnMultipleResolves(handler: NodeJS.MultipleResolveListener): void {
        process.on("multipleResolves", handler);
    }

    /**
     * OnRejectionHandled()
     *
     * adds a listener to the process' "regectionHandled" event.
     * @param handler the handler to execute.
     */

    public static OnRejectionHandled(handler: NodeJS.RejectionHandledListener): void {
        process.on("rejectionHandled", handler);
    }

    /**
     * OnUncaughtException()
     *
     * adds a listener to the process' "uncaughtException" event.
     * @param handler the handler to execute.
     */

    public static OnUncaughtException(handler: NodeJS.UncaughtExceptionListener): void {
        process.on("uncaughtException", handler);
    }

    /**
     * OnUncaughtExceptionMonitor()
     *
     * adds a listener to the process' "uncaughtExceptionMonitor" event.
     * @param handler the handler to execute.
     */

    public static OnUncaughtExceptionMonitor(handler: NodeJS.BeforeExitListener): void {
        process.on("uncaughtExceptionMonitor", handler);
    }

    /**
     * OnUnhandledRejection()
     *
     * adds a listener to the process' "unhandledRejection" event.
     * @param handler the handler to execute.
     */

    public static OnUnhandledRejection(handler: NodeJS.UnhandledRejectionListener): void {
        process.on("unhandledRejection", handler);
    }

    /**
     * OnWarning()
     *
     * adds a listener to the process' "warning" event.
     * @param handler the handler to execute.
     */

    public static OnWarning(handler: NodeJS.WarningListener): void {
        process.on("warning", handler);
    }

    /**
     * OnWorkerCreated()
     *
     * adds a listener to the process' "worker" event.
     * @param handler the handler to execute.
     */

    public static OnWorkerCreated(handler: NodeJS.WorkerListener): void {
        process.on("worker", handler);
    }

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

    public static async Spawn(command: string, args: string[], options: SpawnOptions|undefined = undefined): Promise<string|Buffer|null|undefined> {

        try {
            const { stdout } = await spawn(command, args, {
                cwd: options && options.cwd ? options.cwd : Process.Cwd().toString(),
                detached: options?.detached,
                encoding: options?.encoding,
                env: options && options.env ? options.env : Process.env,
                gid: options?.gid,
                killSignal: options?.killSignal,
                maxBuffer: options?.maxBuffer,
                serialization: options?.serialization,
                timeout: options?.timeout,
                uid: options?.uid,
                signal: options?.signal,
                windowsVerbatimArguments: options?.windowsVerbatimArguments,
                stdio: options?.stdio,
                argv0: options?.argv0,
                shell: options?.shell,
                windowsHide: options?.windowsHide,
            });
            return stdout;
        }
        catch(e) {
            throw new ProcessException((e as Error).message);
        }
    }
}