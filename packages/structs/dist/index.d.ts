import { Comparator, TraverseFn, Traversable, Equatable, BaseException } from "@swindle/core";
interface NodeInterface<T> {
    /**
     * value()
     *
     * gets the value of the node.
     */
    value(): T;
}
/**
 * Node
 *
 * A generic node.
 */
declare class Node<T> implements NodeInterface<T> {
    private readonly _value;
    constructor(value: T);
    /**
     * value()
     *
     * gets the value of the node.
     */
    value(): T;
}
/**
 * StackInterface
 *
 * StackInterface specifies the operations for a stack.
 */
interface StackInterface<T> {
    /**
     * clear()
     *
     * clear() clears the stack.
     */
    clear(): void;
    /**
     * isEmpty()
     *
     * isEmpty() determines if the stack is empty.
     */
    isEmpty(): boolean;
    /**
     * peek()
     *
     * peek() gets the next value in the stack.
     */
    peek(): T | null;
    /**
     * pop()
     *
     * pop() removes the next value in the stack.
     */
    pop(): T | null;
    /**
     * push()
     *
     * push() push pushes an item to the stack.
     * @param value The value to push.
     */
    push(value: T): void;
    /**
     * size()
     *
     * size() gets the number of items in the stack.
     */
    size(): number;
    /**
     * toArray()
     *
     * toArray() converts the stack to an array.
     */
    toArray(): Array<T>;
}
/**
 * Stack
 *
 * Stack is a Data structure, following the FIFO principle.
 *
 */
declare class Stack<T> implements StackInterface<T> {
    private _count;
    private _top;
    constructor();
    /**
     * clear()
     *
     * clear() clears the stack.
     */
    clear(): void;
    /**
     * isEmpty()
     *
     * isEmpty() determines if the stack is empty.
     */
    isEmpty(): boolean;
    /**
     * peek()
     *
     * peek() gets the next value in the stack.
     */
    peek(): T | null;
    /**
     * pop()
     *
     * pop() removes the next value in the stack.
     */
    pop(): T | null;
    /**
     * push()
     *
     * push() push pushes an item to the stack.
     * @param value The value to push.
     */
    push(value: T): void;
    /**
     * size()
     *
     * size() gets the number of items in the stack.
     */
    size(): number;
    /**
     * toArray()
     *
     * toArray() converts the stack to an array.
     */
    toArray(): Array<T>;
}
/**
 * QueueInterface
 *
 * QueueInterface specifies the functions of a queue.
 */
interface QueueInterface<T> {
    /**
     * clear()
     *
     * clear() clears the queue.
     */
    clear(): void;
    /**
     * dequeue()
     *
     * dequeue() removes the next item in the queue.
     */
    dequeue(): T | null;
    /**
     * enqueue()
     *
     * enqueue() inserts an item into the queue.
     * @param value the value to insert.
     */
    enqueue(value: T): void;
    /**
     * isEmpty()
     *
     * isEmpty() determines if the queue is empty.
     */
    isEmpty(): boolean;
    /**
     * peek()
     *
     * peek() gets the next item in the queue, but does not remove it.
     */
    peek(): T | null;
    /**
     * size()
     *
     * size() gets the number of elements in the queue.
     */
    size(): number;
    /**
     * toArray()
     *
     * toArray() converts the queue to an array.
     */
    toArray(): Array<T>;
}
/**
 * Queue
 *
 * Queue is a data structure that follows the LIFO principle.
 *
 */
