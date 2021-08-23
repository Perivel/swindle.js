import { StreetAddressException } from './street-address.exception';

export class RegionException extends StreetAddressException {

    constructor(message: string = "Invalid Region") {
        super(message);
    }
}