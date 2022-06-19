import{BaseException as t}from"@swindle/core";
/**
 * Node
 *
 * A generic node.
 */class e{constructor(t){this._value=t}
/**
     * value()
     *
     * gets the value of the node.
     */value(){return this._value}}class s extends e{constructor(t,e=null){super(t),this._next=e}
/**
     * next()
     *
     * next() gets the next node.
     */next(){return this._next}}
/**
 * Stack
 *
 * Stack is a Data structure, following the FIFO principle.
 *
 */class i{constructor(){this._top=null,this._count=0}
/**
     * clear()
     *
     * clear() clears the stack.
     */clear(){this._top=null,this._count=0}
/**
     * isEmpty()
     *
     * isEmpty() determines if the stack is empty.
     */isEmpty(){return 0===this.size()}
/**
     * peek()
     *
     * peek() gets the next value in the stack.
     */peek(){let t=null;if(!this.isEmpty()){t=this._top.value()}return t}
/**
     * pop()
     *
     * pop() removes the next value in the stack.
     */pop(){let t=null;if(!this.isEmpty()){
// remove the element at the top of the stack.
const e=this._top;this._top=e.next(),this._count--,t=e.value()}return t}
/**
     * push()
     *
     * push() push pushes an item to the stack.
     * @param value The value to push.
     */push(t){if(this.isEmpty()){
// set the new node as the top.
const e=new s(t);this._top=e}else{
// add the new node to the top of the stack.
const e=new s(t,this._top);this._top=e}
// increment count.
this._count++}
/**
     * size()
     *
     * size() gets the number of items in the stack.
     */size(){return this._count}
/**
     * toArray()
     *
     * toArray() converts the stack to an array.
     */toArray(){const t=new Array;let e=this._top;for(;null!=e;)t.push(e.value()),e=e.next();return t}}
/**
 * QueueNode
 *
 * QueueNode represents a single node in a queue.
 */class r extends e{constructor(t,e=null){super(t),this._next=e}
/**
     * next()
     *
     * next() gets the next node.
     */next(){return this._next}
/**
     * setNext()
     *
     * setNext() sets the next node value.
     * @param next the node to set as the next value.
     */setNext(t){this._next=t}}
/**
 * Queue
 *
 * Queue is a data structure that follows the LIFO principle.
 *
 */class n{constructor(){this._front=null,this._back=null,this._size=0}
/**
     * clear()
     *
     * clear() clears the queue.
     */clear(){this._front=null,this._back=null,this._size=0}
/**
     * dequeue()
     *
     * dequeue() removes the next item in the queue.
     * O(1)
     */dequeue(){let t=null;if(!this.isEmpty()){const e=this._front;t=null==e?void 0:e.value(),this._front=e.next()?null==e?void 0:e.next():null,this._size--,this._back=this.isEmpty()?null:this._back}return t}
/**
     * enqueue()
     *
     * enqueue() inserts an item into the queue.
     * O(1)
     * @param value the value to insert.
     */enqueue(t){if(this.isEmpty()){
// add to the front
const e=new r(t,null);this._front=e,this._back=e}else{
// add to the back
const e=this._back,s=new r(t,null);null==e||e.setNext(s),this._back=s}this._size++}
/**
     * isEmpty()
     *
     * isEmpty() determines if the queue is empty.
     */isEmpty(){return 0===this.size()}
/**
     * peek()
     *
     * peek() gets the next item in the queue, but does not remove it.
     */peek(){return this.isEmpty()?null:this._front.value()}
/**
     * size()
     *
     * size() gets the number of elements in the queue.
     */size(){return this._size}
/**
     * toArray()
     *
     * toArray() converts the queue to an array.
     */toArray(){const t=new Array;return this.isEmpty()?t:this.fillArray(this._front,t)}
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
fillArray(t,e){return e.push(t.value()),null===t.next()?e:this.fillArray(t.next(),e)}}
/**
 * PriorityQueueNode
 *
 * PriorityQueueNode is a single node in a priority queue.
 */class h extends e{constructor(t,e=1,s=null){super(t),this._priority=e,this._next=s}
/**
     * next()
     *
     * next() gets the next node.
     */next(){return this._next}
/**
     * priority()
     *
     * priority() gets the priority of the node.
     */priority(){return this._priority}
/**
     * setPriority()
     *
     * sets the priority of the node.
     * @param newPriority
     */setPriority(t){this._priority=t}}
