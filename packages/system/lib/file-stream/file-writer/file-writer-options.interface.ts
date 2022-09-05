import { FileStreamOptions } from './../file-stream-options.interface';

export interface FileWriterOptions extends FileStreamOptions {
    encoding: BufferEncoding;
    batch?: {
        size: number
    }
}