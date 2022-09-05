import { createReadStream, ReadStream } from 'fs';
import { FileStream } from './../file-stream';
import { File } from './../../file';
import { FileReaderInterface } from './file-reader.interface';
import { FileReaderOptions } from './file-reader-options.interface';
import { FileStreamException, FileStreamDataException } from '../exceptions';

/**
 * FileReader
 * 
 * A FileReader class
 */

export class FileReader extends FileStream implements FileReaderInterface {

    private readonly _stream: ReadStream;
    private readonly _encoding: BufferEncoding;
    private _isClosed: boolean;
    private _bytesRead: number;
    private _fileSize: number | null | bigint;

    /**
     * Creates a FileReader stream.
     * @param file the file to read.
     * @param options options for reading a file.
     */
    constructor(file: File, options: FileReaderOptions = { encoding: 'utf-8' }) {
        super(file);
        this._encoding = options.encoding;
        this._isClosed = false;
        this._bytesRead = 0;
        this._fileSize = null;
        this._stream = createReadStream(this.file().path().toString(), {
            encoding: this._encoding,
            autoClose: true
        });
        this._stream.pause();
    }

    // the maximum byte size supported is 1GiB
    private static MAX_BYTES = 1073741824;

    /**
     * all()
     * 
     * reads all the data in the stream.
     * @throws FileStreamException when the stream cannot be read (i.e. It was closed)
     */

    public all(): string {
        if (this._isClosed) {
            throw new FileStreamException();
        }
        let contents = '';
        let data: Buffer;
        while (data = this._stream.read()) {
            contents += data.toString(this.encoding());
        }
        return contents;
    }

    /**
     * close()
     * 
     * closes the file stream.
     */

    public async close(): Promise<void> {
        this._stream.close();
        this._isClosed = true;
    }

    /**
     * encoding()
     * 
     * the stream encoding.
     */

    public encoding(): BufferEncoding {
        return this._encoding;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof FileReader) {
            const other = suspect as FileReader;
            isEqual = super.equals(other as FileStream) && (this.encoding() === other.encoding());
        }

        return isEqual;
    }

    /**
     * hasNext()
     * 
     * determines if there is still data left to be read.
     */

    public async hasNext(): Promise<boolean> {
        if (!this._fileSize) {
            const stats = await this.file().stats();
            this._fileSize = stats.size;
        }
        return this._bytesRead < this._fileSize;
    }

    /**
     * next()
     * 
     * gets data from the buffer, of the specified size.
     * @param size the size of data to get in bytes.
     * @param encoding the encoding
     * @return the data. 
     */

    public async next(size: number = 64): Promise<string> {

        if (this._isClosed) {
            throw new FileStreamException();
        }

        if (!this._fileSize) {
            const stats = await this.file().stats();
            this._fileSize = stats.size;
        }

        size = size > FileReader.MAX_BYTES ? FileReader.MAX_BYTES : size;
        const data = this._stream.read(size);

        if (data) {
            this._bytesRead += size;
            return (data as Buffer).toString(this.encoding());
        }
        else {
            // no data to read.
            throw new FileStreamDataException();
        }
    }
}