declare class Queue<T> implements QueueInterface<T> {
    private _front;
    private _back;
    private _size;
    constructor();
    /**
     * clear()
     *
     * clear() clears the queue.
     */
    clear(): void;
    /**
     * dequeue()
     *
     * dequeue() removes the next item in the queue.
     * O(1)
     */
    dequeue(): T | null;
    /**
     * enqueue()
     *
     * enqueue() inserts an item into the queue.
     * O(1)
     * @param value the value to insert.
     */
    enqueue(value: T): void;
    /**
     * isEmpty()
     *
     * isEmpty() determines if the queue is empty.
     */
    isEmpty(): boolean;
    /**
     * peek()
     *
     * peek() gets the next item in the queue, but does not remove it.
     */
    peek(): T | null;
    /**
     * size()
     *
     * size() gets the number of elements in the queue.
     */
    size(): number;
    /**
     * toArray()
     *
     * toArray() converts the queue to an array.
     */
    toArray(): Array<T>;
    // ==========================
    // Help
    // ==========================
    /**
     * fillArray()
     *
     * fillArray() populates the array recursively.
     * @param node the first node.
     * @param array the array to fill.
     * @returns the filled array.
     */
    private fillArray;
}
/**
 * PriorityQueueInterface
 *
 * PriorityQueueInterface specifies the operations of a priority queue.
 */
interface PriorityQueueInterface<T> {
    /**
     * clear()
     *
     * clear() clears the queue.
     */
    clear(): void;
    /**
     * dequeue()
     *
     * dequeue() removes the next item in the queue.
     */
    dequeue(): T | null;
    /**
     * enqueue()
     *
     * enqueue() inserts an item into the queue.
     * @param value the value to insert.
     * @param priority the priority of this value.
     */
    enqueue(value: T, priority: number): void;
    /**
     * isEmpty()
     *
     * isEmpty() determines if the queue is empty.
     */
    isEmpty(): boolean;
    /**
     * peek()
     *
     * peek() gets the next item in the queue, but does not remove it.
     */
    peek(): T | null;
    /**
     * size()
     *
     * size() gets the number of elements in the queue.
     */
    size(): number;
    /**
     * toArray()
     *
     * toArray() converts the queue to an array.
     */
    toArray(): Array<T>;
    /**
     * updatePriority()
     *
     * updates the priority of the first occurance of the specified value.
     * @param target The value who's priority must be updated.
     * @param newPriority The new priority to set for the target value.
     */
    updatePriority(target: T, newPriority: number): void;
}
/**
 * PriorityQueueOrder
 *
 * The order of the priority queue.
 */
declare enum PriorityQueueOrder {
    Ascending = 0,
    Descending = 1
}
/**
 * PriorityQueue
 *
 * PriorityQueue is a priority queue.
 */
declare class PriorityQueue<T> implements PriorityQueueInterface<T> {
    private _values;
    private readonly _order;
    constructor(order?: PriorityQueueOrder);
    /**
     * clear()
     *
     * clear() clears the queue.
     */
    clear(): void;
    /**
     * dequeue()
     *
     * dequeue() removes the next item in the queue.
     */
    dequeue(): T | null;
    /**
     * enqueue()
     *
     * enqueue() inserts an item into the queue.
     * @param value the value to insert.
     * @param priority the priority of this value. The lower the priority, the earlier in the queue the item will be placed.
     */
    enqueue(value: T, priority: number): void;
    /**
     * insertAscending()
     *
     * inserts the node in ascending order by priority.
     * @param node the node to insert.
     */
    private insertAscending;
    /**
     * insertDescending()
     *
     * inserts the node in Descending order by priority.
     * @param node the node to insert.
     */
    private insertDescending;
    /**
     * isEmpty()
     *
     * isEmpty() determines if the queue is empty.
     */
    isEmpty(): boolean;
    /**
     * peek()
     *
     * peek() gets the next item in the queue, but does not remove it.
     */
    peek(): T | null;
    /**
     * size()
     *
     * size() gets the number of elements in the queue.
     */
    size(): number;
    /**
     * sortAscending()
     *
     * sorts the items in the queue in ascending order by priority.
     */
    private sortAscending;
    /**
     * sortDescending()
     *
     * sorts the items in the queue in descending order by priority.
     */
    private sortDescending;
    /**
     * toArray()
     *
     * toArray() converts the queue to an array.
     */
    toArray(): Array<T>;
    /**
     * updatePriority()
     *
     * updates the priority of the first occurance of the specified value.
     * @param target The value who's priority must be updated.
     * @param newPriority The new priority to set for the target value.
     */
    updatePriority(target: T, newPriority: number): void;
}
interface LinkedListNodeInterface<T> extends NodeInterface<T> {
    /**
     * next()
     *
     * next() gets the next node.
     */
    next(): LinkedListNodeInterface<T> | null;
    /**
     * setNext()
     *
     * sets the next node.
     * @param next The next node to set.
     */
    setNext(next: LinkedListNodeInterface<T> | null): void;
}
/**
 * LinkedListNode
 *
 * A linked list node.
 */
