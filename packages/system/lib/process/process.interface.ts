import { SyncFn } from '@swindle/core';
import { SendHandle, Serializable } from 'child_process';

/**
 * MessageHandlerFn
 * 
 * A message Handler function.
 */

export type MessageHandlerFn = (message: Serializable, handle: SendHandle) => void;

/**
 * ErrorHandlerFn
 * 
 * An error handler fn.
 */

export type ErrorHandlerFn = (error: Error) => void;

/**
 * ProcessInterface
 * 
 * The API for the process.
 */

export interface ProcessInterface {

    /**
     * addErrorHandler()
     * 
     * adds an error handler to the process.
     * @param handler the error handler
     */

    addErrorHandler(handler: ErrorHandlerFn): void;

    /**
     * addMessageHandler()
     * 
     * adds a message handler to the process.
     * @param handler the message handler to add.
     */

    addMessageHandler(handler: MessageHandlerFn): void;

    /**
     * canBeMessaged()
     * 
     * determines if the process can be sent messages (i.e. if process.sendMessage() can be used on the instance.).
     */

    canBeMessaged(): boolean;

    /**
     * exitCode()
     * 
     * gets the process exit code.
     */
    
    exitCode(): number | null;

    /**
     * isActive()
     * 
     * determines if the process is active.
     */

    isActive(): boolean;

    /**
     * isForked()
     * 
     * determines if the process is forked.
     */

    isForked(): boolean;

    /**
     * id()
     * 
     * gets the ID of the process.
     */

    id(): number;

    /**
     * kill()
     * 
     * kills the process.
     * @param signal the signal to send.
     */

    kill(signal: NodeJS.Signals): void;

    /**
     * sendMessage()
     * 
     * sends a message to the child process.
     */

    sendMessage(message: Serializable): Promise<void>;
}