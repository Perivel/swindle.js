import { InvalidArgumentException } from "./invalid-argument.exception";


export class OutOfBoundsException extends InvalidArgumentException {
    constructor(message: string = 'Argument out of bounds.') {
        super(message);
    }
}