declare class LinkedListNode<T> extends Node<T> implements LinkedListNodeInterface<T> {
    private _next;
    constructor(value: T, next?: LinkedListNode<T> | null);
    /**
     * next()
     *
     * next() gets the next node.
     */
    next(): LinkedListNode<T> | null;
    /**
     * setNext()
     *
     * sets the next node.
     * @param next sets the next node.
     */
    setNext(next: LinkedListNode<T> | null): void;
}
interface LinkedListInterface<T> extends Traversable<T> {
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
     * get()
     *
     * gets the first node with the associated value, if it exists.
     * @param value the value of the node to get.
     * @returns the first node with the specified value, or null if not found.
     */
    get(value: T): LinkedListNodeInterface<T> | null;
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
declare class LinkedList<T> implements LinkedListInterface<T> {
    private _head;
    private _end;
    private _size;
    private readonly compare;
    constructor(comparator: Comparator<T>);
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
     * traverse()
     *
     * traverses the LinkedList executing the predicate function for each value.
     * @param predicate
     */
    traverse(predicate: TraverseFn<T>): void;
    /**
     * get()
     *
     * gets the first node with the associated value, if it exists.
     * @param value the value of the node to get.
     * @returns the first node with the specified value, or null if not found.
     */
    get(value: T): LinkedListNode<T> | null;
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
    // ===========================
    // Helpers
    // ===========================
    /**
     * populateArray()
     *
     * populates the array recursively.
     * @param node the current node.
     * @param array the array to populate
     * @returns the populated array.
     */
    private populateArray;
    /**
     * containsValue()
     *
     * determines if the node, or any of its links contains the target value
     * @param node the node to check.
     * @param target the value to check for
     * @returns TRUE if the value is contained in the node. False otherwise.
     */
    private containsValue;
    /**
     * getNodeForValue()
     *
     * gets the first node containing the specified value.
     * @param value the value to search for.
     * @param node The node to check.
     * @returns The first node containing the value or null if it is not found.
     */
    private getNodeForValue;
    /**
     * removeNodeContainingValue()
     *
     * removes the node containding the value.
     * @param currentNode the current node.
     * @param value the value to delete.
     * @param previousNode the previous node, if available.
     */
    private removeNodeContainingValue;
    /**
     * traverseList()
     *
     * traverses the linked list starting from the current node.
     * @param predicate the predicate to execute.
     * @param current The current node to process.
     * @param previous The previous node.
     */
    private traverseList;
}
interface TreeInterface<K, V> {
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
    insert(key: K, value: V | null): void;
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
/**
 * Tree
 *
 * A generic tree.
 */
declare abstract class Tree<K, V> implements TreeInterface<K, V> {
    /**
     * contains()
     *
     * determines if the tree contains the key.
     * @param key the key to search for.
     */
    abstract contains(key: K): boolean;
    /**
     * get()
     *
     * gets the value associated with the key.
     * @param key the key of the value to get.
     */
    abstract get(key: K): V | null;
    /**
     * insert()
     *
     * inserts a node into the tree, with the associated key.
     * @param key The key being inserted
     * @param value the value being inserted.
     */
    abstract insert(key: K, value: V | null): void;
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
    abstract remove(key: K): void;
    /**
     * size()
     *
     * gets the size of the tree.
     */
    abstract size(): number;
}
/**
 * TreeNodeInterface
 *
 * Defines the API for a generic tree node object.
 */
interface TreeNodeInterface<K, V> {
    /**
     * hasLeft()
     *
     * determines if the node has a left child.
     * @returns TRUE if the node has a left child. FALSE otherwise.
     */
    hasLeft(): boolean;
    /**
     * hasRight()
     *
     * determines if the node has a right child.
     * @returns TRUE if the node has a right child. FALSE otherwise.
     */
    hasRight(): boolean;
    /**
     * height()
     *
     * gets the height of the node.
     */
    height(): number;
    /**
     * key()
     *
     * gets the key of the node
     */
    key(): K;
    /**
     * left()
     *
     * gets the left child of the node.
     */
    left(): TreeNodeInterface<K, V> | null;
    /**
     * leftHeight()
     *
     * gets the height of the left child of the node.
     */
    leftHeight(): number;
    /**
     * right()
     *
     * gets the right child of the node
     */
    right(): TreeNodeInterface<K, V> | null;
    /**
     * rightHeight()
     *
     * gets the height of the right child of the node.
     */
    rightHeight(): number;
    /**
     * rotateLeft()
     *
     * performs a left rotation on the node.
     * @returns the root of the subtree. In other words, the node where this current node used to be.
     * @throws InvalidStateExceptin when the left child of the node is undefined.
     */
    rotateLeft(): TreeNodeInterface<K, V>;
    /**
     * rotateRight()
     *
     * performs a right rotation on the node.
     * @returns the root of the subtree. In other words, the node where this current node used to be.
     * @throws InvalidStateExceptin when the right child of the node is undefined.
     */
    rotateRight(): TreeNodeInterface<K, V>;
    /**
     * value()
     *
     * gets the value of the node.
     */
    value(): V | null;
}
/**
 * TreeNode
 *
 * A generic node used in some tree structure.
 */
declare class TreeNode<K, V> implements TreeNodeInterface<K, V> {
    private readonly _key;
    private readonly _value;
    private readonly leftChild;
    private readonly rightChild;
    constructor(key: K, value?: V | null, leftChild?: TreeNode<K, V> | null, rightChild?: TreeNode<K, V> | null);
    /**
     * hasLeft()
     *
     * determines if the node has a left child.
     * @returns TRUE if the node has a left child. FALSE otherwise.
     */
    hasLeft(): boolean;
    /**
     * hasRight()
     *
     * determines if the node has a right child.
     * @returns TRUE if the node has a right child. FALSE otherwise.
     */
    hasRight(): boolean;
    /**
     * height()
     *
     * gets the height of the node.
     */
    height(): number;
    /**
     * key()
     *
     * gets the key of the node
     */
    key(): K;
    /**
     * left()
     *
     * gets the left child of the node.
     */
    left(): TreeNode<K, V> | null;
    /**
     * leftHeight()
     *
     * gets the height of the left child of the node.
     */
    leftHeight(): number;
    /**
     * right()
     *
     * gets the right child of the node
     */
    right(): TreeNode<K, V> | null;
    /**
     * rightHeight()
     *
     * gets the height of the right child of the node.
     */
    rightHeight(): number;
    /**
     * rotateLeft()
     *
     * performs a left rotation on the node.
     * @returns the root of the subtree. In other words, the node where this current node used to be.
     * @throws InvalidStateExceptin when the left child of the node is undefined.
     */
    rotateLeft(): TreeNode<K, V>;
    /**
     * rotateRight()
     *
     * performs a right rotation on the node.
     * @returns the root of the subtree. In other words, the node where this current node used to be.
     * @throws InvalidStateExceptin when the right child of the node is undefined.
     */
    rotateRight(): TreeNode<K, V>;
    /**
     * value()
     *
     * gets the value of the node.
     */
    value(): V | null;
}
/**
 * EdgeInterface
 *
 * Defines the API for an Edge.
 */
interface EdgeInterface<T> {
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
/**
 * Edge
 *
 * An Edge.
 */
declare class Edge<T> implements EdgeInterface<T> {
    private readonly _value;
    private readonly _weight;
    constructor(value: T, weight?: number);
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
/**
 * VertexInterface
 *
 * A Vertex API.
 */
interface VertexInterface<T> extends NodeInterface<T> {
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
type AdjacencyList<T> = LinkedList<EdgeInterface<VertexInterface<T>>>;
/**
 * Vertex
 *
 * A Vertex represents a Data Structure for a Graph.
 */
declare class Vertex<T> extends Node<T> implements VertexInterface<T>, Equatable {
    private readonly _adjacencyList;
    constructor(value: T, adjacencyList?: AdjacencyList<T> | null);
    /**
     * addEdge()
     *
     * adds an edge to the vertex.
     * @param target The vertex to link to.
     */
    addEdge(target: Vertex<T>, weight?: number): void;
    /**
     * adjacentTo()
     *
     * determines if the vertex is adjacent to the suspect vertex.
     * @param suspect the suspect vertex.
     */
    adjacentTo(suspect: Vertex<T>): boolean;
    /**
     * edges()
     *
     * edges represents a list of adjacent vertices.
     */
    edges(): AdjacencyList<T>;
    equals(suspect: any): boolean;
    /**
     * removeEdge()
     *
     * removes an edge.
     * @param target The target vertex to remove.
     */
    removeEdge(target: Vertex<T>): void;
    toString(): string;
}
/**
 * GraphException
 *
 * A General Graph Error.
 */
declare class GraphException extends BaseException {
    constructor(message?: string);
}
/**
 * GraphInterface
 *
 * The Graph API.
 */
interface GraphInterface<T> {
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
    path(from: T, to: T): VertexPath<T>;
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
interface VertexPath<T> {
    path: T[];
    weight: number;
}
/**
 * Graph
 *
 * A graph data structure.
 */
declare class Graph<T> implements GraphInterface<T> {
    private _vertices;
    private readonly _isDirected;
    private readonly _calculatedPathsForSourceVerticies;
    constructor(directed?: boolean);
    /**
     * add()
     *
     * adds a value to the graph.
     * @param value the value to add.
     * @throws GraphException when attempting to insert a duplicate value.
     */
    add(value: T): void;
    /**
     * createEdge()
     *
     * creates an edge to the graph.
     * @param from the initial value
     * @param to the target value.
     * @param weight an optional weight for the edge. Defaults to 0.0.
     * @throws GrpaphException when attempting to add a duplicate edge.
     */
    createEdge(from: T, to: T, weight?: number): void;
    /**
     * contians()
     *
     * determines if the graph contains the specified value.
     * @param value the value to check for.
     */
    contains(value: T): boolean;
    /**
     * deleteEdgesTo()
     *
     * delete all edges to the target vertex.
     * @param target the target vertex to remove all edges to.
     */
    private deletedEdgesTo;
    /**
     * find()
     *
     * gets the vertex with the specified value.
     * @param value the value to search for.
     */
    find(value: T): Vertex<T> | null;
    /**
     * generatePath()
     *
     * generates a path, given the path information, start vertex, and destination vertex.
     * @param info the Dijkstra Path Information.
     * @param start The starting vertex.
     * @param destination The destination vertex.
     * @returns The shortest path from the start vertex to the destination vertex.
     */
    private generatePath;
    /**
     * getDijkstraPathInfo()
     *
     * implements Dijkstra's Algorithm to get the path information for a given source Vertex.
     * @param source The source vertex.
     * @returns A tuple consisting the form [<Map of distances>, map of vertices]
     */
    private getDijkstraPathInfo;
    /**
     * hasPath()
     *
     * determines if there exists a path from the starting value, from, to the target value, to.
     * @param from The starting value.
     * @param to the target value.
     */
    hasPath(from: T, to: T): boolean;
    /**
     * indexOf()
     *
     * gets the index of the vertex containing the value.
     * @param value the value to get the index of.
     * @returns the index of the first instance of the vertex containing the value.
     */
    private indexOf;
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
     * @note We need to check for cases where a path does not exist.
     */
    path(from: T, to: T): VertexPath<T>;
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
     * @throws GraphException when either values do not exist in the graph.
     */
    removeEdge(from: T, to: T): void;
    /**
     * toArray()
     *
     * converts the graph to an array.
     */
    toArray(): Array<Vertex<T>>;
}
export { Node, Stack, Queue, PriorityQueue, PriorityQueueOrder, LinkedList, LinkedListNode, Tree, TreeNode, Edge, AdjacencyList, Vertex, GraphException, Graph, VertexPath };
//# sourceMappingURL=index.d.ts.map