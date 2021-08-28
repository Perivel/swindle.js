"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Process = void 0;
const process_1 = __importDefault(require("process"));
const filesystem_1 = require("@swindle/filesystem");
const exceptions_well_1 = require("../exceptions/exceptions.well");
const promisify_child_process_1 = require("promisify-child-process");
/**
 * Process
 *
 * A wrapper around the process object, with a few enhancements.
 */
class Process {
    constructor() {
        //
    }
    /**
     * ChangeCurrentWorkingDirectory()
     *
     * changes the curent working directory.
     * @param path the path of the new current working directory.
     * @throws ProcessException when the operation fails.
     */
    static ChangeCurrentWorkingDirectory(path) {
        try {
            process_1.default.chdir(path.toString());
        }
        catch (e) {
            throw new exceptions_well_1.ProcessException();
        }
    }
    /**
     * ChDir()
     *
     * Alias to ChangeCurrentWorkingDirectory()
     * @param path the path of the new current working directory.
     * @throws ProcessException when the operation fails.
     */
    static ChDir(path) {
        Process.ChangeCurrentWorkingDirectory(path);
    }
    static CpuUsage(previousValue = undefined) {
        return process_1.default.cpuUsage(previousValue);
    }
    /**
     * CurrentWorkingDirectory()
     *
     * gets the current working directory.
     * @returns the current working directory.
     */
    static CurrentWorkingDirectory() {
        return new filesystem_1.Path(process_1.default.cwd());
    }
    /**
     * Cwd()
     *
     * Alias to CurrentWorkingDirectory();
     * @returns the current working directory.
     */
    static Cwd() {
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
    static Disconnect() {
        process_1.default.disconnect();
    }
    /**
     * EmitWarning()
     *
     * The process.emitWarning() method can be used to emit custom or application specific process warnings. These can be listened
     * for by adding a handler to the 'warning' event.
     * @param warning the warning to emit.
     * @param options options
     */
    static EmitWarning(warning, options = undefined) {
        process_1.default.emitWarning(warning, options);
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
    static async Exec(command, options = null) {
        try {
            const { stdout } = await promisify_child_process_1.exec(command, {
                cwd: options && options.cwd ? options.cwd : Process.Cwd().toString(),
                env: options && options.env ? options.env : Process.env,
                gid: options === null || options === void 0 ? void 0 : options.gid,
                killSignal: options === null || options === void 0 ? void 0 : options.killSignal,
                maxBuffer: options === null || options === void 0 ? void 0 : options.maxBuffer,
                shell: options === null || options === void 0 ? void 0 : options.shell,
                timeout: options === null || options === void 0 ? void 0 : options.timeout,
                uid: options === null || options === void 0 ? void 0 : options.uid,
                windowsHide: options === null || options === void 0 ? void 0 : options.windowsHide,
            });
            return stdout;
        }
        catch (e) {
            throw new exceptions_well_1.ProcessException(e.message);
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
    static async ExecFile(file, args, options = undefined) {
        try {
            const { stdout } = await promisify_child_process_1.execFile(file.toString(), args, {
                cwd: options && options.cwd ? options.cwd : Process.Cwd().toString(),
                env: options && options.env ? options.env : Process.env,
                gid: options === null || options === void 0 ? void 0 : options.gid,
                killSignal: options === null || options === void 0 ? void 0 : options.killSignal,
                maxBuffer: options === null || options === void 0 ? void 0 : options.maxBuffer,
                shell: options === null || options === void 0 ? void 0 : options.shell,
                timeout: options === null || options === void 0 ? void 0 : options.timeout,
                uid: options === null || options === void 0 ? void 0 : options.uid,
                windowsHide: options === null || options === void 0 ? void 0 : options.windowsHide,
                signal: options === null || options === void 0 ? void 0 : options.signal,
                windowsVerbatimArguments: options === null || options === void 0 ? void 0 : options.windowsVerbatimArguments,
            });
            return stdout;
        }
        catch (e) {
            throw new exceptions_well_1.ProcessException(e.message);
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
    static Exit(code = 0) {
        process_1.default.exit(code);
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
    static async Fork(modulePath, args, options = undefined) {
        try {
            const { stdout } = await promisify_child_process_1.fork(modulePath.toString(), args, {
                cwd: options && options.cwd ? options.cwd : Process.Cwd().toString(),
                detached: options === null || options === void 0 ? void 0 : options.detached,
                encoding: options === null || options === void 0 ? void 0 : options.encoding,
                env: options && options.env ? options.env : Process.env,
                execArgv: options === null || options === void 0 ? void 0 : options.execArgv,
                execPath: options === null || options === void 0 ? void 0 : options.execPath,
                gid: options === null || options === void 0 ? void 0 : options.gid,
                killSignal: options === null || options === void 0 ? void 0 : options.killSignal,
                maxBuffer: options === null || options === void 0 ? void 0 : options.maxBuffer,
                serialization: options === null || options === void 0 ? void 0 : options.serialization,
                timeout: options === null || options === void 0 ? void 0 : options.timeout,
                uid: options === null || options === void 0 ? void 0 : options.uid,
                silent: options === null || options === void 0 ? void 0 : options.silent,
                signal: options === null || options === void 0 ? void 0 : options.signal,
                windowsVerbatimArguments: options === null || options === void 0 ? void 0 : options.windowsVerbatimArguments,
                stdio: options === null || options === void 0 ? void 0 : options.stdio,
            });
            return stdout;
        }
        catch (e) {
            throw new exceptions_well_1.ProcessException(e.message);
        }
    }
    /**
     * OnBeforeExit()
     *
     * adds a listener to the process' "beforeExit" event.
     * @param handler The event handler to eecute.
     */
    static OnBeforeExit(handler) {
        process_1.default.on("beforeExit", handler);
    }
    /**
     * OnDisconnect()
     *
     * adds a listener to the process' "disconnect" event.
     * @param handler the event handler to execute.
     */
    static OnDisconnect(handler) {
        process_1.default.on("disconnect", handler);
    }
    /**
     * OnExit()
     *
     * adds a listener to the process' "exit" event.
     * @param handler the handler to execute.
     */
    static OnExit(handler) {
        process_1.default.on("exit", handler);
    }
    /**
     * OnMessage()
     *
     * adds a listener to the process' "message" event.
     * @param handler the handler to execute.
     */
    static OnMessage(handler) {
        process_1.default.on("message", handler);
    }
    /**
     * OnMultipleResolves()
     *
     * adds a listener to the process' "multipleResolves" event.
     * @param handler the handler to execute.
     */
    static OnMultipleResolves(handler) {
        process_1.default.on("multipleResolves", handler);
    }
    /**
     * OnRejectionHandled()
     *
     * adds a listener to the process' "regectionHandled" event.
     * @param handler the handler to execute.
     */
    static OnRejectionHandled(handler) {
        process_1.default.on("rejectionHandled", handler);
    }
    /**
     * OnUncaughtException()
     *
     * adds a listener to the process' "uncaughtException" event.
     * @param handler the handler to execute.
     */
    static OnUncaughtException(handler) {
        process_1.default.on("uncaughtException", handler);
    }
    /**
     * OnUncaughtExceptionMonitor()
     *
     * adds a listener to the process' "uncaughtExceptionMonitor" event.
     * @param handler the handler to execute.
     */
    static OnUncaughtExceptionMonitor(handler) {
        process_1.default.on("uncaughtExceptionMonitor", handler);
    }
    /**
     * OnUnhandledRejection()
     *
     * adds a listener to the process' "unhandledRejection" event.
     * @param handler the handler to execute.
     */
    static OnUnhandledRejection(handler) {
        process_1.default.on("unhandledRejection", handler);
    }
    /**
     * OnWarning()
     *
     * adds a listener to the process' "warning" event.
     * @param handler the handler to execute.
     */
    static OnWarning(handler) {
        process_1.default.on("warning", handler);
    }
    /**
     * OnWorkerCreated()
     *
     * adds a listener to the process' "worker" event.
     * @param handler the handler to execute.
     */
    static OnWorkerCreated(handler) {
        process_1.default.on("worker", handler);
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
    static async Spawn(command, args, options = undefined) {
        try {
            const { stdout } = await promisify_child_process_1.spawn(command, args, {
                cwd: options && options.cwd ? options.cwd : Process.Cwd().toString(),
                detached: options === null || options === void 0 ? void 0 : options.detached,
                encoding: options === null || options === void 0 ? void 0 : options.encoding,
                env: options && options.env ? options.env : Process.env,
                gid: options === null || options === void 0 ? void 0 : options.gid,
                killSignal: options === null || options === void 0 ? void 0 : options.killSignal,
                maxBuffer: options === null || options === void 0 ? void 0 : options.maxBuffer,
                serialization: options === null || options === void 0 ? void 0 : options.serialization,
                timeout: options === null || options === void 0 ? void 0 : options.timeout,
                uid: options === null || options === void 0 ? void 0 : options.uid,
                signal: options === null || options === void 0 ? void 0 : options.signal,
                windowsVerbatimArguments: options === null || options === void 0 ? void 0 : options.windowsVerbatimArguments,
                stdio: options === null || options === void 0 ? void 0 : options.stdio,
                argv0: options === null || options === void 0 ? void 0 : options.argv0,
                shell: options === null || options === void 0 ? void 0 : options.shell,
                windowsHide: options === null || options === void 0 ? void 0 : options.windowsHide,
            });
            return stdout;
        }
        catch (e) {
            throw new exceptions_well_1.ProcessException(e.message);
        }
    }
}
exports.Process = Process;
Process.architecture = process_1.default.arch;
Process.argv = process_1.default.argv;
Process.argv0 = process_1.default.argv0;
Process.config = process_1.default.config;
Process.connected = process_1.default.connected;
Process.debugPort = process_1.default.debugPort;
Process.env = process_1.default.env;
Process.execArgv = process_1.default.execArgv;
Process.exitCode = process_1.default.exitCode;
//# sourceMappingURL=process.js.map