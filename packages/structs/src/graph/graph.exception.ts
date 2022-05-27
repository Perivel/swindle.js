import { BaseException } from '@swindle/core';

/**
 * GraphException
 * 
 * A General Graph Error.
 */

export class GraphException extends BaseException {

    constructor(message: string = "Graph Error") {
        super(message);
    }
}