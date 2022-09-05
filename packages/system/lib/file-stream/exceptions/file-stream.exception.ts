import { SystemException } from './../../exceptions';

export class FileStreamException extends SystemException {

    constructor(message: string = "File Stream Error") {
        super(message);
    }
}