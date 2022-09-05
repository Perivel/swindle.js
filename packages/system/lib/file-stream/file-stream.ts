import { Equatable } from '@swindle/core';
import { File } from '../file';
import { FileStreamInterface } from './file-stream.interface';

export abstract class FileStream implements Equatable, FileStreamInterface {

    private readonly _file: File;

    constructor(file: File) {
        this._file = file;
    }

    /**
     * close()
     * 
     * closes the file stream.
     */

    public abstract close(): Promise<void>;

    /**
     * file()
     * 
     * the source file of the stream.
     */

    public file(): File {
        return this._file;
    }

    /**
     * encoding()
     * 
     * the stream encoding.
     */

    public abstract encoding(): BufferEncoding;

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof FileStream) {
            const other = suspect as FileStream;
            isEqual = this.file().equals(other.file());
        }

        return isEqual;
    }

    public toString(): string {
        return `Stream for file ${this.file().path().toString()}`;
    }
}