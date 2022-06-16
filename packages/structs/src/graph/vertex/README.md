# Vertex
The `Vertex<T>` class represents a Vertex. `Vertex<T>` is a generic type, where T is the type of the values managed by the vertex.

# Constructor
## constructor()
Creates a Vertex instance.

# Static Methods
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| addEdge() | (Vertex<T>) target, (number) weight | void | Adds an edge to the `Vertex`. |
| adjacentTo() | (Vertex<T>) suspect | boolean | Determines if the `Vertex` is adjacent to the `suspect` vertex. |
| edges() | N/A | AdjacencyList<T> | Gets the edges of the `Vertex`. |
| equals() | (any) suspect | boolean | Determines if the suspect is equal to the `Vertex`. |
| removeEdge() | (Vertex<T>) target | void | Removes the specified edge from the `Vertex`. |
| value() | N/A | T | Gets the value of the `Vertex`. |