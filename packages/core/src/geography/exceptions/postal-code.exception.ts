import { StreetAddressException } from './street-address.exception';

export class PostalCodeException extends StreetAddressException {

    constructor(message: string = "Invalid Postal Code") {
        super(message);
    }
}