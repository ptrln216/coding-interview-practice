import { describe, expect, test } from "vitest";
import { findBuildOrder } from "./4-7"; // Update with the actual module path

describe("findBuildOrder", () => {
  test("should return a valid build order for a given set of projects and dependencies", () => {
    const projects = ["a", "b", "c", "d", "e", "f"];
    const dependencies: [string, string][] = [
      ["a", "d"],
      ["f", "b"],
      ["b", "d"],
      ["f", "a"],
      ["d", "c"],
    ];
    const order = findBuildOrder(projects, dependencies);
    expect(order).toEqual(["f", "a", "b", "d", "c", "e"]);
  });

  test("should return an error when there is a cycle", () => {
    const projects = ["a", "b", "c"];
    const dependencies: [string, string][] = [
      ["a", "b"],
      ["b", "c"],
      ["c", "a"], // Cycle: a -> b -> c -> a
    ];
    expect(() => findBuildOrder(projects, dependencies)).toThrow(
      "Cycle detected! No valid build order."
    );
  });

  test("should return the projects in any order when there are no dependencies", () => {
    const projects = ["x", "y", "z"];
    const dependencies: [string, string][] = [];
    const order = findBuildOrder(projects, dependencies);
    expect(new Set(order)).toEqual(new Set(["x", "y", "z"]));
  });

  test("should handle projects with multiple independent dependencies", () => {
    const projects = ["a", "b", "c", "d", "e", "f", "g"];
    const dependencies: [string, string][] = [
      ["f", "a"],
      ["f", "b"],
      ["f", "c"],
      ["b", "e"],
      ["c", "a"],
      ["a", "d"],
      ["d", "g"],
    ];
    const order = findBuildOrder(projects, dependencies);
    expect(order.indexOf("f")).toBeLessThan(order.indexOf("a"));
    expect(order.indexOf("f")).toBeLessThan(order.indexOf("b"));
    expect(order.indexOf("f")).toBeLessThan(order.indexOf("c"));
    expect(order.indexOf("b")).toBeLessThan(order.indexOf("e"));
    expect(order.indexOf("c")).toBeLessThan(order.indexOf("a"));
    expect(order.indexOf("a")).toBeLessThan(order.indexOf("d"));
    expect(order.indexOf("d")).toBeLessThan(order.indexOf("g"));
  });
});
