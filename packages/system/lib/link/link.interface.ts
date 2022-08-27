import { PathInterface } from './../path';
/**
 * LinkInterface
 * 
 * An interface for a Symbolic Link
 */

export interface LinkInterface {

    /**
     * isValid()
     * 
     * determines if the target of the link exists.
     */
    
    isValid(): Promise<boolean>;

    /**
     * target()
     * 
     * gets the target object of the link.
     */

    target(): Promise<PathInterface | null>;
}