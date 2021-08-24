import { BaseException } from './../../common/common.module';

/**
 * DurationException
 *
 * DurationException represents a generic duration error.
 */

export class DurationException extends BaseException {

    constructor(message: string = "Duration error.") {
        super(message);
    }
}