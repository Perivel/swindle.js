import { PathInterface } from "../path";
import { CopyOptions } from "./copy-options.interface";


export interface Copiable {

    /**
     * copy()
     * 
     * copies the directory to the specified path.
     * @param to the destination to copy to.
     * @param options copy options.
     */

    copy(to: PathInterface | string, options?: CopyOptions): Promise<void>;
}