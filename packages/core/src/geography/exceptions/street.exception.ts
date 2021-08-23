import { StreetAddressException } from './../exceptions/street-address.exception';

export class StreetException extends StreetAddressException {

    constructor(message: string = "Invalid Street") {
        super(message);
    }
}