import { GraphInterface, VertexPath } from './graph.interface';
import { Vertex } from './vertex/vertex';
import { GraphException } from './graph.exception';
import { PriorityQueue, PriorityQueueOrder } from './../priority-queue/priority-queue.module';

/**
 * Graph
 * 
 * A graph data structure.
 */

export class Graph<T> implements GraphInterface<T> {

    private _vertices: Array<Vertex<T>>;
    private readonly _isDirected: boolean;
    private readonly _calculatedPathsForSourceVerticies: Map<Vertex<T>, DijkstraPathInfo<T>>;

    constructor(directed: boolean = false) {
        this._vertices = new Array<Vertex<T>>();
        this._isDirected = directed;
        this._calculatedPathsForSourceVerticies = new Map<Vertex<T>, DijkstraPathInfo<T>>();
    }

    /**
     * add()
     * 
     * adds a value to the graph.
     * @param value the value to add.
     * @throws GraphException when attempting to insert a duplicate value.
     */

    public add(value: T): void {
        if (!this.contains(value)) {
            const newVertex = new Vertex<T>(value);
            this._vertices.push(newVertex);
            this._calculatedPathsForSourceVerticies.clear();
        }
        else {
            // duplicate entry.
            throw new GraphException('Duplicate value error.');
        }
    }

    /**
     * createEdge()
     * 
     * creates an edge to the graph.
     * @param from the initial value
     * @param to the target value.
     * @param weight an optional weight for the edge. Defaults to 0.0.
     * @throws GrpaphException when attempting to add a duplicate edge.
     */

    public createEdge(from: T, to: T, weight: number = 1.0): void {

        if (this.contains(from) && this.contains(to)) {
            const initialIndex = this.indexOf(from);
            const targetIndex = this.indexOf(to);

            if (!this._vertices[initialIndex].adjacentTo(this._vertices[targetIndex])) {
                this._vertices[initialIndex].addEdge(this._vertices[targetIndex], weight);
            }

            if (!this.isDirected() && !this._vertices[targetIndex].adjacentTo(this._vertices[initialIndex])) {
                this._vertices[targetIndex].addEdge(this._vertices[initialIndex], weight);
            }
            this._calculatedPathsForSourceVerticies.clear();
        }
        else {
            throw new GraphException('Duplicate edge error.');
        }
    }

    /**
     * contians()
     * 
     * determines if the graph contains the specified value.
     * @param value the value to check for.
     */

    public contains(value: T): boolean {
        const index = this.indexOf(value);
        return index >= -1;
    }

    /**
     * deleteEdgesTo()
     * 
     * delete all edges to the target vertex.
     * @param target the target vertex to remove all edges to.
     */

    private deletedEdgesTo(target: Vertex<T>): void {
        this._vertices.forEach(vertex => {
            if (vertex.adjacentTo(target)) {
                vertex.removeEdge(target);
            }
        });
        this._calculatedPathsForSourceVerticies.clear();
    }

    /**
     * find()
     * 
     * gets the vertex with the specified value.
     * @param value the value to search for.
     */

    public find(value: T): Vertex<T> | null {
        const valueVertex = new Vertex(value);
        const vertex = this._vertices.find((suspect) => {
            return suspect.equals(valueVertex);
        });

        return vertex ? vertex : null;
    }

    /**
     * generatePath()
     * 
     * generates a path, given the path information, start vertex, and destination vertex.
     * @param info the Dijkstra Path Information.
     * @param start The starting vertex.
     * @param destination The destination vertex.
     * @returns The shortest path from the start vertex to the destination vertex.
     */

    private generatePath(info: DijkstraPathInfo<T>, start: Vertex<T>, destination: Vertex<T>): VertexPath<T> {
        if (start.equals(destination)) {
            return {
                path: [start.value()],
                weight: 0.0
            };
        }
        else {
            const [weights, prev] = info;
            const subpath = this.generatePath(info, start, prev.get(destination)!);
            return {
                path: [...subpath.path, destination.value()],
                weight: subpath.weight
            }
        }
    }

    /**
     * getDijkstraPathInfo()
     * 
     * implements Dijkstra's Algorithm to get the path information for a given source Vertex.
     * @param source The source vertex.
     * @returns A tuple consisting the form [<Map of distances>, map of vertices]
     */

