import { BaseException } from './../../common/common.module';

/**
 * ColorException
 * 
 * A generic color error.
 */

export class ColorException extends BaseException {

    constructor(message: string = "Color Error") {
        super(message);
    }
}