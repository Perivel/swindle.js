import { FileStreamInterface } from './../file-stream.interface';

export interface FileWriterInterface extends FileStreamInterface {

    /**
     * write()
     * 
     * writes data to the file.
     * @param x the data write to the file
     */

    write(x: string): Promise<void>;

    /**
     * writeLine()
     * 
     * writes a line of data to the file.
     * @param x the data to write to te file.
     */
    
    writeLine(x: string): Promise<void>;
}