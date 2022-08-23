
/**
 * FileStreamInterface
 * 
 * An interface for a file stream
 */

export interface FileStreamInterface {

    /**
     * close()
     * 
     * closes the file stream.
     */

    close(): Promise<void>;

    /**
     * encoding()
     * 
     * the stream encoding.
     */
    
    encoding(): BufferEncoding;
}