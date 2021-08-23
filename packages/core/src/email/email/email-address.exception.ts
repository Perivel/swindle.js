import { InvalidArgumentException } from "../../common/common.module";

export class EmailAddressException extends InvalidArgumentException {

    constructor(message: string = "Invalid Email Address") {
        super(message);
    }
}