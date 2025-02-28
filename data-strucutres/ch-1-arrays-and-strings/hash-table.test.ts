import { describe, test, expect, beforeEach, vi } from "vitest";
import { HashTable } from "./hash-table";

describe("Hash Table", () => {
  let ht: HashTable<string, string>;

  beforeEach(() => {
    ht = new HashTable<string, string>();
  });

  test("should add new entry", () => {
    ht.set("a", "apple");
    expect(ht.get("a")).toBe("apple");
    expect(ht.size()).toBe(1);
  });

  test("should update entry value when key exists", () => {
    ht.set("a", "aple");
    expect(ht.get("a")).toBe("aple");
    expect(ht.size()).toBe(1);
    ht.set("a", "apple");
    expect(ht.get("a")).toBe("apple");
    expect(ht.size()).toBe(1);
  });

  test("should return keys", () => {
    ht.set("a", "apple");
    ht.set("b", "banana");
    expect(ht.keys()).toEqual(["a", "b"]);
  });

  test("should return values", () => {
    ht.set("a", "apple");
    ht.set("b", "banana");
    expect(ht.values()).toEqual(["apple", "banana"]);
  });

  test("should return true if contains key, and false otherwise", () => {
    ht.set("a", "apple");
    expect(ht.containsKey("a")).toBeTruthy();
    expect(ht.containsKey("b")).toBeFalsy();
  });

  test("should return true if hash table is empty", () => {
    expect(ht.isEmpty()).toBeTruthy();
    ht.set("a", "apple");
    expect(ht.isEmpty()).toBeFalsy();
  });

  test("should return current hash table size", () => {
    expect(ht.size()).toBe(0);
    ht.set("a", "apple");
    ht.set("b", "banana");
    expect(ht.size()).toBe(2);
  });

  test("should return value associated with key", () => {
    ht.set("a", "apple");
    expect(ht.get("a")).toBe("apple");
  });

  test("should return null when get with a key does not exist", () => {
    expect(ht.get("a")).toBe(null);
  });

  test("should delete entry associated with key, and return old value", () => {
    ht.set("a", "apple");
    expect(ht.isEmpty()).toBeFalsy();
    expect(ht.delete("a")).toBe("apple");
    expect(ht.isEmpty()).toBeTruthy();
  });

  test("should return null when delete with a key that does not exist", () => {
    expect(ht.delete("a")).toBe(null);
  });

  test("should clear hash table", () => {
    ht.set("a", "apple");
    ht.set("b", "banana");
    expect(ht.size()).toBe(2);
    ht.clear();
    expect(ht.isEmpty()).toBeTruthy();
    expect(ht.get("a")).toBe(null);
  });

  test("should display hash table structure", () => {
    const logSpy = vi.spyOn(console, "log");
    ht.set("a", "apple");
    ht.set("b", "banana");
    ht.set("c", "cherry");
    ht.set("f", "fig");
    ht.display();
    expect(logSpy).toHaveBeenCalledOnce();
  });
});
