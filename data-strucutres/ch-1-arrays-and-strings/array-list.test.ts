import { describe, test, beforeEach, expect } from "vitest";
import { ArrayList } from "./array-list";

describe("ArrayList", () => {
  let list: ArrayList<number>;

  beforeEach(() => {
    list = new ArrayList<number>();
  });

  test("should initialize with default capacity", () => {
    expect(list.size()).toBe(0);
    expect(list.capacity()).toBe(ArrayList.DEFAULT_CAPACITY);
  });

  test("should initialize with custom capacity", () => {
    const customList = new ArrayList(20);
    expect(customList.capacity()).toBe(20);
  });

  test("should throw error when initialized with negative capacity", () => {
    expect(() => new ArrayList(-1)).toThrow("IllegalArgumentException");
  });

  test("should add elements", () => {
    list.add(10);
    list.add(20);
    expect(list.size()).toBe(2);
    expect(list.get(0)).toBe(10);
    expect(list.get(1)).toBe(20);
  });

  test("should add elements at index", () => {
    list.add(10);
    list.add(30);
    list.addToIndex(1, 20);
    expect(list.get(1)).toBe(20);
  });

  test("should throw error when adding element at out-of-bounds index", () => {
    expect(() => list.addToIndex(-1, 10)).toThrow(
      "ArrayIndexOutOfBoundsException"
    );
  });

  test("should get elements", () => {
    list.add(10);
    list.add(20);
    expect(list.get(0)).toBe(10);
    expect(list.get(1)).toBe(20);
  });

  test("should throw error when getting element at out-of-bounds index", () => {
    expect(() => list.get(0)).toThrow("ArrayIndexOutOfBoundsException");
  });

  test("should set elements", () => {
    list.add(10);
    const oldValue = list.set(0, 100);
    expect(oldValue).toBe(10);
    expect(list.get(0)).toBe(100);
  });

  test("should throw error when setting element at out-of-bounds index", () => {
    list.add(10);
    expect(() => list.set(1, 100)).toThrow("ArrayIndexOutOfBoundsException");
  });

  test("should remove element by index", () => {
    list.add(10);
    list.add(20);
    const removed = list.remove(0);
    expect(removed).toBe(10);
    expect(list.size()).toBe(1);
    expect(list.get(0)).toBe(20);
  });

  test("should throw error when removing element at out-of-bounds index", () => {
    expect(() => list.remove(0)).toThrow("ArrayIndexOutOfBoundsException");
  });

  test("should remove element by value", () => {
    list.add(10);
    list.add(20);
    list.add(10);
    expect(list.findAndRemove(10)).toBe(true);
    expect(list.size()).toBe(2);
    expect(list.get(1)).toBe(10);
    expect(list.findAndRemove(30)).toBe(false);
  });

  test("should trim to size", () => {
    list.add(10);
    expect(list.capacity()).toBe(ArrayList.DEFAULT_CAPACITY);
    expect(list.size()).toBe(1);
    list.trimToSize();
    expect(list.capacity()).toBe(list.size());
  });

  test("should expand capacity when needed", () => {
    for (let i = 0; i < list.capacity(); ++i) {
      list.add(i);
    }
    expect(list.size()).toBe(list.capacity());
    list.add(11);
    expect(list.size()).toBe(11);
    expect(list.capacity()).toBeGreaterThanOrEqual(list.size());
  });

  test("should return capacity", () => {
    expect(list.capacity()).toBe(ArrayList.DEFAULT_CAPACITY);
  });

  test("should return size", () => {
    expect(list.size()).toBe(0);
    list.add(1);
    expect(list.size()).toBe(1);
  });

  test("should return correct empty state", () => {
    expect(list.isEmpty()).toBe(true);
    list.add(1);
    expect(list.isEmpty()).toBe(false);
    list.remove(0);
    expect(list.isEmpty()).toBe(true);
  });

  test("should check whether array contains element", () => {
    expect(list.contains(1)).toBe(false);
    list.add(1);
    expect(list.contains(1)).toBe(true);
  });

  test("should return indexOf", () => {
    list.add(10);
    list.add(20);
    expect(list.indexOf(10)).toBe(0);
    expect(list.indexOf(20)).toBe(1);
    expect(list.indexOf(30)).toBe(-1);
  });

  test("should return lastIndexOf", () => {
    list.add(10);
    list.add(20);
    list.add(10);
    expect(list.lastIndexOf(10)).toBe(2);
    expect(list.lastIndexOf(20)).toBe(1);
    expect(list.lastIndexOf(30)).toBe(-1);
  });

  test("should clear array", () => {
    expect(list.capacity()).toBe(ArrayList.DEFAULT_CAPACITY);
    for (let i = 0; i < 15; ++i) {
      list.add(i);
    }
    expect(list.size()).toBe(15);
    expect(list.capacity()).toBeGreaterThanOrEqual(ArrayList.DEFAULT_CAPACITY);
    list.clear();
    expect(list.size()).toBe(0);
    expect(list.capacity()).toBeGreaterThanOrEqual(15);
    expect(list.isEmpty()).toBe(true);
  });

  test("should convert to array", () => {
    list.add(10);
    list.add(20);
    expect(list.toArray()).toEqual([10, 20]);
  });

  test("should clone array", () => {
    list.add(10);
    list.add(20);
    const cloned = list.clone();
    expect(cloned.size()).toBe(2);
    expect(cloned.get(0)).toBe(10);
    expect(cloned.get(1)).toBe(20);
  });

  test("should iterate over elements", () => {
    list.add(10);
    list.add(20);
    list.add(30);
    const result: number[] = [];
    for (const item of list.iterator()) {
      result.push(item);
    }
    expect(result).toEqual([10, 20, 30]);
  });
});
