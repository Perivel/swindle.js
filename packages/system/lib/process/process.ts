import { Equatable } from '@swindle/core';
import {
    exec,
    spawn,
    fork,
    ChildProcess,
    Serializable
} from 'child_process';
import { Directory } from '../directory';
import { ProcessException, ProcessFailedException } from './exceptions';
import { ErrorHandlerFn, MessageHandlerFn, ProcessInterface } from './process.interface';
import { RunOptions } from './run-options.interface';
import { StartProcessOptions } from './start-process-options.interface';

/**
 * Process
 * 
 * The process object
 */

export class Process implements ProcessInterface, Equatable {

    private readonly childProcess: ChildProcess;
    private readonly _forked: boolean;
    private _isKilled: boolean;
    private _exitCode: number|null;

    private constructor(child: ChildProcess, isForked: boolean) {
        this.childProcess = child;
        this._forked = isForked;
        this._isKilled = false;
        this._exitCode = null;

        this.childProcess.on('exit', (code) => {
            this._exitCode = code;
        })
    }

    /**
     * Run()
     * 
     * runs a command.
     * @param cmd the command to run
     * @param options command options.
     * @returns the output of the process.
     * @throws ProcessFailedException when the process exits with a non-zero exit code.
     */

    public static Run(cmd: string, options: RunOptions = {
        cwd: Directory.Current().path(),
        env: process.env
    }): Promise<string> {
        // resolve the options.
        let resolvedOptions: RunOptions;

        if (options) {
            resolvedOptions = {
                cwd: options.cwd,
                env: options.env ? options.env : process.env
            };
        }
        else {
            resolvedOptions = options;
        }

        return new Promise<string>((resolve, reject) => {
            exec(cmd, {
                cwd: resolvedOptions.cwd!.toString(),
                env: resolvedOptions.env!
            },
                (error, stdout) => {
                    if (error) {
                        reject(new ProcessFailedException(error.message, error.code));
                    }
                    resolve(stdout);
                });
        });
    }

    /**
     * Start()
     * 
     * creates a new child process
     */

    public static Start(cmd: string, options: StartProcessOptions = {
        cwd: Directory.Current().path(),
        arguments: [],
        fork: false,
        env: process.env,
        serializationType: 'json'
    }): Process {

        // resolve options
        let resolvedOptions: StartProcessOptions;

        if (options) {
            resolvedOptions = {
                arguments: options.arguments ? options.arguments : [],
                fork: options.fork ? options.fork : false,
                cwd: options.cwd ? options.cwd : Directory.Current().path(),
                env: options.env ? options.env : process.env,
                serializationType: options.serializationType ? options.serializationType : 'json'
            };
        }
        else {
            resolvedOptions = {
                cwd: Directory.Current().path(),
                arguments: [],
                fork: false,
                env: process.env,
                serializationType: 'json'
            };
        }

        // create the child process
        let child: ChildProcess;

        if (resolvedOptions.fork) {
            child = fork(cmd, {
                cwd: resolvedOptions.cwd.toString(),
                env: resolvedOptions.env,
                execArgv: resolvedOptions.arguments,
                serialization: resolvedOptions.serializationType
            });
        }
        else {
            child = spawn(cmd, resolvedOptions.arguments!, {
                cwd: resolvedOptions.cwd.toString(),
                env: resolvedOptions.env,
                serialization: resolvedOptions.serializationType
            });
        }
        return new Process(child, resolvedOptions.fork!);
    }

    /**
     * addErrorHandler()
     * 
     * adds an error handler to the process.
     * @param handler the error handler
     */

    public addErrorHandler(handler: ErrorHandlerFn): void {
        this.childProcess.on('error', (error) => {
            handler(error);
        });
    }

    /**
     * addMessageHandler()
     * 
     * adds a message handler to the process.
     * @param handler the message handler to add.
     */

    public addMessageHandler(handler: MessageHandlerFn): void {
        this.childProcess.on('message', (message, handle) => {
            handler(message, handle);
        });
    }

    /**
     * canBeMessaged()
     * 
     * determines if the process can be sent messages (i.e. if process.sendMessage() can be used on the instance.).
     */

    public canBeMessaged(): boolean {
        return this.childProcess.connected;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof Process) {
            const other = suspect as Process;
            isEqual = this.id() === other.id();
        }

        return isEqual;
    }

    /**
     * exitCode()
     * 
     * gets the process exit code.
     */
    
    public exitCode(): number | null {
        return this._exitCode;
    }

    /**
     * id()
     * 
     * gets the ID of the process.
     */

    public id(): number {
        return this.childProcess.pid!;
    }

    /**
     * isActive()
     * 
     * determines if the process is active.
     */
    
    public isActive(): boolean {
        return this._exitCode === null;
    }

    /**
     * isForked()
     * 
     * determines if the process is forked.
     */

    public isForked(): boolean {
        return this._forked;
    }

    /**
     * kill()
     * 
     * kills the process.
     * @param signal the signal to send.
     * @default 'SIGTERM'
     * @throws ProcessException when the operation fails.
     */

    public kill(signal: NodeJS.Signals = 'SIGTERM'): void {
        this._isKilled = this.childProcess.kill(signal);

        if (!this._isKilled) {
            throw new ProcessException("Failed to kill process with UD " + this.toString());
        }
    }

    /**
     * sendMessage()
     * 
     * sends a message to the child process.
     * @throws ProcessException when the message cannot be sent, like if there is no connection to the child/parent process.
     */

    public sendMessage(message: Serializable): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.canBeMessaged()) {
                this.childProcess.send(message, error => {
                    if (error) {
                        reject(new ProcessException(error.message));
                    }
                    else {
                        resolve();
                    }
                });
            }
            else {
                reject(new ProcessException('Message cannot be sent'));
            }
        });
    }

    public toString(): string {
        return this.id().toString();
    }
}