import { LinkedList } from './../../linked-list/linked-list';
import { NodeInterface } from './../../node/node.interface';
import { EdgeInterface } from './../edge/edge.interface';

/**
 * VertexInterface
 * 
 * A Vertex API.
 */

export interface VertexInterface<T> extends NodeInterface<T> {
    
    /**
     * addEdge()
     * 
     * adds an edge to the vertex.
     * @param target The vertex to link to.
     */

    addEdge(target: VertexInterface<T>, weight: number): void;

    /**
     * adjacentTo()
     * 
     * determines if the vertex is adjacent to the suspect vertex.
     * @param suspect the suspect vertex.
     */
    
    adjacentTo(suspect: VertexInterface<T>): boolean;

    /**
     * edges()
     * 
     * edges represents a list of adjacent vertices.
     */

    edges(): AdjacencyList<T>;

    /**
     * removeEdge()
     * 
     * removes an edge.
     * @param target The target vertex to remove.
     */

    removeEdge(target: VertexInterface<T>): void;
}

/**
 * AdjacencyList
 * 
 * An AdjacencyList.
 */

export type AdjacencyList<T> = LinkedList<EdgeInterface<VertexInterface<T>>>;