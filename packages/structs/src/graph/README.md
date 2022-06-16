# Graph
The `Graph<T>` class represents a Graph. `Graph<T>` is a generic type, where T is the type of the values managed by the graph.

# Constructor
## constructor()
Creates a Graph instance.

# Static Methods
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| add() | (T) value | void | Adds a value to the `Graph`. |
| createEdge() | (T) from, (T) to, (number) weight | void | Creates an edge in the `Graph` from value `from` to value `to`, with the specified `weight`. If `weight` is omitted, it defaults to 1.0. |
| contains() | (T) value | boolean | Determines if `value` is contained in the `Graph`. |
| find() | (T) value | Vertex<T> | Gets the [Vertex<T>](./vertex/README.md) with the specified value. |
| hasPath() | (T) from, (T) to | boolean | Determines if the `Graph` contains the path from value `from` to value `to`. |
| idDirected() | N/A | boolean | Determines whether the `Graph` is directed or not. |
| isEmpty() | N/A | boolean | Determines if the `Graph` is empty. |
| path() | (T) from, (T) to | `VertexPath<T>` | Gets the shortest path between `from` and `to`. 
| remove() | (T) value | void | Removes the `value` from the `Graph`. |
| removeEdge() | (T) from, (T) to | void | Removes the specified edge from `from` to `to`. |
| toArray() | N/A | T[] | Converts the `LinkList` to an array. |