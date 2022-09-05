import { createWriteStream, WriteStream } from 'fs';
import { File } from '../../file';
import { FileStreamDataException, FileStreamException } from '../exceptions';
import { FileStream } from './../file-stream';
import { FileWriterOptions } from './file-writer-options.interface';
import { FileWriterInterface } from './file-writer.interface';

/**
 * FileWriter
 * 
 * A FileWriter
 */

export class FileWriter extends FileStream implements FileWriterInterface {

    // the write stream object
    private readonly _stream: WriteStream;

    // the encoding of the stream
    private readonly _encoding: BufferEncoding;

    // flag to indicate whether or not the stream is closed.
    private _isClosed: boolean;

    // a flag indicating the stream is currently corked.
    private _streamIsCorked: boolean;

    // a flag indicating whether or not to batch write operations.
    private readonly _batchWrites: boolean;

    // ongoing counter for writes.
    private _numWrites: number;

    // the size of the batch.
    private readonly _batchSize: number|null;

    constructor(file: File, options: FileWriterOptions = { encoding: 'utf-8', batch: { size: 30 } }) {
        super(file);
        this._isClosed = false;
        this._numWrites = 0;
        this._encoding = options.encoding;
        this._stream = createWriteStream(this.file().path().toString(), {
            encoding: this._encoding,
            autoClose: true
        });
        
        this._batchWrites = options.batch && (options.batch.size > 0.0) ? true : false;
        if (this._batchWrites) {
            this._stream.cork();
            this._batchSize = options.batch!.size!;
            this._streamIsCorked = true;
        }
        else {
            this._batchSize = null;
            this._streamIsCorked = false;
        }
    }

    /**
     * _batchIsFill()
     * 
     * determines if the current write batch is full.
     * @returns TRUE if the buffer is full. FALSE otherwise.
     */

    private _batchIsFull(): boolean {
        if (this._batchWrites) {
            // batch writes are enabled
            if (this._numWrites > 0.0) {
                return this._numWrites % this._batchSize! == 0;
            }
            else {
                return false;
            }

        }
        else {
            // batch writes is disabled so we always return TRUE
            return true;
        }
    }

    /**
     * close()
     * 
     * closes the file stream.
     */

    public async close(): Promise<void> {
        this._flush();
        this._stream.close();
        this._isClosed = true;
    }

    /**
     * _corkStream()
     * 
     * corks the stream.
     */

    private _corkStream():  void {
        if (!this._streamIsCorked) {
            this._stream.cork();
            this._streamIsCorked = true;
        }
    }

    /**
    * encoding()
    * 
    * the stream encoding.
    */

    public encoding(): BufferEncoding {
        return this._encoding;
    }

    /**
     * _flush()
     * 
     * Flushes the buffer.
     */
    private _flush(): void {
        this._uncorkStream();
        this._corkStream();
    }

    /**
     * _uncorkStream()
     * 
     * uncorks the stream.
     */

    private _uncorkStream(): void {
        if (this._streamIsCorked) {
            this._stream.uncork();
            this._streamIsCorked = false;
        }
    }

    /**
     * write()
     * 
     * writes data to the file.
     * @param x the data write to the file
     */

    public async write(x: string): Promise<void> {
        if (this._isClosed) {
            throw new FileStreamException();
        }
        // write the data
        this._stream.write(x, (err) => {
            if (err) throw new FileStreamDataException((err.message));
            this._numWrites++;
        });

        // determine if the batch is full.
        if (this._batchWrites && this._batchIsFull()) {
            this._flush();
        }
    }

    /**
     * writeLine()
     * 
     * writes a line of data to the file.
     * @param x the data to write to te file.
     */

    public async writeLine(x: string): Promise<void> {
        await this.write(`${x}\n`);
    }
}