    private getDijkstraPathInfo(source: Vertex<T>): DijkstraPathInfo<T> {
        const distances = new Map<Vertex<T>, number>();
        const previous = new Map<Vertex<T>, Vertex<T>>();
        const queue = new PriorityQueue<Vertex<T>>(PriorityQueueOrder.Ascending);

        distances.set(source, 0.0);

        this._vertices.forEach(vertex => {
            if (!vertex.equals(source)) {
                distances.set(vertex, Infinity);
            }
            queue.enqueue(vertex, distances.get(vertex)!);
        });

        while (!queue.isEmpty()) {
            const smallestVertex = queue.dequeue()!;

            smallestVertex.edges().forEach(currentNeighbor => {
                const alt = distances.get(smallestVertex)! + currentNeighbor.weight();
                const neighborValue = currentNeighbor.value() as Vertex<T>;

                if (alt < distances.get(neighborValue)!) {
                    distances.set(neighborValue, alt);
                    previous.set(neighborValue, smallestVertex);
                    queue.updatePriority(neighborValue, alt);
                }
            });
        }

        return [distances, previous];
    }

    /**
     * hasPath()
     * 
     * determines if there exists a path from the starting value, from, to the target value, to.
     * @param from The starting value.
     * @param to the target value.
     */

    public hasPath(from: T, to: T): boolean {
        return this.path(from, to).path.length > 0;
    }

    /**
     * indexOf()
     * 
     * gets the index of the vertex containing the value.
     * @param value the value to get the index of.
     * @returns the index of the first instance of the vertex containing the value.
     */

    private indexOf(value: T): number {
        const valueVertex = new Vertex(value);
        return this._vertices.reduce((prev, current, index) => {
            if (current.equals(valueVertex)) {
                return index;
            }
            else {
                return prev;
            }
        }, -1);
    }

    /**
     * isDirected()
     * 
     * determines if the graph is directed.
     */

    public isDirected(): boolean {
        return this._isDirected;
    }

    /**
     * isEmpty()
     * 
     * determines if the graph is empty.
     */

    public isEmpty(): boolean {
        return this._vertices.length === 0;
    }

    /**
     * path()
     * 
     * gets the shortest path from the initial value, from, to the target value, to.
     * @param from the initial value.
     * @param to the target value.
     * @note We need to check for cases where a path does not exist.
     */

    public path(from: T, to: T): VertexPath<T> {
        const start = this.find(from);
        const target = this.find(to);
        let res: VertexPath<T>|null = null;

        if (start && target) {
            // we use Dijkstra's Algorithm to generate a path for the source.
            let path: DijkstraPathInfo<T>|null = null;

            if (this._calculatedPathsForSourceVerticies.has(start)) {
                path = this._calculatedPathsForSourceVerticies.get(start)!;
            }
            else {
                // we calculate the path infor and save it for later reference.
                path = this.getDijkstraPathInfo(start);
                this._calculatedPathsForSourceVerticies.set(start, path);
            }

            // generate the path.
            res = this.generatePath(path, start, target);
        }

        return res!;
    }

    /**
     * remove()
     * 
     * removes a value from the graph.
     * @param value the value to remove.
     */

    public remove(value: T): void {
        if (this.contains(value)) {
            const target = this.find(value)!;
            this.deletedEdgesTo(target);
            this._vertices = this._vertices.filter(suspect => !suspect.equals(target));
            this._calculatedPathsForSourceVerticies.clear();
        }
    }

    /**
     * removeEdge()
     * 
     * removes an edge from the graph.
     * @param from the intital value
     * @param to the target value.
     * @throws GraphException when either values do not exist in the graph.
     */

    public removeEdge(from: T, to: T): void {
        if (this.contains(from) && this.contains(to)) {
            const initialIndex = this.indexOf(from);
            const targetIndex = this.indexOf(to);

            if (!this._vertices[initialIndex].adjacentTo(this._vertices[targetIndex])) {
                this._vertices[initialIndex].removeEdge(this._vertices[targetIndex]);
            }

            if (!this.isDirected() && !this._vertices[targetIndex].adjacentTo(this._vertices[initialIndex])) {
                this._vertices[targetIndex].removeEdge(this._vertices[initialIndex]);
            }
            this._calculatedPathsForSourceVerticies.clear();
        }
        else {
            throw new GraphException('Duplicate edge error.');
        }
    }

    /**
     * toArray()
     * 
     * converts the graph to an array.
     */

    public toArray(): Array<Vertex<T>> {
        return this._vertices;
    }
}

/**
 * DjkstraPathInfo
 * 
 * A special type indicating the return value of Dijkstra' algorithm
 */

type DijkstraPathInfo<T> = [Map<Vertex<T>, number>, Map<Vertex<T>, Vertex<T>>];