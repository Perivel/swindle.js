# Stack<T>
The `Stack<T>` class represents a Stack implementation. `Stack<T>` is a generic type, where T is the type of the elements to be stored in the stack.

# Constructor
## constructor()
Creates a Stack instance.

# Methodds
| **Method** | **Arguments** | **Return Type** | **Description** |
| ----------- | ----------- | ----------- | ----------- |
| clear() | N/A | void | Clears the contents of the stack. |
| isEmpty() | N/A | boolean | Determiens if the stack is empty. |
| peek() | N/A | T, null | Returns the next value in the stack, without removing it. If the stack is empty, `null` is returned. |
| pop() | N/A | T, null | Removes and returns the next value in the stack. If the stack is empty, `null` is returned. |
| push() | (T) value | void | Adds an element to the stack. |
| size() | N/A | number | Gets the size of the stack. |
| toArray() | N/A | T[] | Transforms the stack into an array. |