/**
 * PriorityQueueOrder
 *
 * The order of the priority queue.
 */var l;!function(t){t[t.Ascending=0]="Ascending",t[t.Descending=1]="Descending"}(l||(l={}));
/**
 * PriorityQueue
 *
 * PriorityQueue is a priority queue.
 */
class a{constructor(t=l.Ascending){this._values=new Array,this._order=t}
/**
     * clear()
     *
     * clear() clears the queue.
     */clear(){this._values=new Array}
/**
     * dequeue()
     *
     * dequeue() removes the next item in the queue.
     */dequeue(){let t=null;return this.isEmpty()||(t=this._values.shift().value()),t}
/**
     * enqueue()
     *
     * enqueue() inserts an item into the queue.
     * @param value the value to insert.
     * @param priority the priority of this value. The lower the priority, the earlier in the queue the item will be placed.
     */enqueue(t,e){const s=new h(t,e);this._order===l.Ascending?this.insertAscending(s):this.insertDescending(s)}
/**
     * insertAscending()
     *
     * inserts the node in ascending order by priority.
     * @param node the node to insert.
     */insertAscending(t){const e=this.size();let s=!1,i=0;for(i=0;i<e;i++)if(this._values[i].priority()>t.priority()){this._values.splice(i,0,t),s=!0;break}s||this._values.push(t)}
/**
     * insertDescending()
     *
     * inserts the node in Descending order by priority.
     * @param node the node to insert.
     */insertDescending(t){const e=this.size();let s=!1,i=0;for(i=0;i<e;i++)if(this._values[i].priority()<t.priority()){this._values.splice(i,0,t),s=!0;break}s||this._values.push(t)}
/**
     * isEmpty()
     *
     * isEmpty() determines if the queue is empty.
     */isEmpty(){return 0===this.size()}
/**
     * peek()
     *
     * peek() gets the next item in the queue, but does not remove it.
     */peek(){let t=null;return this.isEmpty()||(t=this._values[0].value()),t}
/**
     * size()
     *
     * size() gets the number of elements in the queue.
     */size(){return this._values.length}
/**
     * sortAscending()
     *
     * sorts the items in the queue in ascending order by priority.
     */sortAscending(){const t=this.size();let e=0;for(e=0;e<t;e++)if(this._values[e].priority()>this._values[e+1].priority()){
// swap the two nodes.
const t=this._values[e];this._values[e]=this._values[e+1],this._values[e+1]=t}}
/**
     * sortDescending()
     *
     * sorts the items in the queue in descending order by priority.
     */sortDescending(){const t=this.size();let e=0;for(e=0;e<t;e++)if(this._values[e].priority()<this._values[e+1].priority()){
// swap the two nodes.
const t=this._values[e];this._values[e]=this._values[e+1],this._values[e+1]=t}}
/**
     * toArray()
     *
     * toArray() converts the queue to an array.
     */toArray(){const t=new Array;return this._values.forEach((e=>t.push(e.value()))),t}
/**
     * updatePriority()
     *
     * updates the priority of the first occurance of the specified value.
     * @param target The value who's priority must be updated.
     * @param newPriority The new priority to set for the target value.
     */updatePriority(t,e){
// find the node to update
const s=this._values.find(((e,s)=>{let i=!1;const r=e.value();
// the value implements the Equatable interface. So, we can use that for comparison.
return i="function"==typeof r.equals?r.equals(t):r===t,i}));
// update the priority
null==s||s.setPriority(e),
// reorder the queue based on the new priority.
this._order===l.Ascending?this.sortAscending():this.sortDescending()}}
/**
 * LinkedListNode
 *
 * A linked list node.
 */class u extends e{constructor(t,e=null){super(t),this._next=e}
/**
     * next()
     *
     * next() gets the next node.
     */next(){return this._next}
/**
    * setNext()
    *
    * sets the next node.
    * @param next sets the next node.
    */setNext(t){this._next=t}}class c{constructor(t){this._head=null,this._end=null,this._size=0,this.compare=t}
/**
     * clear()
     *
     * clears the list.
     */clear(){this._head=null,this._end=null,this._size=0}
/**
     * contains()
     *
     * contains() determineds if the
     * @param value the value to search for.
     */contains(t){let e=!1;return this.isEmpty()?(e=this.containsValue(this._head,t),e):e}
/**
     * traverse()
     *
     * traverses the LinkedList executing the predicate function for each value.
     * @param predicate
     */traverse(t){this.traverseList(t,this._head)}
/**
     * get()
     *
     * gets the first node with the associated value, if it exists.
     * @param value the value of the node to get.
     * @returns the first node with the specified value, or null if not found.
     */get(t){return this.getNodeForValue(t,this._head)}
/**
     * insert()
     *
     * inserts the value in the list.
     * @param value the value to insert.
     */insert(t){const e=new u(t);this.isEmpty()?(
// insert at the head.
this._head=e,this._end=e):(
// insert at the tail.
this._end.setNext(e),this._end=e),this._size++}
/**
     * isEmpty()
     *
     * determines if the list is empty.
     */isEmpty(){return 0===this.size()}
/**
     * remove()
     *
     * removes the value from the list.
     * @param value the value to remove.
     */remove(t){this.isEmpty()||this.removeNodeContainingValue(this._head,t,null)}
/**
     * size()
     *
     * gets teh size of the linked list
     */size(){return this._size}
/**
     * toArray()
     *
     * converts the list to an array.
     */toArray(){const t=new Array;return this.isEmpty()?t:this.populateArray(this._head,t)}
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
populateArray(t,e){return e.push(t.value()),null===t.next()?e:this.populateArray(t.next(),e)}
/**
     * containsValue()
     *
     * determines if the node, or any of its links contains the target value
     * @param node the node to check.
     * @param target the value to check for
     * @returns TRUE if the value is contained in the node. False otherwise.
     */containsValue(t,e){return 0===this.compare(t.value(),e)||null!==t.next()&&this.containsValue(t.next(),e)}
/**
     * getNodeForValue()
     *
     * gets the first node containing the specified value.
     * @param value the value to search for.
     * @param node The node to check.
     * @returns The first node containing the value or null if it is not found.
     */getNodeForValue(t,e){return 0===this.compare(e.value(),t)?e:null!=e.next()?this.getNodeForValue(t,e.next()):null}
/**
     * removeNodeContainingValue()
     *
     * removes the node containding the value.
     * @param currentNode the current node.
     * @param value the value to delete.
     * @param previousNode the previous node, if available.
     */removeNodeContainingValue(t,e,s=null){if(0===this.compare(t.value(),e)){const e=t.next();null!=s&&s.setNext(e),this._size--}else null!==t.next()?
// check the next node.
this.removeNodeContainingValue(t.next(),e,t):
// this is the last node.
this._end=t}
/**
     * traverseList()
     *
     * traverses the linked list starting from the current node.
     * @param predicate the predicate to execute.
     * @param current The current node to process.
     * @param previous The previous node.
     */traverseList(t,e,s=null){e&&(t(e.value(),e.next()?e.next().value():null,s?s.value():null),this.traverseList(t,e.next(),e))}}
