import { StreetAddressException } from './street-address.exception'

export class LocalityException extends StreetAddressException {

    constructor(message: string = "Invalid Locality") {
        super(message);
    }
}