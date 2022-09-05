import { FileInterface } from "../file";

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
     * file()
     * 
     * the source file of the stream.
     */
    
    file(): FileInterface;

    /**
     * encoding()
     * 
     * the stream encoding.
     */
    
    encoding(): BufferEncoding;
}