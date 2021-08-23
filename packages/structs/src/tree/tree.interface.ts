

export interface TreeInterface<K, V> {

    /**
     * contains()
     * 
     * determines if the tree contains the key.
     * @param key the key to search for.
     */

    contains(key: K): boolean;

    /**
     * get()
     * 
     * gets the value associated with the key.
     * @param key the key of the value to get.
     */

    get(key: K): V | null;

    /**
     * insert()
     * 
     * inserts a node into the tree, with the associated key.
     * @param key The key being inserted
     * @param value the value being inserted.
     */

    insert(key: K, value: V|null): void;

    /**
     * isEmpty()
     * 
     * determines if the tree is empty.
     */

    isEmpty(): boolean;

    /**
     * remove()
     * 
     * removes the item in the tree, with the assiciated key. 
     * @param key the key of the node to remove.
     */

    remove(key: K): void;

    /**
     * size()
     * 
     * gets the size of the tree.
     */
    size(): number;
}