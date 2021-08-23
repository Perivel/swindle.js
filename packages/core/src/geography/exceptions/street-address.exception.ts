import { InvalidArgumentException } from './../../common/common.module';

export class StreetAddressException extends InvalidArgumentException {

    constructor(message: string = "Street Address Error") {
        super(message);
    }
}