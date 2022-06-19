import { Graph, VertexPath } from './../../index';

test("Creating a Graph", () => {
    const graph = new Graph<string>();

    // Create Nodes
    graph.add("SF");
    graph.add("Seatle");
    graph.add("Idaho");
    graph.add('Chicago');
    graph.add('NYC');

    // Create the edges
    graph.createEdge("SF", "Seatle", 3.0);
    graph.createEdge("SF", "Idaho", 5.0);
    graph.createEdge("Idaho", "Seatle", 1.0);
    graph.createEdge("Seatle", "Chicago", 2.0);
    graph.createEdge("Idaho", "Chicago", 3.0);
    graph.createEdge("Idaho", "NYC", 1.0);
    graph.createEdge("Chicago", "NYC", 1.0);

    // Find the Shortest Path from SF to NYC.
    let shortestPath: VertexPath<string>;
    expect(graph.hasPath("SF", "NYC")).toBeTruthy();
    shortestPath = graph.path("SF", "NYC");
    expect(shortestPath).toBeDefined();

    const correctPath: VertexPath<String> = {
        path: ["SF", "Idaho", "NYC"],
        weight: 5.0
    };
    expect(shortestPath).toEqual(correctPath);
});