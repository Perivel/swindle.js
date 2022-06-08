import { BaseException } from './../common/common.module';

/**
 * IsoLanguageException
 * 
 * An IsoLanguage Error
 */

export class IsoLanguageException extends BaseException {
    constructor(message: string = "Language Error") {
        super(message);
    }
}