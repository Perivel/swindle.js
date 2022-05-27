
/**
 * EdgeInterface
 * 
 * Defines the API for an Edge.
 */

export interface EdgeInterface<T> {

    /**
     * value()
     * 
     * the value the edge is pointing to.
     */

    value(): T;

    /**
     * wight()
     * 
     * the weight of the edge.
     */
    
    weight(): number;
}