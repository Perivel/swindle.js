import { FileInterface } from '../file';
import { LinkInterface } from '../link';
import { PathInterface } from './../path';

export interface DirectoryInterface {

    /**
     * contents()
     * 
     * gets the contents of the directory.
     */

    contents(): Promise<Array<LinkInterface|DirectoryInterface|FileInterface>>;
}