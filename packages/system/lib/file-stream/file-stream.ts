import { Equatable } from '@swindle/core';
import { FileStreamInterface } from './file-stream.interface';

export abstract class FileStream implements Equatable, FileStreamInterface {

    constructor() {
        //
    }

    /**
     * close()
     * 
     * closes the file stream.
     */

    public abstract close(): Promise<void>;

    /**
     * encoding()
     * 
     * the stream encoding.
     */

    public abstract encoding(): BufferEncoding;

    public abstract equals(suspect: any): boolean;
}