/**
 * Tree
 *
 * A generic tree.
 */class o{
/**
     * isEmpty()
     *
     * determines if the tree is empty.
     */
isEmpty(){return 0===this.size()}}
/**
 * TreeNode
 *
 * A generic node used in some tree structure.
 */class _{constructor(t,e=null,s=null,i=null){this._key=t,this._value=e,this.leftChild=s,this.rightChild=i}
/**
     * hasLeft()
     *
     * determines if the node has a left child.
     * @returns TRUE if the node has a left child. FALSE otherwise.
     */hasLeft(){return null!==this.leftChild}
/**
     * hasRight()
     *
     * determines if the node has a right child.
     * @returns TRUE if the node has a right child. FALSE otherwise.
     */hasRight(){return null!==this.rightChild}
/**
     * height()
     *
     * gets the height of the node.
     */height(){return Math.max(this.leftHeight(),this.rightHeight())+1}
/**
     * key()
     *
     * gets the key of the node
     */key(){return this._key}
/**
     * left()
     *
     * gets the left child of the node.
     */left(){return this.leftChild}
/**
     * leftHeight()
     *
     * gets the height of the left child of the node.
     */leftHeight(){return this.hasLeft()?this.left().height():0}
/**
     * right()
     *
     * gets the right child of the node
     */right(){return this.rightChild}
/**
     * rightHeight()
     *
     * gets the height of the right child of the node.
     */rightHeight(){return this.hasRight()?this.right().height():0}
/**
     * rotateLeft()
     *
     * performs a left rotation on the node.
     * @returns the root of the subtree. In other words, the node where this current node used to be.
     * @throws InvalidStateExceptin when the left child of the node is undefined.
     */rotateLeft(){if(this.hasRight()){
// perform rotation.
const t=new _(this.key(),this.value(),this.left(),this.right().left());return new _(this.right().key(),this.right().value(),t,this.right().right())}throw new Error("Invalid State Exception")}
/**
     * rotateRight()
     *
     * performs a right rotation on the node.
     * @returns the root of the subtree. In other words, the node where this current node used to be.
     * @throws InvalidStateExceptin when the right child of the node is undefined.
     */rotateRight(){if(this.hasLeft()){
// perform rotation.
const t=new _(this.key(),this.value(),this.left().right(),this.right());return new _(this.left().key(),this.left().value(),this.left().left(),t)}throw new Error("Invalid State exception.")}
/**
     * value()
     *
     * gets the value of the node.
     */value(){return this._value}}
