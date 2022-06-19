import { Graph, VertexPath } from './../../index';

test("Creating a Graph", () => {
    const graph = new Graph<string>();
    expect(graph.isEmpty()).toBeTruthy();
    expect(graph.isDirected()).toBeFalsy();

    // Create Nodes
    graph.add("SF");
    graph.add("Seatle");
    graph.add("Idaho");
    graph.add('Chicago');
    graph.add('NYC');
    expect(graph.contains("SF")).toBeTruthy();
    expect(graph.contains("Seatle")).toBeTruthy();
    expect(graph.contains("Idaho")).toBeTruthy();
    expect(graph.contains("Chicago")).toBeTruthy();
    expect(graph.contains("NYC")).toBeTruthy();
    expect(graph.isEmpty()).toBeFalsy();

    // Create the edges
    graph.createEdge("SF", "Seatle", 3.0);
    graph.createEdge("SF", "Idaho", 5.0);
    graph.createEdge("Idaho", "Seatle", 1.0);
    graph.createEdge("Seatle", "Chicago", 2.0);
    graph.createEdge("Idaho", "Chicago", 3.0);
    graph.createEdge("Idaho", "NYC", 1.0);
    graph.createEdge("Chicago", "NYC", 1.0);

    expect(graph.containsEdge("SF", "Seatle")).toBeTruthy();
    expect(graph.containsEdge("SF", "Idaho")).toBeTruthy();
    expect(graph.containsEdge("Idaho", "Seatle")).toBeTruthy();
    expect(graph.containsEdge("Seatle", "Chicago")).toBeTruthy();
    expect(graph.containsEdge("Idaho", "Chicago")).toBeTruthy();
    expect(graph.containsEdge("Idaho", "NYC")).toBeTruthy();
    expect(graph.containsEdge("Chicago", "NYC")).toBeTruthy();

    // Find the Shortest Path from SF to NYC.
    let shortestPath: VertexPath<string>;
    expect(graph.hasPath("SF", "NYC")).toBeTruthy();
    shortestPath = graph.path("SF", "NYC");
    expect(shortestPath).toBeDefined();

    const correctPath: VertexPath<string> = {
        path: ["SF", "Idaho", "NYC"],
        weight: 5.0
    };
    expect(shortestPath).toEqual(correctPath);

    // Removes the e
    graph.removeEdge("SF", "Seatle");
    graph.removeEdge("SF", "Idaho");
    graph.removeEdge("Idaho", "Seatle");
    graph.removeEdge("Seatle", "Chicago");
    graph.removeEdge("Idaho", "Chicago");
    graph.removeEdge("Idaho", "NYC");
    graph.removeEdge("Chicago", "NYC");

    expect(graph.containsEdge("SF", "Seatle")).toBeFalsy();
    expect(graph.containsEdge("SF", "Idaho")).toBeFalsy();
    expect(graph.containsEdge("Idaho", "Seatle")).toBeFalsy();
    expect(graph.containsEdge("Seatle", "Chicago")).toBeFalsy();
    expect(graph.containsEdge("Idaho", "Chicago")).toBeFalsy();
    expect(graph.containsEdge("Idaho", "NYC")).toBeFalsy();
    expect(graph.containsEdge("Chicago", "NYC")).toBeFalsy();

    // remove a value from the graph.
    graph.remove("NYC");
    expect(graph.contains("NYC")).toBeFalsy();
    expect(graph.contains("SF")).toBeTruthy();
    
    // clear the remaining verticies of the graph.
    expect(graph.isEmpty()).toBeFalsy();
    graph.clear();
    expect(graph.isEmpty()).toBeTruthy();
    expect(graph.contains("Chicago")).toBeFalsy();
});