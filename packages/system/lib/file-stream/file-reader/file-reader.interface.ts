
import { FileStreamInterface } from './../file-stream.interface';

export interface FileReaderInterface extends FileStreamInterface {

    /**
     * all()
     * 
     * reads all the data in the stream.
     */
    
    all(): string;

    /**
     * hasNext()
     * 
     * determines if there is still data left to be read.
     */

    hasNext(): Promise<boolean>;

    /**
     * next()
     * 
     * gets data from the buffer, of the specified size.
     * @param size the size of data to get in bytes.
     * @param encoding the encoding
     * @return the data. 
     */
    
    next(size?: number): Promise<string>;

    /**
     * nextLine()
     * 
     * reads the next line in a file.
     */
    
    //nextLine(): string;
}