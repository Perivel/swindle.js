import { Equatable } from '@swindle/core';
import { Node } from './../../node/node';
import { AdjacencyList, VertexInterface } from './vertex.interface';
import { Edge } from './../edge/edge';
import { LinkedList } from '../../linked-list/linked-list';
import { EdgeInterface } from '../edge/edge.interface';

/**
 * Vertex
 * 
 * A Vertex represents a Data Structure for a Graph.
 */

export class Vertex<T> extends Node<T> implements VertexInterface<T>, Equatable {

    private readonly _adjacencyList: AdjacencyList<T>;

    constructor(value: T, adjacencyList: AdjacencyList<T> | null = null) {
        super(value);

        if (adjacencyList) {
            this._adjacencyList = adjacencyList;
        }
        else {
            this._adjacencyList = new LinkedList<EdgeInterface<VertexInterface<T>>>((a, b) => {
                let equalValue = false;
                const aValue = a.value() as any;
                const bValue = b.value() as any;

                if (typeof aValue.equals === 'function') {
                    equalValue = aValue.equals(bValue);
                }
                else {
                    equalValue = aValue === bValue;
                }

                return equalValue ? 0 : 1;
            });
        }
    }

    /**
     * addEdge()
     * 
     * adds an edge to the vertex.
     * @param target The vertex to link to.
     */

    public addEdge(target: Vertex<T>, weight: number = 0): void {
        this._adjacencyList.insert(new Edge(target, weight));
    }

    /**
     * adjacentTo()
     * 
     * determines if the vertex is adjacent to the suspect vertex.
     * @param suspect the suspect vertex.
     */

    public adjacentTo(suspect: Vertex<T>): boolean {
        const node = this._adjacencyList.get(new Edge<Vertex<T>>(suspect));
        return node !== null;
    }

    /**
     * edges()
     * 
     * edges represents a list of adjacent vertices.
     */

    public edges(): AdjacencyList<T> {
        return this._adjacencyList;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        // check if the suspect is a vertex.
        if (suspect instanceof Vertex) {
            // check if the value is the same type.
            const other = suspect as Vertex<T>;

            // check if the type defines an equals() function.
            if (typeof (this.value() as any).equals === 'function') {
                // use the equals() function to determine equality.
                isEqual = (this.value() as any).equals(other.value() as any);
            }
            else {
                // we fall back to simple equality.
                isEqual = this.value() === other.value();
            }
        }

        return isEqual;
    }

    /**
     * removeEdge()
     * 
     * removes an edge.
     * @param target The target vertex to remove.
     */

    public removeEdge(target: Vertex<T>): void {
        const edge = this._adjacencyList.get(new Edge<Vertex<T>>(target))?.value();

        if (edge) {
            this._adjacencyList.remove(edge);
        }
    }

    public toString(): string {
        return (this.value() as any).toString();
    }
}