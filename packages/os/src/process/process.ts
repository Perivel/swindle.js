import process from "process";
import { Path } from "@swindle/filesystem";
import { ProcessException } from "../exceptions/exceptions.well";
import { exec, spawn, execFile, fork } from "promisify-child-process";

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

    public static async Exec(): ChildProcessPromise {
        
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

    public static OnMultipleResolves(handler: NodeJS.MultipleResolveListener): void {
        process.on("multipleResolves", handler);
    }

    public static OnRejectionHandled(handler: NodeJS.RejectionHandledListener): void {
        process.on("rejectionHandled", handler);
    }

    public static OnUncaughtException(handler: NodeJS.UncaughtExceptionListener): void {
        process.on("uncaughtException", handler);
    }

    public static OnUncaughtExceptionMonitor(handler: NodeJS.BeforeExitListener): void {
        process.on("uncaughtExceptionMonitor", handler);
    }

    public static OnUnhandledRejection(handler: NodeJS.UnhandledRejectionListener): void {
        process.on("unhandledRejection", handler);
    }

    public static OnWarning(handler: NodeJS.WarningListener): void {
        process.on("warning", handler);
    }

    public static OnWorkerCreated(handler: NodeJS.WorkerListener): void {
        process.on("worker", handler);
    }
}