/**
 * Edge
 *
 * An Edge.
 */class d{constructor(t,e=0){this._value=t,this._weight=e}
/**
     * value()
     *
     * the value the edge is pointing to.
     */value(){return this._value}
/**
     * wight()
     *
     * the weight of the edge.
     */weight(){return this._weight}}
/**
 * Vertex
 *
 * A Vertex represents a Data Structure for a Graph.
 */class v extends e{constructor(t,e=null){super(t),this._adjacencyList=e||new c(((t,e)=>{let s=!1;const i=t.value(),r=e.value();return s="function"==typeof i.equals?i.equals(r):i===r,s?0:1}))}
/**
     * addEdge()
     *
     * adds an edge to the vertex.
     * @param target The vertex to link to.
     */addEdge(t,e=0){this._adjacencyList.insert(new d(t,e))}
/**
     * adjacentTo()
     *
     * determines if the vertex is adjacent to the suspect vertex.
     * @param suspect the suspect vertex.
     */adjacentTo(t){return null!==this._adjacencyList.get(new d(t))}
/**
     * edges()
     *
     * edges represents a list of adjacent vertices.
     */edges(){return this._adjacencyList}equals(t){let e=!1;
// check if the suspect is a vertex.
if(t instanceof v){
// check if the value is the same type.
const s=t;
// check if the type defines an equals() function.
// use the equals() function to determine equality.
e="function"==typeof this.value().equals?this.value().equals(s.value()):this.value()===s.value()}return e}
/**
     * removeEdge()
     *
     * removes an edge.
     * @param target The target vertex to remove.
     */removeEdge(t){var e;const s=null===(e=this._adjacencyList.get(new d(t)))||void 0===e?void 0:e.value();s&&this._adjacencyList.remove(s)}toString(){return this.value().toString()}}
/**
 * GraphException
 *
 * A General Graph Error.
 */class p extends t{constructor(t="Graph Error"){super(t)}}
