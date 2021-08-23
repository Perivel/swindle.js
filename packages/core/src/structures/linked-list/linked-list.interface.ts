


export interface LinkedListInterface<T> {

    /**
     * clear()
     * 
     * clears the list.
     */

    clear(): void;

    /**
     * contains()
     * 
     * contains() determineds if the 
     * @param value the value to search for.
     */

    contains(value: T): boolean;

    /**
     * insert()
     * 
     * inserts the value in the list.
     * @param value the value to insert.
     */

    insert(value: T): void;

    /**
     * isEmpty()
     * 
     * determines if the list is empty.
     */
    
    isEmpty(): boolean;

    /**
     * remove() 
     * 
     * removes the value from the list.
     * @param value the value to remove.
     */

    remove(value: T): void;

    /**
     * size()
     * 
     * gets teh size of the linked list
     */

    size(): number;

    /**
     * toArray()
     * 
     * converts the list to an array.
     */

    toArray(): Array<T>;
}