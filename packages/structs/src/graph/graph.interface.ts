import { VertexInterface } from "./vertex/vertex.interface";

/**
 * GraphInterface
 * 
 * The Graph API.
 */

export interface GraphInterface<T> {

    /**
     * add()
     * 
     * adds a value to the graph.
     * @param value the value to add.
     */

    add(value: T): void;

    /**
     * createEdge()
     * 
     * creates an edge to the graph.
     * @param from the initial value
     * @param to the target value.
     * @param weight an optional weight. Defaults to 0.
     */

    createEdge(from: T, to: T, weight: number): void;

    /**
     * contians()
     * 
     * determines if the graph contains the specified value.
     * @param value the value to check for.
     */

    contains(value: T): boolean;

    /**
     * containsEdge()
     * 
     * Determines if the graph contains the edge between from and to.
     * @param from the value of the start of the edge.
     * @param to the value of the end of the edge.
     */
    
    containsEdge(from: T, to: T): boolean;

    /**
     * clear()
     * 
     * clears the graph.
     */
    
    clear(): void;

    /**
     * find()
     * 
     * gets the vertex with the specified value.
     * @param value the value to search for.
     */

    find(value: T): VertexInterface<T> | null;

    /**
     * hasPath()
     * 
     * determines if there exists a path from the starting value, from, to the target value, to.
     * @param from The starting value.
     * @param to the target value.
     */

    hasPath(from: T, to: T): boolean;

    /**
     * isDirected()
     * 
     * determines if the graph is directed.
     */

    isDirected(): boolean;

    /**
     * isEmpty()
     * 
     * determines if the graph is empty.
     */

    isEmpty(): boolean;

    /**
     * path()
     * 
     * gets the shortest path from the initial value, from, to the target value, to.
     * @param from the initial value.
     * @param to the target value.
     */

    path(from: T, to: T): VertexPath<T>

    /**
     * remove()
     * 
     * removes a value from the graph.
     * @param value the value to remove.
     */

    remove(value: T): void;

    /**
     * removeEdge()
     * 
     * removes an edge from the graph.
     * @param from the intital value
     * @param to the target value.
     */

    removeEdge(from: T, to: T): void;

    /**
     * toArray()
     * 
     * converts the graph to an array.
     */

    toArray(): Array<VertexInterface<T>>;
}

export interface VertexPath<T> {
    path: T[];
    weight: number;
}