/**
 * Graph
 *
 * A graph data structure.
 */class g{constructor(t=!1){this._vertices=new Array,this._isDirected=t,this._calculatedPathsForSourceVerticies=new Map}
/**
     * add()
     *
     * adds a value to the graph.
     * @param value the value to add.
     * @throws GraphException when attempting to insert a duplicate value.
     */add(t){if(this.contains(t))
// duplicate entry.
throw new p("Duplicate value error.");{const e=new v(t);this._vertices.push(e),this._calculatedPathsForSourceVerticies.clear()}}
/**
     * createEdge()
     *
     * creates an edge to the graph.
     * @param from the initial value
     * @param to the target value.
     * @param weight an optional weight for the edge. Defaults to 0.0.
     * @throws GrpaphException when attempting to add a duplicate edge.
     */createEdge(t,e,s=1){if(!this.contains(t)||!this.contains(e))throw new p("Duplicate edge error.");{const i=this.indexOf(t),r=this.indexOf(e);this._vertices[i].adjacentTo(this._vertices[r])||this._vertices[i].addEdge(this._vertices[r],s),this.isDirected()||this._vertices[r].adjacentTo(this._vertices[i])||this._vertices[r].addEdge(this._vertices[i],s),this._calculatedPathsForSourceVerticies.clear()}}
/**
     * contians()
     *
     * determines if the graph contains the specified value.
     * @param value the value to check for.
     */contains(t){return this.indexOf(t)>=-1}
/**
     * deleteEdgesTo()
     *
     * delete all edges to the target vertex.
     * @param target the target vertex to remove all edges to.
     */deletedEdgesTo(t){this._vertices.forEach((e=>{e.adjacentTo(t)&&e.removeEdge(t)})),this._calculatedPathsForSourceVerticies.clear()}
/**
     * find()
     *
     * gets the vertex with the specified value.
     * @param value the value to search for.
     */find(t){const e=new v(t),s=this._vertices.find((t=>t.equals(e)));return s||null}
/**
     * generatePath()
     *
     * generates a path, given the path information, start vertex, and destination vertex.
     * @param info the Dijkstra Path Information.
     * @param start The starting vertex.
     * @param destination The destination vertex.
     * @returns The shortest path from the start vertex to the destination vertex.
     */generatePath(t,e,s){if(e.equals(s))return{path:[e.value()],weight:0};{const[i,r]=t,n=this.generatePath(t,e,r.get(s));return{path:[...n.path,s.value()],weight:n.weight}}}
/**
     * getDijkstraPathInfo()
     *
     * implements Dijkstra's Algorithm to get the path information for a given source Vertex.
     * @param source The source vertex.
     * @returns A tuple consisting the form [<Map of distances>, map of vertices]
     */getDijkstraPathInfo(t){const e=new Map,s=new Map,i=new a(l.Ascending);for(e.set(t,0),this._vertices.forEach((s=>{s.equals(t)||e.set(s,1/0),i.enqueue(s,e.get(s))}));!i.isEmpty();){const t=i.dequeue();t.edges().traverse((r=>{const n=e.get(t)+r.weight(),h=r.value();n<e.get(h)&&(e.set(h,n),s.set(h,t),i.updatePriority(h,n))}))}return[e,s]}
/**
     * hasPath()
     *
     * determines if there exists a path from the starting value, from, to the target value, to.
     * @param from The starting value.
     * @param to the target value.
     */hasPath(t,e){return this.path(t,e).path.length>0}
/**
     * indexOf()
     *
     * gets the index of the vertex containing the value.
     * @param value the value to get the index of.
     * @returns the index of the first instance of the vertex containing the value.
     */indexOf(t){const e=new v(t);return this._vertices.reduce(((t,s,i)=>s.equals(e)?i:t),-1)}
/**
     * isDirected()
     *
     * determines if the graph is directed.
     */isDirected(){return this._isDirected}
/**
     * isEmpty()
     *
     * determines if the graph is empty.
     */isEmpty(){return 0===this._vertices.length}
/**
     * path()
     *
     * gets the shortest path from the initial value, from, to the target value, to.
     * @param from the initial value.
     * @param to the target value.
     * @note We need to check for cases where a path does not exist.
     */path(t,e){const s=this.find(t),i=this.find(e);let r=null;if(s&&i){
// we use Dijkstra's Algorithm to generate a path for the source.
let t=null;this._calculatedPathsForSourceVerticies.has(s)?t=this._calculatedPathsForSourceVerticies.get(s):(
// we calculate the path infor and save it for later reference.
t=this.getDijkstraPathInfo(s),this._calculatedPathsForSourceVerticies.set(s,t)),
// generate the path.
r=this.generatePath(t,s,i)}return r}
/**
     * remove()
     *
     * removes a value from the graph.
     * @param value the value to remove.
     */remove(t){if(this.contains(t)){const e=this.find(t);this.deletedEdgesTo(e),this._vertices=this._vertices.filter((t=>!t.equals(e))),this._calculatedPathsForSourceVerticies.clear()}}
/**
     * removeEdge()
     *
     * removes an edge from the graph.
     * @param from the intital value
     * @param to the target value.
     * @throws GraphException when either values do not exist in the graph.
     */removeEdge(t,e){if(!this.contains(t)||!this.contains(e))throw new p("Duplicate edge error.");{const s=this.indexOf(t),i=this.indexOf(e);this._vertices[s].adjacentTo(this._vertices[i])||this._vertices[s].removeEdge(this._vertices[i]),this.isDirected()||this._vertices[i].adjacentTo(this._vertices[s])||this._vertices[i].removeEdge(this._vertices[s]),this._calculatedPathsForSourceVerticies.clear()}}
/**
     * toArray()
     *
     * converts the graph to an array.
     */toArray(){return this._vertices}}export{d as Edge,g as Graph,p as GraphException,c as LinkedList,u as LinkedListNode,e as Node,a as PriorityQueue,l as PriorityQueueOrder,n as Queue,i as Stack,o as Tree,_ as TreeNode,v as Vertex};
