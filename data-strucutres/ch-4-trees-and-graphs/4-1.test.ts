import { describe, expect, test } from "vitest";
import * as funcs from "./4-1";
import { GraphNode } from "./4-1.utils";

for (let key in funcs) {
  const func = funcs[key];

  describe(`Route Between Nodes: ${key}`, () => {
    test("should return true when there is a direct route", () => {
      const node1 = new GraphNode(1);
      const node2 = new GraphNode(2);
      node1.addEdge(node2);
      expect(func(node1, node2)).toBeTruthy();
    });

    test("should return true when there is an indirect route", () => {
      const node1 = new GraphNode(1);
      const node2 = new GraphNode(2);
      const node3 = new GraphNode(3);
      node1.addEdge(node3);
      node3.addEdge(node2);
      expect(func(node1, node2)).toBeTruthy();
    });

    test("should return false when there is no route", () => {
      const node1 = new GraphNode(1);
      const node2 = new GraphNode(2);
      const node3 = new GraphNode(3);
      node2.addEdge(node3);
      expect(func(node2, node1)).toBeFalsy();
    });

    test("should return false when start node has no adjacent node", () => {
      const node1 = new GraphNode(1);
      const node2 = new GraphNode(2);
      const node3 = new GraphNode(3);
      node2.addEdge(node3);
      expect(func(node1, node2)).toBeFalsy();
    });

    test("should return true when start and end node are the same node", () => {
      const node1 = new GraphNode(1);
      expect(func(node1, node1)).toBeTruthy();
    });
  });
}
