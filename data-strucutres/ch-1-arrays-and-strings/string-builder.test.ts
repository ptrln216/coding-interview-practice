import { describe, test, expect, beforeEach } from "vitest";
import { StringBuilder } from "./string-builder";

describe("StringBuilder", () => {
  let sb: StringBuilder;

  beforeEach(() => {
    sb = new StringBuilder();
  });

  test("should be empty when initialized by default", () => {
    expect(sb.length()).toBe(0);
  });

  test("should initialized with custom value", () => {
    const custom = new StringBuilder("hello");
    expect(custom.length()).toBe(5);
    expect(custom.toString()).toBe("hello");
  });

  test("should append string", () => {
    sb.append("hello");
    expect(sb.length()).toBe(5);
    expect(sb.toString()).toBe("hello");
  });

  test("should insert string at index", () => {
    sb.append("hello").insert(4, " n");
    expect(sb.toString()).toBe("hell no");
    expect(sb.length()).toBe(7);
  });

  test("should throw error when insert at out-of-bounds index", () => {
    expect(() => sb.insert(0, "hello")).toThrow("IndexOutOfBoundsException");
  });

  test("should replace string", () => {
    sb.append("hello sad world").replace(6, 9, "happy");
    expect(sb.toString()).toBe("hello happy world");
    expect(sb.length()).toBe(17);
  });

  test("should throw error when replace interval is invalid", () => {
    expect(() => sb.replace(-1, 3, "Hey")).toThrow("Invalid Range");
    expect(() => sb.append("hello world").replace(4, 3, "n")).toThrow(
      "Invalid Range"
    );
  });

  test("should delete string", () => {
    sb.append("hello old world").delete(5, 9);
    expect(sb.toString()).toBe("hello world");
    expect(sb.length()).toBe(11);
  });

  test("should throw error when delete interval is invalid", () => {
    expect(() => sb.delete(0, 0)).toThrow("Invalid Range");
  });

  test("should reverse", () => {
    sb.append("Hello").reverse();
    expect(sb.toString()).toBe("olleH");
    expect(sb.length()).toBe(5);
  });

  test("should clear string", () => {
    sb.append("hello world").clear();
    expect(sb.toString()).toBe("");
    expect(sb.length()).toBe(0);
  });

  test("should return length", () => {
    expect(sb.length()).toBe(0);
    sb.append("1");
    expect(sb.length()).toBe(1);
  });

  test("should convert to string value", () => {
    sb.append("Good night");
    expect(sb.toString()).toBe("Good night");
  });
});
